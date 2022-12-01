// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).someByAsync=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var f=e;function a(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function h(t,e){return null!=t&&v.call(t,e)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(t){var e,r,n;if(null==t)return d.call(t);r=t[g],e=h(t,g);try{t[g]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[g]=r:delete t[g],n}:function(t){return d.call(t)},j=Boolean.prototype.toString;var _=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function O(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",w);var T="object"==typeof self?self:null,P="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},S="object"==typeof A?A:null;var I=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(T)return T;if(P)return P;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}(),N=I.document&&I.document.childNodes,B=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(F,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function x(t){return null!==t&&"object"==typeof t}function k(t){var e,r,n,o;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(x));var G="function"==typeof s||"object"==typeof B||"function"==typeof N?function(t){return k(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?k(t).toLowerCase():e};function M(t){return"function"===G(t)}var L=Math.floor;function R(t){return L(t)===t}function U(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function Y(t){return"number"==typeof t}var z=Number,D=z.prototype.toString;var J=b();function X(t){return"object"==typeof t&&(t instanceof z||(J?function(t){try{return D.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function q(t){return Y(t)||X(t)}a(q,"isPrimitive",Y),a(q,"isObject",X);var H=Number.POSITIVE_INFINITY,K=z.NEGATIVE_INFINITY;function Q(t){return t<H&&t>K&&R(t)}function W(t){return Y(t)&&Q(t)}function Z(t){return X(t)&&Q(t.valueOf())}function $(t){return W(t)||Z(t)}function tt(t){return W(t)&&t>0}function et(t){return Z(t)&&t.valueOf()>0}function rt(t){return tt(t)||et(t)}function nt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}a($,"isPrimitive",W),a($,"isObject",Z),a(rt,"isPrimitive",tt),a(rt,"isObject",et);var ot,it=Object.getPrototypeOf;ot=M(Object.getPrototypeOf)?it:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ut=ot;var ct=Object.prototype;function lt(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),ut(t))}(t),!e||!h(t,"constructor")&&h(e,"constructor")&&M(e.constructor)&&"[object Function]"===m(e.constructor)&&h(e,"isPrototypeOf")&&M(e.isPrototypeOf)&&(e===ct||function(t){var e;for(e in t)if(!h(t,e))return!1;return!0}(t)))}function ft(t,e){return lt(e)?(h(e,"thisArg")&&(t.thisArg=e.thisArg),h(e,"series")&&(t.series=e.series,!p(t.series))?new TypeError(nt("0ih30","series",t.series)):h(e,"limit")&&(t.limit=e.limit,!tt(t.limit))?new TypeError(nt("0ih3b","limit",t.limit)):null):new TypeError(nt("0ih2h",e))}function at(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var st=at(Object.freeze({__proto__:null,default:()=>()=>{}}))("some-by-async:limit");function pt(t,e,r,n,o){var i,u,c,l,f,a,s,p;if(f=t.length,st("Collection length: %d",f),0===f)return st("Finished processing a collection."),o(null,!1);for(l=f<r.limit?f:r.limit,st("Concurrency limit: %d",l),st("Number of arguments: %d",n.length),i=f-1,u=0,a=-1,s=0,p=0;p<l;p++)a<i&&y();function y(){st("Collection element %d: %s.",a+=1,JSON.stringify(t[a])),2===n.length?n.call(r.thisArg,t[a],b):3===n.length?n.call(r.thisArg,t[a],a,b):n.call(r.thisArg,t[a],a,t,b)}function b(t,r){if(!c)return t?(c=!0,st("Encountered an error: %s",t.message),o(t)):(st("Processed %d of %d collection elements.",u+=1,f),st("Test result: %s",!!r),r&&!c&&(s+=1)===e?(c=!0,st("Finished processing a collection."),o(null,!0)):a<i?y():u===f?(st("Finished processing a collection."),o(null,!1)):void 0)}}function yt(t,e){var r,n,o;if(r={},arguments.length>1){if(n=ft(r,t))throw n;o=e}else o=t;if(!M(o))throw new TypeError(nt("0ih43",o));return r.series?r.limit=1:r.limit||(r.limit=H),i;function i(t,e,n){if(!U(t))throw new TypeError(nt("0ihBO",t));if(!tt(e))throw new TypeError(nt("0ih4I",e));if(!M(n))throw new TypeError(nt("0ih43",n));return pt(t,e,r,o,(function(t,e){if(t)return n(t,!1);n(null,e)}))}}function bt(t,e,r,n,o){if(arguments.length<5)return yt(r)(t,e,n);yt(r,n)(t,e,o)}return a(bt,"factory",yt),bt}));
//# sourceMappingURL=browser.js.map
