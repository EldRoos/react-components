!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],t):"object"==typeof exports?exports["react-components"]=t(require("react")):e["react-components"]=t(e.React)}(window,(function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=460)}({0:function(t,o){t.exports=e},2:function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(a=n,i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(u," */")),c=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")}));return[o].concat(c).concat([r]).join("\n")}var a,i,u;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(o,"}"):o})).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var c=this[r][0];null!=c&&(n[c]=!0)}for(var a=0;a<e.length;a++){var i=e[a];null!=i[0]&&n[i[0]]||(o&&!i[2]?i[2]=o:o&&(i[2]="(".concat(i[2],") and (").concat(o,")")),t.push(i))}},t}},3:function(e,t,o){"use strict";var n,r={},c=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}();function i(e,t){for(var o=[],n={},r=0;r<e.length;r++){var c=e[r],a=t.base?c[0]+t.base:c[0],i={css:c[1],media:c[2],sourceMap:c[3]};n[a]?n[a].parts.push(i):o.push(n[a]={id:a,parts:[i]})}return o}function u(e,t){for(var o=0;o<e.length;o++){var n=e[o],c=r[n.id],a=0;if(c){for(c.refs++;a<c.parts.length;a++)c.parts[a](n.parts[a]);for(;a<n.parts.length;a++)c.parts.push(b(n.parts[a],t))}else{for(var i=[];a<n.parts.length;a++)i.push(b(n.parts[a],t));r[n.id]={id:n.id,refs:1,parts:i}}}}function s(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var n=o.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach((function(o){t.setAttribute(o,e.attributes[o])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var c=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(c,a[t]):e.appendChild(c)}}function p(e,t,o){var n=o.css,r=o.media,c=o.sourceMap;if(r&&e.setAttribute("media",r),c&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,g=0;function b(e,t){var o,n,r;if(t.singleton){var c=g++;o=m||(m=s(t)),n=d.bind(null,o,c,!1),r=d.bind(null,o,c,!0)}else o=s(t),n=p.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=c());var o=i(e,t);return u(o,t),function(e){for(var n=[],c=0;c<o.length;c++){var a=o[c],s=r[a.id];s&&(s.refs--,n.push(s))}e&&u(i(e,t),t);for(var l=0;l<n.length;l++){var f=n[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete r[f.id]}}}}},416:function(e,t,o){var n=o(417);"string"==typeof n&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};o(3)(n,r);n.locals&&(e.exports=n.locals)},417:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".form-group.custom-toggle>.custom-control.custom-slide-toggle{display:inline-block;margin-top:10px;margin-bottom:10px}.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-input:disabled:not(:checked)+label.custom-control-label:before{background-color:#dedede}.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-input:checked:disabled+label.custom-control-label:before{background-color:#adadad}.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-input:not(:disabled)+label.custom-control-label{cursor:pointer}.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-label:before,.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-label:after{top:2px}.form-group.custom-toggle>.custom-control.custom-slide-toggle>.custom-control-label:after{transition:left 200ms ease-in-out}\n",""])},460:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(6),c=(o(416),function(e){var t=n.useState(""),o=t[0],c=t[1];return n.useEffect((function(){c(e.id||Object(r.a)("toggle-"))}),[e.id]),n.createElement("div",{className:"form-group custom-toggle"+(e.className?" "+e.className:"")},n.createElement("div",{className:"custom-control custom-slide-toggle"},n.createElement("input",{className:"custom-control-input",id:o,name:e.name,type:"checkbox",checked:e.value,onChange:e.onChange,ref:e.reference,disabled:e.disabled,"aria-checked":!!e.value,tabIndex:0,role:"switch"}),n.createElement("label",{className:"custom-control-label",htmlFor:o},e.label)))});o.d(t,"Toggle",(function(){return c}))},6:function(e,t,o){"use strict";function n(e){return e+String(1e3*Math.random()+(new Date).getTime())}o.d(t,"a",(function(){return n}))}})}));