(window.webpackJsonp=window.webpackJsonp||[]).push([["adManager~ads~errorPage~featuredPermalinkPage~permalinkPage~permalinkPageIdle~profilePage~searchPage~eddff6ed"],{K1a4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isBulbsLoaded=function(){return Boolean(window.BULBS_ELEMENTS_ADS_MANAGER)},e.isAdEnabled=o,e.loadAd=r,e.setBulbsDynamicAdWaypoints=function(){if(!window.BULBS_ELEMENTS_ADS_MANAGER||!window.BULBS_ELEMENTS_ADS_MANAGER.adUnits)return console.warn("Bulbs was called before it initialized."),void(window.performance&&window.performance.mark("frontend.bulbs.manager.call_before_init"));var t=document.getElementsByClassName("dfp");Array.prototype.forEach.call(t,function(t){if(o(t)&&!function(t){var e=window.BULBS_ELEMENTS_ADS_MANAGER.adUnits.units[t.dataset.adUnit];return e&&e.eagerLoad}(t))var e=new Waypoint({element:t,handler:function(n){"down"===n&&(r(t),e.destroy())},offset:(0,i.isMobileLike)()?"200%":"150%"})})};var i=n("qTee");function o(t){var e=t.dataset.adUnit;return!!e&&!!window.BULBS_ELEMENTS_ADS_MANAGER.adUnits.units[e]}function r(t){if(!window.BULBS_ELEMENTS_ADS_MANAGER||!window.BULBS_ELEMENTS_ADS_MANAGER.adUnits)return console.warn("Bulbs was called before it initialized."),void(window.performance&&window.performance.mark("frontend.bulbs.manager.call_before_init"));t&&(window.BULBS_ELEMENTS_ADS_MANAGER.loadAds(t),window.BULBS_ELEMENTS_ADS_MANAGER.asyncRefreshSlot(t))}n("r50x")},r50x:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";var t=0,e={};function n(i){if(!i)throw new Error("No options passed to Waypoint constructor");if(!i.element)throw new Error("No element option passed to Waypoint constructor");if(!i.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+t,this.options=n.Adapter.extend({},n.defaults,i),this.element=this.options.element,this.adapter=new n.Adapter(this.element),this.callback=i.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=n.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=n.Context.findOrCreateByElement(this.options.context),n.offsetAliases[this.options.offset]&&(this.options.offset=n.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),e[this.key]=this,t+=1}n.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},n.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},n.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete e[this.key]},n.prototype.disable=function(){return this.enabled=!1,this},n.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},n.prototype.next=function(){return this.group.next(this)},n.prototype.previous=function(){return this.group.previous(this)},n.invokeAll=function(t){var n=[];for(var i in e)n.push(e[i]);for(var o=0,r=n.length;o<r;o++)n[o][t]()},n.destroyAll=function(){n.invokeAll("destroy")},n.disableAll=function(){n.invokeAll("disable")},n.enableAll=function(){for(var t in n.Context.refreshAll(),e)e[t].enabled=!0;return this},n.refreshAll=function(){n.Context.refreshAll()},n.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},n.viewportWidth=function(){return document.documentElement.clientWidth},n.adapters=[],n.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},n.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=n}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}var e=0,n={},i=window.Waypoint,o=window.onload;function r(t){this.element=t,this.Adapter=i.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+e,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,e+=1,i.windowContext||(i.windowContext=!0,i.windowContext=new r(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}r.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},r.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete n[this.key])},r.prototype.createThrottledResizeHandler=function(){var t=this;function e(){t.handleResize(),t.didResize=!1}this.adapter.on("resize.waypoints",function(){t.didResize||(t.didResize=!0,i.requestAnimationFrame(e))})},r.prototype.createThrottledScrollHandler=function(){var t=this;function e(){t.handleScroll(),t.didScroll=!1}this.adapter.on("scroll.waypoints",function(){t.didScroll&&!i.isTouch||(t.didScroll=!0,i.requestAnimationFrame(e))})},r.prototype.handleResize=function(){i.Context.refreshAll()},r.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var i=e[n],o=i.newScroll>i.oldScroll?i.forward:i.backward;for(var r in this.waypoints[n]){var s=this.waypoints[n][r];if(null!==s.triggerPoint){var a=i.oldScroll<s.triggerPoint,l=i.newScroll>=s.triggerPoint;(a&&l||!a&&!l)&&(s.queueTrigger(o),t[s.group.id]=s.group)}}}for(var h in t)t[h].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},r.prototype.innerHeight=function(){return this.element==this.element.window?i.viewportHeight():this.adapter.innerHeight()},r.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},r.prototype.innerWidth=function(){return this.element==this.element.window?i.viewportWidth():this.adapter.innerWidth()},r.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var i=0,o=t.length;i<o;i++)t[i].destroy()},r.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),o={};for(var r in this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[r];for(var a in this.waypoints[r]){var l,h,d,p,u=this.waypoints[r][a],f=u.options.offset,c=u.triggerPoint,w=0,y=null==c;u.element!==u.element.window&&(w=u.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(u):"string"==typeof f&&(f=parseFloat(f),u.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,u.triggerPoint=Math.floor(w+l-f),h=c<s.oldScroll,d=u.triggerPoint>=s.oldScroll,p=!h&&!d,!y&&(h&&d)?(u.queueTrigger(s.backward),o[u.group.id]=u.group):!y&&p?(u.queueTrigger(s.forward),o[u.group.id]=u.group):y&&s.oldScroll>=u.triggerPoint&&(u.queueTrigger(s.forward),o[u.group.id]=u.group)}}return i.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},r.findOrCreateByElement=function(t){return r.findByElement(t)||new r(t)},r.refreshAll=function(){for(var t in n)n[t].refresh()},r.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){o&&o(),r.refreshAll()},i.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},i.Context=r}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}var n={vertical:{},horizontal:{}},i=window.Waypoint;function o(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}o.prototype.add=function(t){this.waypoints.push(t)},o.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},o.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var i=this.triggerQueues[n],o="up"===n||"left"===n;i.sort(o?e:t);for(var r=0,s=i.length;r<s;r+=1){var a=i[r];(a.options.continuous||r===i.length-1)&&a.trigger([n])}}this.clearTriggerQueues()},o.prototype.next=function(e){this.waypoints.sort(t);var n=i.Adapter.inArray(e,this.waypoints);return n===this.waypoints.length-1?null:this.waypoints[n+1]},o.prototype.previous=function(e){this.waypoints.sort(t);var n=i.Adapter.inArray(e,this.waypoints);return n?this.waypoints[n-1]:null},o.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},o.prototype.remove=function(t){var e=i.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},o.prototype.first=function(){return this.waypoints[0]},o.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},o.findOrCreate=function(t){return n[t.axis][t.name]||new o(t)},i.Group=o}(),function(){"use strict";var t=window.Waypoint;function e(t){return t===t.window}function i(t){return e(t)?t:t.defaultView}function o(t){this.element=t,this.handlers={}}o.prototype.innerHeight=function(){return e(this.element)?this.element.innerHeight:this.element.clientHeight},o.prototype.innerWidth=function(){return e(this.element)?this.element.innerWidth:this.element.clientWidth},o.prototype.off=function(t,e){function n(t,e,n){for(var i=0,o=e.length-1;i<o;i++){var r=e[i];n&&n!==r||t.removeEventListener(r)}}var i=t.split("."),o=i[0],r=i[1],s=this.element;if(r&&this.handlers[r]&&o)n(s,this.handlers[r][o],e),this.handlers[r][o]=[];else if(o)for(var a in this.handlers)n(s,this.handlers[a][o]||[],e),this.handlers[a][o]=[];else if(r&&this.handlers[r]){for(var l in this.handlers[r])n(s,this.handlers[r][l],e);this.handlers[r]={}}},o.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,e=i(this.element.ownerDocument),n={top:0,left:0};return this.element.getBoundingClientRect&&(n=this.element.getBoundingClientRect()),{top:n.top+e.pageYOffset-t.clientTop,left:n.left+e.pageXOffset-t.clientLeft}},o.prototype.on=function(t,e){var n=t.split("."),i=n[0],o=n[1]||"__default",r=this.handlers[o]=this.handlers[o]||{};(r[i]=r[i]||[]).push(e),this.element.addEventListener(i,e)},o.prototype.outerHeight=function(t){var n,i=this.innerHeight();return t&&!e(this.element)&&(n=window.getComputedStyle(this.element),i+=parseInt(n.marginTop,10),i+=parseInt(n.marginBottom,10)),i},o.prototype.outerWidth=function(t){var n,i=this.innerWidth();return t&&!e(this.element)&&(n=window.getComputedStyle(this.element),i+=parseInt(n.marginLeft,10),i+=parseInt(n.marginRight,10)),i},o.prototype.scrollLeft=function(){var t=i(this.element);return t?t.pageXOffset:this.element.scrollLeft},o.prototype.scrollTop=function(){var t=i(this.element);return t?t.pageYOffset:this.element.scrollTop},o.extend=function(){var t=Array.prototype.slice.call(arguments);function e(t,e){if("object"===n(t)&&"object"===n(e))for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}for(var i=1,o=t.length;i<o;i++)e(t[0],t[i]);return t[0]},o.inArray=function(t,e,n){return null==e?-1:e.indexOf(t,n)},o.isEmptyObject=function(t){for(var e in t)return!1;return!0},t.adapters.push({name:"noframework",Adapter:o}),t.Adapter=o}()}}]);