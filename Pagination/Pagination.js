!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],t):"object"==typeof exports?exports["react-components"]=t(require("react")):e["react-components"]=t(e.React)}(window,function(e){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=520)}({0:function(t,n){t.exports=e},2:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=(o=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(r=0;r<e.length;r++){var o=e[r];null!=o[0]&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},3:function(e,t,n){var a,r,i={},o=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=a.apply(this,arguments)),r}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var a=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}}(),l=null,c=0,u=[],p=n(4);function f(e,t){for(var n=0;n<e.length;n++){var a=e[n],r=i[a.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](a.parts[o]);for(;o<a.parts.length;o++)r.parts.push(x(a.parts[o],t))}else{var s=[];for(o=0;o<a.parts.length;o++)s.push(x(a.parts[o],t));i[a.id]={id:a.id,refs:1,parts:s}}}}function m(e,t){for(var n=[],a={},r=0;r<e.length;r++){var i=e[r],o=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(s):n.push(a[o]={id:o,parts:[s]})}return n}function d(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=u[u.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,n);n.insertBefore(t,r)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var a=function(){0;return n.nc}();a&&(e.attrs.nonce=a)}return h(t,e.attrs),d(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function x(e,t){var n,a,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var o=c++;n=l||(l=g(t)),a=w.bind(null,n,o,!1),r=w.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),d(e,t),t}(t),a=function(e,t,n){var a=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(a=p(a));r&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([a],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,n,t),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),a=function(e,t){var n=t.css,a=t.media;a&&e.setAttribute("media",a);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){v(n)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return f(n,t),function(e){for(var a=[],r=0;r<n.length;r++){var o=n[r];(s=i[o.id]).refs--,a.push(s)}e&&f(m(e,t),t);for(r=0;r<a.length;r++){var s;if(0===(s=a[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}},4:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,a=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:a+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},463:function(e,t,n){var a=n(464);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(3)(a,r);a.locals&&(e.exports=a.locals)},464:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".pagination-wrapper > .custom-pagination > .pagination > .page-item > .page-link {\n  position: relative;\n  text-align: center;\n  padding-top: 0;\n  padding-bottom: 0;\n  min-width: 38px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center; }\n  .pagination-wrapper > .custom-pagination > .pagination > .page-item > .page-link > .nav-num {\n    margin: 0 auto; }\n  .pagination-wrapper > .custom-pagination > .pagination > .page-item > .page-link > .nav-action {\n    margin: 0 auto;\n    display: inline-flex; }\n    .pagination-wrapper > .custom-pagination > .pagination > .page-item > .page-link > .nav-action > svg {\n      width: 16px;\n      height: 16px;\n      fill: #007AC7; }\n\n.pagination-wrapper > .custom-pagination > .pagination.dotnav .page-item {\n  width: 20px;\n  height: 25px; }\n  .pagination-wrapper > .custom-pagination > .pagination.dotnav .page-item .page-dot-link {\n    position: relative;\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin-right: 5px;\n    cursor: pointer;\n    background-color: #a2ddfe;\n    -webkit-transition: all 200ms;\n    -moz-transition: all 200ms;\n    -o-transition: all 200ms;\n    transition: all 200ms;\n    margin: 0 auto;\n    will-change: transform; }\n    .pagination-wrapper > .custom-pagination > .pagination.dotnav .page-item .page-dot-link.active {\n      background-color: #007AC7;\n      cursor: default;\n      -webkit-transform: scale(1.3);\n      -moz-transform: scale(1.3);\n      -o-transform: scale(1.3);\n      -ms-transform: scale(1.3);\n      transform: scale(1.3); }\n    .pagination-wrapper > .custom-pagination > .pagination.dotnav .page-item .page-dot-link:hover:not(.active) {\n      background-color: #41B0EE; }\n",""])},520:function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(463),a.createElement("svg",{name:"angle-double-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},a.createElement("path",{d:"M153.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L192.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L153 264.5c-4.6-4.7-4.6-12.3.1-17zm-128 17l117.8 116c4.7 4.7 12.3 4.7 17 0l7.1-7.1c4.7-4.7 4.7-12.3 0-17L64.7 256l102.2-100.4c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L25 247.5c-4.6 4.7-4.6 12.3.1 17z"}))),i=a.createElement("svg",{name:"angle-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512"},a.createElement("path",{d:"M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z"})),o=a.createElement("svg",{name:"angle-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512"},a.createElement("path",{d:"M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"})),s=a.createElement("svg",{name:"angle-double-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},a.createElement("path",{d:"M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z"})),l=a.memo(function(e){var t=e.offset?e.offset:10;function n(e,t,n){var a=[],r={min:0,max:0};if(e<=Math.ceil(n/2))for(var i=1;i<=n;i++)a.push(i);else if(e>=t+1-Math.ceil(n/2)){r.min=t+1-n,r.max=t;for(i=r.min;i<=r.max;i++)a.push(i)}else{r.min=e+1-Math.ceil(n/2),r.max=r.min+n-1;for(i=r.min;i<=r.max;i++)a.push(i)}return a}return a.createElement("div",{className:"pagination-wrapper"+(e.className?" "+e.className:"")},a.createElement("nav",{className:"custom-pagination"},!e.useDotNav&&a.createElement("ul",{className:"pagination"},1!==e.value&&e.useFirstAndLast&&a.createElement("li",{className:"page-item",onClick:function(){return e.onChange(1)}},a.createElement("button",{className:"page-link",title:e.firstText},a.createElement("span",{className:"nav-action"},e.useTextNav?e.firstText?e.firstText:"First":r),a.createElement("span",{className:"sr-only"},e.firstText||"First"))),1!==e.value&&a.createElement("li",{className:"page-item",onClick:function(){return e.onChange(e.value-1)}},a.createElement("button",{className:"page-link",title:e.previousText},a.createElement("span",{className:"nav-action"},e.useTextNav?e.previousText?e.previousText:"Previous":i),a.createElement("span",{className:"sr-only"},e.previousText||"Previous"))),n(e.value,e.size,t).map(function(t){return a.createElement("li",{className:"page-item"+(e.value===t?" active":""),key:t,onClick:function(){return e.onChange(t)},value:t},a.createElement("button",{className:"page-link"+(e.value===t?" active":"")},a.createElement("span",{className:"nav-num"},t),a.createElement("span",{className:"sr-only"},t)))}),e.value!==e.size&&a.createElement("li",{className:"page-item",onClick:function(){return e.onChange(e.value+1)}},a.createElement("button",{className:"page-link",title:e.nextText},a.createElement("span",{className:"nav-action"},e.useTextNav?e.nextText?e.nextText:"Next":o),a.createElement("span",{className:"sr-only"},e.nextText||"Next"))),e.value!==e.size&&e.useFirstAndLast&&a.createElement("li",{className:"page-item",onClick:function(){return e.onChange(e.size)}},a.createElement("button",{className:"page-link",title:"{props.lastText}"},a.createElement("span",{className:"nav-action"},e.useTextNav?e.lastText?e.lastText:"Last":s),a.createElement("span",{className:"sr-only"},e.lastText||"Last")))),e.useDotNav&&a.createElement("ul",{className:"pagination dotnav"},n(e.value,e.size,e.size).map(function(t){return a.createElement("li",{className:"page-item"+(e.value===t?" active":""),key:t,onClick:function(){return e.onChange(t)},value:t},a.createElement("span",{className:"page-dot-link"+(e.value===t?" active":"")}))}))))});n.d(t,"Pagination",function(){return l})}})});