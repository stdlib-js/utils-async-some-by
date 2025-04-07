// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).someByAsync=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,b,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,d,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function w(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(e){return e!=e}function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,o,a,u,l,s,f,p,g,h,d;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if(n=e[s],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+w(d):w(d)+p)),u+=n.arg||"",l+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,n,i;for(t=[],i=0,n=S.exec(e);n;)(r=e.slice(i,S.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=S.lastIndex,n=S.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function P(e){var r,t;if("string"!=typeof e)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var k,I=Object.prototype,F=I.toString,R=I.__defineGetter__,V=I.__defineSetter__,C=I.__lookupGetter__,N=I.__lookupSetter__;k=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(e,r,t.get),a&&V&&V.call(e,r,t.set),e};var $=k;function B(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=/./;function L(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&W.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"";var Y=Z()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[z],r=X(e,z);try{e[z]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[z]=t:delete e[z],n}:function(e){return U.call(e)},D=Boolean,J=Boolean.prototype.toString;var H=Z();function K(e){return"object"==typeof e&&(e instanceof D||(H?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Y(e)))}function Q(e){return L(e)||K(e)}B(Q,"isPrimitive",L),B(Q,"isObject",K);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="object"==typeof global?global:null,ne="object"==typeof globalThis?globalThis:null;var ie=function(e){if(arguments.length){if(!L(e))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ne)return ne;if(ee)return ee;if(re)return re;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}(),oe=ie.document&&ie.document.childNodes,ae=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;B(ce,"REGEXP",ue);var le=Array.isArray?Array.isArray:function(e){return"[object Array]"===Y(e)};function se(e){return null!==e&&"object"==typeof e}function fe(e){var r,t,n,i;if(("Object"===(t=Y(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ue.exec(n.toString()))return r[1]}return se(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!le(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se));var pe="function"==typeof G||"object"==typeof ae||"function"==typeof oe?function(e){return fe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?fe(e).toLowerCase():r};function ge(e){return"function"===pe(e)}var he=Math.floor;function de(e){return he(e)===e}var ye=9007199254740991;function be(e){return"number"==typeof e}var ve=Number,me=ve.prototype.toString;var we=Z();function je(e){return"object"==typeof e&&(e instanceof ve||(we?function(e){try{return me.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Y(e)))}function _e(e){return be(e)||je(e)}B(_e,"isPrimitive",be),B(_e,"isObject",je);var Ee=Number.POSITIVE_INFINITY,Oe=ve.NEGATIVE_INFINITY;function Te(e){return e<Ee&&e>Oe&&de(e)}function Se(e){return be(e)&&Te(e)}function Ae(e){return je(e)&&Te(e.valueOf())}function xe(e){return Se(e)||Ae(e)}function Pe(e){return Se(e)&&e>0}function ke(e){return Ae(e)&&e.valueOf()>0}function Ie(e){return Pe(e)||ke(e)}function Fe(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}B(xe,"isPrimitive",Se),B(xe,"isObject",Ae),B(Ie,"isPrimitive",Pe),B(Ie,"isObject",ke);var Re,Ve=Object,Ce=Object.getPrototypeOf;Re=ge(Object.getPrototypeOf)?Ce:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Y(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ne=Re;var $e=Object.prototype;function Be(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!le(e)}(e)&&(r=function(e){return null==e?null:(e=Ve(e),Ne(e))}(e),!r||!X(e,"constructor")&&X(r,"constructor")&&ge(r.constructor)&&"[object Function]"===Y(r.constructor)&&X(r,"isPrototypeOf")&&ge(r.isPrototypeOf)&&(r===$e||function(e){var r;for(r in e)if(!X(e,r))return!1;return!0}(e)))}function Ge(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var Le=Ge(Object.freeze({__proto__:null,default:()=>()=>{}}))("some-by-async:limit");function Me(e,r){var t,n,i;if(t={},arguments.length>1){if(n=function(e,r){return Be(r)?(X(r,"thisArg")&&(e.thisArg=r.thisArg),X(r,"series")&&(e.series=r.series,!L(e.series))?new TypeError(Fe("1Rh2o","series",e.series)):X(r,"limit")&&(e.limit=r.limit,!Pe(e.limit))?new TypeError(Fe("1Rh3P","limit",e.limit)):null):new TypeError(Fe("1Rh2V",r))}(t,e),n)throw n;i=r}else i=e;if(!ge(i))throw new TypeError(Fe("1Rh3q",i));return t.series?t.limit=1:t.limit||(t.limit=Ee),function(e,r,n){if(o=e,!("object"==typeof o&&null!==o&&"number"==typeof o.length&&de(o.length)&&o.length>=0&&o.length<=ye))throw new TypeError(Fe("1RhAh",e));var o;if(!Pe(r))throw new TypeError(Fe("1Rh45",r));if(!ge(n))throw new TypeError(Fe("1Rh3q",n));return function(e,r,t,n,i){var o,a,c,u,l,s,f,p;if(l=e.length,Le("Collection length: %d",l),0===l)return Le("Finished processing a collection."),i(null,!1);for(u=l<t.limit?l:t.limit,Le("Concurrency limit: %d",u),Le("Number of arguments: %d",n.length),o=l-1,a=0,s=-1,f=0,p=0;p<u;p++)s<o&&g();function g(){Le("Collection element %d: %s.",s+=1,JSON.stringify(e[s])),2===n.length?n.call(t.thisArg,e[s],h):3===n.length?n.call(t.thisArg,e[s],s,h):n.call(t.thisArg,e[s],s,e,h)}function h(e,t){if(!c)return e?(c=!0,Le("Encountered an error: %s",e.message),i(e)):(Le("Processed %d of %d collection elements.",a+=1,l),Le("Test result: %s",!!t),t&&!c&&(f+=1)===r?(c=!0,Le("Finished processing a collection."),i(null,!0)):s<o?g():a===l?(Le("Finished processing a collection."),i(null,!1)):void 0)}}(e,r,t,i,(function(e,r){if(e)return n(e,!1);n(null,r)}))}}function Ze(e,r,t,n,i){if(arguments.length<5)return Me(t)(e,r,n);Me(t,n)(e,r,i)}return B(Ze,"factory",Me),Ze}));
//# sourceMappingURL=index.js.map
