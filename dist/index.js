"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(g,s){
var w=require('@stdlib/stats-base-nanvariancewd/dist'),p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,n){return p(w(e,r,a,n))}s.exports=x
});var v=t(function(h,u){
var y=require('@stdlib/stats-base-nanvariancewd/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,a,n,o){return f(y(e,r,a,n,o))}u.exports=l
});var c=t(function(j,q){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=i(),O=v();m(d,"ndarray",O);q.exports=d
});var R=c();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
