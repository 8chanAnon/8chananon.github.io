// Free Movies & TV

document.getElementById ("src7").innerHTML = `
  <option value= "youtube" class="w">YouTube MP4 / WEBM
  <option value= "tubitv"     ># m3u - Tubi
  <option value= "thearchive" >+ mp4 - The Archive
  <option value= "darkmatter" >? m3u - Dark Matter
  <option value= "fawesome"   ># m3u - Fawesome
  <option value= "filmzie"    >+ m3u - Filmzie
  <option value= "plextv"     >? m3u - Plex
  <option value= "bilibili"   ># mpd - Bilibili
  <option value= "catflix"    >+ m3u - CatFlix
  <option value= "goojara"    ># mp4 - Goojara
  <option value= "lookmovie"  >? m3u - LookMovie
  <option value= "playtaku"   >+ m3u - PlayTaku
  <option value= "wconline"   >? mp4 - WCOnline
  <option value= "xhamster"   ># mp4 - XHamster
  <option value= "xvideos"    >? m3u - XVideos
  <option value= "doodstream" class="r"># mp4 - DoodStream
  <option value= "dropload"   class="r"># m3u - DropLoad
  <option value= "eplayvid"   class="r"># mp4 - EplayVid
  <option value= "mixdrop"    class="r"># mp4 - MixDrop
  <option value= "moviesapi"  class="r"># mp4 - MoviesAPI
  <option value= "pkspeed"    class="r"># mp4 - PkSpeed
  <option value= "streamtape" class="r"># mp4 - StreamTape
  <option value= "turbovid"   class="r"># mp4 - TurboVid
  <option value= "upstream"   class="r"># m3u - UpStream
  <option value= "vidsrc"     class="r"># mp4 - VidSrc
  <option value= "vtube"      class="r"># mp4 - VTube
  <option value= "wootly"     class="r"># mp4 - Wootly
  <option value= "inetradio"  class="b">? aud - InternetRadio
`;

document.getElementById ("butt7").innerHTML = `
  <button onclick="copylist(this,7,-1)">Music</button>
  &nbsp;
  <button onclick="copylist(this,7,-2)">TV US1</button>
  <button onclick="copylist(this,7,-3)">TV US2</button>
  <button onclick="copylist(this,7,-4)">TV US3</button>
  &nbsp;
  <button onclick="copylist(this,7,-5)">TV UK+</button>
  <button onclick="copylist(this,7,-6)">TV Alt</button>
  &nbsp;
  <button onclick="copylist(this,7,-7)">TV Int'l</button>
`;

frame_7 = {
  req_youtube: request, req_catflix: function() { frame_7.req_turbovid (...arguments) }
}

stack_7_1 = copylist (`
  Company TV (Italy)			8:https://company.fluid.stream/CompanyTV/smil:Company_ALL.smil/playlist.m3u8
  Deejay TV (Italy)			8:http://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S85984808/sMO0tz9Sr2Rk/playlist.m3u8
  Ditty TV (US)				8:https://0ba805a2403b4660bbb05c0a210ebbdc.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/ONO_DittyTV/playlist.m3u8
  Kaloopy (US) *			9a:live/kaloopy
  KroneHit TV (Austria)			8:http://bitcdn-kronehit.bitmovin.com/v2/hls/index.m3u8
  Ocko Expres (Czech Republic)		8:http://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist.m3u8
  Power HD (Turkey)			8:http://livetv.powerapp.com.tr/powerTV/powerhd.smil/playlists.m3u8
  Radio Capital (Italy)			8:http://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S35394734/Z6U2wGoDYANk/playlist.m3u8
  Radio Chanson (Russia)		8:http://chanson-video.hostingradio.ru:8080/hls/chansonabr/live.m3u8
  Radio m2o (Italy)			8:http://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S62628868/uhdWBlkC1AoO/playlist.m3u8
  Reload TV (Greece) ??			8:http://web.onair-radio.eu:1935/video/video/index.m3u8
  Retro Music (Czech Republic)		8:http://stream.mediawork.cz/retrotv/retrotvHQ1/playlist.m3u8
  Shuffle Dance Music (YouTube)		0:qWf-FPFmVw0
  Siganos Music (Greece)		8:http://web.onair-radio.eu:1935/Alpha-Host/Alpha-Host/playlist.m3u8
  Stingray Classica (Canada)		8:https://lotus.stingray.com/manifest/classica-cla008-montreal/samsungtvplus/master.m3u8
  Stringray CMusic (Canada)		8:https://lotus.stingray.com/manifest/cmusic-cme004-montreal/samsungtvplus/master.m3u8
  Stingray DJazz (Canada)		8:https://lotus.stingray.com/manifest/djazz-djaads-montreal/samsungtvplus/master.m3u8
  Stringray Qello (Canada)		8:https://lotus.stingray.com/manifest/qello-qello001-montreal/samsungtvplus/master.m3u8
  Strana FM (Russia)			8:http://live.stranafm.cdnvideo.ru/stranafm/smil:stranafm.smil/playlist.m3u8
  V2Beat (Germany)			8:http://stream.v2beat.live/playlist.m3u8
  Vevo Pop (US) **			1p:5d93b635b43dd1a399b39eee
  Visual Radio (Turkey)			8:http://wms.shared.streamshow.it/visualradio/mp4:visualradio/playlist.m3u8
`);

stack_7_2 = copylist (`
  ABC *					5a:wabc-new-york-abc-east-live-stream
  ABC News				1e:3324f2467c414329b3b0cc5cd987b6be
  AMC *					5a:amc-live-stream
  BBC America *				5a:bbc-america-live-stream
  Bloomberg				8:https://www.bloomberg.com/media-manifest/streams/phoenix-us.m3u8
  CBS *					5a:wcbs-new-york-cbs-east-live-stream
  CBS News				8:http://cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master.m3u8
  CNBC *				5a:cnbc-live-stream
  CNN *					5a:cnn-live-stream
  C-SPAN *				5a:cspan-live-stream
  C-SPAN 2 *				5a:cspan-2-live-stream
  ET Live				8:https://dai.google.com/linear/hls/event/xrVrJYTmTfitfXBQfeZByQ/master.m3u8
  Fox *					5a:wnyw-new-york-fox-east-live-stream
  Fox Business *			5a:fox-business-network-live-stream
  Fox News *				5a:fox-news-channel-live-stream
  Fox News Now (YT)			0:YDfiTGGPYCk
  MSNBC *				5a:msnbc-live-stream
  NBC *					5a:wnbc-new-york-nbc-east-live-stream
  NBC News (YT)				1:UCeY0bbntWzzVIaj2z3QigXg
  PBS *					5a:pbs-13-wnet-new-york-live-stream
  PopStar!				8:https://linear-10.frequency.stream/dist/zype/10/hls/master/playlist.m3u8
  Sundance *				5a:sundancetv-hd-live-stream
  Syfy *				5a:syfy-live-stream
  TBS (East)				7:https://turnerlive.warnermediacdn.com/hls/live/2023172/tbseast/slate/VIDEO_2_1964000.m3u8
  TBS (West)				7:https://turnerlive.warnermediacdn.com/hls/live/2023174/tbswest/slate/VIDEO_2_1964000.m3u8
  The CW *				5a:the-cw-live-stream
  TMZ					8:https://d2dimalv43j51f.cloudfront.net/out/v1/52d3048e53eb42a7959dc347d2f810e2/index.m3u8
  TNT (East)				7:https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_2_1964000.m3u8
  TNT (West)				7:https://turnerlive.warnermediacdn.com/hls/live/2023170/tntwest/slate/VIDEO_2_1964000.m3u8
  Tru TV (East)				7:https://turnerlive.warnermediacdn.com/hls/live/2023176/trueast/slate/VIDEO_2_1964000.m3u8
  Tru TV (West)				7:https://turnerlive.warnermediacdn.com/hls/live/2023178/truwest/slate/VIDEO_2_1964000.m3u8
  USA Network *				5a:usa-network-live-stream
  WE TV *				5a:we-tv-live-stream
`);

stack_7_3 = copylist (`
  Adventure Sports *			9a:live/adventure-sports-tv
  America's Test Kitchen **		1p:5e84f54a82f05300080e6746
  Billiard TV *				9a:live/billiard-tv
  Boxing TV *				9a:live/boxing-tv
  Dot Esports *				9a:live/dot-esports
  Dungeon TV **^			7a:dungeon-tv-2
  Entrepreneur *			9a:live/entrepreneur-1
  Gusto TV *				9a:live/gusto-tv
  HGTV *				5a:hgtv-live-stream
  Hunt Channel ??			8:http://1111296894.rsc.cdn77.org/LS-ATL-56868-1/index.m3u8
  MMA Junkie *				9a:live/mma-junkie
  MotorTrend FAST TV			8:https://3fa797d5.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/T05PX01vdG9yVHJlbmRGYXN0VFZfSExT/playlist.m3u8
  PGA Tour **				1p:5de94dacb394a300099fa22a
  Red Bull TV				8:http://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8
  Right Now TV *			9a:live/right-now-tv
  SpeedVision **^			7a:speedvision
  Sports Grid				8:https://sportsgrid-klowdtv.amagi.tv/hls/amagi_hls_data_klowdtvAA-sportsgrid-klowdtv/CDN/playlist.m3u8
  Tastemade				8:https://tastemade-xumo.amagi.tv/hls/amagi_hls_data_tastemade-tastemadefreetv16xumo/CDN/master.m3u8
  This Old House **			1p:5d51e791b7dba3b2ae990ab2
  Waypoint TV **^			7a:waypoint-tv
  World Poker Tour *			9a:live/world-poker-tour
  ESPN *				5a:espn-live-stream
  ESPN 2 *				5a:espn2-live-stream
  Fox Sports 1 *			5a:fox-sports-1-live-stream
  Fox Sports 2 *			5a:fox-sports-2-live-stream
  Golf Channel *			5a:golf-channel-live-stream
  NBA TV *				5a:nba-tv-live-stream/
  NBC Golf *				5a:golf-channel-live-stream
  NFL Network *				5a:nfl-network-live-stream
  NHL Network *				5a:nhl-network-live-stream
  Olympic Channel *			1x:olympic
  Tennis Channel *			5a:tennis-channel-live-stream
`);

stack_7_4 = copylist (`
  American Heroes *			5a:american-heroes-channel-live-stream
  American Kennel Club			8:https://install.akctvcontrol.com/speed/broadcast/138/desktop-playlist.m3u8
  Circle TV				8:http://circle-xumo.amagi.tv/playlist.m3u8
  Classic Arts Showcase			8:https://classicarts.akamaized.net/hls/live/1024257/CAS/master.m3u8
  Comedy Dynamics *			9a:live/comedy-dynamics
  Comet ??				1e:3e45c6b5354a40f787e0b2aadb0f5d6a
  Court TV ??				1e:6c0bd0f94b1d4526a98676e9699a10ef
  Dark Matter TV *			9a:live/dark-matter-tv
  DocuBay ??				8:https://stream.ads.ottera.tv/playlist.m3u8?network_id=3444
  Dove Channel *			9a:live/dove
  FTV Midnight Secrets			8:https://fash1043.cloudycdn.services/slive/_definst_/ftv_midnite_secrets_adaptive.smil/playlist.m3u8
  FX *					5a:fx-live-stream
  FX Movie *				5a:fx-movie-live-stream
  FXX *					5a:fxx-live-stream
  Galxy TV **^				7a:galxy-tv-2
  HBO East *				5a:hbo-east-live-stream
  HBO Signature *			5a:hbo-signature-live-stream
  Horror Machine *			9a:live/horror-machine
  Law & Crime				9a:live/law-crime
  Lifetime *				5a:lifetime-live-stream
  Lone Star *				9a:live/lone-star
  Paramount Movie Channel **		1p:5cb0cae7a461406ffe3f5213
  Paramount Network **			1p:5812bcc8237a6ff45d16c407
  Scream Factory **^			7a:scream-factory-tv
  The Archive				8:https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=74
  The Film Detective			8:https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01201-cinedigmenterta-filmdetective-cineverse/playlist.m3u8
  The Pet Collective **^		7a:the-pet-collective-2
  Unexplained **^			7a:unexplained
`);

stack_7_5 = copylist (`
  BBC News *				3a:bbcnews_live
  Sky News Int'l **			1p:55b285cd2665de274553d66f
  Sky News Arabia			8:^https://slh/moc.aibaraswenyks.maerts/sna.m3u8
  France 24 - English (YT)		0:Ap-UM1O9RBU
  France 24 - French (YT)		0:l8PMl7tUDIE
  France 24 - Arabic (YT)		0:VuYzy8IuT0Y
  ABC News (Australia)			8:https://abc-news-dmd-streams-1.akamaized.net/out/v1/701126012d044971b3fa89406a440133/index.m3u8
  CBC News (Canada)			8:https://apollo.production-public.tubi.io/live/ac-cbc2.m3u8
  Global News				8:^https://lmsi.evil/7f0d3f550165-66d8-f034-3201-f7e19a94/evil/dpuorg/moc.vedlatigidsuroc.evil/.m3u8
  Newfoundland TV			8:https://2-fss-1.streamhoster.com/pl_122/201748-1431018-1/playlist.m3u8
  Knowledge Network (BC)		8:https://d1wal6k3d7ssin.cloudfront.net/out/v1/ea91db0906c847a4931b46a9ec36e77b/index.m3u8
  Ici RDI (CBC)				8:https://rcavlive.akamaized.net/hls/live/704025/xcanrdi/master.m3u8
  CPAC					8:https://d7z3qjdsxbwoq.cloudfront.net/groupa/live/f9809cea-1e07-47cd-a94d-2ddd3e1351db/live.isml/.m3u8
`);

stack_7_6 = copylist (`
  AfricaNews (YT)			0:NQjabLGdP5g
  Al Jazeera				8:https://live-hls-web-aje.getaj.net/AJE/index.m3u8
  Arirang (South Korea)			8:http://amdlive.ctnd.com.edgesuite.net/arirang_1ch/smil:arirang_1ch.smil/chunklist.m3u8
  CGTN News				7:https://english-livetx.cgtn.com/hls/yypdyyctzb_hd.m3u8
  Deutsche Welle			8:https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8
  EuroNews *				9a:live/euronews
  GB News (UK, YT)			0:QliL4CGc7iY
  NHK World Japan			8:https://master.nhkworld.jp/nhkworld-tv/playlist/live.m3u8
  NTD (New Tang Dynasty)		8:https://ntd02.akamaized.net/NTDA/index.m3u8
  NDTV (India)				8:https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/ndtv24x7master.m3u8
  Press TV				8:https://live.presstv.ir/hls/presstv.m3u8
  RT News				8:https://rt-glb.rttv.com/live/rtnews/playlist.m3u8
  RT Documentary			8:https://rt-rtd.rttv.com/live/rtdoc/playlist.m3u8
  TeleSUR (YT)				0:qP2Gnp8I9sY
  TRT World				8:http://tv-trtworld.medya.trt.com.tr/master.m3u8
  World Is One News (India) *		9a:live/wion-world-is-one-news
  Blaze TV **				1p:5e46fba0c43b0d00096e5ac1
  Cheddar News				8:https://livestream.chdrstatic.com/b93e5b0d43ea306310a379971e384964acbe4990ce193c0bd50078275a9a657d/cheddar-42620/cheddarweblive/cheddar/index.m3u8
  Free Speech TV			8:https://edge.fstv-live-linear-channel.top.comcast.net/Content/HLS_HLSv3/Live/channel(b168a609-19c1-2203-ae1d-6b9726f05e67)/index.m3u8
  Lindell TV				8:https://rumble.com/live-hls-dvr/6pggjd/playlist.m3u8
  NewsMax *				5a:newsmax-tv
  NewsMax 2				8:https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8
  OAN					8:https://a-cdn.klowdtv.com/live1/oan/playlist.m3u8
  OAN Plus *				9a:live/oan-encore
  Real America's Voice			8:https://dai.google.com/linear/hls/event/c-oMNcDLTeuszRKPugMj9Q/master.m3u8
  Salem Network				8:https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00732-salemmediagroup-snc-ono/playlist.m3u8
  The First TV				8:https://thefirst-oando.amagi.tv/hls/amagi_hls_data_thefirstd-thefirst-oando/CDN/playlist.m3u8
  TYT - The Young Turks			8:https://tyt-xumo-us.amagi.tv/hls/amagi_hls_data_tytnetwor-tyt-xumo/CDN/master.m3u8
  InfoWars - Main Feed			8:https://freespeech.akamaized.net/hls/live/2016712/live1/playlist.m3u8
  InfoWars - Alex Jones			8:https://freespeech.akamaized.net/hls/live/2024573/live2/playlist.m3u8
  InfoWars - Harrison Smith		8:https://freespeech.akamaized.net/hls/live/2016873/live3/playlist.m3u8
  InfoWars - Owen Shroyer		8:https://freespeech.akamaized.net/hls/live/2024574/live4/playlist.m3u8
`);

stack_7_7 = copylist (`
  EBS-1 (South Korea)			8:http://ebsonair.ebs.co.kr/groundwavefamilypc/familypc1m/master.m3u8
  EBS-2 (South Korea)			8:http://ebsonair.ebs.co.kr/ebs2familypc/familypc1m/index.m3u8
  EBS Kids (South Korea)		8:https://ebsonair.ebs.co.kr/ebsufamilypc/familypc1m/playlist.m3u8
  Thai PBS (Thailand) **^		8:**http://thaipbs-live.cdn.byteark.com/live/playlist.m3u8
  Kompas TV (Indonesia, YT)		0:DOOrIxw5xOw
  Public TV Armenia			8:https://amtvusdvr.tulix.tv/am2abr/index.m3u8
  Turkmenistan TV **			7:**http://alpha.tv.online.tm/hls/ch007_720/index.m3u8
  Zvezda TV (Russia)			8:http://tvchannelstream1.tvzvezda.ru/cdn/tvzvezda/playlist.m3u8
  TV Kujawy (Poland)			7:http://stream.tvkujawy.pl:8080/live/broadcast.m3u8
  FS1 Salzburg (Austria)		7:http://stream.fs1.tv:8080/hls/webstream.m3u8
  TV Filopoli (Greece)			8:http://live.streams.ovh:1935/tvfilopoli/tvfilopoli/playlist.m3u8
  Super TV (Italy)			8:http://wms.shared.streamshow.it:1935/supertv/supertv/live.m3u8
  TV 2000 (Italy)			8:https://hls-live-tv2000.akamaized.net/hls/live/2028510/tv2000/master.m3u8
  Wow! TV (El Salvador)			8:http://cdn.elsalvadordigital.com:1935/wowtv/wowtv/playlist.m3u8
  TV Lobo (Mexico)			8:http://streamingcws20.com:1935/lobodurango/videolobodurango/playlist.m3u8
`);

/*
  
9a:live/sonicentric
7a:midnight-pulp
7a:frightflix-2
7a:usa-today-news
7a:pickletv
7a:wildearth
7a:retrocrush
7a:asiancrush

  Stingray Classica (Canada) *		9a:live/stingray-classica
  Stingray Qello (Canada) *		9a:live/stingray-qello
  Law & Crime				6a:8ba514251e1a58b7b53368177baa1041

  OAN Encore				8:https://stream-us-east-1.getpublica.com/playlist.m3u8?&network_id=1879
  Salem Network				8:https://snc-ono.amagi.tv/playlist.m3u8
  Fox News **				7:*https://usnewson.com*https://s0.usnlive.com/stream/foxnews.m3u8
  MSNBC **				7:*https://usnewson.com*https://s0.usnlive.com/stream/msnbc.m3u8

  cnn international https://turnerlive.warnermediacdn.com/hls/live/586497/cnngo/cnni/VIDEO_0_3564000.m3u8
  australia abc  https://abc-news-dmd-streams-1.akamaized.net/out/v1/abc83881886746b0802dc3e7ca2bc792/index.m3u8
*/

frame_7.req_tubitv = async (id, frame, fmt) =>
{
  id = id.split ("?")[0].split ("/"); id = id [4] || id [0];

  var tag = "tubitv"; id = getid (frame, id, -9, -6);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var s, t, url = "https://tubitv.com/movies/" + id;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  s = pullstring (textData, '"video_resources":', '}],'); if (!s) throw ("!!!");
  url = ""; s = JSON.parse ('{"x":' + s + '}]}'); s = s.x;

  for (t of s) if (t.codec == "H264") if (!t.license_server) { url = t.manifest.url; break; } else
    if (t.type.includes ("widevine") && t.license_server.hdcp_version == "hdcp_disabled")
      url = t.manifest.url + "##" + t.license_server.url;

  if (!url) throw ("!!!"); else if (stream_all (frame, 1)) fmt = ""; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

  if (url.includes ("##")) tag += "-drm";

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_thearchive = async (id, frame, fmt) =>
{
  var tag = "thearchive"; id = getid (frame, id, -6);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var url = cors_local + "https://api-ott.thearchive.tv/search";

try
{ 
  var s = { 'content-type':'application/x-www-form-urlencoded' };

  response = await kitty (url, { method: 'POST', headers: s, body: "id=" + id } );
  jsonData = await response.json();

  url = jsonData.objects[0].video_url; if (!url) throw ("!!!");

  if (stream_all (frame, 1)) fmt = ""; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_plextv = async (id, frame, fmt) =>
{
  var tag = "plextv"; id = getid (frame, id, 24);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var s, t, u, sub, url, src = "https://vod.provider.plex.tv";

try
{ 
  s = { accept: 'application/json', 'X-Plex-Product': 'Plex Mediaverse', 'X-Plex-Client-Identifier': 'x' };
  response = await kitty (cors_bypass + "https://plex.tv/api/v2/users/anonymous", { method: 'POST', headers: s });
  textData = await response.text();

  u = "/library/metadata/" + id; if (!(t = pullstring (textData, '"authToken":"', '"'))) throw("!!!");
  url = src + "/playQueues?uri=provider://tv.plex.provider.vod" + u;

  s = { accept: 'application/json', 'X-Plex-Token': t };
  response = await kitty (cors_bypass + url, { method: 'POST', headers: s });
  jsonData = await response.json();

  sub = ""; for (s of jsonData.MediaContainer.Metadata) if (s.key == u) { sub = s.Media; break; }
  if (!sub) throw ("!!!"); s = sub[0].Part[0]; if (s.license) s = sub[1].Part[0];
  t = "?X-Plex-Token=" + t; url = src + s.key + t;

  if (u = s.license)
  {
    tag += "-drm"; stream_all (frame, 2); fmt = 0;
    url += "##" + src + u + t + "&X-Plex-DRM=widevine";
  }
  else if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_bilibili = async (id, frame, fmt) =>
{
  var tag = "bilibili"; id = getid (frame, id, 16);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var url = "https://api.bilibili.tv/intl/gateway/web/playurl?platform=web&aid=" + id;
  var n, r, s, t, f = [0,0,0,0], u = [];

try
{
  response = await kitty (cors_kraker + url);
  jsonData = await response.json();

  if (!(url = jsonData.data.playurl)) throw ("!!!");

  if (t = url.video) for (n = 0; n < t.length; n++)
    if ((s = t [n].video_resource) && s.codec_id == 7 && s.url)
    {
      r = [ s.codecs, s.segment_base.range, s.segment_base.index_range, s.url ];
      s = t [n].stream_info.desc_words;

      if (s == "360P") { u.push (r); f [0] = u.length; }
      if (s == "480P") { u.push (r); f [1] = u.length; }
      if (s == "720P") { u.push (r); f [2] = u.length; }
    }

  if (!(t = url.audio_resource) || !(s = t [0]) || !s.url) throw ("!!!");
  t = [ s.codecs, s.segment_base.range, s.segment_base.index_range, s.url ];

  fmt = argformat (getformat (f, fmt)); if (fmt < 0) throw ("!!!");
  s = u [f [fmt] - 1]; fmt = pixformat (fmt);

  r = cors_kraker + "~*https://www.bilibili.tv/*";

  download = "Bilibili DASH download links (" + id + ") -- " +
    "<a href='" + r + t[3] + "'>Audio</a> &nbsp;" +
    "<a href='" + r + s[3] + "'>Video</a>";

//  t[3] = "biliaud.mp4"; s[3] = "bilivid.mp4"; 

  r = (url.duration / 1000) + "|audio/mp4|" + t[0] + "|video/mp4|" + s[0] + "|" +
      t[1] + "," + t[2] + "," + s[1] + "," + s[2] + "|bili.mpd|" + t[3] + "|" + s[3] + "|" + r;

  await kitty ("/wanna_boot_dash", { method: 'POST', body: r });
  stream_all (frame, 2); url = cors_kraker + "_wanna_boot_dash_bili.mpd";

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_fawesome = async (id, frame, fmt) =>
{
  if (id.includes ("/")) id = id.split ("/")[4];
  var tag = "fawesome"; id = getid (frame, id, 8);
  if (!id || is_busy (frame, tag + " (ID)", 1)) return;

  var s, t, url, src = "https://fawesome.tv/";
  var query = "**" + src + "home/new/v404/api/XXX.php?appId=9&siteId=236&auth-token=1217575";

try
{
  if (!(t = cookies [tag]))
  {
    response = await kitty (cors_kraker + query.replace ("XXX", "getSecurityToken"));
    textData = await response.text();

    t = pullstring (textData, '"securityToken":"', '"');
    if (!t) throw ("???"); s = { headers: { token: t }};

    response = await kitty (cors_kraker + query.replace ("XXX", "index"), s);
    textData = await response.text();

    s = pullstring (textData, '"countryCode":"', '"') || "US"; t = cookies [tag] = t + " " + s;
  }

  t = t.split (" "); s = { headers: { token: t[0] }};
  t = "&searchType=nodeid&country=" + t[1] + "&nid=" + id;

  response = await kitty (cors_kraker + query.replace ("XXX", "recipes") + t, s);
  textData = await response.text();

  url = pullstring (textData, '"video_hls_url":"', '"'); if (!url) throw ("!!!");
  url = url.replace (/\\/g, "");
  
  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_filmzie = async (id, frame, fmt) =>
{
  var tag = "filmzie"; id = getid (frame, id, 24);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var url = "https://filmzie.com/api/v1/video/stream/" + id;

try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, '"file":"', '"'); if (!url) throw ("!!!");
  
  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_goojara = async (id, frame, fmt) =>
{
  var tag = "goojara"; id = getid (frame, id, 8, 6);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var c, s, url = "https://ww1.goojara.to/" + id;

if (id.length == 8) url = id; else try
{
  response = await kitty (cors_kraker + url, allow_cookie (tag, ""));
  textData = await response.text();

  if (response.status == 403)
  {
    url = pullstring (url, "//", "/") + "/robots.txt";
    cookiecutter (url + "=" + tag); busy = 0; no_fail (frame, id); return;
  }

  url = pullstring (textData, 'Direct Links:', 'Wootly');
  url = pullstring (url, 'href="', '"'); if (!url) throw ("!!!");

  s = pullstring (textData, "<script\>", "</script\>");
  s = pullstring (s, "('", "')").split ("','");

//  s = "var cookie='';" + s.replace (/document[^=^\)]*/g, "cookie") + "s=cookie";
//  eval (s);

  c = response.headers.get ("zz-set-cookie") || "";
  c = pullstring (c, "", ";") + "; " + s[0] + "=" + s[1];
  s = cookies [tag] || ""; if (s) c += "; " + s;

  response = await kitty (cors_kraker + url, allow_cookie ("", c));
  textData = await response.text();

  url = response.headers.get ("zz-location"); if (!url) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame, id)) frame_7.req_wootly (url, frame, fmt);
}
////////////////////

frame_7.req_playtaku = async (id, frame, fmt) =>
{
  var tag = "playtaku"; id = getid (frame, id, -8, -6);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var src = "https://s3embtaku.pro", url = src + "/loadserver.php?id=" + id;
  var n, s, t, e, f = [0,0,0,0];

if (!got_crypto()) busy = 0; else try
{
  response = await kitty (cors_kraker + url);
  textData = await response.text();

  var sub = pullstring (textData, "dood", "Doodstream"); sub = pullstring (sub, '/e/', '"');
  if ((n = sub.indexOf ("?")) > 0) sub = sub.substr (0, n);

  if (sub) try  // cribbed from req_doodstream
  {
    url = cors_kraker + "!mock:1A|*https://dood.pm"; response = await kitty (url + "/d/" + sub);
    t = await response.text(); t = pullstring (t, '/download/', '"'); if (!t) throw ("");
    await getmessage (1); response = await kitty (url + "/download/" + t);
    t = await response.text(); url = pullstring (t, '</span> <a href="', '"');
  }
  catch { sub = ""; }

  if (!sub || !url) sub = "Not available"; else
  {
    sub = "<a href='" + url + "'>" + sub + "</a>";
    url = cors_kraker + "~**!content-disposition=|!content-type=video/mp4|*" + url;
    sub += " - <a href='" + url + "'>playable link</a>";
  }

  download = "DoodStream download link: " + sub;
  var iv = CryptoJS.enc.Utf8.parse ("3134003223491201");
  var ss = CryptoJS.enc.Utf8.parse ("37911490979715163134003223491201");

  if (!(s = pullstring (textData, 'data-value="', '"'))) s = "&c=aaaaaaaa&refer=none"; else
  {
    e = CryptoJS.AES.decrypt (s, ss, {iv: iv});
    s = CryptoJS.enc.Utf8.stringify (e);
  }

  e = CryptoJS.AES.encrypt (id, ss, {iv: iv}); s = s.substr (s.indexOf ("&"));
  ss = CryptoJS.enc.Utf8.parse ("54674138327930866480207815084989");

  url = src + "/encrypt-ajax.php?id=" + e.toString() + s + "&alias=" + id;
  response = await kitty (cors_kraker + "accept=application/json|x-requested-with=XMLHttpRequest|*" + url);
  jsonData = await response.json();

  if (s = jsonData.data)
  {
    e = CryptoJS.AES.decrypt (s, ss, {iv: iv});
    e = JSON.parse (e.toString (CryptoJS.enc.Utf8)); console.log(e);

    if (!(s = e.source) || !s.length) if (s = e.linkiframe)
    {
      if ((n = s.indexOf ("?")) > 0) s = s.substr (0, n);
      if (s.substr (-1) == "/") s = s.substr (0, s.length - 1);
      if (!s.includes ("/awish.")) s = "";
    }
  }

  if (!s) throw ("!!!"); else if (typeof (s) == "string")
  {
    response = await kitty (cors_kraker + s);
    textData = await response.text();
 
    url = pullstring (textData, '[{file:"', '"'); if (!url) throw ("!!!");
  }
  else
  {
    for (t = 0, n = 0; n < s.length; n++)
    {
      url = s[n].label; if (!url) continue;
      if (url == "360 P") f[0] = n + 1;
      if (url == "480 P") f[1] = n + 1;
      if (url == "720 P") f[2] = n + 1;
      if (url == "hls P" || url == "auto P") t = n + 1;
    }

    n = getformat (f, fmt); n = argformat (n);
    if (n >= 0) t = f[n]; else if (!t) throw ("!!!"); url = s [t - 1].file;
  }

  if (!url.includes (".m3u8"))  // mp4 may not be available anymore
  {
    fixformat (f, frame); fmt = pixformat (n);
    url = cors_kraker + "~*" + src + "*" + url;
  }
  else if (stream_all (frame, 1)) fmt = 0; else
  {
    url = cors_kraker + "~" + url;
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_xhamster = async (id, frame, fmt) =>
{
  var tag = "xhamster"; id = getid (frame, id, -8);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var url = "https://xhamster.com/embed/" + id;
  var i, j, k, f = [0,0,0,0], r = [0,0,0,0];

if (stream_all (frame, 0)) fmt = ""; else try
{
  response = await kitty (cors_kraker + url);
  textData = await response.text();

  var s = '"standard":';
  var n = textData.indexOf (s); if (n < 0) throw ("!!!");
  var sub = textData.substr (n + s.length);
  sub = sub.substr (0, sub.indexOf ("}]}") + 3);
  sub = JSON.parse (sub); sub = sub.h264;

  for (i = 0; i < sub.length; i++)
  {
    k = sub[i].quality; k = k.substr (0, k.indexOf ("p")); if (!k) continue;
    if ((j = chkformat (k)) >= 0) if (r[j] < k) { f[j] = i + 1; r[j] = k; }
  }

  fmt = getformat (f, fmt); fixformat (f, frame);
  if ((j = argformat (fmt)) < 0 || (n = f[j] - 1) < 0) throw ("!!!");

  fmt = r[j]; url = sub[n].url;
  if (url.indexOf (".xhcdn.") < 0) url = sub[n].fallback;
  if (url.indexOf (".xhcdn.") < 0) throw ("!!!");
  url = cors_kraker + "~**" + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_doodstream = async (id, frame, fmt) =>
{
  var tag = "doodstream"; id = getid (frame, id, 12);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var src = "https://dood.pm", url = src + "/d/" + id;

try
{
  response = await kitty (cors_kraker + "!mock:1A|*" + url);
  textData = await response.text();

  var s = pullstring (textData, '/download/', '"'); if (!s) throw ("!!!");
  await getmessage (1); url = src + "/download/" + s;

  response = await kitty (cors_kraker + "!mock:1A|*" + url);
  textData = await response.text();

  url = pullstring (textData, '</span> <a href="', '"'); if (!url) throw ("!!!");
  url = cors_kraker + "~**" + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_7.req_dropload = async (id, frame, fmt) =>
{
  var tag = "dropload"; id = getid (frame, id, 12);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var src = "https://dropload.io", url = src + "/" + id + ".html";
  var u = "*!/,,*user-agent=|accept=|accept-language=|accept-encoding=|*";

try
{
  response = await kitty (cors_kraker + u + url);
  textData = await response.text();

  var sub = pullstring (textData, "p,a,c,k,e,d", "<\/script>"); if (!sub) throw ("!!!");

  eval ("(sub=function(p,a,c,k,e,d" + sub);
  url = cors_kraker + u + pullstring (sub, 'file:"', '"');

  if (!url.includes (".m3u8") || stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_7.req_eplayvid = async (id, frame, fmt) =>
{
  var tag = "eplayvid"; id = getid (frame, id, 15);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var url = "https://eplayvid.net/watch/" + id;

if (stream_all (frame, 0)) fmt = ""; else try
{
  response = await kitty (cors_kraker + url);
  textData = await response.text();

  url = pullstring (textData, '<source src="', '"'); if (!url) throw ("!!!");
  url = cors_kraker + "~**" + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_7.req_mixdrop = async (id, frame, fmt) =>
{
  var tag = "mixdrop"; id = getid (frame, id, -15, 5);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var url = "https://mixdrop.ag/e/" + id;

try
{
  response = await kitty (cors_kraker + url);
  textData = await response.text();

  n = textData.indexOf ("p,a,c,k,e,d"); if (n < 0) throw ("!!!");

  var sub = textData.substr (n - 9, 1000);
  sub = sub.substr (0, sub.indexOf ("script") - 4); if (!sub) throw ("!!!");
  eval ("sub=" + sub); url = sub.substr (sub.indexOf ("wurl=") + 6);
  url = url.substr (0, url.indexOf ('"')); if (!url) throw ("!!!");
  url = cors_kraker + "~https:" + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_7.req_moviesapi = async (id, frame, fmt) =>
{
  var tag = "moviesapi"; id = getid (frame, id.split ("/").pop(), -10, -7, -5);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var url = "https://moviesapi.club/movie/" + id;

if (!got_crypto()) busy = 0; else try
{
  function decode1 (cipher, password)
  {
    var i, j, p, q, r = ""; password = CryptoJS.SHA1 (password).toString();

    for (i = j = 0; i < cipher.length; i += 2)
    {
      p = cipher [i + 1] + cipher [i]; p = parseInt (p, 36).toString (16);
      if (j >= password.length) j = 0; q = password.charCodeAt (j++);
      r += String.fromCharCode (parseInt (p, 16) - q);
    }
    return (pullstring (r, 'file: "', '"'));
  }

  function decode2 (cipher, password)
  {
    var n, p, q, r = "", s = [], t = CryptoJS.SHA256 (password).toString();
    cipher = atob (cipher.replace (/-/g, '+').replace (/_/g, '/'));

    for (n = 0; n < t.length; n += 2) s.push (parseInt (t.substr (n, 2), 16));

    for (n = 0; n < cipher.length; n++)
    {
      p = cipher.charCodeAt (n); q = s [n % s.length];
      r += String.fromCharCode (p ^ q)
    }
    r = atob (r); return (pullstring (r, 'file: "', '"'));
  }

  response = await kitty (cors_kraker + "**" + url);
  textData = await response.text();

  url = pullstring (textData, "<iframe", '>');
  url = pullstring (url, 'src="', '"'); if (!url) throw ("!!!");

  response = await kitty (cors_kraker + "**" + url);
  textData = await response.text();

  url = pullstring (textData, "Encrypted = '", "'"); if (!url) throw ("!!!");
  url = decode2 (url, 'v_z#ofgl0[E.-fG+'); if (!url) throw ("!!!");

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_pkspeed = async (id, frame, fmt) =>
{
  var tag = "pkspeed"; id = getid (frame, id, 12);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var src = "https://pkspeed.net", url = src + "/embed-" + id + ".html";
  var n, s, t, f = [0,0,0,0];

if (stream_all (frame, 0)) fmt = ""; else try
{
  response = await kitty (cors_kraker + url);
  textData = await response.text();

  s = "(p,a,c,k,e,d)"; t = pullstring (textData, s, ")))"); if (!t) throw ("!!!");
  eval ("url=function" + s + t + "))"); s = pullstring (url, "sources:[", "]").split ("{");

  for (n = 1; n < s.length; n++)
  {
    t = pullstring (s [n], 'label:"', '"');
    if (t == "360p") f [0] = n;
    if (t == "480p") f [1] = n;
    if (t == "720p") f [2] = n;
  }

  fmt = getformat (f, fmt); fixformat (f, frame);
  n = argformat (fmt); fmt = pixformat (n); n = f [n];
  url = pullstring (s [n], '"', '"'); if (!url) throw ("!!!");
  url = cors_kraker + "~" + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_streamtape = async (id, frame, fmt) =>
{
  var tag = "streamtape"; id = getid (frame, id, -15);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;
  var url = "https://streamtape.com/e/" + id;

try
{
  response = await kitty (cors_kraker + url);
  textData = await response.text();

  url = pullstring (textData, "substring(1).substring(2)", "<\/script>"); if (!url) throw ("!!!");
  url = pullstring (url, "&expires=", "')"); if (!url) throw ("!!!");
  url = "https://streamtape.com/get_video?id=" + id + "&expires=" + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_7.req_turbovid = async (id, frame, fmt) =>
{
  var tag = "turbovid"; id = getid (frame, id, 12);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;
  var n, r, s, t, u, src = "https://turbovid.eu/", url = src + "embed/" + id;

if (stream_all (frame, 0)) fmt = 0; else try
{
  function decode (cipher, key)
  {
    for (n = 0, r = ""; n < cipher.length; n += 2)
      r += String.fromCharCode (parseInt (cipher.substr (n, 2), 16));

    for (n = 0, cipher = r, r = ""; n < cipher.length; n++)
      r += String.fromCharCode (cipher.charCodeAt (n) ^ key.charCodeAt (n % key.length));

    return (r.indexOf ("http") ? "" : r);
  }

  response = await kitty (cors_kraker + url);
  textData = await response.text();

  s = pullstring (textData, 'const apkey', ';'); t = pullstring (textData, 'const xxid', ';');
  s = pullstring (s, '"', '"'); t = pullstring (t, '"', '"'); if (!s || !t) throw ("!!!");

  url = "**" + src + "api/cucked/"; u = { headers: { 'X-Requested-With': 'XMLHttpRequest' }};

  response = await kitty (cors_kraker + url + "the_juice/?" + s + "=" + t, u);
  textData = await response.text();

  s = pullstring (textData, '"data":"', '"'); if (!s) throw ("!!!");

  response = await kitty (cors_kraker + url + "juice_key", u);
  textData = await response.text();

  t = pullstring (textData, '"juice":"', '"'); if (!t) throw ("!!!");
  url = decode (s, t); if (!url) throw ("!!!"); url = cors_kraker + "~*" + src + "*" + url;

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_upstream = async (id, frame, fmt) =>
{
  var tag = "upstream"; id = getid (frame, id, 12);
  if (!id || is_busy (frame, tag + " (ID)", 1)) return;

  var src = "https://upstream.to", url = src + "/embed-" + id + ".html";

if (stream_all (frame, 0)) fmt = ""; else try
{
  response = await kitty (cors_kraker + url);
  textData = await response.text();

  var n = textData.indexOf ("p,a,c,k,e,d"); if (n < 0) throw ("!!!");

  var sub = textData.substr (n - 9, 5000);
  sub = sub.substr (0, sub.indexOf ("script") - 4);
  eval ("sub=" + sub); url = pullstring (sub, 'file:"', '"'); if (!url) throw ("!!!");

  if (url[0] == "/") if (!(sub = pullstring (sub, 'image:"', '&'))) throw ("!!!"); else
  {
    n = url.indexOf ("&srv="); if (n > 0) url = url.substr (n); url = sub.split ("/")[2] + url;
  }

  if (!url.includes (".m3u8") || stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

  //url = cors_kraker + "~*" + src + "/,,*" + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_vidsrc = async (id, frame, fmt) =>
{
  var tag = "vidsrc"; id = getid (frame, id, -10, 6);
  if (!id || is_busy (frame, tag + " (ID)", 1)) return;

  var n, s, t, u, v, w, url = "https://vidsrc.net/embed/movie/" + id;

if (stream_all (frame, 0)) fmt = ""; else try
{
  response = await kitty (cors_kraker + url);
  textData = await response.text();

  url = pullstring (textData, "<iframe", ">");
  url = pullstring (url, 'src="', '"'); if (!url) throw ("!!!");
  if (url [0] == "/") url = "https:" + url;

  response = await kitty (cors_kraker + "*https://vidsrc.net/*" + url);
  textData = await response.text();

  s = pullstring (textData, "src: '", "'"); if (!s) throw ("!!!");
  u = "https://" + pullstring (url, "//", "/"); if (s[0] == "/") s = u + s;

  response = await kitty (cors_kraker + "*" + u + "/*" + s);
  textData = await response.text();

  s = textData.substr (textData.indexOf ("reporting.js"), 500);
  s = pullstring (s.substr (s.lastIndexOf ("src=")), '"', '"'); if (!s) throw ("!!!");
  t = pullstring (textData, 'style="display:none;">', '<'); if (!t) throw ("!!!");

  response = await kitty (cors_kraker + u + s);
  textData = await response.text();

  n = textData.indexOf ("}}window["); if (n < 0) throw ("!!!");
  s = pullstring (textData.substr (n), "=", "(") + "('" + t + "'), '*'";

  t = '<!DOCTYPE html><html><body style="display:none"><script>\n' +
      textData.substr (0,n) + '}}\nwindow.top.postMessage("@"+'  + s + ');\n' +
      '<\/script></body></html>';

  v = stream_player (frame); w = v.contentDocument; w.open(); w.write (t); w.close();
  url = await getmessage (5); v.src = ""; if (!url) throw ("???");
  url = cors_kraker + "~*" + u + "/,,*" + url;

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_7.req_vtube = async (id, frame, fmt) =>
{
  var tag = "vtube"; id = getid (frame, id, 12);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var src = "https://vtube.network", url = src + "/" + id + ".html";

if (stream_all (frame, 0)) fmt = ""; else try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  var sub = pullstring (textData, "p,a,c,k,e,d", "<\/script>"); if (!sub) throw ("!!!");

  eval ("(sub=function(p,a,c,k,e,d" + sub); url = pullstring (sub, 'file:"', '"');

  if (!url.includes (".m3u8") || stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_7.req_wootly = async (id, frame, fmt) =>
{
  var tag = "wootly"; id = getid (frame, id, 8);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var c, h, s, t, u, url = "https://www.wootly.ch/?v=" + id;

try
{
  response = await kitty (cors_kraker + url);
  textData = await response.text();

  url = pullstring (textData, '<iframe src="', '"'); if (!url) throw ("!!!");
  h = { 'content-type': 'application/x-www-form-urlencoded', accept: "**" };

  response = await kitty (cors_kraker + url, { method: 'POST', headers: h, body: 'qdfx=1' });
  textData = await response.text();

  c = response.headers.get ("zz-set-cookie") || ""; c = pullstring (c, "", ";");
  t = pullstring (textData, 'tk="', '"'); u = pullstring (textData, 'vd="', '"');

  url = pullstring (url, "", "//") + "//" + pullstring (url, "//", "/");
  url += "/grabm?t=" + t + "&id=" + u; if (!t || !u) throw ("!!!");

  response = await kitty (cors_kraker + url, allow_cookie ("", c));
  textData = await response.text();

  url = textData; if (url.indexOf ("http")) throw ("!!!");

  response = await kitty (cors_kraker + url, { method: 'HEAD' });
  if (response.status != 200) throw ("!!!");

  url = response.url.replace (/[^.]*.nebula.to\//, "https://orix.nebula.to/");

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_7.dig_thearchive = async (url, frame, fmt) =>
{
  var tag = "thearchive"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{ 
  response = await kitty (cors_local + url);
  textData = await response.text();

  url = pullstring (textData, 'data-ottera-id="', '"');

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_7.req_thearchive (url, frame, fmt);
}
////////////////////

frame_7.dig_darkmatter = async (url, frame, fmt) =>
{
  var tag = "darkmatter"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, 'class="elementor-button-wrapper"', '>Watch Now<');
  url = pullstring (url, 'href="', '"'); url = url.substr (0, url.lastIndexOf ("/"));
  if (!url) throw ("!!!");

  response = await kitty (us_geo_bypass + url);
  textData = await response.text();

  if (!(url = pullstring (textData, '"sources":[{"uri":"', '"')))
  {
    if (!(url = pullstring (textData, '{"onnow":{"id":"', '"'))) throw ("!!!");
    url = "https://valencia-app-mds.xumo.com/v2/assets/asset/" + url + ".json";
    response = await kitty (cors_kraker + url);
    textData = await response.text();
    if (!(url = pullstring (textData, '"sources":[{"uri":"', '"'))) throw ("!!!");
  }

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?", fmt);
}
////////////////////

frame_7.dig_plextv = async (url, frame, fmt) =>
{
  var tag = "plextv"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, '"key\\":\\"', '\\'); if (!url) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_7.req_plextv (url, frame, fmt);
}
////////////////////

frame_7.dig_filmzie = async (url, frame, fmt) =>
{
  var tag = "filmzie"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, '"videos":[{"id":"', '"'); if (!url) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_7.req_filmzie (url, frame, fmt);
}
////////////////////

frame_7.dig_catflix = async (url, frame, fmt) =>
{
  var tag = "catflix"; if (is_busy (frame, tag + " (DIG)", 2)) return;

try
{ 
  response = await kitty (cors_kraker + url);
  textData = await response.text();

  url = atob (pullstring (textData, 'main_origin = "', '"'));
  if (!url.includes ("turbovid")) throw ("!!!"); url = url.split ("/").pop();

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_7.req_turbovid (url, frame, fmt);
}
////////////////////

frame_7.dig_lookmovie = async (url, frame, fmt) =>
{
  var tag = "lookmovie"; if (is_busy (frame, tag + " (DIG)", 2)) return;
  var s, t, u, src = url.split ("/").slice (0,3).join ("/");
  url = url.replace ("/view/", "/play/");

try
{
  response = await kitty (cors_kraker + "//!");
  textData = await response.text(); if (textData.indexOf ("**")) throw ("???");

  response = await kitty (cors_kraker + url, allow_cookie ("", textData));
  textData = await response.text();

  u = pullstring (textData, "window['", "}"); s = pullstring (u, "id_movie: ", ",");
  t = pullstring (u, 'hash: "', '"'); if (!t) t = pullstring (u, "hash: '", "'");
  u = pullstring (u, "expires: ", "").trim() + ","; u = pullstring (u, "", ",");

  if (!t || !u) throw ("!!!"); else if (s) url = "movie"; else
  {
    s = pullstring (url, "id_episode=", ""); url = "episode"; if (!s) throw ("!!!");
  }

  u = "?id_XXX=" + s + "&hash=" + t + "&expires=" + u;
  u = src + "/api/v1/security/XXX-access" + u;

  response = await kitty (cors_kraker + u.replace (/XXX/g, url));
  textData = await response.text();

  url = pullstring (textData, "http", "m3u8"); if (!url) throw ("!!!");
  url = "http" + url + "m3u8"; stream_all (frame, 1);

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?");
}
////////////////////

frame_7.dig_playtaku = async (url, frame, fmt) =>
{
  var tag = "playtaku"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  var s = pullstring (textData, '<iframe src="', '"'); url = pullstring (s, "?id=", "");

  if ((n = url.indexOf ("=")) > 0) url = url.substr (0, n);
  if ((n = url.indexOf ("&")) > 0) url = url.substr (0, n);

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_7.req_playtaku (url, frame, fmt);
}
////////////////////

frame_7.dig_wconline = async (url, frame, fmt) =>
{
  var tag = "wconline"; if (is_busy (frame, tag + " (DIG)", 2)) return;
  var s, t, sub, f = [0,0,0,0], ua = cors_kraker + "**!mock:1A|*";

try
{ 
  response = await fetch (ua + url);
  textData = await response.text();

  if (url = "", s = pullstring (textData, "script>var", "document"))
  {
    t = pullstring (s, " ", " "); eval (s + "url=" + t); url = pullstring (url, 'src="', '"');
  }
  else if (s = pullstring (textData, "<iframe", ">")) url = pullstring (s, 'src="', '"');

  if (!url) throw ("!!!");

  response = await fetch (ua + url);
  textData = await response.text();

  s = pullstring (textData, 'getJSON("', '"'); if (!s) throw ("!!!");
  ua = cors_kraker + "**user-agent=abc|x-requested-with=XMLHttpRequest|*";

  response = await fetch (ua + "https://" + url.split ("/")[2] + s);
  jsonData = await response.json();

  t = ["", jsonData.enc, jsonData.hd, jsonData.fhd];
  if (t[1]) f[1] = 1; if (t[2]) f[2] = 1; if (t[3]) f[3] = 1;
  fmt = gotformat (f, fmt); fixformat (f, frame); url = t [fmt]; fmt = pixformat (fmt);

  url = cors_kraker + "~user-agent=abc|*" + jsonData.server + "/getvid?evid=" + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?", fmt);
}
////////////////////

frame_7.dig_xvideos = async (url, frame, fmt) =>
{
  var tag = "xvideos"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  if (url = pullstring (textData, "setVideoHLS('", "'")) if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }
  else if (url = pullstring (textData, '"contentUrl": "', '"')) fmt = 0; else throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?", fmt);
}
////////////////////

frame_7.dig_inetradio = async (url, frame, fmt) =>
{
  var tag = "internetradio"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, "var stream", "}");
  url = pullstring (url, '"', '"'); if (!url) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?");
}
////////////////////

