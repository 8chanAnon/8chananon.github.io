console.log (window);

var invidious_site = [
  "https://invidious.nerdvpn.de",
  "", "", "", "", "", "", "", "", "",
  "https://invidious.ethibox.fr",
  "https://invidious.nerdvpn.de",
  "https://yewtu.be",
  "https://invidious.private.coffee",
  "https://invidious.privacyredirect.com",
  "https://iv.datura.network",
  "https://invidious.jing.rocks",
  "https://invidious.reallyaweso.me",
  "https://inv.tux.pizza"
];

var invidious_link = invidious_site [0];

document.getElementById ("ytx5").innerHTML =
document.getElementById ("ytx6").innerHTML =
document.getElementById ("ytx7").innerHTML = `
  <option value= 1  class="w">youtube.com
  <option value= 10>invidious.ethibox.fr (fr)
  <option value= 11>invidious.nerdvpn.de (de)
  <option value= 12 class="r">yewtu.be (nl)
  <option value= 13>https://invidious.private.coffee (at)
  <option value= 14>https://invidious.privacyredirect.com (fi)
  <option value= 15 class="r">https://iv.datura.network (fi)
  <option value= 16 class="b">https://invidious.jing.rocks (jp)
  <option value= 17>https://invidious.reallyaweso.me (de)
  <option value= 18>https://inv.tux.pizza (us)
  <option value= 9  class="w" checked>YouTube DASH
`;

document.getElementById ("src7").innerHTML += `
  <option value= 16>? mp4 - 9vids
  <option value= 19>? mp4 - GoodPorn
`;

var frame_dig_7 = function (src, doc, frame, fmt)
{
  if (src == 1 ) dig_tubitv (doc, frame, fmt); else
  if (src == 4 ) dig_thearchive (doc, frame, fmt); else
  if (src == 3 ) dig_darkmatter (doc, frame, fmt); else
  if (src == 7 ) dig_plextv (doc, frame, fmt); else
  if (src == 5 ) dig_playtaku (doc, frame, fmt); else
  if (src == 10) dig_emovies (doc, frame, fmt); else
  if (src == 11) dig_goku (doc, frame, fmt); else
  if (src == 14) dig_noxx (doc, frame, fmt); else
  if (src == 15) dig_pressplay (doc, frame, fmt); else
  if (src == 2 ) dig_vidcloud (doc, frame, fmt); else
  if (src == 9 ) dig_xvideos (doc, frame, fmt); else
  if (src == 40) dig_internetradio (doc, frame, fmt); else
  if (src == 16) dig_9vids (doc, frame, fmt); else
  if (src == 19) dig_goodporn (doc, frame, fmt); else

  no_fail (frame, "", "Not supported");
}
////////////////////

var frame_req_5 = function (src, url, frame, fmt)
{
  if (src == 0 ) request (url, frame, fmt); else
  if (src == 1 ) req_bitchute (url, frame, fmt); else
  if (src == 14) req_rumble (url, frame, fmt); else
  if (src == 2 ) req_vimeo2 (url, frame, fmt); else
  if (src == 3 ) req_infowars (url, frame, fmt); else
  if (src == 4 ) req_brighteon (url, frame, fmt); else
  if (src == 5 ) req_dailymotion (url, frame, fmt); else
  if (src == 11) req_153news (url, frame, fmt); else
  if (src == 21) req_twitter (url, frame, fmt); else
  if (src == 27) req_twitchtv (url, frame, fmt); else
  if (src == 25) req_iheartradio (url, frame, fmt); else

  no_fail (frame, "", "Not supported");
}
////////////////////

const req_vimeo2 = async (id, frame, fmt) =>
{
  var tag = "vimeo"; id = getid (frame, id, -9);
  if (!id || is_busy (frame, tag + " (ID)")) return;
  var f, n, s, t, u, v = [], url = "https://player.vimeo.com/video/" + id;

if (stream_all (frame, 0)) fmt = ""; else try
{
  if (!localhost || localhost != cors_kraker) throw ("???");

  response = await kitty (cors_kraker + "https://vimeo.com/_next/viewer");
  jsonData = await response.json();

  if (!(s = jsonData.jwt)) throw ("!!!");

  url = "https://api.vimeo.com/videos/" + id + "?fields=config_url,download";

  response = await kitty (cors_kraker + url, { headers: { authorization: "jwt " + s }});
  jsonData = await response.json();

  if (!(t = jsonData.download)) throw ("!!!");

  for (u of t) v.push ({ width: u.width, height: u.height, url: u.link });
  f = formats_m3u8 (v); n = gotformat (f, fmt); if (n < 0) throw ("!!!");
  n = f[n] - 1; url = v[n].url; fmt = v[n].height; fixformat (f, frame);

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

const dig_9vids = async (doc, frame, fmt) =>
{
  var tag = "9vids", url = cors_bypass + doc;
  if (is_busy (frame, tag + " (DIG)")) return;

try
{
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, "<iframe src=", ">"); url = pullstring (url, '=', '"');
  url = decodeURIComponent (atob (url)); url = pullstring (url, 'src="', '"');
  if (url.substr (0,4) != "http") throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?");
}
////////////////////

const dig_goodporn = async (doc, frame, fmt) =>
{
  var tag = "goodporn"; if (is_busy (frame, tag + " (DIG)")) return;
  var n, a, b, r, s, t, sub, f = [0,0,0,0], u = [0,0,0,0], url = doc;

try
{ 
  var reduce = function (r)
  {
    var i, j, p = "", q = "";

    for (i = 1; i < r.length; i++) p += parseInt (r [i]) || 1;
    j = (parseInt (p.substr (0,8)) - parseInt (p.substr (7))) * 4;
    p = (j < 0 ? -j : j) + "";

    for (i = 0; i < 8; i++) for (j = 1; j <= 4; j++)
      q += (parseInt (p [i]) + parseInt (r [i + j])) % 10;

    return (q);
    // "$485519516018136" resolves to "59660773440828624284406173827267"
  }

  var decode = function (p, q)
  {
    p = p.split ("/"); var h = p[7].split (""), i, j, k;console.log(p[7]);

    for (i = j = 32; i;)
    {
      j = (parseInt (q [--i]) + j - 1) & 31;
      k = h [j]; h [j] = h [i]; h [i] = k;
    }
    p[7] = h.join ("");console.log(p[7]); return (p.slice (2).join ("/"));
  }

  response = await kitty (cors_kraker + "**!mock:1A|*" + url);
  textData = await response.text();

  r = response.url; r = r.substr (r.indexOf ("|*") + 2).split ("/").slice (0,3).join ("/");
  s = pullstring (textData, "kt_player('", ")"); s = s.split (", ")[4] || "flashvars";
  s = pullstring (textData, "var " + s + " = ", "embed:"); if (!s) throw ("!!!");

  eval ("sub = " + s + "}"); t = ["url", "alt_url", "alt_url2", "alt_url3", "alt_url4" ];
  s = reduce (sub.license_code);

  for (n = 0; n < t.length; n++)
  {
    b = "video_" + t [n]; a = sub [b + "_text"]; if (!(b = sub [b])) continue;
    if (!b.indexOf ("function/")) b = decode (b, s); if (b[0] == "/") b = r + b;
    if (b.indexOf ("http")) continue;

    if (!a || a == "540p")     a = "MQ";
    if (a == "Low Quality")    a = "LQ";
    if (a == "Medium Quality") a = "MQ";
    if (a == "High Quality")   a = "HQ";

    if (a == "360p" || a == "LQ") { f [0] = 1; u [0] = b; }
    if (a == "480p" || a == "MQ") { f [1] = 1; u [1] = b; }
    if (a == "720p" || a == "HQ") { f [2] = 1; u [2] = b; }
  }

  fmt = argformat (getformat (f, fmt)); if (fmt < 0) throw ("!!!");
  url = u [fmt]; fmt = pixformat (fmt); fixformat (f, frame);
//  url = cors_kraker + "~!mock:1A|*" + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?", fmt);
}
////////////////////

