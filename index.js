// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,i=t.__lookupGetter__,u=t.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,l){var f,c,_,d;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(i.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=t,delete e[r],e[r]=l.value,e.__proto__=f):e[r]=l.value),_="get"in l,d="set"in l,c&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,r,l.get),d&&a&&a.call(e,r,l.set),e};function f(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e,r,t,n){var o,a,i,u,l,f,c,_;if(e<=0)return NaN;if(1===e||0===n)return(f=t[0])==f&&e-r>0?0:NaN;for(u=n<0?(1-e)*n:0,i=0,a=0,c=0,_=0;_<e;_++)(f=t[u])==f&&(i+=(o=f-a)*(f-(a+=o/(c+=1)))),u+=n;return(l=c-r)<=0?NaN:i/l}f(c,"ndarray",(function(e,r,t,n,o){var a,i,u,l,f,c,_,d;if(e<=0)return NaN;if(1===e||0===n)return(c=t[o])==c&&e-r>0?0:NaN;for(l=o,u=0,i=0,_=0,d=0;d<e;d++)(c=t[l])==c&&(u+=(a=c-i)*(c-(i+=a/(_+=1)))),l+=n;return(f=_-r)<=0?NaN:u/f}));const{ndarray:_}=c;var d=Math.sqrt;function p(e,r,t,n){return d(c(e,r,t,n))}return f(p,"ndarray",(function(e,r,t,n,o){return d(_(e,r,t,n,o))})),p},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nanstdevwd=r();
//# sourceMappingURL=index.js.map
