!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],t):"object"==typeof exports?exports["react-components"]=t(require("react")):e["react-components"]=t(e.React)}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=432)}({0:function(t,r){t.exports=e},2:function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(i=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")}));return[r].concat(a).concat([o]).join("\n")}var i,c,u;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(n[a]=!0)}for(var i=0;i<e.length;i++){var c=e[i];null!=c[0]&&n[c[0]]||(r&&!c[2]?c[2]=r:r&&(c[2]="(".concat(c[2],") and (").concat(r,")")),t.push(c))}},t}},206:function(e,t,r){var n=r(207);"string"==typeof n&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(3)(n,o);n.locals&&(e.exports=n.locals)},207:function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".custom-breadcrumb ol.breadcrumb li.breadcrumb-item{font-size:16px}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active){color:#0092e1;cursor:pointer}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active)>svg{fill:#0092e1;width:16px;height:16px}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active):hover{color:#05578c}.custom-breadcrumb ol.breadcrumb li.breadcrumb-item:not(.active):hover>svg{fill:#05578c}\n",""])},3:function(e,t,r){"use strict";var n,o={},a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function c(e,t){for(var r=[],n={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(c):r.push(n[i]={id:i,parts:[c]})}return r}function u(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=o[n.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(v(n.parts[i],t))}else{for(var c=[];i<n.parts.length;i++)c.push(v(n.parts[i],t));o[n.id]={id:n.id,refs:1,parts:c}}}}function s(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var n=r.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach((function(r){t.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,b=0;function v(e,t){var r,n,o;if(t.singleton){var a=b++;r=m||(m=s(t)),n=d.bind(null,r,a,!1),o=d.bind(null,r,a,!0)}else r=s(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var r=c(e,t);return u(r,t),function(e){for(var n=[],a=0;a<r.length;a++){var i=r[a],s=o[i.id];s&&(s.refs--,n.push(s))}e&&u(c(e,t),t);for(var l=0;l<n.length;l++){var f=n[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},432:function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(206),n.memo((function(e){return n.createElement("div",{className:"custom-breadcrumb"+(e.className?" "+e.className:""),id:e.id},n.createElement("nav",{"aria-label":"breadcrumb"},n.createElement("ol",{className:"breadcrumb"},e.list.map((function(t,r){return n.createElement("li",{key:r,className:"breadcrumb-item"+(r===e.list.length-1?" active":""),onClick:function(t){return function(t,r){t!==e.list.length-1&&e.onClick&&e.onClick(t,r)}(r,t)}},t)})))))})));r.d(t,"Breadcrumb",(function(){return o}))}})}));