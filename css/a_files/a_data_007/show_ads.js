(function(){var n=this,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return r.apply(null,arguments)},ca=Date.now||
function(){return+new Date};var u=(new Date).getTime();var x={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},da=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,ea=function(){},z=function(a,b,c){switch(typeof b){case "string":fa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&
b.splice){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),z(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],"function"!=typeof f&&(c.push(d),fa(e,c),c.push(":"),z(a,f,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},fa=function(a,b){b.push('"');b.push(a.replace(da,function(a){if(a in x)return x[a];var b=a.charCodeAt(0),c="\\u";16>b?c+="000":256>b?c+="00":4096>b&&(c+="0");return x[a]=c+b.toString(16)}));
b.push('"')};var A=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},na=function(a){if(!ga.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ha,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ia,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ja,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ka,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(la,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ma,"&#0;"));return a},ha=/&/g,ia=/</g,ja=/>/g,ka=/"/g,la=/'/g,ma=/\x00/g,ga=/[\x00&<>"']/,
B={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},C={"'":"\\'"},D=function(a,b){return a<b?-1:a>b?1:0};var E=function(a){E[" "](a);return a};E[" "]=function(){};var pa=function(a,b){var c=oa;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var qa=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{E(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},ra=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},ta=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+
c};var ua=function(a,b){this.j=a;this.o=b},va=function(a,b,c){this.url=a;this.j=b;this.F=!!c;this.depth=null};var wa=function(a,b){a.addEventListener?a.addEventListener("load",b,!1):a.attachEvent&&a.attachEvent("onload",b)};var xa=function(a,b,c,d,e){this.w=c||4E3;this.s=a||"&";this.A=b||",$";this.u=void 0!==d?d:"trn";this.C=e||null;this.v=!1;this.o={};this.B=0;this.j=[]},ya=function(a,b){var c={};c[a]=b;return[c]},F=function(a,b,c,d){a.j.push(b);a.o[b]=ya(c,d)},Ba=function(a,b,c,d){b=b+"//"+c+d;var e=za(a)-d.length-0;if(0>e)return"";a.j.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.j.length;f++)for(var g=a.j[f],h=a.o[g],k=0;k<h.length;k++){if(!e){d=null==d?g:d;break}var l=Aa(h[k],a.s,a.A);if(l){l=c+l;
if(e>=l.length){e-=l.length;b+=l;c=a.s;break}else a.v&&(c=e,l[c-1]==a.s&&--c,b+=l.substr(0,c),c=a.s,e=0);d=null==d?g:d}}f="";a.u&&null!=d&&(f=c+a.u+"="+(a.C||d));return b+f+""},za=function(a){if(!a.u)return a.w;var b=1,c;for(c in a.o)b=c.length>b?c.length:b;return a.w-a.u.length-b-a.s.length-1},Aa=function(a,b,c,d,e){var f=[];sa(a,function(a,h){var g=Ca(a,b,c,d,e);g&&f.push(h+"="+g)});return f.join(b)},Ca=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));
if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Ca(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Aa(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};var Ea=function(a,b,c,d,e){if((d?a.v:Math.random())<(e||a.j))try{var f;c instanceof xa?f=c:(f=new xa,sa(c,function(a,b){var c=f,d=c.B++,e=ya(b,a);c.j.push(d);c.o[d]=e}));var g=Ba(f,a.u,a.o,a.s+b+"&");g&&Da(g)}catch(h){}},Da=function(a){n.google_image_requests||(n.google_image_requests=[]);var b=n.document.createElement("img");b.src=a;n.google_image_requests.push(b)};var Fa=function(a,b,c){this.u=a;this.w=b;this.s=c;this.o=null;this.v=this.j},Ga=function(a,b,c){this.s=a;this.j=b||"";this.o=c||-1},Ia=function(a,b,c,d){var e;try{e=c()}catch(h){var f=a.s;try{var g=Ha(h),f=(d||a.v).call(a,b,g,void 0,void 0)}catch(k){a.j("pAR",k)}if(!f)throw h;}finally{}return e},Ja=function(a,b){var c=G;return function(){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];return Ia(c,a,function(){return b.apply(void 0,d)})}};
Fa.prototype.j=function(a,b,c,d,e){try{var f=e||this.w,g=new xa;g.v=!0;F(g,1,"context",a);b instanceof Ga||(b=Ha(b));F(g,2,"msg",b.s.substring(0,512));b.j&&F(g,3,"file",b.j);0<b.o&&F(g,4,"line",b.o.toString());b={};if(this.o)try{this.o(b)}catch(w){}if(d)try{d(b)}catch(w){}d=[b];g.j.push(5);g.o[5]=d;var h;e=n;d=[];var k,l=null;do{b=e;qa(b)?(k=b.location.href,l=b.document&&b.document.referrer||null):(k=l,l=null);d.push(new va(k||"",b));try{e=b.parent}catch(w){e=null}}while(e&&b!=e);k=0;for(var m=d.length-
1;k<=m;++k)d[k].depth=m-k;b=n;if(b.location&&b.location.ancestorOrigins&&b.location.ancestorOrigins.length==d.length-1)for(k=1;k<d.length;++k){var p=d[k];p.url||(p.url=b.location.ancestorOrigins[k-1]||"",p.F=!0)}for(var q=new va(n.location.href,n,!1),v=d.length-1,m=v;0<=m;--m){var t=d[m];if(t.url&&!t.F){q=t;break}}var t=null,y=d.length&&d[v].url;0!=q.depth&&y&&(t=d[v]);h=new ua(q,t);h.o&&F(g,6,"top",h.o.url||"");F(g,7,"url",h.j.url||"");Ea(this.u,f,g,!1,c)}catch(w){try{Ea(this.u,f,{context:"ecmserr",
rctx:a,msg:Ka(w),url:h.j.url},!1,c)}catch(M){}}return this.s};var Ha=function(a){return new Ga(Ka(a),a.fileName,a.lineNumber)},Ka=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};var La=document,H=window,Ma=null,I=La.getElementsByTagName("script");I&&I.length&&(Ma=I[I.length-1]);var Na=Ma;var J=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},Oa=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},Pa=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,Qa=function(a,b){if(!a)return b;var c=a.match(Pa);return c?c[0]:b};var Ra=Oa("100",-1),Sa=Oa("100",0),Ta=J("0.04"),Ua=J("0.04"),Va=J("0.05"),Wa=J("0.05"),Xa=J(""),Ya=J("0.001"),Za=J("");var $a=function(){return"r20160929"},ab=/^true$/.test("false")?!0:!1,bb=/^true$/.test("false")?!0:!1,cb=/^true$/.test("true")?!0:!1,db=cb||!bb;var eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"==typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};var K;a:{var fb=n.navigator;if(fb){var gb=fb.userAgent;if(gb){K=gb;break a}}K=""}var L=function(a){return-1!=K.indexOf(a)};var hb=L("Opera"),N=L("Trident")||L("MSIE"),ib=L("Edge"),O=L("Gecko")&&!(-1!=K.toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),jb=-1!=K.toLowerCase().indexOf("webkit")&&!L("Edge"),kb=function(){var a=n.document;return a?a.documentMode:void 0},lb;
a:{var mb="",nb=function(){var a=K;if(O)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ib)return/Edge\/([\d\.]+)/.exec(a);if(N)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jb)return/WebKit\/(\S+)/.exec(a);if(hb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();nb&&(mb=nb?nb[1]:"");if(N){var ob=kb();if(null!=ob&&ob>parseFloat(mb)){lb=String(ob);break a}}lb=mb}
var pb=lb,oa={},qb=function(a){pa(a,function(){for(var b=0,c=A(String(pb)).split("."),d=A(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=D(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||D(0==g[2].length,0==h[2].length)||D(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})},tb;var ub=n.document;
tb=ub&&N?kb()||("CSS1Compat"==ub.compatMode?parseInt(pb,10):5):void 0;var vb;if(!(vb=!O&&!N)){var wb;if(wb=N)wb=9<=Number(tb);vb=wb}vb||O&&qb("1.9.1");N&&qb("9");var xb=Object.prototype.hasOwnProperty,yb=function(a,b){for(var c in a)xb.call(a,c)&&b.call(void 0,a[c],c,a)},P=function(a){return!(!a||!a.call)&&"function"===typeof a},zb=function(a,b){for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},Ab=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,wa(a,function(){a.google_onload_fired=!0}))},Bb=function(a){a=a.google_unique_id;return"number"===typeof a?a:0},Cb=!!window.google_async_iframe_id;var Db,G,Q,R=[],Eb=1E-4>Math.random(),Fb=!(!H.performance||!H.performance.now);Db=new function(){this.u="http:"===H.location.protocol?"http:":"https:";this.o="pagead2.googlesyndication.com";this.s="/pagead/gen_204?id=";this.j=.01;this.v=Math.random()};G=new Fa(Db,"jserror",!0);
var Ib=function(a,b){var c=Gb;if(Eb){var d=Fb?H.performance.now():ca();Ia(G,a,b,c);c=Math.round((Fb?H.performance.now():ca())-d);R.push(a+"."+c);Q||(Q=H.setTimeout(Hb,500))}else Ia(G,a,b,c)},Gb=G.j,Hb=function(){R.length&&(Ea(Db,"execution_time",{data:R.join(","),nav_api:Fb?1:0},!0,Eb?1:0),R=[],H.clearTimeout(Q),Q=void 0)},Jb=function(a,b){return Ja(a,b)};var Kb=L("Safari")&&!((L("Chrome")||L("CriOS"))&&!L("Edge")||L("Coast")||L("Opera")||L("Edge")||L("Silk")||L("Android"))&&!(L("iPhone")&&!L("iPod")&&!L("iPad")||L("iPad")||L("iPod"));var S=null,Lb=O||jb&&!Kb||hb||"function"==typeof n.btoa;var T="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_auto_format google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_content_recommendation_columns_num google_content_recommendation_rows_num google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_delay_requests_count google_delay_requests_delay google_ed google_eids google_enable_content_recommendations google_enable_ose google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_native_settings_key google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Mb={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Nb=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},Ob=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];
return null},Rb=function(a){var b;try{a:{var c=a.document.getElementsByTagName("script"),d=a.navigator&&a.navigator.userAgent||"",e;if(!(e=/appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(d))){var f;if(f=/i(phone|pad|pod)/i.test(d)){var g;if(g=/applewebkit/i.test(d)&&!/version|safari/i.test(d)){var h;try{h=!(!H.navigator.j&&!(ab&&H.google_top_window||H.top).navigator.j)}catch(q){h=!1}g=
!h}f=g}e=f}for(var d=e?Nb:Ob,k=c.length-1;0<=k;k--){var l=c[k];if(!l.google_parsed_script){l.google_parsed_script=!0;var m=d(l);if(m){b=m;break a}}}b=null}}catch(q){return!1}if(!b)return!1;try{for(var c=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,k={},p;p=c.exec(b);)k[p[1]]=Pb(p[2]);Qb(k,a)}catch(q){return!1}return!!a.google_ad_client},Sb=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];yb(a,function(a,d){if(null!=a){var c;try{var f=[];z(new ea,a,f);c=f.join("")}catch(g){}c&&
(c=c.replace(/\//g,"\\$&"),zb(b,d,"=",c,";"))}});return b.join("")},Tb=function(a){for(var b=0,c=T.length;b<c;b++){var d=T[b];Mb[d]||(a[d]=null)}},Pb=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}},Qb=function(a,b){for(var c=0;c<T.length;c++){var d=T[c];null==b[d]&&null!=
a[d]&&(b[d]=a[d])}};var Ub=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var Vb={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",pse:"google_pstate_expt"};G.s=!ab;var Wb=function(a,b){this.start=a<b?a:b;this.j=a<b?b:a};var Xb=function(a){var b;try{b=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(c){return null}if(0<=b&&1E3>b)return b;b=Math.floor(1E3*ra(a));try{return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){return null}};var Yb=null,Zb=function(){if(!Yb){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,qa(a))b=a;else break;Yb=b}return Yb};var $b={l:"10573511",m:"10573512"},ac={l:"10573507",m:"10573508"},bc={l:"10583695",m:"10583696"},cc={l:"10573695",m:"10573696"},dc={l:"10593695",m:"10593696"},ec={l:"4089030",m:"4089031"},fc={l:"4089035",m:"4089036"},gc={T:{},fa:{l:"453848102",m:"453848103"},aa:{l:"24819308",m:"24819309",P:"24819320",V:"24819321"},$:{l:"24819330",m:"24819331"},X:{l:"86724438",m:"86724439"},L:{l:"10573597",m:"10573598"},M:{l:"10573581",m:"10573582"},U:{l:"26835105",m:"26835106"},K:{l:"20040000",m:"20040001"},R:{l:"20040016",
m:"20040017"},S:{O:"314159230",Z:"314159231"},Y:{ca:"27285692",ea:"27285712",da:"27285713"},ba:{l:"27415010",m:"27415011"},W:{l:"90091300",m:"90091301"}};var hc=new function(){this.j=new Wb(100,199)};var U=function(a,b){b&&a.push(b)},V=function(a,b,c,d){if(a.location&&a.location.hash=="#google_plle_"+d)b=d;else a:{a=[c,d];if(!(1E-4>Math.random())&&(c=Math.random(),c<b)){c=ra(window);b=a[Math.floor(c*a.length)];break a}b=null}return b};var ic=function(a,b,c){Ib("files::getSrc",function(){if("https:"==H.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},jc=function(a,b,c){c||(c=db?"https":"http");return ic(a,b,c)};var W=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:r(this.u,this)});this.s=a.google_iframe_oncopy},kc=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};W.prototype.set=function(a,b){this.s.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",r(this.o,this,a),!1)};
W.prototype.o=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};W.prototype.u=function(a,b){var c=kc("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|-?M)/,"&dtd="+(1E5<=d?"M":0<=d?d:"-M"));this.set(b,c);return c};var lc=na("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");var mc=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};O||jb||N&&qb(11);var nc=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i;var X=null;var oc={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Y=function(a){this.u=[];this.o=a||window;this.j=0;this.s=null;this.B=0},Z,pc=function(a){try{return a.sz()}catch(b){return!1}},qc=function(a){return!!a&&("object"===typeof a||"function"===typeof a)&&pc(a)&&P(a.nq)&&P(a.nqa)&&P(a.al)&&P(a.rl)},rc=function(){if(Z&&pc(Z))return Z;var a=Zb(),b=a.google_jobrunner;return qc(b)?Z=b:a.google_jobrunner=Z=new Y(a)},sc=function(a,b){rc().nq(a,b)},tc=function(a,b){rc().nqa(a,b)};
Y.prototype.C=function(a,b){0!=this.j||0!=this.u.length||b&&b!=window?this.v(a,b):(this.j=2,this.A(new uc(a,window)))};Y.prototype.v=function(a,b){this.u.push(new uc(a,b||this.o));vc(this)};Y.prototype.H=function(a){this.j=1;if(a){var b=Jb("sjr::timeout",r(this.w,this,!0));this.s=this.o.setTimeout(b,a)}};Y.prototype.w=function(a){a&&++this.B;1==this.j&&(null!=this.s&&(this.o.clearTimeout(this.s),this.s=null),this.j=0);vc(this)};Y.prototype.I=function(){return!(!window||!Array)};Y.prototype.G=function(){return this.B};
var vc=function(a){var b=Jb("sjr::tryrun",r(a.J,a));a.o.setTimeout(b,0)};Y.prototype.J=function(){if(0==this.j&&this.u.length){var a=this.u.shift();this.j=2;var b=Jb("sjr::run",r(this.A,this,a));a.j.setTimeout(b,0);vc(this)}};Y.prototype.A=function(a){this.j=0;a.o()};Y.prototype.nq=Y.prototype.C;Y.prototype.nqa=Y.prototype.v;Y.prototype.al=Y.prototype.H;Y.prototype.rl=Y.prototype.w;Y.prototype.sz=Y.prototype.I;Y.prototype.tc=Y.prototype.G;var uc=function(a,b){this.o=a;this.j=b};var wc=Cb?1==Bb(H):!Bb(H),xc=function(){var a=cb?"https":"http",b=E("script"),c;a:{if(ab)try{var d=H.google_cafe_host||H.top.google_cafe_host;if(d){c=d;break a}}catch(e){}c=Qa("","pagead2.googlesyndication.com")}return["<",b,' src="',jc(c,["/pagead/js/",$a(),"/r20160727/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},yc=function(a,b,
c,d){return function(){var e=!1;d&&rc().al(3E4);try{var f=a.document.getElementById(b).contentWindow;if(qa(f)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(/Firefox/.test(navigator.userAgent)?h.open("text/html","replace"):h.open(),g.google_async_iframe_close=!0,h.write(c))}else{for(var k=a.document.getElementById(b).contentWindow,f=c,f=String(f),g=['"'],h=0;h<f.length;h++){var l=f.charAt(h),m=l.charCodeAt(0),p=h+1,q;if(!(q=B[l])){var v;if(31<m&&127>m)v=
l;else{var t=l;if(t in C)v=C[t];else if(t in B)v=C[t]=B[t];else{var y=void 0,w=t.charCodeAt(0);if(31<w&&127>w)y=t;else{if(256>w){if(y="\\x",16>w||256<w)y+="0"}else y="\\u",4096>w&&(y+="0");y+=w.toString(16).toUpperCase()}v=C[t]=y}}q=v}g[p]=q}g.push('"');k.location.replace("javascript:"+g.join(""))}e=!0}catch(M){k=Zb().google_jobrunner,qc(k)&&k.rl()}e&&(e=kc("google_async_rrc",c),(new W(a)).set(b,yc(a,b,e,!1)))}},zc=function(a){var b=["<iframe"];yb(a,function(a,d){null!=a&&b.push(" "+d+'="'+na(a)+
'"')});b.push("></iframe>");return b.join("")},Ac=function(a){if(!X)a:{for(var b=[n.top],c=[],d=0,e;e=b[d++];){c.push(e);try{if(e.frames)for(var f=e.frames.length,g=0;g<f&&1024>b.length;++g)b.push(e.frames[g])}catch(k){}}for(b=0;b<c.length;b++)try{var h=c[b].frames.google_esf;if(h){X=h;break a}}catch(k){}X=null}if(!X){c={style:"display:none"};if(/[^a-z0-9-]/.test(a))return"";c["data-ad-client"]=mc(a);c.id="google_esf";c.name="google_esf";a=jc(Qa("","googleads.g.doubleclick.net"),
["/pagead/html/",$a(),"/r20160727/zrt_lookup.html"].join(""));c.src=a;return zc(c)}return""},Bc=function(a,b){var c=b.google_ad_output,d=b.google_ad_format;d||"html"!=c&&null!=c||(d=b.google_ad_width+"x"+b.google_ad_height);c=!b.google_ad_slot||b.google_override_format||!oc[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;d&&c?d=d.toLowerCase():d="";b.google_ad_format=d;if("number"!=typeof b.google_reactive_sra_index||
!b.google_ad_unit_key){for(var d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],c=[],e=0,f=Na.parentElement;f&&25>e;f=f.parentNode,++e)c.push(9!==f.nodeType&&f.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=ta(d.join(":")).toString();d=Na;c=[];for(e=0;d&&25>e;++e){var f=(f=9!==d.nodeType&&d.id)?"/"+f:"",g;a:{if(d&&d.nodeName&&d.parentElement){g=d.nodeName.toString().toLowerCase();for(var h=d.parentElement.childNodes,k=0,l=0;l<h.length;++l){var m=
h[l];if(m.nodeName&&m.nodeName.toString().toLowerCase()===g){if(d===m){g="."+k;break a}++k}}}g=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+f+g);d=d.parentElement}d=c.join()+":";c=a;e=[];if(c)try{for(var p=c.parent,f=0;p&&p!==c&&25>f;++f){var q=p.frames;for(g=0;g<q.length;++g)if(c===q[g]){e.push(g);break}c=p;p=c.parent}}catch(v){}b.google_ad_dom_fingerprint=ta(d+e.join()).toString()}};(function(a){G.o=function(b){eb(a,function(a){a(b)})}})([function(a){a.shv=$a()},function(a){sa(Vb,function(b,c){try{null!=n[b]&&(a[c]=n[b])}catch(d){}})}]);
Ib("sa::main",function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var c=b.eids=b.eids||[],b=b.loeids=b.loeids||[],d,e,f,g;d=gc.L;e=d.m;if(!a.location||a.location.hash!="#google_plle_"+e){e=[d.l,e];f=new Wb(Ra,Ra+Sa-1);var h;(h=0>=Sa||Sa%e.length)||(h=hc.j,h=!(h.start<=f.start&&h.j>=f.j));h?e=null:(h=Xb(a),e=null!==h&&f.start<=h&&f.j>=h?e[(h-Ra)%e.length]:null)}f=e;U(b,f);e=ac;f==d.l?g=e.l:f==d.m?g=e.m:g="";U(c,g);d=bc;U(c,V(a,Va,d.l,d.m));d=cc;U(c,
V(a,Wa,d.l,d.m));d=ec;U(c,V(a,Ta,d.l,d.m));d=fc;U(c,V(a,Ua,d.l,d.m));d=dc;U(c,V(a,Xa,d.l,d.m));d=gc.M;f=V(a,Ya,d.l,d.m);U(b,f);e=$b;f==d.l?g=e.l:f==d.m?g=e.m:g="";U(c,g);La.body||(d=gc.K,U(b,V(a,Za,d.l,d.m)))}b=a.google_ad_slot;c=a.google_ad_modifications;!c||Ub(c.ad_whitelist,b,void 0)?c=null:(g=c.space_collapsing||"none",c=(b=Ub(c.ad_blacklist,b))?{D:!0,N:b.space_collapsing||g}:c.remove_ads_by_default?{D:!0,N:g}:null);if(c&&c.D)Tb(a);else if(Ab(a),!1===window.google_enable_async||nc.test(navigator.userAgent)||
window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output&&("js"!=window.google_ad_output||!0!==window.google_enable_async))a.google_loader_used="sb",a.google_start_time=u,Bc(a,a),document.write(Ac(a.google_ad_client)+xc());else{wc&&(g=a.google_ad_client,c=navigator,a&&g&&c&&(c=a.document,g=mc(g),/[^a-z0-9-]/.test(g)||((b=A("r20160810"))&&(b+="/"),b=jc("pagead2.googlesyndication.com","/pub-config/"+b+g+".js"),g=c.createElement("script"),g.src=b,(c=c.getElementsByTagName("script")[0])&&
c.parentNode&&c.parentNode.insertBefore(g,c))));a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;g={};null==a.google_ad_client&&Rb(a)&&(g.google_loader_features_used=2048);Qb(a,g);g.google_loader_used="sa";Tb(a);c=E("script");b={};d=g.google_ad_height;b.width='"'+g.google_ad_width+'"';b.height='"'+d+'"';b.frameborder='"0"';b.marginwidth='"0"';b.marginheight='"0"';b.vspace='"0"';b.hspace='"0"';b.allowtransparency='"true"';b.scrolling='"no"';b.allowfullscreen='"true"';b.onload='"'+lc+'"';
var k;d=a.document;e=b.id;for(f=0;!e||d.getElementById(e);)e="aswift_"+f++;b.id=e;b.name=e;f=g.google_ad_width;h=g.google_ad_height;e=["<iframe"];for(k in b)b.hasOwnProperty(k)&&zb(e,k+"="+b[k]);e.push('style="left:0;position:absolute;top:0;"');e.push("></iframe>");k=b.id;f="border:none;height:"+h+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+f+"px;background-color:transparent";d.write(['<ins id="',k+"_expand",'" style="display:inline-table;',f,'"><ins id="',k+"_anchor",'" style="display:block;',
f,'">',e.join(" "),"</ins></ins>"].join(""));k=b.id;Bc(a,g);var b=Sb(g),l;a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var m=encodeURIComponent(window.JSON.stringify(g)),p;if(Lb)p=n.btoa(m);else{d=[];for(f=e=0;f<m.length;f++){for(var q=m.charCodeAt(f);255<q;)d[e++]=q&255,q>>=8;d[e++]=q}if(!S)for(S={},m=0;65>m;m++)S[m]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(m);m=S;q=[];for(e=0;e<d.length;e+=3){var v=d[e],t=e+1<d.length,y=t?d[e+1]:0,w=
e+2<d.length,M=w?d[e+2]:0;f=v>>2;h=(v&3)<<4|y>>4;var rb=(y&15)<<2|M>>6,sb=M&63;w||(sb=64,t||(rb=64));q.push(m[f],m[h],m[rb],m[sb])}p=q.join("")}l=p;break a}}catch(Cc){G.j("sblob",Cc,void 0,void 0)}l=""}p=Ac(g.google_ad_client);v=(new Date).getTime();l=["<!doctype html><html><body>",p,"<",c,">",b,"google_show_ads_impl=true;google_unique_id=",Bb(a),';google_async_iframe_id="',k,'";google_start_time=',u,";",l?'google_pub_vars = "'+l+'";':"","google_bpp=",v>u?v-u:1,";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",
c,">",xc(),"</body></html>"].join("");(a.document.getElementById(k)?sc:tc)(yc(a,k,l,!0))}});}).call(this);
