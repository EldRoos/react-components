!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],t):"object"==typeof exports?exports["react-components"]=t(require("react")):e["react-components"]=t(e.React)}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=453)}({0:function(t,r){t.exports=e},2:function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(s=n,i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(c," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")}));return[r].concat(a).concat([o]).join("\n")}var s,i,c;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(n[a]=!0)}for(var s=0;s<e.length;s++){var i=e[s];null!=i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="(".concat(i[2],") and (").concat(r,")")),t.push(i))}},t}},3:function(e,t,r){"use strict";var n,o={},a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function i(e,t){for(var r=[],n={},o=0;o<e.length;o++){var a=e[o],s=t.base?a[0]+t.base:a[0],i={css:a[1],media:a[2],sourceMap:a[3]};n[s]?n[s].parts.push(i):r.push(n[s]={id:s,parts:[i]})}return r}function c(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=o[n.id],s=0;if(a){for(a.refs++;s<a.parts.length;s++)a.parts[s](n.parts[s]);for(;s<n.parts.length;s++)a.parts.push(g(n.parts[s],t))}else{for(var i=[];s<n.parts.length;s++)i.push(g(n.parts[s],t));o[n.id]={id:n.id,refs:1,parts:i}}}}function p(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var n=r.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach((function(r){t.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(t);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function m(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,b=0;function g(e,t){var r,n,o;if(t.singleton){var a=b++;r=f||(f=p(t)),n=d.bind(null,r,a,!1),o=d.bind(null,r,a,!0)}else r=p(t),n=m.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var r=i(e,t);return c(r,t),function(e){for(var n=[],a=0;a<r.length;a++){var s=r[a],p=o[s.id];p&&(p.refs--,n.push(p))}e&&c(i(e,t),t);for(var u=0;u<n.length;u++){var l=n[u];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete o[l.id]}}}}},396:function(e,t,r){var n=r(397);"string"==typeof n&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(3)(n,o);n.locals&&(e.exports=n.locals)},397:function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".form-group.custom-stepper{display:inline-block}.form-group.custom-stepper .stepper-container{height:44px;border-radius:4px;overflow:hidden;padding:0}.form-group.custom-stepper .stepper-container:not(.disabled){background-color:#fff;border:1px solid #999}.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-decrement:not(.disabled),.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-increment:not(.disabled){cursor:pointer;color:#0092E1}.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-decrement:not(.disabled):hover,.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-increment:not(.disabled):hover{background-color:#41B0EE;color:#fff}.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-decrement:not(.disabled):active,.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-increment:not(.disabled):active{background-color:#0092E1}.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-decrement.disabled,.form-group.custom-stepper .stepper-container:not(.disabled) .stepper-increment.disabled{background-color:#e9e9e9;color:#adadad}.form-group.custom-stepper .stepper-container:not(.disabled):hover{border-color:#41B0EE}.form-group.custom-stepper .stepper-container.disabled{background-color:#e6e6e6;border:1px solid #b3b3b3}.form-group.custom-stepper .stepper-container.disabled [class^=stepper-]{color:#b3b3b3}.form-group.custom-stepper .stepper-container [class^=stepper-]{display:inline-flex;align-items:center;justify-content:center;height:100%;vertical-align:top;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.form-group.custom-stepper .stepper-container .stepper-decrement,.form-group.custom-stepper .stepper-container .stepper-increment{padding:0 10px;will-change:background-color, color;-webkit-transition:background-color 200ms,color 200ms;-moz-transition:background-color 200ms,color 200ms;-o-transition:background-color 200ms,color 200ms;transition:background-color 200ms,color 200ms;padding-bottom:3px;font-size:38px;font-weight:100;line-height:0;border:none;background:transparent;border:1px solid transparent;outline:none;box-shadow:none}.form-group.custom-stepper .stepper-container .stepper-decrement:focus,.form-group.custom-stepper .stepper-container .stepper-increment:focus{border-color:#41B0EE}.form-group.custom-stepper .stepper-container .stepper-decrement>span,.form-group.custom-stepper .stepper-container .stepper-increment>span{padding-bottom:5px}.form-group.custom-stepper .stepper-container .stepper-preview{min-width:64px;text-align:center;font-size:24px}.form-group.custom-stepper .stepper-container.has-warning,.form-group.custom-stepper .stepper-container.has-warning:hover{border-bottom:1px solid #F8A000}.form-group.custom-stepper .stepper-input{display:none}.form-group.custom-stepper .alert{padding:5px;background:rgba(0,0,0,0)}.form-group.custom-stepper .alert.alert-danger{border-color:#F03529;color:#F03529}.form-group.custom-stepper .alert.alert-warning{border-color:#F8A000;color:#F8A000}\n",""])},453:function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(396),r(6)),a=function(e){var t=n.useState(""),r=t[0],a=t[1];return n.useEffect((function(){a(e.id?e.id:Object(o.a)("stepper-"))}),[e.id]),n.createElement("div",{className:"form-group custom-stepper"+(e.className?" "+e.className:"")},e.label&&n.createElement("label",{className:"custom-label"},e.label),n.createElement("div",{className:"stepper-container"+(e.disabled?" disabled":"")},n.createElement("button",{className:"stepper-decrement"+(e.value===e.min?" disabled":""),onClick:e.value>e.min&&!e.disabled?e.onDecrease:null,"aria-controls":r,"aria-labelledby":"decrement"},n.createElement("span",null,"−")),n.createElement("div",{className:"stepper-preview"},n.createElement("span",null,e.value)),n.createElement("button",{className:"stepper-increment"+(e.value===e.max?" disabled":""),onClick:e.value<e.max&&!e.disabled?e.onIncrease:null,"aria-controls":r,"aria-labelledby":"increment"},n.createElement("span",null,"+"))),n.createElement("input",{className:"stepper-input",id:r,name:e.name,value:e.value,type:"number",min:e.min,max:e.max,readOnly:!0,disabled:e.disabled,ref:e.reference,"aria-live":"assertive"}),e.warning&&!e.error&&n.createElement("div",{className:"alert alert-warning"},e.warning),e.error&&n.createElement("div",{className:"alert alert-danger"},e.error))};r.d(t,"Stepper",(function(){return a}))},6:function(e,t,r){"use strict";function n(e){return e+String(1e3*Math.random()+(new Date).getTime())}r.d(t,"a",(function(){return n}))}})}));