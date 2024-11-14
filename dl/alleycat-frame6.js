// News & Propaganda

document.getElementById ("src6").innerHTML = `
  <option value=0  class="w">YouTube / Invidious
  <option value= 1  >+ m3u - Fox
  <option value= 2  >+ mp4 - ABC
  <option value= 3  >? m3u - CBS
  <option value= 4  >+ m3u - CNBC
  <option value= 5  >? mp4 - CNN
  <option value= 6  >? m3u - C-SPAN
  <option value= 7  >+ mp4 - MS/NBC
  <option value= 8  >+ m3u - PBS
  <option value= 11 class="w">+ m3u - CBC
  <option value= 15 class="w"># m3u - CPAC
  <option value= 12 class="w">+ m3u - CTV
  <option value= 13 class="w">+ mp4 - Global
  <option value= 14 class="w">+ mp4 - TVO
  <option value= 21 class="b">+ m3u - BBC
  <option value= 24 class="b">? m3u - Press TV
  <option value= 22 class="b">+ mp4 - Al Jazeera
  <option value= 25 class="b">+ mp4 - Bloomberg
  <option value= 26 class="b"># mp4 - Deutsche Welle
  <option value= 27 class="b">? m3u - Epoch Times
  <option value= 30 class="r">+ mp4 - BrightCove
`;

document.getElementById ("butt6").innerHTML = `
  <button onclick="javascript:copylist(this,6,1)">Stack 1</button>
  <button onclick="javascript:copylist(this,6,2)">Stack 2</button>
  <button onclick="javascript:copylist(this,6,3)">Stack 3</button>
  &nbsp;
  <button onclick="javascript:copylist(this,6,4)">Fox</button>
  <button onclick="javascript:copylist(this,6,5)">PBS</button>
  <button onclick="javascript:copylist(this,6,6)">BBC</button>
`;

var stack_6_1 = [""
];

var stack_6_2 = [""
];

var stack_6_3 = [""
];

var stack_6_4 = [""
  , "1:6041387345001" , "Steve Hilton"
  , "1:6035600008001" , "Judge Jeanine Pirro"
];

var stack_6_5 = [""
  , "8:2365338020" , "Austin City Limits: 40 Years (2014)"
  , "8:1946795242" , "Frontline: WikiSecrets (2011)"
];

var stack_6_6 = [""
  , "21:p035dt58" , "Dragonfly"
  , "21:p076m7sh" , "Desert Art"
  , "21:p07bj7pv" , "Follow the Food"
];

var frame_req_6 = function (src, url, frame, fmt)
{
  if (src == 1  && (url = getid (url, 13))) req_fox (url, frame, fmt); else
  if (src == 2  && (url = getid (url,  8))) req_abc (url, frame, fmt); else
  if (src == 4  && (url = getid (url, 10))) req_cnbc (url, frame, fmt); else
  if (src == 7  && (url = getid (url,-13))) req_msnbc (url, frame, fmt); else
  if (src == 8  && (url = getid (url, 10))) req_pbs (url, frame, fmt); else
  if (src == 11 && (url = getid (url,-13))) req_cbc (url, frame, fmt); else
  if (src == 15 && (url = getid (url, 36))) req_cpac (url, frame, fmt); else
  if (src == 12 && (url = getid (url,  7))) req_ctv (url, frame, fmt); else
  if (src == 13 && (url = getid (url,  7))) req_global (url, frame, fmt); else
  if (src == 14 && (url = getid (url, 13))) req_tvo (url, frame, fmt); else
  if (src == 21 && (url = getid (url,  8))) req_bbc (url, frame, fmt); else
  if (src == 22 && (url = getid (url, 13))) req_aljazeera (url, frame, fmt); else
  if (src == 25 && (url = getid (url,  0))) req_bloomberg (url, frame, fmt); else
  if (src == 26 && (url = getid (url,  8))) req_deutsche (url, frame, fmt); else

  if (src == 30) load_brightcove ("", url, "", frame, fmt); else

  if (src == 0 && (url = getid (url, 11))) request (url, frame, fmt); else

  no_fail (frame, url ? "Not supported" : "Invalid ID");
}
////////////////////

var frame_dig_6 = function (src, doc, frame, fmt)
{
  if (src == 1 ) dig_fox (doc, frame, fmt); else
  if (src == 2 ) dig_abc (doc, frame, fmt); else
  if (src == 3 ) dig_cbs (doc, frame, fmt); else
  if (src == 4 ) dig_cnbc (doc, frame, fmt); else
  if (src == 5 ) dig_cnn (doc, frame, fmt); else
  if (src == 6 ) dig_cspan (doc, frame, fmt); else
  if (src == 7 ) dig_msnbc (doc, frame, fmt); else
  if (src == 8 ) dig_pbs (doc, frame, fmt); else
  if (src == 11) dig_cbc (doc, frame, fmt); else
  if (src == 12) dig_ctv (doc, frame, fmt); else
  if (src == 13) dig_global (doc, frame, fmt); else
  if (src == 14) dig_tvo (doc, frame, fmt); else
  if (src == 21) dig_bbc (doc, frame, fmt); else
  if (src == 24) dig_presstv (doc, frame, fmt); else
  if (src == 22) dig_aljazeera (doc, frame, fmt); else
  if (src == 25) dig_bloomberg (doc, frame, fmt); else
  if (src == 27) dig_epochtimes (doc, frame, fmt); else

  if (src == 30) find_brightcove (doc, "", frame, fmt); else

  no_fail (frame, "Not supported");
}
////////////////////

const req_fox = async (id, frame, fmt) =>
{
  var tag = "fox"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url, src = "https://api.foxnews.com/v3/video-player/" + id;

try
{
  response = await kitty (localhost + src);
  jsonData = await response.json();

  if (jsonData.error != undefined)
  {
    src = "https://api.foxbusiness.com/v3/video-player/" + id;
    response = await kitty (localhost + src);
    jsonData = await response.json();
    if (jsonData.error != undefined) throw ("!!!");
  }

  url = jsonData.channel.item["media-group"]["media-content"][0]["@attributes"].url;

  if (!url) throw ("!!!"); else if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

  var n = url.indexOf ("?");
  if (n > 0 && url.includes ("/tokenvod.")) url = url.substr (0, n);

} catch (err) { console.log (err); busy = 0; }

  error = id; if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_abc = async (id, frame, fmt) =>
{
  var tag = "abc"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = "https://abcnews.go.com/video/itemfeed?id=" + id;

try
{ 
  response = await kitty (cors_bypass + url);
  jsonData = await response.json();

  url = jsonData.channel.item["media-group"]["media-content"][2]["@attributes"].url; 

} catch (err) { console.log (err); busy = 0; }

  error = id; no_format (frame); if (no_fail (frame)) loadwindow (url, frame, tag + ": " + id);
}
////////////////////

const req_cnbc = async (id, frame, fmt) =>
{
  var tag = "cnbc"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = "https://player.cnbc.com/p/gZWlPC/cnbc_global?playertype=synd&byGuid=" + id;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  if (!(url = pullstring (textData, '"playbackURL":"', '"'))) throw ("!!!");
  if (url.substr (0,2) == "//") url = "https:" + url;

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_msnbc = async (id, frame, fmt) =>
{
  var tag = "msnbc"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
//var url = "https://www.msnbc.com/msnbc/embedded-video/mmvo" + id;
//var url = "https://www.nbcnews.com/news/embedded-video/mmvo" + id;
  var url = "https://www.nbcnews.com/msnbc/embedded-video/mmvo" + id;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, '{"id":"' + id + '"', '"waffle"'); if (!url) throw ("!!!");
  url = url.split ('"publicUrl":"'); if (url.length < 3) throw ("!!!");

  url = pullstring (url [url.length - 2], '', '"'); if (!url.includes (".m3u8")) throw ("!!!");

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_pbs = async (id, frame, fmt) =>
{
  var tag = "pbs"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = "https://player.pbs.org/portalplayer/" + id + "/";

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  var s = '"encodings": ["';
  var n = textData.indexOf (s); if (n < 0) throw ("!!!");

  url = textData.substr (n + s.length, 200);
  url = url.substr (0, url.indexOf ('"'));

  url = url + "?format=jsonp&callback=__jp1";

  response = await kitty (cors_bypass + url);
  textData = await response.text();

  s = '"url": "'; n = textData.indexOf (s); if (n < 0) throw ("!!!");

  url = textData.substr (n + s.length);
  url = url.substr (0, url.indexOf ('"'));

  if (url.indexOf ("m3u8") < 0 || stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_cbc = async (id, frame, fmt) =>
{
  var tag = "cbc"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = "https://link.theplatform.com/s/ExhSPC/media/guid/2655402169/" + id + "/meta.smil?format=smil";

try
{ 
  response = await kitty (localhost + url);
  textData = await response.text();

  url = crack_smil (textData, frame, fmt); if (!url) throw ("!!!");
  fmt = pullstring (url, "<>", "") * 1; url = pullstring (url, "", "<>");

  if (url.includes (".m3u8")) if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_cpac = async (id, frame, fmt) =>
{
  var tag = "cpac"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = localhost + "https://www.cpac.ca/api/1/services/contentModel.json?url=%2Fsite%2Fwebsite%2Fepisode%2Findex.xml&crafterSite=cpacca&id=" + id;

try
{ 
  response = await kitty (url);
  jsonData = await response.json();

  if (!(url = jsonData.page.details.videoUrl)) throw ("!!!");

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_ctv = async (id, frame, fmt) =>
{
  var tag = "ctv"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = "https://capi.9c9media.com/destinations/ctvnews_web/platforms/desktop/contents/" + id;

try
{ 
  response = await kitty (localhost + url + "?%24include=%5BContentPackages%5D");
  jsonData = await response.json();

  url = url + "/contentpackages/" + jsonData.ContentPackages[0] + "/manifest.m3u8";

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: "  + id);
}
////////////////////

const req_global = async (id, frame, fmt) =>
{
  var tag = "global"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = "https://globalnews.ca/video/embed/" + id;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  var s = 'sources":[{"file":"';
  var n = textData.indexOf (s); if (n < 0) throw ("!!!");

  url = textData.substr (n + s.length, 200);
  url = url.substr (0, url.indexOf ('"'));
  url = url.replace (/\\/g, "");

} catch (err) { console.log (err); busy = 0; }

  error = id; no_format (frame); if (no_fail (frame)) loadwindow (url, frame, tag + ": "  + id);
}
////////////////////

const req_tvo = async (id, frame, fmt) =>
{
  load_brightcove ("18140038001", id, "tvo", frame, fmt);
}
////////////////////

const req_bbc = async (id, frame, fmt) =>
{
  var tag = "bbc"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  url = "https://open.live.bbc.co.uk/mediaselector/6/select/version/2.0/mediaset/pc/vpid/" + id + "/format/xml/atk/";

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  var s, n = 0, sub = textData.split ("<connection");

  for (var i = 1; i < sub.length; i++)
  {
    s = sub [i]; if (!s.includes ("href=")) continue;
    if (s.includes (".m3u8?")) { n = 1; url = s; break; }
    if (s.includes (".mpd?")) if (!n) { n = 2; url = s; }
    if (s.includes (".mp4?")) { n = 3; url = s; }
  }

  if (!n) throw ("!!!"); url = pullstring (url, 'href="', '"');

  if (n == 3 || stream_all (frame, n) || n == 2) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: "  + id);
}
////////////////////

const req_aljazeera = async (id, frame, fmt) =>
{
  var tag = "aljazeera", pub = "665003303001", x = id.split ("-");
  if (x.length > 1) { id = x [1]; if (pub != x [0]) { pub = x [0]; tag = ""; }}
  load_brightcove (pub, id, tag, frame, fmt);
}
////////////////////

const req_bloomberg = async (id, frame, fmt) =>
{
  var f = [0,0,0,0,0,0,0,0], u = [], n;
  var url, tag = "bloom"; if (is_busy (frame)) return;

  if (!(url = getid (id, 36)) && !(url = getid (id, 22)))
  {
    busy = 0; no_fail (frame, "Invalid ID"); return;
  }
  document.getElementById ("id" + frame).value = tag + " (ID)";
  id = url; url = "https://www.bloomberg.com/multimedia/api/embed?id=" + id;

try
{
  response = await kitty (cors_bypass + url);
  jsonData = await response.json();
  var sub = jsonData.downloadURLs;

  if ((url = sub["600"])  != undefined) { f[0] = 360; u[0] = url; }
  if ((url = sub["700"])  != undefined) { f[0] = 360; u[0] = url; }
  if ((url = sub["800"])  != undefined) { f[1] = 540; u[1] = url; }
  if ((url = sub["1200"]) != undefined) { f[2] = 720; u[2] = url; }

  if ((n = getformat (f, fmt)))
  {
    fixformat (f, frame); n = argformat (n); fmt = f[n]; url = u[n];
  }
  else
  {
    url = jsonData.streams[0].url; if (!url) throw ("!!!");

    if (stream_all (frame, 1)) fmt = 0; else
    {
      response = await kitty (url);
      textData = await response.text();

      url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
      fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
    }
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_deutsche = async (id, frame, fmt) =>
{
  var i, j, f = [0,0,0,0,0,0,0,0];

  var tag = "deutsche"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  url = localhost + "https://www.dw.com/playersources/";

try
{
  response = await kitty (url + "v-" + id);
  textData = await response.text();
 
  if (textData[0] != "[")
  {
    response = await kitty (url + "a-" + id);
    textData = await response.text();

    fmt = 0; if (textData[0] != "[") throw ("!!!");
    url = textData.substr (textData.indexOf ("http"));
    url = url.substr (0, url.indexOf ('"')); if (!url) throw ("!!!");
  }
  else
  {
    var sub = JSON.parse (textData); if (sub.length < 1) throw ("!!!");

    for (i = 0; i < sub.length; i++)
      if ((url = sub[i].label) && (j = chkformat (url)) >= 0) f[j] = i + 1;

    fmt = getformat (f, fmt); fixformat (f, frame);
    if ((j = argformat (fmt)) < 0 || (j = f[j] - 1) < 0) throw ("!!!");
    fmt = sub[j].label; url = sub[j].file;
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const dig_fox = async (doc, frame, fmt) =>
{
  var tag = "fox"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  var s = 'data-video-id="'; var n = textData.indexOf (s);
  if (n < 0) { s = "video_id="; n = textData.indexOf (s); }

  if (n > 0) url = textData.substr (n + s.length, 13); else
  {
    s = 'data-url="'; n = textData.indexOf (s);
    if (n > 0)
    {
      url = textData.substr (n + s.length, 200);
      url = url.substr (url.indexOf ("/v/") + 3, 13);
    }
    else
    {
      s = "redirect.mp3"; n = textData.indexOf (s); if (n < 0) throw ("!!!");
      url = textData.substr (n + s.length + 2, 200);
      url = url.substr (0, url.indexOf ('"')); if (url == "") throw ("!!!");
      url = "https://" + url.replace (/\\/g, "");
      busy = -busy;
    }
  }
  busy = -busy;

} catch (err) { console.log (err); busy = 0; }

  if (busy > 0)
  {
    no_fail (frame); loadwindow (url, frame, tag + ": id-none");
  }
  else if (no_fail (frame)) req_fox (url, frame, fmt);
}
////////////////////

const dig_abc = async (doc, frame, fmt) =>
{
  var tag = "abc"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, 'data-video="', '"');
  if (!url) url = pullstring (textData, '"videoId":"', '"');
  if (!url) url = pullstring (textData, '/video/itemfeed?id=', '"');
  if (!url) url = pullstring (textData, 'playlist":[{"id":"', '"');
  if (url.length != 8) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_abc (url, frame, fmt);
}
////////////////////

const dig_cbs = async (doc, frame, fmt) =>
{
  var tag = "cbs"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  var s = '"embedUrl":"'; var n = textData.indexOf (s);

  if (n > 0)
  {
    url = textData.substr (n + s.length, 300);
    url = url.substr (0, url.indexOf ('"')); url = url.replace (/\\/g, "");

    if (url != doc)
    {
      if (url.indexOf ("/live/") > 0) throw ("!!!");
      response = await kitty (cors_bypass + url);
      textData = await response.text();
    }
  }

  n = textData.indexOf ("defaultPayload");
  if (n > 0) textData = textData.substr (n);

  s = '"video":"';
  n = textData.indexOf (s); if (n < 0) throw ("!!!");

  url = textData.substr (n + s.length, 300);
  url = url.substr (0, url.indexOf ('"'));
  
  if (url.indexOf ("m3u8") < 0 || stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////

const dig_cnbc = async (doc, frame, fmt) =>
{
  var tag = "cnbc"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, "'content_id' : '", "'");
  if (!url) url = pullstring (textData, 'data-vilynx-id="', '"');

  if (url.length != 10) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_cnbc (url, frame, fmt);
}
////////////////////

const dig_cnn = async (doc, frame, fmt) =>
{
  var n, m, s, f = [0,0,0,0,0,0,0,0];

  var tag = "cnn"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = localhost + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  s = 'data-video-id="'; n = textData.indexOf (s);
  if (n < 0) { s = 'videoid="'; n = textData.indexOf (s); }
  if (n < 0) { s = 'videoId":"'; n = textData.indexOf (s); }
  if (n < 0) throw ("!!!");

  url = textData.substr (n + s.length, 300);
  url = url.substr (0, url.indexOf ('"'));

  url = "https://www.cnn.com/video/data/3.0/video/" + url + "/index.xml";

  response = await kitty (localhost + url);
  textData = await response.text();

  var sub = textData.split ("<file bitrate=");
  var p = ["640x360_900k", "896x504_1850k", "1280x720_3500k", "hls_1080p"];

  for (n = 1; n < sub.length; n++)
     for (m = 0, url = pullstring (sub[n], '"', '"'); m < 4; m++)
        if (url == p[m]) if (m == 3 || sub[n].indexOf (p[m] + ".mp4") > 0) f[m] = n;

  if ((n = argformat (getformat (f, fmt))) < 0) throw ("!!!");
  if (!(url = pullstring (sub [f[n]], '>', '<'))) throw ("!!!");
  if (url[0] == "/") url = "https://ht.cdn.turner.com/cnn/big" + url;

  if (n == 3) if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }
  else
  {
    fixformat (f, frame); fmt = pixformat (n); if (n == 1) fmt = 504;
  }

} catch (err) { console.log (err); busy = 0; }

  if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////

const dig_cspan = async (doc, frame, fmt) =>
{
  var tag = "cspan"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_kraker + doc;

try
{
  if (!localhost || localhost != cors_kraker) throw ("???");

  response = await kitty (url);
  textData = await response.text();

  if (url = pullstring (textData, 'data-altbcid="', '"'))
  {
    busy = -busy; url += "~*,,*?hdnts=" + pullstring (textData, 'data-akamaitoken="', '"');
  }
  else
  {
    if (!(url = pullstring (textData, "[{file: '", "'"))) throw ("!!!");

    if (stream_all (frame, 1)) fmt = 0; else
    {
      response = await kitty (cors_kraker + "~" + url);
      textData = await response.text();

      url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
      fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
    }
    url = cors_kraker + "~*,,*" + url;
  }

} catch (err) { console.log (err); busy = 0; }

  if (busy < 0)
  {
    no_fail (frame); load_brightcove ("3617315736001", url, "cspan", frame, -fmt); return;
  }

  if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////

const dig_msnbc = async (doc, frame, fmt) =>
{
  var n, s, tag = "msnbc"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  if (!(url = pullstring (textData, 'video":{"id":"mmvo', '"')))
  {
    s = pullstring (textData, '"embedURL":"', '"');
    if (!s) s = pullstring (textData, '"embedUrl":"', '"');
    url = pullstring (s, "/mmvo", "");
  }

  if (url)
  {
    if (url.length < 11 || url.length > 13) throw ("!!!");
    busy = 0; req_msnbc (url, frame, fmt); return;
  }

  s = pullstring (s, "/config/", '?'); if (!s) throw ("!!!");
  url = pullstring (textData, '"MPX":{', '}'); if (!url) throw ("!!!");

  var a = pullstring (url, '"pid":"', '"');
  var b = pullstring (url, '"playerName":"', '"');

  url = "https://player.theplatform.com/p/" + a + "/" + b + "/" + s;

  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, ':releaseUrl="', '?'); if (!url) throw ("!!!");
  url += "?switch=HLSServiceSecure&formats=M3U,MPEG4";

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (response.url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////

const dig_pbs = async (doc, frame, fmt) =>
{
  var tag = "pbs"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  if (url = pullstring (textData, '<iframe src="https://player', '"'))
  {
    url = pullstring (url, "player/", ""); if (!url) throw ("!!!");
    var s = pullstring (url, "", "/"); if (s) url = s;
  }
  else
  {
    url = pullstring (textData, "'VideoTPMediaId': '", "'");
    if (!url) url = pullstring (textData, 'data-coveid="', '"');
    if (!url) url = pullstring (textData, 'data-coveId="', '"');
    if (!url) url = pullstring (textData, '"tp_media_id":"', '"');
    if (!url) throw ("!!!");
  }

  if (url.length != 10) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_pbs (url, frame, fmt);
}
////////////////////

const dig_cbc = async (doc, frame, fmt) =>
{
  var n, s, t, u, tag = "cbc"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{
/*
  if (doc == "stations")
  {
    response = await kitty (localhost + "cbc.json");
    jsonData = await response.json();

    s = ""; t = jsonData.props.pageProps.data.freeTv.items;

    for (n = 0; n < t.length; n++) s += t[n].idMedia + " " + t[n].title + "\n";

    console.log (s); throw ("???");
  }
*/

  if (doc.includes ("/gem.cbc.ca/"))
  {
    n = doc.indexOf ("?"); if (n > 0) doc = doc.substr (0, n);
    doc = doc.split ("/"); if (doc [3] == "media") doc.splice (3,1);
    if (!(u = doc [3]) || !doc [4]) throw ("!!!");
    t = '"key":"' + doc [4] + '","idMedia":'
  }

  if (u && u != "live" && u != "live-event")
  {
    if (!doc [4].match (/\bs\d{2}e\d+\b/)) throw("!!!");
    url = "https://services.radio-canada.ca/ott/catalog/v2/gem/show/" + doc [3] + "?device=web"

    response = await kitty (localhost + url);
    jsonData = await response.json();

    if (!(s = jsonData.content[0].lineups)) throw ("!!!");

    u = doc [3] + "/" + doc [4].substr (0, 3);
    for (t = "", n = 0; n < s.length; n++) if (u == s [n].url) t = s [n].items;
    u = doc [3] + "/" + doc [4]; if (!t || !t.length) throw ("!!!");

    for (s = "", n = 0; n < t.length; n++) if (u == t [n].url) s = t [n].idMedia;
    if (!s) throw ("!!!");

    url = "https://services.radio-canada.ca/media/validation/v2/?idMedia=" + s +
      "&appCode=gem&output=json&tech=hls&manifestType=desktop";

    response = await kitty (localhost + url);
    jsonData = await response.json();

    if (!(url = jsonData.url)) throw ("!!!"); else if (stream_all (frame, 1)) fmt = 0; else
    {
      response = await kitty (url);
      textData = await response.text();

      url = crack_m3u8 (response.url, textData, frame, fmt); if (!url) throw ("!!!");
      fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
    }

    no_fail (frame); loadwindow (url, frame, tag + ": id-none"); return;
  }

  response = await kitty (url);
  textData = await response.text();

  if (u) url = pullstring (textData, t, ','); else
  {
    s = pullstring (textData, "'clipId': '", "'");
    if (!s) s = pullstring (textData, '"clipID":"', '"');
    if (!s) { s = pullstring (textData, '"mediaId":"', '"'); if (s) url = s; }

    if (!s && (s = pullstring (url, "/clip/", "-")))
      if (s = pullstring (textData, '"clipID":' + s + ',', '"clipType"'))
        if (!(s = pullstring (s, '"src":"', '"')).includes (".mp3")) s = ""; else
         { no_fail (frame); loadwindow (s, frame, tag + ": id-none"); return; }

    if (!s)
    {
      url = pullstring (textData, '"guid":"', '"');
      if (!url) url = pullstring (textData, "'mediaId': '", "'");
      if (!url) throw ("!!!");
    
      url = "https://www.cbc.ca/bistro/order?clipId=" + url;
      response = await kitty (cors_bypass + url);
      jsonData = await response.json();
      url = jsonData.items[0].id;
    }
  }

  if (url.length < 10 || url.length > 13) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_cbc (url, frame, fmt);
}
////////////////////

const dig_ctv = async (doc, frame, fmt) =>
{
  var tag = "ctv"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, "); initPlayer(", ")");
  // these appear to be obsolete
  if (!url) url = pullstring (textData, 'data-video-id="', '"');
  if (!url) url = pullstring (textData, "contentId: ", ",");
  if (!url) url = pullstring (textData, "currentId=", "&");

  if (!url && (url = pullstring (textData, 'getAuthStates("', '"')))
    if (!(url = url.split (",")).length) url = ""; else url = url [url.length - 1];

  if (!url && (url = pullstring (textData, '"axisId":', 'title')))
  {
    if (!cors_kraker) throw ("???");
    var s = pullstring (url, '"heroBrand":"', '"'), t = pullstring (url, "", ",");
    s = s.replace (/hub\b/, "_hub");

    url = "https://capi.9c9media.com/destinations/" + s + "/platforms/desktop/contents/" + t;

    response = await kitty (localhost + url + "?%24include=%5BContentPackages%5D");
    jsonData = await response.json();

    url += "/contentpackages/" + jsonData.ContentPackages[0].Id + "/manifest.mpd";
    url += "##" + cors_kraker + "~https://license.9c9media.ca/widevine";

    stream_all (frame, 2); no_fail (frame);
    loadwindow (url, frame, tag + ": id-none"); return;
  }

  if (url.length != 7) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_ctv (url, frame, fmt);
}
////////////////////

const dig_global = async (doc, frame, fmt) =>
{
  var n, s, t, u, tag = "global"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  if (doc.includes ("watch.globaltv.com"))
  {
    s = pullstring (doc, "/movie/", "");
    if (!s) s = pullstring (doc, "/video/", "");
    if (!s) s = pullstring (doc, "/episode/", "");

    n = s.indexOf ("?"); if (n > 0) s = s.substr (0, n); if (!s) throw ("!!!");
    n = s.indexOf ("/"); if (n > 0) s = s.substr (0, n);

    t = { path: '/authorization/authorizeresource', data: { duid: '1f152a54-ac6c-43ae-8a01-e2f0a86acfa7' }};
    t.data.resource_id = s; s = JSON.stringify (t);

    t = { 'content-type': 'application/json' };
    u = cors_bypass + "https://global.corusappservices.com/";

    url = u + "authorization/untrusted/sign";
    response = await kitty (url, { method: 'POST', headers: t, body: s });
    textData = await response.text();

    s = pullstring (textData, '"data":', '}') + "}";

    url = u + "authorization/authorizeresource";
    response = await kitty (url, { method: 'POST', headers: t, body: s });
    textData = await response.text();

    s = pullstring (textData, 'data":"', '"').split(".")[1];
    s = pullstring (atob (s), '"data":', '}') + ',"platform":"web_widevine"}';

    url = u + "media/getstream";
    response = await kitty (url, { method: 'POST', headers: t, body: s });
    textData = await response.text();

    s = pullstring (textData, 'data":"', '"').split(".")[1];
    url = pullstring (atob (s), '"streaming_url":"', '"'); if (!url) throw ("!!!");

    stream_all (frame, 2); no_fail (frame);
    loadwindow (url, frame, tag + ": id-none"); return;
  }

  response = await kitty (url);
  textData = await response.text();

  s = 'data-displayinline="'; n = textData.indexOf (s);

  if (n < 0)
  {
    s = 'data-miniplayer-video="'; n = textData.indexOf (s);
    if (n < 0) { s = '<iframe src="'; n = textData.indexOf (s); }
    if (n < 0) throw ("!!!");
  }
  url = textData.substr (n, 100);

  s = "/playlist/"; n = url.indexOf (s);
  if (n < 0) { s = "/embed/"; n = url.indexOf (s); }
  if (n < 0) throw ("!!!");

  url = url.substr (n + s.length, 7);

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_global (url, frame, fmt);
}
////////////////////

const dig_tvo = async (doc, frame, fmt) =>
{
  find_brightcove (doc, "tvo", frame, fmt);
}
////////////////////

const dig_bbc = async (doc, frame, fmt) =>
{
  var tag = "bbc"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, 'embed\\/', '\\');
//  if (!url) url = pullstring (textData, '[{"id":"', '"');
//  if (!url) url = pullstring (textData, '[{\\"id\\":\\"', '\\"');
  if (!url) url = pullstring (textData, 'versionID&quot;:&quot;', '&');
  if (!url) url = pullstring (textData, 'data-vpid="', '"');
  if (!url) url = pullstring (textData, 'data-id="', '"');
  if (!url) url = pullstring (textData, '"vpid":"', '"');
  if (!url) url = pullstring (textData, '/vpid/', '.');
  if (!url) url = pullstring (textData, '"versionId":"', '"');

  if (!url) if (!(url = pullstring (textData, '"videoPid":"', '"'))) throw ("!!!"); else
  {
    var n = textData.indexOf ('"pid":"' + url + '"'); if (n < 0) throw ("!!!");
    n = textData.indexOf ('"versionPid":"', n); if (n < 0) throw ("!!!");
    url = textData.substr (n + 14, 20); url = url.substr (0, url.indexOf ('"'));
  }

  if (url.length != 8) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_bbc (url, frame, fmt);
}
////////////////////

const dig_presstv = async (doc, frame, fmt) =>
{
  var tag = "presstv"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, '<source src="', '"');
  if (!url) url = pullstring (textData, '<source src=', ' ');

  if (url)
  {
    if (url[0] == "/") url = "https:" + url;
  }
  else
  {
    var n = textData.indexOf ("og:video:url'"); if (n < 0) throw ("!!!");
    url = textData.substr (n, 200); url = url.substr (url.indexOf ("http"));
    url = url.substr (0, url.indexOf ("'")); if (url == "") throw ("!!!");
  }

  url = url.replace ("\.presstv\.com", ".presstv.ir");

  if (!url.includes (".m3u8") || stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////

const dig_aljazeera = async (doc, frame, fmt) =>
{
  var tag = "aljazeera"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, "RenderPagesVideo('", "'");
  if (!url) url = pullstring (textData, "RenderGeneralBCVideo(", ",");
  if (!url) url = pullstring (textData, 'data-video-id="', '"');
  if (!url || url.replace (/\d/g, "")) url = pullstring (textData, '"video":"', '"');

  if (!url && (url = pullstring (textData, '"embedUrl": "', '"')))
    url = pullstring (url, "brightcove.net/", "/") + "-" + pullstring (url, "?videoId=", "");

  if (url.length != 13 && url.length != 26) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_aljazeera (url, frame, fmt);
}
////////////////////

const dig_bloomberg = async (doc, frame, fmt) =>
{
  var tag = "bloom"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  var s = 'data-url="'; var n = textData.indexOf (s);

  if (n > 0)
  {
    url = textData.substr (n + s.length, 500);
    url = url.substr (0, url.indexOf ('"'));
    
    response = await kitty (cors_bypass + url);
    textData = await response.text();
  }

  s = '"resourceId":"'; n = textData.indexOf (s); if (n < 0) throw ("!!!");

  url = textData.substr (n + s.length, 50);
  url = url.substr (0, url.indexOf ('"'));
  if (url.length != 22 && url.length != 36) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_bloomberg (url, frame, fmt);
}
////////////////////

const dig_epochtimes = async (doc, frame, fmt) =>
{
  var tag = "epochtimes"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, 'data-id="', '"'); if (!url) throw ("!!!");
  url = "https://vs1.youmaker.com/assets/" + url + "/playlist.m3u8";

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////

