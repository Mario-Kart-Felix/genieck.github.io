/* globals related_posts_js_options */
!function(t){var e={response:null,getEndpointURL:function(e){var s,a="undefined"!=typeof wp&&wp.customize&&wp.customize.settings&&wp.customize.settings.url&&wp.customize.settings.url.self;a?(s=document.createElement("a")).href=wp.customize.settings.url.self:s=document.location,"string"==typeof e&&e.match(/^https?:\/\//)&&((s=document.createElement("a")).href=e);var o="relatedposts=1";t("#jp-relatedposts").data("exclude")&&(o+="&relatedposts_exclude="+t("#jp-relatedposts").data("exclude")),a&&(o+="&jetpackrpcustomize=1");var p=s.pathname;return"/"!==p[0]&&(p="/"+p),""===s.search?p+"?"+o:p+s.search+"&"+o},getAnchor:function(e,s){var a=e.title;""!=""+e.excerpt&&(a+="\n\n"+e.excerpt);var o=t("<a>");o.attr({class:s,href:e.url,title:a,"data-origin":e.url_meta.origin,"data-position":e.url_meta.position}),""!==e.rel&&o.attr({rel:e.rel});var p=t("<div>").append(o).html();return[p.substring(0,p.length-4),"</a>"]},generateMinimalHtml:function(e,s){var a=this,o="";return t.each(e,function(t,e){var p=a.getAnchor(e,"jp-relatedposts-post-a"),r="jp-relatedposts-post jp-relatedposts-post"+t;e.classes.length>0&&(r+=" "+e.classes.join(" ")),o+='<p class="'+r+'" data-post-id="'+e.id+'" data-post-format="'+e.format+'">',o+='<span class="jp-relatedposts-post-title">'+p[0]+e.title+p[1]+"</span>",s.showDate&&(o+='<span class="jp-relatedposts-post-date">'+e.date+"</span>"),s.showContext&&(o+='<span class="jp-relatedposts-post-context">'+e.context+"</span>"),o+="</p>"}),'<div class="jp-relatedposts-items jp-relatedposts-items-minimal jp-relatedposts-'+s.layout+' ">'+o+"</div>"},generateVisualHtml:function(e,s){var a=this,o="";return t.each(e,function(e,p){var r=a.getAnchor(p,"jp-relatedposts-post-a"),i="jp-relatedposts-post jp-relatedposts-post"+e;if(p.classes.length>0&&(i+=" "+p.classes.join(" ")),p.img.src?i+=" jp-relatedposts-post-thumbs":i+=" jp-relatedposts-post-nothumbs",o+='<div class="'+i+'" data-post-id="'+p.id+'" data-post-format="'+p.format+'">',p.img.src)o+=r[0]+'<img class="jp-relatedposts-post-img" src="'+p.img.src+'" width="'+p.img.width+'" alt="'+p.title+'" />'+r[1];else{var n=a.getAnchor(p,"jp-relatedposts-post-a jp-relatedposts-post-aoverlay");o+=n[0]+n[1]}o+="<"+related_posts_js_options.post_heading+' class="jp-relatedposts-post-title">'+r[0]+p.title+r[1]+"</"+related_posts_js_options.post_heading+">",o+='<p class="jp-relatedposts-post-excerpt">'+t("<p>").text(p.excerpt).html()+"</p>",s.showDate&&(o+='<p class="jp-relatedposts-post-date">'+p.date+"</p>"),s.showContext&&(o+='<p class="jp-relatedposts-post-context">'+p.context+"</p>"),o+="</div>"}),'<div class="jp-relatedposts-items jp-relatedposts-items-visual jp-relatedposts-'+s.layout+' ">'+o+"</div>"},setVisualExcerptHeights:function(){var e=t("#jp-relatedposts .jp-relatedposts-post-nothumbs .jp-relatedposts-post-excerpt");if(!(0>=e.length)){var s=parseInt(e.first().css("font-size"),10),a=parseInt(e.first().css("line-height"),10);e.css("max-height",5*a/s+"em")}},getTrackedUrl:function(e){var s="relatedposts_hit=1";s+="&relatedposts_origin="+t(e).data("origin"),s+="&relatedposts_position="+t(e).data("position");var a=e.pathname;return"/"!==a[0]&&(a="/"+a),""===e.search?a+"?"+s:a+e.search+"&"+s},cleanupTrackedUrl:function(){if("function"==typeof history.replaceState){var t=document.location.search.replace(/\brelatedposts_[a-z]+=[0-9]*&?\b/gi,"");"?"===t&&(t=""),document.location.search!==t&&history.replaceState({},document.title,document.location.pathname+t)}}};function s(){e.setVisualExcerptHeights(),t("#jp-relatedposts a.jp-relatedposts-post-a").click(function(){this.href=e.getTrackedUrl(this)})}function a(){e.cleanupTrackedUrl();var a=e.getEndpointURL(),o=t("#jp-relatedposts");t("#jp-relatedposts .jp-relatedposts-post").length?s():t.getJSON(a,function(t){if(0!==t.items.length&&0!==o.length){e.response=t;var a,p,r={};"undefined"!=typeof wp&&wp.customize?(p=wp.customize.instance("jetpack_relatedposts[show_thumbnails]").get(),r.showDate=wp.customize.instance("jetpack_relatedposts[show_date]").get(),r.showContext=wp.customize.instance("jetpack_relatedposts[show_context]").get(),r.layout=wp.customize.instance("jetpack_relatedposts[layout]").get()):(p=t.show_thumbnails,r.showDate=t.show_date,r.showContext=t.show_context,r.layout=t.layout),a=p?e.generateVisualHtml(t.items,r):e.generateMinimalHtml(t.items,r),o.append(a),r.showDate&&o.find(".jp-relatedposts-post-date").show(),o.show(),s()}})}t(function(){"undefined"!=typeof wp&&wp.customize?(wp.customize.selectiveRefresh&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(t){"jetpack_relatedposts"===t.partial.id&&a()}),wp.customize.bind("preview-ready",a)):a()})}(jQuery);
;var ExactMetrics=function(){var t=[],a='';this.setLastClicked=function(e,n,i){e=typeof e!=='undefined'?e:[];n=typeof n!=='undefined'?n:[];i=typeof i!=='undefined'?i:!1;t.valuesArray=e;t.fieldsArray=n};this.getLastClicked=function(){return t};this.setInternalAsOutboundCategory=function(e){a=e};this.getInternalAsOutboundCategory=function(){return a};this.sendEvent=function(t){e([],t)};function s(){if(window.exactmetrics_debug_mode){return!0}
else{return!1}};function e(e,n){e=typeof e!=='undefined'?e:[];n=typeof n!=='undefined'?n:{};__gaTracker('send',n);t.valuesArray=e;t.fieldsArray=n;t.tracked=!0;i('Tracked: '+e.type);i(t)};function n(e){e=typeof e!=='undefined'?e:[];t.valuesArray=e;t.fieldsArray=[];t.tracked=!1;i('Not Tracked: '+e.exit);i(t)};function i(e){if(s()){console.dir(e)}};function o(e){return e.replace(/^\s+|\s+$/gm,'')};function f(){var n=0,e=document.domain,i=e.split('.'),t='_gd'+(new Date()).getTime();while(n<(i.length-1)&&document.cookie.indexOf(t+'='+t)==-1){e=i.slice(-1-(++n)).join('.');document.cookie=t+'='+t+';domain='+e+';'};document.cookie=t+'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain='+e+';';return e};function u(e){e=e.toString();e=e.substring(0,(e.indexOf('#')==-1)?e.length:e.indexOf('#'));e=e.substring(0,(e.indexOf('?')==-1)?e.length:e.indexOf('?'));e=e.substring(e.lastIndexOf('/')+1,e.length);if(e.length>0&&e.indexOf('.')!==-1){e=e.substring(e.indexOf('.')+1);return e}
else{return''}};function h(){return typeof(__gaTracker)!=='undefined'&&__gaTracker&&__gaTracker.hasOwnProperty('loaded')&&__gaTracker.loaded==!0};function y(e){return e.which==1||e.which==2||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey};function c(){var e=[];if(typeof exactmetrics_frontend.download_extensions=='string'){e=exactmetrics_frontend.download_extensions.split(',')};return e};function d(){var e=[];if(typeof exactmetrics_frontend.inbound_paths=='string'){e=JSON.parse(exactmetrics_frontend.inbound_paths)};return e};function b(e){if(e.which==1){return'event.which=1'}
else if(e.which==2){return'event.which=2'}
else if(e.metaKey){return'metaKey'}
else if(e.ctrlKey){return'ctrlKey'}
else if(e.shiftKey){return'shiftKey'}
else if(e.altKey){return'altKey'}
else{return''}};function m(e){var h=c(),i=d(),t='unknown',g=e.href,p=u(e.href),v=f(),l=e.hostname,r=e.protocol,y=e.pathname;g=g.toString();var s,b,m=e.getAttribute('data-vars-ga-category');if(m){return m};if(g.match(/^javascript\:/i)){t='internal'}
else if(r&&r.length>0&&(o(r)=='tel'||o(r)=='tel:')){t='tel'}
else if(r&&r.length>0&&(o(r)=='mailto'||o(r)=='mailto:')){t='mailto'}
else if(l&&v&&l.length>0&&v.length>0&&!l.endsWith('.'+v)&&l!==v){t='external'}
else if(y&&JSON.stringify(i)!='{}'&&y.length>0){var w=i.length;for(var n=0;n<w;n++){if(i[n].path&&i[n].label&&i[n].path.length>0&&i[n].label.length>0&&y.startsWith(i[n].path)){t='internal-as-outbound';a='outbound-link-'+i[n].label;break}}}
else if(l&&window.exactmetrics_experimental_mode&&l.length>0&&document.domain.length>0&&l!==document.domain){t='cross-hostname'};if(p&&(t==='unknown'||'external'===t)&&h.length>0&&p.length>0){for(s=0,b=h.length;s<b;++s){if(h[s].length>0&&(g.endsWith(h[s])||h[s]==p)){t='download';break}}};if(t==='unknown'){t='internal'};return t};function w(e,t){var n=(e.target&&!e.target.match(/^_(self|parent|top)$/i))?e.target:!1;if(t.ctrlKey||t.shiftKey||t.metaKey||t.which==2){n='_blank'};return n};function g(e){if(e.getAttribute('data-vars-ga-label')&&e.getAttribute('data-vars-ga-label').replace(/\n/ig,'')){return e.getAttribute('data-vars-ga-label').replace(/\n/ig,'')}
else if(e.title&&e.title.replace(/\n/ig,'')){return e.title.replace(/\n/ig,'')}
else if(e.innerText&&e.innerText.replace(/\n/ig,'')){return e.innerText.replace(/\n/ig,'')}
else if(e.getAttribute('aria-label')&&e.getAttribute('aria-label').replace(/\n/ig,'')){return e.getAttribute('aria-label').replace(/\n/ig,'')}
else if(e.alt&&e.alt.replace(/\n/ig,'')){return e.alt.replace(/\n/ig,'')}
else if(e.textContent&&e.textContent.replace(/\n/ig,'')){return e.textContent.replace(/\n/ig,'')}
else{return undefined}};function x(e){var i=e.children,a=0,r,n;for(var t=0;t<i.length;t++){r=i[t];n=g(r);if(n){return n};if(a==99){return undefined};a++};return undefined};function v(i){var o=i.srcElement||i.target,t=[],l;t.el=o;t.ga_loaded=h();t.click_type=b(i);if(!h()||!y(i)){t.exit='loaded';n(t);return}
while(o&&(typeof o.tagName=='undefined'||o.tagName.toLowerCase()!='a'||!o.href)){o=o.parentNode};if(o&&o.href&&!o.hasAttribute('xlink:href')){var v=o.href,E=u(o.href),D=c(),I=d(),M=exactmetrics_frontend.home_url,S=f(),r=m(o),C=w(o,i),p=o.getAttribute('data-vars-ga-action'),k=o.getAttribute('data-vars-ga-label');t.el=o;t.el_href=o.href;t.el_protocol=o.protocol;t.el_hostname=o.hostname;t.el_port=o.port;t.el_pathname=o.pathname;t.el_search=o.search;t.el_hash=o.hash;t.el_host=o.host;t.debug_mode=s();t.download_extensions=D;t.inbound_paths=I;t.home_url=M;t.link=v;t.extension=E;t.type=r;t.target=C;t.title=g(o);if(!t.label&&!t.title){t.title=x(o)};if(r!=='internal'&&r!=='javascript'){var A=!1,T=function(){if(A){return};A=!0;window.location.href=v},L=function(){t.exit='external';n(t)},O=function(){t.exit='internal-as-outbound';n(t)},K=function(){t.exit='cross-hostname';n(t)};if(C||r=='mailto'||r=='tel'){if(r=='download'){l={hitType:'event',eventCategory:'download',eventAction:p||v,eventLabel:k||t.title,};e(t,l)}
else if(r=='tel'){l={hitType:'event',eventCategory:'tel',eventAction:p||v,eventLabel:k||t.title.replace('tel:',''),};e(t,l)}
else if(r=='mailto'){l={hitType:'event',eventCategory:'mailto',eventAction:p||v,eventLabel:k||t.title.replace('mailto:',''),};e(t,l)}
else if(r=='internal-as-outbound'){l={hitType:'event',eventCategory:a,eventAction:p||v,eventLabel:k||t.title,};e(t,l)}
else if(r=='external'){l={hitType:'event',eventCategory:'outbound-link',eventAction:p||v,eventLabel:k||t.title,};e(t,l)}
else if(r=='cross-hostname'){l={hitType:'event',eventCategory:'cross-hostname',eventAction:p||v,eventLabel:k||t.title,};e(t,l)}
else{if(r&&r!='internal'){l={hitType:'event',eventCategory:r,eventAction:p||v,eventLabel:k||t.title,};e(t,l)}
else{t.exit='type';n(t)}}}
else{if(r!='cross-hostname'&&r!='external'&&r!='internal-as-outbound'){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}}};if(r=='download'){l={hitType:'event',eventCategory:'download',eventAction:p||v,eventLabel:k||t.title,hitCallback:T,};e(t,l)}
else if(r=='internal-as-outbound'){window.onbeforeunload=function(n){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}};l={hitType:'event',eventCategory:a,eventAction:p||v,eventLabel:k||t.title,hitCallback:T,};if(navigator.sendBeacon){l.transport='beacon'};e(t,l);setTimeout(T,1000)}}
else if(r=='external'){window.onbeforeunload=function(n){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}};l={hitType:'event',eventCategory:'outbound-link',eventAction:p||v,eventLabel:k||t.title,hitCallback:T,};if(navigator.sendBeacon){l.transport='beacon'};e(t,l);setTimeout(T,1000)}}
else if(r=='cross-hostname'){window.onbeforeunload=function(n){if(!i.defaultPrevented){if(i.preventDefault){i.preventDefault()}
else{i.returnValue=!1}};l={hitType:'event',eventCategory:'cross-hostname',eventAction:p||v,eventLabel:k||t.title,hitCallback:T,};if(navigator.sendBeacon){l.transport='beacon'};e(t,l);setTimeout(T,1000)}}
else{if(r&&r!=='internal'){l={hitType:'event',eventCategory:r,eventAction:p||v,eventLabel:k||t.title,hitCallback:T,};e(t,l)}
else{t.exit='type';n(t)}};if(r!='external'&&r!='cross-hostname'&&r!='internal-as-outbound'){setTimeout(T,1000)}
else{if(r=='external'){setTimeout(L,1100)}
else if(r=='cross-hostname'){setTimeout(K,1100)}
else{setTimeout(O,1100)}}}}
else{t.exit='internal';n(t)}}
else{t.exit='notlink';n(t)}};var l=window.location.hash;function p(){if(exactmetrics_frontend.hash_tracking==='true'&&l!=window.location.hash){l=window.location.hash;__gaTracker('set','page',location.pathname+location.search+location.hash);__gaTracker('send','pageview');i('Hash change to: '+location.pathname+location.search+location.hash)}
else{i('Hash change to (untracked): '+location.pathname+location.search+location.hash)}};var r=window;if(r.addEventListener){r.addEventListener('load',function(){document.body.addEventListener('click',v,!1)},!1);window.addEventListener('hashchange',p,!1)}
else{if(r.attachEvent){r.attachEvent('onload',function(){document.body.attachEvent('onclick',v)});window.attachEvent('onhashchange',p)}};if(typeof String.prototype.endsWith!=='function'){String.prototype.endsWith=function(e){return this.indexOf(e,this.length-e.length)!==-1}};if(typeof String.prototype.startsWith!=='function'){String.prototype.startsWith=function(e){return this.indexOf(e)===0}};if(typeof Array.prototype.lastIndexOf!=='function'){Array.prototype.lastIndexOf=function(e){'use strict';if(this===void 0||this===null){throw new TypeError()};var t,n,a=Object(this),i=a.length>>>0;if(i===0){return-1};t=i-1;if(arguments.length>1){t=Number(arguments[1]);if(t!=t){t=0}
else if(t!=0&&t!=(1/0)&&t!=-(1/0)){t=(t>0||-1)*Math.floor(Math.abs(t))}};for(n=t>=0?Math.min(t,i-1):i-Math.abs(t);n>=0;n--){if(n in a&&a[n]===e){return n}};return-1}}},ExactMetricsObject=new ExactMetrics();

!function(){function t(){if(this.complete){var e=this.getAttribute("data-lazy-src");if(e&&this.src!==e)this.addEventListener("onload",t);else{var d=this.width,n=this.height;d&&d>0&&n&&n>0&&(this.setAttribute("width",d),this.setAttribute("height",n),i(this))}}else this.addEventListener("onload",t)}var e=function(){for(var e=document.querySelectorAll("img[data-recalc-dims]"),i=0;i<e.length;i++)t.call(e[i])},i=function(t){t.removeAttribute("data-recalc-dims"),t.removeAttribute("scale")};"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()),document.body.addEventListener("is.post-load",e)}();
(function(){var isWebkit=navigator.userAgent.toLowerCase().indexOf('webkit')>-1,isOpera=navigator.userAgent.toLowerCase().indexOf('opera')>-1,isIE=navigator.userAgent.toLowerCase().indexOf('msie')>-1;if((isWebkit||isOpera||isIE)&&document.getElementById&&window.addEventListener){window.addEventListener('hashchange',function(){var id=location.hash.substring(1),element;if(!(/^[A-z0-9_-]+$/.test(id))){return;}
element=document.getElementById(id);if(element){if(!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))){element.tabIndex=-1;}
element.focus();window.scrollBy(0,-53);}},false);}})();
/*! This file is auto-generated */
window.addComment=function(s){var u,f,v,y=s.document,p={commentReplyClass:"comment-reply-link",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=s.MutationObserver||s.WebKitMutationObserver||s.MozMutationObserver,i="querySelector"in y&&"addEventListener"in s,n=!!y.documentElement.dataset;function t(){r(),function(){if(!e)return;new e(d).observe(y.body,{childList:!0,subtree:!0})}()}function r(e){if(i&&(u=I(p.cancelReplyId),f=I(p.commentFormId),u)){u.addEventListener("touchstart",a),u.addEventListener("click",a);var t=function(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return f.removeEventListener("keydown",t),e.preventDefault(),f.submit.click(),!1};f&&f.addEventListener("keydown",t);for(var n,r=function(e){var t,n=p.commentReplyClass;e&&e.childNodes||(e=y);t=y.getElementsByClassName?e.getElementsByClassName(n):e.querySelectorAll("."+n);return t}(e),d=0,o=r.length;d<o;d++)(n=r[d]).addEventListener("touchstart",l),n.addEventListener("click",l)}}function a(e){var t=I(p.temporaryFormId);t&&v&&(I(p.parentIdFieldId).value="0",t.parentNode.replaceChild(v,t),this.style.display="none",e.preventDefault())}function l(e){var t=this,n=m(t,"belowelement"),r=m(t,"commentid"),d=m(t,"respondelement"),o=m(t,"postid");n&&r&&d&&o&&!1===s.addComment.moveForm(n,r,d,o)&&e.preventDefault()}function d(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void r()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function I(e){return y.getElementById(e)}return i&&"loading"!==y.readyState?t():i&&s.addEventListener("DOMContentLoaded",t,!1),{init:r,moveForm:function(e,t,n,r){var d=I(e);v=I(n);var o,i,a,l=I(p.parentIdFieldId),m=I(p.postIdFieldId);if(d&&v&&l){!function(e){var t=p.temporaryFormId,n=I(t);if(n)return;(n=y.createElement("div")).id=t,n.style.display="none",e.parentNode.insertBefore(n,e)}(v),r&&m&&(m.value=r),l.value=t,u.style.display="",d.parentNode.insertBefore(v,d.nextSibling),u.onclick=function(){return!1};try{for(var c=0;c<f.elements.length;c++)if(o=f.elements[c],i=!1,"getComputedStyle"in s?a=s.getComputedStyle(o):y.documentElement.currentStyle&&(a=o.currentStyle),(o.offsetWidth<=0&&o.offsetHeight<=0||"hidden"===a.visibility)&&(i=!0),"hidden"!==o.type&&!o.disabled&&!i){o.focus();break}}catch(e){}return!1}}}}(window);
(function($){var body,masthead,menuToggle,siteNavigation,socialNavigation,siteHeaderMenu,resizeTimer;function initMainNavigation(container){var dropdownToggle=$('<button />',{'class':'dropdown-toggle','aria-expanded':false}).append($('<span />',{'class':'screen-reader-text',text:screenReaderText.expand}));container.find('.menu-item-has-children > a').after(dropdownToggle);container.find('.current-menu-ancestor > button').addClass('toggled-on');container.find('.current-menu-ancestor > .sub-menu').addClass('toggled-on');container.find('.menu-item-has-children').attr('aria-haspopup','true');container.find('.dropdown-toggle').click(function(e){var _this=$(this),screenReaderSpan=_this.find('.screen-reader-text');e.preventDefault();_this.toggleClass('toggled-on');_this.next('.children, .sub-menu').toggleClass('toggled-on');_this.attr('aria-expanded',_this.attr('aria-expanded')==='false'?'true':'false');screenReaderSpan.text(screenReaderSpan.text()===screenReaderText.expand?screenReaderText.collapse:screenReaderText.expand);});}
initMainNavigation($('.main-navigation'));masthead=$('#masthead');menuToggle=masthead.find('#menu-toggle');siteHeaderMenu=masthead.find('#site-header-menu');siteNavigation=masthead.find('#site-navigation');socialNavigation=masthead.find('#social-navigation');(function(){if(!menuToggle.length){return;}
menuToggle.add(siteNavigation).add(socialNavigation).attr('aria-expanded','false');menuToggle.on('click.twentysixteen',function(){$(this).add(siteHeaderMenu).toggleClass('toggled-on');$(this).add(siteNavigation).add(socialNavigation).attr('aria-expanded',$(this).add(siteNavigation).add(socialNavigation).attr('aria-expanded')==='false'?'true':'false');});})();(function(){if(!siteNavigation.length||!siteNavigation.children().length){return;}
function toggleFocusClassTouchScreen(){if(window.innerWidth>=910){$(document.body).on('touchstart.twentysixteen',function(e){if(!$(e.target).closest('.main-navigation li').length){$('.main-navigation li').removeClass('focus');}});siteNavigation.find('.menu-item-has-children > a').on('touchstart.twentysixteen',function(e){var el=$(this).parent('li');if(!el.hasClass('focus')){e.preventDefault();el.toggleClass('focus');el.siblings('.focus').removeClass('focus');}});}else{siteNavigation.find('.menu-item-has-children > a').unbind('touchstart.twentysixteen');}}
if('ontouchstart'in window){$(window).on('resize.twentysixteen',toggleFocusClassTouchScreen);toggleFocusClassTouchScreen();}
siteNavigation.find('a').on('focus.twentysixteen blur.twentysixteen',function(){$(this).parents('.menu-item').toggleClass('focus');});})();function onResizeARIA(){if(window.innerWidth<910){if(menuToggle.hasClass('toggled-on')){menuToggle.attr('aria-expanded','true');}else{menuToggle.attr('aria-expanded','false');}
if(siteHeaderMenu.hasClass('toggled-on')){siteNavigation.attr('aria-expanded','true');socialNavigation.attr('aria-expanded','true');}else{siteNavigation.attr('aria-expanded','false');socialNavigation.attr('aria-expanded','false');}
menuToggle.attr('aria-controls','site-navigation social-navigation');}else{menuToggle.removeAttr('aria-expanded');siteNavigation.removeAttr('aria-expanded');socialNavigation.removeAttr('aria-expanded');menuToggle.removeAttr('aria-controls');}}
function belowEntryMetaClass(param){if(body.hasClass('page')||body.hasClass('search')||body.hasClass('single-attachment')||body.hasClass('error404')){return;}
$('.entry-content').find(param).each(function(){var element=$(this),elementPos=element.offset(),elementPosTop=elementPos.top,entryFooter=element.closest('article').find('.entry-footer'),entryFooterPos=entryFooter.offset(),entryFooterPosBottom=entryFooterPos.top+(entryFooter.height()+28),caption=element.closest('figure'),figcaption=element.next('figcaption'),newImg;if(elementPosTop>entryFooterPosBottom){if('img.size-full'===param||'.wp-block-image img'===param){newImg=new Image();newImg.src=element.attr('src');$(newImg).on('load.twentysixteen',function(){if(newImg.width>=840){if('.wp-block-image img'===param&&element.is('[width]')&&element.attr('width')<840){return;}
element.addClass('below-entry-meta');if(caption.hasClass('wp-caption')){caption.addClass('below-entry-meta');caption.removeAttr('style');}
if(figcaption){figcaption.addClass('below-entry-meta');}}});}else{element.addClass('below-entry-meta');}}else{element.removeClass('below-entry-meta');caption.removeClass('below-entry-meta');}});}
$(document).ready(function(){body=$(document.body);$(window).on('load.twentysixteen',onResizeARIA).on('resize.twentysixteen',function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){belowEntryMetaClass('img.size-full');belowEntryMetaClass('blockquote.alignleft, blockquote.alignright');belowEntryMetaClass('.wp-block-image img');},300);onResizeARIA();});belowEntryMetaClass('img.size-full');belowEntryMetaClass('blockquote.alignleft, blockquote.alignright');belowEntryMetaClass('.wp-block-image img');});})(jQuery);
/*! This file is auto-generated */
!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);
!function(t){function a(){t(".jetpack-video-wrapper").find("embed, iframe, object").each(function(){var a,e,i,r,h,d,o;a=t(this),d=0,"center"===a.parents(".jetpack-video-wrapper").prev("p").css("text-align")&&(d="0 auto"),a.attr("data-ratio")||a.attr("data-ratio",this.height/this.width).attr("data-width",this.width).attr("data-height",this.height).css({display:"block",margin:d}),e=a.attr("data-width"),i=a.attr("data-height"),r=a.attr("data-ratio"),h=a.parent(),o=h.width(),"Infinity"===r&&(e="100%"),a.removeAttr("height").removeAttr("width"),e>o?a.width(o).height(o*r):a.width(e).height(i)})}var e;t(document).ready(function(){t(window).on("load.jetpack",a).on("resize.jetpack",function(){clearTimeout(e),e=setTimeout(a,500)}).on("post-load.jetpack",a).resize()})}(jQuery);
var ak_js=document.getElementById("ak_js");if(!ak_js){ak_js=document.createElement('input');ak_js.setAttribute('id','ak_js');ak_js.setAttribute('name','ak_js');ak_js.setAttribute('type','hidden');}
else{ak_js.parentNode.removeChild(ak_js);}
ak_js.setAttribute('value',(new Date()).getTime());var commentForm=document.getElementById('commentform');if(commentForm){commentForm.appendChild(ak_js);}
else{var replyRowContainer=document.getElementById('replyrow');if(replyRowContainer){var children=replyRowContainer.getElementsByTagName('td');if(children.length>0){children[0].appendChild(ak_js);}}};

/* global WPCOM_sharing_counts, grecaptcha */
var sharing_js_options;if(sharing_js_options&&sharing_js_options.counts)var WPCOMSharing={done_urls:[],get_counts:function(){var t,e,i,n,a;if("undefined"!=typeof WPCOM_sharing_counts)for(t in WPCOM_sharing_counts)if(i=WPCOM_sharing_counts[t],void 0===WPCOMSharing.done_urls[i]){for(n in e={pinterest:[window.location.protocol+"//api.pinterest.com/v1/urls/count.json?callback=WPCOMSharing.update_pinterest_count&url="+encodeURIComponent(t)],facebook:[window.location.protocol+"//graph.facebook.com/?callback=WPCOMSharing.update_facebook_count&ids="+encodeURIComponent(t)]})if(jQuery("a[data-shared=sharing-"+n+"-"+i+"]").length){for(;a=e[n].pop();)jQuery.getScript(a);sharing_js_options.is_stats_active&&WPCOMSharing.bump_sharing_count_stat(n)}WPCOMSharing.done_urls[i]=!0}},get_permalink:function(t){return t="https:"===window.location.protocol?t.replace(/^http:\/\//i,"https://"):t.replace(/^https:\/\//i,"http://")},update_facebook_count:function(t){var e,i;if(t)for(e in t)t.hasOwnProperty(e)&&t[e].share&&t[e].share.share_count&&(i=WPCOMSharing.get_permalink(e))in WPCOM_sharing_counts&&WPCOMSharing.inject_share_count("sharing-facebook-"+WPCOM_sharing_counts[i],t[e].share.share_count)},update_pinterest_count:function(t){void 0!==t.count&&1*t.count>0&&WPCOMSharing.inject_share_count("sharing-pinterest-"+WPCOM_sharing_counts[t.url],t.count)},inject_share_count:function(t,e){var i=jQuery("a[data-shared="+t+"] > span");i.find(".share-count").remove(),i.append('<span class="share-count">'+WPCOMSharing.format_count(e)+"</span>")},format_count:function(t){return t<1e3?t:t>=1e3&&t<1e4?String(t).substring(0,1)+"K+":"10K+"},bump_sharing_count_stat:function(t){(new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv&x_sharing-count-request="+t+"&r="+Math.random()}};!function(t){var e,i;function n(){var e;void 0!==WPCOMSharing&&WPCOMSharing.get_counts(),(e=t(".sharedaddy a.sharing-anchor")).click(function(){return!1}),t(".sharedaddy a").each(function(){t(this).attr("href")&&-1!==t(this).attr("href").indexOf("share=")&&t(this).attr("href",t(this).attr("href")+"&nb=1")}),e.on("click",function(){var e=t(this),n=e.parents("div:first").find(".inner");n.is(":animated")||!0!==n.data("justSlid")&&(i.slideUp(200),n.css({left:e.position().left+"px",top:e.position().top+e.height()+3+"px"}).slideToggle(200))}),void 0===document.ontouchstart?e.hover(function(){var e,n=t(this),a=n.parents("div:first").find(".inner");a.is(":animated")||(e=setTimeout(function(){var t,e,r,o,s;i.slideUp(200),a.data("justSlid",!0),a.css({left:n.position().left+"px",top:n.position().top+n.height()+3+"px"}).slideDown(200,function(){n.data("hasoriginal",!0).data("hasitem",!1),setTimeout(function(){a.data("justSlid",!1)},300),a.mouseleave(t).mouseenter(e),n.mouseleave(r).mouseenter(o)}),t=function(){if(n.data("hasitem",!1),!1===n.data("hasoriginal")){var t=setTimeout(s,800);n.data("timer2",t)}},e=function(){n.data("hasitem",!0),clearTimeout(n.data("timer2"))},r=function(){if(n.data("hasoriginal",!1),!1===n.data("hasitem")){var t=setTimeout(s,800);n.data("timer2",t)}},o=function(){n.data("hasoriginal",!0),clearTimeout(n.data("timer2"))},s=function(){return a.data("justSlid",!0),a.slideUp(200,function(){setTimeout(function(){a.data("justSlid",!1)},300)}),n.unbind("mouseleave",r).unbind("mouseenter",o),a.unbind("mouseleave",t).unbind("mouseenter",t),!1}},200),n.data("timer",e))},function(){e.each(function(){clearTimeout(t(this).data("timer"))}),e.data("timer",!1)}):t(document.body).addClass("jp-sharing-input-touch"),t(document).click(function(){e.each(function(){clearTimeout(t(this).data("timer"))}),e.data("timer",!1),t(".sharedaddy .inner").slideUp()}),t(".sharedaddy ul").each(function(){if("yep"!==t(this).data("has-click-events")){t(this).data("has-click-events","yep");t(this).find("a.share-print").click(function(){var e=t(this).attr("href"),i=function(){if(-1===e.indexOf("#print")){var i=(new Date).getTime();n=i,a=e,t("body:first").append('<iframe style="position:fixed;top:100;left:100;height:1px;width:1px;border:none;" id="printFrame-'+n+'" name="printFrame-'+n+'" src="'+a+'" onload="frames[\'printFrame-'+n+"'].focus();frames['printFrame-"+n+"'].print();\"></iframe>")}else print();var n,a};return t(this).parents(".sharing-hidden").length>0?t(this).parents(".inner").slideUp(0,function(){i()}):i(),!1}),t(this).find("a.share-press-this").click(function(){var e="";return window.getSelection?e=window.getSelection():document.getSelection?e=document.getSelection():document.selection&&(e=document.selection.createRange().text),e&&t(this).attr("href",t(this).attr("href")+"&sel="+encodeURI(e)),window.open(t(this).attr("href"),"t","toolbar=0,resizable=1,scrollbars=1,status=1,width=720,height=570")||(document.location.href=t(this).attr("href")),!1}),t("a.share-email",this).on("click",function(){var e=t(this).attr("href"),n=window.location.protocol+"//"+window.location.hostname+"/";return 0!==e.indexOf(n)||(i.is(":visible")?i.slideUp(200):(t(".sharedaddy .inner").slideUp(),t("#sharing_email .response").remove(),t("#sharing_email form").show(),t("#sharing_email form input[type=submit]").removeAttr("disabled"),t("#sharing_email form a.sharing_cancel").show(),"object"==typeof grecaptcha&&"function"==typeof grecaptcha.reset&&window.___grecaptcha_cfg.count&&grecaptcha.reset(),i.css({left:t(this).offset().left+"px",top:t(this).offset().top+t(this).height()+"px"}).slideDown(200),t("#sharing_email a.sharing_cancel").unbind("click").click(function(){return t("#sharing_email .errors").hide(),i.slideUp(200),t("#sharing_background").fadeOut(),!1}),t("#sharing_email input[type=submit]").unbind("click").click(function(){var n=t(this).parents("form"),a=n.find("input[name=source_email]"),r=n.find("input[name=target_email]");return t(this).prop("disabled",!0),n.find("a.sharing_cancel").hide(),n.find("img.loading").show(),t("#sharing_email .errors").hide(),t("#sharing_email .error").removeClass("error"),a.share_is_email()||a.addClass("error"),r.share_is_email()||r.addClass("error"),0===t("#sharing_email .error").length?(t.ajax({url:e,type:"POST",data:n.serialize(),success:function(e){n.find("img.loading").hide(),"1"===e||"2"===e||"3"===e?(t("#sharing_email .errors-"+e).show(),n.find("input[type=submit]").removeAttr("disabled"),n.find("a.sharing_cancel").show(),"object"==typeof grecaptcha&&"function"==typeof grecaptcha.reset&&grecaptcha.reset()):(t("#sharing_email form").hide(),i.append(e),t("#sharing_email a.sharing_cancel").click(function(){return i.slideUp(200),t("#sharing_background").fadeOut(),!1}))}}),!1):(n.find("img.loading").hide(),n.find("input[type=submit]").removeAttr("disabled"),n.find("a.sharing_cancel").show(),t("#sharing_email .errors-1").show(),!1)})),!1)})}}),t("li.share-email, li.share-custom a.sharing-anchor").addClass("share-service-visible")}t.fn.extend({share_is_email:function(){return/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(this.val())}}),e=t(document.body).on("post-load",n),t(document).ready(function(){i=t("#sharing_email"),e.append(i),n()})}(jQuery);