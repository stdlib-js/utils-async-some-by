// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,l=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var f,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||l.call(t,r)?(f=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=f):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var f=r;function a(t,r,e){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&h.call(t,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[g],r=d(t,g);try{t[g]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[g]=e:delete t[g],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var _=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function O(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",w);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},S="object"==typeof A?A:null;var I=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(T)return T;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}(),N=I.document&&I.document.childNodes,F=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(B,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function M(t){return null!==t&&"object"==typeof t}function k(t){var r,e,n,o;if(("Object"===(e=m(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return M(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(M,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(M));var x="function"==typeof s||"object"==typeof F||"function"==typeof N?function(t){return k(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?k(t).toLowerCase():r};function G(t){return"function"===x(t)}var L=Math.floor;function R(t){return L(t)===t}function U(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function Y(t){return"number"==typeof t}var z=Number,D=z.prototype.toString;var J=b();function X(t){return"object"==typeof t&&(t instanceof z||(J?function(t){try{return D.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function q(t){return Y(t)||X(t)}a(q,"isPrimitive",Y),a(q,"isObject",X);var H=Number.POSITIVE_INFINITY,K=z.NEGATIVE_INFINITY;function Q(t){return t<H&&t>K&&R(t)}function W(t){return Y(t)&&Q(t)}function Z(t){return X(t)&&Q(t.valueOf())}function $(t){return W(t)||Z(t)}function tt(t){return W(t)&&t>0}function rt(t){return Z(t)&&t.valueOf()>0}function et(t){return tt(t)||rt(t)}function nt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}a($,"isPrimitive",W),a($,"isObject",Z),a(et,"isPrimitive",tt),a(et,"isObject",rt);var ot,it=Object.getPrototypeOf;ot=G(Object.getPrototypeOf)?it:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ut=ot;var ct=Object.prototype;function lt(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),ut(t))}(t),!r||!d(t,"constructor")&&d(r,"constructor")&&G(r.constructor)&&"[object Function]"===m(r.constructor)&&d(r,"isPrototypeOf")&&G(r.isPrototypeOf)&&(r===ct||function(t){var r;for(r in t)if(!d(t,r))return!1;return!0}(t)))}function ft(t,r){return lt(r)?(d(r,"thisArg")&&(t.thisArg=r.thisArg),d(r,"series")&&(t.series=r.series,!p(t.series))?new TypeError(nt("0ih30","series",t.series)):d(r,"limit")&&(t.limit=r.limit,!tt(t.limit))?new TypeError(nt("0ih3b","limit",t.limit)):null):new TypeError(nt("0ih2h",r))}function at(t){if(t.__esModule)return t;var r=t.default;if("function"==typeof r){var e=function t(){if(this instanceof t){var e=[null];e.push.apply(e,arguments);var n=Function.bind.apply(r,e);return new n}return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var st=at(Object.freeze({__proto__:null,default:()=>()=>{}}))("some-by-async:limit");function pt(t,r,e,n,o){var i,u,c,l,f,a,s,p;if(f=t.length,st("Collection length: %d",f),0===f)return st("Finished processing a collection."),o(null,!1);for(l=f<e.limit?f:e.limit,st("Concurrency limit: %d",l),st("Number of arguments: %d",n.length),i=f-1,u=0,a=-1,s=0,p=0;p<l;p++)a<i&&y();function y(){st("Collection element %d: %s.",a+=1,JSON.stringify(t[a])),2===n.length?n.call(e.thisArg,t[a],b):3===n.length?n.call(e.thisArg,t[a],a,b):n.call(e.thisArg,t[a],a,t,b)}function b(t,e){if(!c)return t?(c=!0,st("Encountered an error: %s",t.message),o(t)):(st("Processed %d of %d collection elements.",u+=1,f),st("Test result: %s",!!e),e&&!c&&(s+=1)===r?(c=!0,st("Finished processing a collection."),o(null,!0)):a<i?y():u===f?(st("Finished processing a collection."),o(null,!1)):void 0)}}function yt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=ft(e,t))throw n;o=r}else o=t;if(!G(o))throw new TypeError(nt("0ih43",o));return e.series?e.limit=1:e.limit||(e.limit=H),i;function i(t,r,n){if(!U(t))throw new TypeError(nt("0ihBO",t));if(!tt(r))throw new TypeError(nt("0ih4I",r));if(!G(n))throw new TypeError(nt("0ih43",n));return pt(t,r,e,o,(function(t,r){if(t)return n(t,!1);n(null,r)}))}}function bt(t,r,e,n,o){if(arguments.length<5)return yt(e)(t,r,n);yt(e,n)(t,r,o)}a(bt,"factory",yt);export{bt as default,yt as factory};
//# sourceMappingURL=mod.js.map
