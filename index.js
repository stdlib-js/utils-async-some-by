// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).someByAsync=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var f=e;function a(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;function d(t,e){return null!=t&&h.call(t,e)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[g],e=d(t,g);try{t[g]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[g]=r:delete t[g],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var _=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function O(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",w);var T="object"==typeof self?self:null,P="object"==typeof window?window:null,A="object"==typeof global?global:null;var S=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(T)return T;if(P)return P;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),I=S.document&&S.document.childNodes,N=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;a(F,"REGEXP",B);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function V(t){return null!==t&&"object"==typeof t}function x(t){var e,r,n,o;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=B.exec(n.toString()))return e[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!C(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(V));var M="function"==typeof s||"object"==typeof N||"function"==typeof I?function(t){return x(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?x(t).toLowerCase():e};function k(t){return"function"===M(t)}var G=Math.floor;function L(t){return G(t)===t}function R(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&L(t.length)&&t.length>=0&&t.length<=9007199254740991}function U(t){return"number"==typeof t}var Y=Number,z=Y.prototype.toString;var D=b();function J(t){return"object"==typeof t&&(t instanceof Y||(D?function(t){try{return z.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function X(t){return U(t)||J(t)}a(X,"isPrimitive",U),a(X,"isObject",J);var q=Number.POSITIVE_INFINITY,H=Y.NEGATIVE_INFINITY;function K(t){return t<q&&t>H&&L(t)}function Q(t){return U(t)&&K(t)}function W(t){return J(t)&&K(t.valueOf())}function Z(t){return Q(t)||W(t)}function $(t){return Q(t)&&t>0}function tt(t){return W(t)&&t.valueOf()>0}function et(t){return $(t)||tt(t)}function rt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}a(Z,"isPrimitive",Q),a(Z,"isObject",W),a(et,"isPrimitive",$),a(et,"isObject",tt);var nt,ot=Object.getPrototypeOf;nt=k(Object.getPrototypeOf)?ot:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var it=nt;var ut=Object.prototype;function ct(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!C(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),it(t))}(t),!e||!d(t,"constructor")&&d(e,"constructor")&&k(e.constructor)&&"[object Function]"===m(e.constructor)&&d(e,"isPrototypeOf")&&k(e.isPrototypeOf)&&(e===ut||function(t){var e;for(e in t)if(!d(t,e))return!1;return!0}(t)))}function lt(t,e){return ct(e)?(d(e,"thisArg")&&(t.thisArg=e.thisArg),d(e,"series")&&(t.series=e.series,!p(t.series))?new TypeError(rt("0ih30","series",t.series)):d(e,"limit")&&(t.limit=e.limit,!$(t.limit))?new TypeError(rt("0ih3b","limit",t.limit)):null):new TypeError(rt("0ih2h",e))}function ft(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var r=function t(){if(this instanceof t){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(e,r);return new n}return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var at=ft(Object.freeze({__proto__:null,default:()=>()=>{}}))("some-by-async:limit");function st(t,e,r,n,o){var i,u,c,l,f,a,s,p;if(f=t.length,at("Collection length: %d",f),0===f)return at("Finished processing a collection."),o(null,!1);for(l=f<r.limit?f:r.limit,at("Concurrency limit: %d",l),at("Number of arguments: %d",n.length),i=f-1,u=0,a=-1,s=0,p=0;p<l;p++)a<i&&y();function y(){at("Collection element %d: %s.",a+=1,JSON.stringify(t[a])),2===n.length?n.call(r.thisArg,t[a],b):3===n.length?n.call(r.thisArg,t[a],a,b):n.call(r.thisArg,t[a],a,t,b)}function b(t,r){if(!c)return t?(c=!0,at("Encountered an error: %s",t.message),o(t)):(at("Processed %d of %d collection elements.",u+=1,f),at("Test result: %s",!!r),r&&!c&&(s+=1)===e?(c=!0,at("Finished processing a collection."),o(null,!0)):a<i?y():u===f?(at("Finished processing a collection."),o(null,!1)):void 0)}}function pt(t,e){var r,n,o;if(r={},arguments.length>1){if(n=lt(r,t))throw n;o=e}else o=t;if(!k(o))throw new TypeError(rt("0ih43",o));return r.series?r.limit=1:r.limit||(r.limit=q),i;function i(t,e,n){if(!R(t))throw new TypeError(rt("0ihBO",t));if(!$(e))throw new TypeError(rt("0ih4I",e));if(!k(n))throw new TypeError(rt("0ih43",n));return st(t,e,r,o,(function(t,e){if(t)return n(t,!1);n(null,e)}))}}function yt(t,e,r,n,o){if(arguments.length<5)return pt(r)(t,e,n);pt(r,n)(t,e,o)}return a(yt,"factory",pt),yt}));
//# sourceMappingURL=index.js.map