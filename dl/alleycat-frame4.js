// Notes and links

document.getElementById ("blob").innerHTML = `

<p><hr><p>
<b><b_>Release notes for v5x (unofficial release)</b_></b>
<p>
<ul><li>
Added: Gotaku, EMovies, Goojara, Noxx, PressPlay, Vidcloud, DoodStream, EplayVid, PkSpeed, Wootly
</li><li>
Removed: BrandNewTube, KeyMovies, UniqueStream, CloudVideo, Streamzz, UserLoad, VideoBin, VidNode
</li><li>
Updated: YouTube, Odysee, Twitter, Facebook, TikTok, TEDTalks, NatFilmBrd,
  Fox, ABC, CNBC, MS/NBC, PBS, CBC, CTV, BBC, Epoch Times, TubiTV, XHamster
</li><li>
Widevine DRM is now supported for CTV (DASH/mpd) and TubiTV (HLS/m3u8).
</li><li>
Updated Rumble to allow page ID to work as embed ID. Example: <g_>https://rumble.com/v13wepf-2000-mules.html</g_>
will work with the "Play ID" option if the string is cut before the hypen. Note that it can sometimes happen that
the wrong video will come up.
</li></ul>

<p><hr><p>
<b>Release notes for v5c (August 7, 2022)</b>
<p>
<b>Update:</b> This version was revised on October 5 due to an error with the HLS/m3u8 (not working). It was trying
to load a file which doesn't exist though it does exist on my system. Sorry about that but nobody complained (as usual).
<ul><li>
Removed: DarkMatter (geo US), LookMovie, HighStream and WolfStream (both broken for a long time)
</li><li>
Updated: Rumble, Odysee, Twitch TV, BBC, BrightCove, VidNode, KeyMovies, XHamster, Streamzz, UserLoad
</li><li>
Updated Youtube to fix some age-gated videos and to bypass the rate limiting which restricts download speed
to about 45K bytes per second. The DASH formats still appear to have some rate limiting in place compared to the normal
formats (110K versus 600K on my DSL connection).
</li><li>
A new site called Gogo-play (<g_>https://gogoplay1.com</g_>) has been added to the Movies Sites list in the
VidNode category. This site is dedicated to anime and most of the content is not reachable from the VidNode site
itself but can be retrieved from there. That is, select "VidNode" in the dropdown list to play a video from Gogo-play.
</li></ul>

<p><hr><p>
<b>Release notes for v5b (March 25, 2022)</b>
<p>
<ul><li>
Updated: TikTok, TEDTalks, Bloomberg, Epoch Times, VidNode, StreamTape
</li><li>
Added: DarkMatter, KeyMovies, LookMovie, Streamzz, UserLoad, VOE
</li><li>
Removed: ItemFix, Minds, Ask4Movie, OpenLoadMovies, WatchCartoons
</li><li>
Moved Brightcove to the News section because the sites covered are news sites.
</li></ul><p>
VidNode has changed its domain again (it is now <g_>vidembed.io</g_>), although <g_>vidnode.net</g_> will redirect to it.
I read on TorrentFreak (<g_>https://torrentfreak.com</g_>) that the domain <g_>vidcloud9.com</g_> was being targeted by
the usual "copyright" defenders so I guess VidNode is playing hard to catch (kek). Also, an encryption algo was added to
the process of extracting the video link. Stuff like this has yet to defeat me though I admit that it can be tiresome to
deal with. In the case of VidNode, it is worth the effort. Hopefully, I won't need to update again anytime soon.
<p>
There was a small change to the way the video link is handled with the US Internet TV trio (<g_>ustv247.tv, ustvgo.tv,
watchnewslive.tv</g_>). There is an interesting story behind this and <g_>123live.tv</g_> which is now
<g_>live94today.com</g_>, redirecting from the previous domain <g_>123tv.live</g_>. Yeah, it can be tricky to keep up
with these domain changes but that's the game that has to be played. I still don't get how the TV trio seems like a
protected group though. Anyway, some months ago the TV trio changed their sites to use encryption for the video link,
presumably to guard against the Kodi addons that were stealing from <g_>ustvgo.tv</g_>. I cracked the encryption but it
looks like the Kodi addons got stopped dead. I'm only guessing, of course. The encryption stayed in place for
several months and then it got dropped (shortly before the last Alleycat update). The video link is now in the clear
with no protection. Why? Also, the TV trio has been vacillating about forcing VPN access to some of the channels. For a
while, the sites were unusable and I had to grab TV links from other sites. Now, it's just a handful of channels other
than the sports channels that are VPN-restricted. The encryption on <g_>123tv.live</g_> has been in place for over a year
and hasn't changed at all. However, for a period of two or three months, they added the Google Invisible Captcha to the
encryption process and I couldn't crack it for a few reasons which have nothing to do with the encryption itself. Why
was it dropped? Google stopped it or maybe they couldn't justify paying Google for the captcha account. Anyway, things
appear to be pretty stable right now. I managed to restore the sports channels (<g_>ustream.to </g_> died) by going
through <g_>tv247.us</g_> which doesn't use any method to protect the video links. It's been that way for several months
so I guess it'll be staying that way (knock on wood).

<p><hr><p>
<b>Release notes for v5a (November 17, 2021)</b>
<p>
<ul><li>
Added: Odysee
</li><li>
Removed: Periscope, SoundCloud, DoodStream
</li><li>
Updated: Vimeo, InfoWars, Gab TV, Facebook, PragerU, BBC, Al Jazeera, VidNode, StreamTape, UpStream
</li><li>
HighStream and WolfStream are apparently down right now.
</li><li>
Some channels are down because the feeds from <g_>ustream.to</g_> are not working. Some secondary channels and most of
the sports channels are affected.
</li><li>
Some videos on TubiTV use Widevine DRM. These videos are inaccessible with Alleycat Player.
</li><li>
Replaced default audio player interface in the Internet Radio with custom version.
</li><li>
Adjusted the CSS for the video viewers to fix some issues with Pale Moon. The brightness controls are
still not right but much better than before. Pale Moon adds extra padding to the buttons but no other browser
does that. Browser consistency has improved a lot over the past several years but it is still not perfect.
</li><li>
Created custom border colours for all buttons due to the inconsistency between browsers as to the brightness
of the borders. Some browsers (specifically Waterfox) apply far too much contrast.
</li><li>
Modified the image container for audio-only media in order to fit any size of image ("poster.jpg").
</li></ul>

<p><hr><p>
<a href="https://8chananon.github.io/Alleycat-Player/archive/player/notes-v1a-v2f.htm"
  target=_blank>Release notes for versions 1a to 2f</a><br>
<a href="https://8chananon.github.io/Alleycat-Player/archive/player/notes-v3a-v3e.htm"
  target=_blank>Release notes for versions 3a to 3e</a><br>
<a href="https://8chananon.github.io/Alleycat-Player/archive/player/notes-v4a-v4h.htm"
  target=_blank>Release notes for versions 4a to 4h</a>

<p><hr><p>
<h3 id="notes">Special Notes</h3>
<ul><li>
Vimeo live streaming (m3u8) is supported. Requires Kraker or a CORS unblocker.
</li><li>
Odysee live streaming is supported. Requires Kraker.
</li><li>
InfoWars and Twitter videos play as m3u8 but the mp4 version is available via the DLoad button.
</li><li>
Twitter Spaces and Broadcasts are supported (example ID: 1OwxWwDyXnQxQ).
</li><li>
For Twitter short links (like "https://t.co/..."), use DIG to get the tweet ID.
</li><li>
Only podcasts are supported on iHeartRadio.
</li><li>
A Rumble page link (example: "https://rumble.com/v1wac7i-world-premier-died-suddenly.html") will work as an
embed ID if you remove the hyphenated part. However, using the page link in this manner can sometimes
retrieve the wrong video.
</li></ul><p>

Sites accessible with a Podcasts DIG:<br>
&nbsp;- https://podcasts.apple.com<br>
&nbsp;- https://itunes.apple.com<br>
&nbsp;- https://www.stitcher.com<br>
&nbsp;- https://radiopublic.com<br>
&nbsp;- https://overcast.fm<br>
&nbsp;- https://www.podbean.com<br>
&nbsp;- https://www.spreaker.com
<p>
Sites accessible with a Brightcove DIG:<br>
&nbsp;- https://www.stuff.co.nz<br>
&nbsp;- https://www.nzherald.co.nz<br>
&nbsp;- https://www.thesun.co.uk<br>
&nbsp;- https://www.the-sun.com<br>
&nbsp;- https://www.channel4.com/news<br>
&nbsp;- https://www.express.co.uk<br>
&nbsp;- https://www.miamiherald.com<br>
&nbsp;- https://time.com<br>
&nbsp;- http://webtv.un.org<br>
&nbsp;- https://www.military.com<br>
&nbsp;- https://peopletv.com<br>
&nbsp;- https://www.skynews.com.au<br>
&nbsp;- https://www.news.com.au<br>
&nbsp;- https://nypost.com

<p><hr><p>
<h3 id="sites" class="skinny"><r_>Sites List</r_>
  <small> -- Go to <a href="#info">Info viewer</a> or <a href="#news">News viewer</a>
    or <a href="#free">Movie viewer</a></small></h3>

<table class="list" style="padding:2px 0">

<tr><td>YouTube		</td><td>mp4/webm	</td><td>&nbsp;#</td><td>CORS</td><td>$</td>
<td><a target=_blank href="https://www.youtube.com">www.youtube.com</a></td></tr>

<tr><td>BitChute	</td><td>mp4		</td><td>&nbsp;#</td><td>Proxy</td><td>$</td>
<td><a target=_blank href="https://www.bitchute.com">www.bitchute.com</a></td></tr>

<tr><td>Rumble		</td><td>mp4		</td><td>&nbsp;+</td><td>Proxy (DIG)</td><td></td>
<td><a target=_blank href="https://rumble.com">rumble.com</a></td></tr>

<tr><td>Vimeo		</td><td>mp4/m3u8	</td><td>&nbsp;#</td><td>KRKR</td><td>$</td>
<td><a target=_blank href="https://vimeo.com">vimeo.com</a></td></tr>

<tr><td>InfoWars	</td><td>m3u8/mp4	</td><td>&nbsp;+</td><td>No Proxy</td><td></td>
<td><a target=_blank href="https://www.infowars.com">www.infowars.com</a></td>
<td><a target=_blank href="https://banned.video">banned.video</a></td></tr>

<tr><td>Brighteon	</td><td>m3u8		</td><td>&nbsp;+</td><td>CORS</td><td>$</td>
<td><a target=_blank href="https://www.brighteon.com">www.brighteon.com</a></td>
<td><a target=_blank href="https://www.naturalnews.com">www.naturalnews.com</a></td></tr>

<tr><td>DailyMotion	</td><td>m3u8		</td><td>&nbsp;#</td><td>KRAK</td><td>$</td>
<td><a target=_blank href="https://www.dailymotion.com">www.dailymotion.com</a></td></tr>

<tr><td>153News		</td><td>mp4		</td><td>&nbsp;#</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://153news.net">153news.net</a></td></tr>

<tr><td>Odysee		</td><td>mp4/m3u8	</td><td>&nbsp;?</td><td>KRKR</td><td></td>
<td><a target=_blank href="https://odysee.com">odysee.com</a></td></tr>

<tr><td>Twitter		</td><td>m3u8/mp4	</td><td>&nbsp;+</td><td>KRKR</td><td></td>
<td><a target=_blank href="https://twitter.com">twitter.com</a></td>
<td><a target=_blank href="https://threadreaderapp.com">threadreaderapp.com</a></td></tr>

<tr><td>Facebook	</td><td>mp4		</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.facebook.com">www.facebook.com</a></td>
<td><a target=_blank href="https://www.instagram.com">www.instagram.com</a> (CORS)</td></tr>

<tr><td>Telegram	</td><td>mp4		</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://t.me">t.me</a></td></tr>

<tr><td>TikTok		</td><td>mp4		</td><td>&nbsp;?</td><td>KRAK</td><td></td>
<td><a target=_blank href="https://www.tiktok.com">www.tiktok.com</a></td></tr>

<tr><td>Twitch TV	</td><td>m3u8		</td><td>&nbsp;#</td><td>CORS</td><td></td>
<td><a target=_blank href="https://www.twitch.tv">www.twitch.tv</a></td></tr>

<tr><td>PragerU		</td><td>m3u8		</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.prageru.com">www.prageru.com</a></td></tr>

<tr><td>TEDTalks	</td><td>m3u8		</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.ted.com">www.ted.com</a></td></tr>

<tr><td>Nat. Film Board	</td><td>m3u8		</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.nfb.ca">www.nfb.ca</a></td></tr>

<tr><td>iHeartRadio	</td><td>mp3		</td><td>&nbsp;#</td><td>No Proxy</td><td>$</td>
<td><a target=_blank href="https://www.iheart.com/podcast/">www.iheart.com/podcast</a></td>
<td><a target=_blank href="https://www.iheart.com/live/">www.iheart.com/live</a> (radio)</td></tr>

<tr><td colspan="7"><hr class="skinny"></td></tr>

<tr><td>Fox		</td><td>m3u8/mp4	</td><td>&nbsp;+</td><td>No Proxy</td><td></td>
<td><a target=_blank href="https://www.foxnews.com">www.foxnews.com</a></td>
<td><a target=_blank href="https://www.foxbusiness.com">www.foxbusiness.com</a></td></tr>

<tr><td>ABC		</td><td>mp4		</td><td>&nbsp;+</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://abcnews.go.com">abcnews.go.com</a></td></tr>

<tr><td>CBS		</td><td>m3u8		</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.cbsnews.com">www.cbsnews.com</a></td></tr>

<tr><td>CNBC		</td><td>m3u8		</td><td>&nbsp;+</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.cnbc.com">www.cnbc.com</a></td></tr>

<tr><td>C-SPAN		</td><td>m3u8		</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.c-span.org">www.c-span.org</a></td></tr>

<tr><td>MS/NBC		</td><td>m3u8		</td><td>&nbsp;+</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.msnbc.com">www.msnbc.com</a></td>
<td><a target=_blank href="https://www.nbcnews.com">www.nbcnews.com</a></td></tr>

<tr><td>PBS		</td><td>m3u8		</td><td>&nbsp;+</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.pbs.org">www.pbs.org</a></td></tr>

<tr><td>CBC		</td><td>m3u8		</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.cbc.ca">www.cbc.ca</a></td></tr>

<tr><td>CPAC		</td><td>m3u8		</td><td>&nbsp;#</td><td>No Proxy</td><td></td>
<td><a target=_blank href="https://www.cpac.ca">www.cpac.ca</a></td></tr>

<tr><td>CTV		</td><td>DASH		</td><td>&nbsp;+</td><td>Proxy (DIG)</td><td></td>
<td><a target=_blank href="https://www.ctvnews.ca">www.ctvnews.ca</a></td>
<td><a target=_blank href="https://www.ctv.ca">www.ctv.ca</a></td></tr>

<tr><td>Global		</td><td>mp4		</td><td>&nbsp;+</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://globalnews.ca">globalnews.ca</a></td></tr>

<tr><td>TVO		</td><td>mp4		</td><td>&nbsp;+</td><td>Proxy (DIG)</td><td></td>
<td><a target=_blank href="https://www.tvo.org">www.tvo.org</a></td></tr>

<tr><td>BBC		</td><td>m3u8		</td><td>&nbsp;+</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.bbc.com">www.bbc.com</a></td>
<td><a target=_blank href="https://www.bbc.co.uk/sounds">www.bbc.co.uk/sounds</a></td></tr>

<tr><td>Press TV	</td><td>m3u8		</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.presstv.ir">www.presstv.ir</a></td></tr>

<tr><td>Al Jazeera	</td><td>mp4		</td><td>&nbsp;+</td><td>Proxy (DIG)</td><td></td>
<td><a target=_blank href="https://www.aljazeera.com">www.aljazeera.com</a></td></tr>

<tr><td>Bloomberg	</td><td>m3u8		</td><td>&nbsp;+</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.bloomberg.com">www.bloomberg.com</a></td></tr>

<tr><td>Deutsche Welle	</td><td>mp4		</td><td>&nbsp;#</td><td>No Proxy</td><td></td>
<td><a target=_blank href="https://www.dw.com">www.dw.com</a></td></tr>

<tr><td>Epoch Times	</td><td>m3u8		</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.theepochtimes.com">www.theepochtimes.com</a></td>
<td><a target=_blank href="http://www.ntd.com">www.ntd.com</a></td></tr>

</table><p>

? = works with DIG only<br>
# = works with Play ID only<br>
+ = works with both DIG and Play ID<br>
$ = use the Sandbox option to embed the original video
<p></p>
KRAK = only accessible with the Kraker Local Proxy Server<br>
CORS = only accessible with a CORS unblocker (or Kraker Local)<br>
KRKR = accessible with the Kraker Remote Proxy (may have limitations)

<p><hr><p>
<h3 id="movies" class="skinny"><r_>Movie Sites</r_>
  <small> -- Go to <a href="#info">Info viewer</a> or <a href="#news">News viewer</a>
    or <a href="#free">Movie viewer</a></small></h3>

<table class="list" style="padding:2px 0">

<tr><td>Tubi		</td><td>m3u8		</td><td>&nbsp;+</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://tubitv.com">tubitv.com</a></td></tr>

<tr><td>The Archive	</td><td>m3u8		</td><td>&nbsp;+</td><td>No Proxy</td><td></td>
<td><a target=_blank href="https://www.thearchive.tv">www.thearchive.tv</a></td></tr>

<tr><td>Dark Matter	</td><td>m3u8		</td><td>&nbsp;?</td><td>KRKR</td><td></td>
<td><a target=_blank href="https://www.darkmattertv.com">www.darkmattertv.com</a></td></tr>

<tr><td>PlayTaku	</td><td>m3u8/mp4	</td><td>&nbsp;+</td><td>KRAK</td><td></td>
<td><a target=_blank href="https://playtaku.net">playtaku.net</a> !</td><tr>

<tr><td>EMovies		</td><td>m3u8		</td><td>&nbsp;+</td><td>KRAK</td><td></td>
<td><a target=_blank href="https://emovies.si">emovies.si</a> !</td><tr>

<tr><td>GOKU		</td><td>m3u8		</td><td>&nbsp;+</td><td>KRAK</td><td></td>
<td><a target=_blank href="http://goku.sx">goku.sx !</a></td><tr>

<tr><td>Goojara		</td><td>mp4		</td><td>&nbsp;#</td><td>KRAK</td><td></td>
<td><a target=_blank href="https://www.goojara.to">www.goojara.to</a></td><tr>

<tr><td>Noxx		</td><td>mp4		</td><td>&nbsp;?</td><td>KRAK</td><td></td>
<td><a target=_blank href="https://noxx.to">noxx.to</a> !</td><tr>

<tr><td>PressPlay	</td><td>m3u8		</td><td>&nbsp;?</td><td>KRAK</td><td></td>
<td><a target=_blank href="https://pressplay.top">pressplay.top</a> !</td><tr>

<tr><td>XHamster	</td><td>mp4		</td><td>&nbsp;#</td><td>KRAK</td><td>$</td>
<td><a target=_blank href="https://xhamster.com">xhamster.com</a></td></tr>

<tr><td>XVideos		</td><td>m3u8/mp4	</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.xvideos.com">www.xvideos.com</a></td></tr>

<tr><td colspan="8"><hr class="skinny"></td></tr>

<tr><td>DoodStream	</td><td>mp4		</td><td>&nbsp;#</td><td>KRAK</td><td></td>
<td><a target=_blank href="https://doodstream.com">doodstream.com</a></td></tr>

<tr><td>DropLoad	</td><td>m3u8		</td><td>&nbsp;#</td><td>KRAK</td><td></td>
<td><a target=_blank href="https://dropload.io">dropload.io</a></td></tr>

<tr><td>EplayVid	</td><td>mp4		</td><td>&nbsp;#</td><td>KRAK</td><td>$</td>
<td>no site link</td></tr>

<tr><td>MixDrop		</td><td>mp4		</td><td>&nbsp;#</td><td>KRAK</td><td>$</td>
<td><a target=_blank href="https://mixdrop.ag">mixdrop.ag</a></td><tr>

<tr><td>PkSpeed		</td><td>mp4		</td><td>&nbsp;#</td><td>KRAK</td><td>$</td>
<td><a target=_blank href="https://pkspeed.net">pkspeed.net</a></td><tr>

<tr><td>StreamTape	</td><td>mp4		</td><td>&nbsp;#</td><td>KRAK</td><td></td>
<td><a target=_blank href="https://streamtape.com">streamtape.com</a></td><tr>

<tr><td>UpStream	</td><td>m3u8/mp4	</td><td>&nbsp;#</td><td>KRAK</td><td>$</td>
<td><a target=_blank href="https://upstream.to">upstream.to</a></td><tr>

<tr><td>VTube		</td><td>m3u		</td><td>&nbsp;#</td><td>Proxy</td><td>$</td>
<td><a target=_blank href="https://vtube.network">vtube.network</a></td></tr>

<tr><td>Wootly		</td><td>mp4		</td><td>&nbsp;#</td><td>KRAK</td><td></td>
<td>no site link</td></tr>

<tr><td>InternetRadio	</td><td>mp3		</td><td>&nbsp;?</td><td>Proxy</td><td></td>
<td><a target=_blank href="https://www.internet-radio.com">www.internet-radio.com</a></td></tr>

</table>
<p>
! on a site url = use caution on the site due to popup ads<br>
<p><hr><p>
Some search sites to get video links from:
<p>
<a target=_blank href="https://www.downloads-anymovies.com">www.downloads-anymovies.com</a><br>
<a target=_blank href="https://flicktv.net">flicktv.net</a> &nbsp;
<a target=_blank href="https://tubemotion.net">tubemotion.net</a><br>
<a target=_blank href="https://www.levidia.ch">www.levidia.ch</a><br>
<a target=_blank href="https://www.primewire.tf">www.primewire.tf</a><br>

<p><hr><p>
<h3 id="livestream"><r_>Internet TV</r_></h3>

Go to the <a href="#free">Movie viewer</a>, select a TV stack and press the button for the desired channel.
That's it. All channels are m3u8 live streams and most are not region locked. Some channels require an initial
lookup (thus requiring a CORS proxy or unblocker) to find the direct stream URL. Such URLs are temporary and will
time out (anywhere from a few hours to two days). Alleycat Player will refresh the link after two hours.
<p>
Some channels have two stream sources. This is indicated with a plus sign (+) after the channel name. A double-plus
indicates that the streams are from different local stations. Select "webm" in the format panel to access the
secondary channel.

<h3><r_>Internet Radio</r_></h3>

Simply go to the bottom of the page and press a radio button to play the Internet Radio. That's it.
For your convenience, the radio will pause when you play a video. Press the Clear button to unpause.
You can also open a radio station in a popup window.
<p>
You can input your own URL for either an mp4 or an mp3 or whatever your
browser supports. To play a YouTube video in audio-only mode, just enter the 11-character video id.
<p>
To find some radio station URLs, you can use the AudioRealm DIG tool supplied with the <a href="#free">Movie viewer</a>.
Also supplied is a stack with links to iHeartRadio and Virtual DJ. These will pop up a window with an embedded web site.
</p>
`;

var getid = function (frame, url)
{
  var m, n, u, len, arg;

  u = url.substr (-5); n = u.search ("[/.]");
  if (n >= 0) url = url.substr (0, url.length + n - 5);
  if ((n = url.indexOf ("*")) >= 0) return (url.substr (n + 1));

  for (arg = 2; arg < arguments.length; arg++)
  {
    if (!(len = arguments [arg])) return (url);
    m = len < 0 ? -len : len; u = url.substr (-m); n = u.length;

    if (n == m || (len < 0 && n > m - 3))
    {
      if ((n = u.search ("[/=]")) < 0 && len < 0) n = u.indexOf ("-");
      if (n >= 0) u = u.substr (n + 1); if (u) return (u);
    }
  }

  if (!busy && frame) no_fail (frame, "", "Invalid ID: " + url); return ("");
}
////////////////////

var crack_source = function (data, frame, fmt)
{
  var sub, str, url, i, j, f = [0,0,0,0], r = [0,0,0,0];

  sub = data.split ("<source src="); if (sub.length < 2) return "";

  for (i = 1; i < sub.length; i++)
  {
    str = sub [i]; j = str.indexOf ('label='); str = str.substr (j + 6);
    j = str.indexOf (str[0], 1) - 1; str = str.substr (1, j); j = str.length - 1;
    if (str[j] == "p") str = str.substr (0, j); if (str == "original") str = "720";
    if ((j = chkformat (str)) >= 0) if (r[j] < str) { f[j] = i; r[j] = str; }
  }

  fmt = getformat (f, fmt); fixformat (f, frame);
  if ((j = argformat (fmt)) < 0) return "";

  str = sub [f[j]]; fmt = r[j]; j = str.indexOf (str[0], 1) - 1;
  url = str.substr (1, j); if (url == "") return "";

  return (url + "<>" + fmt);
}
////////////////////

var crack_smil = function (data, frame, fmt)
{
  var sub, url, i, j, k, w, h, b, m3u = "", levels = [];

  if (s = pullstring (data, '<audio src="', '"')) return (s + "<>");

  sub = data.split ('<video src="'); if (sub.length < 2) return "";

  for (i = 1; i < sub.length; i++) if (url = sub [i])
  {
    if (!(k = pullstring (url, '', '"'))) continue;
    if (k.includes (".m3u8")) { m3u = i; continue; }
    w = pullstring (url, 'width="', '"');
    h = pullstring (url, 'height="', '"');
    b = pullstring (url, 'bitrate="');
    levels.push ({ width: w, height: h, bitrate: b, url: k });
  }

  k = formats_m3u8 (levels); fmt = getformat (k, fmt); url = m3u;
  if (j >= 0) { url = levels [j].url; fixformat (k, frame); }
  return (url + "<>" + fmt);
}
////////////////////

var find_brightcove = async (url, xtag, frame, fmt) =>
{
  var tag = xtag, pub, id; if (!tag) tag = "brightcove";
  if (is_busy (frame, tag + " (DIG)", 0)) return;

try
{
  response = await kitty (cors_bypass + url);
  textData = await response.text();

  if (url = pullstring (textData, 'vms-embedcode="', '"'))  // for www.news.com.au
  {
    pub = pullstring (url, "", "-"); id = pullstring (url, "-", "");
    if (!pub || !id) pub = id = "";
  }

  if (!pub) pub = pullstring (textData, 'data-account="', '"');
  if (!pub) pub = pullstring (textData, 'accountId":"', '"');  // for www.skynews.com.au
  if (!pub) pub = pullstring (textData, 'data-deferred-account="', '"');  // for nypost.com
  if (!pub) throw ("!!!");

  if (!id) id = pullstring (textData, 'data-video-id="', '"');
  if (!id) id = pullstring (textData, 'data-video-id-pending="', '"');
  if (!id) id = pullstring (textData, 'data-brightcove-video-id="', '"');
  if (!id) id = pullstring (textData, 'assetId":"', '"');  // for www.skynews.com.au
  if (!id) id = pullstring (textData, 'data-deferred-video-id="', '"');  // for nypost.com
  if (!id) throw ("!!!");

} catch (err) { console.log (err); busy = 0; }

  busy = -busy; if (no_fail (frame)) load_brightcove (pub, id, xtag, frame, fmt);
}
////////////////////

var load_brightcove = async (pub, id, xtag, frame, xfmt) =>
{
  var i, j, k, fmt, tag, krak = "", key = "", f = [0,0,0,0], r = [0,0,0,0];
  if ((fmt = xfmt) < 0) fmt = -fmt; if (!(tag = xtag)) tag = "brightcove";
  if (is_busy (frame, tag + " (ID)", 0)) return;

  if ((i = id.indexOf ("?")) >= 0)
  {
    key = id.substr (i); id = id.substr (0, i);
  }

  if ((i = id.indexOf ("~")) >= 0)
  {
    krak = id.substr (i); id = id.substr (0, i);
  }

  if (pub == "")
  {
    i = id.indexOf ("-"); pub = id.substr (0, i); id = id.substr (i + 1);
  }
  
try
{
  var url = "https://players.brightcove.net/" + pub + "/default_default/index.min.js";
  if (pub.length < 9 || pub.length > 13 || id.length < 10 || id.length > 13) throw ("!!!");

  response = await kitty (cors_bypass + url);
  textData = await response.text();

  var s = 'accountId:"' + pub + '",policyKey:"';
  var n = textData.indexOf (s); if (n < 0) throw ("!!!");

  var pk = textData.substr (n + s.length, 200);
  pk = pk.substr (0, pk.indexOf ('"'));

  url = "https://edge.api.brightcove.com/playback/v1/accounts/" + pub + "/videos/" + id;

  response = await kitty (cors_bypass + url, { headers: { accept: 'application/json;pk=' + pk }, });
  textData = await response.json();

  var url_m3u8 = ""; var dat = textData.sources; if (dat == undefined) throw ("!!!");

  for (i = 0; i < dat.length; i++)
  {
    url = dat [i].src; if (url == undefined) continue;
    if (url.indexOf ("m3u8") > 0) { url_m3u8 = url; continue; }
    k = dat [i].height; if (k == undefined) continue;

    if ((j = chkformat (k)) >= 0) if (r[j] < k) { f[j] = i + 1; r[j] = k; }
  }

  if ((k = getformat (f, fmt)))
  {
    if ((k = argformat (k)) < 0 || (k = f[k] - 1) < 0) throw ("!!!");
    url = dat [k].src; fmt = dat [k].height; fixformat (f, frame);
  }
  else
  {
    if (!(url = url_m3u8)) throw ("!!!"); url = krak + url + key;

    if (stream_all (frame, 1)) fmt = 0; else
    {
      response = await kitty (url); textData = await response.text();
      [url,fmt] = crack_m3u8 (url, textData, frame, fmt);
    }
  }

} catch (err) { console.log (err); busy = 0; }

  if (!xtag) id = pub + "-" + id; if (xfmt < 0) id = "id-none";
  if (no_fail (frame, id)) loadwindow (url, frame, tag, id, fmt);
}
////////////////////

