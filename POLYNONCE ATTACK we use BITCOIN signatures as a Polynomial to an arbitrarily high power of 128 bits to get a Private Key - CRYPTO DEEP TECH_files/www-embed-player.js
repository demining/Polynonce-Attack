(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ia(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||la});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}pa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=pa;
function w(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function va(){this.s=!1;this.m=null;this.i=void 0;this.h=1;this.G=this.l=0;this.D=this.j=null}
function wa(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
va.prototype.la=function(a){this.i=a};
function xa(a,b){a.j={exception:b,td:!0};a.h=a.l||a.G}
va.prototype.return=function(a){this.j={return:a};this.h=this.G};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.v=function(a){this.h=a};
function ya(a,b,c){a.l=b;void 0!=c&&(a.G=c)}
function za(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Aa(a){var b=a.D.splice(0)[0];(b=a.j=a.j||b)?b.td?a.h=a.l||a.G:void 0!=b.v&&a.G<b.v?(a.h=b.v,a.j=null):a.h=a.G:a.h=0}
function Ba(a){this.h=new va;this.i=a}
function Ca(a,b){wa(a.h);var c=a.h.m;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.s=!1,e;var f=e.value}catch(g){return a.h.m=null,xa(a.h,g),Ea(a)}a.h.m=null;d.call(a.h,f);return Ea(a)}
function Ea(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.s=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.s=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.td)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){wa(a.h);a.h.m?b=Da(a,a.h.m.next,b,a.h.la):(a.h.la(b),b=Ea(a));return b};
this.throw=function(b){wa(a.h);a.h.m?b=Da(a,a.h.m["throw"],b,a.h.la):(xa(a.h,b),b=Ea(a));return b};
this.return=function(b){return Ca(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ga(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ga(new Fa(new Ba(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return oa});
u("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.m)}};
b.prototype.W=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.S(g):this.G(g)}};
b.prototype.S=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ea(h,g):this.G(g)};
b.prototype.m=function(g){this.la(2,g)};
b.prototype.G=function(g){this.la(1,g)};
b.prototype.la=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.R()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.R=function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.D=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.Zb(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,p){return"function"==typeof t?function(x){try{l(t(x))}catch(y){n(y)}}:p}
var l,n,r=new b(function(t,p){l=t;n=p});
this.Zb(k(g,l),k(h,n));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Zb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Zb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function r(x){return function(y){t[x]=y;p--;0==p&&l(t)}}
var t=[],p=0;do t.push(void 0),p++,d(k.value).Zb(r(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&ja(h[0],l))for(h=0;h<n.length;h++){var r=n[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:n,index:h,entry:r}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||ua});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||da});
var Ka=Ka||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Pa)&&a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Ra(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ta(a,b,c){Ta=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ra:Sa;return Ta.apply(null,arguments)}
function Ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Va(){return Date.now()}
function Wa(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function Ya(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Wa(Ya,Error);Ya.prototype.name="CustomError";function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function $a(){}
function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},cb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},eb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},fb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
cb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function gb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function hb(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a){for(var b in a)return!1;return!0}
function nb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ob(a){return null!==a&&"privembed"in a?a.privembed:!1}
function pb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function qb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function rb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=rb(a[c]);return b}
var sb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<sb.length;f++)c=sb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ub;function vb(){if(void 0===ub){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Xa,createScript:Xa,createScriptURL:Xa})}catch(c){C.console&&C.console.error(c.message)}ub=a}else ub=a}return ub}
;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb={};function Ab(a){this.h=a}
Ab.prototype.toString=function(){return this.h.toString()};function Bb(a){this.h=a}
Bb.prototype.toString=function(){return this.h+""};
function Cb(a){if(a instanceof Bb&&a.constructor===Bb)return a.h;La(a);return"type_error:TrustedResourceUrl"}
var Db={};function Eb(a){var b=vb();a=b?b.createScriptURL(a):a;return new Bb(a,Db)}
;var Fb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Gb(a){this.h=a}
Gb.prototype.toString=function(){return this.h.toString()};
var Hb={},Ib=new Gb("about:invalid#zClosurez",Hb);var Jb,Kb=E("CLOSURE_FLAGS"),Lb=Kb&&Kb[610401301];Jb=null!=Lb?Lb:!1;function Mb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Nb,Ob=C.navigator;Nb=Ob?Ob.userAgentData||null:null;function Pb(a){return Jb?Nb?Nb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Mb().indexOf(a)}
;function Qb(){return Jb?!!Nb&&0<Nb.brands.length:!1}
function Rb(){return Qb()?!1:F("Opera")}
function Sb(){return Qb()?!1:F("Trident")||F("MSIE")}
function Tb(){return F("Firefox")||F("FxiOS")}
function Ub(){return Qb()?Pb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Qb()?0:F("Edge"))||F("Silk")}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};function Wb(){a:{var a=C.document;if(a.querySelector&&(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Xb.test(a))break a;a=""}return a}
var Xb=/^[\w+/_-]+[=]{0,2}$/;function Yb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a,b){return b.match(Zb)[a]||null}
function bc(a){return $b(ac(3,a))}
function cc(a){var b=a.match(Zb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function dc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function ec(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function hc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)fc(a[b],a[b+1],c);return c.join("&")}
function ic(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function jc(a,b){var c=2==arguments.length?hc(arguments[1],0):hc(arguments,1);return ec(a,c)}
function kc(a,b){b=ic(b);return ec(a,b)}
function lc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return ec(a,b+c)}
function mc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var nc=/#|$/,oc=/[?&]($|#)/;function pc(a,b){for(var c=a.search(nc),d=0,e,f=[];0<=(e=mc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(oc,"$1")}
;function qc(a){this.jd=a}
;function rc(a,b,c){this.i=a;this.l=b;this.h=c||[];this.rb=new Map}
m=rc.prototype;m.Ud=function(a){var b=B.apply(1,arguments),c=this.Ec(b);c?c.push(new qc(a)):this.Gd(a,b)};
m.Gd=function(a){var b=this.od(B.apply(1,arguments));this.rb.set(b,[new qc(a)])};
m.Ec=function(){var a=this.od(B.apply(0,arguments));return this.rb.has(a)?this.rb.get(a):void 0};
m.me=function(){var a=this.Ec(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.rb.clear()};
m.od=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function sc(a,b){rc.call(this,a,3,b)}
w(sc,rc);sc.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.me(b);d&&(c=d.jd);this.Gd(c+a,b)};function tc(a,b){rc.call(this,a,2,b)}
w(tc,rc);tc.prototype.record=function(a){this.Ud(a,B.apply(1,arguments))};function uc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function vc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?vc.apply(null,d):uc(d)}}
;function G(){this.la=this.la;this.G=this.G}
G.prototype.la=!1;G.prototype.Z=function(){return this.la};
G.prototype.dispose=function(){this.la||(this.la=!0,this.M())};
function wc(a,b){xc(a,Ua(uc,b))}
function xc(a,b){a.la?b():(a.G||(a.G=[]),a.G.push(b))}
G.prototype.M=function(){if(this.G)for(;this.G.length;)this.G.shift()()};function yc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
yc.prototype.stopPropagation=function(){this.j=!0};
yc.prototype.preventDefault=function(){this.defaultPrevented=!0};function zc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ac(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Bc[c])c=Bc[c];else{c=String(c);if(!Bc[c]){var f=/function\s+([^\(]+)/m.exec(c);Bc[c]=f?f[1]:"[Anonymous]"}c=Bc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Ac(a,b){b||(b={});b[Cc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Cc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ac(a,b));return c}
function Cc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Bc={};var Dc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ec(){return Jb?!!Nb&&!!Nb.platform:!1}
function Fc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Gc(a){Gc[" "](a);return a}
Gc[" "]=function(){};var Hc=Rb(),Ic=Sb(),Jc=F("Edge"),Kc=F("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Lc=-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge");Lc&&F("Mobile");Ec()||F("Macintosh");Ec()||F("Windows");(Ec()?"Linux"===Nb.platform:F("Linux"))||Ec()||F("CrOS");var Mc=C.navigator||null;Mc&&(Mc.appVersion||"").indexOf("X11");var Nc=Ec()?"Android"===Nb.platform:F("Android");Fc();F("iPad");F("iPod");Fc()||F("iPad")||F("iPod");Mb().toLowerCase().indexOf("kaios");
function Oc(){var a=C.document;return a?a.documentMode:void 0}
var Pc;a:{var Qc="",Rc=function(){var a=Mb();if(Kc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Jc)return/Edge\/([\d\.]+)/.exec(a);if(Ic)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Lc)return/WebKit\/(\S+)/.exec(a);if(Hc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Rc&&(Qc=Rc?Rc[1]:"");if(Ic){var Sc=Oc();if(null!=Sc&&Sc>parseFloat(Qc)){Pc=String(Sc);break a}}Pc=Qc}var Tc=Pc,Uc;if(C.document&&Ic){var Vc=Oc();Uc=Vc?Vc:parseInt(Tc,10)||void 0}else Uc=void 0;var Wc=Uc;function Xc(a,b){yc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Wa(Xc,yc);var Yc={2:"touch",3:"pen",4:"mouse"};
Xc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Kc){a:{try{Gc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Yc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Xc.Aa.preventDefault.call(this)};
Xc.prototype.stopPropagation=function(){Xc.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Xc.prototype.preventDefault=function(){Xc.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Zc="closure_listenable_"+(1E6*Math.random()|0);var $c=0;function ad(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ec=e;this.key=++$c;this.Tb=this.Yb=!1}
function bd(a){a.Tb=!0;a.listener=null;a.proxy=null;a.src=null;a.ec=null}
;function cd(a){this.src=a;this.listeners={};this.h=0}
cd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=dd(a,b,d,e);-1<g?(b=a[g],c||(b.Yb=!1)):(b=new ad(b,this.src,f,!!d,e),b.Yb=c,a.push(b));return b};
cd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=dd(e,b,c,d);return-1<b?(bd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ed(a,b){var c=b.type;c in a.listeners&&hb(a.listeners[c],b)&&(bd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function dd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Tb&&f.listener==b&&f.capture==!!c&&f.ec==d)return e}return-1}
;var fd="closure_lm_"+(1E6*Math.random()|0),gd={},hd=0;function id(a,b,c,d,e){if(d&&d.once)jd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)id(a,b[f],c,d,e);else c=kd(c),a&&a[Zc]?a.listen(b,c,Na(d)?!!d.capture:!!d,e):ld(a,b,c,!1,d,e)}
function ld(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=md(a);h||(a[fd]=h=new cd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=nd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Dc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(od(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");hd++}}
function nd(){function a(c){return b.call(a.src,a.listener,c)}
var b=pd;return a}
function jd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)jd(a,b[f],c,d,e);else c=kd(c),a&&a[Zc]?a.h.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):ld(a,b,c,!0,d,e)}
function qd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)qd(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=kd(c),a&&a[Zc])?a.h.remove(String(b),c,d,e):a&&(a=md(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=dd(b,c,d,e)),(c=-1<a?b[a]:null)&&rd(c))}
function rd(a){if("number"!==typeof a&&a&&!a.Tb){var b=a.src;if(b&&b[Zc])ed(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(od(c),d):b.addListener&&b.removeListener&&b.removeListener(d);hd--;(c=md(b))?(ed(c,a),0==c.h&&(c.src=null,b[fd]=null)):bd(a)}}}
function od(a){return a in gd?gd[a]:gd[a]="on"+a}
function pd(a,b){if(a.Tb)a=!0;else{b=new Xc(b,this);var c=a.listener,d=a.ec||a.src;a.Yb&&rd(a);a=c.call(d,b)}return a}
function md(a){a=a[fd];return a instanceof cd?a:null}
var sd="__closure_events_fn_"+(1E9*Math.random()>>>0);function kd(a){if("function"===typeof a)return a;a[sd]||(a[sd]=function(b){return a.handleEvent(b)});
return a[sd]}
;function td(){G.call(this);this.h=new cd(this);this.ab=this;this.ea=null}
Wa(td,G);td.prototype[Zc]=!0;m=td.prototype;m.addEventListener=function(a,b,c,d){id(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){qd(this,a,b,c,d)};
function ud(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.ab;c=b.type||b;"string"===typeof b?b=new yc(b,a):b instanceof yc?b.target=b.target||a:(e=b,b=new yc(c,a),tb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=vd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=vd(g,c,!0,b)&&e,b.j||(e=vd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=vd(g,c,!1,b)&&e}
m.M=function(){td.Aa.M.call(this);this.removeAllListeners();this.ea=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,bd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function vd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Tb&&g.capture==c){var h=g.listener,k=g.ec||g.src;g.Yb&&ed(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function wd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
wd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function xd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function yd(a,b){return a+Math.random()*(b-a)}
;function zd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=zd.prototype;m.clone=function(){return new zd(this.x,this.y)};
m.equals=function(a){return a instanceof zd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Ad(a,b){this.width=a;this.height=b}
m=Ad.prototype;m.clone=function(){return new Ad(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Bd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Cd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Dd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Ed;function Fd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Cd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ta(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.hd;c.hd=null;e()}};
return function(e){d.next={hd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Gd(a){C.setTimeout(function(){throw a;},0)}
;function Hd(){this.i=this.h=null}
Hd.prototype.add=function(a,b){var c=Id.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Hd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Id=new wd(function(){return new Jd},function(a){return a.reset()});
function Jd(){this.next=this.scope=this.fn=null}
Jd.prototype.set=function(a,b){this.fn=a;this.scope=b;this.next=null};
Jd.prototype.reset=function(){this.next=this.scope=this.fn=null};var Kd,Ld=!1,Md=new Hd;function Nd(a,b){Kd||Od();Ld||(Kd(),Ld=!0);Md.add(a,b)}
function Od(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Kd=function(){a.then(Pd)}}else Kd=function(){var b=Pd;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Qb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Ed||(Ed=Fd()),Ed(b)):C.setImmediate(b)}}
function Pd(){for(var a;a=Md.remove();){try{a.fn.call(a.scope)}catch(b){Gd(b)}xd(Id,a)}Ld=!1}
;function Qd(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.G=!1;if(a!=$a)try{var b=this;a.call(void 0,function(c){Rd(b,2,c)},function(c){Rd(b,3,c)})}catch(c){Rd(this,3,c)}}
function Sd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Sd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Td=new wd(function(){return new Sd},function(a){a.reset()});
function Ud(a,b,c){var d=Td.get();d.i=a;d.h=b;d.context=c;return d}
function Vd(a){if(a instanceof Qd)return a;var b=new Qd($a);Rd(b,2,a);return b}
function Wd(a){return new Qd(function(b,c){c(a)})}
function Xd(a,b,c){Yd(a,b,c,null)||Nd(Ua(b,a))}
function Zd(a){return new Qd(function(b){var c=a.length,d=[];if(c)for(var e=function(h,k,l){c--;d[h]=k?{fulfilled:!0,value:l}:{fulfilled:!1,reason:l};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Xd(g,Ua(e,f,!0),Ua(e,f,!1));
else b(d)})}
Qd.prototype.then=function(a,b,c){return $d(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Qd.prototype.$goog_Thenable=!0;m=Qd.prototype;m.uc=function(a,b){return $d(this,null,a,b)};
m.catch=Qd.prototype.uc;m.cancel=function(a){if(0==this.h){var b=new ae(a);Nd(function(){be(this,b)},this)}};
function be(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?be(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ce(c),de(c,e,3,b)))}a.j=null}else Rd(a,3,b)}
function ee(a,b){a.i||2!=a.h&&3!=a.h||fe(a);a.l?a.l.next=b:a.i=b;a.l=b}
function $d(a,b,c,d){var e=Ud(null,null,null);e.child=new Qd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ae?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;ee(a,e);return e.child}
m.gf=function(a){this.h=0;Rd(this,2,a)};
m.hf=function(a){this.h=0;Rd(this,3,a)};
function Rd(a,b,c){0==a.h&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.h=1,Yd(c,a.gf,a.hf,a)||(a.s=c,a.h=b,a.j=null,fe(a),3!=b||c instanceof ae||ge(a,c)))}
function Yd(a,b,c,d){if(a instanceof Qd)return ee(a,Ud(b||$a,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Na(a))try{var f=a.then;if("function"===typeof f)return he(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function he(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function fe(a){a.G||(a.G=!0,Nd(a.ge,a))}
function ce(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.ge=function(){for(var a;a=ce(this);)de(this,a,this.h,this.s);this.G=!1};
function de(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,ie(b,c,d);else try{b.j?b.i.call(b.context):ie(b,c,d)}catch(e){je.call(null,e)}xd(Td,b)}
function ie(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ge(a,b){a.m=!0;Nd(function(){a.m&&je.call(null,b)})}
var je=Gd;function ae(a){Ya.call(this,a)}
Wa(ae,Ya);ae.prototype.name="cancel";function ke(a,b){td.call(this);this.j=a||1;this.i=b||C;this.l=Ta(this.ef,this);this.m=Va()}
Wa(ke,td);m=ke.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.ef=function(){if(this.enabled){var a=Va()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),ud(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Va())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.M=function(){ke.Aa.M.call(this);this.stop();delete this.i};
function le(a,b,c){if("function"===typeof a)c&&(a=Ta(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ta(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function me(a){G.call(this);this.D=a;this.i=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.h=new ke(this.flushInterval);this.h.listen("tick",this.pb,!1,this);wc(this,this.h);this.m=!1}
w(me,G);m=me.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ne(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.pb()}
m.pb=function(){var a=this.i.values();a=[].concat(ia(a)).filter(function(b){return b.rb.size});
a.length&&this.D.flush(a,this.m);oe(a);this.j=0;this.h.enabled&&this.h.stop()};
m.bd=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new sc(a,b))};
m.cd=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new tc(a,b))};
function pe(a,b){return a.s.has(b)?void 0:a.i.get(b)}
m.vc=function(a){this.Sd.apply(this,[a,1].concat(ia(B.apply(1,arguments))))};
m.Sd=function(a,b){var c=B.apply(2,arguments),d=pe(this,a);d&&d instanceof sc&&(d.j(b,c),ne(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=pe(this,a);d&&d instanceof tc&&(d.record(b,c),ne(this))};
function oe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function qe(a){this.h=a;this.h.bd("/client_streamz/bg/fiec",{ub:3,tb:"rk"},{ub:2,tb:"ec"},{ub:3,tb:"em"})}
function re(a,b,c,d){a.h.vc("/client_streamz/bg/fiec",b,c,d)}
function se(a){this.h=a;this.h.cd("/client_streamz/bg/fil",{ub:3,tb:"rk"})}
se.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function te(a){this.h=a;this.h.bd("/client_streamz/bg/fsc",{ub:3,tb:"rk"})}
function ue(a){this.h=a;this.h.cd("/client_streamz/bg/fsl",{ub:3,tb:"rk"})}
ue.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var ve={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function we(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=xe(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=ye(a,h),d+=ye(a,h+4),e+=ye(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return ve.toString(e)}
function xe(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function ye(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Tb();var ze=Fc()||F("iPod"),Ae=F("iPad");!F("Android")||Ub()||Tb()||Rb()||F("Silk");Ub();var Be=F("Safari")&&!(Ub()||(Qb()?0:F("Coast"))||Rb()||(Qb()?0:F("Edge"))||(Qb()?Pb("Microsoft Edge"):F("Edg/"))||(Qb()?Pb("Opera"):F("OPR"))||Tb()||F("Silk")||F("Android"))&&!(Fc()||F("iPad")||F("iPod"));var Ce={},De=null;function Ee(a,b){Ma(a);void 0===b&&(b=0);Fe();b=Ce[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ge(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;He(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function He(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=De[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Fe();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Fe(){if(!De){De={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ce[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===De[f]&&(De[f]=e)}}}}
;var Ie="undefined"!==typeof Uint8Array,Je=!Ic&&"function"===typeof btoa;function Ke(a){if(!Je)return Ee(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Le=/[-_.]/g,Me={"-":"+",_:"/",".":"="};function Ne(a){return Me[a]||""}
function Oe(a){return Ie&&null!=a&&a instanceof Uint8Array}
var Pe={};var Qe;function Re(a){if(a!==Pe)throw Error("illegal external caller");}
function Se(a,b){Re(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Se.prototype.isEmpty=function(){return null==this.value_};
Se.prototype.sizeBytes=function(){Re(Pe);var a=this.value_;if(null!=a&&!Oe(a))if("string"===typeof a)if(Je){Le.test(a)&&(a=a.replace(Le,Ne));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ge(a);else La(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Te(a){return Array.prototype.slice.call(a)}
;var Ue="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ia(Object.values({Hf:1,Gf:2,Ff:4,Kf:8,Jf:16,If:32,yf:64,Lf:128,Ef:256,Df:512})));var Ve=Ue?function(a,b){a[Ue]|=b}:function(a,b){void 0!==a.Ca?a.Ca|=b:Object.defineProperties(a,{Ca:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function We(a){var b=Xe(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Te(a)),Ye(a,b|1));return a}
var Ze=Ue?function(a,b){a[Ue]&=~b}:function(a,b){void 0!==a.Ca&&(a.Ca&=~b)},Xe=Ue?function(a){return a[Ue]|0}:function(a){return a.Ca|0},$e=Ue?function(a){return a[Ue]}:function(a){return a.Ca},Ye=Ue?function(a,b){a[Ue]=b}:function(a,b){void 0!==a.Ca?a.Ca=b:Object.defineProperties(a,{Ca:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function af(a,b){Object.isFrozen(a)&&(a=Te(a));Ye(a,b);return a}
function bf(a){Ve(a,1);return a}
function cf(a,b){Ye(b,(a|0)&-255)}
function df(a,b){Ye(b,(a|34)&-221)}
function ef(a){a=a>>10&1023;return 0===a?536870912:a}
;var ff={};function gf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var hf,jf,kf=[];Ye(kf,39);jf=Object.freeze(kf);function lf(a){if(a&2)throw Error();}
;function mf(a){return a.displayName||a.name||"unknown type name"}
function nf(a){if(null!=a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+La(a)+": "+a);a=!!a}return a}
function of(a){return"number"===typeof a&&!Number.isNaN(a)||!!a&&"string"===typeof a&&!isNaN(a)}
function pf(a){if(null!=a&&"number"!==typeof a)throw Error();return a}
function qf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a}
function rf(a){if(null!=a){if(!of(a))throw Error("Expected an int64 value encoded as a number or a string but got "+a+" a "+La(a));a="string"===typeof a?sf(a):tf(a)}return a}
function tf(a){of(a);return a}
function sf(a){of(a);return a}
function uf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function vf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+mf(b)+" but got "+(a&&mf(a.constructor)));}
function wf(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Oc===ff)return a;if(d){var e=d=Xe(a);0===e&&(e|=c&32);e|=c&2;e!==d&&Ye(a,e);return new b(a)}}
;var xf;function yf(a,b){Xe(b);xf=b;a=new a(b);xf=void 0;return a}
function zf(a,b,c){null==a&&(a=xf);xf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-1047553|(b&1023)<<10)}else{if(!Array.isArray(a))throw Error();d=Xe(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(gf(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(Af(c,b,g),e=1023);d=d&-1047553|(e&1023)<<10;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(Af(c,g,{}),d|=256,b=1023),d=d&-1047553|(b&1023)<<10)}}Ye(a,d);return a}
function Af(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function Bf(a,b){return Cf(b)}
function Cf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(Oe(a))return Ke(a);if(a instanceof Se){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=Ke(b)}}}return a}
;function Df(a,b,c){a=Te(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Ef(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Xe(a)&1?void 0:f&&Xe(a)&2?a:Ff(a,b,c,void 0!==d,e,f);else if(gf(a)){var g={},h;for(h in a)g[h]=Ef(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Ff(a,b,c,d,e,f){var g=d||c?Xe(a):0;d=d?!!(g&32):void 0;a=Te(a);for(var h=0;h<a.length;h++)a[h]=Ef(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Gf(a){return a.Oc===ff?a.toJSON():Cf(a)}
;function Hf(a,b,c){c=void 0===c?df:c;if(null!=a){if(Ie&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Xe(a);return d&2?a:!b||d&68||!(d&32||0===d)?Ff(a,Hf,d&4?df:c,!0,!1,!0):(Ye(a,d|34),a)}a.Oc===ff&&(b=a.A,c=$e(b),a=c&2?a:yf(a.constructor,If(b,c,!0)));return a}}
function If(a,b,c){var d=c||b&2?df:cf,e=!!(b&32);a=Df(a,b,function(f){return Hf(f,e,d)});
Ve(a,32|(c?2:0));return a}
function Jf(a){var b=a.A,c=$e(b);return c&2?yf(a.constructor,If(b,c,!1)):a}
;function Kf(a,b){a=a.A;return Lf(a,$e(a),b)}
function Lf(a,b,c,d){if(-1===c)return null;if(c>=ef(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function J(a,b,c,d){var e=a.A,f=$e(e);lf(f);Mf(e,f,b,c,d);return a}
function Mf(a,b,c,d,e){gf(d);var f=ef(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Ye(a,e)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function Nf(a){return void 0!==Of(a,Pf,11,!1)}
function Qf(a,b,c,d){a=a.A;var e=$e(a);lf(e);for(var f=0,g=0;g<c.length;g++){var h=c[g];null!=Lf(a,e,h)&&(0!==f&&Mf(a,e,f),f=h)}(c=f)&&c!==b&&null!=d&&Mf(a,e,c);Mf(a,e,b,d)}
function Of(a,b,c,d){a=a.A;var e=$e(a),f=Lf(a,e,c,d);b=wf(f,b,e);b!==f&&null!=b&&Mf(a,e,c,b,d);return b}
function Rf(a,b,c,d){d=void 0===d?!1:d;b=Of(a,b,c,d);if(null==b)return b;a=a.A;var e=$e(a);if(!(e&2)){var f=Jf(b);f!==b&&(b=f,Mf(a,e,c,b,d))}return b}
function Sf(a,b,c,d){null!=d?vf(d,b):d=void 0;return J(a,c,d)}
function Tf(a,b,c,d){var e=a.A,f=$e(e);lf(f);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];vf(k,b);g=g&&!(Xe(k.A)&2)}b=Xe(d);h=b|1;h=(g?h|8:h&-9)|4;h!=b&&(d=af(d,h))}null==d&&(d=void 0);Mf(e,f,c,d);return a}
function Uf(a,b){a=Kf(a,b);var c;null==a?c=a:of(a)?"number"===typeof a?c=tf(a):c=sf(a):c=void 0;return c}
function Vf(a){a=Kf(a,1);a=null==a?a:of(a)?"string"===typeof a?sf(a):tf(a):void 0;return a}
function Wf(){var a=new Xf;return J(a,1,1)}
;function Yf(a,b,c){this.A=zf(a,b,c)}
m=Yf.prototype;m.toJSON=function(){if(hf)var a=Zf(this,this.A,!1);else a=Ff(this.A,Gf,void 0,void 0,!1,!1),a=Zf(this,a,!0);return a};
m.serialize=function(){hf=!0;try{return JSON.stringify(this.toJSON(),Bf)}finally{hf=!1}};
m.clone=function(){var a=this.A,b=$e(a);return yf(this.constructor,If(a,b,!1))};
m.Oc=ff;m.toString=function(){return Zf(this,this.A,!1).toString()};
function Zf(a,b,c){var d=a.constructor.Va,e=$e(c?a.A:b),f=ef(e);e=!1;if(d){if(!c){b=Te(b);var g;if(b.length&&gf(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=$e(a.A);a=ef(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var n=g[k];null==n?g[k]=c?jf:bf([]):c&&n!==jf&&We(n)}else h||(n=void 0,g.length&&gf(n=g[g.length-1])?h=n:g.push(h={})),n=h[k],null==h[k]?h[k]=c?jf:bf([]):c&&n!==jf&&We(n)}d=b.length;if(!d)return b;var r;
if(gf(h=b[d-1])){a:{var t=h;g={};c=!1;for(var p in t)a=t[p],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[p]=a:c=!0;if(c){for(var x in g){t=g;break a}t=null}}t!=h&&(r=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var y=!0}if(!r&&!y)return b;var z;e?z=b:z=Array.prototype.slice.call(b,0,d);b=z;e&&(b.length=d);t&&b.push(t);return b}
;function $f(a){this.A=zf(a)}
w($f,Yf);var ag=[1,2,3];function bg(a){this.A=zf(a)}
w(bg,Yf);var cg=[1,2,3];function dg(a){this.A=zf(a)}
w(dg,Yf);dg.Va=[1];function eg(a){this.A=zf(a)}
w(eg,Yf);eg.Va=[3,6,4];function fg(a){this.A=zf(a)}
w(fg,Yf);fg.Va=[1];function gg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function hg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(r){for(var t=g,p=0;64>p;p+=4)t[p/4]=r[p]<<24|r[p+1]<<16|r[p+2]<<8|r[p+3];for(p=16;80>p;p++)r=t[p-3]^t[p-8]^t[p-14]^t[p-16],t[p]=(r<<1|r>>>31)&4294967295;r=e[0];var x=e[1],y=e[2],z=e[3],H=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var I=z^x&(y^z);var M=1518500249}else I=x^y^z,M=1859775393;else 60>p?(I=x&y|z&(x|y),M=2400959708):(I=x^y^z,M=3395469782);I=((r<<5|r>>>27)&4294967295)+I+H+M+t[p]&4294967295;H=z;z=y;y=(x<<30|x>>>2)&4294967295;x=r;r=I}e[0]=e[0]+r&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(r,t){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var p=[],x=0,y=r.length;x<y;++x)p.push(r.charCodeAt(x));r=p}t||(t=r.length);p=0;if(0==l)for(;p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64;for(;p<t;)if(f[l++]=r[p++],n++,64==l)for(l=0,b(f);p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64}
function d(){var r=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=t&255,t>>>=8;b(f);for(p=t=0;5>p;p++)for(var x=24;0<=x;x-=8)r[t++]=e[p]>>x&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,be:function(){for(var r=d(),t="",p=0;p<r.length;p++)t+="0123456789ABCDEF".charAt(Math.floor(r[p]/16))+"0123456789ABCDEF".charAt(r[p]%16);return t}}}
;function ig(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,jg(gg(d),a,c||null)].join(" "):null}
function jg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],cb(d,function(h){e.push(h)}),kg(e.join(" "));
var f=[],g=[];cb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];cb(d,function(h){e.push(h)});
a=kg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function kg(a){var b=hg();b.update(a);return b.be().toLowerCase()}
;var lg={};function mg(a){this.h=a||{cookie:""}}
m=mg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.dg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ic}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Fb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ic:0,path:b,domain:c});return d};
m.Hc=function(){return ng(this).keys};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=ng(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function ng(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Fb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var og=new mg("undefined"==typeof document?null:document);function pg(a){return!!lg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function qg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;pg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new mg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");pg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function rg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new mg(document)).get(b));return a?ig(a,c,d):null}
function sg(a,b){b=void 0===b?!1:b;var c=gg(String(C.location.href)),d=[];if(qg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new mg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?ig(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&pg(b)&&((b=rg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=rg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function tg(a){this.A=zf(a)}
w(tg,Yf);tg.Va=[2];function ug(a){this.A=zf(a)}
w(ug,Yf);function vg(a){this.A=zf(a)}
w(vg,Yf);function wg(a){this.h=this.i=this.j=a}
wg.prototype.reset=function(){this.h=this.i=this.j};
wg.prototype.getValue=function(){return this.i};function xg(){}
xg.prototype.serialize=function(a){var b=[];yg(this,a,b);return b.join("")};
function yg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),yg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),zg(d,c),c.push(":"),yg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":zg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ag={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Bg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function zg(a,b){b.push('"',a.replace(Bg,function(c){var d=Ag[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ag[c]=d);return d}),'"')}
;function Cg(){}
Cg.prototype.h=null;Cg.prototype.getOptions=function(){var a;(a=this.h)||(a={},Dg(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Eg;function Gg(){}
Wa(Gg,Cg);function Hg(a){return(a=Dg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Dg(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Eg=new Gg;function Ig(a){td.call(this);this.headers=new Map;this.S=a||null;this.i=!1;this.R=this.I=null;this.l=this.da="";this.j=this.Y=this.s=this.W=!1;this.m=0;this.D=null;this.Fa="";this.ma=this.sa=!1}
Wa(Ig,td);var Jg=/^https?$/i,Kg=["POST","PUT"],Lg=[];function Mg(a,b,c,d,e,f,g){var h=new Ig;Lg.push(h);b&&h.listen("complete",b);h.h.add("ready",h.ae,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.sa=g);h.send(a,c,d,e)}
m=Ig.prototype;m.ae=function(){this.dispose();hb(Lg,this)};
m.send=function(a,b,c,d){if(this.I)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.W=!1;this.i=!0;this.I=this.S?Hg(this.S):Hg(Eg);this.R=this.S?this.S.getOptions():Eg.getOptions();this.I.onreadystatechange=Ta(this.xd,this);try{this.getStatus(),this.Y=!0,this.I.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();Ng(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=bb(Kg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.I.setRequestHeader(d,c);this.Fa&&(this.I.responseType=this.Fa);"withCredentials"in this.I&&this.I.withCredentials!==this.sa&&(this.I.withCredentials=this.sa);try{Og(this),0<this.m&&(this.ma=Pg(this.I),this.getStatus(),this.ma?(this.I.timeout=this.m,this.I.ontimeout=Ta(this.Ld,
this)):this.D=le(this.Ld,this.m,this)),this.getStatus(),this.s=!0,this.I.send(a),this.s=!1}catch(g){this.getStatus(),Ng(this,g)}};
function Pg(a){return Ic&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Ld=function(){"undefined"!=typeof Ka&&this.I&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),ud(this,"timeout"),this.abort(8))};
function Ng(a,b){a.i=!1;a.I&&(a.j=!0,a.I.abort(),a.j=!1);a.l=b;Qg(a);Rg(a)}
function Qg(a){a.W||(a.W=!0,ud(a,"complete"),ud(a,"error"))}
m.abort=function(){this.I&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.I.abort(),this.j=!1,ud(this,"complete"),ud(this,"abort"),Rg(this))};
m.M=function(){this.I&&(this.i&&(this.i=!1,this.j=!0,this.I.abort(),this.j=!1),Rg(this,!0));Ig.Aa.M.call(this)};
m.xd=function(){this.Z()||(this.Y||this.s||this.j?Sg(this):this.Fe())};
m.Fe=function(){Sg(this)};
function Sg(a){if(a.i&&"undefined"!=typeof Ka)if(a.R[1]&&4==Tg(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==Tg(a))le(a.xd,0,a);else if(ud(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Ug(a))ud(a,"complete"),ud(a,"success");else{try{var b=2<Tg(a)?a.I.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Qg(a)}}finally{Rg(a)}}}
function Rg(a,b){if(a.I){Og(a);var c=a.I,d=a.R[0]?function(){}:null;
a.I=null;a.R=null;b||ud(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Og(a){a.I&&a.ma&&(a.I.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.I};
m.isComplete=function(){return 4==Tg(this)};
function Ug(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=ac(1,String(a.da)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Jg.test(a?a.toLowerCase():"");c=b}return c}
function Tg(a){return a.I?a.I.readyState:0}
m.getStatus=function(){try{return 2<Tg(this)?this.I.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Vg(a){this.A=zf(a)}
w(Vg,Yf);function Wg(a){this.A=zf(a)}
w(Wg,Yf);Wg.Va=[1];function Pf(a){this.A=zf(a)}
w(Pf,Yf);var Xg=["platform","platformVersion","architecture","model","uaFullVersion"];new Wg;function Xf(a){this.A=zf(a)}
w(Xf,Yf);function Yg(a){this.A=zf(a)}
w(Yg,Yf);function Zg(a){this.A=zf(a,34)}
w(Zg,Yf);Zg.Va=[3,20,27];function $g(a){this.A=zf(a,19)}
w($g,Yf);$g.Va=[3,5];function ah(a){this.A=zf(a,6)}
w(ah,Yf);var bh=function(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Ve(b,32);b=yf(a,b)}return b}}(ah);
ah.Va=[5];function ch(a){this.A=zf(a)}
w(ch,Yf);var dh;dh=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=Rf;this.defaultValue=void 0}(175237375,{Uf:0},ch);function eh(a){G.call(this);var b=this;this.componentId="";this.i=[];this.ea="";this.ma=this.Y=-1;this.da=!1;this.D=this.experimentIds=null;this.s=this.l=0;this.sa=1;this.timeoutMillis=0;this.R=!1;this.logSource=a.logSource;this.vb=a.vb||function(){};
this.j=new fh(a.logSource,a.zb);this.network=a.network;this.Gb=a.Gb||null;this.bufferSize=1E3;this.Fa=Ua(yd,0,1);this.W=a.jf||null;this.sessionIndex=a.sessionIndex||null;this.Nb=a.Nb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.ld;this.zb=a.zb||!1;var c=Wf();gh(this.j,c);this.m=new wg(1E4);this.h=new ke(this.m.getValue());wc(this,this.h);a=hh(this,a.dd);id(this.h,"tick",a,!1,this);this.S=new ke(6E5);wc(this,this.S);id(this.S,"tick",a,!1,this);this.Nb||this.S.start();this.zb||
(id(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.Cc()}),id(document,"pagehide",this.Cc,!1,this))}
w(eh,G);function hh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=eh.prototype;m.M=function(){this.Cc();G.prototype.M.call(this)};
function ih(a){a.W||(a.W=.01>a.Fa()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.W}
function jh(a,b){a.m=new wg(1>b?1:b);a.h.setInterval(a.m.getValue())}
m.log=function(a){a=a.clone();var b=this.sa++;a=J(a,21,rf(b));this.componentId&&J(a,26,uf(this.componentId));if(!Vf(a)){b=a;var c=Date.now().toString();J(b,1,rf(c))}null==Uf(a,15)&&J(a,15,rf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=this.experimentIds.clone(),Sf(a,tg,16,b));b=this.i.length-this.bufferSize+1;0<b&&(this.i.splice(0,b),this.l+=b);this.i.push(a);this.Nb||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.i.length)a&&a();else if(this.R)kh(this.j,3),lh(this);else{var d=Date.now();if(this.ma>d&&this.Y<d)b&&b("throttled");else{kh(this.j,1);var e=mh(this.j,this.i,this.l,this.s,this.Gb);d={};var f=this.vb();f&&(d.Authorization=f);var g=ih(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=lc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=lc(g,"pageId",this.pageId));if(f&&this.ea===f)b&&b("stale-auth-token");else{this.i=
[];this.h.enabled&&this.h.stop();this.l=0;var h=e.serialize(),k;this.D&&this.D.isSupported(h.length)&&(k=this.D.compress(h));var l={url:g,body:h,Yd:1,Sc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(p){c.m.reset();c.h.setInterval(c.m.getValue());if(p){var x=null;try{var y=JSON.stringify(JSON.parse(p.replace(")]}'\n","")));x=bh(y)}catch(H){}if(x){p=Number;y="-1";y=void 0===y?"0":y;var z=Vf(x);p=p(null!=z?z:y);0<p&&(c.Y=Date.now(),c.ma=c.Y+p);
x=dh.ctor?dh.i(x,dh.ctor,dh.h,!0):dh.i(x,dh.h,null,!0);if(p=null===x?void 0:x)x=-1,x=void 0===x?0:x,p=qf(Kf(p,1)),x=null!=p?p:x,-1!==x&&(c.da||jh(c,x))}}a&&a();c.s=0},r=function(p,x){var y=e.A,z=$e(y),H=!!(z&2);
var I=H?1:2,M=!!(z&2);var N=z&2;var K=Lf(y,z,3);Array.isArray(K)||(K=jf);var V=Xe(K);V&1||bf(K);N?V&2||Ve(K,34):V&32&&!(V&2)&&Ze(K,32);N=K;if(N!==jf&&Xe(N)&4)3!==I&&(M?2===I&&(I=Xe(N),N=Te(N),Ye(N,I),Mf(y,z,3,N)):(M=Object.isFrozen(N),1===I?M||Object.freeze(N):(I=Xe(N),K=I&-35,M&&(N=Te(N),I=0,Mf(y,z,3,N)),I!==K&&Ye(N,K)))),y=N;else{K=N;N=!!(z&2);var Z=!!(Xe(K)&2);M=K;!N&&Z&&(K=Te(K));V=z|(Z?2:0);Z=Z||void 0;for(var fa=0,qa=0;fa<K.length;fa++){var na=wf(K[fa],Zg,V);void 0!==na&&(Z=Z||$e(na.A)&2,K[qa++]=
na)}qa<fa&&(K.length=qa);Z=!Z;V=Xe(K);fa=V|5;Z=Z?fa|8:fa&-9;V!=Z&&(K=af(K,Z));M!==K&&Mf(y,z,3,K);(N&&2!==I||1===I)&&Object.freeze(K);y=K}if(!(H||Xe(y)&8)){for(H=0;H<y.length;H++)z=y[H],I=Jf(z),z!==I&&(y[H]=I);Ve(y,8)}H=Uf(e,14);z=c.m;z.h=Math.min(3E5,2*z.h);z.i=Math.min(3E5,z.h+Math.round(.2*(Math.random()-.5)*z.h));c.h.setInterval(c.m.getValue());401===p&&f&&(c.ea=f);H&&(c.l+=H);void 0===x&&(x=c.isRetryable(p));x&&(c.i=y.concat(c.i),c.Nb||c.h.enabled||c.h.start());b&&b("net-send-failed",p);++c.s},
t=function(){c.network&&c.network.send(l,n,r)};
k?k.then(function(p){l.Sc["Content-Encoding"]="gzip";l.Sc["Content-Type"]="application/binary";l.body=p;l.Yd=2;t()},function(){t()}):t()}}}};
m.Cc=function(){nh(this.j,!0);this.flush();nh(this.j,!1)};
function lh(a){oh(a,function(b,c){b=lc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.R&&!d&&(a.R=!1);return d})}
function oh(a,b){if(0!==a.i.length){var c=pc(ih(a),"format");c=jc(c,"auth",a.vb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.i.length;++d){var e=a.i.slice(0,32),f=mh(a.j,e,a.l,a.s,a.Gb);if(!b(c,f)){++a.s;break}a.l=0;a.s=0;a.i=a.i.slice(e.length)}a.h.enabled&&a.h.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function fh(a,b){this.zb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new $g;Number.isInteger(a)&&J(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));gh(this,new Xf)}
function gh(a,b){Sf(a.h,Xf,1,b);Kf(b,1)||J(b,1,1);if(!a.zb){b=ph(a);var c=Kf(b,5);(null==c||"string"===typeof c)&&c||J(b,5,uf(a.locale))}a.uach&&(b=ph(a),Rf(b,Wg,9)||Sf(b,Wg,9,a.uach))}
function kh(a,b){Nf(Rf(a.h,Xf,1))&&(a=qh(a),J(a,1,b))}
function nh(a,b){Nf(Rf(a.h,Xf,1))&&(a=qh(a),J(a,2,nf(b)))}
function rh(a,b){var c=void 0===c?Xg:c;b(window,c).then(function(d){a.uach=d;d=ph(a);Sf(d,Wg,9,a.uach);return!0}).catch(function(){return!1})}
function ph(a){a=Rf(a.h,Xf,1);var b=Rf(a,Pf,11);b||(b=new Pf,Sf(a,Pf,11,b));return b}
function qh(a){a=ph(a);var b=Rf(a,Vg,10);b||(b=new Vg,J(b,2,nf(!1)),Sf(a,Vg,10,b));return b}
function mh(a,b,c,d,e){c=void 0===c?0:c;d=void 0===d?0:d;if(Nf(Rf(a.h,Xf,1))){var f=qh(a);J(f,3,pf(d))}a=a.h.clone();d=Date.now().toString();a=J(a,4,rf(d));b=Tf(a,Zg,3,b);e&&(a=new ug,e=J(a,13,pf(e)),a=new vg,e=Sf(a,ug,2,e),a=new Yg,e=Sf(a,vg,1,e),Sf(b,Yg,18,e));c&&J(b,14,rf(c));return b}
;function sh(){}
sh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Mg(a.url,function(d){d=d.target;if(Ug(d)){try{var e=d.I?d.I.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Sc,a.timeoutMillis,a.withCredentials)};function th(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new sh}
w(th,G);th.prototype.ld=function(){this.W=!0;return this};function uh(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;G.call(this);f?a=f:(a=new th(a,"0"),a.componentId=b,wc(this,a),""!=c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),b=new eh({logSource:a.logSource,vb:a.vb?a.vb:sg,sessionIndex:a.sessionIndex,jf:a.i,zb:a.j,Nb:!1,ld:a.W,pageId:a.pageId,dd:a.dd,network:a.network?a.network:void 0}),wc(a,b),a.s&&gh(b.j,a.s),a.h&&(c=a.h,d=ph(b.j),J(d,7,uf(c))),a.m&&(b.D=a.m),a.componentId&&(b.componentId=a.componentId),
a.Gb&&(b.Gb=a.Gb),a.l&&((c=a.l)?(b.experimentIds||(b.experimentIds=new tg),c=c.serialize(),J(b.experimentIds,4,uf(c))):b.experimentIds&&J(b.experimentIds,4,void 0,!1)),a.R&&(e=a.R,b.experimentIds||(b.experimentIds=new tg),c=b.experimentIds.A,d=$e(c),lf(d),e=null==e?jf:We(e),Mf(c,d,2,e)),a.D&&(c=a.D,b.da=!0,jh(b,c)),a.S&&rh(b.j,a.S),a=b);this.h=a}
w(uh,G);
uh.prototype.flush=function(a){var b=a||[];if(b.length){a=new fg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new eg;g=J(g,1,uf(f.i));for(var h=f,k=[],l=0;l<h.h.length;l++)k.push(h.h[l].tb);h=g.A;l=$e(h);lf(l);if(null==k)Mf(h,l,3);else{if(!(Xe(k)&4)){Object.isFrozen(k)&&(k=Te(k));for(var n=0;n<k.length;n++){var r=k,t=n,p=k[n];if("string"!==typeof p)throw Error();r[t]=p}Ye(k,5)}Mf(h,l,3,k)}k=[];h=[];l=v(f.rb.keys());for(n=l.next();!n.done;n=l.next())h.push(n.value.split(","));for(l=0;l<h.length;l++){n=
h[l];r=f.l;t=f.Ec(n)||[];p=[];for(var x=0;x<t.length;x++){var y=t[x],z=y&&y.jd;y=new bg;switch(r){case 3:var H=Number(z);Number.isFinite(H)&&Qf(y,1,cg,rf(H));break;case 2:H=y;z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof z+": "+z);Qf(H,2,cg,z)}p.push(y)}r=p;for(t=0;t<r.length;t++){p=r[t];x=new dg;p=Sf(x,bg,2,p);x=n;y=[];H=f;z=[];for(var I=0;I<H.h.length;I++)z.push(H.h[I].ub);H=z;for(z=0;z<H.length;z++){var M=H[z],
N=x[z];I=new $f;switch(M){case 3:Qf(I,1,ag,uf(String(N)));break;case 2:M=Number(N);Number.isFinite(M)&&Qf(I,2,ag,pf(M));break;case 1:Qf(I,3,ag,nf("true"==N))}y.push(I)}Tf(p,$f,1,y);k.push(p)}}Tf(g,dg,4,k);c.push(g);e.clear()}Tf(a,eg,1,c);b=this.h;a instanceof Zg?b.log(a):(c=new Zg,a=a.serialize(),a=J(c,8,uf(a)),b.log(a));this.h.flush()}};function vh(a){this.s=wh();this.m=new uh(1828);this.h=new me(this.m);this.G=new se(this.h);this.j=new te(this.h);this.l=new ue(this.h);this.i=new qe(this.h);this.Pa=we(a)}
function wh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function xh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function yh(a){function b(p,x){Promise.resolve().then(function(){var y;null!=(y=c.va)&&y.G.record(wh()-y.s,y.Pa);g.resolve({Wd:p,af:x})})}
var c=this;this.h=!1;var d=a.program;var e=a.oe;if(!1!==a.Ke){var f;this.va=null!=(f=a.va)?f:new vh(e)}var g=new xh;this.i=g.promise;if(!C[e]){var h;null!=(h=this.va)&&re(h.i,h.Pa,1,"");var k;null!=(k=this.va)&&k.h.pb()}else if(!C[e].a){var l;null!=(l=this.va)&&re(l.i,l.Pa,2,"");var n;null!=(n=this.va)&&n.h.pb()}try{this.j=v((0,C[e].a)(d,b,!0,a.kg)).next().value,this.Ze=g.promise.then(function(){})}catch(p){var r;
null!=(r=this.va)&&re(r.i,r.Pa,4,p.message);var t;null!=(t=this.va)&&t.h.pb();throw p;}}
yh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");var c=wh(),d;null!=(d=this.va)&&d.j.h.vc("/client_streamz/bg/fsc",d.Pa);return this.i.then(function(e){var f=e.Wd;return new Promise(function(g){f(function(h){var k;null!=(k=b.va)&&k.l.record(wh()-c,k.Pa);g(h)},[a.kd,
a.bf,a.lf])})})};
yh.prototype.Id=function(a){if(this.h)throw Error("Already disposed");var b=wh(),c;null!=(c=this.va)&&c.j.h.vc("/client_streamz/bg/fsc",c.Pa);a=this.j([a.kd,a.bf,a.lf]);var d;null!=(d=this.va)&&d.l.record(wh()-b,d.Pa);return a};
yh.prototype.dispose=function(){var a;null!=(a=this.va)&&a.h.pb();this.h=!0;this.i.then(function(b){(b=b.af)&&b()})};
yh.prototype.Z=function(){return this.h};var zh=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ah;try{new URL("s://g"),Ah=!0}catch(a){Ah=!1}var Bh=Ah;function Ch(a){if(a instanceof Gb)a instanceof Gb&&a.constructor===Gb?a=a.h:(La(a),a="type_error:SafeUrl");else{b:if(Bh){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function Dh(a,b){b=Ch(b);void 0!==b&&(a.href=b)}
;var Eh={};function Fh(){}
function Gh(a){this.h=a}
w(Gh,Fh);Gh.prototype.toString=function(){return this.h};function Hh(a){var b="true".toString(),c=[new Gh(Ih[0].toLowerCase(),Eh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Gh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Jh(){throw Error("unknown trace type");}
;var Kh="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Lh(a,b){if(b instanceof Bb)a.href=Cb(b).toString();else{if(-1===Kh.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Ch(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function Mh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Nh(a,b){a.src=Cb(b);Mh(a)}
;(function(){return""}).toString().indexOf("`");function Oh(a){this.ye=a}
function Ph(a){return new Oh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Qh=[Ph("data"),Ph("http"),Ph("https"),Ph("mailto"),Ph("ftp"),new Oh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Rh(a){var b=Sh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Th(){var a=[];Rh(function(b){a.push(b)});
return a}
var Sh={mf:"allow-forms",nf:"allow-modals",pf:"allow-orientation-lock",qf:"allow-pointer-lock",rf:"allow-popups",sf:"allow-popups-to-escape-sandbox",tf:"allow-presentation",uf:"allow-same-origin",vf:"allow-scripts",wf:"allow-top-navigation",xf:"allow-top-navigation-by-user-activation"},Uh=ab(function(){return Th()});
function Vh(){var a=Wh(),b={};cb(Uh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Wh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Xh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Yh=(new Date).getTime();"undefined"!==typeof TextDecoder&&new TextDecoder;var Zh="undefined"!==typeof TextEncoder?new TextEncoder:null,$h=Zh?function(a){return Zh.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ai(a){td.call(this);var b=this;this.s=this.j=0;this.Da=null!=a?a:{na:function(e,f){return setTimeout(e,f)},
oa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(bi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.s||ci(this)}
w(ai,td);function di(){var a=ei;ai.h||(ai.h=new ai(a));return ai.h}
ai.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.oa(this.s);delete ai.h};
ai.prototype.wa=function(){return this.i};
function ci(a){a.s=a.Da.na(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(bi(a),3):c.yield(bi(a),3);ci(a);c.h=0})},3E4)}
function bi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.Da.na(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.D=[h.j];h.l=0;h.G=0;a.m=void 0;a.j&&(a.Da.oa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?ud(a,"networkstatus-online"):ud(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:za(h),g=!1,h.v(3)}})})}
;function fi(){this.data=[];this.h=-1}
fi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
fi.prototype.get=function(a){return!!this.data[a]};
function gi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function hi(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
hi.prototype[Symbol.iterator]=function(){return this};
hi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function ii(a,b){return new hi(a,b)}
;function ji(){this.blockSize=-1}
;function ki(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.G=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Wa(ki,ji);ki.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function li(a,b,c){c||(c=0);var d=a.G;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
ki.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)li(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){li(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){li(this,e);f=0;break}}this.i=f;this.l+=b}};
ki.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;li(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function mi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function ni(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function oi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:mi(a).match(/\S+/g)||[],b=0<=bb(a,b));return b}
function pi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):oi(a,"inverted-hdpi")&&ni(a,Array.prototype.filter.call(a.classList?a.classList:mi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function qi(){}
qi.prototype.next=function(){return ri};
var ri={done:!0,value:void 0};function si(a){return{value:a,done:!1}}
qi.prototype.Ga=function(){return this};function ti(a){if(a instanceof ui||a instanceof vi||a instanceof wi)return a;if("function"==typeof a.next)return new ui(function(){return a});
if("function"==typeof a[Symbol.iterator])return new ui(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ga)return new ui(function(){return a.Ga()});
throw Error("Not an iterator or iterable.");}
function ui(a){this.i=a}
ui.prototype.Ga=function(){return new vi(this.i())};
ui.prototype[Symbol.iterator]=function(){return new wi(this.i())};
ui.prototype.h=function(){return new wi(this.i())};
function vi(a){this.i=a}
w(vi,qi);vi.prototype.next=function(){return this.i.next()};
vi.prototype[Symbol.iterator]=function(){return new wi(this.i)};
vi.prototype.h=function(){return new wi(this.i)};
function wi(a){ui.call(this,function(){return a});
this.j=a}
w(wi,ui);wi.prototype.next=function(){return this.j.next()};function xi(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof xi)for(c=a.Hc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=xi.prototype;m.Hc=function(){yi(this);return this.h.concat()};
m.has=function(a){return zi(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Ai;yi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Ai(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return zi(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&yi(this),!0):!1};
function yi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];zi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],zi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return zi(this.i,a)?this.i[a]:b};
m.set=function(a,b){zi(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Hc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new xi(this)};
m.keys=function(){return ti(this.Ga(!0)).h()};
m.values=function(){return ti(this.Ga(!1)).h()};
m.entries=function(){var a=this;return ii(this.keys(),function(b){return[b,a.get(b)]})};
m.Ga=function(a){yi(this);var b=0,c=this.Xa,d=this,e=new qi;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return ri;var f=d.h[b++];return si(a?f:d.i[f])};
return e};
function zi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function L(a){G.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.s=!!a}
Wa(L,G);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
function Bi(a,b,c,d){if(b=a.i[b]){var e=a.h;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Ib(b)}}
m.Ib=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&hb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Za=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Ci(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Ib(c)}}return 0!=e}return!1};
function Ci(a,b,c){Nd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ib,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.M=function(){L.Aa.M.call(this);this.clear();this.j.length=0};function Di(a){this.h=a}
Di.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new xg).serialize(b))};
Di.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Di.prototype.remove=function(a){this.h.remove(a)};function Ei(a){this.h=a}
Wa(Ei,Di);function Fi(a){this.data=a}
function Gi(a){return void 0===a||a instanceof Fi?a:new Fi(a)}
Ei.prototype.set=function(a,b){Ei.Aa.set.call(this,a,Gi(b))};
Ei.prototype.i=function(a){a=Ei.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ei.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Hi(a){this.h=a}
Wa(Hi,Ei);Hi.prototype.set=function(a,b,c){if(b=Gi(b)){if(c){if(c<Va()){Hi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Va()}Hi.Aa.set.call(this,a,b)};
Hi.prototype.i=function(a){var b=Hi.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Va()||c&&c>Va())Hi.prototype.remove.call(this,a);else return b}};function Ii(){}
;function Ji(){}
Wa(Ji,Ii);Ji.prototype[Symbol.iterator]=function(){return ti(this.Ga(!0)).h()};
Ji.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ki(a){this.h=a}
Wa(Ki,Ji);m=Ki.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Ga=function(a){var b=0,c=this.h,d=new qi;d.next=function(){if(b>=c.length)return ri;var e=c.key(b++);if(a)return si(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return si(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Li(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Wa(Li,Ki);function Mi(a,b){this.i=a;this.h=null;var c;if(c=Ic)c=!(9<=Number(Wc));if(c){Ni||(Ni=new xi);this.h=Ni.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Ni.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Wa(Mi,Ji);var Oi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ni=null;function Pi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Oi[b]})}
m=Mi.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Pi(a),b);Qi(this)};
m.get=function(a){a=this.h.getAttribute(Pi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Pi(a));Qi(this)};
m.Ga=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new qi;d.next=function(){if(b>=c.length)return ri;var e=c[b++];if(a)return si(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return si(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Qi(this)};
function Qi(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ri(a,b){this.i=a;this.h=b+"::"}
Wa(Ri,Ji);Ri.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ri.prototype.get=function(a){return this.i.get(this.h+a)};
Ri.prototype.remove=function(a){this.i.remove(this.h+a)};
Ri.prototype.Ga=function(a){var b=this.i[Symbol.iterator](),c=this,d=new qi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return si(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},Si="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Vc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ti={qb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ui={qb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){return[].concat.apply([],a)}};
O.Ye=function(){Si?(O.ob=Uint8Array,O.Ia=Uint16Array,O.Rd=Int32Array,O.assign(O,Ti)):(O.ob=Array,O.Ia=Array,O.Rd=Array,O.assign(O,Ui))};
O.Ye();var Vi=!0;try{new Uint8Array(1)}catch(a){Vi=!1}
function Wi(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new O.ob(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Xi={};Xi=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Yi={},Zi,$i=[],aj=0;256>aj;aj++){Zi=aj;for(var bj=0;8>bj;bj++)Zi=Zi&1?3988292384^Zi>>>1:Zi>>>1;$i[aj]=Zi}Yi=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^$i[(a^b[d])&255];return a^-1};var cj={};cj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function dj(a){for(var b=a.length;0<=--b;)a[b]=0}
var ej=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],fj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],gj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],hj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ij=Array(576);dj(ij);var jj=Array(60);dj(jj);var kj=Array(512);dj(kj);var lj=Array(256);dj(lj);var mj=Array(29);dj(mj);var nj=Array(30);dj(nj);function oj(a,b,c,d,e){this.Jd=a;this.je=b;this.he=c;this.ce=d;this.Ce=e;this.rd=a&&a.length}
var pj,qj,rj;function sj(a,b){this.md=a;this.Db=0;this.Wa=b}
function tj(a,b){a.V[a.pending++]=b&255;a.V[a.pending++]=b>>>8&255}
function uj(a,b,c){a.fa>16-c?(a.ka|=b<<a.fa&65535,tj(a,a.ka),a.ka=b>>16-a.fa,a.fa+=c-16):(a.ka|=b<<a.fa&65535,a.fa+=c)}
function vj(a,b,c){uj(a,c[2*b],c[2*b+1])}
function wj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function xj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=wj(d[e]++,e))}
function yj(a){var b;for(b=0;286>b;b++)a.qa[2*b]=0;for(b=0;30>b;b++)a.eb[2*b]=0;for(b=0;19>b;b++)a.ga[2*b]=0;a.qa[512]=1;a.Oa=a.Hb=0;a.ya=a.matches=0}
function zj(a){8<a.fa?tj(a,a.ka):0<a.fa&&(a.V[a.pending++]=a.ka);a.ka=0;a.fa=0}
function Aj(a,b,c){zj(a);tj(a,c);tj(a,~c);O.qb(a.V,a.window,b,c,a.pending);a.pending+=c}
function Bj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Cj(a,b,c){for(var d=a.X[c],e=c<<1;e<=a.Ma;){e<a.Ma&&Bj(b,a.X[e+1],a.X[e],a.depth)&&e++;if(Bj(b,d,a.X[e],a.depth))break;a.X[c]=a.X[e];c=e;e<<=1}a.X[c]=d}
function Dj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.V[a.Mb+2*d]<<8|a.V[a.Mb+2*d+1];var f=a.V[a.Lc+d];d++;if(0===e)vj(a,f,b);else{var g=lj[f];vj(a,g+256+1,b);var h=ej[g];0!==h&&(f-=mj[g],uj(a,f,h));e--;g=256>e?kj[e]:kj[256+(e>>>7)];vj(a,g,c);h=fj[g];0!==h&&(e-=nj[g],uj(a,e,h))}}while(d<a.ya)}vj(a,256,b)}
function Ej(a,b){var c=b.md,d=b.Wa.Jd,e=b.Wa.rd,f=b.Wa.ce,g,h=-1;a.Ma=0;a.xb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.X[++a.Ma]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ma;){var k=a.X[++a.Ma]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Oa--;e&&(a.Hb-=d[2*k+1])}b.Db=h;for(g=a.Ma>>1;1<=g;g--)Cj(a,c,g);k=f;do g=a.X[1],a.X[1]=a.X[a.Ma--],Cj(a,c,1),d=a.X[1],a.X[--a.xb]=g,a.X[--a.xb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.X[1]=k++,Cj(a,c,1);while(2<=a.Ma);a.X[--a.xb]=
a.X[1];g=b.md;k=b.Db;d=b.Wa.Jd;e=b.Wa.rd;f=b.Wa.je;var l=b.Wa.he,n=b.Wa.Ce,r,t=0;for(r=0;15>=r;r++)a.Ja[r]=0;g[2*a.X[a.xb]+1]=0;for(b=a.xb+1;573>b;b++){var p=a.X[b];r=g[2*g[2*p+1]+1]+1;r>n&&(r=n,t++);g[2*p+1]=r;if(!(p>k)){a.Ja[r]++;var x=0;p>=l&&(x=f[p-l]);var y=g[2*p];a.Oa+=y*(r+x);e&&(a.Hb+=y*(d[2*p+1]+x))}}if(0!==t){do{for(r=n-1;0===a.Ja[r];)r--;a.Ja[r]--;a.Ja[r+1]+=2;a.Ja[n]--;t-=2}while(0<t);for(r=n;0!==r;r--)for(p=a.Ja[r];0!==p;)d=a.X[--b],d>k||(g[2*d+1]!==r&&(a.Oa+=(r-g[2*d+1])*g[2*d],g[2*
d+1]=r),p--)}xj(c,h,a.Ja)}
function Fj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ga[2*l]+=g:0!==l?(l!==e&&a.ga[2*l]++,a.ga[32]++):10>=g?a.ga[34]++:a.ga[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Gj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do vj(a,l,a.ga);while(0!==--g)}else 0!==l?(l!==e&&(vj(a,l,a.ga),g--),vj(a,16,a.ga),uj(a,g-3,2)):10>=g?(vj(a,17,a.ga),uj(a,g-3,3)):(vj(a,18,a.ga),uj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Hj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.qa[2*c])return 0;if(0!==a.qa[18]||0!==a.qa[20]||0!==a.qa[26])return 1;for(c=32;256>c;c++)if(0!==a.qa[2*c])return 1;return 0}
var Ij=!1;function Jj(a,b,c){a.V[a.Mb+2*a.ya]=b>>>8&255;a.V[a.Mb+2*a.ya+1]=b&255;a.V[a.Lc+a.ya]=c&255;a.ya++;0===b?a.qa[2*c]++:(a.matches++,b--,a.qa[2*(lj[c]+256+1)]++,a.eb[2*(256>b?kj[b]:kj[256+(b>>>7)])]++);return a.ya===a.Pb-1}
;function Kj(a,b){a.msg=cj[b];return b}
function Lj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Mj(a){var b=a.state,c=b.pending;c>a.K&&(c=a.K);0!==c&&(O.qb(a.output,b.V,b.Sb,c,a.Eb),a.Eb+=c,b.Sb+=c,a.Wc+=c,a.K-=c,b.pending-=c,0===b.pending&&(b.Sb=0))}
function Nj(a,b){var c=0<=a.ta?a.ta:-1,d=a.o-a.ta,e=0;if(0<a.level){2===a.H.Bc&&(a.H.Bc=Hj(a));Ej(a,a.hc);Ej(a,a.cc);Fj(a,a.qa,a.hc.Db);Fj(a,a.eb,a.cc.Db);Ej(a,a.ed);for(e=18;3<=e&&0===a.ga[2*hj[e]+1];e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.Hb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)uj(a,b?1:0,3),Aj(a,c,d);else if(4===a.strategy||g===f)uj(a,2+(b?1:0),3),Dj(a,ij,jj);else{uj(a,4+(b?1:0),3);c=a.hc.Db+1;d=a.cc.Db+1;e+=1;uj(a,c-257,5);uj(a,d-1,5);uj(a,e-4,4);for(f=0;f<e;f++)uj(a,a.ga[2*
hj[f]+1],3);Gj(a,a.qa,c-1);Gj(a,a.eb,d-1);Dj(a,a.qa,a.eb)}yj(a);b&&zj(a);a.ta=a.o;Mj(a.H)}
function P(a,b){a.V[a.pending++]=b}
function Oj(a,b){a.V[a.pending++]=b>>>8&255;a.V[a.pending++]=b&255}
function Pj(a,b){var c=a.ud,d=a.o,e=a.xa,f=a.wd,g=a.o>a.ia-262?a.o-(a.ia-262):0,h=a.window,k=a.Ya,l=a.Ha,n=a.o+258,r=h[d+e-1],t=h[d+e];a.xa>=a.qd&&(c>>=2);f>a.u&&(f=a.u);do{var p=b;if(h[p+e]===t&&h[p+e-1]===r&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<n;);p=258-(n-d);d=n-258;if(p>e){a.Cb=b;e=p;if(p>=f)break;r=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function Qj(a){var b=a.ia,c;do{var d=a.Pd-a.u-a.o;if(a.o>=b+(b-262)){O.qb(a.window,a.window,b,b,0);a.Cb-=b;a.o-=b;a.ta-=b;var e=c=a.fc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.H.ja)break;e=a.H;c=a.window;f=a.o+a.u;var g=e.ja;g>d&&(g=d);0===g?c=0:(e.ja-=g,O.qb(c,e.input,e.jb,g,f),1===e.state.wrap?e.F=Xi(e.F,c,g,f):2===e.state.wrap&&(e.F=Yi(e.F,c,g,f)),e.jb+=g,e.nb+=g,c=g);a.u+=c;if(3<=a.u+a.ra)for(d=a.o-a.ra,a.J=a.window[d],
a.J=(a.J<<a.La^a.window[d+1])&a.Ka;a.ra&&!(a.J=(a.J<<a.La^a.window[d+3-1])&a.Ka,a.Ha[d&a.Ya]=a.head[a.J],a.head[a.J]=d,d++,a.ra--,3>a.u+a.ra););}while(262>a.u&&0!==a.H.ja)}
function Rj(a,b){for(var c;;){if(262>a.u){Qj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o);0!==c&&a.o-c<=a.ia-262&&(a.P=Pj(a,c));if(3<=a.P)if(c=Jj(a,a.o-a.Cb,a.P-3),a.u-=a.P,a.P<=a.Mc&&3<=a.u){a.P--;do a.o++,a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.J=a.window[a.o],a.J=(a.J<<a.La^a.window[a.o+1])&a.Ka;else c=Jj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Nj(a,!1),0===a.H.K))return 1}a.ra=2>a.o?a.o:2;return 4===b?(Nj(a,!0),0===a.H.K?3:4):a.ya&&(Nj(a,!1),0===a.H.K)?1:2}
function Sj(a,b){for(var c,d;;){if(262>a.u){Qj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o);a.xa=a.P;a.zd=a.Cb;a.P=2;0!==c&&a.xa<a.Mc&&a.o-c<=a.ia-262&&(a.P=Pj(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.Cb)&&(a.P=2));if(3<=a.xa&&a.P<=a.xa){d=a.o+a.u-3;c=Jj(a,a.o-1-a.zd,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Ya]=a.head[a.J],a.head[a.J]=a.o);
while(0!==--a.xa);a.hb=0;a.P=2;a.o++;if(c&&(Nj(a,!1),0===a.H.K))return 1}else if(a.hb){if((c=Jj(a,0,a.window[a.o-1]))&&Nj(a,!1),a.o++,a.u--,0===a.H.K)return 1}else a.hb=1,a.o++,a.u--}a.hb&&(Jj(a,0,a.window[a.o-1]),a.hb=0);a.ra=2>a.o?a.o:2;return 4===b?(Nj(a,!0),0===a.H.K?3:4):a.ya&&(Nj(a,!1),0===a.H.K)?1:2}
function Tj(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){Qj(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=Jj(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=Jj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Nj(a,!1),0===a.H.K))return 1}a.ra=0;return 4===b?(Nj(a,!0),0===a.H.K?3:4):
a.ya&&(Nj(a,!1),0===a.H.K)?1:2}
function Uj(a,b){for(var c;;){if(0===a.u&&(Qj(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=Jj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Nj(a,!1),0===a.H.K))return 1}a.ra=0;return 4===b?(Nj(a,!0),0===a.H.K?3:4):a.ya&&(Nj(a,!1),0===a.H.K)?1:2}
function Vj(a,b,c,d,e){this.pe=a;this.Be=b;this.Ee=c;this.Ae=d;this.le=e}
var Wj;Wj=[new Vj(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){Qj(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ta+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Nj(a,!1),0===a.H.K)return 1;if(a.o-a.ta>=a.ia-262&&(Nj(a,!1),0===a.H.K))return 1}a.ra=0;if(4===b)return Nj(a,!0),0===a.H.K?3:4;a.o>a.ta&&Nj(a,!1);return 1}),
new Vj(4,4,8,4,Rj),new Vj(4,5,16,8,Rj),new Vj(4,6,32,32,Rj),new Vj(4,4,16,16,Sj),new Vj(8,16,32,32,Sj),new Vj(8,16,128,128,Sj),new Vj(8,32,128,256,Sj),new Vj(32,128,258,1024,Sj),new Vj(32,258,258,4096,Sj)];
function Xj(){this.H=null;this.status=0;this.V=null;this.wrap=this.pending=this.Sb=this.za=0;this.B=null;this.Ba=0;this.method=8;this.Ab=-1;this.Ya=this.Yc=this.ia=0;this.window=null;this.Pd=0;this.head=this.Ha=null;this.wd=this.qd=this.strategy=this.level=this.Mc=this.ud=this.xa=this.u=this.Cb=this.o=this.hb=this.zd=this.P=this.ta=this.La=this.Ka=this.Ic=this.fc=this.J=0;this.qa=new O.Ia(1146);this.eb=new O.Ia(122);this.ga=new O.Ia(78);Lj(this.qa);Lj(this.eb);Lj(this.ga);this.ed=this.cc=this.hc=
null;this.Ja=new O.Ia(16);this.X=new O.Ia(573);Lj(this.X);this.xb=this.Ma=0;this.depth=new O.Ia(573);Lj(this.depth);this.fa=this.ka=this.ra=this.matches=this.Hb=this.Oa=this.Mb=this.ya=this.Pb=this.Lc=0}
function Yj(a,b){if(!a||!a.state||5<b||0>b)return a?Kj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ja||666===c.status&&4!==b)return Kj(a,0===a.K?-5:-2);c.H=a;var d=c.Ab;c.Ab=b;if(42===c.status)if(2===c.wrap)a.F=0,P(c,31),P(c,139),P(c,8),c.B?(P(c,(c.B.text?1:0)+(c.B.Ta?2:0)+(c.B.Sa?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),P(c,c.B.time&255),P(c,c.B.time>>8&255),P(c,c.B.time>>16&255),P(c,c.B.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.B.os&255),c.B.Sa&&c.B.Sa.length&&
(P(c,c.B.Sa.length&255),P(c,c.B.Sa.length>>8&255)),c.B.Ta&&(a.F=Yi(a.F,c.V,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Yc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Oj(c,e+(31-e%31));0!==c.o&&(Oj(c,a.F>>>16),Oj(c,a.F&65535));a.F=1}if(69===c.status)if(c.B.Sa){for(e=c.pending;c.Ba<(c.B.Sa.length&65535)&&(c.pending!==c.za||(c.B.Ta&&
c.pending>e&&(a.F=Yi(a.F,c.V,c.pending-e,e)),Mj(a),e=c.pending,c.pending!==c.za));)P(c,c.B.Sa[c.Ba]&255),c.Ba++;c.B.Ta&&c.pending>e&&(a.F=Yi(a.F,c.V,c.pending-e,e));c.Ba===c.B.Sa.length&&(c.Ba=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.za&&(c.B.Ta&&c.pending>e&&(a.F=Yi(a.F,c.V,c.pending-e,e)),Mj(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.B.name.length?c.B.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.F=Yi(a.F,
c.V,c.pending-e,e));0===f&&(c.Ba=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.za&&(c.B.Ta&&c.pending>e&&(a.F=Yi(a.F,c.V,c.pending-e,e)),Mj(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.B.comment.length?c.B.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.F=Yi(a.F,c.V,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ta?(c.pending+2>c.za&&Mj(a),c.pending+2<=c.za&&(P(c,a.F&255),P(c,a.F>>
8&255),a.F=0,c.status=113)):c.status=113);if(0!==c.pending){if(Mj(a),0===a.K)return c.Ab=-1,0}else if(0===a.ja&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Kj(a,-5);if(666===c.status&&0!==a.ja)return Kj(a,-5);if(0!==a.ja||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?Uj(c,b):3===c.strategy?Tj(c,b):Wj[c.level].le(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.K&&(c.Ab=-1),0;if(2===d&&(1===b?(uj(c,2,3),vj(c,256,ij),16===c.fa?(tj(c,c.ka),c.ka=0,c.fa=0):8<=c.fa&&(c.V[c.pending++]=
c.ka&255,c.ka>>=8,c.fa-=8)):5!==b&&(uj(c,0,3),Aj(c,0,0),3===b&&(Lj(c.head),0===c.u&&(c.o=0,c.ta=0,c.ra=0))),Mj(a),0===a.K))return c.Ab=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.F&255),P(c,a.F>>8&255),P(c,a.F>>16&255),P(c,a.F>>24&255),P(c,a.nb&255),P(c,a.nb>>8&255),P(c,a.nb>>16&255),P(c,a.nb>>24&255)):(Oj(c,a.F>>>16),Oj(c,a.F&65535));Mj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Zj={};Zj=function(){this.input=null;this.nb=this.ja=this.jb=0;this.output=null;this.Wc=this.K=this.Eb=0;this.msg="";this.state=null;this.Bc=2;this.F=0};var ak=Object.prototype.toString;
function bk(a){if(!(this instanceof bk))return new bk(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.H=new Zj;this.H.K=0;var b=this.H;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Kj(b,-2);else{8===e&&(e=9);var k=new Xj;b.state=k;k.H=b;k.wrap=h;k.B=null;k.Yc=e;k.ia=1<<k.Yc;k.Ya=k.ia-1;k.Ic=f+7;k.fc=1<<k.Ic;k.Ka=k.fc-1;k.La=~~((k.Ic+3-1)/3);k.window=new O.ob(2*k.ia);k.head=new O.Ia(k.fc);k.Ha=new O.Ia(k.ia);k.Pb=1<<f+6;k.za=4*k.Pb;k.V=new O.ob(k.za);k.Mb=1*k.Pb;k.Lc=3*k.Pb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.nb=b.Wc=0;b.Bc=2;c=b.state;c.pending=0;c.Sb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.F=2===c.wrap?
0:1;c.Ab=0;if(!Ij){d=Array(16);for(f=g=0;28>f;f++)for(mj[f]=g,e=0;e<1<<ej[f];e++)lj[g++]=f;lj[g-1]=f;for(f=g=0;16>f;f++)for(nj[f]=g,e=0;e<1<<fj[f];e++)kj[g++]=f;for(g>>=7;30>f;f++)for(nj[f]=g<<7,e=0;e<1<<fj[f]-7;e++)kj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)ij[2*e+1]=8,e++,d[8]++;for(;255>=e;)ij[2*e+1]=9,e++,d[9]++;for(;279>=e;)ij[2*e+1]=7,e++,d[7]++;for(;287>=e;)ij[2*e+1]=8,e++,d[8]++;xj(ij,287,d);for(e=0;30>e;e++)jj[2*e+1]=5,jj[2*e]=wj(e,5);pj=new oj(ij,ej,257,286,15);qj=new oj(jj,
fj,0,30,15);rj=new oj([],gj,0,19,7);Ij=!0}c.hc=new sj(c.qa,pj);c.cc=new sj(c.eb,qj);c.ed=new sj(c.ga,rj);c.ka=0;c.fa=0;yj(c);c=0}else c=Kj(b,-2);0===c&&(b=b.state,b.Pd=2*b.ia,Lj(b.head),b.Mc=Wj[b.level].Be,b.qd=Wj[b.level].pe,b.wd=Wj[b.level].Ee,b.ud=Wj[b.level].Ae,b.o=0,b.ta=0,b.u=0,b.ra=0,b.P=b.xa=2,b.hb=0,b.J=0);b=c}}else b=-2;if(0!==b)throw Error(cj[b]);a.header&&(b=this.H)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=Wi(a.dictionary):
"[object ArrayBuffer]"===ak.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.H;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.F=Xi(a.F,f,g,0));l.wrap=0;g>=l.ia&&(0===b&&(Lj(l.head),l.o=0,l.ta=0,l.ra=0),c=new O.ob(l.ia),O.qb(c,f,g-l.ia,l.ia,0),f=c,g=l.ia);c=a.ja;d=a.jb;e=a.input;a.ja=g;a.jb=0;a.input=f;for(Qj(l);3<=l.u;){f=l.o;g=l.u-2;do l.J=(l.J<<l.La^l.window[f+3-1])&l.Ka,l.Ha[f&l.Ya]=l.head[l.J],l.head[l.J]=f,f++;while(--g);
l.o=f;l.u=2;Qj(l)}l.o+=l.u;l.ta=l.o;l.ra=l.u;l.u=0;l.P=l.xa=2;l.hb=0;a.jb=d;a.input=e;a.ja=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(cj[b]);this.Mf=!0}}
bk.prototype.push=function(a,b){var c=this.H,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Wi(a):"[object ArrayBuffer]"===ak.call(a)?c.input=new Uint8Array(a):c.input=a;c.jb=0;c.ja=c.input.length;do{0===c.K&&(c.output=new O.ob(d),c.Eb=0,c.K=d);a=Yj(c,e);if(1!==a&&0!==a)return ck(this,a),this.ended=!0,!1;if(0===c.K||0===c.ja&&(4===e||2===e))if("string"===this.options.to){var f=O.Vc(c.output,c.Eb);b=f;f=f.length;if(65537>f&&(b.subarray&&Vi||!b.subarray))b=
String.fromCharCode.apply(null,O.Vc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Vc(c.output,c.Eb),this.chunks.push(b)}while((0<c.ja||0===c.K)&&1!==a);if(4===e)return(c=this.H)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Kj(c,-2):(c.state=null,a=113===d?Kj(c,-3):0)):a=-2,ck(this,a),this.ended=!0,0===a;2===e&&(ck(this,0),c.K=0);return!0};
function ck(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):O.nd(a.chunks));a.chunks=[];a.err=b;a.msg=a.H.msg}
function dk(a,b){b=b||{};b.gzip=!0;b=new bk(b);b.push(a,!0);if(b.err)throw b.msg||cj[b.err];return b.result}
;function ek(a){return Eb(null===a?"null":void 0===a?"undefined":a)}
;function fk(a){this.name=a}
;var gk=new fk("rawColdConfigGroup");var hk=new fk("rawHotConfigGroup");var ik=new fk("commandExecutorCommand");function jk(a){this.A=zf(a)}
w(jk,Yf);var kk=new fk("continuationCommand");var lk=new fk("signalAction");var mk=new fk("webCommandMetadata");var nk=new fk("signalServiceEndpoint");var ok={Cf:"EMBEDDED_PLAYER_MODE_UNKNOWN",zf:"EMBEDDED_PLAYER_MODE_DEFAULT",Bf:"EMBEDDED_PLAYER_MODE_PFP",Af:"EMBEDDED_PLAYER_MODE_PFL"};var pk=new fk("feedbackEndpoint");function qk(a){this.A=zf(a)}
w(qk,Yf);var rk=new fk("webPlayerShareEntityServiceEndpoint");var sk=new fk("playlistEditEndpoint");var tk=new fk("modifyChannelNotificationPreferenceEndpoint");var uk=new fk("unsubscribeEndpoint");var vk=new fk("subscribeEndpoint");function wk(){var a=xk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function yk(a){D("yt.ads.biscotti.lastId_",a)}
;function zk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ak=C.window,Bk,Ck,Dk=(null==Ak?void 0:null==(Bk=Ak.yt)?void 0:Bk.config_)||(null==Ak?void 0:null==(Ck=Ak.ytcfg)?void 0:Ck.data_)||{};D("yt.config_",Dk);function Ek(){zk(Dk,arguments)}
function R(a,b){return a in Dk?Dk[a]:b}
function Fk(a){var b=Dk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Gk=[];function Hk(a){Gk.forEach(function(b){return b(a)})}
function Ik(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Jk(b)}}:a}
function Jk(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Ek("ERRORS",b));Hk(a)}
function Kk(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Ek("ERRORS",f))}
;var Lk=/^[\w.]*$/,Mk={q:!0,search_query:!0};function Nk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Ok(f[0]||""),h=Ok(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,l=f[0],n=String(Nk);k.args=[{key:l,value:f[1],query:a,method:Pk==n?"unchanged":n}];Mk.hasOwnProperty(l)||Kk(k)}}return c}
var Pk=String(Nk);function Qk(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];cb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Rk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Nk(a,"&")}
function Sk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Rk(1<a.length?a[1]:a[0])):{}}
function Tk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Rk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return kc(a,e)+d}
function Uk(a){if(!b)var b=window.location.href;var c=ac(1,a),d=bc(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)==d&&(Number(ac(4,b))||null)==(Number(ac(4,a))||null):!0;return a}
function Ok(a){return a&&a.match(Lk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Vk(a){var b=Wk;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Yh;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ia){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?zh:g;try{var h=g.history.length}catch(Ia){h=0}e.u_his=h;var k;e.u_h=null==(k=zh.screen)?void 0:k.height;var l;e.u_w=null==(l=zh.screen)?void 0:l.width;var n;e.u_ah=null==(n=zh.screen)?void 0:n.availHeight;var r;e.u_aw=
null==(r=zh.screen)?void 0:r.availWidth;var t;e.u_cd=null==(t=zh.screen)?void 0:t.colorDepth}catch(Ia){}h=b.h;try{var p=h.screenX;var x=h.screenY}catch(Ia){}try{var y=h.outerWidth;var z=h.outerHeight}catch(Ia){}try{var H=h.innerWidth;var I=h.innerHeight}catch(Ia){}try{var M=h.screenLeft;var N=h.screenTop}catch(Ia){}try{H=h.innerWidth,I=h.innerHeight}catch(Ia){}try{var K=h.screen.availWidth;var V=h.screen.availTop}catch(Ia){}p=[M,N,p,x,K,V,y,z,H,I];try{var Z=(b.h.top||window).document,fa="CSS1Compat"==
Z.compatMode?Z.documentElement:Z.body;var qa=(new Ad(fa.clientWidth,fa.clientHeight)).round()}catch(Ia){qa=new Ad(-12245933,-12245933)}Z=qa;qa={};var na=void 0===na?C:na;fa=new fi;"SVGElement"in na&&"createElementNS"in na.document&&fa.set(0);x=Vh();x["allow-top-navigation-by-user-activation"]&&fa.set(1);x["allow-popups-to-escape-sandbox"]&&fa.set(2);na.crypto&&na.crypto.subtle&&fa.set(3);"TextDecoder"in na&&"TextEncoder"in na&&fa.set(4);na=gi(fa);qa.bc=na;qa.bih=Z.height;qa.biw=Z.width;qa.brdim=p.join();
b=b.i;b=(qa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,qa.wgl=!!zh.WebGLRenderingContext,qa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Wk=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Qk(Vk(a))});Va();navigator.userAgent.indexOf(" (CrKey ");function S(a){a=Xk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Yk(a,b){a=Xk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Xk(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
function Zk(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});var e=v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var $k="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function al(){if(!$k)return null;var a=$k();return"open"in a?a:null}
function bl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function cl(a,b){"function"===typeof a&&(a=Ik(a));return window.setTimeout(a,b)}
;var dl="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ia(dl),["client_dev_set_cookie"]);var el={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},fl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(dl)),gl=!1;
function hl(a,b){b=void 0===b?{}:b;var c=Uk(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in el){var f=R(el[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&bc(a)||d&&void 0!==b[e]||(!S("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}S("move_vss_away_from_login_info_cookie")&&c&&R("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==R("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!bc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&bc(a)||(b["X-YouTube-Ad-Signals"]=Qk(Vk()));return b}
function il(a){var b=window.location.search,c=bc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Uk(a)&&(c=document.location.hostname);var d=$b(ac(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Rk(b),f={};cb(fl,function(g){e[g]&&(f[g]=e[g])});
return Tk(a,f||{},!1)}
function jl(a,b){var c=b.format||"JSON";a=kl(a,b);var d=ll(a,b),e=!1,f=ml(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=bl(k),n=null,r=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||r||t)n=nl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};r=b.context||C;l?b.onSuccess&&b.onSuccess.call(r,k,n):b.onError&&b.onError.call(r,k,n);b.onFinish&&b.onFinish.call(r,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=cl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function kl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Tk(a,b||{},!0);return a}
function ll(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Rk(e),tb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):ic(e));f=e||f&&!mb(f);!gl&&f&&"POST"!=b.method&&(gl=!0,Jk(Error("AJAX request with postData should use POST")));return e}
function nl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Kk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ol(a):null)e={},cb(a.getElementsByTagName("*"),function(g){e[g.tagName]=pl(g)})}d&&ql(e);
return e}
function ql(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=vb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else ql(a[b])}}
function ol(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function pl(a){var b="";cb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function rl(a,b){b.method="POST";b.postParams||(b.postParams={});return jl(a,b)}
function ml(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Ik(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=al();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=il(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=hl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var sl=[{Nc:function(a){return"Cannot read property '"+a.key+"'"},
mc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Nc:function(a){return"Cannot call '"+a.key+"'"},
mc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Nc:function(a){return a.key+" is not defined"},
mc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var ul={Ua:[],Ra:[{callback:tl,weight:500}]};function tl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function vl(){this.Ra=[];this.Ua=[]}
var wl;function xl(){if(!wl){var a=wl=new vl;a.Ua.length=0;a.Ra.length=0;ul.Ua&&a.Ua.push.apply(a.Ua,ul.Ua);ul.Ra&&a.Ra.push.apply(a.Ra,ul.Ra)}return wl}
;var yl=new L;function zl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Al(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Al(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Al(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Al(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Bl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Cl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=zl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Cl(e+".ve",f,g,h):0;d+=g;d+=Cl(e,a[e],b,c);if(500<d)break}}else c[b]=Dl(a),d+=c[b].length;else c[b]=Dl(a),d+=c[b].length;return d}
function Cl(a,b,c,d){c+="."+a;a=Dl(b);d[c]=a;return c.length+a.length}
function Dl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function El(){this.cf=!0}
function Fl(){El.h||(El.h=new El);return El.h}
function Gl(a,b){a={};var c=sg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Dk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Dk&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return a}
;var Hl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Il(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Jl(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Kl(a,b,c,d,e){og.set(""+a,b,{ic:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Ll(a){return og.get(""+a,void 0)}
function Ml(a,b,c){og.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Nl(){if(!og.isEnabled())return!1;if(!og.isEmpty())return!0;og.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==og.get("TESTCOOKIESENABLED"))return!1;og.remove("TESTCOOKIESENABLED");return!0}
;var Ol=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Ol);function Pl(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Ll(this.h);a&&this.parse(a)}
var Ql;function Rl(){Ql||(Ql=new Pl);return Ql}
m=Pl.prototype;m.get=function(a,b){Sl(a);Tl(a);a=void 0!==Ol[a]?Ol[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){Sl(a);Tl(a);if(null==b)throw Error("ExpectedNotNull");Ol[a]=b.toString()};
function Ul(a){return!!((Vl("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){Sl(a);Tl(a);delete Ol[a]};
m.clear=function(){for(var a in Ol)delete Ol[a]};
function Tl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Sl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Vl(a){a=void 0!==Ol[a]?Ol[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Ol[d]=c.toString())}};var Wl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Xl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Yl(){var a=C.navigator;return a?a.connection:void 0}
function Zl(){var a=Yl();if(a){var b=Wl[a.type||"unknown"]||"CONN_UNKNOWN";a=Wl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function $l(){var a=Yl();if(null!=a&&a.effectiveType)return Xl.hasOwnProperty(a.effectiveType)?Xl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function am(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
w(am,Error);function bm(){try{return cm(),!0}catch(a){return!1}}
function cm(a){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new am("Datasync ID not set",void 0===a?"unknown":a);}
;function dm(){}
function em(a,b){return ei.bb(a,0,b)}
dm.prototype.na=function(a,b){return this.bb(a,1,b)};
dm.prototype.Jb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var fm=Yk("web_emulated_idle_callback_delay",300),gm=1E3/60-3,hm=[8,5,4,3,2,1,0];
function im(a){a=void 0===a?{}:a;G.call(this);this.i=[];this.j={};this.Y=this.h=0;this.W=this.m=!1;this.R=[];this.S=this.da=!1;for(var b=v(hm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.xc=a.timeout||1;this.D=gm;this.s=0;this.ma=this.Ge.bind(this);this.wc=this.ff.bind(this);this.Fa=this.Vd.bind(this);this.ab=this.qe.bind(this);this.Vb=this.Ie.bind(this);this.sa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ea=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ma)}
w(im,G);m=im.prototype;m.Jb=function(a){var b=Va();jm(this,a);a=Va()-b;this.m||(this.D-=a)};
m.bb=function(a,b,c){++this.Y;if(10===b)return this.Jb(a),this.Y;var d=this.Y;this.j[d]=a;this.m&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.W||this.m||(0!==this.h&&km(this)!==this.s&&this.stop(),this.start()));return d};
m.oa=function(a){delete this.j[a]};
function lm(a){a.R.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function mm(a){return!a.isHidden()&&a.ea}
function km(a){if(a.i[8].length){if(a.S)return 4;if(mm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?mm(a)?3:2:1;return 0}
m.Qb=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function jm(a,b){try{b()}catch(c){a.Qb(c)}}
function nm(a){for(var b=v(hm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.qe=function(a){var b=void 0;a&&(b=a.timeRemaining());this.da=!0;om(this,b);this.da=!1};
m.ff=function(){om(this)};
m.Vd=function(){pm(this)};
m.Ie=function(a){this.S=!0;var b=km(this);4===b&&b!==this.s&&(this.stop(),this.start());om(this,void 0,a);this.S=!1};
m.Ge=function(){this.isHidden()||pm(this);this.h&&(this.stop(),this.start())};
function pm(a){a.stop();a.m=!0;for(var b=Va(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&jm(a,e)}qm(a);a.m=!1;nm(a)&&a.start();b=Va()-b;a.D-=b}
function qm(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function om(a,b,c){a.S&&4===a.s&&a.h||a.stop();a.m=!0;b=Va()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Qb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&jm(a,f);d=a.da?0:1;d=a.l>d?a.l:d;if(!(Va()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&jm(a,c)}while(c&&Va()<b)}a.m=!1;qm(a);a.D=gm;nm(a)&&a.start()}
m.start=function(){this.W=!1;if(0===this.h)switch(this.s=km(this),this.s){case 1:var a=this.ab;this.h=this.sa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,fm);break;case 2:this.h=window.setTimeout(this.wc,this.xc);break;case 3:this.h=window.requestAnimationFrame(this.Vb);break;case 4:this.h=window.setTimeout(this.Fa,0)}};
m.pause=function(){this.stop();this.W=!0};
m.stop=function(){if(this.h){switch(this.s){case 1:var a=this.h;this.sa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.M=function(){lm(this);this.stop();this.ea&&document.removeEventListener("visibilitychange",this.ma);G.prototype.M.call(this)};var rm=E("yt.scheduler.instance.timerIdMap_")||{},sm=Yk("kevlar_tuner_scheduler_soft_state_timer_ms",800),tm=0,um=0;function wm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new im(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function xm(){ym();var a=E("ytglobal.schedulerInstanceInstance_");a&&(uc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function ym(){lm(wm());for(var a in rm)rm.hasOwnProperty(a)&&delete rm[Number(a)]}
function zm(a,b,c){if(!c)return c=void 0===c,-wm().bb(a,b,c);var d=window.setTimeout(function(){var e=wm().bb(a,b);rm[d]=e},c);
return d}
function Am(a){wm().Jb(a)}
function Bm(a){var b=wm();if(0>a)b.oa(-a);else{var c=rm[a];c?(b.oa(c),delete rm[a]):window.clearTimeout(a)}}
function Cm(){Dm()}
function Dm(){window.clearTimeout(tm);wm().start()}
function Em(){wm().pause();window.clearTimeout(tm);tm=window.setTimeout(Cm,sm)}
function Fm(){window.clearTimeout(um);um=window.setTimeout(function(){Gm(0)},sm)}
function Gm(a){Fm();var b=wm();b.l=a;b.start()}
function Hm(a){Fm();var b=wm();b.l>a&&(b.l=a,b.start())}
function Im(){window.clearTimeout(um);var a=wm();a.l=0;a.start()}
;function Jm(){dm.apply(this,arguments)}
w(Jm,dm);function Km(){Jm.h||(Jm.h=new Jm);return Jm.h}
Jm.prototype.bb=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):cl(a,c||0)};
Jm.prototype.oa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Jm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Jm.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var ei=Km();
S("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",xm),D("yt.scheduler.instance.addJob",zm),D("yt.scheduler.instance.addImmediateJob",Am),D("yt.scheduler.instance.cancelJob",Bm),D("yt.scheduler.instance.cancelAllJobs",ym),D("yt.scheduler.instance.start",Dm),D("yt.scheduler.instance.pause",Em),D("yt.scheduler.instance.setPriorityThreshold",Gm),D("yt.scheduler.instance.enablePriorityThreshold",Hm),D("yt.scheduler.instance.clearPriorityThreshold",Im),D("yt.scheduler.initialized",
!0));function Lm(a){var b=new Li;(b=b.isAvailable()?a?new Ri(b,a):b:null)||(a=new Mi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Hi(a):null;this.i=document.domain||window.location.hostname}
Lm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new xg).serialize(b))}catch(f){return}else e=escape(b);Kl(a,e,c,this.i)};
Lm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Ll(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Lm.prototype.remove=function(a){this.h&&this.h.remove(a);Ml(a,"/",this.i)};var Mm=function(){var a;return function(){a||(a=new Lm("ytidb"));return a}}();
function Nm(){var a;return null==(a=Mm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Om=[],Pm,Qm=!1;function Rm(){var a={};for(Pm=new Sm(void 0===a.handleError?Tm:a.handleError,void 0===a.logEvent?Um:a.logEvent);0<Om.length;)switch(a=Om.shift(),a.type){case "ERROR":Pm.Qb(a.payload);break;case "EVENT":Pm.logEvent(a.eventType,a.payload)}}
function Vm(a){Qm||(Pm?Pm.Qb(a):(Om.push({type:"ERROR",payload:a}),10<Om.length&&Om.shift()))}
function Wm(a,b){Qm||(Pm?Pm.logEvent(a,b):(Om.push({type:"EVENT",eventType:a,payload:b}),10<Om.length&&Om.shift()))}
;function Xm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ym(a){return a.substr(0,a.indexOf(":"))||a}
;var Zm=ze||Ae;function $m(a){var b=Mb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var an={},bn=(an.AUTH_INVALID="No user identifier specified.",an.EXPLICIT_ABORT="Transaction was explicitly aborted.",an.IDB_NOT_SUPPORTED="IndexedDB is not supported.",an.MISSING_INDEX="Index not created.",an.MISSING_OBJECT_STORES="Object stores not created.",an.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",an.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",an.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
an.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",an.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",an.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",an.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",an),cn={},dn=(cn.AUTH_INVALID="ERROR",cn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",cn.EXPLICIT_ABORT="IGNORED",cn.IDB_NOT_SUPPORTED="ERROR",cn.MISSING_INDEX=
"WARNING",cn.MISSING_OBJECT_STORES="ERROR",cn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",cn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",cn.QUOTA_EXCEEDED="WARNING",cn.QUOTA_MAYBE_EXCEEDED="WARNING",cn.UNKNOWN_ABORT="WARNING",cn.INCOMPATIBLE_DB_VERSION="WARNING",cn),en={},fn=(en.AUTH_INVALID=!1,en.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,en.EXPLICIT_ABORT=!1,en.IDB_NOT_SUPPORTED=!1,en.MISSING_INDEX=!1,en.MISSING_OBJECT_STORES=!1,en.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,en.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,en.QUOTA_EXCEEDED=!1,en.QUOTA_MAYBE_EXCEEDED=!0,en.UNKNOWN_ABORT=!0,en.INCOMPATIBLE_DB_VERSION=!1,en);function gn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?bn[a]:c;d=void 0===d?dn[a]:d;e=void 0===e?fn[a]:e;am.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,gn.prototype)}
w(gn,am);function hn(a,b){gn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},bn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,hn.prototype)}
w(hn,gn);function jn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,jn.prototype)}
w(jn,Error);var kn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function ln(a,b,c,d){b=Ym(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof gn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new gn("QUOTA_EXCEEDED",a);if(Be&&"UnknownError"===e.name)return new gn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof jn)return new gn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&kn.some(function(f){return e.message.includes(f)}))return new gn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new gn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",yd:e.name})];e.level="WARNING";return e}
function mn(a,b,c){var d=Nm();return new gn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function nn(a){if(!a)throw Error();throw a;}
function on(a){return a}
function pn(a){this.h=a}
function qn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
qn.all=function(a){return new qn(new pn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={yb:0};f.yb<a.length;f={yb:f.yb},++f.yb)qn.resolve(a[f.yb]).then(function(g){return function(h){d[g.yb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
qn.resolve=function(a){return new qn(new pn(function(b,c){a instanceof qn?a.then(b,c):b(a)}))};
qn.reject=function(a){return new qn(new pn(function(b,c){c(a)}))};
qn.prototype.then=function(a,b){var c=this,d=null!=a?a:on,e=null!=b?b:nn;return new qn(new pn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){rn(c,c,d,f,g)}),c.i.push(function(){sn(c,c,e,f,g)})):"FULFILLED"===c.state.status?rn(c,c,d,f,g):"REJECTED"===c.state.status&&sn(c,c,e,f,g)}))};
qn.prototype.catch=function(a){return this.then(void 0,a)};
function rn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof qn?tn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function sn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof qn?tn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function tn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof qn?tn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function un(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function vn(a){return new Promise(function(b,c){un(a,b,c)})}
function wn(a){return new qn(new pn(function(b,c){un(a,b,c)}))}
;function xn(a,b){return new qn(new pn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var yn=window,T=yn.ytcsi&&yn.ytcsi.now?yn.ytcsi.now:yn.performance&&yn.performance.timing&&yn.performance.now&&yn.performance.timing.navigationStart?function(){return yn.performance.timing.navigationStart+yn.performance.now()}:function(){return(new Date).getTime()};function zn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
m=zn.prototype;m.add=function(a,b,c){return An(this,[a],{mode:"readwrite",ha:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return An(this,[a],{mode:"readwrite",ha:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return An(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).count(b)})};
function Bn(a,b,c){a=a.h.createObjectStore(b,c);return new Cn(a)}
m.delete=function(a,b){return An(this,[a],{mode:"readwrite",ha:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return An(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).get(b)})};
function Dn(a,b,c){return An(a,[b],{mode:"readwrite",ha:!0},function(d){d=d.objectStore(b);return wn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function An(a,b,c,d){var e,f,g,h,k,l,n,r,t,p,x,y;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ha:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ha?3:1;g=0;case 2:if(h){z.v(4);break}g++;k=Math.round(T());ya(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var I=new En(l);I=Fn(I,d);return H.call(z,I,7);case 7:return n=z.i,r=Math.round(T()),Gn(a,k,r,g,void 0,b.join(),e),z.return(n);case 5:t=za(z);p=Math.round(T());x=ln(t,
a.h.name,b.join(),a.h.version);if((y=x instanceof gn&&!x.h)||g>=f)Gn(a,k,p,g,x,b.join(),e),h=x;z.v(2);break;case 4:return z.return(Promise.reject(h))}})}
function Gn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof gn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Wm("QUOTA_EXCEEDED",{dbName:Ym(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof gn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Wm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Hn(a,!1,d,f,b,g.tag),Vm(e)):Hn(a,!0,d,f,b,g.tag)}
function Hn(a,b,c,d,e,f){Wm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Cn(a){this.h=a}
m=Cn.prototype;m.add=function(a,b){return wn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return wn(this.h.clear()).then(function(){})};
function In(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return wn(this.h.count(a))};
function Jn(a,b){return Kn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Jn(this,a):wn(this.h.delete(a))};
m.get=function(a){return wn(this.h.get(a))};
m.index=function(a){try{return new Ln(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new jn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Kn(a,b,c){a=a.h.openCursor(b.query,b.direction);return Mn(a).then(function(d){return xn(d,c)})}
function En(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=gn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Fn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
En.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new gn("EXPLICIT_ABORT");};
En.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Cn(a),this.i.set(a,b));return b};
function Ln(a){this.h=a}
m=Ln.prototype;m.count=function(a){return wn(this.h.count(a))};
m.delete=function(a){return Nn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return wn(this.h.get(a))};
m.getKey=function(a){return wn(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Nn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Mn(a).then(function(d){return xn(d,c)})}
function On(a,b){this.request=a;this.cursor=b}
function Mn(a){return wn(a).then(function(b){return b?new On(a,b):null})}
m=On.prototype;m.advance=function(a){this.cursor.advance(a);return Mn(this.request)};
m.continue=function(a){this.cursor.continue(a);return Mn(this.request)};
m.delete=function(){return wn(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return wn(this.cursor.update(a))};function Pn(a,b,c){return new Promise(function(d,e){function f(){t||(t=new zn(g.result,{closed:r}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Xd,k=c.blocking,l=c.df,n=c.upgrade,r=c.closed,t;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Wm("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Ym(a)});var x=f(),y=new En(g.transaction);
n&&n(x,function(z){return p.oldVersion<z&&p.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Wm("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ym(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Qn(a,b,c){c=void 0===c?{}:c;return Pn(a,b,c)}
function Rn(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Xd)&&c.addEventListener("blocked",function(){e()}),g.yield(vn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=za(g),ln(f,a,"",-1);})}
;function Sn(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
Sn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Qn(a,b,c)};
Sn.prototype.delete=function(a){a=void 0===a?{}:a;return Rn(this.name,a)};
function Tn(a,b){return new gn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Un(a,b){if(!b)throw mn("openWithToken",Ym(a.name));return a.open()}
Sn.prototype.open=function(){function a(){var f,g,h,k,l,n,r,t,p,x;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",ya(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var z=c.options,H=[],I=v(Object.keys(z.Fb)),M=I.next();!M.done;M=I.next()){M=M.value;var N=z.Fb[M],K=void 0===N.Le?Number.MAX_VALUE:N.Le;!(h.h.version>=N.Kb)||h.h.version>=K||h.h.objectStoreNames.contains(M)||H.push(M)}k=H;if(0===k.length){y.v(5);break}l=Object.keys(c.options.Fb);n=h.objectStoreNames();
if(c.m<Yk("ytidb_reopen_db_retries",0))return c.m++,h.close(),Vm(new gn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<Yk("ytidb_remake_db_retries",1))){y.v(6);break}c.l++;return y.yield(c.delete(),7);case 7:return Vm(new gn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new hn(n,l);case 5:return y.return(h);case 2:r=za(y);if(r instanceof DOMException?
"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;p=t.h.version;if(void 0!==c.options.version&&p>c.options.version+1)throw t.close(),c.j=!1,Tn(c,p);return y.return(t);case 8:throw b(),r instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),ln(r,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Tn(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,df:b,upgrade:this.options.upgrade};return this.h=d=a()};var Vn=new Sn("YtIdbMeta",{Fb:{databases:{Kb:1}},upgrade:function(a,b){b(1)&&Bn(a,"databases",{keyPath:"actualName"})}});
function Wn(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Un(Vn,b),2);c=d.i;return d.return(An(c,["databases"],{ha:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return wn(f.h.put(a,void 0)).then(function(){})})}))})}
function Xn(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(Un(Vn,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Yn(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(Un(Vn,b),2)):3!=e.h?(d=e.i,e.yield(An(d,["databases"],{ha:!0,mode:"readonly"},function(f){c.length=0;return Kn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Zn(a){return Yn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function $n(a,b,c){return Yn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function ao(a){var b,c;return A(function(d){if(1==d.h)return b=cm("YtIdbMeta hasAnyMeta other"),d.yield(Yn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var bo,co=new function(){}(new function(){});
function eo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=Nm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Zm)f=/WebKit\/([0-9]+)/.exec(Mb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Jc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Wn(d,co),4);case 4:return e.yield(Xn("yt-idb-test-do-not-use",co),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function fo(){if(void 0!==bo)return bo;Qm=!0;return bo=eo().then(function(a){Qm=!1;var b;if(null!=(b=Mm())&&b.h){var c;b={hasSucceededOnce:(null==(c=Nm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Mm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function go(){return E("ytglobal.idbToken_")||void 0}
function ho(){var a=go();return a?Promise.resolve(a):fo().then(function(b){(b=b?co:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var io=0;function jo(a,b){io||(io=ei.na(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(ho(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield($n(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(Rn(f.actualName),7);case 7:return h.yield(Xn(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=za(h),Vm(g),d=!1;case 4:ei.oa(io),io=0,d&&jo(a,b),h.h=0}})}))}
function ko(){var a;return A(function(b){return 1==b.h?b.yield(ho(),2):(a=b.i)?b.return(ao(a)):b.return(!1)})}
new xh;function lo(a){if(!bm())throw a=new gn("AUTH_INVALID",{dbName:a}),Vm(a),a;var b=cm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function mo(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(ho(),2);case 2:g=n.i;if(!g)throw h=mn("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Vm(h),h;Xm(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:lo(a);ya(n,3);return n.yield(Wn(k,g),5);case 5:return n.yield(Qn(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=za(n),ya(n,7),n.yield(Xn(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:za(n);case 8:throw l;}})}
function no(a,b,c){c=void 0===c?{}:c;return mo(a,b,!1,c)}
function oo(a,b,c){c=void 0===c?{}:c;return mo(a,b,!0,c)}
function po(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(ho(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Xm(a);d=lo(a);return e.yield(Rn(d.actualName,b),3)}return e.yield(Xn(d.actualName,c),0)})}
function qo(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(Rn(d.actualName,b),2):e.yield(Xn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function ro(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(ho(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Xm("LogsDatabaseV2");return d.yield(Zn(b),3)}c=d.i;return d.yield(qo(c,a,b),0)})}
function so(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(ho(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Xm(a);return d.yield(Rn(a,b),3)}return d.yield(Xn(a,c),0)})}
;function to(a,b){Sn.call(this,a,b);this.options=b;Xm(a)}
w(to,Sn);function uo(a,b){var c;return function(){c||(c=new to(a,b));return c}}
to.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.sc?oo:no)(a,b,Object.assign({},c))};
to.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.sc?so:po)(this.name,a)};
function vo(a,b){return uo(a,b)}
;var wo={},xo=vo("ytGcfConfig",{Fb:(wo.coldConfigStore={Kb:1},wo.hotConfigStore={Kb:1},wo),sc:!1,upgrade:function(a,b){b(1)&&(In(Bn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),In(Bn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function yo(a){return Un(xo(),a)}
function zo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:T()},g.yield(yo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Dn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Ao(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:T()},h.yield(yo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Dn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Bo(a){var b,c;return A(function(d){return 1==d.h?d.yield(yo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(An(b,["coldConfigStore"],{mode:"readwrite",ha:!0},function(e){return Nn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Co(a){var b,c;return A(function(d){return 1==d.h?d.yield(yo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(An(b,["hotConfigStore"],{mode:"readwrite",ha:!0},function(e){return Nn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Do(){G.apply(this,arguments);this.h=[]}
w(Do,G);Do.prototype.M=function(){this.h.length=0;G.prototype.M.call(this)};function Eo(){this.h=0;this.i=new Do}
function Fo(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:null}
function Go(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.v(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=go();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(Co(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(zo(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Ho(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!S("start_client_gcf"))return h.v(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=go())?c?h.v(4):h.yield(Bo(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(Ao(c,b,g,d),0)})}
function Io(){if(!Eo.h){var a=new Eo;Eo.h=a}a=Eo.h;var b=T()-a.h;if(!(0!==a.h&&b<Yk("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=T());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Eo.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function Jo(){return"INNERTUBE_API_KEY"in Dk&&"INNERTUBE_API_VERSION"in Dk}
function Ko(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),re:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Tf:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),te:R("INNERTUBE_CONTEXT_HL"),se:R("INNERTUBE_CONTEXT_GL"),ue:R("INNERTUBE_HOST_OVERRIDE")||"",xe:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),we:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Lo(a){var b={client:{hl:a.te,gl:a.se,clientName:a.sd,clientVersion:a.innertubeContextClientVersion,configInfo:a.re}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Zk();0<c.length&&(b.request={internalExperimentFlags:c});c=a.sd;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Jl()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Zl())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&(a=$l())&&
b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=Io())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(Rk(R("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function Mo(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Nf:(a=Gl(Fl()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function No(a,b){this.version=a;this.args=b}
No.prototype.serialize=function(){return{version:this.version,args:this.args}};function Oo(a,b){this.topic=a;this.h=b}
Oo.prototype.toString=function(){return this.topic};var Po=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ib;L.prototype.publish=L.prototype.Za;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",Po);var Qo=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Qo);var Ro=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Ro);var So=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",So);
D("ytPubsub2Pubsub2SkipSubKey",null);function To(a,b){var c=Uo();c&&c.publish.call(c,a.toString(),a,b)}
function Vo(a){var b=Wo,c=Uo();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Qo[d])try{if(f&&b instanceof Oo&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var l=new h;h.Xa=l.version}var n=h.Xa}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var r=n.construct;
var t=k.args,p=t.length;if(0<p){var x=Array(p);for(k=0;k<p;k++)x[k]=t[k];var y=x}else y=[];f=r.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Jk(z)}},So[b.toString()]?E("yt.scheduler.instance")?ei.na(g):cl(g,0):g())});
Qo[d]=!0;Ro[b.toString()]||(Ro[b.toString()]=[]);Ro[b.toString()].push(d);return d}
function Xo(){var a=Yo,b=Vo(function(c){a.apply(void 0,arguments);Zo(b)});
return b}
function Zo(a){var b=Uo();b&&("number"===typeof a&&(a=[a]),cb(a,function(c){b.unsubscribeByKey(c);delete Qo[c]}))}
function Uo(){return E("ytPubsub2Pubsub2Instance")}
;function $o(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&To("meta_logging_csi_event",{timerName:a,jg:b})}
;var ap=Yk("max_body_size_to_compress",5E5),bp=Yk("min_body_size_to_compress",500),cp=!0,dp=0,ep=0,fp=Yk("compression_performance_threshold_lr",250),gp=Yk("slow_compressions_before_abandon_count",4);
function hp(a,b,c,d){var e=T(),f={startTime:e,ticks:{},infos:{}};if(cp)try{var g=ip(b);if(null==g||!(g>ap||g<bp)){var h=dk($h(b)),k=T();f.ticks.gelc=k;ep++;S("disable_compression_due_to_performance_degredation")&&k-e>=fp&&(dp++,S("abandon_compression_after_N_slow_zips")?ep===Yk("compression_disable_point")&&dp>gp&&(cp=!1):cp=!1);jp(f);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0}d(a,c)}catch(l){Kk(l),d(a,c)}else d(a,c)}
function kp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=T(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(cp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=ip(g);if(null!=h&&(h>ap||h<bp))return a;f=dk($h(g),b?{level:1}:void 0);var k=T();e.ticks.gelc=k;if(b){ep++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=fp)if(dp++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=dp/ep;var l=gp/Yk("compression_disable_point");0<ep&&0===ep%Yk("compression_disable_point")&&b>=l&&(cp=!1)}else cp=!1;jp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Kk(n),a}}else return a}
function ip(a){try{return(new Blob(a.split(""))).size}catch(b){return Kk(b),null}}
function jp(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||$o("gel_compression",a,{sampleRate:.1})}
;function lp(a){a=Object.assign({},a);delete a.Authorization;var b=sg();if(b){var c=new ki;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Ee(c.digest(),3)}return a}
;var mp;function np(){mp||(mp=new Lm("yt.innertube"));return mp}
function op(a,b,c,d){if(d)return null;d=np().get("nextId",!0)||1;var e=np().get("requests",!0)||{};e[d]={method:a,request:b,authState:lp(c),requestTime:Math.round(T())};np().set("nextId",d+1,86400,!0);np().set("requests",e,86400,!0);return d}
function pp(a){var b=np().get("requests",!0)||{};delete b[a];np().set("requests",b,86400,!0)}
function qp(a){var b=np().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=lp(Mo(!1));pb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),rp(a,d.method,e,{}));delete b[c]}}np().set("requests",b,86400,!0)}}
;function sp(a){this.Xb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.wb=function(){};
this.now=Date.now;this.Ob=!1;var b;this.Kd=null!=(b=a.Kd)?b:100;var c;this.Ed=null!=(c=a.Ed)?c:1;var d;this.Cd=null!=(d=a.Cd)?d:2592E6;var e;this.Ad=null!=(e=a.Ad)?e:12E4;var f;this.Dd=null!=(f=a.Dd)?f:5E3;var g;this.T=null!=(g=a.T)?g:void 0;this.dc=!!a.dc;var h;this.ac=null!=(h=a.ac)?h:.1;var k;this.nc=null!=(k=a.nc)?k:10;a.handleError&&(this.handleError=a.handleError);a.wb&&(this.wb=a.wb);a.Ob&&(this.Ob=a.Ob);a.Xb&&(this.Xb=a.Xb);this.U=a.U;this.Da=a.Da;this.ba=a.ba;this.aa=a.aa;this.Qa=a.Qa;this.Qc=
a.Qc;this.Pc=a.Pc;tp(this)&&(!this.U||this.U("networkless_logging"))&&up(this)}
function up(a){tp(a)&&!a.Ob&&(a.h=!0,a.dc&&Math.random()<=a.ac&&a.ba.Zd(a.T),vp(a),a.aa.wa()&&a.Ub(),a.aa.listen(a.Qc,a.Ub.bind(a)),a.aa.listen(a.Pc,a.gd.bind(a)))}
m=sp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(tp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ba.set(d,this.T).then(function(e){d.id=e;c.aa.wa()&&wp(c,d)}).catch(function(e){wp(c,d);
xp(c,e)})}else this.Qa(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(tp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.U&&this.U("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.U&&this.U("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.ba.set(e,d.T).catch(function(l){xp(d,l)}),2);
f(g,h);k.h=0})}}this.Qa(a,b,e.skipRetry)}else this.ba.set(e,this.T).catch(function(g){d.Qa(a,b,e.skipRetry);
xp(d,g)})}else this.Qa(a,b,this.U&&this.U("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(tp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.ba.sb(d.id,c.T):e=!0;c.aa.ib&&c.U&&c.U("vss_network_hint")&&c.aa.ib(!0);f(g,h)};
this.Qa(d.url,d.options);this.ba.set(d,this.T).then(function(g){d.id=g;e&&c.ba.sb(d.id,c.T)}).catch(function(g){xp(c,g)})}else this.Qa(a,b)};
m.Ub=function(){var a=this;if(!tp(this))throw mn("throttleSend");this.i||(this.i=this.Da.na(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.ba.pd("NEW",a.T),2);if(3!=c.h)return b=c.i,b?c.yield(wp(a,b),3):(a.gd(),c.return());a.i&&(a.i=0,a.Ub());c.h=0})},this.Kd))};
m.gd=function(){this.Da.oa(this.i);this.i=0};
function wp(a,b){var c,d;return A(function(e){switch(e.h){case 1:if(!tp(a))throw c=mn("immediateSend"),c;if(void 0===b.id){e.v(2);break}return e.yield(a.ba.ze(b.id,a.T),3);case 3:(d=e.i)||a.wb(Error("The request cannot be found in the database."));case 2:if(yp(a,b,a.Cd)){e.v(4);break}a.wb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.v(5);break}return e.yield(a.ba.sb(b.id,a.T),5);case 5:return e.return();case 4:b.skipRetry||(b=zp(a,b));if(!b){e.v(0);break}if(!b.skipRetry||
void 0===b.id){e.v(8);break}return e.yield(a.ba.sb(b.id,a.T),8);case 8:a.Qa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function zp(a,b){if(!tp(a))throw mn("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=Ap(f);(h=Bp(f))&&a.U&&a.U("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.U&&a.U("nwl_consider_error_code")&&g||a.U&&!a.U("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.nc)){n.v(2);break}if(!a.aa.qc){n.v(3);break}return n.yield(a.aa.qc(),3);case 3:if(a.aa.wa()){n.v(2);break}c(e,f);if(!a.U||!a.U("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.ba.Tc(b.id,a.T,!1),6);case 6:return n.return();case 2:if(a.U&&a.U("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.nc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.Ed?n.yield(a.ba.Tc(b.id,a.T,!0,h?!1:void 0),12):n.yield(a.ba.sb(b.id,a.T),8);case 12:a.Da.na(function(){a.aa.wa()&&a.Ub()},a.Dd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.ba.sb(b.id,a.T),2);a.aa.ib&&a.U&&a.U("vss_network_hint")&&a.aa.ib(!0);d(e,f);h.h=0})};
return b}
function yp(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function vp(a){if(!tp(a))throw mn("retryQueuedRequests");a.ba.pd("QUEUED",a.T).then(function(b){b&&!yp(a,b,a.Ad)?a.Da.na(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.ba.Tc(b.id,a.T),2);vp(a);c.h=0})}):a.aa.wa()&&a.Ub()})}
function xp(a,b){a.Qd&&!a.aa.wa()?a.Qd(b):a.handleError(b)}
function tp(a){return!!a.T||a.Xb}
function Ap(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Bp(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Cp;
function Dp(){if(Cp)return Cp();var a={};Cp=vo("LogsDatabaseV2",{Fb:(a.LogsRequestsStore={Kb:2},a),sc:!1,upgrade:function(b,c,d){c(2)&&Bn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),In(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Cp()}
;function Ep(a){return Un(Dp(),a)}
function Fp(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Ep(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Dn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=T();Gp(c);return g.return(f)})}
function Hp(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(Ep(b),2);if(3!=l.h)return d=l.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(An(d,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(n){return Nn(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===
a&&(k.status="QUEUED",r.update(k)))})}),3);
c.ticks.tc=T();Gp(c);return l.return(k)})}
function Ip(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Ep(b),2);c=d.i;return d.return(An(c,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",wn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Jp(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(Ep(b),2);e=f.i;return f.return(An(e,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),wn(h.h.put(k,void 0)).then(function(){return k})):qn.resolve(void 0)})}))})}
function Kp(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Ep(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Lp(a){var b,c;return A(function(d){if(1==d.h)return d.yield(Ep(a),2);b=d.i;c=T()-2592E6;return d.yield(An(b,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){return Kn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Mp(){A(function(a){return a.yield(ro(),0)})}
function Gp(a){S("nwl_csi_killswitch")||$o("networkless_performance",a,{sampleRate:1})}
;var Np={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481};var Op={},Pp=vo("ServiceWorkerLogsDatabase",{Fb:(Op.SWHealthLog={Kb:1},Op),sc:!0,upgrade:function(a,b){b(1)&&In(Bn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Qp(a){return Un(Pp(),a)}
function Rp(a){var b,c;A(function(d){if(1==d.h)return d.yield(Qp(a),2);b=d.i;c=T()-2592E6;return d.yield(An(b,["SWHealthLog"],{mode:"readwrite",ha:!0},function(e){return Kn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Sp(a){var b;return A(function(c){if(1==c.h)return c.yield(Qp(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Tp={},Up=0;function Vp(a){var b=new Image,c=""+Up++;Tp[c]=b;b.onload=b.onerror=function(){delete Tp[c]};
b.src=a}
;function Wp(){this.h=new Map;this.i=!1}
function Xp(){if(!Wp.h){var a=E("yt.networkRequestMonitor.instance")||new Wp;D("yt.networkRequestMonitor.instance",a);Wp.h=a}return Wp.h}
Wp.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Wp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Wp.prototype.removeParams=function(a){return a.split("?")[0]};
Wp.prototype.removeParams=Wp.prototype.removeParams;Wp.prototype.isEndpointCFR=Wp.prototype.isEndpointCFR;Wp.prototype.requestComplete=Wp.prototype.requestComplete;Wp.getInstance=Xp;var Yp;function Zp(){Yp||(Yp=new Lm("yt.offline"));return Yp}
function $p(a){if(S("offline_error_handling")){var b=Zp().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Zp().set("errors",b,2592E3,!0)}}
;function aq(){td.call(this);var a=this;this.j=!1;this.i=di();this.i.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=Zp().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new am(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Jk(d)}Zp().set("errors",{},2592E3,!0)}}})}
w(aq,td);function bq(){if(!aq.h){var a=E("yt.networkStatusManager.instance")||new aq;D("yt.networkStatusManager.instance",a);aq.h=a}return aq.h}
m=aq.prototype;m.wa=function(){return this.i.wa()};
m.ib=function(a){this.i.i=a};
m.ne=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.de=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.qc=function(a){a=bi(this.i,a);a.then(function(b){S("use_cfr_monitor")&&Xp().requestComplete("generate_204",b)});
return a};
aq.prototype.sendNetworkCheckRequest=aq.prototype.qc;aq.prototype.listen=aq.prototype.listen;aq.prototype.enableErrorFlushing=aq.prototype.de;aq.prototype.getWindowStatus=aq.prototype.ne;aq.prototype.networkStatusHint=aq.prototype.ib;aq.prototype.isNetworkAvailable=aq.prototype.wa;aq.getInstance=bq;function cq(a){a=void 0===a?{}:a;td.call(this);var b=this;this.i=this.m=0;this.j=bq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.pc?(this.pc=a.pc,c("networkstatus-online",function(){dq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){dq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ud(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ud(b,"publicytnetworkstatus-offline")})))}
w(cq,td);cq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
cq.prototype.ib=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
cq.prototype.qc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&Xp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ib((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function dq(a,b){a.pc?a.i?(ei.oa(a.m),a.m=ei.na(function(){a.l!==b&&(ud(a,b),a.l=b,a.i=T())},a.pc-(T()-a.i))):(ud(a,b),a.l=b,a.i=T()):ud(a,b)}
;var eq;function fq(){var a=sp.call;eq||(eq=new cq({Yf:!0,Rf:!0}));a.call(sp,this,{ba:{Zd:Lp,sb:Kp,pd:Hp,ze:Ip,Tc:Jp,set:Fp},aa:eq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Kk(new am(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Jk(b)},
wb:Kk,Qa:gq,now:T,Qd:$p,Da:Km(),Qc:"publicytnetworkstatus-online",Pc:"publicytnetworkstatus-offline",dc:!0,ac:.1,nc:Yk("potential_esf_error_limit",10),U:S,Ob:!(bm()&&hq())});this.j=new xh;S("networkless_immediately_drop_all_requests")&&Mp();so("LogsDatabaseV2")}
w(fq,sp);function iq(){var a=E("yt.networklessRequestController.instance");a||(a=new fq,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&ho().then(function(b){a.T=b;up(a);a.j.resolve();a.dc&&Math.random()<=a.ac&&a.T&&Rp(a.T);S("networkless_immediately_drop_sw_health_store")&&jq(a)}));
return a}
fq.prototype.writeThenSend=function(a,b){b||(b={});bm()||(this.h=!1);sp.prototype.writeThenSend.call(this,a,b)};
fq.prototype.sendThenWrite=function(a,b,c){b||(b={});bm()||(this.h=!1);sp.prototype.sendThenWrite.call(this,a,b,c)};
fq.prototype.sendAndWrite=function(a,b){b||(b={});bm()||(this.h=!1);sp.prototype.sendAndWrite.call(this,a,b)};
fq.prototype.awaitInitialization=function(){return this.j.promise};
function jq(a){var b;A(function(c){if(!a.T)throw b=mn("clearSWHealthLogsDb"),b;return c.return(Sp(a.T).catch(function(d){a.handleError(d)}))})}
function gq(a,b,c){b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&kq(a,b);if(S("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;var g=void 0===g?!1:g;if(a)if(e)ml(a,void 0,"POST",e);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ml(a,void 0,"GET",
"",void 0,void 0,f,g);else{b:{try{var h=new Za({url:a});if(h.j&&h.i||h.l){var k=$b(ac(5,a)),l;if(!(l=!k||!k.endsWith("/aclk"))){var n=a.search(nc),r=mc(a,0,"ri",n);if(0>r)var t=null;else{var p=a.indexOf("&",r);if(0>p||p>n)p=n;t=decodeURIComponent(a.slice(r+3,-1!==p?p:0).replace(/\+/g," "))}l="1"!==t}var x=!l;break b}}catch(z){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(z){}y=!1}c=y?!0:!1}else c=!1;c||Vp(a)}}else b.compress?
b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),hp(a,b.postBody,b,jl)):hp(a,JSON.stringify(b.postParams),b,rl):jl(a,b)}
function kq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Xp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Xp().requestComplete(a,!0);d(e,f)}}
function hq(){return"www.youtube-nocookie.com"!==bc(document.location.toString())}
;var lq=!1,mq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:lq};D("ytNetworklessLoggingInitializationOptions",mq);function nq(){var a;A(function(b){if(1==b.h)return b.yield(ho(),2);a=b.i;if(!a||!bm()&&!S("nwl_init_require_datasync_id_killswitch")||!hq())return b.v(0);lq=!0;mq.isNwlInitialized=lq;return b.yield(iq().awaitInitialization(),0)})}
;function oq(a){var b=this;this.config_=null;a?this.config_=a:Jo()&&(this.config_=Ko());em(function(){qp(b)},5E3)}
oq.prototype.isReady=function(){!this.config_&&Jo()&&(this.config_=Ko());return!!this.config_};
function rp(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=op(b,c,l,k)),y)){var z=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(M,N){pp(y);z(M,N)};
c.onFetchSuccess=function(M,N){pp(y);H(M,N)}}try{if(x&&d.retry&&!d.vd.bypassNetworkless)g.method="POST",d.vd.writeThenSend?iq().writeThenSend(p,g):iq().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));hp(p,I,g,jl)}else hp(p,JSON.stringify(g.postParams),g,rl);else S("web_all_payloads_via_jspb")?jl(p,g):rl(p,g)}catch(M){if("InvalidAccessError"==M.name)y&&(pp(y),y=0),Kk(Error("An extension is blocking network request."));else throw M;}y&&em(function(){qp(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Kk(new am("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new am("innertube xhrclient not ready",b,c,d);Jk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ue)&&(h=f);var k=a.config_.xe||!1,l=Mo(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},t=a.config_.we&&f;t=t&&f.startsWith("Bearer");t||(r.key=a.config_.innertubeApiKey);var p=Tk(""+h+n,r||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
mq.isNwlInitialized:lq)?fo().then(function(x){e(x)}):e(!1)}
;var pq=0,qq=Lc?"webkit":Kc?"moz":Ic?"ms":Hc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++pq});var rq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function sq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in rq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function tq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
sq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
sq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
sq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",lb);var uq=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",uq);
function vq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&pb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var wq=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function xq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=vq(a,b,c,d);if(e)return e;e=++uq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new sq(h);if(!Dd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new sq(h);
h.currentTarget=a;return c.call(a,h)};
g=Ik(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),wq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
function yq(a){a&&("string"==typeof a&&(a=[a]),cb(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?wq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
;function zq(a){this.D=a;this.h=null;this.l=0;this.s=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.S=xq(window,"mousemove",Ta(this.W,this));a=Ta(this.R,this);"function"===typeof a&&(a=Ik(a));this.Y=window.setInterval(a,25)}
Wa(zq,G);zq.prototype.W=function(a){void 0===a.h&&tq(a);var b=a.h;void 0===a.i&&tq(a);this.h=new zd(b,a.i)};
zq.prototype.R=function(){if(this.h){var a=T();if(0!=this.l){var b=this.s,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.s=this.h;this.j=(this.j+1)%4}};
zq.prototype.M=function(){window.clearInterval(this.Y);yq(this.S)};var Aq=new Set([174,173,175]),Bq={};
function Cq(a){var b=void 0===a?{}:a;a=void 0===b.He?!1:b.He;b=void 0===b.ee?!0:b.ee;if(null==E("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&Dq();xq(document,"keydown",Dq);xq(document,"keyup",Dq);xq(document,"mousedown",Dq);xq(document,"mouseup",Dq);a?xq(window,"touchmove",function(){Eq("touchmove",200)},{passive:!0}):(xq(window,"resize",function(){Eq("resize",200)}),b&&xq(window,"scroll",function(){Eq("scroll",
200)}));
new zq(function(){Eq("mouse",100)});
xq(document,"touchstart",Dq,{passive:!0});xq(document,"touchend",Dq,{passive:!0})}}
function Eq(a,b){Bq[a]||(Bq[a]=!0,ei.na(function(){Dq();Bq[a]=!1},b))}
function Dq(a){var b;if(null!=(b=E("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!Aq.has(null==a?void 0:a.keyCode))null==E("_lact",window)&&Cq(),a=Date.now(),D("_lact",a,window),-1==E("_fact",window)&&D("_fact",a,window),(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Fq(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Gq=C.ytPubsubPubsubInstance||new L,Hq=C.ytPubsubPubsubSubscribedKeys||{},Iq=C.ytPubsubPubsubTopicToKeys||{},Jq=C.ytPubsubPubsubIsSynchronous||{};function Nq(a,b){var c=Oq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Hq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Jq[a]?f():cl(f,0)}catch(g){Jk(g)}},void 0);
Hq[d]=!0;Iq[a]||(Iq[a]=[]);Iq[a].push(d);return d}return 0}
function Pq(a){var b=Oq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),cb(a,function(c){b.unsubscribeByKey(c);delete Hq[c]}))}
function Qq(a,b){var c=Oq();c&&c.publish.apply(c,arguments)}
function Rq(a){var b=Oq();if(b)if(b.clear(a),a)Sq(a);else for(var c in Iq)Sq(c)}
function Oq(){return C.ytPubsubPubsubInstance}
function Sq(a){Iq[a]&&(a=Iq[a],cb(a,function(b){Hq[b]&&delete Hq[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ib;L.prototype.publish=L.prototype.Za;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",Gq);D("ytPubsubPubsubTopicToKeys",Iq);D("ytPubsubPubsubIsSynchronous",Jq);D("ytPubsubPubsubSubscribedKeys",Hq);var Tq=Symbol("injectionDeps");function Uq(a){this.name=a}
Uq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Vq(a){this.key=a}
function Wq(){this.h=new Map;this.i=new Map}
Wq.prototype.resolve=function(a){return a instanceof Vq?Xq(this,a.key,[],!0):Xq(this,a,[])};
function Xq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Nd)var e=d.Nd;else if(d.kf)e=d[Tq]?Yq(a,d[Tq],c):[],e=d.kf.apply(d,ia(e));else if(d.Md){e=d.Md;var f=e[Tq]?Yq(a,e[Tq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.hg||a.i.set(b,e);return e}
function Yq(a,b,c){return b?b.map(function(d){return d instanceof Vq?Xq(a,d.key,c,!0):Xq(a,d,c)}):[]}
;var Zq;function $q(){Zq||(Zq=new Wq);return Zq}
;var ar=window;function br(){var a,b;return"h5vcc"in ar&&(null==(a=ar.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=ar.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in ar&&ar.performance.mark&&ar.performance.measure?2:0}
function cr(a){switch(br()){case 1:ar.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:ar.performance.mark(a+"-start");break;case 0:break;default:Jh()}}
function dr(a){switch(br()){case 1:ar.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";ar.performance.mark(c);ar.performance.measure(a,b,c);break;case 0:break;default:Jh()}}
;var er=S("web_enable_lifecycle_monitoring")&&0!==br(),fr=S("web_enable_lifecycle_monitoring");function gr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Km():d;this.j=c;this.scheduler=d;this.i=new xh;this.h=a;for(a={fb:0};a.fb<this.h.length;a={Rb:a.Rb,fb:a.fb},a.fb++)a.Rb=this.h[a.fb],c=function(e){return function(){e.Rb.Kc();b.h[e.fb].oc=!0;b.h.every(function(f){return!0===f.oc})&&b.i.resolve()}}(a),d=this.getPriority(a.Rb),d=this.scheduler.bb(c,d),this.h[a.fb]=Object.assign({},a.Rb,{Kc:c,
jobId:d})}
function hr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.oc||(a.scheduler.oa(c.jobId),a.scheduler.bb(c.Kc,10))}
gr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.oc||this.scheduler.oa(b.jobId),b.oc=!0;this.i.resolve()};
gr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function ir(a){this.state=a;this.plugins=[];this.l=void 0;this.s={};er&&cr(this.state)}
m=ir.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;er&&dr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(hr(this.j),this.j=void 0);jr(this,a,b);this.state=a;er&&cr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(kr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function kr(a,b){var c=b.filter(function(e){return 10===lr(a,e)}),d=b.filter(function(e){return 10!==lr(a,e)});
return a.s.gg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Oe.apply(a,[c].concat(ia(e))),2);a.Hd.apply(a,[d].concat(ia(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Pe.apply(a,[c].concat(ia(e)));a.Hd.apply(a,[d].concat(ia(e)))}}
m.Pe=function(a){for(var b=B.apply(1,arguments),c=Km(),d=v(a),e=d.next(),f={};!e.done;f={Bb:f.Bb},e=d.next())f.Bb=e.value,c.Jb(function(g){return function(){mr(g.Bb.name);g.Bb.callback.apply(g.Bb,ia(b));nr(g.Bb.name)}}(f))};
m.Oe=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=Km(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.v(0);f.gb=e.value;f.Lb=void 0;g=function(k){return function(){mr(k.gb.name);var l=k.gb.callback.apply(k.gb,ia(b));"function"===typeof(null==l?void 0:l.then)?k.Lb=l.then(function(){nr(k.gb.name)}):nr(k.gb.name)}}(f);
c.Jb(g);return f.Lb?h.yield(f.Lb,3):h.v(3)}f={gb:f.gb,Lb:f.Lb};e=d.next();return h.v(2)})};
m.Hd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Kc:function(){mr(e.name);e.callback.apply(e,ia(b));nr(e.name)},
priority:lr(c,e)}});
d.length&&(this.j=new gr(d))};
function lr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function mr(a){er&&a&&cr(a)}
function nr(a){er&&a&&dr(a)}
function jr(a,b,c){fr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(ir.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function or(a){ir.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.m},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var pr;w(or,ir);or.prototype.i=function(a,b){var c=this;this.h=em(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
or.prototype.m=function(a,b){this.h&&(ei.oa(this.h),this.h=null);a(null==b?void 0:b.event)};
function qr(){pr||(pr=new or);return pr}
;function rr(){this.store={};this.h={}}
rr.prototype.storePayload=function(a,b){a=sr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
rr.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=tr(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ia(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ia(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ia(this.smartExtractMatchingEntries(a))));return c};
rr.prototype.extractMatchingEntries=function(a){a=tr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]]);return b};
rr.prototype.getSequenceCount=function(a){a=tr(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function tr(a,b){var c=sr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&sr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(ur(b.auth,g[0])){var h=b.isJspb;ur(void 0===h?"undefined":h?"true":"false",g[1])&&ur(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),ur(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function ur(a,b){return void 0===a||"undefined"===a?!0:a===b}
rr.prototype.getSequenceCount=rr.prototype.getSequenceCount;rr.prototype.extractMatchingEntries=rr.prototype.extractMatchingEntries;rr.prototype.smartExtractMatchingEntries=rr.prototype.smartExtractMatchingEntries;rr.prototype.storePayload=rr.prototype.storePayload;function sr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function U(a,b){if(a)return a[b.name]}
;var vr=Yk("initial_gel_batch_timeout",2E3),wr=Yk("gel_queue_timeout_max_ms",6E4),xr=Math.pow(2,16)-1,yr=Yk("gel_min_batch_size",5),zr=void 0;function Ar(){this.l=this.h=this.i=0;this.j=!1}
var Br=new Ar,Cr=new Ar,Dr=new Ar,Er=new Ar,Fr,Gr=!0,Hr=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Hr);var Ir={};function Jr(){var a=E("yt.logging.ims");a||(a=new rr,D("yt.logging.ims",a));return a}
function Kr(a,b){if("log_event"===a.endpoint){var c=Lr(a),d=Mr(a.payload)||"";a:if(S("enable_web_tiered_gel")){var e=Np[d||""];var f,g,h,k=null==$q().resolve(new Vq(Eo))?void 0:null==(f=Fo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=Nr(k[f].tier);break a}e=200}else e=void 0;400===e?Or(a,b):(Ir[c]=!0,e={cttAuthInfo:c,isJspb:!1,tier:e},Jr().storePayload(e,a.payload),Pr(b,c,e,"gelDebuggingEvent"===
d))}}
function Pr(a,b,c,d){function e(){Qr({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(zr=new a);a=Yk("tvhtml5_logging_max_batch_ads_fork")||Yk("web_logging_max_batch")||100;var g=T(),h=Rr(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=Jr().getSequenceCount(c));1E3<=d?e():d>=a?Fr||(Fr=Sr(function(){e();Fr=void 0},0)):10<=g-k&&(Tr(f,c.tier),h.l=g)}
function Or(a,b){if("log_event"===a.endpoint){var c=Lr(a),d=new Map;d.set(c,[a.payload]);var e=Mr(a.payload)||"";b&&(zr=new b);return new Qd(function(f,g){zr&&zr.isReady()?Ur(d,zr,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function Lr(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Hr[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Qr(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Qd(function(e,f){var g=Rr(c,d),h=g.j;g.j=!1;Vr(g.i);Vr(g.h);g.h=0;zr&&zr.isReady()?void 0===d&&S("enable_web_tiered_gel")?Wr(e,f,a,b,c,300,h):Wr(e,f,a,b,c,d,h):(Tr(c,d),e())})}
function Wr(a,b,c,d,e,f,g){var h=zr;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map;var l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=S("enable_web_tiered_gel")?Jr().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Jr().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(Ir)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?Jr().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Jr().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Ir[l];Ur(k,h,a,b,c,!1,g)}
function Tr(a,b){function c(){Qr({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Rr(a,b),e=d===Er||d===Dr?5E3:wr;S("web_gel_timeout_cap")&&!d.h&&(e=Sr(function(){c()},e),d.h=e);
Vr(d.i);e=R("LOGGING_BATCH_TIMEOUT",Yk("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Gr&&(e=vr);e=Sr(function(){0<Yk("gel_min_batch_size")?Jr().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=yr&&c():c()},e);
d.i=e}
function Ur(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(T()),k=a.size,l=(void 0===g?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={jc:g.jc,cb:g.cb,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,lc:g.lc,kc:g.kc},n=a.next()){var r=v(n.value);n=r.next().value;r=r.next().value;g.cb=rb({context:Lo(b.config_||Ko())});if(!Ma(r)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.cb.events=r;(r=Hr[n])&&Xr(g.cb,n,r);
delete Hr[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Yr(g.cb,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.lc=function(t){S("start_client_gcf")&&ei.na(function(){return A(function(p){return p.yield(Zr(t),0)})});
k--;k||c()};
g.jc=0;g.kc=function(t){return function(){t.jc++;if(e.bypassNetworkless&&1===t.jc)try{rp(b,l,t.cb,$r({writeThenSend:!0},t.dangerousLogToVisitorSession,t.lc,t.kc,f)),Gr=!1}catch(p){Jk(p),d()}k--;k||c()}}(g);
try{rp(b,l,g.cb,$r(e,g.dangerousLogToVisitorSession,g.lc,g.kc,f)),Gr=!1}catch(t){Jk(t),d()}}}
function $r(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,vd:a,dangerousLogToVisitorSession:b,Of:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};as()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function Yr(a,b,c){as()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*xr/2)),c++,c>xr&&(c=1),Ek("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Xr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function as(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Sr(a,b){return S("transport_use_scheduler")?S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?em(function(){if("none"===qr().currentState)a();else{var c={};qr().install((c.none={callback:a},c))}},b):em(a,b):cl(a,b)}
function Vr(a){S("transport_use_scheduler")?ei.oa(a):window.clearTimeout(a)}
function Zr(a){var b,c,d,e,f,g,h,k,l,n;return A(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=U(d,hk),g=null==(f=d)?void 0:f.hotHashData,h=U(d,gk),l=null==(k=d)?void 0:k.coldHashData,(n=$q().resolve(new Vq(Eo)))?g?e?r.yield(Go(n,g,e),2):r.yield(Go(n,g),2):r.v(2):r.return()):l?h?r.yield(Ho(n,l,h),0):r.yield(Ho(n,l),0):r.v(0)})}
function Rr(a,b){b=void 0===b?200:b;return a?300===b?Er:Cr:300===b?Dr:Br}
function Mr(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Np[b])return b}
function Nr(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var bs=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",bs);
function cs(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Fq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,bs[b]=b in bs?bs[b]+1:0,a.sequence={index:bs[b],groupKey:b},d.endOfSequence&&delete bs[d.sequenceGroup]);(d.sendIsolatedPayload?Or:Kr)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Um(a,b,c){c=void 0===c?{}:c;var d=oq;R("ytLoggingEventsDefaultDisabled",!1)&&oq===oq&&(d=null);S("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=Fq(),c.timestamp=T());cs(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var ds=new Set,es=0,gs=0,hs=0,is=[],js=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Tm(a){ks(a)}
function ls(a){ks(a,"WARNING")}
function ms(a){a instanceof Error?ks(a):(a=Na(a)?JSON.stringify(a):String(a),a=new am(a),a.name="RejectedPromiseError",ls(a))}
function ks(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=es))){d=is;var k=zc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var r=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(r=Bl(a.args[t],"params."+t,c,r),
500<=r);t++);else if(a.hasOwnProperty("params")&&a.params){var p=a.params;if("object"===typeof a.params)for(t in p){if(p[t]){var x="params."+t,y=Dl(p[t]);c[x]=y;r+=x.length+y.length;if(500<r)break}}else c.params=Dl(p)}if(d.length)for(t=0;t<d.length&&!(r=Bl(d[t],"params.context."+t,c,r),500<=r);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=xl();c=v(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.Zf)){a=d.weight;break a}a=v(a.Ra);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(sl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.mc[t.name])for(e=v(c.mc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Nc(f);break}t.params||(t.params={});a=xl();t.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Ra.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==wb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!ds.has(t.message)){if(g&&S("web_enable_error_204"))ns(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(yl.Za("handleError",t),S("record_app_crashed_web")&&0===hs&&1===t.sampleWeight&&(hs++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),Um("appCrashed",g)),gs++):"WARNING"===b&&yl.Za("handleWarning",t);if(S("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(js);for(c=a.next();!c.done;c=a.next())if($m(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));e=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Fk("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Um("clientError",h),("ERROR"===g||S("errors_flush_gel_always_killswitch"))&&Qr(void 0,void 0,!1))}S("suppress_error_204_logging")||ns(b,t)}try{ds.add(t.message)}catch(z){}es++}}}
function ns(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}jl(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function ps(){this.register=new Map}
function qs(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.cg("ABORTED")}
ps.prototype.clear=function(){qs(this);this.register.clear()};
var rs=new ps;var ss=Date.now().toString();
function ts(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ss)for(a=1,b=0;b<ss.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ss.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var us,vs=C.ytLoggingDocDocumentNonce_;vs||(vs=ts(),D("ytLoggingDocDocumentNonce_",vs));us=vs;function ws(a){this.h=a}
m=ws.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new qk;if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Se(b,Pe):Qe||(Qe=new Se(null,Pe));else if(b.constructor!==Se)if(Oe(b))b instanceof Uint8Array||Array.isArray(b),b=b.length?new Se(new Uint8Array(b),Pe):Qe||(Qe=new Se(null,Pe));else throw Error();J(a,1,b)}else void 0!==this.h.veType&&J(a,2,pf(this.h.veType)),void 0!==this.h.veCounter&&J(a,6,pf(this.h.veCounter)),void 0!==this.h.elementIndex&&J(a,3,pf(this.h.elementIndex)),
this.h.isCounterfactual&&J(a,5,nf(!0));void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),Sf(a,qk,7,b));void 0!==this.h.youtubeData&&Sf(a,jk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function xs(a){return R("client-screen-nonce-store",{})[void 0===a?0:a]}
function ys(a,b){b=void 0===b?0:b;var c=R("client-screen-nonce-store");c||(c={},Ek("client-screen-nonce-store",c));c[b]=a}
function zs(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function As(a){return R(zs(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",As);function Bs(){var a=R("csn-to-ctt-auth-info");a||(a={},Ek("csn-to-ctt-auth-info",a));return a}
function Cs(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function Ds(a){a=xs(void 0===a?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Ds);function Es(a,b,c){var d=Bs();(c=Ds(c))&&delete d[c];b&&(d[a]=b)}
function Fs(a){return Bs()[a]}
D("yt_logging_screen.getCttAuthInfo",Fs);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==xs(c)||b!==R(zs(c)))if(Es(a,d,c),ys(a,c),Ek(zs(c),b),b=function(){setTimeout(function(){a&&Um("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:us,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Gs=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Gs);function Hs(a){zk(Gs,arguments)}
;function Is(){var a=qb(Js),b;return(new Qd(function(c,d){a.onSuccess=function(e){bl(e)?c(new Ks(e)):d(new Ls("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Ls("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Ls("Request timed out","net.timeout",e))};
b=jl("//googleads.g.doubleclick.net/pagead/id",a)})).uc(function(c){c instanceof ae&&b.abort();
return Wd(c)})}
function Ls(a,b,c){Ya.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Ls,Ya);function Ks(a){this.xhr=a}
;function Ms(){this.h=0;this.value_=null}
Ms.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:Ns(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:Os(a):this};
Ms.prototype.getValue=function(){return this.value_};
Ms.prototype.isRejected=function(){return 2==this.h};
Ms.prototype.$goog_Thenable=!0;function Os(a){var b=new Ms;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function Ns(a){var b=new Ms;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function Ps(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Uk(a)?"same-origin":"cors",credentials:Uk(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Qs(){return qg()||(ze||Ae)&&$m("applewebkit")&&!$m("version")&&(!$m("safari")||$m("gsa/"))||Nc&&$m("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Rs(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in ok)if(ok[d]==c.embeddedPlayerMode){b=ok[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Ss(a){Ya.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ts;this.isTimeout=a instanceof Ls&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ae}
w(Ss,Ya);Ss.prototype.name="BiscottiError";function Ts(){Ya.call(this,"Biscotti ID is missing from server")}
w(Ts,Ya);Ts.prototype.name="BiscottiMissingError";var Js={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Us=null;function Vs(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Qs())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if("1"==ob(a))return Error("Biscotti ID is not available in private embed mode");if(Rs(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function xk(){var a=Vs();if(void 0!==a)return Wd(a);Us||(Us=Is().then(Ws).uc(function(b){return Xs(2,b)}));
return Us}
function Ws(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ts;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ts;a=a.id;yk(a);Us=Ns(a);Ys(18E5,2);return a}
function Xs(a,b){b=new Ss(b);yk("");Us=Os(b);0<a&&Ys(12E4,a-1);throw b;}
function Ys(a,b){cl(function(){Is().then(Ws,function(c){return Xs(b,c)}).uc($a)},a)}
function Zs(){try{var a=E("yt.ads.biscotti.getId_");return a?a():xk()}catch(b){return Wd(b)}}
;function $s(a){if("1"!=ob(R("PLAYER_VARS",{}))){a&&wk();try{Zs().then(function(){},function(){}),cl($s,18E5)}catch(b){Jk(b)}}}
;function at(){var a=Rl(),b=Ul(119),c=1<window.devicePixelRatio;if(document.body&&oi(document.body,"exp-invert-logo"))if(c&&!oi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!oi(d,"inverted-hdpi")){var e=mi(d);ni(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&oi(document.body,"inverted-hdpi")&&pi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Vl(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Ol[b]:(c=d.toString(16),Ol[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Ol)Ol.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Ol[f])));var f=d.join("&");Kl(b,f,63072E3,a.i,c)}}
;var bt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function ct(){var a=void 0===a?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;$b(ac(5,a));try{var b=Sk(a).theme;return bt.get(b)||null}catch(c){}return null}
;function dt(){this.h={};if(this.i=Nl()){var a=Ll("CONSISTENCY");a&&et(this,{encryptedTokenJarContents:a})}}
dt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Na.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];et(this,a)}};
function et(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Kl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var ft=window.location.hostname.split(".").slice(-2).join(".");function gt(){var a=R("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===R("INNERTUBE_CLIENT_NAME")&&(this.h=ht(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var jt;function kt(){jt=E("yt.clientLocationService.instance");jt||(jt=new gt,D("yt.clientLocationService.instance",jt));return jt}
m=gt.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===R("INNERTUBE_CLIENT_NAME")?(this.h=ht(this))&&this.h.set("yt-location-playability-token",a,15552E3):Kl("YT_CL",JSON.stringify({loctok:a}),15552E3,ft,!0))};
function ht(a){return void 0===a.h?new Lm("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=ht(this))&&this.h.remove("yt-location-playability-token"):Ml("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===R("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function lt(a,b){if(!a)return!1;var c,d=null==(c=U(a,nk))?void 0:c.signal;if(d&&b.mb)return!!b.mb[d];var e;if((c=null==(e=U(a,kk))?void 0:e.request)&&b.Ac)return!!b.Ac[c];for(var f in a)if(b.zc[f])return!0;return!1}
function mt(a,b){var c,d=null==(c=U(a,nk))?void 0:c.signal;if(d&&b.mb&&(c=b.mb[d]))return c();var e;if((c=null==(e=U(a,kk))?void 0:e.request)&&b.Ac&&(e=b.Ac[c]))return e();for(var f in a)if(b.zc[f]&&(a=b.zc[f]))return a()}
;function nt(a){return function(){return new a}}
;var ot={},pt=(ot.WEB_UNPLUGGED="^unplugged/",ot.WEB_UNPLUGGED_ONBOARDING="^unplugged/",ot.WEB_UNPLUGGED_OPS="^unplugged/",ot.WEB_UNPLUGGED_PUBLIC="^unplugged/",ot.WEB_CREATOR="^creator/",ot.WEB_KIDS="^kids/",ot.WEB_EXPERIMENTS="^experiments/",ot.WEB_MUSIC="^music/",ot.WEB_REMIX="^music/",ot.WEB_MUSIC_EMBEDDED_PLAYER="^music/",ot.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",ot);
function qt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=pt[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(pt).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function rt(){}
rt.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Hl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=rb(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Rl();var l="USER_INTERFACE_THEME_LIGHT";Ul(165)?l="USER_INTERFACE_THEME_DARK":Ul(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:ct()||l;h.userInterfaceTheme=k;if(!f){if(k=Zl())h.connectionType=
k;S("web_log_effective_connection_type")&&(k=$l())&&(g.client.effectiveConnectionType=k)}var n;if(S("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var r;n=null==(r=C.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}S("web_gcf_hashes_innertube")&&(k=Io())&&(r=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=r,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=
k);r=Sk(C.location.href);!S("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&Il.h&&(r=Il.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Jl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):
"TVHTML5"===h.clientName&&(!S("web_lr_app_quality_killswitch")&&(r=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:r}));if(!S("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(V){}t=void 0}t&&(h.timeZone=t)}(t=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=
t:delete h.experimentsToken;t=Zk();dt.h||(dt.h=new dt);h=dt.h.h;r=[];n=0;for(var p in h)r[n++]=h[p];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:r});!S("web_prequest_context_killswitch")&&(p=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=p);t=Rl();p=Ul(58);t=t.get("gsml","");g.user=Object.assign({},g.user);p&&(g.user.enableSafetyMode=p);t&&(g.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?e&&(f=Ds())&&(g.clientScreenNonce=f):
!f&&(f=Ds())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;kt().setLocationOnInnerTubeContext(g);try{var x=Vk(),y=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(x));for(var H=z.next();!H.done;H=z.next()){var I=v(H.value),M=I.next().value,N=I.next().value;x=M;y=N;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+y})}}catch(V){ks(V)}z=g}else ks(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
z={};z={context:z};if(H=this.h(a)){this.i(z,H,b);var K;b="/youtubei/v1/"+qt(this.j());(H=null==(K=U(a.commandMetadata,mk))?void 0:K.apiUrl)&&(b=H);K=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(K=String(b)+String(cc(K)));b={};b.key=R("INNERTUBE_API_KEY");S("json_condensed_response")&&(b.prettyPrint="false");K=Tk(K,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:K,kb:Ps(K),Na:z,config:a};a.config.Wb?a.config.Wb.identity=c:a.config.Wb={identity:c};return a}ks(new am("Error: Failed to create Request from Command.",
a))};
da.Object.defineProperties(rt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function st(){}
w(st,rt);st.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",kb:Ps("/getDatasyncIdsEndpoint","GET"),Na:{}}};
st.prototype.j=function(){return[]};
st.prototype.h=function(){};
st.prototype.i=function(){};var tt={},ut=(tt.GET_DATASYNC_IDS=nt(st),tt);var vt="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function wt(a,b){var c=void 0===c?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=bc(window.location.href);e&&d.push(e);e=bc(a);if(0<=bb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),Dh(d,a),a=d.href)if(a=cc(a),a=dc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ds()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&xt(a,b,f)}else xt(a,b)}
function xt(a,b,c){a=zt(a);b=b?ic(b):"";c=c||5;Qs()&&Kl(a,b,c)}
function zt(a){if(S("st_skip_debug_params")){for(var b=v(vt),c=b.next();!c.done;c=b.next())a=pc(a,c.value);return"ST-"+Yb(a).toString(36)}return"ST-"+Yb(a).toString(36)}
;function At(){try{return!!self.localStorage}catch(a){return!1}}
;function Bt(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Ct(a){if(At()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Bt(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Dt(){if(!At())return!1;var a=cm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Bt(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Et(){return S("copy_login_info_to_st_cookie")&&("WEB"===R("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===R("INNERTUBE_CLIENT_NAME"))}
function Ft(a){if(qg()&&Et()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=bc(window.location.href);c&&b.push(c);c=bc(a);0<=bb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=cc(a),(b=dc(b))?(b=zt(b),b=(b=Ll(b)||null)?Rk(b):{}):b=null):b=null;null==b&&(b={});c=void 0;Et()&&(c||(c=R("LOGIN_INFO")),c&&(b.session_logininfo=c));wt(a,b)}}
;function Gt(a){var b=B.apply(1,arguments);if(!Ht(a)||b.some(function(d){return!Ht(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())It(a,c.value);return a}
function It(a,b){for(var c in b)if(Ht(b[c])){if(c in a&&!Ht(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});It(a[c],b[c])}else if(Jt(b[c])){if(c in a&&!Jt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Kt(a[c],b[c])}else a[c]=b[c];return a}
function Kt(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Ht(c)?a.push(It({},c)):Jt(c)?a.push(Kt([],c)):a.push(c);return a}
function Ht(a){return"object"===typeof a&&!Array.isArray(a)}
function Jt(a){return"object"===typeof a&&Array.isArray(a)}
;function Lt(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Mt(){var a=Lt();a.info||(a.info={});return a.info}
function Nt(a){a=Lt(a);a.metadata||(a.metadata={});return a.metadata}
function Ot(a){a=Lt(a);a.tick||(a.tick={});return a.tick}
function Pt(a){a=Lt(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Qt(a){a=Pt(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Rt(a){var b=Lt(a).nonce;b||(b=ts(),Lt(a).nonce=b);return b}
;function St(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Tt(a){a=a||"";var b=E("ytcsi.reference");b||(St(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=St(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Ut=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.embed="LATENCY_ACTION_EMBED",
W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",
W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]=
"LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]=
"LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",
W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",
W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W),X={},Vt=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.aida="appInstallDataAgeMs",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.ccs="creatorInfo.creatorCanaryState",X.ctop=
"creatorInfo.topEntityType",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="requestIds",X.GetSearch_rid="requestIds",X.GetPlayer_rid="requestIds",X.GetWatchNext_rid="requestIds",X.GetBrowse_rid="requestIds",X.GetLibrary_rid="requestIds",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.nav_type="kabukiInfo.navigationType",X.prev_browse_id="kabukiInfo.prevBrowseId",
X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.nrsu="navigationRequestedSameUrl",X.pnt="performanceNavigationTiming",X.prt="playbackRequiresTap",X.plt="playerInfo.playbackType",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",
X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.rc="resourceInfo.resourceCache",X.scrh="screenHeight",X.scrw="screenWidth",X.st="serverTimeMs",X.ssdm="shellStartupDurationMs",X.br_trs="tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.aac_type="tvInfo.authAccessCredentialType",
X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X.rcl="mwebInfo.responseContentLength",X.GetSettings_rid="requestIds",X.GetTrending_rid="requestIds",X.GetMusicSearchSuggestions_rid="requestIds",X.REQUEST_ID="requestIds",X),Wt="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Xt={},Yt=(Xt.ccs="CANARY_STATE_",Xt.mver="MEASUREMENT_VERSION_",Xt.pis="PLAYER_INITIALIZED_STATE_",Xt.yt_pt="LATENCY_PLAYER_",Xt.pa="LATENCY_ACTION_",Xt.ctop="TOP_ENTITY_TYPE_",Xt.yt_vst="VIDEO_STREAM_TYPE_",Xt),Zt="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function $t(a,b,c){c=Pt(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Vt){c=Vt[a];0<=bb(Wt,c)&&(b=!!b);a in Yt&&"string"===typeof b&&(b=Yt[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Gt({},d)}0<=bb(Zt,a)||ls(new am("Unknown label logged with GEL CSI",a))}
;function au(a,b){No.call(this,1,arguments);this.timer=b}
w(au,No);var bu=new Oo("aft-recorded",au);var cu=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",cu);function du(){this.h=0}
function eu(){du.h||(du.h=new du);return du.h}
du.prototype.tick=function(a,b,c,d){fu(this,"tick_"+a+"_"+b)||Um("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
du.prototype.info=function(a,b,c){var d=Object.keys(a).join("");fu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Um("latencyActionInfo",a,{cttAuthInfo:c}))};
du.prototype.jspbInfo=function(){};
du.prototype.span=function(a,b,c){var d=Object.keys(a).join("");fu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Um("latencyActionSpan",a,{cttAuthInfo:c}))};
function fu(a,b){cu[b]=cu[b]||{count:0};var c=cu[b];c.count++;c.time=T();a.h||(a.h=em(function(){var d=T(),e;for(e in cu)cu[e]&&6E4<d-cu[e].time&&delete cu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new am("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||ls(c)),!0):!1}
;var gu=window;function hu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function iu(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=ju(e.requestStart),e.responseEnd=ju(e.responseEnd),e.redirectStart=ju(e.redirectStart),e.redirectEnd=ju(e.redirectEnd),e.domainLookupEnd=ju(e.domainLookupEnd),e.connectStart=ju(e.connectStart),e.connectEnd=
ju(e.connectEnd),e.responseStart=ju(e.responseStart),e.secureConnectionStart=ju(e.secureConnectionStart),e.domainLookupStart=ju(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=Y.timing;return a}
function ju(a){return Math.round(ku()+a)}
function ku(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=gu.performance||gu.mozPerformance||gu.msPerformance||gu.webkitPerformance||new hu;var lu=!1,mu={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Ta(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||$a,Y);function nu(a,b,c){if(null!==b){if("yt_lt"===a){var d="string"===typeof b?b:""+b;Nt(c).loadType=d}(a=$t(a,b,c))&&ou(a,c)}}
function ou(a,b){var c=Tt(b||"");Gt(c.info,a);a.loadType&&(c=a.loadType,Nt(b).loadType=c);Gt(Qt(b),a);c=Rt(b);b=Lt(b).cttAuthInfo;eu().info(a,c,b)}
function pu(){var a,b,c,d;return(null!=(d=null==$q().resolve(new Vq(Eo))?void 0:null==(a=Fo())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function qu(a,b,c){var d=Rt(c),e;if(e=S("web_csi_debug_sample_enabled")&&d)if(!1===Lt(c).debugTicksExcludedLogged)e=!1;else if(0===pu().length)e=Lt(c).debugTicksExcludedLogged=!1;else{var f,g,h;e=(null==$q().resolve(new Vq(Eo))?void 0:null==(f=Fo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=pu();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=(31*f+d.charCodeAt(g))%Number.MAX_SAFE_INTEGER;
e=0!==f%1E5%e;Lt(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,ou(f,c));Lt(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=Tt(c||"");e.tick[a]=b||T();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Pt(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Ot(c);e=b||T();S("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=Lt(c).cttAuthInfo;"_start"===
a?(a=eu(),fu(a,"baseline_"+d)||Um("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):eu().tick(a,d,b,f);ru(c);return e}}
function su(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=qq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function tu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Wb()&&a.setAttribute("nonce",Wb());return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=ku(),qu("rsf_"+b,c+Math.round(a.fetchStart)),qu("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function uu(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=db(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=fb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(qu("wffs",ju(b.startTime)),qu("wffe",ju(b.responseEnd)))}
function vu(a){var b=wu("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=wu(b[d],a);if(e)return e}return NaN}
function wu(a,b){if(a=Ot(b)[a])return"number"===typeof a?a:a[a.length-1]}
function ru(a){var b=wu("_start",a),c=vu(a);b&&c&&!lu&&(To(bu,new au(Math.round(c-b),a)),lu=!0)}
function xu(a,b){for(var c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!xu(a[d],b[d]))return!1;return!0}
function yu(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=gb(a,function(b){return"first-paint"===b.name}))return ju(a.startTime)}a=Y.timing;
return a.De?Math.max(0,a.De):0}
;function zu(a,b){Ik(function(){Tt("").info.actionType=a;b&&Ek("TIMING_AFT_KEYS",b);Ek("TIMING_ACTION",a);var c=R("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&nu(d,c[d]);c={isNavigation:!0,actionType:Ut[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=R("PREVIOUS_ACTION"))c.previousAction=Ut[d]||"LATENCY_ACTION_UNKNOWN";if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Ds())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=su();if(1===d||-1===d)c.isVisible=
!0;Nt();Mt();c.loadType="cold";d=Mt();var e=iu(),f=ku(),g=R("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(qu("srt",e.responseStart),1!==d.prerender&&qu("_start",f,void 0));d=yu();0<d&&qu("fpt",d);d=iu();d.isPerformanceNavigationTiming&&ou({performanceNavigationTiming:!0});qu("nreqs",d.requestStart,void 0);qu("nress",d.responseStart,void 0);qu("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(qu("nrs",d.redirectStart,void 0),qu("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(qu("ndnss",d.domainLookupStart,void 0),qu("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(qu("ntcps",d.connectStart,void 0),qu("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=ku()&&0<d.connectEnd-d.secureConnectionStart&&(qu("nstcps",d.secureConnectionStart,void 0),qu("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&uu();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in mu)mu.hasOwnProperty(h)&&
(e=mu[h],tu(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});ou(c);c=Mt();h=Qt();if("cold"===Nt().loadType&&("cold"===c.yt_lt||"cold"===h.loadType)){d=Ot();e=Pt();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])qu(k,wu(k));else if(S("log_repeated_ytcsi_ticks"))for(f=v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,qu(k.slice(1),g);k={};d=!1;e=v(Object.keys(c));for(f=e.next();!f.done;f=
e.next())f=f.value,(f=$t(f,c[f]))&&!xu(Qt(),f)&&(Gt(h,f),Gt(k,f),d=!0);d&&ou(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Au()&&vu()&&ru()})()}
function Bu(a,b,c,d){Ik(nu)(a,b,c,d)}
function Cu(a,b,c){return Ik(qu)(a,b,c)}
function Au(){return Ik(function(){return"_start"in Ot()})()}
function Du(){Ik(function(){var a=Rt();requestAnimationFrame(function(){setTimeout(function(){a===Rt()&&Cu("ol",void 0,void 0)},0)})})()}
var Eu=window;Eu.ytcsi&&(Eu.ytcsi.info=Bu,Eu.ytcsi.tick=Cu);var Fu="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Gu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Hu(a,b,c,d){this.j=a;this.aa=b;this.m=c;this.l=d;this.i=void 0;this.h=new Map;a.mb||(a.mb={});a.mb=Object.assign({},ut,a.mb)}
function Iu(a,b,c,d){if(void 0!==Hu.h){if(d=Hu.h,a=[a!==d.j,b!==d.aa,c!==d.m,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new am("InnerTubeTransportService is already initialized",a);
}else Hu.h=new Hu(a,b,c,d)}
function Ju(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Hl:c;var d=mt(b,a.j);if(!d)return Wd(new am("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(Ft(e.input),new Qd(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.kb)?void 0:g.mode)?"cors":void 0;if(a.m.cf){var n=e.config,r;n=null==n?void 0:null==(r=n.Wb)?void 0:r.sessionIndex;r=Gl(0,{sessionIndex:n});k=Object.assign({},Ku(h),r);return l.v(2)}return l.yield(Lu(e.config,
h),3)}2!=l.h&&(k=l.i);f(Mu(a,e,k));l.h=0})})):Wd(new am("Error: Failed to build request for command.",b))}
function Nu(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.eg)?0:d.ig)&&a.l){d=v(Fu);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function Mu(a,b,c){var d,e,f,g,h,k,l,n,r,t,p,x,y,z,H,I,M,N,K,V,Z,fa,qa,na,Ia,Fg,Kq,Lq,Mq;return A(function(ka){switch(ka.h){case 1:ka.v(2);break;case 3:if((d=ka.i)&&!d.isExpired())return ka.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Na)?0:f.context)){ka.v(4);break}g=b.Na.context;ka.v(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ka.v(4);break}l=k.value;return ka.yield(l.ag(g),8);case 8:k=h.next();ka.v(7);break;case 4:if(null==(n=a.i)||!n.fg(b.input,b.Na)){ka.v(11);
break}return ka.yield(a.i.Xf(b.input,b.Na),12);case 12:return r=ka.i,S("kevlar_process_local_innertube_responses_killswitch")||Nu(a,r,b),ka.return(r);case 11:return(x=null==(p=b.config)?void 0:p.Pa)&&a.h.has(x)&&S("web_memoize_inflight_requests")?t=a.h.get(x):(y=JSON.stringify(b.Na),I=null!=(H=null==(z=b.kb)?void 0:z.headers)?H:{},b.kb=Object.assign({},b.kb,{headers:Object.assign({},I,c)}),M=Object.assign({},b.kb),"POST"===b.kb.method&&(M=Object.assign({},M,{body:y})),(null==(N=b.config)?0:N.Me)&&
Cu(b.config.Me),K=function(){return a.aa.fetch(b.input,M,b.config)},t=K(),x&&a.h.set(x,t)),ka.yield(t,13);
case 13:if((V=ka.i)&&"error"in V&&(null==(Z=V)?0:null==(fa=Z.error)?0:fa.details))for(qa=V.error.details,na=v(qa),Ia=na.next();!Ia.done;Ia=na.next())Fg=Ia.value,(Kq=Fg["@type"])&&-1<Gu.indexOf(Kq)&&(delete Fg["@type"],V=Fg);x&&a.h.has(x)&&a.h.delete(x);(null==(Lq=b.config)?0:Lq.Ne)&&Cu(b.config.Ne);if(V||null==(Mq=a.i)||!Mq.Pf(b.input,b.Na)){ka.v(14);break}return ka.yield(a.i.Wf(b.input,b.Na),15);case 15:V=ka.i;case 14:return Nu(a,V,b),ka.return(V||void 0)}})}
function Lu(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Wb)?void 0:d.sessionIndex;var h=g.yield;var k=Vd(Gl(0,{sessionIndex:e}));return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Ku(b),f)))})}
function Ku(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);"cors"!==a&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Ou=new Uq("INNERTUBE_TRANSPORT_TOKEN");var Pu=["share/get_web_player_share_panel"],Qu=["feedback"],Ru=["notification/modify_channel_preference"],Su=["browse/edit_playlist"],Tu=["subscription/subscribe"],Uu=["subscription/unsubscribe"];function Vu(){}
w(Vu,rt);Vu.prototype.j=function(){return Tu};
Vu.prototype.h=function(a){return U(a,vk)||void 0};
Vu.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(Vu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Wu(){}
w(Wu,rt);Wu.prototype.j=function(){return Uu};
Wu.prototype.h=function(a){return U(a,uk)||void 0};
Wu.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(Wu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Xu(){}
w(Xu,rt);Xu.prototype.j=function(){return Qu};
Xu.prototype.h=function(a){return U(a,pk)||void 0};
Xu.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(Xu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Yu(){}
w(Yu,rt);Yu.prototype.j=function(){return Ru};
Yu.prototype.h=function(a){return U(a,tk)||void 0};
Yu.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Zu(){}
w(Zu,rt);Zu.prototype.j=function(){return Su};
Zu.prototype.h=function(a){return U(a,sk)||void 0};
Zu.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function $u(){}
w($u,rt);$u.prototype.j=function(){return Pu};
$u.prototype.h=function(a){return U(a,rk)};
$u.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var av=new Uq("NETWORK_SLI_TOKEN");function bv(a){this.h=a}
bv.prototype.fetch=function(a,b){var c=this,d,e,f;return A(function(g){c.h&&(d=$b(ac(5,pc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;S("wug_networking_gzip_request")&&(e=kp(b));f=new window.Request(a,e);return S("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){ls(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){ls(h)}))})};
bv.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Sf(),b=b.then(function(c){ls(new am("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
bv[Tq]=[new Vq(av)];var cv=new Uq("NETWORK_MANAGER_TOKEN");var dv;function ev(){var a=fv,b=gv,c=hv;this.l=iv;this.navigate=a;this.i=b;this.j=c;this.h=new Set}
function jv(a,b,c){if(kv(b))lv(a,b,c);else{var d=a.l(b,c);if(null==c?0:c.yc)d.yc=c.yc;0===d.type?a.navigate?mv(d.command)?nv(a,d.command)||(S("logging_avoid_blocking_during_navigation")&&qr().transition("application_navigating"),b=a.navigate(d)||[],Zd(b).then(function(){a.h.delete(d.command)})):ks(Error("Error: Command handler page requests need to specify a url.")):ks(Error("Error: Command handler navigate function was called but not set.")):1===d.type?a.i?nv(a,d.command)||(b=a.i(d),Zd(b).then(function(){a.h.delete(d.command)})):
ks(Error("Error: Command handler handle service request function was called but not set.")):2===d.type&&(a.j?a.j(d):ks(Error("Error: Command handler send action was called but not set.")))}}
function nv(a,b){if(a.h.has(b))return!0;a.h.add(b);return!1}
function kv(a){var b=!!U(a,ik),c;a="CLIENT_SIGNAL"===(null==(c=U(a,nk))?void 0:c.signal);return b||a}
function lv(a,b,c){var d=U(b,ik);if(d)var e=(null==d?void 0:d.commands)||[];else{var f;if("CLIENT_SIGNAL"===(null==(f=U(b,nk))?void 0:f.signal)){var g;e=(null==(g=U(b,nk))?void 0:g.actions)||[]}}if(e)for(b=v(e),e=b.next();!e.done;e=b.next()){e=e.value;try{jv(a,e,c)}catch(h){h instanceof Error&&ks(h)}}else ks(Error("Could not handle the meta command."))}
function mv(a){var b;return!(null==(b=U(null==a?void 0:a.commandMetadata,mk))||!b.url)}
;function ov(){var a,b,c;return A(function(d){if(1==d.h)return a=$q().resolve(Ou),a?d.yield(Ju(a),2):(ls(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return ls(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Qf;return d.return(c)}ls(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var pv=C.caches,qv;function rv(a){var b=a.indexOf(":");return-1===b?{yd:a}:{yd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function sv(){return A(function(a){if(void 0!==qv)return a.return(qv);qv=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return ya(d,2),d.yield(pv.open("test-only"),4);case 4:return d.yield(pv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=za(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(qv)})}
function tv(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(sv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(pv.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=rv(f),h=g.datasyncId,!h||a.includes(h)||b.push(pv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function uv(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(sv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=cm("cache contains other");return h.yield(pv.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=rv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function vv(){ov().then(function(a){a&&(jo(a),tv(a),Ct(a))})}
function wv(){var a=new cq;ei.na(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=cm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];jo(g);tv(g);Ct(g);return f.return()}c=Dt();return f.yield(uv(),3);case 3:return d=f.i,f.yield(ko(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?vv():a.h.add("publicytnetworkstatus-online",vv,!0,void 0,void 0),f.h=0}})})}
;var Ih=ha(["data-"]);function xv(a){a&&(a.dataset?a.dataset[yv("loaded")]="true":Hh(a))}
function zv(a,b){return a?a.dataset?a.dataset[yv(b)]:a.getAttribute("data-"+b):null}
var Av={};function yv(a){return Av[a]||(Av[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Bv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Cv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Dv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Bv,""),c=c.replace(Cv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ev(a,b,c)}
function Ev(a,b,c){c=void 0===c?null:c;var d=Fv(a),e=document.getElementById(d),f=e&&zv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Nq(d,b),b=""+Oa(b),Gv[b]=f),g||(e=Hv(a,d,function(){if(!zv(e,"loaded")){xv(e);Qq(d);var h=Ua(Rq,d);cl(h,0)}},c)))}
function Hv(a,b,c,d){d=void 0===d?null:d;var e=Cd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Nh(e,ek(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Iv(a){a=Fv(a);var b=document.getElementById(a);b&&(Rq(a),b.parentNode.removeChild(b))}
function Jv(a,b){a&&b&&(a=""+Oa(b),(a=Gv[a])&&Pq(a))}
function Fv(a){var b=document.createElement("a");Dh(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Yb(a)}
var Gv={};var Kv=[],Lv=!1;function Mv(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&Qs()){var a=R("PLAYER_VARS",{});if("1"!=ob(a)&&!Rs(a)){var b=function(){Lv=!0;"google_ad_status"in window?Ek("DCLKSTAT",1):Ek("DCLKSTAT",2)};
try{Dv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Kv.push(ei.na(function(){if(!(Lv||"google_ad_status"in window)){try{Jv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Lv=!0;Ek("DCLKSTAT",3)}},5E3))}}}
function Nv(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Ov(a){ir.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.la},{from:"document_active",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"flush_logs",action:this.G},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.G},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Ov,ir);Ov.prototype.la=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Ov.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Ov.prototype.G=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Ov.prototype.i=function(){this.h=new Map};function Pv(a){ir.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.G},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.m},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.G},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.G},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.m},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.m},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Pv,ir);Pv.prototype.i=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Pv.prototype.h=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Pv.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Pv.prototype.G=function(a,b){a(null==b?void 0:b.event)};function Qv(){this.l=new Ov;this.m=new Pv}
Qv.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function Rv(a){No.call(this,1,arguments);this.csn=a}
w(Rv,No);var Wo=new Oo("screen-created",Rv),Sv=[],Tv=0,Uv=new Map,Vv=new Map,Wv=new Map;
function Xv(a,b,c,d,e){e=void 0===e?!1:e;for(var f=Yv({cttAuthInfo:Fs(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(mb(k)||!k.trackingParams&&!k.veType)&&ls(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=Zv(h,b);if(k.veType&&!Vv.has(l)&&!Wv.has(l)&&!e){Uv.set(l,[a,b,c,h]);return}h=Zv(c,b);Uv.has(h)?$v(c,b):Wv.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:eb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?aw("visualElementAttached",f,c):a?cs("visualElementAttached",c,a,f):Um("visualElementAttached",c,f)}
function aw(a,b,c){Sv.push({payloadName:a,payload:c,Vf:void 0,options:b});Tv||(Tv=Xo())}
function Yo(a){if(Sv){for(var b=v(Sv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Um(c.payloadName,c.payload,c.options));Sv.length=0}Tv=0}
function Zv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function $v(a,b){a=Zv(a,b);Uv.has(a)&&(b=Uv.get(a)||[],Xv(b[0],b[1],b[2],[b[3]],!0),Uv.delete(a))}
function Yv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function bw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
bw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Ds(void 0===c?0:c)){a=this.client;d=new ws({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=Zv(d,c);Vv.set(f,!0);$v(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Yv({cttAuthInfo:Fs(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?aw("visualElementGestured",f,d):a?cs("visualElementGestured",d,a,f):Um("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
bw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=Ds(d);a||(a=(a=As(void 0===d?0:d))?new ws({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Yv({cttAuthInfo:Fs(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?aw("visualElementStateChanged",d,b):a?cs("visualElementStateChanged",b,a,d):Um("visualElementStateChanged",b,d))}};
function cw(a,b){if(void 0===b)for(var c=Cs(),d=0;d<c.length;d++)void 0!==c[d]&&cw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Xv(a.client,b,f,e)}),a.i.clear(),a.h.clear(),a.m=void 0}
;function dw(){Qv.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(dw,Qv);dw.prototype.j=function(){Um("finalPayload",{csn:Ds()})};
dw.prototype.h=function(){qs(rs)};
dw.prototype.i=function(){var a=cw;bw.h||(bw.h=new bw);a(bw.h)};function ew(){}
function fw(){var a=E("ytglobal.storage_");a||(a=new ew,D("ytglobal.storage_",a));return a}
ew.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(gw()):d.return()})};
function gw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",ew);function Sm(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Yk("ytidb_transaction_ended_event_rate_limit_session",.2)}
Sm.prototype.Qb=function(a){this.handleError(a)};
Sm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":hw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=Yk("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function hw(a,b){fw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:iw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:iw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function iw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function jw(a){this.args=void 0===a?null:a;this.returnValue=[]}
;var kw=new Map;function lw(a,b){if(!a)return null;a=Object.keys(a);a=v(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.toLowerCase();if(-1<d.indexOf(b,d.length-b.length))return c}return null}
;function mw(a,b,c){var d;d||(d={bubbles:!0,cancelable:!1,composed:!0});null!==c&&void 0!==c&&(d.detail=c);b=new CustomEvent(b,d);a.dispatchEvent(b)}
;function nw(a,b){b=new jw(b);mw(a,"yt-action",b);return b.returnValue}
function ow(a,b,c,d){b&&b.length&&b.forEach(function(e){var f=lw(e,"action")||lw(e,"command")||lw(e,"endpoint");if(f){var g="yt"+f;var h=kw.get(g);h?g=h:(f="yt-"+f.replace(/([A-Z])/g,"-$1").toLowerCase(),kw.set(g,f),g=f);U(e,lk)&&(g+="-"+U(e,lk).signal.toLowerCase().replace(/_/g,"-"))}else g=null;g&&(S("handle_service_request_actions")&&e.commandMetadata&&e.commandMetadata.webCommandMetadata&&e.commandMetadata.webCommandMetadata.sendPost?pw(c?c:a,[e]):nw(a,[e,c,d]))})}
function pw(a,b){var c=[a];b&&c.push.apply(c,b);b=nw(a,c);return 0<b.length&&(b=b[0],mw(a,"yt-service-request-sent",b),b&&b.ajaxPromise)?(b.ajaxPromise.then(function(d){mw(a,"yt-service-request-completed",d)},function(d){mw(a,"yt-service-request-error",{error:d,
params:c})},a),b.ajaxPromise):Vd()}
;function iv(a,b,c){b=void 0===b?{}:b;var d,e=null==(d=U(a.commandMetadata,mk))?void 0:d.url;d=b.form||{};!c||d.element||d.skipDefaultElement||(b.form=b.form||{},b.form.element=c);if(e&&"/service_ajax"!==e)return{type:0,command:a,form:b.form};if(S("kevlar_service_command_check")){if(c=$q().resolve(Ou),lt(a,c.j))return Object.assign({},{type:1,command:a},b)}else{var f;if(null==(f=U(a.commandMetadata,mk))?0:f.apiUrl)return Object.assign({},{type:1,command:a},b)}return{type:2,command:a,form:b.form}}
function gv(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);if(b)return[pw(b,[a.command,c,a.yc])]}return[]}
function hv(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);b&&ow(b,[a.command],b,c)}}
;function qw(a,b,c){G.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.s=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=bb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.s)}
w(qw,G);qw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Kk(d)}}};
qw.prototype.M=function(){window.removeEventListener("message",this.s);G.prototype.M.call(this)};function rw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new qw(!!R("WIDGET_ID_ENFORCE")),b=this.Je.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=R("WIDGET_ID"))this.h.sessionId=a}
m=rw.prototype;m.Je=function(a,b,c){"addEventListener"===a&&b?this.Jc(b[0],c):this.Zc(a,b,c)};
m.Zc=function(){};
m.Dc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Jc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.Dc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ke=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Gc());this.sendMessage("onReady");cb(this.i,this.Fd,this);this.i=[]};
m.Gc=function(){return null};
function sw(a,b){a.sendMessage("infoDelivery",b)}
m.Fd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Fd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var tw={},uw=(tw["api.invalidparam"]=2,tw.auth=150,tw["drm.auth"]=150,tw["heartbeat.net"]=150,tw["heartbeat.servererror"]=150,tw["heartbeat.stop"]=150,tw["html5.unsupportedads"]=5,tw["fmt.noneavailable"]=5,tw["fmt.decode"]=5,tw["fmt.unplayable"]=5,tw["html5.missingapi"]=5,tw["html5.unsupportedlive"]=5,tw["drm.unavailable"]=5,tw["mrm.blocked"]=151,tw);var vw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function ww(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function xw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(vw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function yw(a,b,c,d){if(Na(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function zw(a){rw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ve.bind(this));this.addEventListener("onVolumeChange",this.We.bind(this));this.addEventListener("onApiChange",this.Qe.bind(this));this.addEventListener("onPlaybackQualityChange",this.Se.bind(this));this.addEventListener("onPlaybackRateChange",this.Te.bind(this));this.addEventListener("onStateChange",this.Ue.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Xe.bind(this))}
w(zw,rw);m=zw.prototype;
m.Zc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&ww(a)){var d=b;if(Na(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=xw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=xw(e);break;case "loadPlaylist":case "cuePlaylist":e=yw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);ww(a)&&sw(this,this.Gc())}};
m.Jc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);rw.prototype.Jc.call(this,a,b)};
m.Dc=function(a,b){var c=this,d=rw.prototype.Dc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.ke.bind(this);this.h.h=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?uw[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Gc=function(){if(!this.api)return null;var a=this.api.getApiInterface();hb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Ue=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());sw(this,a)};
m.Se=function(a){sw(this,{playbackQuality:a})};
m.Te=function(a){sw(this,{playbackRate:a})};
m.Qe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.We=function(){sw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Ve=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());sw(this,a)};
m.Xe=function(){var a={sphericalProperties:this.api.getSphericalProperties()};sw(this,a)};
m.dispose=function(){rw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Aw(a){G.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Bd,this)}
w(Aw,G);m=Aw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.lb("RECEIVING"))};
m.lb=function(a,b){this.started&&!this.Z()&&this.connection.lb(a,b)};
m.Bd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Bw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Cw(a,c))&&this.lb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Re.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Re=function(a,b){this.started&&!this.Z()&&this.connection.lb(a,this.Fc(a,b))};
m.Fc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.M=function(){var a=this.connection;a.Z()||Bi(a.h,"command",this.Bd,this);this.connection=null;for(var b in this.h)this.h.hasOwnProperty(b)&&this.removeListener(b);G.prototype.M.call(this)};function Dw(a,b){Aw.call(this,b);this.api=a;this.start()}
w(Dw,Aw);Dw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Dw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Bw(a,b){switch(a){case "loadVideoById":return a=xw(b),[a];case "cueVideoById":return a=xw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=yw(b),[a];case "cuePlaylist":return a=yw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Cw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Dw.prototype.Fc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Aw.prototype.Fc.call(this,a,b)};
Dw.prototype.M=function(){Aw.prototype.M.call(this);delete this.api};function Ew(a){a=void 0===a?!1:a;G.call(this);this.h=new L(a);wc(this,this.h)}
Wa(Ew,G);Ew.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
Ew.prototype.l=function(a,b){this.Z()||this.h.Za.apply(this.h,arguments)};function Fw(a,b,c){Ew.call(this);this.j=a;this.i=b;this.id=c}
w(Fw,Ew);Fw.prototype.lb=function(a,b){this.Z()||this.j.lb(this.i,this.id,a,b)};
Fw.prototype.M=function(){this.i=this.j=null;Ew.prototype.M.call(this)};function Gw(a,b,c){G.call(this);this.h=a;this.origin=c;this.i=xq(window,"message",this.j.bind(this));this.connection=new Fw(this,a,b);wc(this,this.connection)}
w(Gw,G);Gw.prototype.lb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Gw.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
Gw.prototype.M=function(){yq(this.i);this.h=null;G.prototype.M.call(this)};function Hw(){this.state=1;this.h=null}
m=Hw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=vb();d=f?f.createScript(d):d;d=new Ab(d,zb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,xb("From proto message. b/166824318"),e=Eb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Iw(this,d,e,a.program,b,c)}else ls(Error("Cannot initialize botguard without program"))};
function Iw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Dv(c,function(){window[g]?Jw(a,d,g,e):(a.state=3,Iv(c),ls(new am("Unable to load Botguard","from "+c)))},f)):b?(f=Cd("SCRIPT"),b instanceof Ab?(b instanceof Ab&&b.constructor===Ab?b=b.h:(La(b),b="type_error:SafeScript"),f.textContent=b,Mh(f)):f.textContent=b,f.nonce=Wb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Jw(a,d,g,e):(a.state=4,ls(new am("Unable to load Botguard from JS")))):ls(new am("Unable to load VM; no url or JS provided"))}
function Jw(a,b,c,d){a.state=5;try{var e=new yh({program:b,oe:c,Ke:S("att_web_record_metrics")});e.Ze.then(function(){a.state=6;d&&d(b)});
a.Uc(e)}catch(f){a.state=7,f instanceof Error&&ls(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Xc()?this.Od({kd:a}):null};
m.dispose=function(){this.Uc(null);this.state=8};
m.Xc=function(){return!!this.h};
m.Od=function(a){return this.h.Id(a)};
m.Uc=function(a){uc(this.h);this.h=a};function Kw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Lw(){Hw.apply(this,arguments)}
w(Lw,Hw);Lw.prototype.Uc=function(a){var b;null==(b=Kw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Id.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Lw.prototype.Xc=function(){return!!Kw()};
Lw.prototype.Od=function(a){return Kw().bgvmc(a)};var Mw=new Lw;function Nw(){return Mw.Xc()}
function Ow(a){a=void 0===a?{}:a;return Mw.invoke(a)}
;function Pw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||qb(b);this.assets=a.assets||{};this.attrs=a.attrs||qb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Pw.prototype.clone=function(){var a=new Pw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=qb(c):a[b]=c}return a};var Qw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Rw(a){a=a||"";if(window.spf){var b=a.match(Qw);spf.style.load(a,b?b[1]:"",void 0)}else Sw(a)}
function Sw(a){var b=Tw(a),c=document.getElementById(b),d=c&&zv(c,"loaded");d||c&&!d||(c=Uw(a,b,function(){if(!zv(c,"loaded")){xv(c);Qq(b);var e=Ua(Rq,b);cl(e,0)}}))}
function Uw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ek(a);Lh(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Tw(a){var b=Cd("A");Dh(b,new Gb(a,Hb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Yb(a)}
;function Vw(){G.call(this);this.h=[]}
w(Vw,G);Vw.prototype.M=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.callback,void 0)}G.prototype.M.call(this)};function Ww(){Vw.apply(this,arguments)}
w(Ww,Vw);function Xw(a,b,c,d,e){G.call(this);var f=this;this.s=b;this.webPlayerContextConfig=d;this.wc=e;this.Fa=!1;this.api={};this.ea=this.m=null;this.S=new L;this.h={};this.Y=this.ma=this.elementId=this.ab=this.config=null;this.W=!1;this.j=this.D=null;this.sa={};this.xc=["onReady"];this.lastError=null;this.Vb=NaN;this.R={};this.Td=new Ww(this);this.da=0;this.i=this.l=a;wc(this,this.S);Yw(this);Zw(this);wc(this,this.Td);c?this.da=cl(function(){f.loadNewVideoConfig(c)},0):d&&($w(this),ax(this))}
w(Xw,G);m=Xw.prototype;m.getId=function(){return this.s};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.da&&(window.clearTimeout(this.da),this.da=0);var b=a||{};b instanceof Pw||(b=new Pw(b));this.config=b;this.setConfig(a);ax(this);this.isReady()&&bx(this)}};
function $w(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.s,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.s:a.config.attrs.id=a.s);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.ab=a;this.config=cx(a);$w(this);if(!this.ma){var b;this.ma=dx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Xh(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Xh(Number(a)||a))};
function bx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function ex(a){var b=!0,c=fx(a);c&&a.config&&(a=gx(a),b=zv(c,"version")===a);return b&&!!E("yt.player.Application.create")}
function ax(a){if(!a.Z()&&!a.W){var b=ex(a);if(b&&"html5"===(fx(a)?"html5":null))a.Y="html5",a.isReady()||hx(a);else if(ix(a),a.Y="html5",b&&a.j&&a.l)a.l.appendChild(a.j),hx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=jx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?cx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.wc);hx(a)};
a.W=!0;b?a.D():(Dv(gx(a),a.D),(b=kx(a))&&Rw(b),lx(a)&&!c&&D("yt.player.Application.create",null))}}}
function fx(a){var b=Bd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function hx(a){if(!a.Z()){var b=fx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!jx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}mx(a)}else a.Vb=cl(function(){hx(a)},50)}}
function mx(a){Yw(a);a.Fa=!0;var b=fx(a);if(b){a.m=nx(a,b,"addEventListener");a.ea=nx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=nx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);bx(a);a.ma&&a.ma(a.api);a.S.Za("onReady",a.api)}
function nx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,ls(f))}}}
function Yw(a){a.Fa=!1;if(a.ea)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ea(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.R={};a.m=null;a.ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ab};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Fa};
function Zw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Qq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Qq("WATCH_LATER_VIDEO_REMOVED",b)})}
m.addEventListener=function(a,b){var c=this,d=dx(this,b);d&&(0<=bb(this.xc,a)||this.h[a]||(b=ox(this,a),this.m&&this.m(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&cl(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=dx(this,b))&&Bi(this.S,a,b)};
function dx(a,b){var c=b;if("string"===typeof b){if(a.sa[b])return a.sa[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){ks(f)}};
a.sa[b]=c}return c?c:null}
function ox(a,b){var c="ytPlayer"+b+a.s;a.h[b]=c;C[c]=function(d){var e=cl(function(){if(!a.Z()){try{a.S.Za(b,null!=d?d:void 0)}catch(h){ls(new am("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.s,data:d}))}var f=a.R,g=String(e);g in f&&delete f[g]}},0);
nb(a.R,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(fx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function ix(a){a.cancel();Yw(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=fx(a);b&&(ex(a)||!lx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&Jv(gx(this),this.D);window.clearTimeout(this.Vb);this.W=!1};
m.M=function(){ix(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){ks(b)}this.sa=null;for(var a in this.h)this.h.hasOwnProperty(a)&&(C[this.h[a]]=null);this.ab=this.config=this.api=null;delete this.l;delete this.i;G.prototype.M.call(this)};
function lx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function gx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function kx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function jx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Nk(c||"","&")[b]}
function cx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?qb(e):e}return b}
;var px={},qx="player_uid_"+(1E9*Math.random()>>>0);function rx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Bd(c):c;var e=qx+"_"+Oa(c),f=px[e];if(f&&d)return sx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Xw(c,e,a,b,void 0);px[e]=f;Qq("player-added",f.api);xc(f,function(){delete px[f.getId()]});
return f.api}
function sx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var tx=null,ux=null,vx=null;function wx(){xx()}
function yx(){xx()}
function xx(){var a=tx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function fv(a){var b,c;if(a=null==(b=a.command)?void 0:null==(c=b.urlEndpoint)?void 0:c.url)b=window,c=Ch(a),void 0!==c&&b.open(c,void 0,void 0);return[]}
function zx(){tx&&tx.sendAbandonmentPing&&tx.sendAbandonmentPing();R("PL_ATT")&&Mw.dispose();for(var a=ei,b=0,c=Kv.length;b<c;b++)a.oa(Kv[b]);Kv.length=0;Iv("//static.doubleclick.net/instream/ad_status.js");Lv=!1;Ek("DCLKSTAT",0);vc(vx,ux);tx&&(tx.removeEventListener("onVideoDataChange",wx),tx.destroy())}
;function Ax(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&wt(a,b);if(c)return!1;Ft(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=kc(a,e);Ft(a);g=g.location;f=a+f;var h=void 0===h?Qh:h;a:{h=void 0===h?Qh:h;for(a=0;a<h.length;++a)if(b=h[a],b instanceof Oh&&b.ye(f)){h=new Gb(f,Hb);break a}h=void 0}h=Ch(h||Ib);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",Ek);D("yt.config.set",Ek);D("yt.setMsg",Hs);D("yt.msgs.set",Hs);D("yt.logging.errors.log",ks);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}$s(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);zu("embed",["ol"]);c=R("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Sk(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&zu("watch",["pbs","pbu","pbp"]);tx=rx(a,c);S("embeds_enable_server_driven_watch_again_on_youtube")&&!ev.h&&(ev.h=new ev);tx.addEventListener("onVideoDataChange",wx);tx.addEventListener("onReady",yx);S("embeds_enable_server_driven_watch_again_on_youtube")&&tx.addEventListener("innertubeCommand",function(f){jv(ev.h,f)});
a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?vx=new zw(tx):R("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(ux=new Gw(window.parent,a,b),vx=new Dw(tx,ux.connection));Mv();S("ytidb_create_logger_embed_killswitch")||Rm();a={};dw.h||(dw.h=new dw);dw.h.install((a.flush_logs={callback:function(){Qr()}},a));
nq();S("ytidb_clear_embedded_player")&&ei.na(function(){var f,g;if(!dv){var h=$q(),k={Rc:cv,Md:bv};h.h.set(k.Rc,k);k={zc:{feedbackEndpoint:nt(Xu),modifyChannelNotificationPreferenceEndpoint:nt(Yu),playlistEditEndpoint:nt(Zu),subscribeEndpoint:nt(Vu),unsubscribeEndpoint:nt(Wu),webPlayerShareEntityServiceEndpoint:nt($u)}};var l=kt(),n={};l&&(n.client_location=l);void 0===f&&(f=Fl());void 0===g&&(g=h.resolve(cv));Iu(k,g,f,n);f={Rc:Ou,Nd:Hu.h};h.h.set(f.Rc,f);dv=h.resolve(Ou)}wv()})});
var Bx=Ik(function(){Du();at()}),Cx=Ik(function(a){a.persisted||(Du(),at())}),Dx=Ik(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?zx():a.persisted||zx()}),Ex=Ik(zx);
window.addEventListener?(window.addEventListener("load",Bx),window.addEventListener("pageshow",Cx),window.addEventListener("pagehide",Dx)):window.attachEvent&&(window.attachEvent("onload",Bx),window.attachEvent("onunload",Ex));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Fk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new am(g),e.name="UnhandledWindowError",e.message=
g,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?ks(e):ls(e))};
je=ms;window.addEventListener("unhandledrejection",function(a){ms(a.reason)});
cb(R("ERRORS")||[],function(a){ks.apply(null,a)});
Ek("ERRORS",[]);D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Nw);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Ow);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Nv);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Ax);D("yt.util.activity.init",E("yt.util.activity.init")||Cq);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Fq);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Dq);}).call(this);
