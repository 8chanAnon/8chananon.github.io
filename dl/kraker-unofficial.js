/*
Local Proxy Server for Alleycat Player

Improvements from version 1c to version 2a (June 29, 2020):

- handle double-slash at start of "location" response header
- handle rare case where "?" immediately follows host name without a slash
- do not strip byte-range headers in non-passthrough mode (problem with seeking on mp4 videos)
- handle socket disconnection error (ECONNRESET) in default_handler (crash issue)
- handle ".well-known/http-opportunistic" request coming from Firefox for 123tvnow.com streams
- delete request headers "origin" and "referer" if set to blank
- complete rewrite of local GET and PUT; security model via _aliases.txt

Improvements from version 2a to version 2b (March 11, 2021):

- added gzip decompression for m3u8 handler
- added ability to replace response headers (indicated with "!")
- added crash check in case SSL files are missing
- added Socks5 proxy server for DNS and TOR support

Improvements from version 2b to version 2c (April 8, 2021):

- updated init_settings to not invoke DNS "default" on reload
- updated proxy_handler to correctly destroy sockets (memory leak)
- added reporting system to track socket disposition
- added dns_lookup in http_handler and proxy_handler

Improvements from version 2c to version 3a (May 8, 2021):

- updated dns_lookup to report timing and IP address
- updated dns_lookup to handle four simultaneous lookups
- updated http_handler to destroy network connection (memory leak)
- added special cases "LOCAL" and "0.0.0.0"
- added DNS over HTTPS (JSON format only)

Improvements from version 3a to version 3b (November 19, 2021):

- modified options_proc to look for non-blank "access-control-request-method"
- tor4all corrected to exclude LOCAL or 0.0.0.0
- removed request.on callback in http_handler due to incompatibility with Node.js v16

Improvements from version 3b to version 4a (May 15, 2022):

- HTTP (8080) and HTTPS (8081) merged via http_handler
- added HTTP support on 8088 ("CONNECT" method for SSL)
- connections through 8080/8081 are now routed to 8088
- added restart command for HTTPS server
- added shadow ports and cookie stealer
- added "vpx" and "timeout" parameters
- added support for i2p and IPFS
- DoH routed through port 8080 for socket reuse
- updated dns_resolve to handle wildcard domains
- updated add_resolver to support VPN/TOR IP groups (example: TOR+group)

Improvements from version 4a to version 4b (June 13, 2022):

- rebuilt connection procedure in http_handler
- new "timeout" spec: negative for connect, positive for idle

Improvements from version 4b to version 4c (August 4, 2022):

- added security for "reload" command to only allow declared file names
- convert double vertical bar to %7C in url command string (extremely unusual case)
- support URI encoding for vpn/vpx username/password
- header values are URI decoded only if prepended with "!"
- change some headers to camel case to bypass bot detectors (Cloudflare)
- added option to auto-delete shadow port with shadow secret
- tor4all flag works for VPN (if one is specified)
- prevent invalid "server fail" status message in proxy_handler
  (when incoming socket is closed while outgoing socket is connecting)
- do not drop down to OS for DNS resolution in case of error (security risk)
  (only ".localhost" or dotless domains are permitted to be resolved by OS)
- initialize DNS resolver with more reasonable timeouts
- display literal error codes for DoH resolver
- added FETCH option (blank ip list ignored); ability to delete SHD 
- revised the "reload" and "activate" commands
- localhost:8081 no longer redirects to localhost:8080
- replaced unsafe decodeURIComponent with safe_decode
- fixed ECONNRESET unhandled exception for DoH (update: not fixed)

Improvements from version 4c to version 4d (August 22, 2022):

- do not auto-respond to OPTIONS request for shadow port
- changed access-control-allow-origin handling to work with cookies (shadow port only)
- added error handler for when a socket is idle (source of ECONNRESET exception for DoH)
- changed response._header in default_handler to response.headersSent

Improvements from version 4d to version 4e (November 9, 2022):

- added authorization check with !key parameter to prevent cookie abuse
- added $$$ keyword for domain shortcut on shadow ports
- added ability to GET file list from local directory
- convert string to buffer to ensure correct content length in responses
- allow localhost shadow for tweak_m3u8 and handle_boot_dash
- for localhost and localhost shadow: remove "set-cookie" response header
- allow auto-response to OPTIONS request for localhost shadow
- added file view listing for shadow ports (with shadow secret)
- added error handler for uncaughtException with crash log (_crashlog.txt)
- allow ** accept header to contain mime type (like **text/html**)
- upgraded local_link to support directory paths in _aliases.txt
- added caching policy with HTTP "last-modified" and "if-modified-since"
- added Dns.lookup to dns_master for LOCAL domains (Node.js 18 defaults to IPv6)
- all references to localhost are replaced with or resolve to proxy_addr
- allow tilde instead of vertical bar in header string (due to Chrome browsers)
- fixed online shadow setup to allow @ in parameter string

Improvements from version 4e to version 5a (not released):

- support shadow fork in "location" header (ex: http://localhost:8080/$proxy$)
- revised some rules for shadow ports and shadow forks
- changed "local" in http_handler to a bit field
- updated local_link to catch some unsafe directory paths
- updated PUT to support "range" and truncation (++ mode)
- added get_head (HEAD method) for file stats
- "server" renamed to "iplist" (original name was unhelpful)
- improved http_handler by splitting off the query string
- added safe_numero for safe conversion from string (port number)
- added filter for header names (allowed specials: - + _ . ! ~ * $ & %)
- fixed get_file and get_head to prevent crash on restricted directories
- fixed issue with curl not connecting to socks5
- added secureContext and mock mode (1-2-3-A-1A-2A-3A)
- updated dns_servers to allow DoH and DNS in same setting
- changed dns_resolve to flag dotless domains as 0.0.0.0 instead of LOCAL
- allow "+" or "," as separator in "restart" and "activate" commands
- fixed dns_resolve so "VPN" w/o vpn_host resolves to ":vpn:" and not ":vpn"
- added mechanism for probing the socks5 port
- added support for websocket in http_handler
- added "@" option to shadow_host for shadowing full path
- added "/" option to shadow port for deleting original path
- added "?" option to shadow port for replacing query string
- removed "+" option to shadow port due to security risk (can use an alias)
- added function:shadow_port to cover subdomains (example: .google.com)
- added websocket server for progress reporting and testing
- added "!" option for removing non-critical request headers
- added implied VPX option (settings file)
- added support for Kraker Mockery
- IMPORTANT
  removed variable declaration assignment chains everywhere
  (some vars were ending up in the "global" context - BAD!!!)
  (I spotted this earlier but was not aware of the full extent of the problem)
  (references to "this" also removed because that was fuckin' stupid)

*/

const fs    = require ('fs');
const http  = require ('http');
const https = require ('https');
const zlib  = require ('zlib');
const crypt = require ('crypto');

const Dns   = require ('dns');
const net   = require ('net');
const tls   = require ('tls');
const dns   = new Dns.Resolver ({ timeout: 7500, tries: 2 });
// DNS timeout works only with Node 16.0.0 and up (maybe Windows-only issue)

process.on ("uncaughtException", function (error, origin)
{
  console.log (error.stack);
  fs.writeFile ("_crashlog.txt", error.stack, function() { process.exit (1); });
});

var proxy_name = "Kraker-5a", proxy_addr = "127.0.0.1";

var aliases = "_aliases.txt", settings = "_settings.txt";    // do not use uppercase

var http_port = 8080, https_port = 8081, socks_port = 8088, ipfs_port = 8089;
var tor1_port = 9050,  tor2_port = 9150,   i2p_port = 4444;

var reqcount = 0, passthru = 0, last_time = 0, last_pass = "", local_files = [0,""], socklist = [];

var mime_list = {
  txt: "text/plain", htm: "text/html", html: "text/html",
  css: "text/css", js: "application/javascript", json: "application/json",
  gif: "image/gif", jpeg: "image/jpeg", jpg: "image/jpeg", png: "image/png", webp: "image/webp",
  mpd: "application/dash+xml", m3u: "application/x-mpegurl", m3u8: "application/x-mpegurl",
  mp3: "audio/mpeg", mp4: "video/mp4", webm: "video/webm", ts: "video/mp2t"
};

var camel_case = [
  'host', "Host", 'user-agent', "User-Agent", 'accept', "Accept",
  'accept-language', "Accept-Language", 'accept-encoding', "Accept-Encoding",
  'connection', "Connection", 'content-type', "", 'content-length', "", 'range', ""
];

net.createServer (proxy_handler).listen (socks_port);
var http_server, https_server; start_servers ("", "");

var sockmon, program = {}, keepheaders = { Headers: 'none' };

var profile_count = 0, proxy_flags = 0, dns_reset, dns_time, dns_count = 0;
var sockets_count = 9, sockets_open = 0, profile = [], iplist = [], dnslist = [];

var doh_address, doh_host, doh_path, vpn_host, vpn_port, vpn_name, vpn_pass;
doh_address = doh_host = doh_path = vpn_host = vpn_port = vpn_name = vpn_pass = "";

var setnames = "", shadow_secret = "", shadow_host = {'shadow:80': "", 'shadow:443': "$"};

console.log ("=-----------------------------------------------------------------------------=");
console.log (" Kraker (version 5a) Local Proxy Server - waiting on port " + http_port + ", ctrl-C to exit ");
console.log ("=-----------------------------------------------------------------------------=");

console.log (">> Commands list: activate, dnslookup, flags, reload, servers");
console.log (">> " + init_settings (settings) + " (" + settings + ")");

// For Cloudflare TLS fingerprinting. See note at end of file.

const SSL_OP_ALL = crypt.constants.SSL_OP_ALL;  // contains bugfix flags
const SSL_OP_NO_ENCRYPT_THEN_MAC = 1 << 19;     // disables "encrypt_then_mac" extension
const SSL_OP_TLSEXT_PADDING = 1 << 4;           // padding extension (enabled by SSL_OP_ALL)

const secureContext = tls.createSecureContext
({
  secureOptions: SSL_OP_NO_ENCRYPT_THEN_MAC | SSL_OP_ALL,
  ecdhCurve: [ 'X25519', 'prime256v1', 'secp384r1', 'secp521r1' ].join (':'),

  ciphers: [
    'TLS_AES_128_GCM_SHA256',
    'TLS_CHACHA20_POLY1305_SHA256',
    'TLS_AES_256_GCM_SHA384',
    'ECDHE-ECDSA-AES128-GCM-SHA256',
    'ECDHE-RSA-AES128-GCM-SHA256',
    'ECDHE-ECDSA-CHACHA20-POLY1305',
    'ECDHE-RSA-CHACHA20-POLY1305',
    'ECDHE-ECDSA-AES256-GCM-SHA384',
    'ECDHE-RSA-AES256-GCM-SHA384',
    'ECDHE-ECDSA-AES256-SHA',
    'ECDHE-ECDSA-AES128-SHA',
    'ECDHE-RSA-AES128-SHA',
    'ECDHE-RSA-AES256-SHA',
    'AES128-GCM-SHA256',
    'AES256-GCM-SHA384',
    'AES128-SHA',
    'AES256-SHA' ].join (":"),

  sigalgs: [
    'ecdsa_secp256r1_sha256',
    'ecdsa_secp384r1_sha384',
    'ecdsa_secp521r1_sha512',
    'rsa_pss_rsae_sha256',
    'rsa_pss_rsae_sha384',
    'rsa_pss_rsae_sha512',
    'rsa_pkcs1_sha256',
    'rsa_pkcs1_sha384',
    'rsa_pkcs1_sha512',
    'ECDSA+SHA1',      // for some reason, 'ecdsa_sha1' doesn't work
    'rsa_pkcs1_sha1' ].join (':')

// this context mimics Firefox 103 on Node versions 12.11.0 to 16.x.x
// Node versions earlier than 12.11.0 do not support the sigalgs option
// ecdsa_sha1 & rsa_pkcs1_sha1 are deprecated on OpenSSL 3.0 (Node 17.0.0)
});

///// End of Setup /////

///////////////////////////////////
///// function: start_servers /////
///////////////////////////////////

function start_servers (keyfile, crtfile)
{
  if (!keyfile) keyfile = "_https_key.pem";
  if (!crtfile) crtfile = "_https_crt.pem";

  var ssl_key = ""; try { ssl_key = fs.readFileSync (keyfile); } catch(e) {};
  var ssl_crt = ""; try { ssl_crt = fs.readFileSync (crtfile); } catch(e) {};

  // connectionsCheckingInterval is new to Node 18 (poorly documented)
  // it sets an idle timeout (default: 30000, 0 does not disable)
  // this is a problem for websockets

  var options = {
    key: ssl_key, cert: ssl_crt, handshakeTimeout: 5000, connectionsCheckingInterval: 86400000
  }

  https_server = https.createServer (options, http_handler).listen (https_port);
  if (!http_server) http_server = http.createServer (options, http_handler).listen (http_port);

  http_server.timeout = https_server.timeout = 0;
  http_server.requestTimeout = https_server.requestTimeout = 0;
  http_server.headersTimeout = https_server.headersTimeout = 5000;
  http_server.keepAliveTimeout = https_server.keepAliveTimeout = 0;
}

///////////////////////////////////
///// function: init_settings /////
///////////////////////////////////

function init_settings (name)
{
  var i, j, k, data, sub, msg = "Settings file: ";

  if (!name || name.search ("[:/]") >= 0) return (msg + "INVALID NAME");
  data = fs.existsSync (name) ? fs.readFileSync (name, "utf8") : "";
  if (!data) return (msg + "NOT FOUND");

  if ((i = data.indexOf ("$end$")) >= 0) data = data.substr (0, i);

  if (name == settings)
  {
    sub = data.match (/\$shadow_secret=([^$]*)/); shadow_secret = sub ? sub [1] : "";
    sub = data.match (/\$settings=([^$]*)/); setnames = sub ? "|" + sub [1] + "|" : ""; 
  }
  else if (!setnames.includes ("|" + name + "|")) return (msg + "NOT ALLOWED");

  profile = []; iplist = [];

  for (i = k = 0; (j = data.indexOf ("[", i) + 1) > 0; i = j)
  {
    if (j < k) return (msg + "ERROR"); k = data.indexOf ("]", j);
    sub = data.substr (j, k - j); if (sub.search ("[#?+@]")) continue;
    profile.push (sub.replace (/\s+/gm, " ").replace (/\s?\|\s?/g, "|").trimEnd());
  }

  if (!profile_count || data.includes ("$fmodify=1$"))
  {
    proxy_flags = 0;
    if (data.includes ("$console=1$")) proxy_flags |= 1;
    if (data.includes ("$altport=1$")) proxy_flags |= 2;
    if (data.includes ("$tor4all=1$")) proxy_flags |= 4;
    if (data.includes ("$showdns=1$")) proxy_flags |= 16;
  }

  if (!profile_count++)
  {
    dns_servers ("default"); add_resolver (""); init_servers();
  }
  return (msg + "parsed and loaded");
}

//////////////////////////////////
///// function: add_resolver /////
//////////////////////////////////

function add_resolver (name)
{
  var i, j, k, n, p, q, r, s, data, sub;

  for (i = 0; i < profile.length; i++)
  {
    data = profile [i].split (" "); if (!(sub = data [1])) continue;

    if (data [0] != "?" + name)
    {
      if (data [0] == "@" + name)  // shadow path
      {
        p = "@" + sub; if (p.substr (-1) != "/") p += "/";
        if (q = data [2]) shadow_host [p] = q; else delete shadow_host [p];
      }
      continue;
    }

    if ((n = sub.indexOf ("@")) >= 0)  // alternate SHD syntax
    {
      s = sub.substr (n + 1); sub = sub.substr (0, n); data = ["", "", "SHD:" + s];
    }

    for (sub = sub.split ("|"), j = 0; j < sub.length; j++) if (p = sub [j])
    {
      if (data.length < 3) q = ""; else
      {
        r = ""; q = data [Math.trunc (Math.random() * (data.length - 2)) + 2];
        n = q.indexOf ("+"); if (n >= 0 && n < 4) r = q.substr (n) + " ";

        if (r) for (k = 0; k < profile.length; k++) if (!profile [k].indexOf (r))
        {
          s = (profile [k]).split (" "); if (s.length < 2) continue;
          r = s [Math.trunc (Math.random() * (s.length - 1)) + 1];
          q = (n ? q.substr (0, n) + ":" : "") + r; break;
        }
      }

      s = ""; r = (q.length < 4 || q[3] == ":") ? q.substr (0,3) : "";

      if (r == "SHD")
      {
        if (r == q) { delete shadow_host [p]; continue; }
        if (p [0] == "$") { s += "$"; p = p.substr (1); }
        if (p [0] == "/") { s += "/"; p = p.substr (1); }
        if (p [0] == "~") { s += "~"; p = p.substr (1); }

        r = ""; q = q.substr (4); n = q.indexOf ("?");
        if (n >= 0) { r = q.substr (n); q = q.substr (0, n); }
        s += q.substr (n = q [0] != "@" ? 0 : q.indexOf ("@", 1) + 1);
        if (!p.includes (":")) p += s [0] == "$" ? ":443" : ":80";
        if (s.substr (-1) == "/") s = s.substr (0, s.length - 1);
        shadow_host [p] = q.substr (0, n) + s + r; continue;
      }

      if (iplist.includes (p)) for (k = 0; k < iplist.length; k += 2)
        if (p == iplist [k]) { profile_count++; iplist.splice (k, 2); break; }

      if (r == "TOR" || r == "VPN")
      {
        r = q.substr (4); if (r && !net.isIP (r)) continue;
      }
      else if (q == "FETCH") q = ""; else if (q.includes (":"))
      {
        r = q.split (":"); q = r [0] ? "" : ":";
        if (q) s = r.splice (0,2)[1]; r = r.join (" ").trim();
        q = "VPX" + q + s + " " + r; if (s && !net.isIP (s)) continue;
      }
      else if (q != "LOCAL" && !net.isIP (q)) continue;

      iplist.push (p); iplist.push (q);
    }
  }
}

//////////////////////////////////
///// function: init_servers /////
//////////////////////////////////

function init_servers ()
{
  var i, j = 0, k = 0;

  for (i = 1; i < iplist.length; i += 2) { j++; if (!iplist [i]) k++; }
  for (i = 0; i < iplist.length; i += 2) init_lookup (i, profile_count);

  return ("Resolvers: " + j + " (Pre-fetching: " + k + ")");
}

function init_lookup (num, count)
{
  var name = iplist [num], ip = iplist [num + 1];

  if (ip) return; else if (dns_count < 4) dns_count++; else
  {
    setTimeout (function() { init_lookup (num, count); }, 150); return;
  }

  dns_master (name, false, function (err, ip, ttl)
  {
    if (err) err = name; else
    {
      if (count != profile_count) ip = "CANCEL"; else iplist [num + 1] = ip;
      err = name + " - " + ip + " (" + ttl + "s)";
    }
    console.log ("<< " + (doh_address ? "DoH: " : "DNS: ") + err); dns_count--;
  });
}

/////////////////////////////////
///// function: dns_servers /////
/////////////////////////////////

function dns_servers (name)
{
  var n, s, t; if (dns_count && name) return ([]);

  if (name) doh_address = ""; if (!dns_reset) dns_reset = dns.getServers();

  if (name == "reset") dns.setServers (dns_reset); else if (name)
    for (n = 0, s = "#" + name + " "; n < profile.length; n++)
    {
      t = profile [n]; if (t.indexOf (s)) continue;
      s = t.substr (s.length); s = s.split (" ");

      if (s.length > 1 && s[1].includes ("/") && net.isIP (s[0]))
      {
        doh_address = s[0]; t = s[1].split ("/"); s.splice (0, 2);
        doh_host = t[0]; doh_path = "/" + t[1] + "?type=A&name=";
      }
      name = ""; if (s.length) try { dns.setServers (s); } catch(e) {}; break;
    }

  if (name == "default") dns.setServers (dns_reset); return (dns.getServers());
}

/////////////////////////////////
///// function: dns_resolve /////
/////////////////////////////////

function dns_resolve (name, vpx)
{
  var m, n, p, ip = "";

  for (n = 0; n < iplist.length; n += 2)
  {
    if ((p = iplist [n]) [0] == ".")
    {
      m = name.lastIndexOf (p);
      p = (m < 0 || m + p.length != name.length) ? p.substr (1) : name;
    }
    if (p == name) { ip = iplist [n + 1]; break; }
  }

  if (!ip)
  {
    n = name.lastIndexOf ("."); p = name.substr (n + 1);
    if (p == "localhost" || name == proxy_addr) return (proxy_addr);
    if (n < 0) return ("0.0.0.0");

    if (p == "onion") ip = "TOR";
    if (p == "loki")  ip = "LOCAL";
    if (p == "snode") ip = "LOCAL";
    if (p == "i2p")   ip = "VPX:I2P";
  }
  else if (ip == proxy_addr) return (ip);

  if ((n = ip.indexOf (" ")) < 0) m = ""; else  // version 5a
  {
    m = vpx ? "" : ip.substr (n); ip = ip.substr (0, n);
  }

  if ((p = ip.substr (0,3)) == "TOR" || p == "VPN" || p == "VPX")
    ip = ":" + ip; else if (ip == "LOCAL" || ip == "0.0.0.0") vpx = false; else
      if (proxy_flags & 4) ip = (vpn_host ? ":VPN" : ":TOR") + (ip ? ":" + ip : "");

  if (vpx) ip = ":VPX" + (ip [0] == ":" ? ip.substr (4) : (ip ? ":" + ip : "")); else
    if (!vpn_host && p == "VPN") ip = ":vpn:" + ip.substr (5);  // version 5a fix

  return (ip ? ip + m : name);
}

////////////////////////////////
///// function: dns_lookup /////
////////////////////////////////

function dns_lookup (addr, host, func)
{
  var m, n, s, t, p = addr, q = host, is_local = p == "LOCAL";

  if (!is_local)
  {
    if (p [0] == ":" && p.length != 5) { p = p.substr (5) || q; q = ""; }
    if (!q || net.isIP (p) || net.isIP (p = q)) { func (p); return; }
  }

  if (!dns_count)
  {
    dns_time = Math.trunc (Date.now() / 1000);
    if (dnslist.length > 300) dnslist.splice (0, 20);
  }

  for (n = dnslist.length - 2; n >= 0; n -= 2) if (q == dnslist [n])
  {
    p = dnslist [n + 1].split (" ");
    q = p [0]; t = dns_time - (dns_count ? 300 : 0);
    if (p [1] * 1 < t) break; else { func (q); return; }
  }

  if (!q || dns_count > 3)
  {
    setTimeout (function() { dns_lookup (addr, host, func); }, 150); return;
  }

  if (q == host) q = "0.0.0.0";  // version 4c security fix

  dns_count++; dnslist.push (host); dnslist.push (" ");
  n = dnslist.length - 1; p = Date.now();

  dns_master (host, is_local, function (err, ip, ttl)
  {
    t = Date.now(); if ((p = t - p) < 15) p = 15; t = Math.trunc (t / 1000);
    s = "<< " + (is_local ? "LOC" : (doh_address ? "DoH" : "DNS")) + ": ";
    if (err) m = err; else { m = q = ip; host += " (" + ttl + "s)"; }

    if (err || proxy_flags & 17) console.log (s + p + "ms - " + m + " - " + host);
    dnslist [n] = q + " " + (t + (err ? 5 : 300)); func (q); dns_count--;
  });
}

////////////////////////////////
///// function: dns_master /////
////////////////////////////////

function dns_master (name, is_local, func)
{
  if (is_local)
  {
    Dns.lookup (name, {family: 4}, function (err, addr, family)
    {
      if (err) func (err.code); else
        if (!addr) func ("BLANK"); else func ("", addr, 0);
    });
    return;
  }

  if (!doh_address)
  {
    dns.resolve4 (name, { ttl:true }, function (err, list)
    {
      if (err) func (err.code); else
        if (!list.length) func ("BLANK"); else func ("", list[0].address, list[0].ttl);
    });
    return;
  }

  var ans = "", i = 0, j = 0, k = 0;

  var options = {
    hostname: proxy_addr, port: http_port, path: 'https://' + doh_host + doh_path + name,
    headers: { host: '@' + doh_address, accept: 'application/dns-json', connection: 'keep-alive' }
  }

  var doh = http.get (options, function (res)
  {
    res.on ("data", function (d)
    {
      if (ans.length < 10000) ans += d.toString();
    });

    res.on ("end", function ()
    {
      try {
        ans = JSON.parse (ans); k = ans.Status; ans = ans.Answer;
        if (k == undefined) k = 1; if (k == 0) i = ans.length; } catch(e) {}

      for (; i > 0; i--) if (ans[i-1].type == 1)
      {
        ans = ans[i-1]; i = ans.data; if (!(j = ans.TTL)) j = 0; break;
      }

      if (i) func ("", i, j); else
      {
        ans = ["ENODATA", "EFORMERR", "ESERVFAIL", "ENOTFOUND"];
        func (k < 0 || k > 3 ? "ERROR (" + k + ")" : ans [k]);
      }
    });
  });

  doh.on ("error", function (err) { func (err.code); });
}

/////////////////////////////////////
///// function: default_handler /////
/////////////////////////////////////

function default_handler (response, error, local)
{
  var msg, err_msg, header = {}; if (response.headersSent) return;

  msg = "--------------------\n" +
        " Local Proxy Server \n" +
        "--------------------\n\n" +
        "Version Name: " + proxy_name + " [not released]\n\n" +
        "HTTP at " + http_port + ", HTTPS at " + https_port + "\n" +
        "Socks5 Tunnel Proxy at " + socks_port + "\n\n" +
        "NODEJS " + process.version + "\n";

  if (error != 200)
  {
    msg = "--Service Not Available--";
    if (error == 777) msg = " Local Request: Error";
    if (error == 888) msg = " Local Request: Invalid";
    if (error == 999) msg = "--Invalid Request--";
    if (local & 1) console.log (msg); msg = "";
  }

  if (error == 200) err_msg = "OK";
  if (error != 200) err_msg = "Deep State";
  if (error == 666) err_msg = "Illuminati";
  if (error == 999) err_msg = "Think Mirror";

  header ["keep-alive"] = "timeout=5";
  header ["zz-proxy-server"] = proxy_name;
  header ["access-control-allow-origin"] = "*";
  header ["access-control-allow-headers"] = "*";
  header ["access-control-expose-headers"] = "*";
  header ["accept-ranges"] = "bytes";

  header ["content-type"] = "text/plain";
  header ["content-length"] = (msg = Buffer.from (msg)).length;

  response.writeHead (error, err_msg, header); response.end (msg);
}

///////////////////////////////
///// function: proc_done /////
///////////////////////////////

function proc_done (response, data, mime, local)
{
  var header = {};

  header ["keep-alive"] = "timeout=5";
  header ["zz-proxy-server"] = proxy_name;
  header ["access-control-allow-origin"] = "*";
  header ["access-control-allow-headers"] = "*";
  header ["access-control-expose-headers"] = "*";
  header ["accept-ranges"] = "bytes";

  if (typeof (local) == "string")
  {
    header ["access-control-allow-credentials"] = "true";
    header ["access-control-allow-origin"] = local; local = 0;
  }

  var msg = "OK"; if (mime) header ["content-type"] = mime;
  if (mime) header ["x-content-type-options"] = "nosniff";

  if (typeof (data) != "object")
  {
    if (local & 1) console.log (" Local Request: " + msg);
    header ["content-length"] = (data = Buffer.from (data)).length;
    response.writeHead (200, msg, header);
    response.end (data); return;
  }

  var size = data[0], start = data[1], end = data[2];
  if (data [3]) header ["last-modified"] = data [3];
  header ["content-length"] = end - start + 1;

  if (size > 0)
  {
    header ["content-range"] = "bytes " + start + "-" + end + "/" + size;
    msg = "Partial Content"; response.writeHead (206, msg, header);
  }
  else if (size < 0) response.writeHead (200, msg, header); else
  {
    msg = "Not Modified"; response.writeHead (304, msg, header);
  }
  if (local & 1) console.log (" Local Request: " + msg);
}

//////////////////////////////////
///// function: options_proc /////
//////////////////////////////////

function options_proc (request, response)
{
  var header = {};

  header ["keep-alive"] = "timeout=5";
  header ["zz-proxy-server"] = proxy_name;
  header ["access-control-allow-origin"] = "*";
  header ["access-control-max-age"] = "30";
  header ["accept-ranges"] = "bytes";
  header ["content-length"] = "0";

  var headers = request.headers ["access-control-request-headers"];
  var methods = request.headers ["access-control-request-method"];
  if (headers) header ["access-control-allow-headers"] = headers;
  if (methods) header ["access-control-allow-methods"] = methods;

  response.writeHead (200, "OK", header); response.end ("");
}

/////////////////////////////////
///// function: shadow_port /////
/////////////////////////////////

function shadow_port (name)
{
  var n, s = shadow_host [name]; if (s != undefined) return (s);
  name = name.split ("."); if ((n = name.length) < 2) return (s);
  return (shadow_host ["." + name [n - 2] + "." + name [n - 1]]);
}

/////////////////////////////////
///// function: safe_numero /////
/////////////////////////////////

function safe_numero (str)
{
  var p = parseInt (str) || 0; return ((p < 0 || p > 65535) ? 0 : p);
}

/////////////////////////////////
///// function: safe_decode /////
/////////////////////////////////

function safe_decode (uri)
{
  if (typeof (uri) != "string") return "";
  try { uri = decodeURIComponent (uri); } catch(e) {}; return (uri);
}

///////////////////////////////
///// function: mime_type /////
///////////////////////////////

function mime_type (url)
{
  var n = url.lastIndexOf (".");
  url = url.substr (n + 1).toLowerCase();
  return ((url = mime_list [url]) ? url : "");
}

////////////////////////////////
///// function: local_data /////
////////////////////////////////

function local_data (name, data)
{
  if (name) if (data)
  {
    for (var n = local_files.length - 2; n > 1; n -= 2)
      if (local_files [n] == name) local_files.splice (n, 2);

    if (local_files.length > 200) local_files.splice (2, 20);
    local_files.push (name); local_files.push (data);
  }
  else
  {
    for (var n = local_files.length - 2; n > 1; n -= 2)
      if (local_files [n] == name) return (local_files [n + 1]);
  }
  return ("");
}

////////////////////////////////
///// function: local_link /////
////////////////////////////////

function local_link (u, local)
{
  var m, n, p = "", q = (u [0] == "?") ? 1 : 0; if (q) u = u.substr (1);

  while (u.substr (-1) == "/") u = u.substr (0, u.length - 1);
  if (u [0] == "/" || u.substr (-1) == "." || u.includes ("./")) u = "";
  m = u.toLowerCase(); if (m == aliases || m == settings) u = "";

  if (u [0] == "+")
  {
    if (local_files [0] > (n = Date.now())) m = local_files [1]; else
    {
      m = fs.existsSync (aliases) ? fs.readFileSync (aliases, "utf8") : "";
      local_files [0] = n + 5000; local_files [1] = m;
    }
    n = u.indexOf ("/"); if (n > 0) { p = u.substr (n + 1); u = u.substr (0, n); }
    n = m.indexOf (u + ","); if (n < 0) { q += 2; n = m.indexOf (u + "?,"); }

    if (n < 0) u = ""; else
    {
      u = m.substr (n + u.length, 300);
      if ((n = u.indexOf ("+")) < 0) u = ""; else u = u.substr (n + 1);
      if ((n = u.indexOf (";")) < 0) u = ""; else u = u.substr (0, n);
    }

    if (u.substr (-1) == "/") u += p; u = u.replace (/:([^/])/g, ":/$1");
    if (local & 1) console.log (" FILE: " + (u ? u : "none"));
    if (u && q == 3) u = "?" + u;
  }
  return (u);
}

//////////////////////////////
///// function: put_file /////
//////////////////////////////

function put_file (request, response, url, local)
{
  var append = url.substr (0,2) == "++"; if (append) url = url.substr (1);
  if (url.substr (-1) == "+") { append = !append; url = url.substr (0, url.length - 1); }

  if ((url = local_link ("?" + url, local))[0] == "?")
    url = url.substr (1); else if (!url || append || fs.existsSync (url)) url = "";

  if (!url) { default_handler (response, 777, local); return; }
  var range, size = fs.existsSync (url) ? fs.statSync (url).size : 0;

  if (!(range = request.headers ["range"]))
  {
    var stream = fs.createWriteStream (url, append ? { start: size, flags: "a" } : {});
    stream.on ("error", function() { default_handler (response, 777, local); });
    stream.on ("open", function()
    {
      proc_done (response, "", "", local); request.pipe (stream, {end:true});
    });
    return;
  }

  var buf = Buffer.from ([]); range = range.substr (range.indexOf ("=") + 1).split ("-");
  var start = range[0] * 1 || 0, end = range[1] * 1 || 0, len = end - start + (append ? 0 : 1);

  if (start < 0 || start > end || start > size || len > 500000)
  {
    default_handler (response, 888, local); return;
  }

  request.on ("error", function() { default_handler (response, 777, local); return; });
  request.on ("data", function (d) { if (buf.length <= len) buf = Buffer.concat ([buf, d]); });

  request.on ("end", function() { if (buf.length != len) request.emit ("error"); else
  {
    var file = fs.openSync (url, size ? 'r+' : 'w');
    fs.write (file, buf, 0, len, start, function (err)
    {
      if (err) request.emit ("error"); else
      {
        if (append) fs.ftruncateSync (file, end); proc_done (response, "", "", local);
      }
      fs.closeSync (file);
    });
  }});
}

//////////////////////////////
///// function: get_file /////
//////////////////////////////

function get_file (request, response, url, local)
{
  var data, stat, size = 0; if (url.substr (0,2) == "++") url = url.substr (1);
  if (fs.existsSync (url = local_link (url, local))) stat = fs.statSync (url);

  if (!stat && (data = local_data (url, "")))
  {
    proc_done (response, data, mime_type (url), 0); return;
  }

  if (stat) if (!stat.isDirectory()) size = stat.size; else try
  {
    data = ""; stat = fs.readdirSync (url, { withFileTypes: true });
    stat.forEach (function (x) { if (x.isFile()) data += x.name + "\n" });
    proc_done (response, data, "text/plain", local); return;
  } catch(e) {}  // in case read access is restricted

  if (!size) { default_handler (response, 777, local); return; }
  var start = 0, end = size - 1, range = request.headers ["range"];
  var time = Math.trunc (stat.mtimeMs / 1000);

  if (!range) size = -size; else
  {
    range = range.substr (range.indexOf ("=") + 1).split ("-");
    start = range [0] * 1 || 0; end = range [1] * 1 || 0;
    if (!range [0]) { start = size - end - 1; end = 0; }
    if (!end || end >= size) end = size - 1;
    if (start > end) start = end;
    if (end < start) end = start;
  }

  if ((data = request.headers ["if-modified-since"]) && time <= data)
  {
    proc_done (response, [0, 1, 0, time], mime_type (url), local);
    response.end (""); return;
  }

  var stream = fs.createReadStream (url, { start: start, end: end });
  stream.on ("error", function() { default_handler (response, 777, local); });
  stream.on ("open", function()
  {
    proc_done (response, [size, start, end, time], mime_type (url), local);
    stream.pipe (response, {end:true});
  });
}

//////////////////////////////
///// function: get_head /////
//////////////////////////////

function get_head (request, response, url, local)
{
  var data, stat, size = 0; if (url.substr (0,2) == "++") url = url.substr (1);
  if (fs.existsSync (url = local_link (url, local))) stat = fs.statSync (url);

  if (stat) if (!stat.isDirectory()) size = stat.size; else try
  {
    data = fs.readdirSync (url, { withFileTypes: true });
    data.forEach (function (x) { if (x.isFile()) ++size; });
  } catch(e) {}  // in case read access is restricted

  if (!size) { default_handler (response, 777, local); return; }

  data = Math.trunc (stat.mtimeMs / 1000);
  proc_done (response, [-1, 1, size, data], mime_type (url), local);
  response.end ("");
}

/////////////////////////////////
///// function: socket_pool /////
/////////////////////////////////

function socket_pool (sock, conn, name, port, host)
{
  var m, n = socklist.length - 1;

  if (!sock)
  {
    // find a TLS session ticket
    if (name) for (; n >= 0; n -= 3) if (name == socklist [n - 2])
      if ((m = socklist [n]).secure) if (m = m.getSession()) return m;

    // close HTTPS sockets ("restart" command)
    if (!name && !conn) for (; n >= 0; n -= 3)
      if ((sock = socklist [n - 1]).encrypted) sock.destroy();

    // remove outgoing socket and close incoming socket
    if (!name && conn) for (; n >= 0; n -= 3) if (conn == socklist [n])
    {
      if ((sock = socklist [n - 1]) && conn.idle != 3)
      {
        if (!m && conn.idle != 1) sock.destroy(); conn.idle = 3; m = true;
      }

      if (sock.destroyed) socklist.splice (n - 2, 3); else if (!name)
        name = setTimeout (function() { socket_pool (null, conn); }, 15000);
    }
    return null;
  }

  if (conn) // replace an existing socket (TLS upgrade)
  {
    for (; n >= 0; n -= 3) if (sock == socklist [n]) socklist [n] = conn;
    conn.idle = sock.idle; conn.timer = sock.timer; sock.timer = null;
  }
  else
  {
    for (; n >= 0; n -= 3) if (name == socklist [n - 2] && socklist [n].idle == 1)
    {
      m = socklist [n - 1]; if (!conn || m == sock) conn = socklist [n];
      if (conn == socklist [n] && (m == sock || m.destroyed)) socklist.splice (n - 2, 3);
    }

    if (conn && conn.readyState != "open") conn = null;
    if (!port) { port = socks_port; host = proxy_addr; }
    if (!conn) { conn = net.createConnection (port, host); conn.idle = 0; }

    socklist.push (name); socklist.push (sock); socklist.push (conn);
  }
  return conn;
}

//////////////////////////////////
///// function: http_handler /////
//////////////////////////////////

function http_handler (request, response)
{
  var m, n, portnum, port, local = 0;
  var proxy, host, origin, shadow_on, param = {};
  var referral, refer, head, head1, head2, head3, m3ufix1, m3ufix2;

  host = origin = shadow_on = referral = refer = "";
  head = head1 = head2 = head3 = m3ufix1 = m3ufix2 = "";

  if (!response.socket) { response.end (""); return; }  // SMPlayer/mpv somehow does this

  var method = request.method, ssl = request.socket.encrypted;
  var localhost = "localhost:" + (ssl ? https_port : http_port);
  var shadow = request.headers ["host"] || localhost;

  var url = request.url; n = url.indexOf ("?");
  if (n < 0) n = url.length; var query = url.substr (n);

  // substitute backslashes (sanity check)
  // Opera and Chrome convert vertical bar to %7C
  url = (url.substr (0, n)).replace (/\\/g, "/").replace (/%7C/g, "|");

  if (url [0] == "/") url = url.substr (1);
  if (url [0] == "@" && !shadow.includes (".")) m = url.split ("@");

  if (m && (url == "@" || m [2] == ""))
  {
    if (!m [1] || m [1] != shadow_secret)
    {
      console.log (shadow_host); m = " See the console for your info.";
      proc_done (response, m, "text/plain", 0); return;
    }
    var i, j, k, ii = 0, jj = 0, p = "", q = ""; m = Object.entries (shadow_host);

    for (n = 0; n < m.length; n++) if (k = m[n][0]) if (k[0] != "@")
    {
      j = k.length; i = k.indexOf (":");
      if (i < 0) i = j; j -= i; if (++i > ii) ii = i; if (++j > jj) jj = j;
    }
    else m.unshift (m.splice (n, 1)[0]);

    for (n = 0; n < m.length; n++) if (k = m[n][0]) if (k[0] != "@")
    {
      j = k.length; i = k.indexOf (":");
      if (i < 0) i = j; j -= i; i = ii - i; j = jj - j;
      p += " ".repeat (i) + k + " ".repeat (j) + "(" + m[n][1] + ")\n";
    }
    else q = k + " (" + m[n][1] + ")\n" + q;

    proc_done (response, p + "\n" + q, "text/plain", 0); return;
  }

  if (m && m.length > 2)
  {
    n = m [1] == shadow_secret ? 0 : 1;
    if ((shadow = m [2]).includes (".")) n += 2;
    if (shadow.includes ("/")) { shadow = "@" + shadow; n += 4; }

    m = m.length < 4 ? m [3] : m.slice (3).join ("@");
    if (m && m.replace (/@.*@/, "")[0] == "$") n += 8;

    if (n & 1 && n & 6) m = ">> need secret"; else if (m == undefined)
    {
      m = (shadow_host [shadow] == undefined) ? "-- not found" : "-- removed";
      delete shadow_host [shadow];
    }
    else
    {
      if (n & 4) { if (shadow.substr (-1) != "/") shadow += "/"; } else
      {
        if (m.substr (-1) == "/") m = m.substr (0, m.length - 1);
        if (!shadow.includes (":")) shadow += (n & 8) ? ":443" : ":80";
      }
      m += query; shadow_host [shadow] = m; m = "= (" + m + ")";
    }

    proc_done (response, " " + shadow + " " + m, "text/plain", 0); return;
  }

  if ((m = url.indexOf ("$") + 1) > 0 && (n = url.indexOf ("$", m) + 1) > 2)
  {
    m = url.substr (m, n - m - 1); n = url.substr (url [n] == "/" ? n + 1 : n);

    if (m && m == shadow_secret) url = "\\" + n; else if (url [0] == "$")
    {
      if ((p = shadow).indexOf (".") <= 0) p = ""; else
      {
        if (!p.includes (":")) p += ssl ? ":443" : ":80";
        if ((p = shadow_host [p]) && p [0] == "$") p = p.substr (1);
      }
      if (p == "" && m.indexOf (".") <= 0)
      {
        shadow_on = m; url = n; shadow += "/$" + m + "$";  // for location header
      }
    }
  }

  n = shadow_on || shadow; shadow_on = request.headers ["origin"] || "*";
  if (!n.includes (":")) n += ssl ? ":443" : ":80";

  if ((m = n.indexOf (".shadow.localhost:")) > 0 && (m = n.substr (0, m)))
  {
    if (!m.includes (":")) m += ssl ? ":443" : ":80"; if (m.indexOf (".") <= 0) n = m;
  }

  if (url [0] == "\\")
  {
    if (url [1] != "@") m = 1; else { delete shadow_host [n]; m = 2; }

    if (!(url = url.substr (m)))
    {
      m = (m = request.headers ["cookie"]) ? m : "null";
      proc_done (response, "**" + m, "text/plain", shadow_on); return;
    }
  }
  else if ((m = shadow_port (n)) == undefined) shadow_on = ""; else
  {
    n = n.substr (0, n.indexOf (":")); m = m.replace (/\$\$\$/g, n);
    if ((n = "@" + n + "/" + url).substr (-1) != "/") n += "/";
    if ((n = shadow_host [n]) != undefined) m = n;

    if (m [0] == "@") m = m.substr (m.indexOf ("@", 1) + 1);
    if (m [0] == "$") m = m.substr (1); if (m) local = 8;
    if (m [0] == "/") { m = m.substr (1); url = ""; }

    if ((n = m.indexOf ("?")) >= 0)
    {
      query = m.substr (n); m = m.substr (0, n); if (query == "?") query = "";
    }
    if (m) url = m + (url ? "/" + url : "");
  }

  if (!url)
  {
    proxy_command (request, response, query, ssl); return;
  }

  if (!url.indexOf ("ipfs/") || !url.indexOf ("ipns/"))  // IPFS local gateway
  {
    shadow = "@" + proxy_addr; url = "http://localhost:" + ipfs_port + "/" + url;
  }

  if (shadow [0] != "@")
  {
    if (local == 8 && shadow.substr (-1) != "$") local += 4;
    shadow = (ssl ? "https://" : "http://") + (shadow_on ? shadow : localhost);
    local++; if (url [0] == "~") { local++; referral = "~"; url = url.substr (1); }
  }

  if (method == "OPTIONS" && !(local & 4))
  {
    options_proc (request, response); return;
  }

  if (local & 1)
  {
    if ((n = 200 - url.length) < 10) n = 10;
    m = query.substr (0, n); if (n < query.length) m += "...";
    console.log ((shadow_on ? "@" : ">") + method + " " + url + m);
  }

  if (url [0] == "*")
  {
    url = url.substr (1); n = url.indexOf ("*");
    if (n >= 0) { refer = url.substr (0, n); url = url.substr (n + 1); }
    referral += "*" + refer + "*"; if (!(refer = safe_decode (refer))) refer = "*";
  }

  if ((n = url.indexOf ("|*")) >= 0)
  {
    head = url.substr (0, n).split ("|"); head.unshift ("|"); url = url.substr (n + 2);
  }
  else if ((n = url.indexOf ("~*")) >= 0)
  {
    head = url.substr (0, n).split ("~"); head.unshift ("~"); url = url.substr (n + 2);
  }
  if (url [0] == "/") url = url.substr (1);

  if (url [0] == "!")  // for DASH videos
  {
    if ((n = url.indexOf ("/")) < 0) n = url.length; m = url.substr (n + 1);
    if (n = local_data (url.substr (1, n - 1), "")) url = n + m;
  }

  if (!url.includes (":") && (m = safe_decode (url)))
  {
    if (m.search (/[:\\?*]/) >= 0) default_handler (response, 888, local);
    else if (method == "PUT")  put_file (request, response, m, local);
    else if (method == "GET")  get_file (request, response, m, local);
    else if (method == "HEAD") get_head (request, response, m, local);
    else if (method == "POST") handle_special (request, response, m, local, shadow);
    else default_handler (response, 888, local); return;
  }

  if ((n = url.indexOf ("://") + 3) < 3) n = 0;
  origin = url.substr (0, n); host = url.substr (n);

  if ((n = host.indexOf ("/")) < 0) n = host.length;
  url = "/" + host.substr (n + 1); host = host.substr (0, n); 

  if ((n = host.indexOf ("@")) >= 0)
  {
    m = host.substr (n + 1).split (":"); host = host.substr (0, n);
    n = safe_numero (m [1]); if (n == http_port || n == https_port) n = 0;

    if ((m = m [0]) == shadow_secret || n)
    {
      url = "/" + origin + host + ((m && n) ? "@" + m : "") + url;
      host = "localhost:" + n; origin = ssl ? "https://" : "http://";
      if (!n) host = localhost; shadow = "@" + proxy_addr;
    }
  }

  var myheader = request.headers;
  myheader ["host"] = host; m = origin; origin += host;
  var cookie = local & 4 ? "" : myheader ["accept"];

  if ((n = host.indexOf (":")) >= 0)
    { portnum = safe_numero (host.substr (n + 1)); host = host.substr (0, n); }

  if (m == "http://") { proxy = http; if (!portnum) portnum = 80; }
  if (m == "https://") { proxy = https; if (!portnum) portnum = 443; }

  if (!host || !proxy)
  {
    default_handler (response, 999, local); return;
  }

  if (refer [0] == "!")  // remove all but critical headers
  {
    var p, q, h = myheader; myheader = {}; refer = refer.substr (1);

    for (n = 0; n < camel_case.length; n += 2)
      if ((p = camel_case [n]) && (q = h [p])) myheader [p] = q;
  }

  if ((n = refer.indexOf (",")) >= 0)  // for m3u8 videos
  {
    m3ufix1 = refer.substr (n + 1); if (!(refer = refer.substr (0, n))) refer = "*";

    if ((n = m3ufix1.indexOf (",")) >= 0)
    {
      m3ufix2 = m3ufix1.substr (n + 1); m3ufix1 = m3ufix1.substr (0, n);
    }

    if ((n = url.lastIndexOf (".")) > 0 && (m = url.substr (n + 1)))
    {
      if (m.substr (0,3) == "m3u" || m == m3ufix1) local += 16;
      if (m == m3ufix1 || m == m3ufix2) url = url.substr (0, n);
      if (m = mime_list [m]) head3 = "\n" + "content-type" + "\n" + m;
    }
  }

  if (refer != "null")
  {
    if (refer.replace (/[\x21-\x7E]/g, "")) refer = "";
    if (refer == "*") refer = origin + "/"; m = n = refer;
    if (m.substr (-1) == "/") m = m.substr (0, m.length - 1);
    if (m) myheader ["origin"] = m; else delete myheader ["origin"];
    if (n) myheader ["referer"] = n; else delete myheader ["referer"];
  }

  if (!cookie || cookie.substr (0,2) != "**") cookie = ""; else
  {
    if ((n = cookie.indexOf ("**", 2)) < 0) n = 0;
    myheader ["accept"] = (n ? cookie.substr (2, n - 2) : "") || "*/*";
    cookie = cookie.substr (n + 2); if (!cookie) cookie = "null";
    if (cookie != "null") myheader ["cookie"] = cookie;
  }

  if (head) for (var i = head.length - 1, j, k, f, g, h; i > 0; i--)
  {
    f = head [i]; head1 = f + head [0] + (head1 ? head1 : "*");
    j = f.indexOf ("="); k = f.indexOf (":"); if (k < 0) k = f.length;

    if (j < 0 || k < j) if (f.replace (/[\x21-\x7E]/g, "")) continue; else
    {
      if (f && f [0] != "!") head2 = f + (head2 ? ", " : "") + head2; else
      {
        g = f.substr (1, k - 1); h = f.substr (k + 1); param [g] = h;
      }
      continue;
    }

    g = f.substr (0, j); h = f.substr (j + 1);
    f = h [0] == "!" ? safe_decode (h.substr (1)) : h;

    if (f.replace (/[\x20-\x7E]/g, "") || !g) continue;
    if (g.replace (/[a-z\d\-\+\_\.\!\~\*\$\&\%]/gi, "")) continue;

    if (g [0] == "!") head3 = "\n" + g.substr (1) + "\n" + h + head3; else
      if (f) myheader [g] = f; else delete myheader [g];
  }

  url += query; if (local & 16) myheader ["accept-encoding"] = "gzip";

  ///// CONNECTING TO THE INTERNET /////

  if (shadow [0] == "@")
  {
    // for IPFS or DNS-over-HTTPS (can also be used by non-browser apps)
    m = shadow.substr (1); shadow = ""; if (m) { port = portnum; host = m; }
  }
  else
  {
    // for redirection and tweak_m3u8
    head1 = referral + head1; if (local & 8) head1 = "";

    // access key (needed for shadow port but not shadow fork)
    // creates an identifier (in "refer") for probing the socks5 port
    n = !(m = param ["key"]) ? "" : url.match ("\\$" + m + "\\$(([^$]*)\\$)?");
    refer = (n ? n [2] : "") || (local & 4 ? "" : m) || host;
    if (local & 4 && m != "" && !n) shadow_on = "@";
    if (n) url = url.replace (n [0], "");

    // don't pass localhost through the socks5 port and don't redirect back to here
    if (host == proxy_addr || host.substr (host.lastIndexOf (".") + 1) == "localhost")
    {
      shadow = "@"; host = proxy_addr; port = portnum;
      // block the unauthorized use of a loopback to expose a shadow port
      if (port == http_port || port == https_port) myheader ["host"] = "localhost:" + port;
    }
  }

  head = referral = myheader ["host"] || host;
  if ((n = referral.indexOf (":")) > 0) referral = referral.substr (0, n);
  query = myheader ["content-length"] || 0;

  if (m = param ["mock"])
  {
    n = safe_numero (m); if (m.includes ("A")) n += 4; local += (n & 7) << 5;
  }

  if (local & 96)
  {
    var p, q, h = {};

    if (local & 32) for (n = 0; n < camel_case.length; n += 2)
    {
      p = camel_case [n]; q = camel_case [n + 1]; m = myheader [p];
      if (q && m != undefined) { delete myheader [p]; h [q] = m; }
    }
    if (local & 64) for (n = 0; n < request.rawHeaders.length; n += 2)
    {
      q = request.rawHeaders [n]; p = q.toLowerCase(); m = myheader [p];
      if (m != undefined) { delete myheader [p]; h [q] = m; }
    }
    myheader = Object.assign (h, myheader);
  }

  n = local & 1 ? ++reqcount : 0; m = (m = param ["vpx"]) ? ":" + m : "";
  var name = origin + (host == head ? "" : (port ? "@" + host : "?" + head)) + "/" + m;
  var conn = socket_pool (request.socket, null, name, port, host);

  var config = {
    method: method, host: origin, origin: shadow_on, cookie: cookie, shadow: shadow,
    count: n, headers: head1, exposes: head2, mimics: head3, fix1: m3ufix1, fix2: m3ufix2
  }

  var options = {
    method: method, hostname: head, port: portnum, path: url,
    headers: myheader, requestCert: false, rejectUnauthorized: m.substr (-1) == ":",
    socket: conn, servername: net.isIP (referral) ? "" : referral
  }
  if (local & 128) options.secureContext = secureContext;

  n = param ["timeout"]; if (n) n *= 1000; if (!n) n = 0;
  if (n > 0 && n < 5000) n = 5000; if (n < 0 && n > -5000) n = -5000;

  if (!conn.connecting)
  {
    config.dnsr = "@"; create_request(); return;
  }

  conn.on ("close", function()
  {
    socket_pool (null, conn); conn.destroy(); clearTimeout (conn.timer);
  });

  conn.on ("end", function() { });  // just in case; seems important in proxy_handler
  conn.timer = setTimeout (function() { oopsie(); }, n < 0 ? -n : 30000);

  if (port)
  {
    config.dnsr = "LOCAL"; create_request(); return;
  }

  conn.write ("CONNECT " + refer + " HTTP/!!!\nhost: " + host + ":" + portnum + m + "\n");

  conn.once ("data", function (d)
  {
    d = d.toString().match (/ (.*) (.*)/); config.dnsr = d[2] != "OK" ? d[2] : "";
    if (d[1] != "200") oopsie(); else create_request();
  });

  function create_request ()
  {
    if (conn.idle) clearTimeout (conn.timer); else if (proxy == https)
    {
      // grab a TLS session ticket from another socket
      options.session = socket_pool (null, null, name);
      conn = socket_pool (conn, tls.connect (options));

      // IMPORTANT: wait for this event so we can flag the session ticket as safe to reuse
      // symptom: internal call by Node.js to getTLSTicket() will sometimes cause a hard crash
      conn.once ("secureConnect", function() { conn.secure = true; clearTimeout (conn.timer); });
    }
    else
    {
      if (!conn.connecting) clearTimeout (conn.timer); else
        conn.once ("connect", function() { clearTimeout (conn.timer); });
    }

    if (!conn.idle) conn.on ("error", function() { });  // to catch error while socket is idle
    options.createConnection = function() { return conn; }

    if (port) refer = ""; else keepheaders = myheader;
    if (refer == host) refer = ""; config.key = refer;
    if (refer) program ["?" + refer] = query;

    proxy = proxy.request (options, function (res)
    {
      res.on ("end", function()
      {
        if (!conn.destroyed) if (refer && refer [0] != "!") conn.destroy(); else
          { conn.idle = 1; conn.timer = setTimeout (function() { conn.end(); }, 30000); }
      });
      proc_handler (response, res, config, local);
    });

    proxy.on ("upgrade", function (res, xx, buf)  // for websocket
    {
      var sock = response.socket; if (buf.length) conn.unshift (buf);
      conn.idle = 2; proc_handler (response, res, config, local + 1024);
      conn.pipe (sock, {end:true}); sock.pipe (conn, {end:true});
    });

    proxy.on ("error", function() { oopsie(); });
    proxy.setTimeout (n > 0 ? n : 180000, function() { oopsie(); });

    response.on ("close", function() { if (!conn.idle) oopsie(); });
    conn.idle = 0; request.pipe (proxy, {end:true});
  }

  function oopsie ()
  {
    default_handler (response, 666, local); conn.destroy();
  }
}

//////////////////////////////////
///// function: proc_handler /////
//////////////////////////////////

function proc_handler (response, res, config, local)
{
  var n, s, v, buffer = "", header = {};
  var status = res.statusCode, message = res.statusMessage;

  if (local & 1)
  {
    last_time = 0; n = config.count; s = (s = config.dnsr) ? " - " + s : "";
    console.log (" Request " + n + " - Status " + status + " (" + message + ")" + s);
  }
  else if (local & 2)
  {
    var the_time = Date.now() / 1000; passthru++;
    var delay = (last_pass == config.host) ? 30 : 20;

    if (last_time <= the_time - delay)
    {
      last_time = the_time; last_pass = config.host; s = config.dnsr;
      console.log ("<Passthrough " + passthru + " - " + last_pass + (s ? " - " + s : ""));
    }
  }

  if (local & 1024)  // websocket
  {
    response.writeHead (status, message, res.headers);
    response.end (""); return;
  }

  if (!config.shadow)  // IPFS or DNS-over-HTTPS
  {
    response.writeHead (status, message, res.headers);
    res.pipe (response, {end:true}); return;
  }

  if (local & 2 || config.method == "OPTIONS") Object.assign (header, res.headers); else
  {
    var header_name = [
      "connection", "date", "location", "accept-ranges",
      "access-control-allow-credentials", "access-control-allow-origin",
      "content-type", "content-encoding", "content-length", "content-range" ];

    v = config.exposes.replace (/\s/g, "");
    if (v) header_name = header_name.concat (v.split (","));

    for (n = 0; n < header_name.length; n++)
    {
      s = header_name [n]; v = res.headers [s]; if (v) header [s] = v;
    }
  }

  if (config.mimics)
  {
    var i, j, k = config.mimics.split ("\n");
    for (n = 1; n < k.length; n += 2)
    {
      i = k [n]; j = k [n + 1]; if (!i) continue;
      if (j [0] == "!") j = safe_decode (j.substr (1));
      if (j) header [i] = j; else delete header [i];
    }
  }

  if ((v = config.origin) != "@")
  {
    header ["zz-proxy-server"] = proxy_name;
    header ["access-control-allow-origin"] = v = v || "*";
    if (v != "*") header ["access-control-allow-credentials"] = "true";
  }
  if (config.key) program ["?" + config.key] = header ["content-length"] || 0;

  if (config.shadow != "@" && (v = res.headers [s = "location"]))
  {
    var x = config.host, y = v.substr (0,2), z = config.shadow + "/";
    if (y [0] == "/") { if (y == "//") x = x.substr (0, x.indexOf (y)); v = x + v; }

    if (!(local & 8)) z += config.headers; else
    {
      n = v.indexOf ("//"); if ((n = v.indexOf ("/", n + 2)) < 0) n = v.length;
      y = v.substr (0, n); if (y == config.host) v = z + v.substr (n + 1); z = "";
    }

    if (!config.cookie) header [s] = z + v; else
      { delete header [s]; header ["zz-location"] = v; }
  }

  s = "set-cookie"; v = res.headers [s];
  if (config.cookie && v) header ["zz-set-cookie"] = v;
  if (!(local & 4)) delete header [s];

  s = "access-control-expose-headers"; v = res.headers [s] || "";
  if (config.cookie)  v = v + (v ? ", " : "") + "zz-location, zz-set-cookie";
  if (config.exposes) v = v + (v ? ", " : "") + config.exposes;
  if (v) header [s] = v;

  if (config.shadow == "@" || !(local & 16))
  {
    response.writeHead (status, message, header);
    res.pipe (response, {end:true}); return;
  }

  var proc = null; v = header ["content-encoding"];
  if (v == "gzip") proc = zlib.createGunzip();
  if (proc) res.pipe (proc); else proc = res;

  proc.on ("error", function () { default_handler (response, 777, local); });

  proc.on ("data", function (data)
  {
    if (buffer.length < 500000) buffer = buffer + data.toString();
  });

  proc.on ("end", function ()
  {
    var mydata = tweak_m3u8 (buffer, config);
    header ["content-encoding"] = "identity";
    header ["content-length"] = mydata.length;
    response.writeHead (status, message, header);
    response.end (mydata);
  });
}

///////////////////////////////////
///// function: proxy_command /////
///////////////////////////////////

function proxy_command (request, response, cmd, ssl)
{
  var n, p, q, msg, str = "", setdns = "";

  if ((n = request.method != "GET") || !(cmd = safe_decode (cmd)))
  {
    default_handler (response, n ? 888 : 200, 0); return;
  }

  if ((n = cmd.indexOf ("=")) > 0) { str = cmd.substr (n + 1); cmd = cmd.substr (0, n); }
  cmd = cmd.substr (1).trim(); str = str.trim(); msg = "Command: " + cmd + " " + str;

  if (request.headers ["upgrade"] == "websocket")
  {
    websocket (request, response, cmd); return;
  }

  if (cmd == "probe")
  {
    p = (str + "=").split ("="); q = p[1].trim(); p = p[0].trim();

    if (p && p == shadow_secret)
    {
      msg = str = ""; q = Object.entries (keepheaders);
      for (n = 0; n < q.length; n++) msg += " " + q[n][0] + ": " + q[n][1] + "\n";

      for (n = 0; n < socklist.length; n += 3)
        str += " [" + socklist [n + 2].idle + "] " + socklist [n] + "\n";

      msg = " Sockets: " + socklist.length / 3 + "\n\n" + str + (str ? "\n" : "") + msg;
    }
    else
    {
      if (q && program ["?" + p] != undefined) program ["?" + p] = q;
      q = program ["#" + p] || 0; p = program ["?" + p] || 0;
      msg = " " + q + " " + p + " = sent/total";
    }
    proc_done (response, msg, "text/plain", 0); return;
  }

  if (cmd == "flags")
  {
    cmd = ""; n = safe_numero (str); if (str) proxy_flags = n & 31;
    str = "Console output is " + (proxy_flags & 1 ? "enabled" : "disabled");
    if (proxy_flags & 16) str += "\n> showing " + (proxy_flags & 1 ? "socket" : "DoH/DNS") + " activity";
    str += "\n\nExpecting TOR at port " + (proxy_flags & 2 ? tor2_port : tor1_port);
    if (proxy_flags & 4) str += "\n> TOR is enabled for ALL";
  }

  if (cmd == "reload")
  {
    if (!str) str = settings; n = profile_count;
    console.log (">> " + init_settings (str) + " (" + str + ")");
    cmd = "="; str = ""; if (n != profile_count) add_resolver ("");
  }

  if (cmd == "activate")
  {
    cmd = "="; if (!str) add_resolver ("");
    p = str.replace (/,/g, "+").split ("+"); str = "";
    for (n = 0; n < p.length; n++) if (q = p[n].trim()) add_resolver (q);
  }

  if (cmd == "servers")
  {
    cmd = "="; setdns = str; str = "";
  }

  if (cmd == "dnslookup" && (n = str.indexOf ("=")) >= 0)
  {
    setdns = str.substr (0, n).trim(); str = str.substr (n + 1).trim();
  }

  p = dns_servers (setdns); q = doh_address ? " DoH  " + doh_address + "\n" : "";
  if (!p.length) q = " DNS lookup in progress!\n   Please try again...\n";
  for (n = 0; n < p.length; n++) q += " DNS" + (n+1) + " " + p[n] + "\n";

  p = "_".repeat ((n = msg.length) < 25 ? 25 : n);
  msg += "\n" + p + "\n\n" + q + p + "\n";

  if (cmd == "=")
  {
    cmd = ""; str += init_servers() + "\n\n";

    for (n = 0; n < iplist.length; n += 2)
    {
      p = iplist [n + 1]; if (!p) p = "FETCH";
      q = p.split (" "); p = q.splice (0,1)[0]; q = q.join (":");
      str += " " + p + " " + '-'.repeat (22 - p.length) + " " + iplist [n];
      str += (q ? " [" + q + "]" : "") + "\n";
    }
  }

  if (cmd == "dnslookup")
  {
    if ((n = str.indexOf ("//")) >= 0) str = str.substr (n + 2);
    if ((n = str.indexOf ("/"))  >= 0) str = str.substr (0, n);
    if ((n = str.indexOf (":"))  >= 0) str = str.substr (0, n);

    if (str.includes ("."))
    {
      if (net.isIP (str)) dns.reverse (str, res); else dns.resolve4 (str, res);
      msg += "\n " + str + "\n\n"; return;
    }

    function res (err, addr)
    {
      if (err) str = " Not resolved\n"; else
        for (n = 0, str = ""; n < addr.length; n++) str += " " + addr [n] + "\n";

      proc_done (response, msg + str, "text/plain", 0);
    }
  }

  if (cmd == "restart") if (ssl) { cmd = ""; str = "Bad idea"; } else
  {
    https_server.close (function()
    {
      proc_done (response, msg + "\nHTTPS server restarted.\n", "text/plain", 0);
      p = (str + "+").replace (/,/g, "+").split ("+");
      start_servers (p[1].trim(), p[0].trim());
    });

    socket_pool (null, null); return;
  }

  if (cmd == "vpn")
  {
    cmd = ""; p = str.split (":");
    if (p[0] || p.length > 1)
    {
      vpn_host = p[0]; vpn_port = safe_numero (p[1]);
      if (!net.isIP (vpn_host) || !vpn_port) vpn_host = "";
      vpn_name = safe_decode (p[2]); vpn_pass = safe_decode (p[3]);
    }
    p = (vpn_name || vpn_pass) ? " (" + vpn_name + ":" + vpn_pass + ")" : "";
    if (!vpn_host) str = "VPN - invalid or none"; else
      str = "VPN - " + vpn_host + " - port " + vpn_port + p;
  }

  proc_done (response, msg + "\n" + (cmd ? "What??" : str) + "\n", "text/plain", 0);
}

///////////////////////////////////
///// function: proxy_handler /////
///////////////////////////////////

function proxy_handler (sock)
{
  var m, n, p, q, key, host, port, addr, conn, data, done = 5, time = 0;
  var vpn, vhost = "", vport = "", vname = "", vpass = "";
  var socket = ++sockets_count; ++sockets_open;

  sock.on ("error", function() { });
  sock.on ("close", function() { socks_report (0, 1, --sockets_open); socks_abort(); });
  sock.on ("end",   function() { });  // this callback is needed for the "close" event

  sock.once ("data", function (d) { socks_phase_1 (d); });

  function socks_abort ()
  {
    if (!done && key)  // version 5a
    {
      clearInterval (time); delete program ["#" + key]; delete program ["?" + key];
    }

    if (!done || sock.readyState != "open")
    {
      // version 4c: done set to 0 to avoid "server fail" message
      if (conn) conn.destroy(); sock.destroy(); done = 0; return;
    }

    if (time < Date.now())
    {
      if (done == 1) m = Buffer.from ("\5\4\0\0"); else
      if (done >= 2) m = "HTTP/1.1 500 No Connection\r\n\n"; else m = "";

      sock.end (m); return;
    }

    if (conn.readyState != "closed") { conn.end(); return; }

    // kickstart a stubborn server but just this once
    setTimeout (function() { socks_phase_4 (""); }, 3000);

    time = 1; conn.destroy(); conn = null; socks_report (0, 3, vhost + ":" + vport);
  }

  function socks_phase_1 (d)
  {
    // if (d.length == 3 && d[0] == 5 && d[1] == 1 && d[2] == 0)
    // version 5a: changed because curl sends \5\2\0\1 (browser sends \5\1\0)

    if (d.length > 2 && d[0] == 5 && d[1] == d.length - 2)
    {
      sock.once ("data", function (r) { socks_phase_2 (r); });
      done = 1; sock.write (Buffer.from ("\5\0")); return;
    }

    data = d.toString(); p = data.match (/(.*) (.*) (HTTP\/.*)/);
    q = data.match (/\bhost: (.*)/i); if (q) q = q[1]; else q = "";
    q = q.split (":"); host = q[0]; port = safe_numero (q[1]);

    if (!p || !host || p.length < 4) { socks_abort(); return; }

    if (p[1] == "CONNECT")
    {
      done = p[3] == "HTTP/!!!" ? 2 : 3; if (!port) port = 443;
      if (done != 2 || (key = p[2]) == host) key = "";  // version 5a

      if (q[2] || q[3])
      {
        vhost = q[2]; vport = safe_numero (q[3]);
        if (!net.isIP (vhost) || !vport) { socks_abort(); return; }
        vname = safe_decode (q[4]); vpass = safe_decode (q[5]);
      }
    }
    else
    {
      done = 4; if (!port) port = 80; q = p[2];
      n = q.indexOf ("//"); if (n >= 0) q = q.substr (n + 2);
      n = q.indexOf ("/"); q = n < 0 ? "/" : q.substr (n);

      // this is needed because some servers want ONLY the path string
      data = p[1] + " " + q + " " + data.substr (data.indexOf (p[3]));
    }

    socks_phase_3 (d);
  }

  function socks_phase_2 (d)
  {
    if (d.length > 7 && d[0] == 5 && d[1] == 1)
    {
      if (d[3] == 3 && (n = d[4] + 5) < d.length - 1) host = d.toString ('utf8', 5, n);
      if (d[3] == 1 && (n = 8) < d.length - 1) host = d[4] + "." + d[5] + "." + d[6] + "." + d[7];
    }

    if (!host) socks_abort(); else
    {
      port = d.readUInt16BE (n); socks_phase_3 ("");
    }
  }

  function socks_phase_3 (d)  // version 5a - total rewrite
  {
    if (done != 2 && (m = shadow_port (host + ":" + port)) != undefined)
    {
      addr = "localhost"; socks_report (0, 0, "SHD");
      port = m[0] == "$" ? https_port : http_port;

      if (m[0] == "@" && (n = m.indexOf ("@", 1)) > 0)
      {
        m = m.substr (1, n - 1).split (":");
        if (q = m[1]) p = m[0]; else { q = m[0]; p = ""; }
        if (p) addr = p; if (q = safe_numero (q)) port = q;
      }

      socks_phase_4 (d); return;
    }

    if ((addr = dns_resolve (host, vhost && vport)).includes (" "))
    {
      m = addr.split (" "); addr = m[0];

      if (!m[1] && !m[2]) addr = addr.substr (5); else
      {
        vhost = m[1]; vport = safe_numero (m[2]);
        if (!net.isIP (vhost) || !vport) { socks_abort(); return; }
        vname = safe_decode (m[3]); vpass = safe_decode (m[4]);
      }
    }

    socks_report (0, 0, addr); vpn = addr [0] == ":" ? addr.substr (1,3) : "";
    dns_lookup (addr, host, function (ip) { addr = ip; socks_phase_4 (d); });
  }

  function socks_phase_4 (d)
  {
    if (sockmon) socks_report ("sockmon");  // version 5a
    if (addr == "0.0.0.0") { socks_abort(); return; }

    if (!vpn || vpn == "vpn") { vhost = addr; vport = port; p = ""; } else
    {
      if (!net.isIP (addr))
      {
        p = Buffer.from ("\5\1\0\3\0" + addr + "\0\0");
        n = addr.length; p [4] = n; p.writeInt16BE (port, n + 5);
      }
      else
      {
        p = Buffer.from ("\5\1\0\1\0\0\0\0\0\0");
        p.writeUInt16BE (port, 8); m = addr.split ("."); 
        p[4] = m[0] * 1; p[5] = m[1] * 1; p[6] = m[2] * 1; p[7] = m[3] * 1;
      }

      if (addr == "I2P")
      {
        vhost = "0.0.0.0"; vport = i2p_port;
      }
      else if (vpn == "VPN")
      {
        vhost = vpn_host; vport = vpn_port; vname = vpn_name; vpass = vpn_pass;
      }
      else if (vpn == "TOR")
      {
        vhost = "localhost"; vport = proxy_flags & 2 ? tor2_port : tor1_port;
      }

      if (vhost == "0.0.0.0")
      {
        vpn = "I2P"; vhost = "localhost"; data = d; p = "";
      }
    }

    if (vhost == "localhost" || vhost == proxy_addr)
    {
      vhost = proxy_addr; if (vport == socks_port) { socks_abort(); return; }
    }
    else if (!time) time = Date.now() + 12000;

    conn = net.createConnection (vport, vhost, function() { socks_phase_5 (p); });
    conn.on ("error", function (e) { socks_report (e.code, addr == host ? "" : addr, host); });
    conn.on ("close", function ( ) { socks_report (0, 2, sock.readyState); socks_abort(); });
    conn.on ("end",   function ( ) { });  // this callback is needed for the "close" event
  }

  function socks_phase_5 (d)
  {
    if (!d) { socks_phase_6 (""); return; }

    if (!vname && !vpass)
    {
      conn.write (Buffer.from ("\5\1\0"));
      conn.once ("data", function (r)
      {
        if (r.length != 2 || r[0] != 5 || r[1] != 0) socks_abort(); else
        {
          conn.write (d); conn.once ("data", function (r) { socks_phase_6 (r); });
        }
      });
      return;
    }

    // username and password stuff

    conn.write (Buffer.from ("\5\1\2"));
    conn.once ("data", function (r)
    {
      if (r.length != 2 || r[0] != 5 || r[1] != 2) { socks_abort(); return; }

      r = Buffer.from ("\1\0" + vname + "\0" + vpass);
      n = r [1] = vname.length; r [n + 2] = vpass.length; conn.write (r);

      conn.once ("data", function (r)
      {
        if (r.length != 2 || r[0] != 1 || r[1] != 0) socks_abort(); else
        {
          conn.write (d); conn.once ("data", function (r) { socks_phase_6 (r); });
        }
      });
    });
  }

  function socks_phase_6 (d)
  {
    if (d && (d.length < 3 || d[0] != 5 || d[1] != 0 || d[2] != 0)) { socks_abort(); return; }

    // HTTP responses MUST have two line breaks
    if (done == 1) sock.write (Buffer.from ("\5\0\0\1\0\0\0\0\0\0"));
    if (done == 2) sock.write ("HTTP/!!! 200 " + (vpn ? vpn : "OK") + "\r\n\n");
    if (done == 3) sock.write ("HTTP/1.1 200 OK" + "\r\n\n");
    if (done == 4) conn.write (data);

    if (done == 4 || vpn != "I2P") { socks_phase_7 (""); return; }

    sock.once ("data", function (r)
    {
      data = r.toString(); p = data.match (/(.*) (.*) (HTTP\/.*)/);

      if (!p || p.length < 4)  // maybe an SSL connection
      {
        conn.once  ("data", function (d)
        {
          conn.write (r); socks_phase_7 ("");
        });

        conn.write ("CONNECT " + host + " HTTP/1.1\nhost: " + host + ":" + port + "\r\n\n");
        return;
      }

      q = data.match (/\bhost: (.*)/i);
      q = (p[2][0] == "/") ? (q ? q[1] : "") + p[2] : p[2];
      if (q.substr [0,4] != "http") q = "http://" + q;

      data = p[1] + " " + q + " " + data.substr (data.indexOf (p[3]));
      conn.write (data); socks_phase_7 ("");
    });
  }

  function socks_phase_7 (d)
  {
    done = 0; conn.pipe (sock, {end:true}); sock.pipe (conn, {end:true});

    if (key)  // version 5a
    {
      program ["#" + key] = program ["?" + key] = 0;
      time = setInterval (function() { socks_probe() }, 1000);
      conn.on ("data",  function() { program ["#" + key] = -conn.bytesRead; });
      conn.on ("drain", function() { program ["#" + key] = conn.bytesWritten; });
    }
  }

  function socks_probe ()  // version 5a
  {
    if (program ["?" + key] == "!!!") socks_abort();
  }

  function socks_report (err, i, j, msg)
  {
    if (err === "sockmon")
    {
      msg = ": " + host + " " + port + " " + (addr == host ? "n/a" : addr);
      send_message (sockmon, msg); return;
    }
    msg = ">> " + ((proxy_flags & 17) == 17 ? socket + " - " : "");

    if (!(proxy_flags & 1)) return; else if (err)
    {
      console.log (msg + "ERR: " + err + (i ? " - " + i : "") + " - " + j); return;
    }
    if (i == 0) console.log (msg + host + " <" + port + "> " + (j == host ? "" : j));
    if (!(proxy_flags & 16)) return;

    if (i == 1) console.log (" @ " + socket + " - " + j + (conn ? "" : " (cancelled)"));
    if (i == 2) console.log (" : " + socket + " - " + (done ? "server fail" : j));
    if (i == 3) console.log (" : " + socket + " - server retry - " + j);
  }
}

///////////////////////////////
///// function: websocket /////
///////////////////////////////

function websocket (request, response, name)
{
  var key, start, opcode, size, msg, m, n, p, q;
  var headers = { Upgrade: 'websocket', Connection: 'upgrade' };

  if (key = request.headers ["sec-websocket-key"])
  {
    key += "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
    key = crypt.createHash('sha1').update(key).digest('base64');
    headers ["Sec-WebSocket-Accept"] = key;
  }

  response.writeHead (101, "Switching Protocols", headers);
  var sock = response.socket; response.end ("");

  key = name == "?" + shadow_secret;
  if (name.search ("[?:\s]") >= 0) name = key ? "??" : "";
  if (name && program ["@" + name]) { msg = name + " is taken"; name = ""; }
  if (name) { program ["@" + name] = sock; msg = "Kraker Proxy says hello." }

  console.log ("@ opened websocket " + name); if (msg) send_message (sock, msg);

  sock.on ("close", function()
  {
    console.log ("@ closed websocket " + name);
    delete program ["@" + name]; if (sock == sockmon) sockmon = null;
  });

  sock.on ("data", function (buf)
  {
    start = 2; opcode = buf [0] & 15; size = buf [1] & 127;
    if (size == 127 || (opcode != 0 && opcode != 1)) size = -1;
    if (size == 126) { start = 4; size = buf.readUInt16BE(2); }
    if (size < 0 || size > 10000) { sock.destroy(); return; }

    msg = take_message (buf, start, buf [1] & 128);
    if (msg [0] != "?") { send_message (sock, msg); return; }

    n = msg.indexOf (":"); if (n < 0) n = 0;
    m = msg.substr (1, n - 1).trim(); msg = msg.substr (n + 1).trim();

    if (!n)  // upload/download progress monitor
    {
      msg = msg.split ("="); p = msg [0]; q = msg [1];

      if (program ["?" + p] != undefined)
      {
        if (q) program ["?" + p] = q;
        q = program ["#" + p] || 0; p = program ["?" + p] || 0;
        send_message (sock, " " + q + " " + p + " = sent/total");
      }
      return;
    }

    if (!m || !name) return; else if (!key)  // chat channel
    {
      q = program ["@" + m]; msg = name + ": " + msg;
      send_message (q || sock, q ? msg : m + " is offline");
      return;
    }

    if (m == "sockmon")
    {
      m = ""; sockmon = sock; q = "Socks5 monitor enabled.";
    }

    send_message (sock, m ? m + " is not an option." : q);
  });
}

function send_message (sock, msg)
{
  var m = Buffer.from (msg), n = m.length;
  var x = Buffer.from (n < 126 ? [129, n] : [129, 126, n >> 8, n & 255]);
  if (sock) { sock.write (x); sock.write (m); }
}

function take_message (buf, start, mask)
{
  if (!mask) mask = start; else
  {
    mask = start + 4; var i = mask, j = buf.length, k = 0;
    for (; i < j; i++, k++) buf [i] ^= buf [(k & 3) + start];
  }
  return (buf.toString ('utf8', mask));
}

/*
Problem with this; the XOR on a 32-bit number can go negative and crash Node

function take_message (buf, start, mask)
{
  if (mask)
  {
    mask = buf.readUInt32LE (start); start += 4; var i = start, j = buf.length;
    for (; i < j - 3; i += 4) buf.writeUInt32LE (buf.readUInt32LE (i) ^ mask, i);
    for (; i < j; i++) { buf [i] ^= mask & 255; mask = mask >> 8; }
  }
  return (buf.toString ('utf8', start));
}
*/

////////////////////////////////
///// function: tweak_m3u8 /////
////////////////////////////////

function tweak_m3u8 (data, config)
{
  if (data.substr (0,5).indexOf ("#") < 0) return (Buffer.from (data));

  var regex = /\n(.*URI="|\s*)(http|\/|)([^#?\s]+)/g;
  var prefix = config.shadow + "/" + config.headers;
  var extfix = data.substr (0,100).includes ("#EXT-X-STREAM-INF:");
  extfix = extfix ? config.fix1 : config.fix2;

  return (Buffer.from (data.replace (regex, fixit)));

  function fixit (x, a, b, c)
  {
    if (!(a = a.trim()) && extfix) c += "." + extfix;
    if (b) b = prefix + (b == "/" ? config.host : "") + b;
    return ("\n" + a + b + c);
  }
}

////////////////////////////////////
///// function: handle_special /////
////////////////////////////////////
	
function handle_special (request, response, url, local, host)
{
  var mode = 0, buffer = "";

  if (url == "wanna_boot_dash") mode = 1;
  if (url == "wanna_boot_dash_live") mode = 2;

  if (url.substr (0, 14) == "wanna_scratch=") mode = 3;

  if (!mode) { default_handler (response, 888, local); return; }

  request.on ("data", function (data)
  {
    if (buffer.length < 10000) buffer = buffer + data.toString();
  });

  request.on ("end", function ()
  {
    if (mode == 3)
    {
      local_data (url.substr (14), buffer);
      proc_done (response, "", "", 0); return;
    }

    var name = mode == 1 ? "_blank_dash_mpd.txt" : "_blank_live_mpd.txt";
    var data = fs.existsSync (name) ? fs.readFileSync (name, "utf8") : "";

    if (!data) default_handler (response, 777, local); else
    {
      handle_boot_dash (data, buffer, url, host); proc_done (response, "", "", 0);
    }
  });
}

//////////////////////////////////////
///// function: handle_boot_dash /////
//////////////////////////////////////

function handle_boot_dash (data, buffer, url, host)
{
  var sub = buffer.split ("|"); if (sub.length < 9) return;
  var dat = sub[5].split (","); if (dat.length < 4) return;

  var target = data.toString(); var name = "_" + url + "_" + sub[6];

  target = target.replace ("~run_time~"  , sub[0]);
  target = target.replace ("~aud_mime~"  , sub[1]);
  target = target.replace ("~aud_codec~" , sub[2]);
  target = target.replace ("~vid_mime~"  , sub[3]);
  target = target.replace ("~vid_codec~" , sub[4]);

  target = target.replace ("~aud_init~"  , dat[0]);
  target = target.replace ("~aud_index~" , dat[1]);
  target = target.replace ("~vid_init~"  , dat[2]);
  target = target.replace ("~vid_index~" , dat[3]);

  target = target.replace (/~seg_num~/g  , dat[0]);
  target = target.replace (/~seg_ofs~/g  , dat[1]);
  target = target.replace (/~seg_dur~/g  , dat[2]);

  var aud_url = name + "-aud";
  var vid_url = name + "-vid";

  target = target.replace ("~aud_url~", host + "/~!" + aud_url);
  target = target.replace ("~vid_url~", host + "/~!" + vid_url);

  local_data (name, target);
  local_data (aud_url, sub[7]);
  local_data (vid_url, sub[8]);
}

///// End of file /////

/*
The secureContext was stolen from here (thanks, Tim):
https://github.com/httptoolkit/mockttp/blob/main/src/rules/passthrough-handling.ts

This does not perfectly mimic Firefox (about 90%).
Whether this works with Cloudflare depends on the level of the threat assessment. 
However, it appears that CF does not cross-check the User-Agent header with the TLS fingerprint.

Additional info:
https://wiki.openssl.org/index.php/List_of_SSL_OP_Flags
https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml
https://lwthiker.com/reversing/2022/02/17/curl-impersonate-firefox.html

These links should load without the bot challenge:
view-source:http://localhost:8080/!mock:1A|!max-age=0|*https://banned.video
view-source:http://localhost:8080/!mock:1A|!max-age=0|*https://www.retailmenot.com
Wait 30 seconds between attempts for Kraker to close the socket.
Sometimes banned.video won't work (status 503 versus 403).

TLS fingerprints:
http://localhost:8080/!mock:A|*https://client.tlsfingerprint.io:8443
http://localhost:8080/!mock:A|*https://tls.browserleaks.com/json
http://localhost:8080/!mock:A|*https://check.ja3.zone

https://tlsfingerprint.io/
https://browserleaks.com/ssl
https://ja3.zone

https://tlsfingerprint.io/id/8ffac6cabf1235b7 (the mock:A fingerprint)

The ordering of the extensions cannot be changed. It is possible to enable
the "application_layer_protocol_negotiation" extension by including ALPNProtocols: ['http/1.1']
in the "options" object in http_handler but that won't accomplish anything since there are
also these four other extensions in Firefox which cannot be implemented:

renegotiation_info (0xff01)
status_request (0x0005)
delegated_credentials (0x0022)
record_size_limit (0x001c)

Firefox ciphers:
TLS_AES_128_GCM_SHA256 (0x1301) 19,1
TLS_CHACHA20_POLY1305_SHA256 (0x1303) 19,3
TLS_AES_256_GCM_SHA384 (0x1302) 19,2
ECDHE-ECDSA-AES128-GCM-SHA256 (0xc02b) 192,43
ECDHE-RSA-AES128-GCM-SHA256 (0xc02f) 192,47
ECDHE-ECDSA-CHACHA20-POLY1305 (0xcca9) 204,169
ECDHE-RSA-CHACHA20-POLY1305 (0xcca8) 204,168
ECDHE-ECDSA-AES256-GCM-SHA384 (0xc02c) 192,44
ECDHE-RSA-AES256-GCM-SHA384 (0xc030) 192,48
ECDHE-ECDSA-AES256-SHA (0xc00a) 192,10
ECDHE-ECDSA-AES128-SHA (0xc009) 192,9
ECDHE-RSA-AES128-SHA (0xc013) 192,19
ECDHE-RSA-AES256-SHA (0xc014) 192,20
AES128-GCM-SHA256 (0x009c) 0,156
AES256-GCM-SHA384 (0x009d) 0,157
AES128-SHA (0x002f) 0,47
AES256-SHA (0x0035) 0,53

IANA cipher names:
TLS_AES_128_GCM_SHA256 (0x1301) 19,1
TLS_CHACHA20_POLY1305_SHA256 (0x1303) 19,3
TLS_AES_256_GCM_SHA384 (0x1302) 19,2
TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 (0xc02b) 192,43
TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (0xc02f) 192,47
TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 (0xcca9) 204,169
TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (0xcca8) 204,168
TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 (0xc02c) 192,44
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xc030) 192,48
TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA (0xc00a) 192,10
TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (0xc009) 192,9
TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (0xc013) 192,19
TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (0xc014) 192,20
TLS_RSA_WITH_AES_128_GCM_SHA256 (0x009c) 0,156
TLS_RSA_WITH_AES_256_GCM_SHA384 (0x009d) 0,157
TLS_RSA_WITH_AES_128_CBC_SHA (0x002f) 0,47
TLS_RSA_WITH_AES_256_CBC_SHA (0x0035) 0,53
*/

/*
Below is the cipher list when using "ciphers: 'HIGH'".
The TLS fingerprint matches Cluster #33 (https://tlsfingerprint.io/cluster/a0c7d616ebdc8b4c).
Still cannot get past CloudFlare's "Bot Fight Mode" which is currently active at banned.video (September 22, 2020).
Why in the hell is CloudFlare blocking Kraker?

http://localhost:8080/https://ja3er.com/json
https://ja3er.com/search/fb7fad0594b51a29cbc9e96c3232c590
https://www.openssl.org/docs/man1.0.2/man1/ciphers.html
https://testssl.sh/openssl-iana.mapping.html

TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 (0xc02c) 192,44
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xc030) 192,48
TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 (0x009f) 0,159
TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 (0xcca9) 204,169
TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (0xcca8) 204,168
TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (0xccaa) 204,170
TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 (0xc02b) 192,43
TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (0xc02f) 192,47
TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 (0x009e) 0,158
TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 (0xc024) 192,36
TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 (0xc028) 192,40
TLS_DHE_RSA_WITH_AES_256_CBC_SHA256 (0x006b) 0,107
TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 (0xc023) 192,35
TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 (0xc027) 192,39
TLS_DHE_RSA_WITH_AES_128_CBC_SHA256 (0x0067) 0,103
TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA (0xc00a) 192,10
TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (0xc014) 192,20
TLS_DHE_RSA_WITH_AES_256_CBC_SHA (0x0039) 0,57
TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (0xc009) 192,9
TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (0xc013) 192,19
TLS_DHE_RSA_WITH_AES_128_CBC_SHA (0x0033) 0,51
TLS_RSA_WITH_AES_256_GCM_SHA384 (0x009d) 0,157
TLS_RSA_WITH_AES_128_GCM_SHA256 (0x009c) 0,156
TLS_RSA_WITH_AES_256_CBC_SHA256 (0x003d) 0,61
TLS_RSA_WITH_AES_128_CBC_SHA256 (0x003c) 0,60
TLS_RSA_WITH_AES_256_CBC_SHA (0x0035) 0,53
TLS_RSA_WITH_AES_128_CBC_SHA (0x002f) 0,47
TLS_EMPTY_RENEGOTIATION_INFO_SCSV (0x00ff) 0,255
*/
