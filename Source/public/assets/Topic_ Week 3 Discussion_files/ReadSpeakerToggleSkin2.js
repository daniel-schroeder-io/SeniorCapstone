/*
 ReadSpeaker International B.v.
 @version 1.01
*/
window.rsConf||(window.rsConf={});window.rsConf.ui||(window.rsConf.ui={});window.rsConf.general||(window.rsConf.general={});window.rsConf.phrases||(window.rsConf.phrases={});window.rsConf.toggle||(window.rsConf.toggle={});window.rsConf.toggle.useDownload||(window.rsConf.toggle.useDownload=!1);window.rsConf.ui.rsbtnClass="rsbtn_toggleskin";
window.rsConf.ui.player=['<a class="rsbtn_pause rsimg rspart" href="javascript:void(0);" title="Pause"><span class="rsbtn_btnlabel">Pause</span></a>','<a class="rsbtn_stop rsimg rspart" href="javascript:void(0);" title="Stop"><span class="rsbtn_btnlabel">Stop</span></a>','<span class="rsbtn_player rsimg rspart">','\t<span class="rsbtn_progress_container rsimg rsplaypart rsloading">','\t\t<span class="rsbtn_progress_played rsimg"></span>',"\t</span>\t",'\t<a class="rsbtn_volume rsimg rsplaypart" href="javascript:void(0);" title="Volume"><span class="rsbtn_btnlabel">Volume</span></a>',
'\t<span class="rsbtn_volume_container rsimg">','\t\t<span class="rsbtn_volume_slider"></span>',"\t</span>",'\t<a class="rsbtn_settings rsimg rsplaypart" href="javascript:void(0);" title="Settings"><span class="rsbtn_btnlabel">Settings</span></a>',window.rsConf.toggle.useDownload?'\t<a class="rsbtn_dl rsimg rsplaypart" href="javascript:void(0);" title="Download MP3"><span class="rsbtn_btnlabel">Download mp3</span></a>':"","</span>",'<a class="rsbtn_closer rsimg rspart" href="javascript:void(0);" title="Close Player"><span class="rsbtn_btnlabel">Close</span></a>',
'<span class="rsbtn_powered rsimg"><span class="rsbtn_btnlabel">Speech-enabled by ReadSpeaker</span></span>'];window.rsConf.general.usePost=!0;window.rsConf.general.cookieName="ReadSpeakerToggleSkinSettings";window.rsConf.phrases.en_us={activate:"Activate ReadSpeaker",deactivate:"Deactivate ReadSpeaker",listentoselection:"Listen to the selected text",listenwith:"Activate/Deactivate ReadSpeaker",moveplayer:"Move player",pleaseselect:"Please select the text you want to listen to.",readabout:"Read about the Listening-service."};
window.rsConf.phrases.ar_ar={activate:decodeURIComponent("ReadSpeaker%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84"),deactivate:decodeURIComponent("ReadSpeaker%D8%A5%D9%8A%D9%82%D8%A7%D9%81"),hideplayer:decodeURIComponent("%D8%A5%D8%AE%D9%81%D8%A7%D8%A1%20%D9%85%D8%B4%D8%BA%D9%84%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA"),listentoselection:decodeURIComponent("%D8%A5%D8%B3%D8%AA%D9%85%D8%B9%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D9%86%D8%B5%20%D8%A7%D9%84%D8%B0%D9%8A%20%D8%AA%D9%85%20%D8%A5%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1%D9%87"),
listenwith:decodeURIComponent("ReadSpeaker%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%2F%D8%A5%D9%8A%D9%82%D8%A7%D9%81"),moveplayer:decodeURIComponent("%D8%AD%D8%B1%D9%91%D9%90%D9%83%20%D9%85%D8%B4%D8%BA%D9%84%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA"),pleaseselect:decodeURIComponent("%D8%A7%D9%84%D8%B1%D8%AC%D8%A7%D8%A1%20%D8%A5%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1%20%D8%A7%D9%84%D9%86%D8%B5%20%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%AF%20%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D9%85%D8%A7%D8%B9%20%D8%A5%D9%84%D9%8A%D9%87%D9%90"),showplayer:decodeURIComponent("%D8%A5%D8%B8%D9%87%D8%A7%D8%B1%20%D9%85%D8%B4%D8%BA%D9%84%20%D8%A7%D9%84%D8%B5%D9%88%D8%AA"),
readabout:decodeURIComponent("%D8%A5%D9%82%D8%B1%D8%A3%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%85%D8%A7%D8%B9")};window.rsConf.phrases.nl_nl={activate:"ReadSpeaker activeren",deactivate:"ReadSpeaker deactiveren",listentoselection:"Geselecteerde tekst beluisteren",listenwith:"ReadSpeaker activeren/deactiveren",moveplayer:"Player verplaatsen",pleaseselect:"Selecteer a.u.b. de tekst om te beluisteren.",readabout:"Lees over de Luister-service."};
window.rsConf.phrases.sv_se={activate:"Aktivera ReadSpeaker",deactivate:"Inaktivera ReadSpeaker",listentoselection:decodeURIComponent("Lyssna%20p%C3%A5%20markerad%20text"),listenwith:decodeURIComponent("Aktivera%2Finaktivera%20ReadSpeaker"),moveplayer:"Flytta spelaren",pleaseselect:decodeURIComponent("V%C3%A4nligen%20markera%20den%20text%20du%20vill%20lyssna%20p%C3%A5."),readabout:"Mer information om ReadSpeaker."};
window.rsConf.phrases.fr_fr={activate:"Activer ReadSpeaker",deactivate:decodeURIComponent("d%C3%A9sactiver%20ReadSpeaker"),listentoselection:decodeURIComponent("Ecouter%20le%20texte%20s%C3%A9lectionn%C3%A9"),listenwith:decodeURIComponent("Activer%2FD%C3%A9sactiver%20ReadSpeaker"),moveplayer:decodeURIComponent("D%C3%A9placer%20player"),pleaseselect:decodeURIComponent("Merci%20de%20s%C3%A9lectionner%20le%20texte%20que%20vous%20souhaitez%20%C3%A9couter."),readabout:decodeURIComponent("A%20propos%20du%20service%20d%C3%A9coute.")};
window.rsConf.phrases.es_es={activate:"Activar ReadSpeaker",deactivate:"Desactivar ReadSpeaker",listentoselection:"Escuchar el texto seleccionado",listenwith:"Activar/Desactivar ReadSpeaker",moveplayer:"Mover el reproductor",pleaseselect:"Por favor, seleccione el texto que desea escuchar.",readabout:"Lea acerca del servicio de lectura."};
window.rsConf.phrases.de_de={activate:"ReadSpeaker aktivieren",deactivate:"ReadSpeaker deaktivieren",listentoselection:decodeURIComponent("Ausgew%C3%A4hlten%20Text%20anh%C3%B6ren"),listenwith:decodeURIComponent("ReadSpeaker%20aktivieren%2Fdeaktivieren"),moveplayer:"Player bewegen",pleaseselect:decodeURIComponent("Bitte%20w%C3%A4hlen%20Sie%20den%20Text%2C%20den%20Sie%20h%C3%B6ren%20m%C3%B6chten."),readabout:decodeURIComponent("Lesen%20Sie%20mehr%20%C3%BCber%20den%20Vorlese-Service.")};
window.rsConf.phrases.fi_fi={activate:"Aktivoi ReadSpeaker",deactivate:"Sulje ReadSpeaker",listentoselection:"Kuuntele valittu teksti",listenwith:"Aktivoi/Sulje ReadSpeaker",moveplayer:decodeURIComponent("Siirr%C3%A4%20audiosoitinta"),pleaseselect:decodeURIComponent("Valitse%20hiirell%C3%A4%20maalaamalla%20teksti%20jonka%20haluat%20kuunnella."),readabout:decodeURIComponent("Lis%C3%A4tietoa%20ReadSpeakerist%C3%A4")};
ReadSpeaker.Toggle=function(){var q={buttonHref:"",configClass:"rsTop",defaultSetting:"rson",readids:[],rsbtnClass:"rsbtn_toggleskin",addPreserve:[],addSkip:[],useIcons:!1,isFixed:!0,insertToggleInside:"",insertToggleBefore:"",togglePosition:{top:null,right:null,bottom:null,left:null},playerPosition:{top:null,right:null,bottom:null,left:null}},t={closed:300,open:400},m=null,h=!1,n=!1,p=!1,k=window,l='<a href="JavaScript: void(0);" title="%TOGGLEPLAYER%" class="rsbtn_toggle"></a>,<a href="JavaScript: void(0);" title="%MOVEPLAYER%" class="rsbtn_move"></a>,<a href="JavaScript: void(0);" title="%READABOUT%" class="rsbtn_abouthelp"></a>,<a class="rsbtn_play" accesskey="L" title="%LISTENTOSELECTED%" href="">,\t<span class="rsbtn_left rsimg rspart"><span class="rsbtn_text">%LISTEN%<span></span></span></span>,\t<span class="rsbtn_right rsimg rsplay rspart"></span>,</a>,<a href="JavaScript: void(0);" title="%CLOSEPLAYER%" class="rsbtn_toggle_close rsimg rspart"></a>'.split(","),
b=function(a){return"undefined"!==typeof rspkr.cfg.item("toggle."+a)?rspkr.cfg.item("toggle."+a):q.hasOwnProperty(a)?q[a]:""},e=function(){var a={ar_ar:["ar-SA"],en_us:["en-US","en"],en_au:["en-AU"],en_uk:["en-GB"],pt_br:["pt-BR"],zh_cn:["zh-CN"],da_dk:["da-DK"],nl_nl:["nl-NL"],fr_fr:["fr-FR"],de_de:["de-DE"],it_it:["it-IT"],ja_jp:["ja-JP"],ko_ko:["ko-KO"],ru_ru:["ru-RU"],es_es:["es-ES","es"],es_us:["es-US","es"],es_co:["es-CO","es"],sv_se:["sv-SE"],tr_tr:["tr-TR"],cy_cy:["cy-CY"],pt_pt:["pt-PT",
"pt"],pt_br:["pt-BR","pt"]},d=k.document.documentElement.lang,f=b("customerParams"),c="en_us";""!==f&&f.hasOwnProperty("lang")&&(c=f.lang,c=$rs.isArray(c)?c:[c]);var e;""!==f&&f.hasOwnProperty("voice")&&(e=f.voice,$rs.isArray(e));e=!1;for(var l in a){if(a.hasOwnProperty(l))for(var g=a[l],g=$rs.isArray(g)?g:[g],m=0;m<g.length;m++){if(g[m]==d)for(var h=0;h<c.length;h++)if(l==c[h]){c=c[h];e=!0;break}if(e)break}if(e)break}e||(c=$rs.isArray(g)?c[0]:c);f.lang=c;rspkr.c.data.params.lang=c},r=function(){return m=
$rs.get("#readspeaker_button")},u=function(){if(!0===n||k.document.getElementById("readspeaker_button"))n=!0;else{h=!1;m=k.document.createElement("div");m.id="readspeaker_button";var a=b("customerParams"),d="en_us";""!==a&&a.hasOwnProperty("lang")&&(d=a.lang);for(i=0;i<l.length;i++)l[i]=l[i].replace("%LISTEN%",rspkr.cfg.getPhrase("listen",d,"en_us")),l[i]=l[i].replace("%MOVEPLAYER%",rspkr.cfg.getPhrase("moveplayer",d,"en_us")),l[i]=l[i].replace("%LISTENTOSELECTED%",rspkr.cfg.getPhrase("listentoselection",
d,"en_us")),l[i]=l[i].replace("%READABOUT%",rspkr.cfg.getPhrase("readabout",d,"en_us")),l[i]=l[i].replace("%CLOSEPLAYER%",rspkr.cfg.getPhrase("close",d,"en_us")),l[i]=l[i].replace("%TOGGLEPLAYER%",rspkr.cfg.getPhrase("activate",d,"en_us"));m.innerHTML=l.join("\n");(a=k.document.body)?(a.appendChild(m),n=!0,a=$rs.findIn(r(),".rsbtn_play"),$rs.setAttr(a,"href",b("buttonHref")),$rs.addClass(r(),b("rsbtnClass")+" rs_skip rs_preserve no-print"),rspkr.ui.addClickEvents(),$rs.css(r(),"width",t.closed+"px")):
n=!1}},g=function(a){var d=$rs.get("#readspeaker_button");a?$rs.hasClass(d,"rstoggleoff")&&($rs.removeClass(d,"rstoggleoff"),rspkr.st.set("rstoggle","on")):$rs.hasClass(d,"rstoggleoff")||($rs.addClass(d,"rstoggleoff"),rspkr.st.set("rstoggle","off"))},w=function(){var a=rspkr.cfg.item("toggle.customerParams.region"),a=document.location.protocol+"//app"+(a?"-"+a:"")+".readspeaker.com/cgi-bin/rsent?",d=!0,f=b("customerParams"),c;for(c in f)null!==f[c]&&("readid"===c?q.readids.push(f[c]):!0===d?(a+=c+
"="+f[c],d=!1):a+="&"+c+"="+f[c]);c=a=window.rsConf.toggle.additionalParams?a+window.rsConf.toggle.additionalParams:a;a:{a=b("readids");for(d=0;d<a.length;d++)if(k.document.getElementById(a[d])){a=a[d];break a}a=k.document.createElement("div");d=b("customerParams");f="en_us";""!==d&&d.hasOwnProperty("lang")&&(f=d.lang);d=k.document.createTextNode(rspkr.cfg.getPhrase("pleaseselect",f,"en_us"));a.id="rspkr_read_area";a.style.display="none";a.appendChild(d);k.document.body.appendChild(a);a="rspkr_read_area"}q.buttonHref=
c+("&readid="+a)+"&url="},x=function(){var a=b("addPreserve"),d=b("addSkip"),f;if(0<a.length)for(var c=0;c<a.length;c++)if((f=$rs.get(a[c]))&&$rs.isArray(f)&&0<f.length)for(var e=0;e<f.length;e++)$rs.addClass(f[e],"rs_preserve");else f&&$rs.addClass(f,"rs_preserve");if(0<d.length)for(c=0;c<d.length;c++)if((f=$rs.get(d[c]))&&$rs.isArray(f)&&0<f.length)for(e=0;e<f.length;e++)$rs.addClass(f[e],"rs_skip");else f&&$rs.addClass(f,"rs_skip")},v=function(){var a=b("customerParams"),d="en_us";""!==a&&a.hasOwnProperty("lang")&&
(d=a.lang);var a=["en_us","ar_ar","fr_fr","es_es"],f=0;-1<a.indexOf(d)&&(f=a.indexOf(d));return"https://media.readspeaker.com/documents/help_pages/launcher.php?p=toggleskin&lang="+a[f]};return{createPlayer:function(){u()},init:function(){n=!1;ReadSpeaker&&ReadSpeaker.windowRef&&(k=ReadSpeaker.windowRef);var a=rspkr.c.data.browser;a&&(/iphone|ipad|ios|android/i.test(a.OS)||"android"==a.name.toLowerCase())&&(p=!0);e();w();u();x();if(a=$rs.get("#readspeaker_button .rsbtn_abouthelp"))$rs.setAttr(a,"href",
v()),$rs.regEvent(a,"click",function(a){ReadSpeaker.pl.pause();ReadSpeaker.ui.Lightbox.show('<iframe id="rslightbox_aboutframe" style="height: 5000px; width: 100%;" src="'+v()+'"></iframe>',ReadSpeaker.st.getButtons(),!0,function(a){a=$rs.findIn("#rslightbox_buttons",".rssettings-button-close");$rs.regEvent(a,"click",rspkr.ui.Lightbox.hide);rspkr.ui.addFocusHandler(a,!1);$rs.css($rs.get("#rslightbox_aboutframe"),"height",$rs.get("#rslightbox_aboutframe").parentNode.style.height);$rs.css($rs.get("#rslightbox_content"),
"height","auto")});a.originalEvent&&a.originalEvent.preventDefault&&a.originalEvent.preventDefault();a.originalEvent&&"undefined"!==a.originalEvent.returnValue&&(a.originalEvent.returnValue=!1);return!1});$rs.regEvent(".rsbtn_toggle_close","click",function(){g(!1)});$rs.regEvent("#readspeaker_button .rsbtn_toggle","click",function(){g(!0)});ReadSpeaker.Common.addEvent("onUIShowPlayer",function(){g(!0);$rs.regEvent($rs.findIn(r(),"a.rsbtn_closer"),"click",function(){g(!1)})});$rs.regEvent(k,"resize",
function(){ReadSpeaker.Toggle.Drag.setPosition("resize");$rs.get("#rslightbox_aboutframe")&&$rs.get("#rslightbox_aboutframe").parentNode&&$rs.css($rs.get("#rslightbox_aboutframe"),"height",$rs.get("#rslightbox_aboutframe").parentNode.style.height)});p&&($rs.regEvent(k,"scroll",function(){ReadSpeaker.Toggle.Drag.setPosition("resize")}),rspkr.cfg.item("settings.hlicon","iconoff"));rspkr.c.addEvent("onUIShowPlayer",function(){setTimeout(function(){h=!0;ReadSpeaker.Toggle.Drag.setPosition()},100)});rspkr.c.addEvent("onUIClosePlayer",
function(){setTimeout(function(){h=!1;ReadSpeaker.Toggle.Drag.setPosition("closeplayer")},100)});rspkr.c.addEvent("onAPIStop",function(){rspkr.ui.getActivePlayer()&&rspkr.ui.getActivePlayer().close()});ReadSpeaker.Toggle.Drag.initDragDrop();ReadSpeaker.Toggle.Drag.setPosition("resize");"on"===rspkr.st.get("rstoggle")?g(!0):g(!1);rspkr.c.addEvent("onSelectedText",function(){$rs.addClass("#readspeaker_button","rsfocus")});rspkr.c.addEvent("onDeselectedText",function(){$rs.removeClass("#readspeaker_button",
"rsfocus")});rspkr.c.addEvent("onSelectedText",function(){$rs.unregEvent($rs.get(".rspopup a.rsbtn_play"),"click");$rs.regEvent($rs.get(".rspopup a.rsbtn_play"),"click",function(a){var b=$rs.get("#readspeaker_button .rsbtn_play"),c,d=!1;document.createEvent?(c=document.createEvent("HTMLEvents"),c.initEvent("click",!0,!0),c=!b.dispatchEvent(c),d=!0):b.fireEvent&&(c=document.createEventObject(),c=b.fireEvent("onclick",c),d=!0);c||!b.click||d||b.click();a.originalEvent&&a.originalEvent.preventDefault&&
a.originalEvent.preventDefault();a.originalEvent&&"undefined"!==a.originalEvent.returnValue&&(a.originalEvent.returnValue=!1);return!1})});ReadSpeaker.DocReader&&ReadSpeaker.DocReader.AutoAdd&&ReadSpeaker.DocReader.AutoAdd.init?ReadSpeaker.DocReader.AutoAdd.init():(ReadSpeaker||(ReadSpeaker={}),ReadSpeaker.DocReader||(ReadSpeaker.DocReader={}),ReadSpeaker.DocReader.canInit||(ReadSpeaker.DocReader.canInit=!0))},checkPlayerLoaded:function(){n||u()},getSetting:function(a){return rspkr.Common.cookie.readKey(rspkr.pub.Config.item("general.cookieName"),
a)||""},getConfig:function(a){return b(a)},setSetting:function(a,b){rspkr.c.cookie.updateKey(rspkr.cfg.item("general.cookieName"),a,b)},getWindowRef:function(){return k},setPlayerOpen:function(a){h=a},isPlayerOpen:function(){return h},isTouch:function(){return p},playerSize:t}}();
ReadSpeaker.Toggle.Drag=function(){var q=0,t=0,m,h,n=function(b){var e=ReadSpeaker.Toggle.getWindowRef();null==b&&(b=e.event);b.preventDefault&&b.preventDefault();var r=null!=b.target?b.target:b.srcElement;h=r.parentNode;if("rsbtn_move"==r.className&&h)return q=ReadSpeaker.Toggle.isTouch()?e.event.touches[0].pageY:b.clientY,t=l(h.style.top),ReadSpeaker.Toggle.isTouch()?($rs.regEvent(e.document.body,"touchmove",k),$rs.regEvent(e.document.body,"touchend",p)):($rs.regEvent(e.document.body,"mousemove",
k),$rs.regEvent(e.document.body,"mouseup",p)),e.document.body.focus(),e.document.onselectstart=function(){return!1},m.ondragstart=function(){return!1},!1},p=function(b){b.preventDefault&&b.preventDefault();b=ReadSpeaker.Toggle.getWindowRef();null!=m&&null!=h&&(ReadSpeaker.Toggle.isTouch()?($rs.unregEvent(b.document.body,"touchmove",k),$rs.unregEvent(b.document.body,"touchend",p)):($rs.unregEvent(b.document.body,"mousemove",k),$rs.unregEvent(b.document.body,"mouseup",p)),b.document.onselectstart=null,
m.ondragstart=null,ReadSpeaker.Toggle.setSetting("rspostop",l(h.style.top)),h=null,ReadSpeaker.Toggle.Drag.setPosition())},k=function(b){var e=ReadSpeaker.Toggle.getWindowRef();null==b&&(b=window.event);b.preventDefault&&b.preventDefault();b=ReadSpeaker.Toggle.isTouch()?e.event.touches[0].pageY:b.clientY;h.style.top=t+b-q+"px"},l=function(b){b=parseInt(b);return null==b||isNaN(b)?0:b};return{initDragDrop:function(){if(m=$rs.get(".rsbtn_move"))ReadSpeaker.Toggle.isTouch()?($rs.regEvent(m,"touchstart",
n),ReadSpeaker.Toggle.getWindowRef().document.addEventListener("touchmove",function(b){null!=m&&null!=h&&b.preventDefault&&b.preventDefault()},!1)):$rs.regEvent(m,"mousedown",n)},setPosition:function(b){m=$rs.get(".rsbtn_move");var e=ReadSpeaker.Toggle.getWindowRef();b=b||"";if(m){var h=m.parentNode;if(h){var k=$rs.height(e);e.innerHeight&&(k=e.innerHeight);e=$rs.outerHeight(h,!1);ReadSpeaker.Toggle.isTouch()||(e+=15);var g;g=ReadSpeaker.Toggle.getSetting("rspostop");g=""===g?rspkr.cfg.item("toggle.defaultTop")?
rspkr.cfg.item("toggle.defaultTop"):k-e:"fixed"===g?k-e:l(g);if(g>k-e){var n=!0;g=k-e}0>g&&(g=0);h.style.left="0px";h.style.top=g+"px";n?ReadSpeaker.Toggle.setSetting("rspostop","fixed"):"resize"!==b&&ReadSpeaker.Toggle.setSetting("rspostop",g)}}}}}();
