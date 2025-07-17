"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(O,s){
var c=require('@stdlib/stats-strided-nanvariancewd/dist').ndarray,o=require('@stdlib/math-base-special-sqrt/dist');function y(e,r,n,a,q){return o(c(e,r,n,a,q))}s.exports=y
});var d=i(function(R,u){
var f=require('@stdlib/strided-base-stride2offset/dist'),p=t();function w(e,r,n,a){return p(e,r,n,a,f(e,a))}u.exports=w
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=d(),l=t();x(v,"ndarray",l);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
