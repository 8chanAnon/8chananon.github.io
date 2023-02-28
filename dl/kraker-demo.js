/*
Local Proxy Server
*/

const net   = require ('net');
const http  = require ('http');
const https = require ('https');

var proxy_name = "kraker-demo";

http.createServer (http_handler).listen (8082);

console.log ("\n=-------------------------------------------=" +
             "\n Local Proxy Server ... waiting on port 8082 " +
             "\n=-------------------------------------------=\n");

function default_handler (response, err, err_msg)
{
  var msg = "", header = {}; if (response.headersSent) return;

  if (err == 200) msg = "Local Proxy Server\n"; else
    console.log ("  Status " + err + " (" + err_msg + ")");

  header ["zz-proxy-server"] = proxy_name;
  header ["access-control-allow-origin"] = "*";

  header ["content-type"] = "text/plain";
  header ["content-length"] = msg.length;

  response.writeHead (err, err_msg, header);
  response.end (msg);
}

function options_proc (request, response)
{
  var header = {};

  header ["accept-ranges"] = "bytes";
  header ["zz-proxy-server"] = proxy_name;
  header ["access-control-allow-origin"] = "*";
  header ["access-control-max-age"] = "30";
  header ["content-length"] = "0";

  var headers = request.headers ["access-control-request-headers"];
  var methods = request.headers ["access-control-request-method"];
  if (headers) header ["access-control-allow-headers"] = headers;
  if (methods) header ["access-control-allow-methods"] = methods;

  response.writeHead (200, "OK", header); response.end ("");
}

function http_handler (request, response)
{
  var n, portnum, proxy, host = "", origin = "", method = request.method;

  var url = request.url; n = url.indexOf ("?");
  if (n < 0) n = url.length; var query = url.substr (n);
  url = url.substr (0, n); if (url [0] == "/") url = url.substr (1);

  if (!url) { default_handler (response, 200, "OK"); return; }

  console.log ("> " + method + " " + url + query);

  if (method == "OPTIONS") { options_proc (request, response); return; }

  if ((n = url.indexOf ("://") + 3) > 2)
    { origin = url.substr (0, n); host = url.substr (n); }

  if ((n = host.indexOf ("/")) < 0) url = "/"; else
    { url = host.substr (n); host = host.substr (0, n); }

  if ((n = host.indexOf (":")) >= 0)
    { portnum = host.substr (n + 1); host = host.substr (0, n); }

  if (origin == "http://") { proxy = http; if (!portnum) portnum = 80; }
  if (origin == "https://") { proxy = https; if (!portnum) portnum = 443; }

  if (!host || !proxy)
  {
    default_handler (response, 666, "Bad Request"); return;
  }

  request.headers ["host"] = host;

  var options = {
    method: method, hostname: host, port: portnum, path: url + query,
    headers: request.headers, requestCert: false, rejectUnauthorized: false,
    servername: net.isIP (host) ? "" : host
  }

  proxy = proxy.request (options, function (res) { proc_handler (response, res); });

  proxy.on ("error", function() { default_handler (response, 666, "Not working"); });

  response.on ("close", function() { proxy.destroy(); });

  request.pipe (proxy, {end:true});
}

function proc_handler (response, res)
{
  var header = res.headers, status = res.statusCode, message = res.statusMessage;

  console.log ("  Status " + status + " (" + message + ")");

  header ["zz-proxy-server"] = proxy_name;
  header ["access-control-allow-origin"] = "*";

  response.writeHead (status, message, header);
  res.pipe (response, {end:true});
}

