!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],e):"object"==typeof exports?exports["react-components"]=e(require("react")):t["react-components"]=e(t.React)}(window,(function(t){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=444)}({0:function(e,o){e.exports=t},2:function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",r=t[3];if(!r)return o;if(e&&"function"==typeof btoa){var n=(c=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(s," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[o].concat(a).concat([n]).join("\n")}var c,i,s;return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(o,"}"):o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var a=this[n][0];null!=a&&(r[a]=!0)}for(var c=0;c<t.length;c++){var i=t[c];null!=i[0]&&r[i[0]]||(o&&!i[2]?i[2]=o:o&&(i[2]="(".concat(i[2],") and (").concat(o,")")),e.push(i))}},e}},204:function(t,e,o){var r=o(205);"string"==typeof r&&(r=[[t.i,r,""]]);var n={insert:"head",singleton:!1};o(3)(r,n);r.locals&&(t.exports=r.locals)},205:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,".custom-accordion{position:relative;background-color:#fff}.custom-accordion .accordion-item{position:relative;border-bottom:1px solid #e6e6e6}.custom-accordion .accordion-item:hover{background-color:#f5f5f5}.custom-accordion .accordion-item:first-child{border-top:1px solid #e6e6e6}.custom-accordion .accordion-item .header-wrapper{position:relative;display:block;cursor:pointer;min-height:48px}.custom-accordion .accordion-item .header-wrapper.with-sub-header{min-height:64px}.custom-accordion .accordion-item .header-wrapper>svg{position:absolute;width:20px;height:20px;fill:#0092e1;will-change:transform;-webkit-transition:transform 300ms,opacity 300ms;-moz-transition:transform 300ms,opacity 300ms;-o-transition:transform 300ms,opacity 300ms;transition:transform 300ms,opacity 300ms;top:14px}.custom-accordion .accordion-item .header-wrapper>svg:last-of-type:not(:first-of-type){opacity:0;transform:rotate(180deg)}.custom-accordion .accordion-item .header-wrapper .accordion-header{display:block;font-weight:500;padding-top:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:28px;margin:0}.custom-accordion .accordion-item .header-wrapper .accordion-sub-header{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;margin-bottom:10px}.custom-accordion .accordion-item .content-wrapper{padding:0;-webkit-transition:all 300ms ease;-moz-transition:all 300ms ease;-o-transition:all 300ms ease;transition:all 300ms ease;position:relative;overflow:hidden}.custom-accordion .accordion-item .content-wrapper .text-wrapper{position:relative;padding:0px 48px;max-height:0;will-change:margin;opacity:0}.custom-accordion .accordion-item .content-wrapper .text-wrapper .text-item:not(:last-child){padding-bottom:8px}.custom-accordion .accordion-item .content-wrapper .text-wrapper .text-item .accordion-title{font-size:16px;font-weight:500}.custom-accordion .accordion-item .content-wrapper .text-wrapper .text-item .accordion-desc{padding-top:5px;font-size:14px}.custom-accordion .accordion-item.right .header-wrapper{padding:5px 48px 5px 10px}.custom-accordion .accordion-item.right .header-wrapper>svg{right:15px}.custom-accordion .accordion-item.left .header-wrapper{padding:5px 10px 5px 48px}.custom-accordion .accordion-item.left .header-wrapper>svg{left:15px}.custom-accordion .accordion-item.deg-90 .header-wrapper>svg:last-of-type:not(:first-of-type){-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.custom-accordion .accordion-item.deg-90-counter .header-wrapper>svg:last-of-type:not(:first-of-type){-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-o-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.custom-accordion .accordion-item.deg-180 .header-wrapper>svg:last-of-type:not(:first-of-type){-webkit-transform:rotate(-18deg0);-moz-transform:rotate(-18deg0);-o-transform:rotate(-18deg0);-ms-transform:rotate(-18deg0);transform:rotate(-18deg0)}.custom-accordion .accordion-item.deg-180-counter .header-wrapper>svg:last-of-type:not(:first-of-type){-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.custom-accordion .accordion-item.active>.content-wrapper{padding-bottom:18px}.custom-accordion .accordion-item.active.deg-90 .header-wrapper>svg:first-of-type{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-o-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.custom-accordion .accordion-item.active.deg-90-counter .header-wrapper>svg:first-of-type{-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.custom-accordion .accordion-item.active.deg-180 .header-wrapper>svg:first-of-type{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.custom-accordion .accordion-item.active.deg-180-counter .header-wrapper>svg:first-of-type{-webkit-transform:rotate(-180deg);-moz-transform:rotate(-180deg);-o-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg)}.custom-accordion .accordion-item.active .header-wrapper>svg:last-of-type:not(:first-of-type){transform:rotate(0);opacity:1}.custom-accordion .accordion-item.active.transform .header-wrapper>svg:first-of-type:not(:last-of-type){opacity:0}.custom-accordion .accordion-item.active .content-wrapper .text-wrapper{opacity:1;max-height:10000px}.custom-accordion.alternative-accordion>.accordion-item{border-bottom:0}.custom-accordion.alternative-accordion>.accordion-item:hover{background-color:transparent}.custom-accordion.alternative-accordion>.accordion-item:hover .accordion-header{text-decoration:underline}.custom-accordion.alternative-accordion>.accordion-item:first-child{border-top:0}.custom-accordion.alternative-accordion>.accordion-item>.header-wrapper{min-height:auto}.custom-accordion.alternative-accordion>.accordion-item>.header-wrapper>.accordion-header{font-size:16px;color:#0092e1;padding:0}.custom-accordion.alternative-accordion>.accordion-item>.header-wrapper>svg{top:5px;width:14px}.custom-accordion.alternative-accordion>.accordion-item.right>.header-wrapper{padding:0 48px 0 10px}.custom-accordion.alternative-accordion>.accordion-item.right>.header-wrapper>svg{right:15px}.custom-accordion.alternative-accordion>.accordion-item.right>.content-wrapper>.text-wrapper{padding:0 30px 0 10px}.custom-accordion.alternative-accordion>.accordion-item.left>.header-wrapper{padding:0 10px 0 30px}.custom-accordion.alternative-accordion>.accordion-item.left>.header-wrapper>svg{left:5px}.custom-accordion.alternative-accordion>.accordion-item.left>.content-wrapper>.text-wrapper{padding:0 30px}\n",""])},3:function(t,e,o){"use strict";var r,n={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}();function i(t,e){for(var o=[],r={},n=0;n<t.length;n++){var a=t[n],c=e.base?a[0]+e.base:a[0],i={css:a[1],media:a[2],sourceMap:a[3]};r[c]?r[c].parts.push(i):o.push(r[c]={id:c,parts:[i]})}return o}function s(t,e){for(var o=0;o<t.length;o++){var r=t[o],a=n[r.id],c=0;if(a){for(a.refs++;c<a.parts.length;c++)a.parts[c](r.parts[c]);for(;c<r.parts.length;c++)a.parts.push(v(r.parts[c],e))}else{for(var i=[];c<r.parts.length;c++)i.push(v(r.parts[c],e));n[r.id]={id:r.id,refs:1,parts:i}}}}function d(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=o.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(o){e.setAttribute(o,t.attributes[o])})),"function"==typeof t.insert)t.insert(e);else{var n=c(t.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}return e}var p,m=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function u(t,e,o,r){var n=o?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,n);else{var a=document.createTextNode(n),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(a,c[e]):t.appendChild(a)}}function l(t,e,o){var r=o.css,n=o.media,a=o.sourceMap;if(n&&t.setAttribute("media",n),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,g=0;function v(t,e){var o,r,n;if(e.singleton){var a=g++;o=f||(f=d(e)),r=u.bind(null,o,a,!1),n=u.bind(null,o,a,!0)}else o=d(e),r=l.bind(null,o,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var o=i(t,e);return s(o,e),function(t){for(var r=[],a=0;a<o.length;a++){var c=o[a],d=n[c.id];d&&(d.refs--,r.push(d))}t&&s(i(t,e),e);for(var p=0;p<r.length;p++){var m=r[p];if(0===m.refs){for(var u=0;u<m.parts.length;u++)m.parts[u]();delete n[m.id]}}}}},4:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"a",(function(){return a})),o.d(e,"c",(function(){return c}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};function n(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}var a=function(){return(a=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function c(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var r=Array(t),n=0;for(e=0;e<o;e++)for(var a=arguments[e],c=0,i=a.length;c<i;c++,n++)r[n]=a[c];return r}},444:function(t,e,o){"use strict";o.r(e);var r=o(4),n=o(0),a=o(6),c=(o(204),n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n.createElement("path",{d:"M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"}))),i=function(t){var e=n.useState(null),o=e[0],i=e[1],d=n.useState("custom-accordion"),p=d[0],m=d[1],u=n.useState("custom-accordion"),l=u[0],f=u[1],g=n.useState([]),v=g[0],h=g[1];n.useEffect((function(){var e,o;e=[],t.list.map((function(){return e.push(Object(a.a)("accordion-"))})),h(e),o="custom-accordion",o+=t.className?" "+t.className:"",o+=t.alternative?" alternative-accordion":"",m(o),function(){var e="accordion-item";e+=" "+(t.iconPosition?t.iconPosition:"left"),e+=" "+(t.iconRotation?t.iconRotation:"deg-180"),e+=t.customIconExpanded?" transform":"",f(e)}()}),[t.id,t.className,t.alternative,t.iconPosition,t.iconRotation,t.customIconExpanded,t.list]);var w=function(t){return i(o===t?null:t)};return n.createElement("div",{className:p,id:t.id},t.list&&t.list.map((function(e,a){return n.createElement("div",{className:l+(o===a?" active":""),key:a,tabIndex:0,id:v[a],onKeyDown:function(t){return function(t,e){" "!==e.key.toLowerCase()&&"space"!==e.key.toLowerCase()&&"enter"!==e.key.toLowerCase()||w(t)}(a,t)},"aria-expanded":o===a,"aria-controls":"lbl-"+v[a],role:"button"},n.createElement("div",{className:"header-wrapper"+(e.subHeaderText?" with-sub-header":""),onClick:function(){return i(o===a?null:a)}},t.customIcon||c,t.customIconExpanded?t.customIconExpanded:null,n.createElement("h4",{className:"accordion-header"},e.header),e.subHeaderText&&n.createElement("h6",{className:"accordion-sub-header"},e.subHeaderText)),n.createElement("div",{className:"content-wrapper","aria-labelledby":v[a],id:"lbl-"+v[a],role:"region"},e&&n.createElement(s,Object(r.a)({},e))))})))},s=function(t){if(n.isValidElement(t.content)){var e=t.content;return n.createElement("div",{className:"text-wrapper"},e)}if(t.content instanceof Array){var o=t.content;return n.createElement("div",{className:"text-wrapper"},o.map((function(t,e){return n.createElement("div",{className:"text-item",key:e},t.title&&n.createElement("div",{className:"accordion-title"},t.title),t.desc&&n.createElement("div",{className:"accordion-desc"},t.desc))})))}var r=t.content;return n.createElement("div",{className:"text-wrapper"},n.createElement("div",{className:"text-item"},r.title&&n.createElement("div",{className:"accordion-title"},r.title),r.desc&&n.createElement("div",{className:"accordion-desc"},r.desc)))};o.d(e,"Accordion",(function(){return i}))},6:function(t,e,o){"use strict";function r(t){return t+String(1e3*Math.random()+(new Date).getTime())}o.d(e,"a",(function(){return r}))}})}));