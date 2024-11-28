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
  <option value= "9vids"    >? mp4 - 9vids
  <option value= "goodporn" >? mp4 - GoodPorn
`;

frame_7.dig_9vids = async (url, frame, fmt) =>
{
  var tag = "9vids"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, "<iframe src=", ">"); url = pullstring (url, '=', '"');
  url = decodeURIComponent (atob (url)); url = pullstring (url, 'src="', '"');
  if (url.substr (0,4) != "http") throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?");
}
////////////////////

frame_7.dig_goodporn = async (url, frame, fmt) =>
{
  var tag = "goodporn"; if (is_busy (frame, tag + " (DIG)", 1)) return;
  var n, a, b, r, s, t, sub, f = [0,0,0,0], u = [0,0,0,0];

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
    p = p.split ("/"); var h = p[7].split (""), i, j, k;

    for (i = j = 32; i;)
    {
      j = (parseInt (q [--i]) + j - 1) & 31;
      k = h [j]; h [j] = h [i]; h [i] = k;
    }
    p[7] = h.join (""); return (p.slice (2).join ("/"));
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

