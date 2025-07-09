"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=n(function(g,i){
var y=require('@stdlib/stats-base-nanvariancewd/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function p(e,r,t,a,o){return f(y(e,r,t,a,o))}i.exports=p
});var d=n(function(h,u){
var w=require('@stdlib/strided-base-stride2offset/dist'),x=s();function l(e,r,t,a){return x(e,r,t,a,w(e,a))}u.exports=l
});var c=n(function(j,q){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=d(),O=s();m(v,"ndarray",O);q.exports=v
});var R=c();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
