(function(){var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={pa:!0},ha={};try{ha.__proto__=fa;ea=ha.pa;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function n(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
var ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ka="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function la(a,b){if(b){for(var c=ka,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function ma(){ma=function(){};
ka.Symbol||(ka.Symbol=na)}
var na=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function oa(){ma();var a=ka.Symbol.iterator;a||(a=ka.Symbol.iterator=ka.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(aa(this))}});
oa=function(){}}
function pa(a){oa();a={next:a};a[ka.Symbol.iterator]=function(){return this};
return a}
function p(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var qa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)p(d,e)&&(a[e]=d[e])}return a};
la("Object.assign",function(a){return a||qa});
la("WeakMap",function(a){function b(a){this.b=(g+=Math.random()+1).toString();if(a){a=ba(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){p(a,f)||ja(a,f,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(u){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!p(a,f))throw Error("WeakMap key fail: "+a);a[f][this.b]=b;return this};
b.prototype.get=function(a){return p(a,f)?a[f][this.b]:void 0};
b.prototype.has=function(a){return p(a,f)&&p(a[f],this.b)};
b.prototype["delete"]=function(a){return p(a,f)&&p(a[f],this.b)?delete a[f][this.b]:!1};
return b});
la("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return pa(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&p(a.f,c))for(var e=0;e<d.length;e++){var k=d[e];if(b!==b&&k.key!==k.key||b===k.key)return{id:c,list:d,index:e,o:k}}return{id:c,list:d,index:-1,o:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=ba(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ba([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(S){return!1}}())return a;
oa();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.o?c.o.value=b:(c.o={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.o),this.b.previous.next=c.o,this.b.previous=c.o,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.o&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.o.previous.next=a.o.next,a.o.next.previous=a.o.previous,a.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).o};
e.prototype.get=function(a){return(a=d(this,a).o)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
la("Set",function(a){function b(a){this.b=new Map;if(a){a=ba(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ba([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
oa();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
la("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
la("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var q=this;function r(a){return void 0!==a}
function t(a){return"string"==typeof a}
function v(a,b,c){a=a.split(".");c=c||q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&r(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var ra=/^[\w+/_-]+[=]{0,2}$/,sa=null;function w(a,b){for(var c=a.split("."),d=b||q,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ta(){}
function ua(a){a.ca=void 0;a.getInstance=function(){return a.ca?a.ca:a.ca=new a}}
function va(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function x(a){return"array"==va(a)}
function wa(a){var b=va(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function xa(a){return"function"==va(a)}
function y(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ya="closure_uid_"+(1E9*Math.random()>>>0),za=0;function Aa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=Aa:z=Ba;return z.apply(null,arguments)}
function Ca(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var A=Date.now||function(){return+new Date};
function Da(a,b){v(a,b,void 0)}
function B(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Ea=document,C=window;function D(a){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
B(D,Error);D.prototype.name="CustomError";var Fa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ga=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=t(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var k=f[g];
b.call(void 0,k,g,a)&&(d[e++]=k)}return d},Ha=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=t(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ia=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function Ja(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function Ka(a,b){var c=Fa(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function La(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ma(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(wa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Na=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Oa(a){if(!Pa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Qa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ra,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Sa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ta,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ua,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Va,"&#0;"));return a}
var Qa=/&/g,Ra=/</g,Sa=/>/g,Ta=/"/g,Ua=/'/g,Va=/\x00/g,Pa=/[\x00&<>"']/;function Wa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Xa;a:{var Ya=q.navigator;if(Ya){var Za=Ya.userAgent;if(Za){Xa=Za;break a}}Xa=""}function F(a){return-1!=Xa.indexOf(a)}
;function $a(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ab(a,b){var c=wa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function bb(a){var b=cb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function db(a){for(var b in a)return!1;return!0}
function eb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function fb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function gb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var hb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ib(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<hb.length;f++)c=hb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function jb(a){jb[" "](a);return a}
jb[" "]=ta;var kb=F("Opera"),lb=F("Trident")||F("MSIE"),mb=F("Edge"),nb=F("Gecko")&&!(-1!=Xa.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),ob=-1!=Xa.toLowerCase().indexOf("webkit")&&!F("Edge");function pb(){var a=q.document;return a?a.documentMode:void 0}
var qb;a:{var rb="",sb=function(){var a=Xa;if(nb)return/rv:([^\);]+)(\)|;)/.exec(a);if(mb)return/Edge\/([\d\.]+)/.exec(a);if(lb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ob)return/WebKit\/(\S+)/.exec(a);if(kb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
sb&&(rb=sb?sb[1]:"");if(lb){var tb=pb();if(null!=tb&&tb>parseFloat(rb)){qb=String(tb);break a}}qb=rb}var ub=qb,vb;var wb=q.document;vb=wb&&lb?pb()||("CSS1Compat"==wb.compatMode?parseInt(ub,10):5):void 0;var xb=null,yb=null;function zb(a){this.b=a||{cookie:""}}
h=zb.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');r(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(A()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Na(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=r(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.b.cookie};
h.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Na(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ab=new zb("undefined"==typeof document?null:document);function Bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Cb=!lb||9<=Number(vb);function Db(){this.b="";this.f=Eb}
Db.prototype.J=!0;Db.prototype.I=function(){return this.b};
Db.prototype.ba=!0;Db.prototype.Y=function(){return 1};
function Fb(a){return a instanceof Db&&a.constructor===Db&&a.f===Eb?a.b:"type_error:TrustedResourceUrl"}
var Eb={};function G(){this.b="";this.f=Gb}
G.prototype.J=!0;G.prototype.I=function(){return this.b};
G.prototype.ba=!0;G.prototype.Y=function(){return 1};
function Hb(a){return a instanceof G&&a.constructor===G&&a.f===Gb?a.b:"type_error:SafeUrl"}
var Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof G)return a;a="object"==typeof a&&a.J?a.I():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return Kb(a)}
var Gb={};function Kb(a){var b=new G;b.b=a;return b}
Kb("about:blank");function Lb(){this.b="";this.g=Mb;this.f=null}
Lb.prototype.ba=!0;Lb.prototype.Y=function(){return this.f};
Lb.prototype.J=!0;Lb.prototype.I=function(){return this.b};
var Mb={};function Nb(a,b){var c=new Lb;c.b=a;c.f=b;return c}
Nb("<!DOCTYPE html>",0);Nb("",0);Nb("<br>",0);function Ob(a,b){var c=b instanceof G?b:Jb(b);a.href=Hb(c)}
function Pb(a,b){a.src=Fb(b);if(null===sa)b:{var c=q.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ra.test(c)){sa=c;break b}sa=""}c=sa;c&&a.setAttribute("nonce",c)}
;function Qb(a,b){this.x=r(a)?a:0;this.y=r(b)?b:0}
h=Qb.prototype;h.clone=function(){return new Qb(this.x,this.y)};
h.equals=function(a){return a instanceof Qb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Rb(a,b){this.width=a;this.height=b}
h=Rb.prototype;h.clone=function(){return new Rb(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Sb(a){var b=document;return t(a)?b.getElementById(a):a}
function Tb(a,b){$a(b,function(b,d){b&&"object"==typeof b&&b.J&&(b=b.I());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ub.hasOwnProperty(d)?a.setAttribute(Ub[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Ub={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Vb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Cb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Oa(g.name),'"');if(g.type){f.push(' type="',Oa(g.type),'"');var k={};ib(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:x(g)?f.className=g.join(" "):Tb(f,g));2<d.length&&Wb(e,f,d);return f}
function Wb(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!wa(f)||y(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(y(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(xa(f)){g="function"==typeof f.item;break a}}g=!1}E(g?La(f):f,d)}}}
function Xb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Yb(a){Zb();var b=new Db;b.b=a;return b}
var Zb=ta;function $b(){var a=ac;try{var b;if(b=!!a&&null!=a.location.href)a:{try{jb(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function bc(a){var b=cc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function dc(){var a=[];bc(function(b){a.push(b)});
return a}
var cc={Ra:"allow-forms",Sa:"allow-modals",Ta:"allow-orientation-lock",Ua:"allow-pointer-lock",Va:"allow-popups",Wa:"allow-popups-to-escape-sandbox",Xa:"allow-presentation",Ya:"allow-same-origin",Za:"allow-scripts",ab:"allow-top-navigation",bb:"allow-top-navigation-by-user-activation"},ec=Bb(function(){return dc()});
function fc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};E(ec(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function gc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var hc=!!window.google_async_iframe_id,ac=hc&&window.parent||window;var ic=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function H(a){return a.match(ic)}
function jc(a){return a?decodeURI(a):a}
function kc(a,b,c){if(x(b))for(var d=0;d<b.length;d++)kc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function lc(a){var b=[],c;for(c in a)kc(c,a[c],b);return b.join("&")}
function mc(a,b){var c=lc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var nc=null;function oc(){var a=q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):A()}
function pc(){var a=void 0===a?q:a;return(a=a.performance)&&a.now?a.now():null}
;function qc(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var I=q.performance,rc=!!(I&&I.mark&&I.measure&&I.clearMarks),sc=Bb(function(){var a;if(a=rc){var b;if(null===nc){nc="";try{a="";try{a=q.top.location.hash}catch(c){a=q.location.hash}a&&(nc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=nc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function tc(){var a=uc;this.events=[];this.f=a||q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=sc()||(null!=b?b:1>Math.random())}
tc.prototype.disable=function(){this.b=!1;this.events!=this.f.google_js_reporting_queue&&(sc()&&E(this.events,vc),this.events.length=0)};
function vc(a){a&&I&&sc()&&(I.clearMarks("goog_"+a.uniqueId+"_start"),I.clearMarks("goog_"+a.uniqueId+"_end"))}
tc.prototype.start=function(a,b){if(!this.b)return null;var c=pc()||oc();c=new qc(a,b,c);var d="goog_"+c.uniqueId+"_start";I&&sc()&&I.mark(d);return c};
tc.prototype.end=function(a){if(this.b&&"number"==typeof a.value){var b=pc()||oc();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";I&&sc()&&I.mark(b);this.b&&this.events.push(a)}};if(hc&&!$b()){var wc="."+Ea.domain;try{for(;2<wc.split(".").length&&!$b();)Ea.domain=wc=wc.substr(wc.indexOf(".")+1),ac=window.parent}catch(a){}$b()||(ac=window)}var uc=ac,xc=new tc;if("complete"==uc.document.readyState)uc.google_measure_js_timing||xc.disable();else if(xc.b){var yc=function(){uc.google_measure_js_timing||xc.disable()},zc=uc;
zc.addEventListener&&zc.addEventListener("load",yc,!1)};var Ac=(new Date).getTime();function Bc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Cc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=l=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],k=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var l=k^d&(f^k);var u=1518500249}else l=d^f^k,u=1859775393;else 60>c?(l=d&f|k&(d|f),u=2400959708):(l=d^f^k,u=3395469782);l=((a<<5|a>>>27)&4294967295)+l+m+u+b[c]&4294967295;m=k;k=f;f=(d<<30|d>>>2)&4294967295;d=a;a=l}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+k&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==l)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[l++]=a[d++],u++,64==l)for(l=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>l?c(k,56-l):c(k,64-(l-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var m=24;0<=m;m-=8)a[d++]=e[g]>>m&255;return a}
for(var e=[],f=[],g=[],k=[128],m=1;64>m;++m)k[m]=0;var l,u;a();return{reset:a,update:c,digest:d,ra:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Dc(a,b,c){var d=[],e=[];if(1==(x(c)?2:1))return e=[b,a],E(d,function(a){e.push(a)}),Ec(e.join(" "));
var f=[],g=[];E(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(a){e.push(a)});
a=Ec(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ec(a){var b=Cc();b.update(a);return b.ra().toLowerCase()}
;function Fc(a){var b=Bc(String(q.location.href)),c=q.__OVERRIDE_SID;null==c&&(c=(new zb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?q.__SAPISID:q.__APISID,null==b&&(b=(new zb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(q.location.href);return d&&b&&c?[c,Dc(Bc(d),b,a||null)].join(" "):null}return null}
;function Gc(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
Gc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Hc(a,b){a.h(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Ic(a){q.setTimeout(function(){throw a;},0)}
var Jc;
function Kc(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=z(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(r(c.next)){c=c.next;var a=c.ga;c.ga=null;a()}};
return function(a){d.next={ga:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}}
;function Lc(){this.f=this.b=null}
var Nc=new Gc(function(){return new Mc},function(a){a.reset()});
Lc.prototype.add=function(a,b){var c=Nc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Lc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Mc(){this.next=this.scope=this.b=null}
Mc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Mc.prototype.reset=function(){this.next=this.scope=this.b=null};function Oc(a,b){Pc||Qc();Rc||(Pc(),Rc=!0);Sc.add(a,b)}
var Pc;function Qc(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);Pc=function(){a.then(Tc)}}else Pc=function(){var a=Tc;
!xa(q.setImmediate)||q.Window&&q.Window.prototype&&!F("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(Jc||(Jc=Kc()),Jc(a)):q.setImmediate(a)}}
var Rc=!1,Sc=new Lc;function Tc(){for(var a;a=Sc.remove();){try{a.b.call(a.scope)}catch(b){Ic(b)}Hc(Nc,a)}Rc=!1}
;function Uc(){this.f=-1}
;function Vc(){this.f=64;this.b=[];this.j=[];this.u=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
B(Vc,Uc);Vc.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function Wc(a,b,c){c||(c=0);var d=a.u;if(t(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],k=a.b[3],m=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var l=1518500249}else f=c^g^k,l=1859775393;else 60>e?(f=c&g|k&(c|g),l=2400959708):(f=c^g^k,l=
3395469782);f=(b<<5|b>>>27)+f+m+l+d[e]&4294967295;m=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+k&4294967295;a.b[4]=a.b[4]+m&4294967295}
Vc.prototype.update=function(a,b){if(null!=a){r(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)Wc(this,a,d),d+=this.f;if(t(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){Wc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){Wc(this,e);f=0;break}}this.g=f;this.i+=b}};
Vc.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;Wc(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function J(){this.f=this.f;this.u=this.u}
J.prototype.f=!1;J.prototype.dispose=function(){this.f||(this.f=!0,this.l())};
function Xc(a,b){a.f?r(void 0)?b.call(void 0):b():(a.u||(a.u=[]),a.u.push(r(void 0)?z(b,void 0):b))}
J.prototype.l=function(){if(this.u)for(;this.u.length;)this.u.shift()()};
function Yc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Zc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];wa(d)?Zc.apply(null,d):Yc(d)}}
;function $c(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function ad(a,b){if(a.classList)var c=a.classList.contains(b);else c=$c(a),c=0<=Fa(c,b);return c}
function bd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ad(a,"inverted-hdpi")&&(a.className=Ga($c(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var cd="StopIteration"in q?q.StopIteration:{message:"StopIteration",stack:""};function dd(){}
dd.prototype.next=function(){throw cd;};
dd.prototype.F=function(){return this};
function ed(a){if(a instanceof dd)return a;if("function"==typeof a.F)return a.F(!1);if(wa(a)){var b=0,c=new dd;c.next=function(){for(;;){if(b>=a.length)throw cd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function fd(a,b){if(wa(a))try{E(a,b,void 0)}catch(c){if(c!==cd)throw c;}else{a=ed(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==cd)throw c;}}}
function gd(a){if(wa(a))return La(a);a=ed(a);var b=[];fd(a,function(a){b.push(a)});
return b}
;function hd(a,b){this.g={};this.b=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof hd)for(c=id(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function id(a){jd(a);return a.b.concat()}
h=hd.prototype;h.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||kd;jd(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function kd(a,b){return a===b}
h.isEmpty=function(){return 0==this.f};
h.clear=function(){this.g={};this.h=this.f=this.b.length=0};
h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.h++,this.b.length>2*this.f&&jd(this),!0):!1};
function jd(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.h++);this.g[a]=b};
h.forEach=function(a,b){for(var c=id(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new hd(this)};
h.F=function(a){jd(this);var b=0,c=this.h,d=this,e=new dd;e.next=function(){if(c!=d.h)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw cd;var e=d.b[b++];return a?e:d.g[e]};
return e};function ld(a){var b=[];md(new nd,a,b);return b.join("")}
function nd(){}
function md(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(x(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),md(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),od(d,c),c.push(":"),md(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":od(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var pd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},qd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function od(a,b){b.push('"',a.replace(qd,function(a){var b=pd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),pd[a]=b);return b}),'"')}
;function rd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function K(a){this.b=0;this.u=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=ta)try{var b=this;a.call(void 0,function(a){sd(b,2,a)},function(a){sd(b,3,a)})}catch(c){sd(this,3,c)}}
function td(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
td.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var ud=new Gc(function(){return new td},function(a){a.reset()});
function vd(a,b,c){var d=ud.get();d.f=a;d.onRejected=b;d.context=c;return d}
function wd(a){return new K(function(b,c){c(a)})}
K.prototype.then=function(a,b,c){return xd(this,xa(a)?a:null,xa(b)?b:null,c)};
K.prototype.$goog_Thenable=!0;function yd(a,b){return xd(a,null,b,void 0)}
K.prototype.cancel=function(a){0==this.b&&Oc(function(){var b=new zd(a);Ad(this,b)},this)};
function Ad(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Ad(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Bd(c),Cd(c,e,3,b)))}a.g=null}else sd(a,3,b)}
function Ed(a,b){a.f||2!=a.b&&3!=a.b||Fd(a);a.h?a.h.next=b:a.f=b;a.h=b}
function xd(a,b,c,d){var e=vd(null,null,null);e.b=new K(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!r(e)&&b instanceof zd?g(b):a(e)}catch(l){g(l)}}:g});
e.b.g=a;Ed(a,e);return e.b}
K.prototype.w=function(a){this.b=0;sd(this,2,a)};
K.prototype.B=function(a){this.b=0;sd(this,3,a)};
function sd(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.w,f=a.B;if(d instanceof K){Ed(d,vd(e||ta,f||null,a));var g=!0}else if(rd(d))d.then(e,f,a),g=!0;else{if(y(d))try{var k=d.then;if(xa(k)){Gd(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}g||(a.u=c,a.b=b,a.g=null,Fd(a),3!=b||c instanceof zd||Hd(a,c))}}
function Gd(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(m){f(m)}}
function Fd(a){a.j||(a.j=!0,Oc(a.m,a))}
function Bd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
K.prototype.m=function(){for(var a;a=Bd(this);)Cd(this,a,this.b,this.u);this.j=!1};
function Cd(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Id(b,c,d);else try{b.g?b.f.call(b.context):Id(b,c,d)}catch(e){Jd.call(null,e)}Hc(ud,b)}
function Id(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Hd(a,b){a.i=!0;Oc(function(){a.i&&Jd.call(null,b)})}
var Jd=Ic;function zd(a){D.call(this,a)}
B(zd,D);zd.prototype.name="cancel";function L(a){J.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.g={};this.m=!!a}
B(L,J);h=L.prototype;h.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Kd(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Ja(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
h.L=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.b[a+1]=ta):(c&&Ka(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
h.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Ld(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.L(c)}}return 0!=e}return!1};
function Ld(a,b,c){Oc(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.g[a];b&&(E(b,this.L,this),delete this.g[a])}else this.b.length=0,this.g={}};
h.l=function(){L.A.l.call(this);this.clear();this.h.length=0};function Md(a){this.b=a}
Md.prototype.set=function(a,b){r(b)?this.b.set(a,ld(b)):this.b.remove(a)};
Md.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Md.prototype.remove=function(a){this.b.remove(a)};function Nd(a){this.b=a}
B(Nd,Md);function Od(a){this.data=a}
function Pd(a){return!r(a)||a instanceof Od?a:new Od(a)}
Nd.prototype.set=function(a,b){Nd.A.set.call(this,a,Pd(b))};
Nd.prototype.f=function(a){a=Nd.A.get.call(this,a);if(!r(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Nd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!r(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Qd(a){this.b=a}
B(Qd,Nd);Qd.prototype.set=function(a,b,c){if(b=Pd(b)){if(c){if(c<A()){Qd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=A()}Qd.A.set.call(this,a,b)};
Qd.prototype.f=function(a){var b=Qd.A.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<A()||c&&c>A())Qd.prototype.remove.call(this,a);else return b}};function Rd(a){this.b=a}
B(Rd,Qd);function Sd(){}
;function Td(){}
B(Td,Sd);Td.prototype.clear=function(){var a=gd(this.F(!0)),b=this;E(a,function(a){b.remove(a)})};function Ud(a){this.b=a}
B(Ud,Td);h=Ud.prototype;h.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeItem(a)};
h.F=function(a){var b=0,c=this.b,d=new dd;d.next=function(){if(b>=c.length)throw cd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.b.clear()};
h.key=function(a){return this.b.key(a)};function Vd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
B(Vd,Ud);function Wd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
B(Wd,Ud);function Xd(a,b){this.f=a;this.b=null;if(lb&&!(9<=Number(vb))){Yd||(Yd=new hd);this.b=Yd.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Yd.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
B(Xd,Td);var Zd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Yd=null;function $d(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Zd[a]})}
h=Xd.prototype;h.isAvailable=function(){return!!this.b};
h.set=function(a,b){this.b.setAttribute($d(a),b);ae(this)};
h.get=function(a){a=this.b.getAttribute($d(a));if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeAttribute($d(a));ae(this)};
h.F=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new dd;d.next=function(){if(b>=c.length)throw cd;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ae(this)};
function ae(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function be(a,b){this.f=a;this.b=b+"::"}
B(be,Td);be.prototype.set=function(a,b){this.f.set(this.b+a,b)};
be.prototype.get=function(a){return this.f.get(this.b+a)};
be.prototype.remove=function(a){this.f.remove(this.b+a)};
be.prototype.F=function(a){var b=this.f.F(!0),c=this,d=new dd;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function ce(){this.f=[];this.b=-1}
ce.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
ce.prototype.get=function(a){return!!this.f[a]};
function de(a){-1==a.b&&(a.b=Ia(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;function ee(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var M=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var fe=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",fe,void 0);function N(a){ee(fe,arguments)}
function O(a,b){return a in fe?fe[a]:b}
function P(a){return O(a,void 0)}
function ge(){return O("PLAYER_CONFIG",{})}
;function he(){var a=ie;w("yt.ads.biscotti.getId_")||v("yt.ads.biscotti.getId_",a,void 0)}
function je(a){v("yt.ads.biscotti.lastId_",a,void 0)}
;function ke(a){var b=le;a=void 0===a?w("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(me(b),ne(b));b.ca_type="image";a&&(b.bid=a);return b}
function me(a){var b={};b.dt=Ac;b.flash="0";a:{try{var c=a.b.top.location.href}catch(f){a=2;break a}a=c?c===a.f.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?C:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!C.navigator&&"unknown"!==typeof C.navigator.javaEnabled&&!!C.navigator.javaEnabled&&C.navigator.javaEnabled();C.screen&&(b.u_h=C.screen.height,b.u_w=C.screen.width,b.u_ah=C.screen.availHeight,b.u_aw=C.screen.availWidth,b.u_cd=C.screen.colorDepth);
C.navigator&&C.navigator.plugins&&(b.u_nplug=C.navigator.plugins.length);C.navigator&&C.navigator.mimeTypes&&(b.u_nmime=C.navigator.mimeTypes.length);return b}
function ne(a){var b=a.b;try{var c=b.screenX;var d=b.screenY}catch(S){}try{var e=b.outerWidth;var f=b.outerHeight}catch(S){}try{var g=b.innerWidth;var k=b.innerHeight}catch(S){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.b.top;try{var m=(c||window).document,l="CSS1Compat"==m.compatMode?m.documentElement:m.body;var u=(new Rb(l.clientWidth,l.clientHeight)).round()}catch(S){u=new Rb(-12245933,-12245933)}m=u;u={};l=new ce;q.SVGElement&&
q.document.createElementNS&&l.set(0);c=fc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);q.crypto&&q.crypto.subtle&&l.set(3);l=de(l);u.bc=l;u.bih=m.height;u.biw=m.width;u.brdim=b.join();a=a.f;return u.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,u.wgl=!!C.WebGLRenderingContext,u}
var le=new function(){var a=window.document;this.b=window;this.f=a};A();function oe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Q(b)}}:a}
function Q(a,b,c,d,e){var f=w("yt.logging.errors.log");f?f(a,b,c,d,e):(f=O("ERRORS",[]),f.push([a,b,c,d,e]),N("ERRORS",f))}
function pe(a){Q(a,"WARNING",void 0,void 0,void 0)}
;function R(a){return O("EXPERIMENT_FLAGS",{})[a]}
;var qe=r(XMLHttpRequest)?function(){return new XMLHttpRequest}:r(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function re(){if(!qe)return null;var a=qe();return"open"in a?a:null}
function se(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){xa(a)&&(a=oe(a));return window.setTimeout(a,b)}
function U(a){window.clearTimeout(a)}
;function te(a){var b=[];$a(a,function(a,d){var c=encodeURIComponent(String(d)),f;x(a)?f=a:f=[a];E(f,function(a){""==a?b.push(c):b.push(c+"="+encodeURIComponent(String(a)))})});
return b.join("&")}
function ue(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?x(b[f])?Ma(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function ve(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ue(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return mc(a,e)+d}
;var we={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},xe="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ye=!1;
function ze(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=H(a)[1]||null,e=jc(H(a)[3]||null);d&&e?(d=c,c=H(a),d=H(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?jc(H(c)[3]||null)==e&&(Number(H(c)[4]||null)||null)==(Number(H(a)[4]||null)||null):!0;d=!!R("web_ajax_ignore_global_headers_if_set");for(var f in we)e=O(we[f]),!e||!c&&!Ae(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Ae(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();R("pass_biscotti_id_in_header_ajax")&&(c||
Ae(a,"X-YouTube-Ad-Signals"))&&(f=ke(void 0),b["X-YouTube-Ad-Signals"]=te(f));return b}
function Be(a){var b=ue(window.location.search),c={};E(xe,function(a){b[a]&&(c[a]=b[a])});
return ve(a,c||{},!1)}
function Ae(a,b){var c=O("CORS_HEADER_WHITELIST")||{},d=jc(H(a)[3]||null);return d?(c=c[d])?0<=Fa(c,b):!1:!0}
function Ce(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=De(a,b);var d=Ee(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&U(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||q;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ea&&b.ea.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.ia&&0<b.timeout&&(f=T(function(){e||(e=!0,U(f),b.ia.call(b.context||q))},b.timeout))}else Fe(a,b)}
function Fe(a,b){var c=b.format||"JSON";a=De(a,b);var d=Ee(a,b),e=!1,f,g=Ge(a,function(a){if(!e){e=!0;f&&U(f);var d=se(a),g=null,k=400<=a.status&&500>a.status,S=500<=a.status&&600>a.status;if(d||k||S)g=He(c,a,b.hb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};k=b.context||q;d?b.onSuccess&&b.onSuccess.call(k,a,g):b.onError&&b.onError.call(k,a,g);b.ea&&b.ea.call(k,a,g)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.M&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),U(f),b.M.call(b.context||q,g))},b.timeout));
return g}
function De(a,b){b.wa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.Qa;d&&(d[c]&&delete d[c],a=ve(a,d||{},!0));return a}
function Ee(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=P("XSRF_FIELD_NAME"),k;b.headers&&(k=b.headers["Content-Type"]);b.ib||jc(H(a)[3]||null)&&!b.withCredentials&&jc(H(a)[3]||null)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&t(e)&&(e=ue(e),ib(e,f),e=b.ja&&"JSON"==b.ja?JSON.stringify(e):lc(e));f=e||f&&!db(f);!ye&&f&&"POST"!=b.method&&(ye=!0,Q(Error("AJAX request with postData should use POST")));
return e}
function He(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ie(b):null)d={},E(b.getElementsByTagName("*"),function(a){d[a.tagName]=Je(a)})}c&&Ke(d);
return d}
function Ke(a){if(y(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Nb(a[b],null);a[c]=d}else Ke(a[b])}}
function Ie(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Je(a){var b="";E(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Le(a,b){b.method="POST";b.C||(b.C={});Fe(a,b)}
function Ge(a,b,c,d,e,f,g){function k(){4==(m&&"readyState"in m?m.readyState:0)&&b&&oe(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=re();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",k,!1):m.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Be(a));m.open(c,a,!0);f&&(m.responseType=f);g&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ze(a,e))for(var l in e)m.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m}
;var Me={},Ne=0;
function Oe(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Xa,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof G||(a="object"==typeof a&&a.J?a.I():String(a),Ib.test(a)||(a="about:invalid#zClosurez"),a=Kb(a)),b=Hb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Lb?a=b:(d="object"==typeof b,a=null,d&&b.ba&&(a=b.Y()),b=Oa(d&&b.J?b.I():String(b)),a=Nb(b,a)),a=encodeURIComponent(String(ld(a instanceof Lb&&a.constructor===Lb&&a.g===Mb?a.b:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=
Vb("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ge(a,b,"POST",e,d):O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ge(a,b,"GET","",d):Pe(a,b))}
function Pe(a,b){var c=new Image,d=""+Ne++;Me[d]=c;c.onload=c.onerror=function(){b&&Me[d]&&b();delete Me[d]};
c.src=a}
;var Qe={},Re=0;
function Se(a,b,c,d,e,f){f=f||{};f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=Re)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params).substr(0,500));d=w("window.location.href");if(t(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var k=a.lineNumber||a.line||"Not available"}catch(S){k="Not available",g=!0}try{var m=a.fileName||a.filename||a.sourceURL||q.$googDebugFname||d}catch(S){m="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:k,fileName:m,stack:a.stack||"Not available"}}e=e||a.stack;k=a.lineNumber.toString();isNaN(k)||isNaN(c)||(k=k+":"+c);window.yterr&&xa(window.yterr)&&window.yterr(a);if(!(Qe[a.message]||
0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){m=e;k={Qa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:k,level:b,"client.name":f.name},C:{url:O("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(k["client.version"]=f.version);m&&(k.C.stack=m);for(var l in f)k.C["client."+l]=f[l];if(l=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in l)k.C[u]=l[u];Fe(O("ECATCHER_REPORT_HOST","")+"/error_204",k);Qe[a.message]=!0;Re++}}}
;var Te=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};v("yt.msgs_",Te,void 0);function Ue(a){ee(Te,arguments)}
;function Ve(a){a&&(a.dataset?a.dataset[We("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Xe(a,b){return a?a.dataset?a.dataset[We(b)]:a.getAttribute("data-"+b):null}
var Ye={};function We(a){return Ye[a]||(Ye[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var Ze=w("ytPubsubPubsubInstance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.L;L.prototype.publish=L.prototype.K;L.prototype.clear=L.prototype.clear;v("ytPubsubPubsubInstance",Ze,void 0);var $e=w("ytPubsubPubsubSubscribedKeys")||{};v("ytPubsubPubsubSubscribedKeys",$e,void 0);var af=w("ytPubsubPubsubTopicToKeys")||{};v("ytPubsubPubsubTopicToKeys",af,void 0);var bf=w("ytPubsubPubsubIsSynchronous")||{};v("ytPubsubPubsubIsSynchronous",bf,void 0);
function cf(a,b){var c=df();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){$e[d]&&b.apply(window,c)};
try{bf[a]?f():T(f,0)}catch(g){Q(g)}},void 0);
$e[d]=!0;af[a]||(af[a]=[]);af[a].push(d);return d}return 0}
function ef(a){var b=df();b&&("number"==typeof a?a=[a]:t(a)&&(a=[parseInt(a,10)]),E(a,function(a){b.unsubscribeByKey(a);delete $e[a]}))}
function ff(a,b){var c=df();c&&c.publish.apply(c,arguments)}
function gf(a){var b=df();if(b)if(b.clear(a),a)hf(a);else for(var c in af)hf(c)}
function df(){return w("ytPubsubPubsubInstance")}
function hf(a){af[a]&&(a=af[a],E(a,function(a){$e[a]&&delete $e[a]}),a.length=0)}
;var jf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,kf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function lf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(jf,""),c=c.replace(kf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else mf(a,b,c)}
function mf(a,b,c){c=void 0===c?null:c;var d=nf(a),e=document.getElementById(d),f=e&&Xe(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=cf(d,b),b=""+(b[ya]||(b[ya]=++za)),of[b]=f),g||(e=pf(a,d,function(){Xe(e,"loaded")||(Ve(e),ff(d),T(Ca(gf,d),0))},c)))}
function pf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Pb(e,Yb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function qf(a){a=nf(a);var b=document.getElementById(a);b&&(gf(a),b.parentNode.removeChild(b))}
function rf(a,b){if(a&&b){var c=""+(b[ya]||(b[ya]=++za));(c=of[c])&&ef(c)}}
function nf(a){var b=document.createElement("a");Ob(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Wa(a)}
var of={};function sf(){}
function tf(a,b){return uf(a,1,b)}
;function vf(){}
n(vf,sf);function uf(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function wf(a){if(!isNaN(a)){var b=w("yt.scheduler.instance.cancelJob");b?b(a):U(a)}}
vf.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
vf.prototype.pause=function(){var a=w("yt.scheduler.instance.pause");a&&a()};
ua(vf);vf.getInstance();var xf=[],yf=!1;function zf(){if("1"!=ab(ge(),"args","privembed")){var a=function(){yf=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
lf("//static.doubleclick.net/instream/ad_status.js",a);xf.push(tf(function(){yf||"google_ad_status"in window||(rf("//static.doubleclick.net/instream/ad_status.js",a),N("DCLKSTAT",3))},5E3))}}
function Af(){return parseInt(O("DCLKSTAT",0),10)}
;function Bf(){this.f=!1;this.b=null}
Bf.prototype.initialize=function(a,b,c,d,e){b?(this.f=!0,lf(b,function(){this.f=!1;window.botguard?Cf(this,c,d):(qf(b),Q(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this),e)):a&&(eval(a),window.botguard?Cf(this,c,d):Q(Error("Unable to load Botguard from JS"),"WARNING"))};
function Cf(a,b,c){try{a.b=new window.botguard.bg(b)}catch(d){pe(d)}c&&c(b)}
Bf.prototype.invoke=function(a){a=void 0===a?{}:a;return this.b?this.b.invoke(void 0,void 0,a):null};
Bf.prototype.dispose=function(){this.b=null};var Df=new Bf,Ef=!1,Ff=0,Gf="";function Hf(a){R("botguard_periodic_refresh")?Ff=M():R("botguard_always_refresh")&&(Gf=a)}
function If(a){if(a){if(Df.f)return!1;if(R("botguard_periodic_refresh"))return 72E5<M()-Ff;if(R("botguard_always_refresh"))return Gf!=a}else return!1;return!Ef}
function Jf(){return null!==Df.b}
function Kf(a){a=void 0===a?{}:a;return Df.invoke(a)}
;var Lf=0;v("ytDomDomGetNextId",w("ytDomDomGetNextId")||function(){return++Lf},void 0);var Mf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Nf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Mf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function Of(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
Nf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Nf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Nf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var cb=w("ytEventsEventsListeners")||{};v("ytEventsEventsListeners",cb,void 0);var Pf=w("ytEventsEventsCounter")||{count:0};v("ytEventsEventsCounter",Pf,void 0);
function Qf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return bb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=y(e[4])&&y(d)&&fb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Rf=Bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Qf(a,b,c,d);if(e)return e;e=++Pf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Nf(d);if(!Xb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Nf(b);
b.currentTarget=a;return c.call(a,b)};
g=oe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Rf()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);cb[e]=[a,b,c,g,d];return e}
function Sf(a){a&&("string"==typeof a&&(a=[a]),E(a,function(a){if(a in cb){var b=cb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Rf()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete cb[a]}}))}
;function Tf(a){this.w=a;this.b=null;this.i=0;this.m=null;this.j=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.h=0;this.D=V(window,"mousemove",z(this.G,this));a=z(this.B,this);xa(a)&&(a=oe(a));this.H=window.setInterval(a,25)}
B(Tf,J);Tf.prototype.G=function(a){r(a.b)||Of(a);var b=a.b;r(a.f)||Of(a);this.b=new Qb(b,a.f)};
Tf.prototype.B=function(){if(this.b){var a=M();if(0!=this.i){var b=this.m,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.g[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.w();this.j=d}this.i=a;this.m=this.b;this.h=(this.h+1)%4}};
Tf.prototype.l=function(){window.clearInterval(this.H);Sf(this.D)};var Uf={};function Vf(a){var b=void 0===a?{}:a;a=void 0===b.b?!0:b.b;b=void 0===b.f?!1:b.f;if(null==w("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?A()-Math.max(c,0):-1;v("_lact",c,window);v("_fact",c,window);-1==c&&Wf();V(document,"keydown",Wf);V(document,"keyup",Wf);V(document,"mousedown",Wf);V(document,"mouseup",Wf);a&&(b?V(window,"touchmove",function(){Xf("touchmove",200)},{passive:!0}):(V(window,"resize",function(){Xf("resize",200)}),V(window,"scroll",function(){Xf("scroll",200)})));
new Tf(function(){Xf("mouse",100)});
V(document,"touchstart",Wf,{passive:!0});V(document,"touchend",Wf,{passive:!0})}}
function Xf(a,b){Uf[a]||(Uf[a]=!0,tf(function(){Wf();Uf[a]=!1},b))}
function Wf(){null==w("_lact",window)&&Vf();var a=A();v("_lact",a,window);-1==w("_fact",window)&&v("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function Yf(){var a=w("_lact",window);return null==a?-1:Math.max(A()-a,0)}
;var Zf=Math.pow(2,16)-1,$f=null,ag=0,bg={log_event:"events",log_interaction:"interactions"},cg=Object.create(null);cg.log_event="GENERIC_EVENT_LOGGING";cg.log_interaction="INTERACTION_LOGGING";var dg=new Set(["log_event"]),eg={},fg=0,gg=0,W=w("ytLoggingTransportLogPayloadsQueue_")||{};v("ytLoggingTransportLogPayloadsQueue_",W,void 0);var hg=w("ytLoggingTransportTokensToCttTargetIds_")||{};v("ytLoggingTransportTokensToCttTargetIds_",hg,void 0);var ig=w("ytLoggingTransportDispatchedStats_")||{};
v("ytLoggingTransportDispatchedStats_",ig,void 0);v("ytytLoggingTransportCapturedTime_",w("ytLoggingTransportCapturedTime_")||{},void 0);function jg(){U(fg);U(gg);gg=0;if(!db(W)){for(var a in W){var b=eg[a];b&&(kg(a,b),delete W[a])}db(W)||lg()}}
function lg(){R("web_gel_timeout_cap")&&!gg&&(gg=T(jg,6E4));U(fg);fg=T(jg,O("LOGGING_BATCH_TIMEOUT",1E4))}
function mg(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function kg(a,b){var c=bg[a],d=ig[a]||{};ig[a]=d;var e=Math.round(M());for(l in W[a]){var f=b.b;f={client:{hl:f.za,gl:f.ya,clientName:f.xa,clientVersion:f.innertubeContextClientVersion}};var g=window.devicePixelRatio;g&&1!=g&&(f.client.screenDensityFloat=String(g));O("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(f.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});f={context:f};f[c]=mg(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=hg[l])a:{var k=
l;if(g.videoId)var m="VIDEO";else if(g.playlistId)m="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:m}]}delete hg[l];f.requestTimeMs=e;if(g=P("EVENT_ID"))m=(O("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>Zf&&(m=1),N("BATCH_CLIENT_COUNTER",m),g={serializedEventId:g,clientCounter:m},f.serializedClientEventId=g,$f&&ag&&R("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:$f,
roundtripMs:ag}),$f=g,ag=0;ng(b,a,f,{retry:dg.has(a),onSuccess:og.bind(this,M())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function og(a){ag=Math.round(M()-a)}
;function pg(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||M());f[a]=b;f.context={lastActivityMs:String(d?-1:Yf())};e?(a={},e.videoId?a.videoId=e.videoId:e.playlistId&&(a.playlistId=e.playlistId),hg[e.token]=a,e=mg("log_event",e.token)):e=mg("log_event");e.push(f);c&&(eg.log_event=new c);e.length>=(Number(R("web_logging_max_batch")||0)||20)?jg():lg()}
;function qg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.eb||O("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().cb:b=Fc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
function rg(a){a=Object.assign({},a);delete a.Authorization;var b=Fc();if(b){var c=new Vc;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!xb)for(xb={},yb={},c=0;65>c;c++)xb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),yb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=yb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,k=g?b[e+1]:0,m=e+2<b.length,l=m?b[e+2]:0,u=f>>2;f=(f&3)<<4|k>>4;k=(k&15)<<2|l>>
6;l&=63;m||(l=64,g||(k=64));d.push(c[u],c[f],c[k],c[l])}a.hash=d.join("")}return a}
;function sg(a,b,c,d){Ab.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function tg(){var a=new Vd;(a=a.isAvailable()?new be(a,"yt.innertube"):null)||(a=new Xd("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new Qd(a):null;this.f=document.domain||window.location.hostname}
tg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,A()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ld(b))}catch(f){return}else e=escape(b);sg(a,e,c,this.f)};
tg.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Ab.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
tg.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Ab.remove(""+a,"/",void 0===b?"youtube.com":b)};var ug=new tg;function vg(a,b,c,d){if(d)return null;d=ug.get("nextId",!0)||1;var e=ug.get("requests",!0)||{};e[d]={method:a,request:b,authState:rg(c),requestTime:Math.round(M())};ug.set("nextId",d+1,86400,!0);ug.set("requests",e,86400,!0);return d}
function wg(a){var b=ug.get("requests",!0)||{};delete b[a];ug.set("requests",b,86400,!0)}
function xg(a){var b=ug.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(M())-d.requestTime)){var e=d.authState,f=rg(qg(!1));fb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(M())),ng(a,d.method,e,{}));delete b[c]}}ug.set("requests",b,86400,!0)}}
;function yg(a){var b=this;this.b=a||{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),xa:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),za:P("INNERTUBE_CONTEXT_HL"),ya:P("INNERTUBE_CONTEXT_GL"),Aa:P("INNERTUBE_HOST_OVERRIDE")||"",Ba:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};uf(function(){xg(b)},0,5E3)}
function ng(a,b,c,d){!O("VISITOR_DATA")&&.01>Math.random()&&Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,ja:"JSON",M:function(){d.M()},
ia:d.M,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
ha:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
jb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.Aa;g&&(f=g);g=a.b.Ba||!1;var k=qg(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=""+f+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey,l;if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=vg(b,c,k,g))){var u=e.onSuccess,S=e.ha;e.onSuccess=function(a,b){wg(l);u(a,b)};
c.ha=function(a,b){wg(l);S(a,b)}}try{R("use_fetch_for_op_xhr")?Ce(m,e):Le(m,e)}catch(Dd){if("InvalidAccessError"==Dd)l&&(wg(l),l=0),Q(Error("An extension is blocking network request."),"WARNING");
else throw Dd;}l&&uf(function(){xg(a)},0,5E3)}
;var zg=A().toString();
function Ag(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=A();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(zg)for(a=1,b=0;b<zg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^zg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Bg=w("ytLoggingTimeDocumentNonce_")||Ag();v("ytLoggingTimeDocumentNonce_",Bg,void 0);function Cg(a){this.b=a}
function Dg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=Dg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var Eg=1;function Fg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Gg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Hg(a){return O(Gg(void 0===a?0:a),void 0)}
v("yt.logging.screen.getRootVeType",Hg,void 0);function Ig(){var a=Hg(0),b;a?b=new Cg({veType:a,youtubeData:void 0}):b=null;return b}
function Jg(a){a=void 0===a?0:a;var b=O(Fg(a));b||0!=a||(b=O("EVENT_ID"));return b?b:null}
v("yt.logging.screen.getCurrentCsn",Jg,void 0);function Kg(a,b,c){c=void 0===c?0:c;if(a!==O(Fg(c))||b!==O(Gg(c)))N(Fg(c),a),N(Gg(c),b),0==c&&(b=function(){setTimeout(function(){a&&pg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Bg,clientScreenNonce:a},yg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
v("yt.logging.screen.setCurrentScreen",Kg,void 0);function Lg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=jc(H(window.location.href)[3]||null);f&&e.push(f);f=jc(H(d)[3]||null);if(0<=Fa(e,f)||!f&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(e=document.createElement("a"),Ob(e,d),d=e.href),d){f=H(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Jg();if(k){var k=parseInt(k,10);isFinite(k)&&0<k&&(d="ST-"+Wa(d).toString(36),b=b?lc(b):"",sg(d,b,k||5))}else k="ST-"+Wa(d).toString(36),b=b?lc(b):"",sg(k,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var m=void 0===m?{}:m;var l=void 0===l?"":l;var u=void 0===u?window:u;c=u.location;a=mc(a,m)+l;a=a instanceof G?a:Jb(a);c.href=Hb(a)}return!0}
;function Mg(a,b,c){a={csn:a,parentVe:Dg(b),childVes:Ha(c,function(a){return Dg(a)})};
pg("visualElementAttached",a,yg)}
;function Ng(a){a=a||{};this.url=a.url||"";this.args=a.args||gb(Og);this.assets=a.assets||{};this.attrs=a.attrs||gb(Pg);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Og={enablejsapi:1},Pg={};Ng.prototype.clone=function(){var a=new Ng,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==va(c)?gb(c):c}return a};function Qg(){J.call(this);this.b=[]}
n(Qg,J);Qg.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.gb)}J.prototype.l.call(this)};var Rg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Sg(a){a=a||"";if(window.spf){var b=a.match(Rg);spf.style.load(a,b?b[1]:"",void 0)}else Tg(a)}
function Tg(a){var b=Ug(a),c=document.getElementById(b),d=c&&Xe(c,"loaded");d||c&&!d||(c=Vg(a,b,function(){Xe(c,"loaded")||(Ve(c),ff(b),T(Ca(gf,b),0))}))}
function Vg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Yb(a);d.rel="stylesheet";d.href=Fb(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Ug(a){var b=document.createElement("A");a=Kb(a);Ob(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Wa(b)}
;function Wg(a,b,c){var d=yg;O("ytLoggingEventsDefaultDisabled",!1)&&yg==yg&&(d=null);pg(a,b,d,c,void 0)}
;var Xg=w("ytLoggingLatencyUsageStats_")||{};v("ytLoggingLatencyUsageStats_",Xg,void 0);var Yg=0;function Zg(a){Xg[a]=Xg[a]||{count:0};var b=Xg[a];b.count++;b.time=M();Yg||(Yg=uf($g,0,5E3));return 10<b.count?(11==b.count&&Se(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function $g(){var a=M(),b;for(b in Xg)6E4<a-Xg[b].time&&delete Xg[b];Yg=0}
;function ah(a,b){this.version=a;this.args=b}
;function bh(a){this.topic=a}
bh.prototype.toString=function(){return this.topic};var ch=w("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.L;L.prototype.publish=L.prototype.K;L.prototype.clear=L.prototype.clear;v("ytPubsub2Pubsub2Instance",ch,void 0);v("ytPubsub2Pubsub2SubscribedKeys",w("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);v("ytPubsub2Pubsub2TopicToKeys",w("ytPubsub2Pubsub2TopicToKeys")||{},void 0);v("ytPubsub2Pubsub2IsAsync",w("ytPubsub2Pubsub2IsAsync")||{},void 0);
v("ytPubsub2Pubsub2SkipSubKey",null,void 0);function dh(a,b){var c=w("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function eh(){var a=O("TIMING_TICK_EXPIRATION");a||(a={},N("TIMING_TICK_EXPIRATION",a));return a}
function fh(){var a=eh(),b;for(b in a)wf(a[b]);N("TIMING_TICK_EXPIRATION",{})}
;function gh(a,b){ah.call(this,1,arguments)}
n(gh,ah);function hh(a,b){ah.call(this,1,arguments)}
n(hh,ah);var ih=new bh("aft-recorded"),jh=new bh("timing-sent");var kh={vc:!0},Y={},lh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id=
"kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr="prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",
Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),mh="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
nh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" "),oh={},ph=(oh.yt_vst="VIDEO_STREAM_TYPE_",oh),qh=!1;
function rh(){var a=sh().info.yt_lt="hot_bg";th().info_yt_lt=a;if(uh())if("yt_lt"in lh){var b=lh.yt_lt;0<=Fa(nh,b)&&(a=!!a);"yt_lt"in ph&&(a=ph.yt_lt+a.toUpperCase());var c=a;if(uh()){a={};b=b.split(".");for(var d=a,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=c;c=vh();b=Object.keys(a).join("");Zg("info_"+b+"_"+c)||(a.clientActionNonce=c,Wg("latencyActionInfo",a))}}else 0<=Fa(mh,"yt_lt")||Q(Error("Unknown label yt_lt logged with GEL CSI."))}
function wh(){var a=xh();if(a.aft)return a.aft;for(var b=O("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
var yh=z(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||ta,X);function vh(){var a=sh().nonce;a||(a=Ag(),sh().nonce=a);return a}
function xh(){return sh().tick}
function th(){var a=sh();"gel"in a||(a.gel={});return a.gel}
function sh(){return w("ytcsi.data_")||zh()}
function zh(){var a={tick:{},info:{}};v("ytcsi.data_",a,void 0);return a}
function Ah(a,b){v("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Bh(){var a=xh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==sh().info.yt_pvis}
function uh(){return!!R("csi_on_gel")||!!sh().useGel}
function Ch(){fh();if(!uh()){var a=xh(),b=sh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&x(a[f])){var d=f.slice(1);if(d in kh){var e=Ha(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}var f=!!b.ap;if(d=w("ytglobal.timingReportbuilder_")){if(a=d(a,b,void 0))Dh(a,f),zh(),yh(),Ah(!1,void 0),O("TIMING_ACTION")&&N("PREVIOUS_ACTION",O("TIMING_ACTION")),N("TIMING_ACTION","")}else{var g=O("CSI_SERVICE_NAME","youtube");d={v:2,s:g,action:O("TIMING_ACTION",void 0)};e=rh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+w("ytplayer.config.assets.js");(k=X.getEntriesByName?X.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=wh();Bh()&&"youtube"==g&&(rh(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(d[m]=b[m]);a.ps=M();b={};m=[];for(var l in a)"_"!=l.charAt(0)&&(g=Math.round(a[l]-c),b[l]=g,m.push(l+"."+g));d.rt=m.join(",");(a=w("ytdebug.logTiming"))&&a(d,b);Dh(d,f,void 0);dh(jh,new hh(b.aft+(e||0),void 0))}}}
function Dh(a,b,c){if(R("debug_csi_data")){var d=w("yt.timing.csiData");d||(d=[],v("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Oe(a,void 0,void 0,void 0,f)}catch(g){Oe(a,void 0,void 0,void 0,f)}}else Oe(a);Ah(!0,c)}
function Eh(a){if("_"!=a[0]){var b=a;X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b))}b=xh();var c=M();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=eh();if(c=b[a])wf(c),b[a]=0;th()["tick_"+a]=void 0;M();uh()?(b=vh(),"_start"==a?Zg("baseline_"+b)||Wg("latencyActionBaselined",{clientActionNonce:b},void 0):Zg("tick_"+a+"_"+b)||Wg("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0),a=!0):a=!1;if(a=!a)a=!w("yt.timing.pingSent_");if(a&&(b=P("TIMING_ACTION"),a=xh(),
w("ytglobal.timingready_")&&b&&a._start&&(b=wh()))){qh||(dh(ih,new gh(Math.round(b-a._start),void 0)),qh=!0);b=!0;c=O("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Ch()}}
;function Fh(a,b){J.call(this);this.j=this.T=a;this.D=b;this.m=!1;this.api={};this.P=this.B=null;this.G=new L;Xc(this,Ca(Yc,this.G));this.h={};this.N=this.R=this.g=this.X=this.b=null;this.H=!1;this.i=this.w=null;this.U={};this.na=["onReady"];this.W=null;this.fa=NaN;this.O={};Gh(this);this.V("WATCH_LATER_VIDEO_ADDED",this.Da.bind(this));this.V("WATCH_LATER_VIDEO_REMOVED",this.Ea.bind(this));this.V("onAdAnnounce",this.qa.bind(this));this.oa=new Qg(this);Xc(this,Ca(Yc,this.oa))}
n(Fh,J);h=Fh.prototype;
h.da=function(a){if(!this.f){a instanceof Ng||(a=new Ng(a));this.X=a;this.b=a.clone();this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.D,this.b.attrs.id=this.D);this.j.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.D;this.R||(this.R=Hh(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.j.style.width=gc(Number(a)||a);if(a=this.b.attrs.height)this.j.style.height=gc(Number(a)||
a);Ih(this);this.m&&Jh(this)}};
h.ta=function(){return this.X};
function Jh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.api.loadVideoByPlayerVars(a.b.args):a.api.cueVideoByPlayerVars(a.b.args))}
function Kh(a){var b=!0,c=Lh(a);c&&a.b&&(a=a.b,b=Xe(c,"version")==a.assets.js);return b&&!!w("yt.player.Application.create")}
function Ih(a){if(!a.f&&!a.H){var b=Kh(a);if(b&&"html5"==(Lh(a)?"html5":null))a.N="html5",a.m||Mh(a);else if(Nh(a),a.N="html5",b&&a.i)a.T.appendChild(a.i),Mh(a);else{a.b.loaded=!0;var c=!1;a.w=function(){c=!0;var b=a.b.clone();w("yt.player.Application.create")(a.T,b);Mh(a)};
a.H=!0;b?a.w():(lf(a.b.assets.js,a.w),Sg(a.b.assets.css),Oh(a)&&!c&&v("yt.player.Application.create",null,void 0))}}}
function Lh(a){var b=Sb(a.g);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.g));return b}
function Mh(a){if(!a.f){var b=Lh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.H=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||Ph(a)):a.fa=T(function(){Mh(a)},50)}}
function Ph(a){Gh(a);a.m=!0;var b=Lh(a);b.addEventListener&&(a.B=Qh(a,b,"addEventListener"));b.removeEventListener&&(a.P=Qh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Qh(a,b,e))}for(var f in a.h)a.B(f,a.h[f]);Jh(a);a.R&&a.R(a.api);a.G.K("onReady",a.api)}
function Qh(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,pe(e))}}}
function Gh(a){a.m=!1;if(a.P)for(var b in a.h)a.P(b,a.h[b]);for(var c in a.O)U(parseInt(c,10));a.O={};a.B=null;a.P=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.V.bind(a);a.api.removeEventListener=a.Ha.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.ua.bind(a);a.api.getPlayerType=a.va.bind(a);a.api.getCurrentVideoConfig=a.ta.bind(a);a.api.loadNewVideoConfig=a.da.bind(a);a.api.isReady=a.Ca.bind(a)}
h.Ca=function(){return this.m};
h.V=function(a,b){var c=this,d=Hh(this,b);if(d){if(!(0<=Fa(this.na,a)||this.h[a])){var e=Rh(this,a);this.B&&this.B(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.m&&T(function(){d(c.api)},0)}};
h.Ha=function(a,b){if(!this.f){var c=Hh(this,b);c&&Kd(this.G,a,c)}};
function Hh(a,b){var c=b;if("string"==typeof b){if(a.U[b])return a.U[b];c=function(){var a=w(b);a&&a.apply(q,arguments)};
a.U[b]=c}return c?c:null}
function Rh(a,b){var c="ytPlayer"+b+a.D;a.h[b]=c;q[c]=function(c){var d=T(function(){if(!a.f){a.G.K(b,c);var e=a.O,g=String(d);g in e&&delete e[g]}},0);
eb(a.O,String(d))};
return c}
h.qa=function(a){ff("a11y-announce",a)};
h.Da=function(a){ff("WATCH_LATER_VIDEO_ADDED",a)};
h.Ea=function(a){ff("WATCH_LATER_VIDEO_REMOVED",a)};
h.va=function(){return this.N||(Lh(this)?"html5":null)};
h.ua=function(){return this.W};
function Nh(a){Eh("dcp");a.cancel();Gh(a);a.N=null;a.b&&(a.b.loaded=!1);var b=Lh(a);b&&(Kh(a)||!Oh(a)?a.i=b:(b&&b.destroy&&b.destroy(),a.i=null));for(a=a.T;b=a.firstChild;)a.removeChild(b)}
h.cancel=function(){this.w&&rf(this.b.assets.js,this.w);U(this.fa);this.H=!1};
h.l=function(){Nh(this);if(this.i&&this.b&&this.i.destroy)try{this.i.destroy()}catch(b){Q(b)}this.U=null;for(var a in this.h)q[this.h[a]]=null;this.X=this.b=this.api=null;delete this.T;delete this.j;J.prototype.l.call(this)};
function Oh(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Sh={},Th="player_uid_"+(1E9*Math.random()>>>0);function Uh(a){var b="player";b=t(b)?Sb(b):b;var c=Th+"_"+(b[ya]||(b[ya]=++za)),d=Sh[c];if(d)return d.da(a),d.api;d=new Fh(b,c);Sh[c]=d;ff("player-added",d.api);Xc(d,Ca(Vh,d));T(function(){d.da(a)},0);
return d.api}
function Vh(a){delete Sh[a.D]}
;function Wh(){var a=Xh(),b=Yh();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!t(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!t(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var Yh=Bb(function(){var a=new Vd;return a.isAvailable()?new Rd(a):null}),Xh=Bb(function(){var a=new Wd;
return a.isAvailable()?new Rd(a):null});function Zh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function $h(a,b,c){t(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return ai(a)}
function ai(a,b,c){if(y(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function bi(a,b,c,d){if(y(a)&&!x(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};t(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function ci(a){var b=a.video_id||a.videoId;if(t(b)){var c=Wh()||{},d=Wh()||{};r(void 0)?d[b]=void 0:delete d[b];var e=A()+3E5,f=Yh();if(f&&window.JSON){t(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function di(a){J.call(this);this.b=a;this.b.subscribe("command",this.ka,this);this.g={};this.i=!1}
B(di,J);h=di.prototype;h.start=function(){this.i||this.f||(this.i=!0,ei(this.b,"RECEIVING"))};
h.ka=function(a,b,c){if(this.i&&!this.f){var d=b||{};switch(a){case "addEventListener":t(d.event)&&(a=d.event,a in this.g||(c=z(this.Ja,this,a),this.g[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":t(d.event)&&fi(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=gi(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=hi(a,c))&&this.i&&!this.f&&ei(this.b,a,c))}}};
h.Ja=function(a,b){this.i&&!this.f&&ei(this.b,a,this.Z(a,b))};
h.Z=function(a,b){if(null!=b)return{value:b}};
function fi(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
h.l=function(){var a=this.b;a.f||Kd(a.b,"command",this.ka,this);this.b=null;for(var b in this.g)fi(this,b);di.A.l.call(this)};function ii(a,b){di.call(this,b);this.h=a;this.start()}
B(ii,di);ii.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
ii.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function gi(a,b){switch(a){case "loadVideoById":return b=ai(b),ci(b),[b];case "cueVideoById":return b=ai(b),ci(b),[b];case "loadVideoByPlayerVars":return ci(b),[b];case "cueVideoByPlayerVars":return ci(b),[b];case "loadPlaylist":return b=bi(b),ci(b),[b];case "cuePlaylist":return b=bi(b),ci(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function hi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ii.prototype.Z=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ii.A.Z.call(this,a,b)};
ii.prototype.l=function(){ii.A.l.call(this);delete this.h};function ji(a,b,c,d){J.call(this);this.g=b||null;this.w="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=z(this.B,this);window.addEventListener("message",this.m)}
n(ji,J);ji.prototype.B=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.g&&a.source!=this.g)&&t(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.w=a.origin);this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Fa(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
ji.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=ld(a);c.postMessage(d,this.w)}catch(e){Q(e,"WARNING")}}};
ji.prototype.l=function(){window.removeEventListener("message",this.m);J.prototype.l.call(this)};function ki(a,b,c){ji.call(this,a,b,c||O("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(ki,ji);function li(){var a=this.f=new ki(!!O("WIDGET_ID_ENFORCE")),b=z(this.Ga,this);a.i=b;a.j=null;this.f.channel="widget";if(a=O("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
h=li.prototype;h.Ga=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,mi(this,a)),this.i[a]=!0)):this.ma(a,b,c)};
h.ma=function(){};
function mi(a,b){return z(function(a){this.sendMessage(b,a)},a)}
h.addEventListener=function(){};
h.sa=function(){this.j=!0;this.sendMessage("initialDelivery",this.aa());this.sendMessage("onReady");E(this.h,this.la,this);this.h=[]};
h.aa=function(){return null};
function ni(a,b){a.sendMessage("infoDelivery",b)}
h.la=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
h.sendMessage=function(a,b){this.la({event:a,info:void 0==b?null:b})};
h.dispose=function(){this.f=null};function oi(a){li.call(this);this.b=a;this.g=[];this.addEventListener("onReady",z(this.Fa,this));this.addEventListener("onVideoProgress",z(this.Na,this));this.addEventListener("onVolumeChange",z(this.Oa,this));this.addEventListener("onApiChange",z(this.Ia,this));this.addEventListener("onPlaybackQualityChange",z(this.Ka,this));this.addEventListener("onPlaybackRateChange",z(this.La,this));this.addEventListener("onStateChange",z(this.Ma,this));this.addEventListener("onWebglSettingsChanged",z(this.Pa,
this))}
B(oi,li);h=oi.prototype;h.ma=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&Zh(a)){var d=b;if(y(d[0])&&!x(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=ai.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=$h.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=bi.apply(window,d)}d=e}ci(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);Zh(a)&&ni(this,this.aa())}};
h.Fa=function(){var a=z(this.sa,this);this.f.b=a};
h.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
h.aa=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ka(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var k=this.b[e]();b[f]=k}catch(m){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=A()/1E3;return b};
h.Ma=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getVideoUrl&&(a.videoUrl=
this.b.getVideoUrl());this.b.getVideoContentRect&&(a.videoContentRect=this.b.getVideoContentRect());this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getPlaylist&&(a.playlist=this.b.getPlaylist());this.b.getPlaylistIndex&&(a.playlistIndex=this.b.getPlaylistIndex());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());ni(this,a)};
h.Ka=function(a){ni(this,{playbackQuality:a})};
h.La=function(a){ni(this,{playbackRate:a})};
h.Ia=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var m=f[g],l=this.b.getOption(e,m);b[e][m]=l}}this.sendMessage("apiInfoDelivery",b)};
h.Oa=function(){ni(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
h.Na=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());ni(this,a)};
h.Pa=function(){var a={sphericalProperties:this.b.getSphericalProperties()};ni(this,a)};
h.dispose=function(){oi.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function pi(a){a=void 0===a?!1:a;J.call(this);this.b=new L(a);Xc(this,Ca(Yc,this.b))}
B(pi,J);pi.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
pi.prototype.i=function(a,b){this.f||this.b.K.apply(this.b,arguments)};function qi(a,b,c){pi.call(this);this.g=a;this.h=b;this.j=c}
B(qi,pi);function ei(a,b,c){if(!a.f){var d=a.g;d.f||a.h!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(ld(a),d.h))}}
qi.prototype.l=function(){this.h=this.g=null;qi.A.l.call(this)};function ri(a,b,c){J.call(this);this.b=a;this.h=c;this.i=V(window,"message",z(this.j,this));this.g=new qi(this,a,b);Xc(this,Ca(Yc,this.g))}
B(ri,J);ri.prototype.j=function(a){var b;if(b=!this.f)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,t(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.g,c.f||c.i("command",b.command,b.data,a.origin))}};
ri.prototype.l=function(){Sf(this.i);this.b=null;ri.A.l.call(this)};function si(){var a=gb(ti),b;return yd(new K(function(c,d){a.onSuccess=function(a){se(a)?c(a):d(new ui("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new ui("Unknown request error","net.unknown",a))};
a.M=function(a){d(new ui("Request timed out","net.timeout",a))};
b=Fe("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof zd&&b.abort();
return wd(a)})}
function ui(a,b){D.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(ui,D);function vi(){this.f=0;this.b=null}
vi.prototype.then=function(a,b,c){return 1===this.f&&a?(a=a.call(c,this.b),rd(a)?a:wi(a)):2===this.f&&b?(a=b.call(c,this.b),rd(a)?a:xi(a)):this};
vi.prototype.getValue=function(){return this.b};
vi.prototype.$goog_Thenable=!0;function xi(a){var b=new vi;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function wi(a){var b=new vi;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function yi(a){D.call(this,a.message||a.description||a.name);this.isMissing=a instanceof zi;this.isTimeout=a instanceof ui&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof zd}
n(yi,D);yi.prototype.name="BiscottiError";function zi(){D.call(this,"Biscotti ID is missing from server")}
n(zi,D);zi.prototype.name="BiscottiMissingError";var ti={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ai=null;function ie(){if("1"===ab(ge(),"args","privembed"))return wd(Error("Biscotti ID is not available in private embed mode"));Ai||(Ai=yd(si().then(Bi),function(a){return Ci(2,a)}));
return Ai}
function Bi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new zi;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new zi;a=a.id;je(a);Ai=wi(a);Di(18E5,2);return a}
function Ci(a,b){var c=new yi(b);je("");Ai=xi(c);0<a&&Di(12E4,a-1);throw c;}
function Di(a,b){T(function(){yd(si().then(Bi,function(a){return Ci(b,a)}),ta)},a)}
function Ei(){try{var a=w("yt.ads.biscotti.getId_");return a?a():ie()}catch(b){return wd(b)}}
;function Fi(a){if("1"!==ab(ge(),"args","privembed")){a&&he();try{Ei().then(function(a){a=ke(a);a.bsq=Gi++;Le("//www.youtube.com/ad_data_204",{wa:!1,C:a,withCredentials:!0})},function(){}),T(Fi,18E5)}catch(b){Q(b)}}}
var Gi=0;var Z=w("ytglobal.prefsUserPrefsPrefs_")||{};v("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Hi(){this.b=O("ALT_PREF_COOKIE_NAME","PREF");var a=Ab.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
h=Hi.prototype;h.get=function(a,b){Ii(a);Ji(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){Ii(a);Ji(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
h.remove=function(a){Ii(a);Ji(a);delete Z[a]};
h.save=function(){sg(this.b,this.dump(),63072E3)};
h.clear=function(){for(var a in Z)delete Z[a]};
h.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Ji(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ii(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ki(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ua(Hi);var Li=null,Mi=null,Ni=null,Oi={};function Pi(a){var b=a.id;a=a.ve_type;var c=Eg++;a=new Cg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Oi[b]=a;b=Jg();c=Ig();b&&c&&Mg(b,c,[a])}
function Qi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Kg(b,a),a=Ig()))for(var c in Oi){var d=Oi[c];d&&Mg(b,a,[d])}}
function Ri(a){Oi[a.id]=new Cg({trackingParams:a.tracking_params})}
function Si(a){var b=Jg();a=Oi[a.id];b&&a&&pg("visualElementGestured",{csn:b,ve:Dg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},yg)}
function Ti(a){a=a.ids;var b=Jg();if(b)for(var c=0;c<a.length;c++){var d=Oi[a[c]];d&&pg("visualElementShown",{csn:b,ve:Dg(d),eventType:1},yg)}}
function Ui(){var a=Li;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;v("yt.setConfig",N,void 0);v("yt.config.set",N,void 0);v("yt.setMsg",Ue,void 0);v("yt.msgs.set",Ue,void 0);v("yt.logging.errors.log",Se,void 0);
v("writeEmbed",function(){var a=O("PLAYER_CONFIG",void 0);Fi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=O("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);O("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&ci(a.args);Li=a=Uh(a);a.addEventListener("onScreenChanged",Qi);a.addEventListener("onLogClientVeCreated",Pi);a.addEventListener("onLogServerVeCreated",Ri);a.addEventListener("onLogVeClicked",
Si);a.addEventListener("onLogVesShown",Ti);a.addEventListener("onReady",Ui);b=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?Ni=new oi(a):O("ENABLE_POST_API")&&t(b)&&t(c)&&(Mi=new ri(window.parent,b,c),Ni=new ii(a,Mi.g));c=P("BG_P");If(c)&&(O("BG_I")||O("BG_IU"))&&(Ef=!0,Df.initialize(O("BG_I",null),O("BG_IU",null),c,Hf,void 0));zf()},void 0);
v("yt.www.watch.ads.restrictioncookie.spr",function(a){Oe(a+"mac_204?action_fcts=1");return!0},void 0);
var Vi=oe(function(){Eh("ol");var a=Hi.getInstance(),b=!!((Ki("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&ad(document.body,"exp-invert-logo"))if(c&&!ad(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):ad(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&ad(document.body,"inverted-hdpi")&&bd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Ki(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),Wi=oe(function(){var a=Li;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();O("PL_ATT")&&Df.dispose();a=0;for(var b=xf.length;a<b;a++)wf(xf[a]);xf.length=0;qf("//static.doubleclick.net/instream/ad_status.js");yf=!1;N("DCLKSTAT",0);Zc(Ni,Mi);if(a=Li)a.removeEventListener("onScreenChanged",Qi),a.removeEventListener("onLogClientVeCreated",Pi),a.removeEventListener("onLogServerVeCreated",Ri),a.removeEventListener("onLogVeClicked",Si),a.removeEventListener("onLogVesShown",Ti),a.removeEventListener("onReady",Ui),a.destroy();Oi=
{}});
window.addEventListener?(window.addEventListener("load",Vi),window.addEventListener("unload",Wi)):window.attachEvent&&(window.attachEvent("onload",Vi),window.attachEvent("onunload",Wi));Da("yt.abuse.player.botguardInitialized",w("yt.abuse.player.botguardInitialized")||Jf);Da("yt.abuse.player.invokeBotguard",w("yt.abuse.player.invokeBotguard")||Kf);Da("yt.abuse.dclkstatus.checkDclkStatus",w("yt.abuse.dclkstatus.checkDclkStatus")||Af);
Da("yt.player.exports.navigate",w("yt.player.exports.navigate")||Lg);Da("yt.util.activity.init",w("yt.util.activity.init")||Vf);Da("yt.util.activity.getTimeSinceActive",w("yt.util.activity.getTimeSinceActive")||Yf);Da("yt.util.activity.setTimestamp",w("yt.util.activity.setTimestamp")||Wf);}).call(this);
