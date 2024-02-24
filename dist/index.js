"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var P=o(function(X,E){
var j=require('@stdlib/assert-is-plain-object/dist'),b=require('@stdlib/assert-has-own-property/dist'),k=require('@stdlib/assert-is-boolean/dist').isPrimitive,L=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,d=require('@stdlib/error-tools-fmtprodmsg/dist');function S(r,e){return j(e)?(b(e,"thisArg")&&(r.thisArg=e.thisArg),b(e,"series")&&(r.series=e.series,!k(r.series))?new TypeError(d('1Rh2o',"series",r.series)):b(e,"limit")&&(r.limit=e.limit,!L(r.limit))?new TypeError(d('1Rh3P',"limit",r.limit)):null):new TypeError(d('1Rh2V',e));}E.exports=S
});var O=o(function(Y,T){
var p=require("debug"),u=p("some-by-async:limit");function J(r,e,i,n,s){var v,f,m,l,a,t,g,h;if(a=r.length,u("Collection length: %d",a),a===0)return u("Finished processing a collection."),s(null,!1);for(a<i.limit?l=a:l=i.limit,u("Concurrency limit: %d",l),u("Number of arguments: %d",n.length),v=a-1,f=0,t=-1,g=0,h=0;h<l;h++)t<v&&x();function x(){t+=1,u("Collection element %d: %s.",t,JSON.stringify(r[t])),n.length===2?n.call(i.thisArg,r[t],y):n.length===3?n.call(i.thisArg,r[t],t,y):n.call(i.thisArg,r[t],t,r,y)}function y(q,A){if(!m){if(q)return m=!0,u("Encountered an error: %s",q.message),s(q);if(f+=1,u("Processed %d of %d collection elements.",f,a),u("Test result: %s",!!A),A&&!m&&(g+=1,g===e))return m=!0,u("Finished processing a collection."),s(null,!0);if(t<v)return x();if(f===a)return u("Finished processing a collection."),s(null,!1)}}}T.exports=J
});var w=o(function(Z,V){
var F=require('@stdlib/assert-is-function/dist'),R=require('@stdlib/assert-is-collection/dist'),z=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,c=require('@stdlib/error-tools-fmtprodmsg/dist'),D=require('@stdlib/constants-float64-pinf/dist'),G=P(),H=O();function K(r,e){var i,n,s;if(i={},arguments.length>1){if(n=G(i,r),n)throw n;s=e}else s=r;if(!F(s))throw new TypeError(c('1Rh3q',s));return i.series?i.limit=1:i.limit||(i.limit=D),v;function v(f,m,l){if(!R(f))throw new TypeError(c('1RhAh',f));if(!z(m))throw new TypeError(c('1Rh45',m));if(!F(l))throw new TypeError(c('1Rh3q',l));return H(f,m,i,s,a);function a(t,g){if(t)return l(t,!1);l(null,g)}}}V.exports=K
});var B=o(function(_,I){
var C=w();function M(r,e,i,n,s){if(arguments.length<5)return C(i)(r,e,n);C(i,n)(r,e,s)}I.exports=M
});var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=B(),U=w();Q(N,"factory",U);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
