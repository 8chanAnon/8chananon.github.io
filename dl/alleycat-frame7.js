// Free Movies & TV

document.getElementById ("src7").innerHTML = `
  <option value= "youtube"    class="w">YouTube / Invidious
  <option value= "tubitv"     >+ m3u - Tubi
  <option value= "thearchive" >+ mp4 - The Archive
  <option value= "darkmatter" >? m3u - Dark Matter
  <option value= "plextv"     >? m3u - Plex
  <option value= "bilibili"   >? mpd - Bilibili
  <option value= "emovies"    >+ m3u - EMovies
  <option value= "goku"       >+ m3u - GOKU
  <option value= "goojara"    ># mp4 - Goojara
  <option value= "noxx"       >? mp4 - Noxx
  <option value= "playtaku"   >+ m3u - PlayTaku
  <option value= "pressplay"  >? m3u - PressPlay
  <option value= "xhamster"   ># mp4 - XHamster
  <option value= "xvideos"    >? m3u - XVideos
  <option value= "doodstream" class="r"># mp4 - DoodStream
  <option value= "dropload"   class="r"># m3u - DropLoad
  <option value= "eplayvid"   class="r"># mp4 - EplayVid
  <option value= "mixdrop"    class="r"># mp4 - MixDrop
  <option value= "pkspeed"    class="r"># mp4 - PkSpeed
  <option value= "streamtape" class="r"># mp4 - StreamTape
  <option value= "upstream"   class="r"># m3u - UpStream
  <option value= "vtube"      class="r"># mp4 - VTube
  <option value= "wootly"     class="r"># mp4 - Wootly
  <option value= "inetradio"  class="b">? mp3 - InternetRadio
`;

document.getElementById ("butt7").innerHTML = `
  <button onclick="javascript:copylist(this,7,-2)">Dance</button>
  &nbsp;
  <button onclick="javascript:copylist(this,7,-3)">TV US1</button>
  <button onclick="javascript:copylist(this,7,-4)">TV US2</button>
  <button onclick="javascript:copylist(this,7,-5)">TV US3</button>
  &nbsp;
  <button onclick="javascript:copylist(this,7,-6)">TV UK+</button>
  <button onclick="javascript:copylist(this,7,-7)">TV Alt</button>
  &nbsp;
  <button onclick="javascript:copylist(this,7,-8)">Int'l</button>
`;

var frame_7 = {
  req_youtube: request
}

var stack_7_1 = [""
];

var stack_7_2 = [""
  , "Company TV (Italy)"		, "8:https://company.fluid.stream/CompanyTV/smil:Company_ALL.smil/playlist.m3u8"
  , "Deejay TV (Italy)"			, "8:http://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S85984808/sMO0tz9Sr2Rk/playlist.m3u8"
  , "Ditty TV (US)"			, "8:https://0ba805a2403b4660bbb05c0a210ebbdc.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/ONO_DittyTV/playlist.m3u8"
  , "Kaloopy (US) *"			, "9a:live/kaloopy"
  , "KroneHit TV (Austria)"		, "8:http://bitcdn-kronehit.bitmovin.com/v2/hls/index.m3u8"
  , "Ocko Expres (Czech Republic)"	, "8:http://ocko-live.ssl.cdn.cra.cz/channels/ocko_expres/playlist.m3u8"
  , "Power HD (Turkey)"			, "8:http://livetv.powerapp.com.tr/powerTV/powerhd.smil/playlists.m3u8"
  , "Radio Capital (Italy)"		, "8:http://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S35394734/Z6U2wGoDYANk/playlist.m3u8"
  , "Radio Chanson (Russia)"		, "8:http://chanson-video.hostingradio.ru:8080/hls/chansonabr/live.m3u8"
  , "Radio m2o (Italy)"			, "8:http://4c4b867c89244861ac216426883d1ad0.msvdn.net/live/S62628868/uhdWBlkC1AoO/playlist.m3u8"
  , "Reload TV (Greece)"		, "8:http://web.onair-radio.eu:1935/video/video/index.m3u8"
  , "Retro Music (Czech Republic)"	, "8:http://stream.mediawork.cz/retrotv/retrotvHQ1/playlist.m3u8"
  , "Shuffle Dance Music (YouTube)"	, "0:qWf-FPFmVw0"
  , "Siganos Music (Greece)"		, "8:http://web.onair-radio.eu:1935/Alpha-Host/Alpha-Host/playlist.m3u8"
  , "Stingray Classica (Canada) *"	, "9a:live/stingray-classica"
  , "Stingray Qello (Canada) *"		, "9a:live/stingray-qello"
  , "Strana FM (Russia)"		, "8:http://live.stranafm.cdnvideo.ru/stranafm/smil:stranafm.smil/playlist.m3u8"
  , "V2Beat (Germany)"			, "8:http://stream.v2beat.live/playlist.m3u8"
  , "Vevo Pop (US) **"			, "1p:5d93b635b43dd1a399b39eee"
  , "Visual Radio (Turkey)"		, "8:http://wms.shared.streamshow.it/visualradio/mp4:visualradio/playlist.m3u8"
];

var stack_7_3 = [""
  , "ABC *"				, "5a:wabc-new-york-abc-east-live-stream"
  , "ABC News"				, "1e:3324f2467c414329b3b0cc5cd987b6be"
  , "AMC *"				, "5a:amc-live-stream"
  , "BBC America *"			, "5a:bbc-america-live-stream"
  , "Bloomberg"				, "8:https://www.bloomberg.com/media-manifest/streams/phoenix-us.m3u8"
  , "CBS *"				, "5a:wcbs-new-york-cbs-east-live-stream"
  , "CBS News"				, "8:http://cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master.m3u8"
  , "CNBC *"				, "5a:cnbc-live-stream"
  , "CNN *"				, "5a:cnn-live-stream"
  , "C-SPAN *"				, "5a:cspan-live-stream"
  , "C-SPAN 2 *"			, "5a:cspan-2-live-stream"
  , "ET Live"				, "8:https://dai.google.com/linear/hls/event/xrVrJYTmTfitfXBQfeZByQ/master.m3u8"
  , "Fox *"				, "5a:wnyw-new-york-fox-east-live-stream"
  , "Fox Business *"			, "5a:fox-business-network-live-stream"
  , "Fox News *"			, "5a:fox-news-channel-live-stream"
  , "Fox News Now"			, "8:https://fox-foxnewsnow-samsungus.amagi.tv/playlist.m3u8"
  , "MSNBC *"				, "5a:msnbc-live-stream"
  , "NBC *"				, "5a:wnbc-new-york-nbc-east-live-stream"
  , "NBC News"				, "8:https://dai2.xumo.com/amagi_hls_data_xumo1212A-xumo-nbcnewsnow/CDN/master.m3u8"
  , "OAN **"				, "1p:5e7cf6c7b156d500078c5f44"
  , "OAN Encore *"			, "9a:live/oan-encore"
  , "PBS *"				, "5a:pbs-13-wnet-new-york-live-stream"
  , "PopStar!"				, "8:https://linear-10.frequency.stream/dist/zype/10/hls/master/playlist.m3u8"
  , "Sundance *"			, "5a:sundancetv-hd-live-stream"
  , "Syfy *"				, "5a:syfy-live-stream"
  , "TBS (East)"			, "/0/1/0 7:https://turnerlive.warnermediacdn.com/hls/live/2023172/tbseast/slate/VIDEO_2_1964000.m3u8"
  , "TBS (West)"			, "/0/1/0 7:https://turnerlive.warnermediacdn.com/hls/live/2023174/tbswest/slate/VIDEO_2_1964000.m3u8"
  , "The CW *"				, "5a:the-cw-live-stream"
  , "TMZ"				, "8:https://d2dimalv43j51f.cloudfront.net/out/v1/52d3048e53eb42a7959dc347d2f810e2/index.m3u8"
  , "TNT (East)"			, "/0/1/0 7:https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_2_1964000.m3u8"
  , "TNT (West)"			, "/0/1/0 7:https://turnerlive.warnermediacdn.com/hls/live/2023170/tntwest/slate/VIDEO_2_1964000.m3u8"
  , "Tru TV (East)"			, "/0/1/0 7:https://turnerlive.warnermediacdn.com/hls/live/2023176/trueast/slate/VIDEO_2_1964000.m3u8"
  , "Tru TV (West)"			, "/0/1/0 7:https://turnerlive.warnermediacdn.com/hls/live/2023178/truwest/slate/VIDEO_2_1964000.m3u8"
  , "USA Network *"			, "5a:usa-network-live-stream"
  , "WE TV *"				, "5a:we-tv-live-stream"
];

var stack_7_4 = [""
  , "Adventure Sports *"		, "9a:live/adventure-sports-tv"
  , "America's Test Kitchen **"		, "1p:5e84f54a82f05300080e6746"
  , "Billiard TV *"			, "9a:live/billiard-tv"
  , "Boxing TV *"			, "9a:live/boxing-tv"
  , "Dot Esports *"			, "9a:live/dot-esports"
  , "Dungeon TV *^"			, "7a:channel/dungeon-tv-2"
  , "Entrepreneur *"			, "9a:live/entrepreneur-1"
  , "Gusto TV *"			, "9a:live/gusto-tv"
  , "HGTV *"				, "5a:hgtv-live-stream"
  , "Hunt Channel"			, "8:http://1111296894.rsc.cdn77.org/LS-ATL-56868-1/index.m3u8"
  , "MMA Junkie *"			, "9a:live/mma-junkie"
  , "MotorTrend FAST TV"		, "8:https://3fa797d5.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/T05PX01vdG9yVHJlbmRGYXN0VFZfSExT/playlist.m3u8"
  , "PGA Tour **"			, "1p:5de94dacb394a300099fa22a"
  , "Red Bull TV"			, "8:http://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8"
  , "Right Now TV *"			, "9a:live/right-now-tv"
  , "SpeedVision *^"			, "7a:channel/speedvision"
  , "Sports Grid"			, "8:https://sportsgrid-klowdtv.amagi.tv/hls/amagi_hls_data_klowdtvAA-sportsgrid-klowdtv/CDN/playlist.m3u8"
  , "Tastemade"				, "8:https://tastemade-xumo.amagi.tv/hls/amagi_hls_data_tastemade-tastemadefreetv16xumo/CDN/master.m3u8"
  , "TBD (Sinclair)"			, "1e:1831163f97674328ad9f4b4814ed39c5"
  , "This Old House **"			, "1p:5d51e791b7dba3b2ae990ab2"
  , "Waypoint TV"			, "8:https://live-manifest.production-public.tubi.io/live/0831606b-a9dc-4ee9-a381-52b0c9b59b2f/playlist.m3u8"
  , "World Poker Tour *"		, "9a:live/world-poker-tour"
  , "ESPN *"				, "5a:espn-live-stream"
  , "ESPN 2 *"				, "5a:espn2-live-stream"
  , "Fox Sports 1 *"			, "5a:fox-sports-1-live-stream"
  , "Fox Sports 2 *"			, "5a:fox-sports-2-live-stream"
  , "Golf Channel *"			, "5a:golf-channel-live-stream"
  , "NBA TV *"				, "5a:nba-tv-live-stream/"
  , "NBC Golf *"			, "5a:golf-channel-live-stream"
  , "NFL Network *"			, "5a:nfl-network-live-stream"
  , "NHL Network *"			, "5a:nhl-network-live-stream"
  , "Olympic Channel *"			, "1x:olympic"
  , "Tennis Channel"			, "8:https://tennischannel-intl-samsung-uk.amagi.tv/playlist.m3u8"
];

var stack_7_5 = [""
  , "American Heroes *"			, "5a:american-heroes-channel-live-stream"
  , "American Kennel Club"		, "8:https://install.akctvcontrol.com/speed/broadcast/138/desktop-playlist.m3u8"
  , "Circle TV"				, "8:http://circle-xumo.amagi.tv/playlist.m3u8"
  , "Classic Arts Showcase"		, "8:https://classicarts.akamaized.net/hls/live/1024257/CAS/master.m3u8"
  , "Comedy Dynamics *"			, "9a:live/comedy-dynamics"
  , "Comet"				, "1e:3e45c6b5354a40f787e0b2aadb0f5d6a"
  , "Dark Matter TV *"			, "9a:live/dark-matter-tv"
  , "DocuBay"				, "8:https://stream.ads.ottera.tv/playlist.m3u8?network_id=3444"
  , "Dove Channel *"			, "9a:live/dove-channel"
  , "FTV Midnight Secrets"		, "8:https://fash1043.cloudycdn.services/slive/_definst_/ftv_midnite_secrets_adaptive.smil/playlist.m3u8"
  , "FX *"				, "5a:fx-live-stream"
  , "FX Movie *"			, "5a:fx-movie-live-stream"
  , "FXX *"				, "5a:fxx-live-stream"
  , "Galxy TV *^"			, "7a:channel/galxy-tv-2"
  , "HBO East*"				, "5a:hbo-east-live-stream"
  , "HBO Signature *"			, "5a:hbo-signature-live-stream"
  , "Horror Machine *"			, "9a:live/horror-machine"
  , "Law & Crime"			, "8:http://dai2.xumo.com/amagi_hls_data_xumo1234A-lawcrime/CDN/master.m3u8"
  , "Lone Star *"			, "9a:live/lone-star"
  , "Paramount Movie Channel **"	, "1p:5cb0cae7a461406ffe3f5213"
  , "Paramount Network **"		, "1p:5812bcc8237a6ff45d16c407"
  , "Scream Factory *^"			, "7a:channel/scream-factory-tv"
  , "The Archive"			, "8:https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=74"
  , "The Film Detective"		, "8:https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01201-cinedigmenterta-filmdetective-cineverse/playlist.m3u8"
  , "The Pet Collective *^"		, "7a:channel/the-pet-collective-2"
  , "Unexplained *^"			, "7a:channel/unexplained"
];

var stack_7_6 = [""
  , "BBC 1 **"				, "/0/0/1 8a:stream=bbc-london"
  , "BBC 2 **"				, "/396.1/0/0 8a:stream=bbc-two"
  , "BBC News *"			, "3a:bbcnews_live"
  , "CBBC **"				, "/396.1/0/0 8a:stream=cbbc"
  , "CBeebies **"			, "/396.1/0/0 8a:stream=cbeebies"
  , "Sky News Int'l **"			, "1p:55b285cd2665de274553d66f"
  , "Sky News Arabia"			, "8:^https://slh/moc.aibaraswenyks.maerts/sna.m3u8"
  , "France 24 - English (YT)"		, "0:Ap-UM1O9RBU"
  , "France 24 - French (YT)"		, "0:l8PMl7tUDIE"
  , "France 24 - Arabic (YT)"		, "0:VuYzy8IuT0Y"
  , "ABC News (Australia)"		, "8:https://abc-news-dmd-streams-1.akamaized.net/out/v1/701126012d044971b3fa89406a440133/index.m3u8"
  , "CBC News (Canada)"			, "8:https://apollo.production-public.tubi.io/live/ac-cbc2.m3u8"
  , "Global News"			, "8:^https://lmsi.evil/7f0d3f550165-66d8-f034-3201-f7e19a94/evil/dpuorg/moc.vedlatigidsuroc.evil/.m3u8"
  , "Newfoundland TV"			, "8:https://2-fss-1.streamhoster.com/pl_122/201748-1431018-1/playlist.m3u8"
  , "Knowledge Network (BC)"		, "8:https://d1wal6k3d7ssin.cloudfront.net/out/v1/ea91db0906c847a4931b46a9ec36e77b/index.m3u8"
  , "Ici RDI (CBC)"			, "8:https://rcavlive.akamaized.net/hls/live/704025/xcanrdi/master.m3u8"
  , "CPAC"				, "8:https://d7z3qjdsxbwoq.cloudfront.net/groupa/live/f9809cea-1e07-47cd-a94d-2ddd3e1351db/live.isml/.m3u8"
];

var stack_7_7 = [""
  , "AfricaNews (YT)"			, "0:NQjabLGdP5g"
  , "Al Jazeera"			, "8:https://live-hls-web-aje.getaj.net/AJE/index.m3u8"
  , "Arirang (South Korea)"		, "8:http://amdlive.ctnd.com.edgesuite.net/arirang_1ch/smil:arirang_1ch.smil/chunklist.m3u8"
  , "CGTN News"				, "/0/0/1 7:https://english-livetx.cgtn.com/hls/yypdyyctzb_hd.m3u8"
  , "Deutsche Welle"			, "8:https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8"
  , "EuroNews *"			, "9a:live/euronews"
  , "GB News (UK, YT)"			, "0:8WX6YL9JnLw"
  , "NHK World Japan"			, "8:http://nhkwlive-ojp.akamaized.net/hls/live/2003459/nhkwlive-ojp-en/index.m3u8"
  , "NTD (New Tang Dynasty)"		, "8:https://ntd02.akamaized.net/NTDA/index.m3u8"
  , "NDTV (India)"			, "8:https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/ndtv24x7master.m3u8"
  , "Press TV"				, "8:https://cdnlive.presstv.ir/cdnlive/smil:cdnlive.smil/playlist.m3u8"
  , "RT News"				, "8:https://rt-glb.rttv.com/live/rtnews/playlist.m3u8"
  , "RT Documentary"			, "8:https://rt-rtd.rttv.com/live/rtdoc/playlist.m3u8"
  , "TeleSUR"				, "8:https://cdnenmain.telesur.ultrabase.net/mblivev3/480p/playlist.m3u8"
  , "TRT World"				, "8:http://tv-trtworld.medya.trt.com.tr/master.m3u8"
  , "World Is One News (India) *"	, "9a:live/wion-world-is-one-news"
  , "Blaze TV **"			, "1p:5e46fba0c43b0d00096e5ac1"
  , "Cheddar News"			, "8:https://livestream.chdrstatic.com/b93e5b0d43ea306310a379971e384964acbe4990ce193c0bd50078275a9a657d/cheddar-42620/cheddarweblive/cheddar/index.m3u8"
  , "Free Speech TV"			, "8:https://edge.fstv-live-linear-channel.top.comcast.net/Content/HLS_HLSv3/Live/channel(b168a609-19c1-2203-ae1d-6b9726f05e67)/index.m3u8"
  , "NewsMax 2"				, "8:https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8"
  , "Real America's Voice"		, "8:https://dai.google.com/linear/hls/event/c-oMNcDLTeuszRKPugMj9Q/master.m3u8"
  , "Salem Network"			, "8:https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00732-salemmediagroup-snc-ono/playlist.m3u8"
  , "The First TV"			, "8:https://thefirst-oando.amagi.tv/hls/amagi_hls_data_thefirstd-thefirst-oando/CDN/playlist.m3u8"
  , "TYT - The Young Turks"		, "8:https://tyt-xumo-us.amagi.tv/hls/amagi_hls_data_tytnetwor-tyt-xumo/CDN/master.m3u8"
  , "InfoWars - Main Feed"		, "8:https://freespeech.akamaized.net/hls/live/2016712/live1/playlist.m3u8"
  , "InfoWars - Alex Jones"		, "8:https://freespeech.akamaized.net/hls/live/2024573/live2/playlist.m3u8"
  , "InfoWars - Harrison Smith"		, "8:https://freespeech.akamaized.net/hls/live/2016873/live3/playlist.m3u8"
  , "InfoWars - Owen Shroyer"		, "8:https://freespeech.akamaized.net/hls/live/2024574/live4/playlist.m3u8"
  , "FrankSpeech TV 1 *"		, "1f:tv1"
  , "FrankSpeech TV 2 *"		, "1f:tv2"
  , "FrankSpeech TV 3 *"		, "1f:tv3"
];

var stack_7_8 = [""
  , "EBS-1 (South Korea)"		, "8:http://ebsonair.ebs.co.kr/groundwavefamilypc/familypc1m/master.m3u8"
  , "EBS-2 (South Korea)"		, "8:http://ebsonair.ebs.co.kr/ebs2familypc/familypc1m/index.m3u8"
  , "EBS Kids (South Korea)"		, "8:https://ebsonair.ebs.co.kr/ebsufamilypc/familypc1m/playlist.m3u8"
  , "Thai PBS (Thailand) **^"		, "/0/1/1 8:**http://thaipbs-live.cdn.byteark.com/live/playlist.m3u8"
  , "Kompas TV (Indonesia, YT)"		, "0:DOOrIxw5xOw"
  , "CCTV-4 (China, YT)"		, "0:twhG7_jvA8g"
  , "Public TV Armenia"			, "8:https://amtvusdvr.tulix.tv/am2abr/index.m3u8"
  , "Kepez TV (Azerbaijan)"		, "/0/540.1/0 7:http://85.132.81.184:8080/arbkepez/live/index.m3u8"
  , "Turkmenistan TV *"			, "/406.1/0/0 7:**http://alpha.tv.online.tm/hls/ch007_720/index.m3u8"
  , "Zvezda TV (Russia)"		, "8:http://tvchannelstream1.tvzvezda.ru/cdn/tvzvezda/playlist.m3u8"
  , "TV Kujawy (Poland)"		, "/0/576.1/0 7:http://stream.tvkujawy.pl:8080/live/broadcast.m3u8"
  , "FS1 Salzburg (Austria)"		, "/0/0/1 7:http://stream.fs1.tv:8080/hls/webstream.m3u8"
  , "Radio Weser TV (Germany)"		, "8:https://h057.video-stream-hosting.de/radiowesertv-live/_definst_/mp4:livestreamTV/playlist.m3u8"
  , "TV Filopoli (Greece)"		, "8:http://live.streams.ovh:1935/tvfilopoli/tvfilopoli/playlist.m3u8"
  , "Super TV (Italy)"			, "8:http://wms.shared.streamshow.it:1935/supertv/supertv/live.m3u8"
  , "TV 2000 (Italy)"			, "8:https://hls-live-tv2000.akamaized.net/hls/live/2028510/tv2000/master.m3u8"
  , "TeleSUR (Venezuela)"		, "8:https://cdnesmain.telesur.ultrabase.net/mbliveMain/480p/playlist.m3u8"
  , "Antofagasta TV (Chile)"		, "8:http://unlimited1-us.dps.live/atv/atv.smil/playlist.m3u8"
  , "Wow! TV (El Salvador)"		, "8:http://cdn.elsalvadordigital.com:1935/wowtv/wowtv/playlist.m3u8"
  , "TV Lobo (Mexico)"			, "8:http://streamingcws20.com:1935/lobodurango/videolobodurango/playlist.m3u8"
];

var stack_7_9 = [""
];

/*
  
?9a:live/sonicentric
?7a:channel/midnight-pulp
?7a:channel/frightflix-2
?7a:channel/usa-today-news
?7a:channel/pickletv
?7a:channel/wildearth
?7a:channel/retrocrush
?7a:channel/asiancrush

  australia abc  https://abc-news-dmd-streams-1.akamaized.net/out/v1/abc83881886746b0802dc3e7ca2bc792/index.m3u8

  , "8:https://stream-us-east-1.getpublica.com/playlist.m3u8?&network_id=1879"		, "OAN Encore"
  , "8:https://snc-ono.amagi.tv/playlist.m3u8"						, "Salem Network"
  , "1:UCeY0bbntWzzVIaj2z3QigXg"							, "NBC News (YT)"
  , "/432.1/0/0 7:*https://usnewson.com*https://s0.usnlive.com/stream/foxnews.m3u8"	, "Fox News **"
  , "/0/540.1/0 7:*https://usnewson.com*https://s0.usnlive.com/stream/msnbc.m3u8"	, "MSNBC **"

*/

frame_7.req_tubitv = async (id, frame, fmt) =>
{
  var tag = "tubitv"; id = getid (frame, id, 9, -7);
  if (!id || is_busy (frame, tag + " (ID)", 0)) return;

  var n, s, t, u, url = "https://tubitv.com/oz/videos/" + id + "/content";

try
{ 
  response = await kitty (cors_bypass + url);
  jsonData = await response.json();
 
  if (!(url = jsonData.url))
  {
    url = "https://tubitv.com/movies/" + id;

    response = await kitty (cors_bypass + url);
    textData = await response.text();

    s = pullstring (textData, '"video_resources":', '}]'); if (!s) throw ("!!!");
    s = JSON.parse ('{"x":' + s + '}]}'); s = s.x;

    for (n = 0; n < s.length; n++) if (s [n].type.includes ("widevine"))
    {
      if (s [n].license_server.hdcp_version != "hdcp_disabled") continue;
      t = s [n].license_server.url; u = s [n].manifest.url; break;
    }
    if (!u) throw ("!!!"); url = u + (t ? "##" + t : "");
  }

  if (stream_all (frame, 1)) fmt = ""; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

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

frame_7.req_emovies = async (id, frame, fmt) =>
{
  var tag = "emovies"; id = getid (frame, id, -6);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var url = "https://emovies.si/ajax/v4_get_sources?s=oserver&id=" + id;

try
{
  response = await kitty (cors_kraker + url);
  jsonData = await response.json();

  if (!(url = jsonData.value)) throw ("!!!");

  response = await kitty (cors_kraker + "*https://emovies.si/*" + url);
  textData = await response.text();

  if (!(url = pullstring (textData, '"file":"', '"'))) throw ("!!!");
  url = url.replace (/\\/g, ""); url = cors_kraker + "~*/,,*" + url;

  if (stream_all (frame, 1)) fmt = ""; else
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

frame_7.req_goku = async (id, frame, fmt) =>
{
  var tag = "goku"; id = getid (frame, id, -7);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var m, n, s, src = cors_kraker + "https://goku.sx/ajax/movie/episode/";

try
{
  response = await kitty (src + "servers/" + id);
  textData = await response.text();

  s = textData.substr (textData.indexOf (">UpCloud<") - 100, 100);
  s = pullstring (s, 'data-id="', '"'); if (s.length < 7 || s.length > 9) throw ("!!!");

  response = await kitty (src + "server/sources/" + s);
  jsonData = await response.json();

  url = jsonData.data.link; if (!url) throw ("!!!");
  n = url.indexOf ("?"); if (n > 0) url = url.substr (0, n);
  url = url.replace (/\/\/[^/]+/, "//hanatyury.online");
  src = url.replace ("https:", "http:") + "?@000@~//.html";

  response = await kitty (cors_kraker + "**" + url);
  textData = await response.text();

  s = '<script>shit = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function(a,b)\n' +
      '{if (b.includes(".m3u8")) parent.postMessage("@" + b, "*"); else shit.apply(this,arguments);}';

  m = textData.indexOf ("<script"); n = textData.indexOf ("<\/script>") + 1;
  s = textData.substr (0, m) + s + textData.substr (textData.indexOf ("<\/script>", n));

  await kitty ("/~wanna_scratch=/.html", { method: 'POST', body: s });

  s = stream_player (frame); s.style.display = "none"; s.src = src;
  url = await getmessage (15); s.src = ""; await getmessage (1); s.style.display = "";

  if (!url) throw ("!!!"); else if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

  url = cors_kraker + "~*,,ts*" + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

frame_7.req_goojara = async (id, frame, fmt) =>
{
  var tag = "goojara"; id = getid (frame, id, 6);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var c, s, t, u, url = "https://ww1.goojara.to/" + id;

try
{
  response = await kitty (cors_kraker + url, allow_cookie ("", ""));
  textData = await response.text();

  url = pullstring (textData, 'Direct Links:', 'wootly');
  url = pullstring (url, 'href="', '"'); if (!url) throw ("!!!");

  s = pullstring (textData, "<script\>", "</script\>");
  s = pullstring (s, "('", "')").split ("','");

//  s = "var cookie='';" + s.replace (/document[^=^\)]*/g, "cookie") + "s=cookie";
//  eval (s);

  c = response.headers.get ("zz-set-cookie") || "";
  c = pullstring (c, "", ";") + ";" + s[0] + "=" + s[1];

  response = await kitty (cors_kraker + url, allow_cookie ("", c));
  textData = await response.text();

  url = response.headers.get ("zz-location");
  response = await kitty (cors_kraker + url, allow_cookie ("", ""));
  textData = await response.text();

  url = pullstring (textData, '<iframe src="', '"'); if (!url) throw ("!!!");
  c = response.headers.get ("zz-set-cookie") || ""; c = pullstring (c, "", ";");
  s = { 'content-type': 'application/x-www-form-urlencoded', accept: "**" + c };

  response = await kitty (cors_kraker + url, { method: 'POST', headers: s, body: 'qdf=1' });
  textData = await response.text();

  c = response.headers.get ("zz-set-cookie") || ""; c = pullstring (c, "", ";");
  t = pullstring (textData, 'tk="', '"'); u = pullstring (textData, 'vd="', '"');

  url = pullstring (url, "", "//") + "//" + pullstring (url, "//", "/");
  url += "/grabd?t=" + t + "&id=" + u; if (!t || !u) throw ("!!!");

  response = await kitty (cors_kraker + url, allow_cookie ("", c));
  textData = await response.text();

  url = textData; if (url.substr (0,4) != "http") throw ("!!!");

  response = await kitty (cors_kraker + url, { method: 'HEAD' });
  url = response.url.replace (/[^.]*.nebula.to\//, "https://orix.nebula.to/");

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_7.req_playtaku = async (id, frame, fmt) =>
{
  var tag = "playtaku"; id = getid (frame, id, -8, -6);
  if (!id || is_busy (frame, tag + " (ID)", 2)) return;

  var src = "https://playtaku.net", url = src + "/loadserver.php?id=" + id;
  var n, s, t, e, f = [0,0,0,0];

  //https://embtaku.pro/
  //https://playtaku.online/
  //https://goone.pro
  //https://anitaku.so/
  //https://anitaku.to/
  //https://gogoanimeapp.com/

try
{
  if (!got_crypto()) throw ("???");

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

  downloadc = "DoodStream download link: " + sub; sub = "";
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
 
    n = 3; url = pullstring (textData, '[{file:"', '"'); if (!url) throw ("!!!");

    /*
    s = "012345678901||" + s + "||987654321098||streamsb";
    url += "/375664356a494546326c4b797c7c6e756577776778623171737/";
    sub = "*,,*user-agent=|accept=|accept-language=|";

    for (n = 0; n < s.length; n++) url += parseInt (s.charCodeAt (n)).toString (16);

    response = await kitty (cors_kraker + sub + "watchsb=sbstream|*" + url);
    jsonData = await response.json();

    n = 3; if (!(url = jsonData.stream_data.file)) throw ("!!!");
    */
  }
  else
  {
    for (t = 0, n = 0; n < s.length; n++)
    {
      url = s [n].label; if (!url) continue;
      if (url == "360 P") f [0] = n + 1;
      if (url == "480 P") f [1] = n + 1;
      if (url == "720 P") f [2] = n + 1;
      if (url == "hls P" || url == "auto P") t = n + 1;
    }

    n = getformat (f, fmt); n = argformat (n);
    if (n >= 0) t = n; if (!t) throw ("!!!"); url = s [f [t] - 1].file;
  }

  if (n != 3)  // mp4 may not be available anymore
  {
    fixformat (f, frame); fmt = pixformat (n);
    url = cors_kraker + "~*" + src + "*" + url;
  }
  else if (stream_all (frame, 1)) fmt = 0; else
  {
    if (sub) url = cors_kraker + "~" + sub + "*" + url;
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
  if (id [0] != "*") id = "*" + id; id = getid (frame, id);

  var tag = "mixdrop", url = getid (frame, id, 5);
  if (!url || is_busy (frame, tag + " (ID)", 2)) return;

  url = "https://mixdrop.ag/e/" + id;

if (stream_all (frame, 0)) fmt = ""; else try
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

  var c, s, t, u, url = "https://www.wootly.ch/?v=" + id;

try
{
  response = await kitty (cors_kraker + url);
  textData = await response.text();

  url = pullstring (textData, '<iframe src="', '"'); if (!url) throw ("!!!");
  s = { 'content-type': 'application/x-www-form-urlencoded', accept: "**" };

  response = await kitty (cors_kraker + url, { method: 'POST', headers: s, body: 'qdf=1' });
  textData = await response.text();

  c = response.headers.get ("zz-set-cookie") || ""; c = pullstring (c, "", ";");
  t = pullstring (textData, 'tk="', '"'); u = pullstring (textData, 'vd="', '"');

  url = pullstring (url, "", "//") + "//" + pullstring (url, "//", "/");
  url += "/grabd?t=" + t + "&id=" + u; if (!t || !u) throw ("!!!");

  response = await kitty (cors_kraker + url, allow_cookie ("", c));
  textData = await response.text();

  url = textData; if (url.substr (0,4) != "http") throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame, id)) loadwindow (url, frame, tag, id);
}
////////////////////

frame_7.dig_tubitv = async (url, frame, fmt) =>
{
  var tag = "tubitv"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{
  var n = url.indexOf ("?"); if (n >= 0) url = url.substr (0, n);
  if (url.substr (-1) == "/") url = url.substr (0, url.length - 1);
  url = url.split ("/"); n = url.length - 1;

  var s = url [n].replace (/\d+/g, ""), t = url [n - 1].replace (/\d+/g, "");
  if (!s) url = url [n]; else if (!t) url = url [n - 1]; else throw ("");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_7.req_tubitv (url, frame, fmt);
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
  var s, tag = "plextv"; if (is_busy (frame, tag + " (DIG)", 0)) return;
  var src = "https://vod.provider.plex.tv/library/";

try
{ 
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  s = "y4HPwxZ_yvns7d1zysEK";
  url = pullstring (textData, '"provider:', '\\"'); if (!url) throw ("!!!");
  url = src + "metadata/" + url.substr (url.lastIndexOf ("/") + 1) + "?X-Plex-Token=" + s;

  response = await kitty (cors_bypass + url);
  textData = await response.text();

  url = pullstring (textData, 'streamingMediaId="', '"'); if (!url) throw ("!!!");
//  url = src + "parts/" + url + "-hls.m3u8?X-Plex-Token=" + s;
  url = src + "parts/" + url + "-dash.mpd?X-Plex-Token=" + s;
  stream_all (frame, 2);
/*
  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }
*/
} catch (err) { console.log (err); busy = 0; }

//  if (no_fail (frame)) loadwindow (url, frame, tag, "?", fmt);
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

frame_7.dig_emovies = async (url, frame, fmt) =>
{
  var tag = "emovies"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{
  var n, p, q = "/watching.html"; url = cors_bypass + url;

  if ((n = url.indexOf ("?episode_id=")) > 0) url = url.substr (n + 12); else
  {
    response = await kitty (url);
    textData = await response.text();

    if ((p = response.url) != url)
    {
      if (!p.includes (q)) if (p.includes (".html"))
        p = p.replace (".html", q); else p += q;

      response = await kitty (p);
      textData = await response.text();
    }

    url = pullstring (textData, "episode_id: ", ",");
  }

  if (!url) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_7.req_emovies (url, frame, fmt);
}
////////////////////

frame_7.dig_goku = async (url, frame, fmt) =>
{
  var s, tag = "goku"; if (is_busy (frame, tag + " (DIG)", 2)) return;

try
{
  url = url.replace ("/movie/", "/watch-movie/").replace ("/series/", "/watch-series/");

  if ((s = url.split ("/")).length == 6) url = s [5]; else
  {
    response = await kitty (cors_kraker + url);
    textData = await response.text();

    s = response.url.substr (cors_kraker.length).split ("/");
    url = s.length == 6 ? s [5] : "";
  }

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_7.req_goku (url, frame, fmt);
}
////////////////////

frame_7.dig_noxx = async (url, frame, fmt) =>
{
  var tag = "noxx"; if (is_busy (frame, tag + " (DIG)", 2)) return;

try
{
  response = await kitty (cors_kraker + url, allow_cookie (tag, ""));
  textData = await response.text();

  if (response.status == 403)
  {
    url = pullstring (response.url.substr (cors_kraker.length), "//", "/");
    cookiecutter (url + "=" + tag); busy = 0; no_fail (frame); return;
  }

  url = pullstring (textData, '<button value="', '"'); if (!url) throw ("!!!");

  response = await kitty (cors_kraker + "!mock:1A|*" + url);
  textData = await response.text();

  var s = pullstring (textData, "/pass_md5/", "'"); if (!s) throw ("!!!");
  url = "https://" + pullstring (url, "//", "/") + "/pass_md5/" + s;

  response = await kitty (cors_kraker + "**!mock:1A|*" + url);
  textData = await response.text();

  url = url.substr (url.lastIndexOf ("/") + 1);
  if (textData.substr (0, 4) != "http") throw ("!!!");
  url = cors_kraker + "~**" + textData + "?token=" + url

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?");
}
////////////////////

frame_7.dig_pressplay = async (url, frame, fmt) =>
{
  var tag = "pressplay"; if (is_busy (frame, tag + " (DIG)", 2)) return;

  var m = "", n = url.indexOf ("?"), u = "*!,,*user-agent=|*";
  if (n > 0) { m = "-" + url.substr (n + 1); url = url.substr (0, n); }
  if (url.substr (-1) != "/") url += "/";

try
{
  var p, q, src = "https://moviesapi.club"; if (!got_crypto()) throw ("???");

  response = await kitty (cors_kraker + url);
  textData = await response.text();

  url = pullstring (textData, 'data-cinemaplayer-query-api-tmdb_id="', '"');
  if (!url) url = pullstring (textData, 'data-load-embed="', '"');
  if (!url) url = pullstring (textData, '"id":"', '"');

  if (!url) throw ("!!!"); url = src + (m ? "/tv/" : "/movie/") + url + m;

  response = await kitty (cors_kraker + "**" + url);
  textData = await response.text();

  url = pullstring (textData, '"vidframe" src="', '"'); if (!url) throw ("!!!");

  response = await kitty (cors_kraker + u + url);
  textData = await response.text();

//  url = pullstring (textData, "MasterJS = '", "'"); if (!url) throw ("!!!");
  url = pullstring (textData, "JScripts = '", "'"); if (!url) throw ("!!!");

  p = 'm4H6D9%0$N&F6rQ&'; m = JSON.parse (url); p = 'a7igbpIApajDyNe';
  q = CryptoJS.lib.CipherParams.create ({ ciphertext: CryptoJS.enc.Base64.parse (m.ct) });
  q.salt = CryptoJS.enc.Hex.parse (m.s); q.iv = CryptoJS.enc.Hex.parse (m.iv);

  m = CryptoJS.AES.decrypt (q, p).toString (CryptoJS.enc.Utf8);
  url = pullstring (m.replace (/\\/g, ""), '"file":"', '"'); if (!url) throw ("!!!");

  if (stream_all (frame, 1)) fmt = 0; else
  {
    response = await kitty (cors_kraker + "~" + u + url); textData = await response.text();
    [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
  }

  url = cors_kraker + "~" + u + url;

} catch (err) { console.log (err); busy = 0; }

  if (no_fail (frame)) loadwindow (url, frame, tag, "?", fmt);
}
////////////////////

frame_7.dig_vidcloud = async (url, frame, fmt) =>
{
  var tag = "vidcloud"; if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  if (!(url = pullstring (textData, "torrents.php?search=", "#"))) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) frame_7.req_vidcloud (url, frame, fmt);
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

