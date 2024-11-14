// Info / Entertainment

document.getElementById ("src5").innerHTML = `
  <option value= 0 class="w">YouTube / Invidious
  <option value= 1 ># mp4 - BitChute
  <option value= 14>+ mp4 - Rumble
  <option value= 2 ># mp4 - Vimeo
  <option value= 3 >+ m3u - InfoWars
  <option value= 4 >+ m3u - Brighteon
  <option value= 5 ># m3u - DailyMotion
  <option value= 11># mp4 - 153News
  <option value= 17>? m3u - Odysee
  <option value= 21>+ mp4 - Twitter
  <option value= 22>? mp4 - Facebook
  <option value= 15>? mp4 - Telegram
  <option value= 28>? mp4 - TikTok
  <option value= 16>? mp4 - Gab TV
  <option value= 27># m3u - Twitch TV
  <option value= 8 >? m3u - PragerU
  <option value= 6 >? m3u - TEDTalks
  <option value= 7 >? m3u - NatFilmBrd
  <option value= 29>? m3u - Earth TV
  <option value= 25 class="b"># mp3 - iHeartRadio
  <option value= 23 class="b">? mp3 - Podcasts
`;

document.getElementById ("butt5").innerHTML = `
  <button onclick="javascript:copylist(this,5,1)">Stack 1</button>
  <button onclick="javascript:copylist(this,5,2)">Stack 2</button>
  <button onclick="javascript:copylist(this,5,3)">Stack 3</button>
  &nbsp;
  <button onclick="javascript:copylist(this,5,4)">BitChute</button>
  <button onclick="javascript:copylist(this,5,5)">Vimeo</button>
  <button onclick="javascript:copylist(this,5,6)">InfoWars</button>
`;

var stack_5_1 = [""
  , "0:NOZKLtIIUZE" , "Hitler Rant"
  , "0:m_MaJDK3VNE" , "Herding Cats"
  , "0:fXjtDs2wO4Q" , "The Martians"
  , "0:uaPKEbVypRQ" , "Typing Lesson"
  , "0:W-JhfjGtlp8" , "V - The Miniseries"
  , "0:kJAsn_vJyY4" , "Starship Enterprise"
];

var stack_5_2 = [""
  , "0:We-HMZDSWFU" , "Me and You and a Dog Named Boo"
  , "0:8Pa9x9fZBtY" , "Sultans of Swing"
  , "0:6Ath-3JGk8M" , "Flashdance: What A Feeling"
  , "0:onJspmvJr0E" , "Flashdance: Love's Theme"
  , "0:FnV0LqHd3h8" , "Make America Great Again"
  , "0:xB4iFysPm9Q" , "Karolina Protsenko"
];

var stack_5_3 = [""
  , "0:HtVdAasjOgU" , "Witcher 3 Trailer [age-gated]"
  , "0:CGq8Ee2gOe4" , "DooM at QuakeCon [age-gated]"
  , "0:0ZwfXUURS3g" , "Dukes of Hazzard"
  , "0:0pKfxbCHLoU" , "AKB48: Sustainable"
  , "0:vxl4gsvgEQY" , "Perfume: Tokyo Girl"
  , "0:74VHwppfHuI" , "The Best Is Yet To Come"
];

var stack_5_4 = [""
  , "1:ZPlfDFBkS6w7" , "Rod Stewart: Young Turks"
  , "1:sSKnCoWAbDos" , "Brother Nathaniel"
  , "1:A7jZJfaEJK2p" , "Malice in the Palace"
  , "1:Ol2plIF2otcI" , "QAnon Proofs"
];

var stack_5_5 = [""
  , "2:129463420" , "Miniatur Wunderland"
  , "2:166403522" , "Some Kind of Quest"
  , "2:31883614"  , "Star Trek: Aurora"
  , "2:175806163" , "Martian American"
];

var stack_5_6 = [""
  , "3:5d4c9fd22ec69a001858eb60" , "Alex Jones"
  , "3:5d4a339571d8e00017f8afaf" , "Owen Shroyer"
  , "3:5d4c54aae936660017aee3c0" , "Kaitlin Bennett"
];

var frame_req_5 = function (src, url, frame, fmt)
{
  if (src == 1  && (url = getid (url,-12))) req_bitchute (url, frame, fmt); else
  if (src == 14 && (url = getid (url, -8))) req_rumble (url, frame, fmt); else
  if (src == 2  && (url = getid (url, -9))) req_vimeo (url, frame, fmt); else
  if (src == 3  && (url = getid (url, 24))) req_infowars (url, frame, fmt); else
  if (src == 4  && (url = getid (url,  0))) req_brighteon (url, frame, fmt); else
  if (src == 5  && (url = getid (url, -7))) req_dailymotion (url, frame, fmt); else
  if (src == 11 && (url = getid (url, 12))) req_153news (url, frame, fmt); else
  if (src == 21 && (url = getid (url,  0))) req_twitter (url, frame, fmt); else
  if (src == 27 && (url = getid (url,  0))) req_twitchtv (url, frame, fmt); else
  if (src == 25 && (url = getid (url, -9))) req_iheartradio (url, frame, fmt); else

  if (src == 0  && (url = getid (url, 11))) request (url, frame, fmt); else

  no_fail (frame, url ? "Not supported" : "Invalid ID");
}
////////////////////

var frame_dig_5 = function (src, doc, frame, fmt)
{
  if (src == 14) dig_rumble (doc, frame, fmt); else
  if (src == 3 ) dig_infowars (doc, frame, fmt); else
  if (src == 4 ) dig_brighteon (doc, frame, fmt); else
  if (src == 17) dig_odysee (doc, frame, fmt); else
  if (src == 21) dig_twitter (doc, frame, fmt); else
  if (src == 22) dig_facebook (doc, frame, fmt); else
  if (src == 15) dig_telegram (doc, frame, fmt); else
  if (src == 28) dig_tiktok (doc, frame, fmt); else
  if (src == 16) dig_gabtv (doc, frame, fmt); else
  if (src == 8 ) dig_prageru (doc, frame, fmt); else
  if (src == 6 ) dig_tedtalks (doc, frame, fmt); else
  if (src == 7 ) dig_natfilmbrd (doc, frame, fmt); else
  if (src == 29) dig_earthtv (doc, frame, fmt); else
  if (src == 23) dig_podcast (doc, frame, fmt); else

  no_fail (frame, "Not supported");
}
////////////////////

var request = async (id, frame, fmt) =>
{
  if (is_busy (frame)) return; else if (id [0] == "@") try
  {
    document.getElementById ("id" + frame).value = "youtube";
    id = "https://www.youtube.com/embed/live_stream?channel=" + id.substr (1);
    response = await kitty (cors_bypass + id); textData = await response.text();

    id = pullstring (textData, '<link rel="canonical" href="', '"');
    id = id.substr (-11); if (id.length != 11) throw ("!!!");
  }
  catch (err) { console.log (err); busy = 0; no_fail (frame); return; }

  if (!document.getElementById ("mov" + frame + "b").checked)
  {
    var url = "https://www.youtube.com/embed/" + id;
    no_fail (frame); loadwindow (url, frame, "youtube: " + id); return;
  }

  busy = 0; var src = document.getElementById ("ctr" + frame + "z").value;

  if (src == 1) if (fmt < 0) src = 0; else { request_youtube (id, frame, fmt); return; }
  if (src == 9) if (fmt < 0) src = 0; else { request_youtube (id, frame, -fmt); return; }

  if (!src && cors_kraker) { request_youtube (id, frame, fmt); return; }

  invidious_url = invidious_site [src]; request_invidious (id, frame, (fmt < 0 ? -fmt : fmt));
}
////////////////////

const request_invidious = async (id, frame, fmt) =>
{
  var i, j, n, f = [0,0,0,0,0,0,0,0];

  var tag = "invidious"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = invidious_url + "/api/v1/videos/" + id + "?fields=formatStreams,hlsUrl";

try
{
  response = await kitty (localhost + url);
  jsonData = await response.json();

  var sub = jsonData.formatStreams; if (!sub) throw ("!!!"); n = sub.length;

  for (i = 0; i < n; i++)
  {
    if ((j = argformat (sub[i].itag)) >= 0) f[j] = i + 1;
  }
    
  if ((n = getformat (f, fmt)))
  {
    fmt = n; fixformat (f, frame); n = f[argformat(n)] - 1;
    url = (sub[n].url.indexOf ("&gcr=") > 0) ? "local=true&" : "";  // geo-restricted?
    url = invidious_url + "/latest_version?" + url + "itag=" + fmt + "&id=" + id;
  }
  else   // live stream
  {
    url = jsonData.hlsUrl; if (!url) throw ("!!!");
    if (url.substr (0,1) == "/") url = invidious_url + url;
    sub = url = url + "?local=true";

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

/*
Youtube DRM formats:
142 143 144 145 146 148 149 150 161
222 223 224 225 226 227 273 274 275 279 280
317 318 350 351 352 357 358 359 360 

https://www.youtube.com/iframe_api

t.context = { client: { gl: 'US', hl: 'en', clientName: 'WEB', clientVersion: '2.20230426.02.00' }};
t.context = { client: { gl: 'US', hl: 'en', clientName: 'ANDROID_EMBEDDED_PLAYER', clientVersion: '16.02' }};
t.context = { client: { gl: 'US', hl: 'en', clientName: 'WEB_EMBEDDED_PLAYER', clientVersion: '1.20240708.01.00' }};
t.context = { client: { gl: 'US', hl: 'en', clientName: 'TVHTML5_SIMPLY_EMBEDDED_PLAYER', clientVersion: '2.0' }};
t.playbackContext = { contentPlaybackContext: { signatureTimestamp: "sts", html5Preference: "HTML5_PREF_WANTS" }};
t.context.thirdParty = { embedUrl: 'https://www.youtube.com' };
*/

const request_youtubex = async (id, frame, fmt) =>
{
  var i, j, n, s, t, sub, vid, aud, key, sig, nkey, webm, f = [0,0,0,0,0,0,0,0,0,0];

  var tag = "youtube"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
//  var ua = "user-agent=!Mozilla/5.0 (Android 14; Mobile; rv:128.0) Gecko/128.0 Firefox/128.0|*";

  var url = cors_bypass + (cors_kraker ? "user-agent=|*" : "") + "https://www.youtube.com/watch?v=" + id;
  if (!localhost || localhost != cors_kraker) if (fmt < 0) fmt = -fmt;

try
{
  response = await kitty (url);
  textData = await response.text();

  i = textData.indexOf (s = "var ytInitialPlayerResponse = "); if (i > 0) i += s.length;
  j = textData.indexOf ('"timestamp":', i); if (j > 0) j = textData.indexOf ('};', j);

  url = (i < 0 || j < 0) ? "" : textData.substr (i, j - i + 1);
  if (url) try { sub = JSON.parse (url) } catch { url = "" }

  if (!url || !(sub = sub.streamingData))
  {
    if (s = pullstring (textData, '"PLAYER_JS_URL":"', '"'))
    {
      s = "https://www.youtube.com" + s.replace ("/base.js", "/offline.js");
      response = await kitty (cors_bypass + s); s = await response.text();
      s = pullstring (s, "signatureTimestamp:", ",");
    }
    n = s ? s * 1 : Math.trunc (Date.now() / 86400000) - 1;

    t = {
      videoId: id, playbackContext: { contentPlaybackContext: { signatureTimestamp: n }},
      context: { client: { gl: 'US', hl: 'en', clientName: 'TVHTML5_SIMPLY_EMBEDDED_PLAYER', clientVersion: '2.0' }}
    };
    s = JSON.stringify (t);

    url = cors_bypass + "https://www.youtube.com/youtubei/v1/player";
    response = await kitty (url, { method: 'POST', headers: {'content-type': 'application/json'}, body: s });
    jsonData = await response.json();

    if (!(sub = jsonData.streamingData)) throw ("!!!");
  }

  if (fmt < 0 && (fmt = -fmt) && (t = sub.adaptiveFormats))
  {
    for (i = 0; i < t.length; i++)
      if ((s = t[i].itag) && (j = isdashfmt (s)) >= 0)
        if (t[i].approxDurationMs || t[i].targetDurationSec) f[j] = i + 1;

    if (!f[8]) f[0] = f[1] = f[2] = 0;
    if (!f[9]) f[4] = f[5] = f[6] = 0;
    if (getformat (f, fmt)) tag = "";
  }

  if (tag && (t = sub.formats))
    for (i = 0; i < t.length; i++) if ((s = t[i].itag) && (j = argformat (s)) >= 0) f[j] = i + 1;

  fmt = getformat (f, fmt); fixformat (f, frame);
  if ((i = argformat (fmt)) < 0 || (j = f [i] - 1) < 0) throw ("!!!");

  webm = i > 3; if (!tag) aud = new_yt_split (t [f [webm + 8] - 1]);
  vid = new_yt_split (t [j]); url = vid [0]; sig = vid [1]; if (!url) throw ("!!!");

  if (sig || url.includes ("&n="))
  {
    if (!(s = pullstring (textData, '"PLAYER_JS_URL":"', '"')))
    {
      response = await kitty (cors_bypass + "https://www.youtube.com/embed/" + id);
      textData = await response.text();

      s = textData.substr (textData.indexOf ("base.js") - 100, 107);
      if ((i = s.indexOf ("/s/player/")) < 0) throw ("!!!"); s = s.substr (i);
    }

    key = cookies [s]; nkey = cookies ["!" + s];

    if ((sig && !key) || (!sig && !nkey))
    {
      response = await kitty (cors_bypass + "https://www.youtube.com" + s);
      textData = await response.text();

      cookies [s] = key = yt_algo (textData);

      // extract the n signature algo (needed to bypass the rate limiting)
      // as of July 2024, videos won't play without this

//      if ((n = textData.indexOf ('function(a){var b=a.split("")')) > 0)
//      {
//        t = textData.substr (n, textData.indexOf ('b.join("")', n) - n + 12);
//        cookies ["!" + s] = nkey = "var nsig=" + t + " sig=nsig(sig);";
//      }

      if (n = textData.indexOf ('var b=a.split(a.slice(0,0))') + 1)
      {
        t = textData.substr (--n, textData.indexOf ('b.join("")', n) - n);
        t = 'function(a){var b=a.split(""' + t.substr (t.indexOf ('),')) + 'b.join("")};';
        cookies ["!" + s] = nkey = "var nsig=" + t + " sig=nsig(sig);";
      }
    }

    url = yt_nsig (url, nkey); if (sig && key) { eval (key); url += "&sig=" + sig; }
  }

  if (!tag) if (!(sub = yt_nsig (aud [0], nkey))) throw ("!!!"); else
  {
    var v = aud [3] + "," + vid [3], w = "wanna_boot_dash";

    if (key && (sig = aud [1])) { eval (key); sub += "&sig=" + sig; }

    download_doc = doc_head + "YouTube DASH download links (" + id + ") -- " +
      "<a href='" + sub + "'>Audio</a> &nbsp;" +
      "<a href='" + url + "'>Video</a>" + doc_tail;

    if (!(s = vid [2]))
    {
      v = "x-head-seqnum"; w = "x-head-time-sec";
      s = "~range=bytes=0-499|" + v + "|" + w + "|*";

      response = await kitty (localhost + s + url);
      v = response.headers.get (v); if (!v) throw ("!!!");
      w = response.headers.get (w); if (!w) throw ("!!!");

      var seg_num = v * 1; var seg_ofs = w * 1;
      var seg_dur = Math.round (10 * seg_ofs / seg_num) / 10;
      n = Math.ceil (90 / seg_dur); // initial 90-second progress bar; can be up to 3 hours

      seg_num -= n; seg_ofs -= Math.round (n * 10 * seg_dur) / 10;
      if (seg_num < 1 || seg_ofs < 1) seg_num = seg_ofs = 0;

      v = seg_num + "," + seg_ofs + "," + seg_dur + ",";
      w = "wanna_boot_dash_live"; s = "";
    }

    tag = fmt + "(" + id + ").mpd";
    s += "|" + (webm ? "audio/webm" : "audio/mp4") + "|" + (webm ? "opus" : "mp4a.40.2");
    s += "|" + (webm ? "video/webm" : "video/mp4") + "|" + (webm ? "vp9" : "avc1.4d401e");
    s += "|" + v + "|" + tag + "|" + sub + "|" + url + "|";

    await kitty (localhost + w, { method: 'POST', body: s } );
    url = localhost + "_" + w + "_" + tag; tag = "yt-dash"; stream_all (frame, 2);
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

// https://www.youtube.com/watch?v=VaSV4NtZCXU - mp4 video with webm audio

const request_youtube = async (id, frame, fmt) =>
{
  var i, j, n, s, t, sub, vid, aud, key, sig, nkey, webm, f = [0,0,0,0,0,0,0,0,0,0];

  var tag = "youtube"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  if (!localhost || localhost != cors_kraker) if (fmt < 0) fmt = -fmt;

  var ua1 = cors_bypass + (cors_kraker ? "user-agent=|*" : "");
  var ua2 = ua1.replace ("|*", "!Mozilla/5.0 (Android 14)|*");
  var url, dash = false;

try
{
  response = await kitty (ua1 + "https://www.youtube.com/embed/" + id);
  textData = await response.text();

  if (!(s = pullstring (textData, '"jsUrl":"', '"'))) throw ("!!!");
  key = cookies [s]; nkey = cookies ["!" + s]; n = cookies ["?" + s];

  if (!key || !nkey || !n)
  {
    response = await kitty (ua1 + "https://www.youtube.com" + s);
    textData = await response.text();

    if ((n = textData.indexOf ('var b=a.split(a.slice(0,0))')) < 0) nkey = ""; else
    {
      t = textData.substr (n, textData.indexOf ('b.join("")', n) - n);
      t = 'function(a){var b=a.split(""' + t.substr (t.indexOf ('),')) + 'b.join("")};';
      nkey = "var nsig=" + t + " sig=nsig(sig);";
    }

    cookies [s] = key = yt_algo (textData);
    cookies ["!" + s] = nkey; t = pullstring (textData, "signatureTimestamp:", "}");
    cookies ["?" + s] = n = t ? t * 1 : Math.trunc (Date.now() / 86400000) - 1;
  }

  t = JSON.stringify ({
    videoId: id, playbackContext: { contentPlaybackContext: { signatureTimestamp: n }},
    context: { client: { gl: 'US', hl: 'en', clientName: 'WEB_EMBEDDED_PLAYER', clientVersion: '1.20241009.01.00' }}
  });

  try
  {
    url = cors_kraker + ua1 + "https://www.youtube.com/youtubei/v1/player";
    response = await kitty (url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: t });
    jsonData = await response.json();
  }
  catch { jsonData = {}; }

  if (!(sub = jsonData.streamingData))
  {
    response = await kitty (ua2 + "https://m.youtube.com/watch?v=" + id);
    textData = await response.text();

    s = pullstring (textData, '"formats":[', ']');
    t = pullstring (textData, '"adaptiveFormats":[', ']');

    sub = JSON.parse ('{"formats":[' + s + '],"adaptiveFormats":[' + t + ']}');
  }

  if (fmt < 0 && (fmt = -fmt) && (t = sub.adaptiveFormats))
  {
    for (i = 0; i < t.length; i++)
      if ((s = t[i].itag) && (j = isdashfmt (s)) >= 0)
        if (t[i].approxDurationMs || t[i].targetDurationSec) f[j] = i + 1;

    if (!f[8]) f[0] = f[1] = f[2] = 0;
    if (!f[9]) f[4] = f[5] = f[6] = 0;
    if (getformat (f, fmt)) dash = true;
  }

  if (!dash && (t = sub.formats)) for (i = 0; i < t.length; i++)
    if ((s = t[i].itag) && (j = argformat (s)) >= 0) f[j] = i + 1;

  fmt = getformat (f, fmt); fixformat (f, frame);
  if ((i = argformat (fmt)) < 0 || (j = f[i] - 1) < 0) throw ("!!!");

  webm = i > 3; if (dash) aud = yt_split (t [f [webm + 8] - 1]);
  vid = yt_split (t [j]); url = vid [0]; sig = vid [1]; if (!url) throw ("!!!");

  url = yt_nsig (url, nkey); if (sig && key) { eval (key); url += "&sig=" + sig; }

  if (dash) if (!(sub = yt_nsig (aud [0], nkey))) throw ("!!!"); else
  {
    var v = aud [3] + "," + vid [3], w = "wanna_boot_dash";

    if (key && (sig = aud [1])) { eval (key); sub += "&sig=" + sig; }

    download_doc = doc_head + "YouTube DASH download links (" + id + ") -- " +
      "<a href='" + sub + "'>Audio</a> &nbsp;" +
      "<a href='" + url + "'>Video</a>" + doc_tail;

    if (!(s = vid [2]))  // livestream
    {
      v = "x-head-seqnum"; w = "x-head-time-sec";
      s = "~range=bytes=0-499|" + v + "|" + w + "|*";

      response = await kitty (localhost + s + url);
      v = response.headers.get (v); if (!v) throw ("!!!");
      w = response.headers.get (w); if (!w) throw ("!!!");

      var seg_num = v * 1; var seg_ofs = w * 1;
      var seg_dur = Math.round (10 * seg_ofs / seg_num) / 10;
      n = Math.ceil (90 / seg_dur); // initial 90-second progress bar; can be up to 3 hours

      seg_num -= n; seg_ofs -= Math.round (n * 10 * seg_dur) / 10;
      if (seg_num < 1 || seg_ofs < 1) seg_num = seg_ofs = 0;

      v = seg_num + "," + seg_ofs + "," + seg_dur + ",";
      w = "wanna_boot_dash_live"; s = "";
    }

    aud = aud [4] || (webm ? "opus" : "mp4a.40.2");
    vid = vid [4] || (webm ? "vp9" : "avc1.4d401e");

    t = fmt + "(" + id + ").mpd";
    s += "|" + (webm ? "audio/webm" : "audio/mp4") + "|" + aud;
    s += "|" + (webm ? "video/webm" : "video/mp4") + "|" + vid;
    s += "|" + v + "|" + t + "|" + sub + "|" + url + "|";

    await kitty (localhost + w, { method: 'POST', body: s } );
    url = localhost + "_" + w + "_" + t; tag = "yt-dash"; stream_all (frame, 2);
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const yt_split = function (data)
{
  var d, i, j, m, s = "", u = data.url;

  if (!u) if (!(u = data.signatureCipher)) u = ""; else
  {
    u = u.replace (/%25/g, "%"); u = decodeURIComponent (u);
    s = pullstring (u, "s=", "&"); u = pullstring (u, "url=", "");
  }

  i = (d = data.initRange)  ? d.start + "-" + d.end : "";
  j = (d = data.indexRange) ? d.start + "-" + d.end : "";
  d = data.approxDurationMs || 0; m = data.mimeType || "";

  return ([u, s, d / 1000, i + "," + j, pullstring (m, '"', '"')]);
}
////////////////////

const yt_algo = function (data)
{
  var i, j, n, s, v;

  for (i = 0; i < 3; i++)
  {
    j = data.indexOf ('a=a.split("")'); if (j < 0) return "";
    s = data.substr (j + 14, 300); if ((n = s.indexOf ("a.join")) > 0) break;
    if (i > 1) return ""; data = data.substr (j + 1);
  }

  s = s.substr (0, n - 7);
  v = "var " + s.substr (0, s.indexOf (".")) + "={";  // August 28, 2023
  if ((n = data.indexOf (v)) < 0) return "";

  v = data.substr (n, 300); v = v.substr (0, v.indexOf ("};") + 2);
  return (v + "var a=sig.split('');" + s + "sig=a.join('');");
}
////////////////////

const yt_nsig = function (url, nkey)
{
  var sig = pullstring (url, "&n=", "&"); if (!nkey || !sig) return url;
  var s = "&n=" + sig + "&"; eval (nkey); sig = "&n=" + sig + "&";
  return (url.replace (s, sig));
}
////////////////////

const req_bitchute = async (id, frame, fmt) =>
{
  var tag = "bitchute"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = "https://www.bitchute.com/embed/" + id + "/";

if (!document.getElementById ("mov" + frame + "b").checked) fmt = 0; else try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, "var media_url = '", "'"); if (!url) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  error = id; no_format (frame); if (no_fail (frame)) loadwindow (url, frame, tag + ": " + id);
}
////////////////////

const req_rumble = async (id, frame, fmt) =>
{
  var n, p, q, r, f = [0,0,0,0,0,0,0,0], u = [0,0,0,0,0,0,0,0];

  var tag = "rumble"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  n = id [0] == "*"; if (n) id = id.substr (1);
  var url = "https://rumble.com/embed/" + id;

if (!document.getElementById ("mov" + frame + "b").checked) fmt = 0; else try
{
  url = "https://rumble.com/embedJS/u3/?request=video&ver=2&v=";

  response = await kitty (localhost + url + id);
  jsonData = await response.json();

  if (!(p = jsonData.ua)) if (n) throw ("!!!"); else
  {
    busy = 0; dig_rumble ("https://rumble.com/" + id, frame, fmt); return;
  }

  if (!p.hls || !p.hls.auto || !(url = p.hls.auto.url))
  {
    if (q = p.mp4)
    {
      if ((r = q["240"]) && (u[0] = r.url)) f[0] = 240;
      if ((r = q["360"]) && (u[0] = r.url)) f[0] = 360;
      if ((r = q["480"]) && (u[1] = r.url)) f[1] = 480;
      if ((r = q["720"]) && (u[2] = r.url)) f[2] = 720;
      if ((r = q["1080"]) && (u[3] = r.url)) f[3] = 1080;
    }
    if (q = p.webm)
    {
      if ((r = q["240"]) && (u[4] = r.url)) f[4] = 240;
      if ((r = q["360"]) && (u[4] = r.url)) f[4] = 360;
      if ((r = q["480"]) && (u[5] = r.url)) f[5] = 480;
      if ((r = q["720"]) && (u[6] = r.url)) f[6] = 720;
      if ((r = q["1080"]) && (u[7] = r.url)) f[7] = 1080;
    }

    fmt = getformat (f, fmt); fixformat (f, frame);
    if ((n = argformat (fmt)) < 0) throw ("!!!");
    fmt = f[n]; url = u[n];
  }
  else if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (localhost + url);
    textData = await response.text();

    url = response.url.substr (localhost.length);
    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

  url = url.replace ("https:", "http:");

} catch (err) { console.log (err); busy = 0; }

  error = id; if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_vimeo = async (id, frame, fmt) =>
{
  var i, j, k, s, f = [0,0,0,0,0,0,0,0], r = [0,0,0,0];

  var tag = "vimeo"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = "https://player.vimeo.com/video/" + id;

if (!document.getElementById ("mov" + frame + "b").checked) fmt = 0; else try
{
  if (!localhost || localhost != cors_kraker) throw ("???");

  response = await kitty (cors_kraker + "!mock:1A|*" + url);
  textData = await response.text();

  s = pullstring (textData, 'window.playerConfig = ', '</'); jsonData = JSON.parse (s);

  if (!(url = jsonData.request.files.progressive) || !url.length)  // livestream
  {
    if (!(url = jsonData.request.files.hls) || !(url = url.cdns)) throw ("!!!");
    if (!(s = url.fastly_live) && !(s = url.fastly_skyfire)) s = url.akamai_live;
    if (!s && !(s = url.akfire_interconnect_quic)) throw ("!!!");
    if (!(url = s.url)) throw ("!!!");

    if (localhost) url = localhost + "~" + url;

    if (stream_all (frame, 1)) fmt = 0; else
    {
      response = await kitty (url);
      textData = await response.text();
      url = response.url;

      url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
      fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
    }
  }
  else
  {
    for (i = 0; i < url.length; i++)
    {
      k = url[i].quality; k = k.substr (0, k.indexOf ("p"));
      if ((j = chkformat (k)) >= 0) if (r[j] < k) { f[j] = i + 1; r[j] = k; }
    }
    fmt = getformat (f, fmt); fixformat (f, frame);
    if ((j = argformat (fmt)) < 0 || (j = f[j] - 1) < 0) throw ("!!!");
    fmt = url[j].height; if ((url = url[j].url) == undefined) throw ("!!!");
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_infowars = async (id, frame, fmt) =>
{
  var tag = "infowars"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
//var url = "https://api.banned.video/embed/" + id;
//var url = "https://freeworldnews.tv/watch?id=" + id;
  var url = "https://api.infowarsmedia.com/embed/" + id;

//https://github.com/yt-dlp/yt-dlp/issues/669

try
{
  response = await kitty (localhost + url);
  textData = await response.text();

  url = pullstring (textData, 'downloadUrl="', '"');
  if (!url) url = pullstring (textData, '"directUrl":"', '"');

  download_doc = doc_head + "InfoWars download link: ";

  if (url.indexOf ("http") == 0)
    download_doc = download_doc + "<a href='" + url + "'>" + url + "</a>" + doc_tail; else
    download_doc = download_doc + "Not available" + doc_tail;

  var s = pullstring (textData, '<source src="', '"');
  if (!s) s = pullstring (textData, '"streamUrl":"', '"');
  if (s) url = s; if (!url) throw ("!!!");

  if (!url.includes (".m3u8") || stream_all (frame, 1)) fmt = 0; else
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

const req_brighteon = async (id, frame, fmt) =>
{
  var url, tag = "brighteon"; if (is_busy (frame)) return;

  if (!(url = getid (id, 36)) && !(url = getid (id, 13)))
  {
    busy = 0; no_fail (frame, "Invalid ID"); return;
  }
  document.getElementById ("id" + frame).value = tag + " (ID)";
  id = url; url = "https://www.brighteon.com/" + id;

if (!document.getElementById ("mov" + frame + "b").checked) fmt = 0; else try
{
  if (!localhost || localhost != cors_kraker) throw ("???");

  response = await kitty (cors_kraker + url);
  textData = await response.text();

  var s = '<source src="';
  var n = textData.indexOf (s); if (n < 0) throw ("!!!");

  url = textData.substr (n + s.length, 300);
  url = url.substr (0, url.indexOf ('"'));
  url = url.replace (/&#x3D;/g, "=");

  if (url.indexOf ("m3u8") < 0) throw ("!!!");
  url = cors_kraker + "~" + url;

  if (stream_all (frame, 1)) fmt = 0; else
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

const req_dailymotion = async (id, frame, fmt) =>
{
  var tag = "dailymotion"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = "https://www.dailymotion.com/embed/video/" + id;

if (!document.getElementById ("mov" + frame + "b").checked) fmt = 0; else try
{
  url = "https://www.dailymotion.com/player/metadata/video/" + id;

  response = await kitty (localhost + url);
  jsonData = await response.json();

  var n; url = jsonData.qualities.auto[0].url;

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (localhost + url);
    textData = await response.text();

    url = response.url.substr (localhost.length);
    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

  n = url.indexOf ("#"); if (n > 0) url = url.substr (0, n);  // for SMPlayer
  if (localhost) url = localhost + "~*,,*" + url;

} catch (err) { console.log (err); busy = 0; }

  error = id; if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_153news = async (id, frame, fmt) =>
{
  var tag = "153news"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  var url = "https://153news.net/watch_video.php?v=" + id;

try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  var n = textData.indexOf ("<video"); if (n < 0) throw ("!!!");

  url = crack_source (textData.substr (n, 2000), frame, fmt);
  if (url == "") throw ("!!!"); n = url.indexOf ("<>");
  fmt = url.substr (n + 2); url = url.substr (0, n);

} catch (err) { console.log (err); busy = 0; }

  error = id; if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_twitter = async (id, frame, fmt) =>
{
  var url, tag = "twit"; if (is_busy (frame)) return;

  if (!(url = getid (id, -19)) && !(url = getid (id, 13)))
  {
    busy = 0; no_fail (frame, "Invalid ID"); return;
  }
  id = url; document.getElementById ("id" + frame).value = tag + " (ID)";

try
{
  if (!cors_kraker) throw ("???");

  if (id.length != 13)
  {
    url = cors_kraker + "https://cdn.syndication.twimg.com/tweet-result?id=" + id;

    response = await kitty (url + "&token=422kr3t824n");
    jsonData = await response.json();

    var t = jsonData, s = t.video; if (!s && (s = t.quoted_tweet)) s = s.video;

    if (!s || !(s = s.variants))
    {
      if ((s = t.entities) && (s = s.urls [0]) && (s = s.expanded_url))
      {
        s = pullstring (s, '/spaces/', '') || pullstring (s, '/broadcasts/', '');
        if (s.length == 13) id = s; else s = "";
      }
      if (!s) throw ("!!!");
    }
  }

  if (id.length == 13)
  {
    var b = "Bearer AAAAAAAAAAAAAAAAAAAAAPYXBAAAAAAACLXUNDekMxqa8h" +
      "%2F40K4moUkGsoc%3DTYfbDKbT3jJPCEVnMYqilB28NHfOPqkca3qaAxGfsyKCs0wRbw";
    var t = "a00c423812149cefa8a26ed20bd34b6976f4511c52f07cb37e787adf883c438c1dc59e2537" +
      "f073c78c3bfae81dcc86af592efed2a51655ad7835445a73c1b964a5b60b68b571967dc0e3674d058ab0df";
    var c = "ct0=" + t + "; auth_token=bfe4fab329336d5c2ddfd0a292e116413f197b13";

    url = cors_kraker + "https://api.twitter.com/1.1/guest/activate.json";

    response = await kitty (url, { method: 'POST', headers: { authorization: b } });
    jsonData = await response.json();

    var g = jsonData.guest_token; if (!g) throw ("!!!");

    url = cors_kraker + "https://twitter.com/i/api/1.1/";
    var u = url + "broadcasts/show.json?ids=" + id;

    response = await kitty (u, { headers: { authorization: b, 'x-guest-token': g } });
    jsonData = await response.json();

    var v = {
      "id": id, "isMetatagsQuery":true, "withReplays":true, "withListeners":true
    }
    var w = {
      "spaces_2022_h2_clipping":true, "spaces_2022_h2_spaces_communities":true,
      "responsive_web_graphql_exclude_directive_enabled":true, "verified_phone_label_enabled":false,
      "creator_subscriptions_tweet_preview_api_enabled":true,
      "responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,
      "tweetypie_unmention_optimization_enabled":true, "responsive_web_edit_tweet_api_enabled":true,
      "graphql_is_translatable_rweb_tweet_is_translatable_enabled":true, "view_counts_everywhere_api_enabled":true,
      "longform_notetweets_consumption_enabled":true, "responsive_web_twitter_article_tweet_consumption_enabled":false,
      "tweet_awards_web_tipping_enabled":false, "freedom_of_speech_not_reach_fetch_enabled":true,
      "standardized_nudges_misinfo":true,
      "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":true,
      "responsive_web_graphql_timeline_navigation_enabled":true, "longform_notetweets_rich_text_read_enabled":true,
      "longform_notetweets_inline_media_enabled":true, "responsive_web_media_download_video_enabled":false,
      "responsive_web_enhance_cards_enabled":false
    }

    if (!(u = jsonData.broadcasts[id].media_key))
    {
      v = encodeURIComponent (JSON.stringify (v));
      w = encodeURIComponent (JSON.stringify (w));
      u = "?variables=" + v + "&features=" + w;
      u = cors_kraker + "~**https://twitter.com/i/api/graphql/NgGZ325iUTdno0iBOZRGOA/AudioSpaceById" + u;

      response = await kitty (u, { headers: { authorization: b, accept: "**" + c, 'x-csrf-token': t }});
      jsonData = await response.json();

      if (!(u = jsonData.data.audioSpace.metadata.media_key)) throw ("!!!");
    }
    url += "live_video_stream/status/" + u;

    response = await kitty (url, { headers: { authorization: b, 'x-guest-token': g } });
    jsonData = await response.json();

    url = jsonData.source.location; if (!url) throw ("!!!");
    if (localhost) url = localhost + "~*,,*" + url;

    if (stream_all (frame, 1)) fmt = 0; else
    {
      response = await kitty (url);
      textData = await response.text();

      url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
      fmt = pullstring (url, "<>", "") * 1; url = pullstring (url, "", "<>");
    }
  }
  else
  {
    var n, j, f = [0,0,0,0,0,0,0,0], r = [0,0,0,0];

    for (n = 0; n < s.length; n++)
    {
      url = s[n].src; j = url.search (/[0-9]x[0-9]/); if (j < 0) { f[3] = n + 1; continue; }
      url = url.substr (j + 2, url.indexOf ("/", j) - j - 2) * 1;
      if ((j = chkformat (url)) < 0 || r[j] > url) continue;
      f[j] = n + 1; r[j] = url;
    }
    download_doc = doc_head + "Twitter download links (" + id + "): ";

    for (n = 0; n < 3; n++) if (j = f [n])
    {
      url = s [j - 1].src;
      download_doc += " &nbsp;<a href='" + url + "'>" + pixformat (n) + "p</a>";
    }
    download_doc += doc_tail;

    if (!(j = f [3]) || !(url = s [j - 1].src))
    {
      j = getformat (f, fmt); fixformat (f, frame);
      if ((j = argformat (j)) < 0 || (n = f[j] - 1) < 0) throw ("!!!");
      j = r[j]; url = s[n].src;
    }
    else if (url.includes (".mp4") || stream_all (frame, 1)) fmt = 0; else
    {
      response = await kitty (url);
      textData = await response.text();

      url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
      fmt = pullstring (url, "<>", "") * 1; url = pullstring (url, "", "<>");
    }
  }

} catch (err) { console.log (err); busy = 0; }

  error = id; if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_twitchtv = async (id, frame, fmt) =>
{
  var tag = "twitch"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
  id = id.split ("/"); id = id [id.length - 1];
  var url = "https://www.twitch.tv/" + id;

try
{
  var local = (localhost && cors_kraker) ? localhost : "";

  response = await kitty (local + url);
  textData = await response.text();

  var p = '\\"' + id + '\\", params:{platform:\\"web\\",playerType:\\"site\\"}';
  var q = ') @include(if:true){value signature}';

  p = '{"operationName":"PlaybackAccessToken_Template","query":"query PlaybackAccessToken_Template(){' +
    'streamPlaybackAccessToken(channelName:' + p + q + ' videoPlaybackAccessToken(id:' + p + q + '}"}';

  q = pullstring (textData, '"Client-ID":"', '"');
  if (!q) q = pullstring (textData, 'clientId="', '"'); if (!q) throw ("!!!");
  url = local + "https://gql.twitch.tv/gql";

  response = await kitty (url, { method: 'POST', body: p, headers: { 'client-id': q } });
  jsonData = await response.json();

  url = jsonData.data; if (!url) throw ("!!!");
  url = id * 1 ? url.videoPlaybackAccessToken : url.streamPlaybackAccessToken;
  url = ".m3u8?sig=" + url.signature + "&token=" + encodeURIComponent (url.value);
  url = "https://usher.ttvnw.net/" + (id * 1 ? "vod/" : "api/channel/hls/") + id + url;

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty ((local ? local + "~" : "") + url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
    fmt = fmt * 1;
  }
  if (local) url = local + "~*null,,*" + url;

} catch (err) { console.log (err); busy = 0; }

  error = id; if (!fmt) no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: " + id);
}
////////////////////

const req_iheartradio = async (id, frame, fmt) =>
{
  var tag = "iheartradio"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (ID)";
//  var url = "https://ca.api.iheart.com/api/v2/playback/streams";
  var url = "https://ca.api.iheart.com/api/v3/podcast/episodes/" + id;

try
{
  response = await kitty (localhost + url);
  jsonData = await response.json();

  url = jsonData.episode.mediaUrl; if (!url) throw ("!!!");

/*
  var header = { 'Content-Type': 'application/json', 'X-User-Id': '2473436724', 'X-Session-Id': '9jhqgkoyUST8iPLzLiFtDK' };
  var data = JSON.stringify ({'contentIds':[id],'hostName':'webapp','playedFrom':0,'stationId':'','stationType':'PODCAST'});

  response = await kitty (localhost + url, { method: 'POST', headers: header, body: data } );
  jsonData = await response.json();

  url = jsonData.items[0].streamUrl; if (!url) throw ("!!!");
  var n = url.indexOf ("?"); if (n > 0) url = url.substr (0, n);
*/

} catch (err) { console.log (err); busy = 0; }

  error = id; no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + ": " + id);
}
////////////////////

const dig_rumble = async (doc, frame, fmt) =>
{
  var m, p, q, tag = "rumble"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, '"video":"', '"');

  if (url.length < 6 || url.length > 8) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_rumble ("*" + url, frame, fmt);
}
////////////////////

const dig_infowars = async (doc, frame, fmt) =>
{
  var tag = "infowars"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = localhost + doc; if (url.indexOf ("infowars") < 0) url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  var s = 'data-video-id="';
  var n = textData.indexOf (s);
  
  if (n > 0) url = textData.substr (n + s.length, 200); else
  {
    n = textData.indexOf ('<iframe src="'); if (n < 0) throw ("!!!");
    url = textData.substr (n, 200);

    n = url.indexOf ("/embed/"); if (n < 0) throw ("!!!");
    url = url.substr (n + 7);
  }

  url = url.substr (0, url.indexOf ('"'));
  if ((n = url.indexOf ("?")) > 0) url = url.substr (0, n);

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_infowars (url, frame, fmt);
}
////////////////////

const dig_brighteon = async (doc, frame, fmt) =>
{
  var tag = "brighteon"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  var s = "/embed/"; var n = textData.indexOf (s);
  if (n < 0) { s = '"videoKey":"'; n = textData.indexOf (s); }
  if (n < 0) throw ("!!!");

  url = textData.substr (n + s.length, 100);
  url = url.substr (0, url.indexOf ('"'));

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_brighteon (url, frame, fmt);
}
////////////////////

const dig_odysee = async (doc, frame, fmt) =>
{
  var n, s, t, u, tag = "odysee"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = doc, src = cors_kraker ? cors_kraker + "*https://odysee.com*" : "";

try
{
  if (!doc.includes ("/stream/"))
  {
    if ((n = doc.indexOf ("/embed/")) > 0)
    {
      u = doc.substr (n + 7); n = u.indexOf ("?"); if (n > 0) u = u.substr (0, n);
    }
    else
    {
      response = await kitty (cors_bypass + url);
      textData = await response.text();

      u = pullstring (textData, '"og:url" content="', '"'); if (!u) throw ("!!!");
      u = u.split ("/").slice (3).join ("/");
    }
    u = "lbry://" + u.replace (":", "#");

    s = JSON.stringify ({ jsonrpc: "2.0", method: "get", params: { uri: u }});
    t = JSON.stringify ({ jsonrpc: "2.0", method: "resolve", params: { urls: [u] }});
    url = cors_bypass + "https://api.na-backend.odysee.com/api/v1/proxy";

    response = await kitty (url, { method: 'POST', body: s });
    jsonData = await response.json();

    if (!(s = jsonData.result) || !(s = s.streaming_url))
    {
      response = await kitty (url, { method: 'POST', body: t });
      jsonData = await response.json();

      url = jsonData.result [u].signing_channel.claim_id;
      url = "https://cloud.odysee.live/content/" + url + "/master.m3u8";
    }
    else if (!(url = s).includes ("/streams/"))
    {
      url = pullstring (url, "/stream/", ""); if (!url) throw ("!!!");
      url = "https://player.odycdn.com/api/v4/streams/free/" + url + "/x";
    }
  }

  if (url.includes (".m3u8")) t = ""; else
  {
    response = await kitty (src + url, { method: 'HEAD' });
    if (response.status != 200) throw ("!!!");
    t = response.headers.get ("content-type");
    url = response.url.substr (src.length);
  }

  if (t.match (/\b(audio\/|video\/)/) || stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////

const dig_twitter = async (doc, frame, fmt) =>
{
  var tag = "twitter"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, '/status/', '"');
  if (!url) url = pullstring (textData, '/spaces/', '"');
  var n = url.search (/\/|\?/); if (n > 0) url = url.substr (0, n);
  if (url.length != 13 && (url.length < 17 || url.length > 19)) throw ("!!!"); 

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) req_twitter (url, frame, fmt);
}
////////////////////

const dig_facebook = async (doc, frame, fmt) =>
{
  var n, s, f = [0,0,0,0,0,0,0,0]; u = [0,0,0,0]

  var tag = "facebook"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_kraker + "accept=text/html|*" + doc;

try
{
  if (!cors_kraker) throw ("???");

  response = await kitty (url);
  textData = await response.text();

  if (url = pullstring (textData, 'playable_url":"', '"')) { u [0] = url; f [0] = 1; }
  if (url = pullstring (textData, '_quality_hd":"', '"'))  { u [2] = url; f [2] = 1; }
  if (url = pullstring (textData, 'sd_src:"', '"'))        { u [0] = url; f [0] = 1; }
  if (url = pullstring (textData, 'hd_src:"', '"'))        { u [2] = url; f [2] = 1; }
  if (url = pullstring (textData, '_sd_url":"', '"'))      { u [0] = url; f [0] = 1; }
  if (url = pullstring (textData, '_hd_url":"', '"'))      { u [2] = url; f [2] = 1; }

  n = getformat (f, fmt); n = argformat (n);

  if (n >= 0)
  {
    fixformat (f, frame); fmt = pixformat (n); url = u [n];
  }
  else
  {
    url = fmt = "";
    if (s = pullstring (textData, '"video_url":"', '"')) url = s;
    if (s = pullstring (textData, '"og:video" content="', '"')) url = s;
    if (s = pullstring (textData, '"sd_src_no_ratelimit":"', '"')) url = s;
    if (s = pullstring (textData, '"contentUrl":"', '"')) url = s;
    if (s = pullstring (textData, "src&quot;:&quot;", "&quot;,&quot;")) url = s;
  }

  if (!url) throw ("!!!");
  url = url.replace (/\\u0025/g, "%"); url = url.replace (/\\u0026/g, "&");
  url = url.replace (/&amp;/g, "&"); url = url.replace (/\\\//g, "/");

} catch (err) { console.log (err); busy = 0; }

  if (fmt) fmt = " [" + fmt + "]"; else no_format (frame);
  if (no_fail (frame)) loadwindow (url, frame, tag + fmt + ": id-none");
}
////////////////////

const dig_telegram = async (doc, frame, fmt) =>
{
  var tag = "telegram"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = pullstring (doc, "", "?"); if (!url) url = doc;
  url = cors_bypass + url + "?embed=1";

try
{
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, '<video', '>'); if (!url) throw ("!!!");
  url = pullstring (url, 'src="', '"'); if (!url) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  no_format (frame); if (no_fail (frame)) loadwindow (url, frame, tag + ": id-none");
}
////////////////////

const dig_tiktok = async (doc, frame, fmt) =>
{
  var tag = "tiktok"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_kraker + "**" + doc;

try
{
  if (!localhost || localhost != cors_kraker) throw ("???");

  response = await kitty (url, allow_cookie ("", ""));
  textData = await response.text();

  if (url = response.headers.get ("zz-location"))
  {
    response = await kitty (cors_kraker + "**" + url, allow_cookie ("", ""));
    textData = await response.text();
  }

  var cookie = response.headers.get ("zz-set-cookie") || "";
  cookie = "tt_chain_token=" + pullstring (cookie, "tt_chain_token=", ";");

  url = pullstring (textData, '"playAddr":"', '"'); if (!url) throw ("!!!");
  url = url.replace (/\\u0026/g, "&");
  url = url.replace (/\\u002F/g, "/");

  url = cors_kraker + "~**cookie=" + cookie + "|*" + url;

} catch (err) { console.log (err); busy = 0; }

  no_format (frame); if (no_fail (frame)) loadwindow (url, frame, tag + ": id-none");
}
////////////////////

const dig_gabtv = async (doc, frame, fmt) =>
{
  var a, b, c, i, j, k, n, q, s, t, f = [0,0,0,0,0,0,0,0];

  var tag = "gabtv"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var src = "https://tv.gab.com", url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, '<video ', '<\/video>');

  if (url)
  {
    url = url.split ('<source src="');

    for (n = 1; n < url.length; n++)
    {
      s = url [n];
      if (s.includes ('size="360"')) f [0] = n;
      if (s.includes ('size="480"')) f [1] = n;
      if (s.includes ('size="540"')) f [1] = n;
      if (s.includes ('size="720"')) f [2] = n;
    }

    fmt = getformat (f, fmt); fixformat (f, frame);
    n = argformat (fmt); if (n < 0) throw ("!!!");
    url = pullstring (url [f [n]], "", '"'); if (!url) throw ("!!!");
    if (url [0] == "/") url = src + url; fmt = pixformat (n);
  }

  if (!url)
  {
    url = pullstring (textData, 'property="og:video"', '</head>');
    url = pullstring (url, 'http', '"'); if (!url) throw ("!!!");
    url = ("http" + url).replace ("/original/", "/playable/");
  }

/*
  {
    a = "connect.sid="; b = "__cflb="; c = response.headers.get ("zz-set-cookie");
    c = "~cookie=" + a + pullstring (c, a, ";") + ";" + b + pullstring (c, b, ";") + "|*";
  
    s = pullstring (textData, 'data-episode-id="', '"');
    t = pullstring (textData, 'data-view-key="', '"'); if (!s || !t) throw ("!!!");
    q = pullstring (textData, 'id="tv-quality-select"', '</ul>').split ('<li id="tv-quality-');

    for (i = 1; i < q.length; i++)
    {
      j = q[i]; j = j.substr (0, j.indexOf ('p')) * 1;
      k = chkformat (j); if (k >= 0 && j > f[k]) f[k] = j;
    }

    fixformat (f, frame); fmt = getformat (f, fmt); fmt = f [argformat (fmt)];

    url = cors_kraker + c + "https://tv.gab.com/media/" + s + "?viewKey=" + t + "&r=" + fmt + "p";
  }
*/

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////

const dig_prageru = async (doc, frame, fmt) =>
{
  var tag = "prageru"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = doc;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, '"playbackId":"', '"'); if (!url) throw ("!!!");
  url = "https://stream.mux.com/" + url + ".m3u8";
 
  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////

/*
const dig_prageru = async (doc, frame, fmt) =>
{
  var tag = "prageru"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = doc.split ("/");
  url = url[0] + "//" + url[2] + "/page-data/video/" + url[4] + "/page-data.json";

try
{ 
  response = await kitty (cors_kraker + url);
  jsonData = await response.json();

  url = jsonData.result.data.video.video.playbackId; if (!url) throw ("!!!");
  url = "https://stream.mux.com/" + url + ".m3u8";
 
  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////
*/

const dig_tedtalks = async (doc, frame, fmt) =>
{
  var tag = "tedtalks"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, '"stream\\":\\"', '\\"'); if (!url) throw ("!!!");
  var n = url.indexOf ("?"); if (n > 0) url = url.substr (0, n);

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", "") * 1; url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////

const dig_natfilmbrd = async (doc, frame, fmt) =>
{
  var tag = "natfilmbrd"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc, n = url.indexOf ("?"); if (n > 0) url = url.substr (0, n);
  if (url.substr (-1) != "/") url = url + "/"; url = url + "embed/player/";

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, "source: '", "'");
  if (!url || !url.includes (".m3u8")) throw ("!!!");
  
  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url);
    textData = await response.text();

    url = crack_m3u8 (url, textData, frame, fmt); if (!url) throw ("!!!");
    fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag + " [" + fmt + "]: id-none");
}
////////////////////

const dig_earthtv = async (doc, frame, fmt) =>
{
  var tag = "earthtv"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, "token: '", "'"); if (url == "") throw ("!!!");
  url = "https://livecloud2.earthtv.com/api/v1/media.getPlayerConfig?playerToken=" + url;

  response = await kitty (localhost + url);
  jsonData = await response.json();

  if (!(url = jsonData.streamUris) || !(url = url.hls)) throw ("!!!");

  stream_all (frame, 1);

} catch (err) { console.log (err); busy = 0; }

  no_format (frame); if (no_fail (frame)) loadwindow (url, frame, tag + ": id-none");
}
////////////////////

const dig_podcast = async (doc, frame, fmt) =>
{
  var tag = "podcast"; if (is_busy (frame)) return;
  document.getElementById ("id" + frame).value = tag + " (DIG)";
  var url = cors_bypass + doc;

try
{ 
  response = await kitty (url);
  textData = await response.text();

  url = pullstring (textData, '\\"assetUrl\\":\\"', '\\"');		// Apple Podcast (November 15, 2021)
  if (!url) url = pullstring (textData, '"assetUrl":"', '"');		// Apple Podcast
  if (!url) url = pullstring (textData, 'enclosureUrl":"', '"');	// Radio Public
  if (!url) url = pullstring (textData, 'episodeURL: "', '"');		// Stitcher
  if (!url) url = pullstring (textData, '<source src="', '"');		// Overcast
  if (!url) url = pullstring (textData, 'data-uri="', '"');	   	// Podbean
  if (!url) url = pullstring (textData, 'download" href="', '"');	// Spreaker
  if (!url) throw ("!!!");

  var n = url.indexOf ("?"); if (n > 0) url = url.substr (0, n);

} catch (err) { console.log (err); busy = 0; }

  no_format (frame); if (no_fail (frame)) loadwindow (url, frame, tag + ": id-none");
}
////////////////////

