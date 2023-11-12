// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";function d(e,t){return o(t)?(l(t,"thisArg")&&(e.thisArg=t.thisArg),l(t,"series")&&(e.series=t.series,!m(e.series))?new TypeError(s("1Rh2o,GE","series",e.series)):l(t,"limit")&&(e.limit=t.limit,!i(e.limit))?new TypeError(s("1Rh3P,Fv","limit",e.limit)):null):new TypeError(s("1Rh2V,FD",t))}function c(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var i=Function.bind.apply(t,r);return new i}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),r}var f=c(Object.freeze({__proto__:null,default:()=>()=>{}}))("some-by-async:limit");function p(e,t,r,i,s){var n,o,l,m,d,c,p,h;if(d=e.length,f("Collection length: %d",d),0===d)return f("Finished processing a collection."),s(null,!1);for(m=d<r.limit?d:r.limit,f("Concurrency limit: %d",m),f("Number of arguments: %d",i.length),n=d-1,o=0,c=-1,p=0,h=0;h<m;h++)c<n&&u();function u(){f("Collection element %d: %s.",c+=1,JSON.stringify(e[c])),2===i.length?i.call(r.thisArg,e[c],a):3===i.length?i.call(r.thisArg,e[c],c,a):i.call(r.thisArg,e[c],c,e,a)}function a(e,r){if(!l)return e?(l=!0,f("Encountered an error: %s",e.message),s(e)):(f("Processed %d of %d collection elements.",o+=1,d),f("Test result: %s",!!r),r&&!l&&(p+=1)===t?(l=!0,f("Finished processing a collection."),s(null,!0)):c<n?u():o===d?(f("Finished processing a collection."),s(null,!1)):void 0)}}function h(e,o){var l,m,c;if(l={},arguments.length>1){if(m=d(l,e))throw m;c=o}else c=e;if(!t(c))throw new TypeError(s("1Rh3q,JV",c));return l.series?l.limit=1:l.limit||(l.limit=n),f;function f(e,n,o){if(!r(e))throw new TypeError(s("1RhAh,O3",e));if(!i(n))throw new TypeError(s("1Rh45,IB",n));if(!t(o))throw new TypeError(s("1Rh3q,JV",o));return p(e,n,l,c,(function(e,t){if(e)return o(e,!1);o(null,t)}))}}function u(e,t,r,i,s){if(arguments.length<5)return h(r)(e,t,i);h(r,i)(e,t,s)}e(u,"factory",h);export{u as default,h as factory};
//# sourceMappingURL=index.mjs.map
