// Info / Entertainment

document.getElementById ("src5").innerHTML = `
  <option value= "youtube"     class="w">YouTube / Invidious
  <option value= "bitchute"    ># mp4 - BitChute
  <option value= "rumble"      >+ mp4 - Rumble
  <option value= "vimeo"       ># mp4 - Vimeo
  <option value= "infowars"    >+ m3u - InfoWars
  <option value= "brighteon"   >+ m3u - Brighteon
  <option value= "dailymotion" ># m3u - DailyMotion
  <option value= "153news"     ># mp4 - 153News
  <option value= "odysee"      >? m3u - Odysee
  <option value= "twitter"     >+ mp4 - Twitter
  <option value= "facebook"    >? mp4 - Facebook
  <option value= "telegram"    >? mp4 - Telegram
  <option value= "tiktok"      >? mp4 - TikTok
  <option value= "twitchtv"    ># m3u - Twitch TV
  <option value= "prageru"     >? m3u - PragerU
  <option value= "tedtalks"    >? m3u - TEDTalks
  <option value= "natfilmbrd"  >? m3u - NatFilmBrd
  <option value= "iheartradio" class="b"># aud - iHeartRadio
  <option value= "podcasts"    class="b">? aud - Podcasts
`;

document.getElementById ("butt5").innerHTML = `
  <button onclick="javascript:copylist(this,5,0)">YouTube</button>
  <button onclick="javascript:copylist(this,5,1)">BitChute</button>
  <button onclick="javascript:copylist(this,5,2)">Vimeo</button>
  <button onclick="javascript:copylist(this,5,3)">InfoWars</button>
  <button onclick="javascript:copylist(this,5,4)">iHeart</button>
`;

var frame_5 = {
  0: 'youtube', 1: 'bitchute', 2: 'vimeo', 3: 'infowars', 4: 'iheartradio', req_youtube: request
};

var stack_5_0 = [""
  , "0:NOZKLtIIUZE" , "Hitler Rant"
  , "0:m_MaJDK3VNE" , "Herding Cats"
  , "0:fXjtDs2wO4Q" , "The Martians"
  , "0:uaPKEbVypRQ" , "Typing Lesson"
  , "0:W-JhfjGtlp8" , "V - The Miniseries"
  , "0:kJAsn_vJyY4" , "Starship Enterprise"
  , "0:We-HMZDSWFU" , "Me and You and a Dog Named Boo"
  , "0:8Pa9x9fZBtY" , "Sultans of Swing"
  , "0:6Ath-3JGk8M" , "Flashdance: What A Feeling"
  , "0:onJspmvJr0E" , "Flashdance: Love's Theme"
  , "0:FnV0LqHd3h8" , "Make America Great Again"
  , "0:xB4iFysPm9Q" , "Karolina Protsenko"
  , "0:HtVdAasjOgU" , "Witcher 3 Trailer"
  , "0:0ZwfXUURS3g" , "Dukes of Hazzard"
  , "0:0pKfxbCHLoU" , "AKB48: Sustainable"
  , "0:vxl4gsvgEQY" , "Perfume: Tokyo Girl"
  , "0:74VHwppfHuI" , "The Best Is Yet To Come"
  , "0:uQJoar17jyo" , "Schiff Hits the Fan"
  , "0:wLTGXblgUoc" , "Never Forget"
  , "0:XkkvC3D_srM" , "March of the Frogs"
  , "0:sGdWkl9M_TY" , "American Airman"
  , "0:AzEBH6DZJVk" , "St. James Infirmary"
  , "0:W-gngBsA_DI" , "I Told You So"
  , "0:w8KQmps-Sog" , "Muse: Uprising"
  , "0:D_XdjviX6gQ" , "Cat Scratch Fever"
  , "0:kx-inoYmN2Q" , "Alley Cat"
];

var stack_5_1 = [""
  , "1:ZPlfDFBkS6w7" , "Rod Stewart: Young Turks"
  , "1:sSKnCoWAbDos" , "Brother Nathaniel"
  , "1:A7jZJfaEJK2p" , "Malice in the Palace"
  , "1:Ol2plIF2otcI" , "QAnon Proofs"
];

var stack_5_2 = [""
  , "2:129463420" , "Miniatur Wunderland"
  , "2:166403522" , "Some Kind of Quest"
  , "2:31883614"  , "Star Trek: Aurora"
  , "2:175806163" , "Martian American"
];

var stack_5_3 = [""
  , "3:5d4c9fd22ec69a001858eb60" , "Alex Jones"
  , "3:5d4a339571d8e00017f8afaf" , "Owen Shroyer"
  , "3:5d4c54aae936660017aee3c0" , "Kaitlin Bennett"
];

var stack_5_4 = [""
  , "4:" , "majic-100-7483"
  , "4:" , "chum-1045-6270"
  , "4:" , "iheartradio-top-20-7556"
  , "4:" , "z1035-7757"
  , "4:" , "971-the-eagle-2241"
  , "4:" , "heavy-rock-7554"
  , "4:" , "z100-1469"
  , "4:" , "1027-kiis-fm-los-angeles-185"
  , "4:" , "y100-561"
  , "4:" , "1017-the-bull-6586"
  , "4:" , "1035-kiss-fm-849"
  , "4:" , "alt-987-los-angeles-201"
  , "4:" , "1035-ktu-1473"
  , "4:" , "1067-lite-fm-1477"
  , "4:" , "smooth-jazz-4242"
  , "4:" , "the-vinyl-experience-6878"
  , "4:" , "iheart80s-radio-5060"
  , "4:" , "lone-star-925-3379"
  , "4:" , "q1043-1465"
  , "4:" , "500-cfra-7500"
];

frame_5.req_bitchute = async (id, frame, fmt) =>
{
  var tag = "bitchute"; id = getid (frame, id, -12);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var url = "https://www.bitchute.com/embed/" + id + "/";

if (stream_all (frame, 0)) fmt = ""; else try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, "var media_url = '", "'"); if (!url) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_5.req_rumble = async (id, frame, fmt) =>
{
  var m, n = id [0] == "@"; if (n) id = id.substr (1);

  var tag = "rumble"; id = getid (frame, id, -8);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var url = "https://rumble.com/embed/" + id;

if (stream_all (frame, 0)) fmt = ""; else try
{
  url = "https://rumble.com/embedJS/u3/?request=video&ver=2&v=";

  response = await kitty (cors_local + url + id);
  jsonData = await response.json();

  if (!(m = jsonData.ua)) if (n) throw ("!!!"); else
  {
    busy = 0; frame_5.dig_rumble ("https://rumble.com/" + id, frame, fmt); return;
  }

  if (!m.hls || !m.hls.auto || !(url = m.hls.auto.url))
  {
    var f, v = []; m = m.mp4; if (m) m = Object.values (m);
    if (m) for (f of m) v.push ({ width: f.meta.w, height: f.meta.h, url: f.url });

    f = formats_m3u8 (v); n = gotformat (f, fmt); if (n < 0) throw ("!!!");
    n = f[n] - 1; url = v[n].url; fmt = v[n].height; fixformat (f, frame);
  }
  else if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (response.url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_5.req_vimeo = async (id, frame, fmt) =>
{
  var tag = "vimeo"; id = getid (frame, id, -9);
  if (!id || is_busy (frame, tag + " (ID)", 1)) return;

  var f, n, s, t, u, v = [], url = "https://player.vimeo.com/video/" + id;

if (stream_all (frame, 0)) fmt = ""; else try
{
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

frame_5.req_infowars = async (id, frame, fmt) =>
{
  var tag = "infowars"; id = getid (frame, id, 24);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var url = "https://api.infowarsmedia.com/embed/" + id;
//var url = "https://api.banned.video/embed/" + id;
//var url = "https://freeworldnews.tv/watch?id=" + id;

try
{
  response = await kitty (cors_local + url);
  textData = await response.text();

  url = pullstring (textData, 'downloadUrl="', '"');
  if (!url) url = pullstring (textData, '"directUrl":"', '"');

  download = "InfoWars download link: ";

  if (!url.indexOf ("http"))
    download += "<a href='" + url + "'>" + url + "</a>"; else download += "Not available";

  var s = pullstring (textData, '<source src="', '"');
  if (!s) s = pullstring (textData, '"streamUrl":"', '"');
  if (s) url = s; if (!url) throw ("!!!");

  if (!url.includes (".m3u8") || stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_5.req_brighteon = async (id, frame, fmt) =>
{
  var tag = "brighteon"; id = getid (frame, id, 36, 13);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var url = "https://www.brighteon.com/embed/" + id;

if (stream_all (frame, 0)) fmt = ""; else try
{
  response = await kitty (cors_local + url);
  textData = await response.text();

  url = pullstring (textData, '<source src="', '"');
  url = url.replace (/&#x3D;/g, "="); if (!url.includes ("m3u8")) throw ("!!!");
  if (cors_local) url = cors_local + "~" + url;

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_5.req_dailymotion = async (id, frame, fmt) =>
{
  var tag = "dailymotion"; id = getid (frame, id, -7);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var url = "https://www.dailymotion.com/embed/video/" + id;

if (stream_all (frame, 0)) fmt = ""; else try
{
  url = "https://www.dailymotion.com/player/metadata/video/" + id;

  response = await kitty (cors_kraker + url);
  jsonData = await response.json();

  url = jsonData.qualities.auto[0].url; url = cors_kraker + "~*,,*" + url;

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

  url = url.split ("#").shift();

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_5.req_153news = async (id, frame, fmt) =>
{
  var tag = "153news"; id = getid (frame, id, 12);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var url = "https://153news.net/watch_video.php?v=" + id;

try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, "<video", "</video>");
  url = crack_source (url, frame, fmt); if (!url) throw ("!!!");
  fmt = pullstring (url, "<>", ""); url = pullstring (url, "", "<>");

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_5.req_twitter = async (id, frame, fmt) =>
{
  var s, t, url, tag = "twit-x"; id = getid (frame, id, -19, 13);
  if (!id || is_busy (frame, tag + " (ID)", 1)) return;

try
{
  if (id.length != 13)
  {
    url = cors_kraker + "https://cdn.syndication.twimg.com/tweet-result?id=" + id;

    response = await kitty (url + "&token=422kr3t824n");
    jsonData = await response.json();

    t = jsonData, s = t.video; if (!s && (s = t.quoted_tweet)) s = s.video;

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
    var bb = "Bearer AAAAAAAAAAAAAAAAAAAAAPYXBAAAAAAACLXUNDekMxqa8h" +
      "%2F40K4moUkGsoc%3DTYfbDKbT3jJPCEVnMYqilB28NHfOPqkca3qaAxGfsyKCs0wRbw";
    var tt = "a00c423812149cefa8a26ed20bd34b6976f4511c52f07cb37e787adf883c438c1dc59e2537" +
      "f073c78c3bfae81dcc86af592efed2a51655ad7835445a73c1b964a5b60b68b571967dc0e3674d058ab0df";
    var cc = "ct0=" + t + "; auth_token=bfe4fab329336d5c2ddfd0a292e116413f197b13";

    url = cors_kraker + "https://api.x.com/1.1/guest/activate.json";

    response = await kitty (url, { method: 'POST', headers: { authorization: bb } });
    jsonData = await response.json();

    var gg = jsonData.guest_token; if (!gg) throw ("!!!");

    url = cors_kraker + "https://x.com/i/api/1.1/";
    var u = url + "broadcasts/show.json?ids=" + id;

    response = await kitty (u, { headers: { authorization: bb, 'x-guest-token': gg } });
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
      u = cors_kraker + "~**https://x.com/i/api/graphql/NgGZ325iUTdno0iBOZRGOA/AudioSpaceById" + u;

      response = await kitty (u, { headers: { authorization: bb, accept: "**" + cc, 'x-csrf-token': tt }});
      jsonData = await response.json();

      if (!(u = jsonData.data.audioSpace.metadata.media_key)) throw ("!!!");
    }
    url += "live_video_stream/status/" + u;

    response = await kitty (url, { headers: { authorization: bb, 'x-guest-token': gg } });
    jsonData = await response.json();

    url = jsonData.source.location; if (!url) throw ("!!!");
    if (cors_local) url = cors_local + "~*,,*" + url;

    if (stream_all (frame, 1)) fmt = 0; else
    {
      response = await kitty (url); textData = await response.text();
      [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
    }
  }
  else
  {
    var f, m, n, m3u, v = [];

    for (t of s) if (url = t.src)
    {
      t = url.match (/[0-9]+x[0-9]+/); if (!t) { m3u = url; continue; }
      t = t[0].split ("x"); v.push ({ width: t[0], height: t[1], url: url });
    }

    f = formats_m3u8 (v); n = gotformat (f, fmt);
    download = "Twitter download links (" + id + "): ";

    if (n < 0) download += "Not available"; else for (m of f) if (m--)
    {
      t = v[m].width + "x" + v[m].height
      download += " &nbsp;<a href='" + v[m].url + "'>" + t + "</a>";
    }

    if (url = m3u) if (stream_all (frame, 1)) fmt = 0; else
    {
      response = await kitty (url); textData = await response.text();
      [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
    }
    else if (n < 0) throw ("!!!"); else
    {
      fixformat (f, frame); n = f[n] - 1; url = v[n].url; fmt = v[n].height;
    }
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_5.req_twitchtv = async (id, frame, fmt) =>
{
  var tag = "twitch"; if (is_busy (frame, tag + " (ID)", 0)) return;
  id = id.split ("/").pop(); var url = "https://www.twitch.tv/" + id;

try
{
  response = await kitty (cors_local + url);
  textData = await response.text();

  var p = '\\"' + id + '\\", params:{platform:\\"web\\",playerType:\\"site\\"}';
  var q = ') @include(if:true){value signature}';

  p = '{"operationName":"PlaybackAccessToken_Template","query":"query PlaybackAccessToken_Template(){' +
    'streamPlaybackAccessToken(channelName:' + p + q + ' videoPlaybackAccessToken(id:' + p + q + '}"}';

  q = pullstring (textData, '"Client-ID":"', '"');
  if (!q) q = pullstring (textData, 'clientId="', '"'); if (!q) throw ("!!!");
  url = "https://gql.twitch.tv/gql";

  response = await kitty (cors_local + url, { method: 'POST', body: p, headers: { 'client-id': q } });
  jsonData = await response.json();

  url = jsonData.data; if (!url) throw ("!!!");
  url = id * 1 ? url.videoPlaybackAccessToken : url.streamPlaybackAccessToken;
  url = ".m3u8?sig=" + url.signature + "&token=" + encodeURIComponent (url.value);
  url = "https://usher.ttvnw.net/" + (id * 1 ? "vod/" : "api/channel/hls/") + id + url;
  q = url; if (cors_local) url = cors_local + "~" + url;

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (q, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_5.req_iheartradio = async (id, frame, fmt) =>
{
  var tag = "iheartradio"; id = getid (frame, id, 0);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var s, t; id = id.split ("-").pop();
  var url = "https://www.iheart.com/live/" + id + "/?embed=1&autoplay=1";

if (id.length < 6 && stream_all (frame, 0)) fmt = ""; else try
{
  url = "https://api.iheart.com/api/v3/locationConfig?hostname=webapp&version=8-prod";

  response = await kitty (cors_local + url);
  textData = await response.text();
  
  var api = pullstring (textData, '"apiUrl":"', '"') || "https://api.iheart.com";

  if (id.length > 6) if (id.length > 9) throw ("!!!"); else
  {
    response = await kitty (cors_local + api + "/api/v3/podcast/episodes/" + id);
    jsonData = await response.json();

    url = jsonData.episode.mediaUrl; s = jsonData.episode.podcastId;
    t = "https://www.iheart.com/podcast/" + s + "/episode/" + id + "/?embed=true&autoplay=1";
    if (stream_all (frame, 0)) url = t; if (!url || !s) throw ("!!!");
  }
  else
  {
    response = await kitty (cors_local + api + "/api/v2/content/liveStations/" + id);
    jsonData = await response.json();

    if ((sub = jsonData.hits[0].streams) && (url = sub.pls_stream))
    {
      response = await kitty (cors_local + url);
      textData = await response.text();

      url = pullstring (textData, "File1=", "\n").trim();
    }

    if (!url) url = sub.secure_mp3_pls_stream || sub.shoutcast_stream;
    if (!url) throw ("!!!");
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_5.dig_rumble = async (url, frame, fmt) =>
{
  var m, p, q, tag = "rumble"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, '"video":"', '"');

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_5.req_rumble ("@" + url, frame, fmt);
}
////////////////////

frame_5.dig_infowars = async (url, frame, fmt) =>
{
  var tag = "infowars"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, 'data-video-id="', '"');
  if (!url) url = pullstring (textData, '<iframe src="', '"');

  url = pullstring (url, "/embed/", ""); if (!url) throw ("!!!");
  url = url.split ("?").shift();

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_5.req_infowars (url, frame, fmt);
}
////////////////////

frame_5.dig_brighteon = async (url, frame, fmt) =>
{
  var tag = "brighteon"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, "/embed/", '"');
  if (!url) url = pullstring (textData, '"videoKey":"', '"');
  if (!url) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_5.req_brighteon (url, frame, fmt);
}
////////////////////

frame_5.dig_odysee = async (url, frame, fmt) =>
{
  var n, s, t, u, tag = "odysee"; if (is_busy (frame, tag + " (DIG)", 0)) return;
  var src = cors_kraker ? cors_kraker + "*https://odysee.com*" : "";

try
{
  if (!url.includes ("/stream/"))
  {
    if ((n = url.indexOf ("/embed/")) > 0)
    {
      u = url.substr (n + 7); n = u.indexOf ("?"); if (n > 0) u = u.substr (0, n);
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
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?", fmt);
}
////////////////////

frame_5.dig_twitter = async (url, frame, fmt) =>
{
  var tag = "twit-x"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, '/status/', '"');
  if (!url) url = pullstring (textData, '/spaces/', '"');
  var n = url.search (/\/|\?/); if (n > 0) url = url.substr (0, n);

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_5.req_twitter (url, frame, fmt);
}
////////////////////

frame_5.dig_facebook = async (url, frame, fmt) =>
{
  var tag = "facebook"; if (is_busy (frame, tag + " (DIG)", 1)) return;

  url = cors_kraker + "accept=text/html|*" + url;
  var n, s, f = [0,0,0,0]; u = [0,0,0,0]

try
{
  response = await kitty (url);
  textData = await response.text();

  if (url = pullstring (textData, 'playable_url":"', '"')) { u [0] = url; f [0] = 1; }
  if (url = pullstring (textData, '_quality_hd":"', '"'))  { u [2] = url; f [2] = 1; }
  if (url = pullstring (textData, 'sd_src:"', '"'))        { u [0] = url; f [0] = 1; }
  if (url = pullstring (textData, 'hd_src:"', '"'))        { u [2] = url; f [2] = 1; }
  if (url = pullstring (textData, '_sd_url":"', '"'))      { u [0] = url; f [0] = 1; }
  if (url = pullstring (textData, '_hd_url":"', '"'))      { u [2] = url; f [2] = 1; }

  n = gotformat (f, fmt);

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

  if (no_fail (frame)) loadwindow (url, frame, tag, "?", fmt);
}
////////////////////

frame_5.dig_telegram = async (url, frame, fmt) =>
{
  var tag = "telegram"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{
  url = url.split ("?").shift() + "?embed=1";

  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, '<video', '>');
  url = pullstring (url, 'src="', '"'); if (!url) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?");
}
////////////////////

frame_5.dig_tiktok = async (url, frame, fmt) =>
{
  var tag = "tiktok"; if (is_busy (frame, tag + " (DIG)", 2)) return;

try
{
  response = await kitty (cors_kraker + "**" + url, allow_cookie ("", ""));
  textData = await response.text();

  if (url = response.headers.get ("zz-location"))
  {
    response = await kitty (cors_kraker + "**" + url, allow_cookie ("", ""));
    textData = await response.text();
  }

  var cookie = response.headers.get ("zz-set-cookie") || "";
  cookie = "tt_chain_token=" + pullstring (cookie, "tt_chain_token=", ";");

  url = pullstring (textData, '"playAddr":"', '"'); if (!url) throw ("!!!");
  url = url.replace (/\\u0026/g, "&").replace (/\\u002F/g, "/");

  url = cors_kraker + "~**cookie=" + cookie + "|*" + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?");
}
////////////////////

frame_5.dig_prageru = async (url, frame, fmt) =>
{
  var tag = "prageru"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, '"playbackId\\":\\"', '\\"'); if (!url) throw ("!!!");
  url = "https://stream.media.prageru.com/" + url + ".m3u8";

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?", fmt);
}
////////////////////

frame_5.dig_tedtalks = async (url, frame, fmt) =>
{
  var tag = "tedtalks"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, '"stream\\":\\"', '\\"'); if (!url) throw ("!!!");
  var n = url.indexOf ("?"); if (n > 0) url = url.substr (0, n);

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?", fmt);
}
////////////////////

frame_5.dig_natfilmbrd = async (url, frame, fmt) =>
{
  var tag = "natfilmbrd"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, '"source": "', '"');
  if (!url.includes (".m3u8")) throw ("!!!");
  
  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?", fmt);
}
////////////////////

frame_5.dig_podcast = async (url, frame, fmt) =>
{
  var tag = "podcast"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{ 
  response = await kitty (cors_bypass + url);
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

  if (no_fail (frame)) loadwindow (url, frame, tag, "?");
}
////////////////////

/*
  if (id.includes ("_"))
  {
    if (!(s = cookies ["iheart"]))
    {
      s = "&oauthUuid=anon&deviceId=anon";
      s = "accessTokenType=anon&deviceName=web-desktop&host=webapp.CA" + s;
      url = "https://ca.api.iheart.com/api/v1/account/loginOrCreateOauthUser";
      t = {'content-type': 'application/x-www-form-urlencoded'};

      response = await kitty (cors_local + url, { method: 'POST', headers: t, body: s } );
      jsonData = await response.json();

      s = jsonData.sessionId; t = jsonData.profileId; if (!s || !t) throw ("!!!");
      s = cookies ["iheart"] = t + "_" + s;
    }

    t = id.split ("_"); var id_artist = t[0], id_song = t[1];

    t = s.split ("_"); var userid = t[0], session = t[1];

    t = { 'content-type': 'application/json', 'X-User-Id': userid, 'X-Session-Id': session }
  
    url = "https://ca.api.iheart.com/api/v2/playlists/" + userid + "/ARTIST/" + id_artist;

    response = await kitty (cors_local + url, { method: 'POST', headers: t, body: "contentId=" + id_song });
    jsonData = await response.json();

    if (!(s = jsonData.id)) throw ("!!!");

    url = "https://ca.api.iheart.com/api/v2/playback/streams";

    s = JSON.stringify ({ contentIds: [], hostName: 'webapp.CA', stationId: s, stationType: 'ARTIST', playedFrom: 0 });

    response = await kitty (cors_local + url, { method: 'POST', headers: t, body: s });
    jsonData = await response.json();

  }


/*
const req_vimeo = async (id, frame, fmt) =>
{
  var tag = "vimeo"; id = getid (frame, id, -9);
  if (!id || is_busy (frame, tag + " (ID)")) return;
  var url = "https://player.vimeo.com/video/" + id;
  var i, j, k, s, f = [0,0,0,0], r = [0,0,0,0];

if (stream_all (frame, 0)) fmt = ""; else try
{
  if (!cors_local) throw ("???");

  response = await kitty (cors_kraker + "!mock:1A|*" + url);
  textData = await response.text();

  s = pullstring (textData, 'window.playerConfig = ', '</'); jsonData = JSON.parse (s);

  if (!(url = jsonData.request.files.progressive) || !url.length)  // livestream
  {
    if (!(url = jsonData.request.files.hls) || !(url = url.cdns)) throw ("!!!");
    if (!(s = url.fastly_live) && !(s = url.fastly_skyfire)) s = url.akamai_live;
    if (!s && !(s = url.akfire_interconnect_quic)) throw ("!!!");
    if (!(url = s.url)) throw ("!!!");

    url = cors_local + "~" + url;

    if (stream_all (frame, 1)) fmt = 0; else
    {
      response = await kitty (url); textData = await response.text();
      [url,fmt] = crack_m3u8 (response.url, textData, frame, fmt);
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

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////
*/
