!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],t):"object"==typeof exports?exports["react-components"]=t(require("react")):e["react-components"]=t(e.React)}(window,(function(e){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=451)}({0:function(t,r){t.exports=e},2:function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var o=(n=a,i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(c," */")),s=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot).concat(e," */")}));return[r].concat(s).concat([o]).join("\n")}var n,i,c;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(a[s]=!0)}for(var n=0;n<e.length;n++){var i=e[n];null!=i[0]&&a[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="(".concat(i[2],") and (").concat(r,")")),t.push(i))}},t}},3:function(e,t,r){"use strict";var a,o={},s=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},n=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function i(e,t){for(var r=[],a={},o=0;o<e.length;o++){var s=e[o],n=t.base?s[0]+t.base:s[0],i={css:s[1],media:s[2],sourceMap:s[3]};a[n]?a[n].parts.push(i):r.push(a[n]={id:n,parts:[i]})}return r}function c(e,t){for(var r=0;r<e.length;r++){var a=e[r],s=o[a.id],n=0;if(s){for(s.refs++;n<s.parts.length;n++)s.parts[n](a.parts[n]);for(;n<a.parts.length;n++)s.parts.push(h(a.parts[n],t))}else{for(var i=[];n<a.parts.length;n++)i.push(h(a.parts[n],t));o[a.id]={id:a.id,refs:1,parts:i}}}}function p(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var a=r.nc;a&&(e.attributes.nonce=a)}if(Object.keys(e.attributes).forEach((function(r){t.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(t);else{var o=n(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function m(e,t,r,a){var o=r?"":a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var s=document.createTextNode(o),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(s,n[t]):e.appendChild(s)}}function d(e,t,r){var a=r.css,o=r.media,s=r.sourceMap;if(o&&e.setAttribute("media",o),s&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,v=0;function h(e,t){var r,a,o;if(t.singleton){var s=v++;r=f||(f=p(t)),a=m.bind(null,r,s,!1),o=m.bind(null,r,s,!0)}else r=p(t),a=d.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s());var r=i(e,t);return c(r,t),function(e){for(var a=[],s=0;s<r.length;s++){var n=r[s],p=o[n.id];p&&(p.refs--,a.push(p))}e&&c(i(e,t),t);for(var l=0;l<a.length;l++){var u=a[l];if(0===u.refs){for(var m=0;m<u.parts.length;m++)u.parts[m]();delete o[u.id]}}}}},398:function(e,t,r){var a=r(399);"string"==typeof a&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(3)(a,o);a.locals&&(e.exports=a.locals)},399:function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".custom-step-tracker{position:relative;overflow:hidden;margin:0 auto}.custom-step-tracker.horizontal{padding:0 50px}.custom-step-tracker.horizontal .step-wrapper{position:relative;width:100%;height:20px}.custom-step-tracker.horizontal .step-wrapper .step{position:absolute;display:inline-block;width:20px;height:20px;background-color:#0092E1;border-radius:50%;overflow:hidden;transition:all 200ms;transform:translateX(-50%)}.custom-step-tracker.horizontal .step-wrapper .step.active{background-color:#dedede}.custom-step-tracker.horizontal .step-wrapper .step.active .step-border{border:2px solid #0092E1}.custom-step-tracker.horizontal .step-wrapper .step.active svg{transform:translate(-50%, -50%) scale(0)}.custom-step-tracker.horizontal .step-wrapper .step.active .number{color:#007AC7}.custom-step-tracker.horizontal .step-wrapper .step.active ~ .step{background-color:#dedede}.custom-step-tracker.horizontal .step-wrapper .step.active ~ .step svg{transform:translate(-50%, -50%) scale(0)}.custom-step-tracker.horizontal .step-wrapper .step.active ~ .step .number{color:#007AC7}.custom-step-tracker.horizontal .step-wrapper .step.numbered svg{transform:translate(-50%, -50%) scale(0)}.custom-step-tracker.horizontal .step-wrapper .step.numbered .number{display:inline-block}.custom-step-tracker.horizontal .step-wrapper .step .step-border{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;transition:all 100ms}.custom-step-tracker.horizontal .step-wrapper .step svg{position:absolute;width:13px;height:13px;left:50%;top:50%;fill:#fff;transform:translate(-50%, -50%) scale(1);transition:all 100ms 200ms}.custom-step-tracker.horizontal .step-wrapper .step .number{user-select:none;display:none;position:absolute;font-size:11px;font-weight:bold;left:7px;top:2px;color:#fff}.custom-step-tracker.horizontal .line{height:4px;width:100%;position:absolute;top:50%;z-index:-1;background-color:#dedede;transform:translateY(-50%)}.custom-step-tracker.horizontal .line .progress{background:#41B0EE;position:relative;display:block;height:4px;transition:200ms}.custom-step-tracker.horizontal .text-wrapper{position:relative;width:100%;white-space:nowrap;overflow-y:visible;margin:10px 0;display:table}.custom-step-tracker.horizontal .text-wrapper .text{position:relative;display:inline-block;text-align:center;transform:translateX(-50%);vertical-align:top}.custom-step-tracker.horizontal .text-wrapper .text .name{position:relative;line-height:100%;max-width:100px;white-space:normal;margin:0 auto;font-size:14px}.custom-step-tracker.horizontal .text-wrapper .text.active .name{color:#007AC7}.custom-step-tracker.vertical{padding:8px 10px 8px 40px;display:inline-block}.custom-step-tracker.vertical .step-wrapper{position:absolute;top:15px;bottom:15px;left:5px;width:30px;display:inline-block;text-align:center}.custom-step-tracker.vertical .step-wrapper .step{position:absolute;width:20px;height:20px;background-color:#0092E1;border-radius:50%;overflow:hidden;left:50%;transform:translate(-50%, -50%);transition:all 200ms}.custom-step-tracker.vertical .step-wrapper .step.active{background-color:#dedede}.custom-step-tracker.vertical .step-wrapper .step.active .step-border{border:2px solid #0092E1}.custom-step-tracker.vertical .step-wrapper .step.active svg{transform:translate(-50%, -50%) scale(0)}.custom-step-tracker.vertical .step-wrapper .step.active .number{color:#007AC7}.custom-step-tracker.vertical .step-wrapper .step.active ~ .step{background-color:#dedede}.custom-step-tracker.vertical .step-wrapper .step.active ~ .step svg{transform:translate(-50%, -50%) scale(0)}.custom-step-tracker.vertical .step-wrapper .step.active ~ .step .number{color:#007AC7}.custom-step-tracker.vertical .step-wrapper .step.numbered svg{transform:translate(-50%, -50%) scale(0)}.custom-step-tracker.vertical .step-wrapper .step.numbered .number{display:inline-block}.custom-step-tracker.vertical .step-wrapper .step .step-border{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;transition:all 100ms}.custom-step-tracker.vertical .step-wrapper .step svg{position:absolute;width:13px;height:13px;left:50%;top:50%;fill:#fff;transform:translate(-50%, -50%) scale(1);transition:all 100ms 200ms}.custom-step-tracker.vertical .step-wrapper .step .number{user-select:none;display:none;position:absolute;font-size:11px;font-weight:bold;left:7px;top:2px;color:#fff}.custom-step-tracker.vertical .line{position:absolute;height:100%;width:4px;left:50%;z-index:-1;background-color:#dedede;transform:translateX(-50%)}.custom-step-tracker.vertical .line .progress{background:#41B0EE;position:relative;display:block;height:4px;transition:200ms}.custom-step-tracker.vertical .text-wrapper{position:relative;display:inline-block}.custom-step-tracker.vertical .text-wrapper .text{position:relative;text-align:left}.custom-step-tracker.vertical .text-wrapper .text:not(:last-child){margin-bottom:50px}.custom-step-tracker.vertical .text-wrapper .text .name{position:relative;line-height:100%;font-size:14px}.custom-step-tracker.vertical .text-wrapper .text.active .name{color:#007AC7}.custom-step-tracker.vertical.left{padding:8px 40px 8px 10px}.custom-step-tracker.vertical.left .step-wrapper{right:5px;left:auto}.custom-step-tracker.vertical.left .text-wrapper .text{text-align:right}.custom-step-tracker.clickable .step-wrapper .step:not(.active):hover{cursor:pointer;background-color:#41B0EE}\n",""])},451:function(e,t,r){"use strict";r.r(t);var a=r(0),o=(r(398),a.createElement("svg",{name:"check",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a.createElement("path",{d:"M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"}))),s=a.memo((function(e){var t,r,s,n,i,c;"horizontal"===(i=-1===["horizontal","vertical"].indexOf(e.orientation)?"horizontal":e.orientation)&&("top"===(c=-1===["top","bottom"].indexOf(e.labelPosition)?"bottom":e.labelPosition)&&(t=!0,r=!1,s=!1,n=!1),"bottom"===c&&(t=!1,r=!0,s=!1,n=!1)),"vertical"===i&&("left"===(c=-1===["left","right"].indexOf(e.labelPosition)?"right":e.labelPosition)&&(t=!1,r=!1,s=!1,n=!0),"right"===c&&(t=!1,r=!1,s=!0,n=!1));var p="custom-step-tracker";function l(t){return 100/(e.list.length-1)*t+"%"}return e.onClick&&(p+=" clickable"),p+=" "+i,p+=" label-"+c,e.className&&(p+=" "+e.className),a.createElement("div",{className:p,id:e.id},t&&a.createElement("div",{className:"text-wrapper"},e.list.map((function(t,r){return a.createElement("div",{className:"text"+(e.step===r?" active":""),style:{width:l(1)},key:r},a.createElement("div",{className:"name"},t))}))),n&&a.createElement("div",{className:"text-wrapper"},e.list.map((function(t,r){return a.createElement("div",{className:"text"+(e.step===r?" active":""),key:r},a.createElement("div",{className:"name"},t))}))),"horizontal"===i&&a.createElement("div",{className:"step-wrapper"},a.createElement("div",{className:"line"},a.createElement("div",{className:"progress",style:{width:l(e.step)}})),e.list.map((function(t,r){return a.createElement("div",{className:"step"+(e.step===r?" active":"")+(e.useNumbers?" numbered":""),style:{left:l(r)},onClick:function(){return e.onClick&&e.onClick(r)},key:r},a.createElement("div",{className:"step-border"}),o,a.createElement("div",{className:"number"},r+1))}))),"vertical"===i&&a.createElement("div",{className:"step-wrapper"},a.createElement("div",{className:"line"},a.createElement("div",{className:"progress",style:{height:l(e.step)}})),e.list.map((function(t,r){return a.createElement("div",{className:"step"+(e.step===r?" active":"")+(e.useNumbers?" numbered":""),style:{top:l(r)},onClick:function(){return e.onClick&&e.onClick(r)},key:r},a.createElement("div",{className:"step-border"}),o,a.createElement("div",{className:"number"},r+1))}))),r&&a.createElement("div",{className:"text-wrapper"},e.list.map((function(t,r){return a.createElement("div",{className:"text"+(e.step===r?" active":""),style:{width:l(1)},key:r},a.createElement("div",{className:"name"},t))}))),s&&a.createElement("div",{className:"text-wrapper"},e.list.map((function(t,r){return a.createElement("div",{className:"text"+(e.step===r?" active":""),key:r},a.createElement("div",{className:"name"},t))}))))}));r.d(t,"StepTracker",(function(){return s}))}})}));