!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],t):"object"==typeof exports?exports["react-components"]=t(require("react")):e["react-components"]=t(e.React)}(window,function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=516)}({0:function(t,n){t.exports=e},2:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},3:function(e,t,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),c=null,l=0,u=[],f=n(4);function g(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(v(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function d(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,n);n.insertBefore(t,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return h(t,e.attrs),d(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;n=c||(c=b(t)),o=w.bind(null,n,a,!1),r=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),d(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return g(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}e&&g(p(e,t),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,x=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},4:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},491:function(e,t,n){var o=n(492);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(3)(o,r);o.locals&&(e.exports=o.locals)},492:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".form-group.custom-toggle {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  height: 40px;\n  padding: 10px 15px; }\n  .form-group.custom-toggle .toggle-btn {\n    display: inline-flex;\n    align-items: center;\n    height: 20px; }\n    .form-group.custom-toggle .toggle-btn .toggle {\n      height: 20px;\n      display: none; }\n      .form-group.custom-toggle .toggle-btn .toggle + .toggle-switch {\n        background-color: #adadad;\n        -webkit-transition: all 0.4s ease;\n        -moz-transition: all 0.4s ease;\n        -o-transition: all 0.4s ease;\n        transition: all 0.4s ease;\n        outline: 0;\n        width: 40px;\n        height: 20px;\n        position: relative;\n        border-radius: 20px;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        margin: 0.5px 0 0;\n        will-change: background-color;\n        -webkit-transition: background-color 200ms ease;\n        -moz-transition: background-color 200ms ease;\n        -o-transition: background-color 200ms ease;\n        transition: background-color 200ms ease;\n        display: inline-flex;\n        align-items: center; }\n        .form-group.custom-toggle .toggle-btn .toggle + .toggle-switch > .toggle-nob {\n          margin-left: 1px;\n          width: 18px;\n          height: 18px;\n          border-radius: 50%;\n          background: #f8f8f8;\n          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);\n          border: 3px solid #fff;\n          -webkit-transition: margin-left 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          -moz-transition: margin-left 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          -o-transition: margin-left 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition: margin-left 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n        .form-group.custom-toggle .toggle-btn .toggle + .toggle-switch:hover > .toggle-nob {\n          background-color: #41B0EE; }\n        .form-group.custom-toggle .toggle-btn .toggle + .toggle-switch:active {\n          box-shadow: inset 0 0 0 2em #cecece; }\n      .form-group.custom-toggle .toggle-btn .toggle:checked + .toggle-switch {\n        background-color: #007AC7; }\n        .form-group.custom-toggle .toggle-btn .toggle:checked + .toggle-switch:active {\n          box-shadow: none; }\n        .form-group.custom-toggle .toggle-btn .toggle:checked + .toggle-switch > .toggle-nob {\n          margin-left: 21px; }\n  .form-group.custom-toggle .toggle-label {\n    display: inline-block;\n    height: 20px;\n    position: relative;\n    margin-left: 10px;\n    color: #000;\n    line-height: 1; }\n\n@-moz-document url-prefix() {\n  .form-group.custom-toggle .toggle-btn .toggle:checked + .toggle-switch:after {\n    margin-left: 19.5px; } }\n",""])},516:function(e,t,n){"use strict";n.r(t);var o=n(0),r=(n(491),function(e){return o.createElement("div",{className:"form-group custom-toggle"+(e.className?" "+e.className:"")},o.createElement("div",{className:"toggle-btn"},o.createElement("input",{className:"toggle",id:e.name,name:e.name,type:"checkbox",checked:e.value,onChange:e.onChange,ref:e.reference}),o.createElement("label",{className:"toggle-switch",htmlFor:e.name},o.createElement("div",{className:"toggle-nob"}))),e.label&&o.createElement("div",{className:"toggle-label"},e.label))});n.d(t,"Toggle",function(){return r})}})});