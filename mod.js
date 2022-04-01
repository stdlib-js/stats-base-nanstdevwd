// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,a=Object.prototype,n=a.toString,o=a.__defineGetter__,u=a.__defineSetter__,i=a.__lookupGetter__,l=a.__lookupSetter__;var c=t,f=function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},_=e()?c:f;var p=function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var v=function(r,e,t,a){var n,o,u,i,l,c,f,_;if(r<=0)return NaN;if(1===r||0===a)return(c=t[0])==c&&r-e>0?0:NaN;for(i=a<0?(1-r)*a:0,u=0,o=0,f=0,_=0;_<r;_++)(c=t[i])==c&&(u+=(n=c-o)*(c-(o+=n/(f+=1)))),i+=a;return(l=f-e)<=0?NaN:u/l};p(v,"ndarray",(function(r,e,t,a,n){var o,u,i,l,c,f,_,p;if(r<=0)return NaN;if(1===r||0===a)return(f=t[n])==f&&r-e>0?0:NaN;for(l=n,i=0,u=0,_=0,p=0;p<r;p++)(f=t[l])==f&&(i+=(o=f-u)*(f-(u+=o/(_+=1)))),l+=a;return(c=_-e)<=0?NaN:i/c}));var y=v,b=Math.sqrt,d=y,s=b;var N=y.ndarray,j=b;var g=function(r,e,t,a){return s(d(r,e,t,a))};p(g,"ndarray",(function(r,e,t,a,n){return j(N(r,e,t,a,n))}));var m=g;export{m as default};
//# sourceMappingURL=mod.js.map
