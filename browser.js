// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):p.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,j=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,i,t,a,o,l,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(c(t=e[u]))l+=t;else{if(r=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,S(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),l+=t.arg||"",p+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,i,t,n;for(i=[],n=0,t=F.exec(e);t;)(r=e.slice(n,F.lastIndex-t[0].length)).length&&i.push(r),i.push(_(t)),n=F.lastIndex,t=F.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function O(e){return"string"==typeof e}function $(e){var r,i;if(!O(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return T.apply(null,r)}var A,C=Object.prototype,R=C.toString,P=C.__defineGetter__,Z=C.__defineSetter__,N=C.__lookupGetter__,L=C.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(N.call(e,r)||L.call(e,r)?(t=e.__proto__,e.__proto__=C,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,i.get),o&&Z&&Z.call(e,r,i.set),e};var W=A;function G(e,r,i){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var M=/./;function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&Y.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"",H=B()?function(e){var r,i,t;if(null==e)return z.call(e);i=e[q],r=D(e,q);try{e[q]=void 0}catch(r){return z.call(e)}return t=z.call(e),r?e[q]=i:delete e[q],t}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString,ee=B();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ie(e){return U(e)||re(e)}function te(e){return"number"==typeof e}function ne(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ae(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ne(n):ne(n)+e,t&&(e="-"+e)),e}G(ie,"isPrimitive",U),G(ie,"isObject",re);var oe=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function ce(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!te(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ae(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ae(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===se.call(e.specifier)?se.call(i):oe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function le(e){return"string"==typeof e}var pe=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,we=/^(\d+)$/,be=/^(\d+)e/,ve=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function Ee(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!te(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":pe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ge.call(i,me,"$1e"),i=ge.call(i,ye,"e"),i=ge.call(i,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ge.call(i,de,"e+0$1"),i=ge.call(i,he,"e-0$1"),e.alternate&&(i=ge.call(i,we,"$1."),i=ge.call(i,be,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===fe.call(e.specifier)?fe.call(i):ue.call(i)}function xe(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ke(e,r,i){var t=r-e.length;return t<0?e:e=i?e+xe(t):xe(t)+e}var Se=String.fromCharCode,je=isNaN,Ve=Array.isArray;function Te(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Fe(e){var r,i,t,n,a,o,s,c,l;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(le(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Te(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,je(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,je(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ce(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!je(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=je(a)?String(t.arg):Se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ee(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ae(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ke(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var _e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ie(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Oe(e){var r,i,t,n;for(i=[],n=0,t=_e.exec(e);t;)(r=e.slice(n,_e.lastIndex-t[0].length)).length&&i.push(r),i.push(Ie(t)),n=_e.lastIndex,t=_e.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function $e(e){return"string"==typeof e}function Ae(e){var r,i;if(!$e(e))throw new TypeError(Ae("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Oe(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Fe.apply(null,r)}function Ce(){return new Function("return this;")()}var Re="object"==typeof self?self:null,Pe="object"==typeof window?window:null,Ze="object"==typeof globalThis?globalThis:null,Ne=function(e){if(arguments.length){if(!U(e))throw new TypeError(Ae("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ce()}if(Ze)return Ze;if(Re)return Re;if(Pe)return Pe;throw new Error("unexpected error. Unable to resolve global object.")}(),Le=Ne.document&&Ne.document.childNodes,We=Int8Array;function Ge(){return/^\s*function\s*([^(]*)/i}var Me=/^\s*function\s*([^(]*)/i;G(Ge,"REGEXP",Me);var Ue=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function Xe(e){return"number"==typeof e}function Be(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ze(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Be(n):Be(n)+e,t&&(e="-"+e)),e}var Ye=String.prototype.toLowerCase,De=String.prototype.toUpperCase;function Je(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Xe(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ze(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ze(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===De.call(e.specifier)?De.call(i):Ye.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function qe(e){return"string"==typeof e}var He=Math.abs,Ke=String.prototype.toLowerCase,Qe=String.prototype.toUpperCase,er=String.prototype.replace,rr=/e\+(\d)$/,ir=/e-(\d)$/,tr=/^(\d+)$/,nr=/^(\d+)e/,ar=/\.0$/,or=/\.0*e/,sr=/(\..*[^0])0*e/;function cr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Xe(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":He(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=er.call(i,sr,"$1e"),i=er.call(i,or,"e"),i=er.call(i,ar,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=er.call(i,rr,"e+0$1"),i=er.call(i,ir,"e-0$1"),e.alternate&&(i=er.call(i,tr,"$1."),i=er.call(i,nr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Qe.call(e.specifier)?Qe.call(i):Ke.call(i)}function lr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function pr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+lr(t):lr(t)+e}var ur=String.fromCharCode,fr=isNaN,gr=Array.isArray;function dr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function hr(e){var r,i,t,n,a,o,s,c,l;if(!gr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(qe(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=dr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,fr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,fr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Je(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!fr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=fr(a)?String(t.arg):ur(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=cr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ze(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=pr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var wr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function br(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function vr(e){var r,i,t,n;for(i=[],n=0,t=wr.exec(e);t;)(r=e.slice(n,wr.lastIndex-t[0].length)).length&&i.push(r),i.push(br(t)),n=wr.lastIndex,t=wr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function yr(e){return"string"==typeof e}function mr(e){var r,i;if(!yr(e))throw new TypeError(mr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[vr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return hr.apply(null,r)}function Er(e){return null!==e&&"object"==typeof e}function xr(e){var r,i,t,n;if(("Object"===(i=H(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Me.exec(t.toString()))return r[1]}return Er(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G(Er,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(mr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Ue(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Er));var kr="function"==typeof M||"object"==typeof We||"function"==typeof Le?function(e){return xr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?xr(e).toLowerCase():r};function Sr(e){return"function"===kr(e)}var jr=Math.floor;function Vr(e){return jr(e)===e}function Tr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Vr(e.length)&&e.length>=0&&e.length<=9007199254740991}function Fr(e){return"number"==typeof e}var _r=Number,Ir=_r.prototype.toString,Or=B();function $r(e){return"object"==typeof e&&(e instanceof _r||(Or?function(e){try{return Ir.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Ar(e){return Fr(e)||$r(e)}G(Ar,"isPrimitive",Fr),G(Ar,"isObject",$r);var Cr=Number.POSITIVE_INFINITY,Rr=_r.NEGATIVE_INFINITY;function Pr(e){return e<Cr&&e>Rr&&Vr(e)}function Zr(e){return Fr(e)&&Pr(e)}function Nr(e){return $r(e)&&Pr(e.valueOf())}function Lr(e){return Zr(e)||Nr(e)}function Wr(e){return Zr(e)&&e>0}function Gr(e){return Nr(e)&&e.valueOf()>0}function Mr(e){return Wr(e)||Gr(e)}function Ur(e){return"number"==typeof e}function Xr(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Br(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Xr(n):Xr(n)+e,t&&(e="-"+e)),e}G(Lr,"isPrimitive",Zr),G(Lr,"isObject",Nr),G(Mr,"isPrimitive",Wr),G(Mr,"isObject",Gr);var zr=String.prototype.toLowerCase,Yr=String.prototype.toUpperCase;function Dr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Ur(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Br(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Br(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Yr.call(e.specifier)?Yr.call(i):zr.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Jr(e){return"string"==typeof e}var qr=Math.abs,Hr=String.prototype.toLowerCase,Kr=String.prototype.toUpperCase,Qr=String.prototype.replace,ei=/e\+(\d)$/,ri=/e-(\d)$/,ii=/^(\d+)$/,ti=/^(\d+)e/,ni=/\.0$/,ai=/\.0*e/,oi=/(\..*[^0])0*e/;function si(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Ur(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":qr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Qr.call(i,oi,"$1e"),i=Qr.call(i,ai,"e"),i=Qr.call(i,ni,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Qr.call(i,ei,"e+0$1"),i=Qr.call(i,ri,"e-0$1"),e.alternate&&(i=Qr.call(i,ii,"$1."),i=Qr.call(i,ti,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Kr.call(e.specifier)?Kr.call(i):Hr.call(i)}function ci(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function li(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ci(t):ci(t)+e}var pi=String.fromCharCode,ui=isNaN,fi=Array.isArray;function gi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function di(e){var r,i,t,n,a,o,s,c,l;if(!fi(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Jr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=gi(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,ui(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,ui(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Dr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ui(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ui(a)?String(t.arg):pi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=si(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Br(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=li(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var hi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function wi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function bi(e){var r,i,t,n;for(i=[],n=0,t=hi.exec(e);t;)(r=e.slice(n,hi.lastIndex-t[0].length)).length&&i.push(r),i.push(wi(t)),n=hi.lastIndex,t=hi.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function vi(e){return"string"==typeof e}function yi(e){var r,i,t;if(!vi(e))throw new TypeError(yi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=bi(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return di.apply(null,i)}var mi,Ei=Object,xi=Object.getPrototypeOf;mi=Sr(Object.getPrototypeOf)?xi:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var ki=mi,Si=Object.prototype;function ji(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!Ue(e)}(e)&&(r=function(e){return null==e?null:(e=Ei(e),ki(e))}(e),!r||!D(e,"constructor")&&D(r,"constructor")&&Sr(r.constructor)&&"[object Function]"===H(r.constructor)&&D(r,"isPrototypeOf")&&Sr(r.isPrototypeOf)&&(r===Si||function(e){var r;for(r in e)if(!D(e,r))return!1;return!0}(e)))}function Vi(e,r){return ji(r)?(D(r,"thisArg")&&(e.thisArg=r.thisArg),D(r,"series")&&(e.series=r.series,!U(e.series))?new TypeError(yi("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):D(r,"limit")&&(e.limit=r.limit,!Wr(e.limit))?new TypeError(yi("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):null):new TypeError(yi("invalid argument. Options argument must be an object. Value: `%s`.",r))}function Ti(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var t=Function.bind.apply(r,i);return new t}return r.apply(this,arguments)};i.prototype=r.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(i,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})})),i}var Fi=Ti(Object.freeze({__proto__:null,default:()=>()=>{}}))("some-by-async:limit");function _i(e,r,i,t,n){var a,o,s,c,l,p,u,f;if(l=e.length,Fi("Collection length: %d",l),0===l)return Fi("Finished processing a collection."),n(null,!1);for(c=l<i.limit?l:i.limit,Fi("Concurrency limit: %d",c),Fi("Number of arguments: %d",t.length),a=l-1,o=0,p=-1,u=0,f=0;f<c;f++)p<a&&g();function g(){Fi("Collection element %d: %s.",p+=1,JSON.stringify(e[p])),2===t.length?t.call(i.thisArg,e[p],d):3===t.length?t.call(i.thisArg,e[p],p,d):t.call(i.thisArg,e[p],p,e,d)}function d(e,i){if(!s)return e?(s=!0,Fi("Encountered an error: %s",e.message),n(e)):(Fi("Processed %d of %d collection elements.",o+=1,l),Fi("Test result: %s",!!i),i&&!s&&(u+=1)===r?(s=!0,Fi("Finished processing a collection."),n(null,!0)):p<a?g():o===l?(Fi("Finished processing a collection."),n(null,!1)):void 0)}}function Ii(e,r){var i,t,n;if(i={},arguments.length>1){if(t=Vi(i,e))throw t;n=r}else n=e;if(!Sr(n))throw new TypeError(yi("invalid argument. Last argument must be a function. Value: `%s`.",n));return i.series?i.limit=1:i.limit||(i.limit=Cr),a;function a(e,r,t){if(!Tr(e))throw new TypeError(yi("invalid argument. First argument must be a collection. Value: `%s`.",e));if(!Wr(r))throw new TypeError(yi("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));if(!Sr(t))throw new TypeError(yi("invalid argument. Last argument must be a function. Value: `%s`.",t));return _i(e,r,i,n,(function(e,r){if(e)return t(e,!1);t(null,r)}))}}function Oi(e,r,i,t,n){if(arguments.length<5)return Ii(i)(e,r,t);Ii(i,t)(e,r,n)}return G(Oi,"factory",Ii),Oi},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).someByAsync=r();
//# sourceMappingURL=browser.js.map
