!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],t):"object"==typeof exports?exports["react-components"]=t(require("react")):e["react-components"]=t(e.React)}(window,(function(e){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=454)}({0:function(t,r){t.exports=e},2:function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var n=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[r].concat(a).concat([n]).join("\n")}var i,s,c;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var a=this[n][0];null!=a&&(o[a]=!0)}for(var i=0;i<e.length;i++){var s=e[i];null!=s[0]&&o[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="(".concat(s[2],") and (").concat(r,")")),t.push(s))}},t}},3:function(e,t,r){"use strict";var o,n={},a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function s(e,t){for(var r=[],o={},n=0;n<e.length;n++){var a=e[n],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(s):r.push(o[i]={id:i,parts:[s]})}return r}function c(e,t){for(var r=0;r<e.length;r++){var o=e[r],a=n[o.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(h(o.parts[i],t))}else{for(var s=[];i<o.parts.length;i++)s.push(h(o.parts[i],t));n[o.id]={id:o.id,refs:1,parts:s}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var o=r.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(r){t.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(t);else{var n=i(e.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,r){var o=r.css,n=r.media,a=r.sourceMap;if(n&&e.setAttribute("media",n),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,b=0;function h(e,t){var r,o,n;if(t.singleton){var a=b++;r=m||(m=u(t)),o=d.bind(null,r,a,!1),n=d.bind(null,r,a,!0)}else r=u(t),o=p.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var r=s(e,t);return c(r,t),function(e){for(var o=[],a=0;a<r.length;a++){var i=r[a],u=n[i.id];u&&(u.refs--,o.push(u))}e&&c(s(e,t),t);for(var l=0;l<o.length;l++){var f=o[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete n[f.id]}}}}},404:function(e,t,r){var o=r(405);"string"==typeof o&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};r(3)(o,n);o.locals&&(e.exports=o.locals)},405:function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".form-group.text-area>.input-field>textarea.form-control{color:#444;border-color:#adadad;-webkit-transition:border 100ms;-moz-transition:border 100ms;-o-transition:border 100ms;transition:border 100ms}.form-group.text-area>.input-field>textarea.form-control:not(.resizable){resize:none}.form-group.text-area>.input-field>textarea.form-control:not(:disabled):hover{border-color:#41b0ee;background-color:white}.form-group.text-area>.input-field>textarea.form-control:not(:disabled):focus{border-color:#007AC7;box-shadow:none;background-color:white}.form-group.text-area>.input-field>textarea.form-control:not(:disabled):focus:active{border-color:#007AC7;box-shadow:none;background-color:white}.form-group.text-area>.input-field>.alert{opacity:0;margin:0;padding:0;background:transparent;max-height:0;border:none;border-radius:0px;overflow:hidden;width:100%;-webkit-transition:opacity 200ms,padding 200ms,max-height 400ms;-moz-transition:opacity 200ms,padding 200ms,max-height 400ms;-o-transition:opacity 200ms,padding 200ms,max-height 400ms;transition:opacity 200ms,padding 200ms,max-height 400ms}.form-group.text-area>.input-field>.alert.alert-danger{color:#f03529}.form-group.text-area>.input-field.has-error>textarea.form-control{border-bottom:1px solid #f03529}.form-group.text-area>.input-field.has-error>textarea.form-control:hover,.form-group.text-area>.input-field.has-error>textarea.form-control:focus,.form-group.text-area>.input-field.has-error>textarea.form-control:focus:active{border-bottom:2px solid #f03529}.form-group.text-area>.input-field.has-error>.alert{opacity:1;padding-top:2px;max-height:100px}\n",""])},454:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(6),a=(r(404),function(e){var t=o.useState(),r=t[0],a=t[1];return o.useEffect((function(){a(e.id?e.id:e.label?Object(n.a)("textarea-"):null)}),[e.id,e.label]),o.createElement("div",{className:"form-group text-area"+(e.className?" "+e.className:"")},o.createElement("div",{className:"input-field"+(e.error?" has-error":"")},e.label&&o.createElement("label",{className:"custom-label",htmlFor:r},e.label),o.createElement("textarea",{name:e.name,className:"form-control"+(e.resizable||void 0===e.resizable?" resizable":""),id:r,placeholder:e.placeholder,maxLength:e.max,autoFocus:e.focus,readOnly:e.readonly,disabled:e.disabled,cols:e.cols,rows:e.rows,onChange:e.onChange,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,onKeyPress:e.onKeyPress,onFocus:e.onFocus,onBlur:e.onBlur,value:e.value,ref:e.reference}),o.createElement("div",{className:"alert alert-danger"},e.error)))});r.d(t,"TextArea",(function(){return a}))},6:function(e,t,r){"use strict";function o(e){return e+String(1e3*Math.random()+(new Date).getTime())}r.d(t,"a",(function(){return o}))}})}));