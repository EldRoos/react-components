!function(r,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],o):"object"==typeof exports?exports["react-components"]=o(require("react")):r["react-components"]=o(r.React)}(window,(function(r){return function(r){var o={};function t(e){if(o[e])return o[e].exports;var p=o[e]={i:e,l:!1,exports:{}};return r[e].call(p.exports,p,p.exports,t),p.l=!0,p.exports}return t.m=r,t.c=o,t.d=function(r,o,e){t.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:e})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,o){if(1&o&&(r=t(r)),8&o)return r;if(4&o&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&o&&"string"!=typeof r)for(var p in r)t.d(e,p,function(o){return r[o]}.bind(null,p));return e},t.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(o,"a",o),o},t.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},t.p="",t(t.s=443)}({0:function(o,t){o.exports=r},2:function(r,o,t){"use strict";r.exports=function(r){var o=[];return o.toString=function(){return this.map((function(o){var t=function(r,o){var t=r[1]||"",e=r[3];if(!e)return t;if(o&&"function"==typeof btoa){var p=(u=e,i=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(a," */")),n=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot).concat(r," */")}));return[t].concat(n).concat([p]).join("\n")}var u,i,a;return[t].join("\n")}(o,r);return o[2]?"@media ".concat(o[2],"{").concat(t,"}"):t})).join("")},o.i=function(r,t){"string"==typeof r&&(r=[[null,r,""]]);for(var e={},p=0;p<this.length;p++){var n=this[p][0];null!=n&&(e[n]=!0)}for(var u=0;u<r.length;u++){var i=r[u];null!=i[0]&&e[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="(".concat(i[2],") and (").concat(t,")")),o.push(i))}},o}},3:function(r,o,t){"use strict";var e,p={},n=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},u=function(){var r={};return function(o){if(void 0===r[o]){var t=document.querySelector(o);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}r[o]=t}return r[o]}}();function i(r,o){for(var t=[],e={},p=0;p<r.length;p++){var n=r[p],u=o.base?n[0]+o.base:n[0],i={css:n[1],media:n[2],sourceMap:n[3]};e[u]?e[u].parts.push(i):t.push(e[u]={id:u,parts:[i]})}return t}function a(r,o){for(var t=0;t<r.length;t++){var e=r[t],n=p[e.id],u=0;if(n){for(n.refs++;u<n.parts.length;u++)n.parts[u](e.parts[u]);for(;u<e.parts.length;u++)n.parts.push(m(e.parts[u],o))}else{for(var i=[];u<e.parts.length;u++)i.push(m(e.parts[u],o));p[e.id]={id:e.id,refs:1,parts:i}}}}function g(r){var o=document.createElement("style");if(void 0===r.attributes.nonce){var e=t.nc;e&&(r.attributes.nonce=e)}if(Object.keys(r.attributes).forEach((function(t){o.setAttribute(t,r.attributes[t])})),"function"==typeof r.insert)r.insert(o);else{var p=u(r.insert||"head");if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(o)}return o}var c,l=(c=[],function(r,o){return c[r]=o,c.filter(Boolean).join("\n")});function s(r,o,t,e){var p=t?"":e.css;if(r.styleSheet)r.styleSheet.cssText=l(o,p);else{var n=document.createTextNode(p),u=r.childNodes;u[o]&&r.removeChild(u[o]),u.length?r.insertBefore(n,u[o]):r.appendChild(n)}}function d(r,o,t){var e=t.css,p=t.media,n=t.sourceMap;if(p&&r.setAttribute("media",p),n&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}var f=null,b=0;function m(r,o){var t,e,p;if(o.singleton){var n=b++;t=f||(f=g(o)),e=s.bind(null,t,n,!1),p=s.bind(null,t,n,!0)}else t=g(o),e=d.bind(null,t,o),p=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)};return e(r),function(o){if(o){if(o.css===r.css&&o.media===r.media&&o.sourceMap===r.sourceMap)return;e(r=o)}else p()}}r.exports=function(r,o){(o=o||{}).attributes="object"==typeof o.attributes?o.attributes:{},o.singleton||"boolean"==typeof o.singleton||(o.singleton=n());var t=i(r,o);return a(t,o),function(r){for(var e=[],n=0;n<t.length;n++){var u=t[n],g=p[u.id];g&&(g.refs--,e.push(g))}r&&a(i(r,o),o);for(var c=0;c<e.length;c++){var l=e[c];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete p[l.id]}}}}},406:function(r,o,t){var e=t(407);"string"==typeof e&&(e=[[r.i,e,""]]);var p={insert:"head",singleton:!1};t(3)(e,p);e.locals&&(r.exports=e.locals)},407:function(r,o,t){(r.exports=t(2)(!1)).push([r.i,".form-group.input-box-group{position:relative}.form-group.input-box-group>.input-group{position:relative}.form-group.input-box-group>.input-group>.input-box-group-wrapper{color:#444;-webkit-transition:border 100ms;-moz-transition:border 100ms;-o-transition:border 100ms;transition:border 100ms;position:relative;width:100%;height:42px;border:1px solid #adadad;border-radius:4px;overflow:hidden;display:flex;align-items:center}.form-group.input-box-group>.input-group>.input-box-group-wrapper:hover{border-color:#41B0EE;background-color:#fff}.form-group.input-box-group>.input-group>.input-box-group-wrapper:focus-within{border-color:#007AC7;box-shadow:none;background-color:#fff}.form-group.input-box-group>.input-group>.input-box-group-wrapper:focus-within:active{border-color:#007AC7;box-shadow:none;background-color:#fff}.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-prepend,.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-append{position:relative;display:inline-flex;align-items:center;width:40px;height:42px;vertical-align:top;margin:0}.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-prepend>.input-group-text,.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-append>.input-group-text{position:relative;border:0;background:none;padding:0;margin:0 auto;width:100%;height:100%;justify-content:center}.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-prepend>.input-group-text svg,.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-append>.input-group-text svg{width:16px;height:16px;fill:#000}.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-prepend.clickable,.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-append.clickable{cursor:pointer}.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-prepend.clickable>.input-group-text,.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-append.clickable>.input-group-text{color:#41B0EE}.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-prepend.clickable>.input-group-text svg,.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-append.clickable>.input-group-text svg{fill:#41B0EE}.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-prepend.clickable>.input-group-text:hover,.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-append.clickable>.input-group-text:hover{color:#0092E1}.form-group.input-box-group>.input-group>.input-box-group-wrapper>.input-group-prepend+input.form-control{padding-left:0}.form-group.input-box-group>.input-group>.input-box-group-wrapper>input.form-control{display:inline-flex;z-index:1;border:none;border-radius:0;height:42px}.form-group.input-box-group>.input-group>.input-box-group-wrapper>input.form-control:focus{box-shadow:none}.form-group.input-box-group>.input-group>.input-box-group-wrapper>input.form-control::-webkit-inner-spin-button,.form-group.input-box-group>.input-group>.input-box-group-wrapper>input.form-control::-webkit-textfield-decoration-container{-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-group.input-box-group>.input-group>.input-box-group-wrapper>input.form-control:nth-child(2):not(:last-child),.form-group.input-box-group>.input-group>.input-box-group-wrapper>input.form-control:first-child:not(:last-child){padding-right:0}.form-group.input-box-group>.input-group.has-error>.input-box-group-wrapper{border-bottom:2px solid #F03529}.form-group.input-box-group>.input-group.has-error>.alert{opacity:1;padding-top:2px;max-height:100px}.form-group.input-box-group>.input-group.success>.input-box-group-wrapper{border-bottom:2px solid #60cd18}.form-group.input-box-group>.input-group.disabled .input-box-group-wrapper{background-color:#f8f8f8;border-color:#adadad}.form-group.input-box-group>.input-group.disabled .input-box-group-wrapper .input-group-prepend,.form-group.input-box-group>.input-group.disabled .input-box-group-wrapper .input-group-append,.form-group.input-box-group>.input-group.disabled .input-box-group-wrapper .form-control{color:#adadad;background-color:#f8f8f8}.form-group.input-box-group>.input-group.disabled .input-box-group-wrapper .input-group-prepend .input-group-text,.form-group.input-box-group>.input-group.disabled .input-box-group-wrapper .form-control,.form-group.input-box-group>.input-group.disabled .input-box-group-wrapper .input-group-append .input-group-text{color:#adadad}.form-group.input-box-group>.input-group.disabled .input-box-group-wrapper .input-group-prepend .input-group-text svg,.form-group.input-box-group>.input-group.disabled .input-box-group-wrapper .form-control svg,.form-group.input-box-group>.input-group.disabled .input-box-group-wrapper .input-group-append .input-group-text svg{fill:#adadad}.form-group.input-box-group>.input-group>.alert{opacity:0;margin:0;padding:0;background:transparent;max-height:0;border:none;border-radius:0px;overflow:hidden;width:100%;-webkit-transition:opacity 200ms,padding 200ms,max-height 400ms;-moz-transition:opacity 200ms,padding 200ms,max-height 400ms;-o-transition:opacity 200ms,padding 200ms,max-height 400ms;transition:opacity 200ms,padding 200ms,max-height 400ms}.form-group.input-box-group>.input-group>.alert.alert-danger{color:#F03529}\n",""])},443:function(r,o,t){"use strict";t.r(o);var e=t(0),p=(t(406),t(6)),n=function(r){var o=e.useState(null),t=o[0],n=o[1],u=e.useState(!0),i=u[0],a=u[1];return e.useEffect((function(){n(r.id?r.id:r.label?Object(p.a)("tbg-"):null)}),[r.id,r.label]),e.useEffect((function(){r.success?a(!1):!1===r.showErrorMessage?a(!1):a(!0)}),[r.showErrorMessage,r.success]),e.createElement("div",{className:"form-group input-box-group"+(r.className?" "+r.className:"")},r.label&&e.createElement("label",{className:"custom-label",htmlFor:t},r.label),e.createElement("div",{className:"input-group"+(r.success?" success":r.error?" has-error":"")+(r.disabled?" disabled":"")},e.createElement("div",{className:"input-box-group-wrapper"},(r.leftIcon||r.leftText)&&e.createElement("div",{className:"input-group-prepend"+(r.onLeftClick?" clickable":""),role:r.onLeftClick?"button":"",onClick:r.onLeftClick},r.leftText&&e.createElement("span",{className:"input-group-text",title:r.leftTitle},r.leftText),r.leftIcon&&!r.leftText&&e.createElement("span",{className:"input-group-text"},r.leftIcon)),e.createElement("input",{id:t,name:r.name,type:r.type,pattern:r.pattern,required:r.required,minLength:r.minLength,maxLength:r.maxLength,value:r.value,onChange:r.onChange,placeholder:r.placeholder,className:"form-control",autoFocus:r.focus,autoComplete:r.autoComplete,readOnly:r.readOnly,disabled:r.disabled,onKeyDown:r.onKeyDown,onKeyUp:r.onKeyUp,onKeyPress:r.onKeyPress,onFocus:r.onFocus,onBlur:r.onBlur,ref:r.reference}),(r.rightIcon||r.rightText)&&e.createElement("div",{className:"input-group-append"+(r.onRightClick?" clickable":""),onClick:r.onRightClick,role:r.onRightClick?"button":""},r.rightText&&e.createElement("span",{className:"input-group-text",title:r.rightTitle},r.rightText),r.rightIcon&&!r.rightText&&e.createElement("span",{className:"input-group-text"},r.rightIcon))),i&&e.createElement("div",{className:"alert alert-danger"},r.error)))};t.d(o,"TextBoxGroup",(function(){return n}))},6:function(r,o,t){"use strict";function e(r){return r+String(1e3*Math.random()+(new Date).getTime())}t.d(o,"a",(function(){return e}))}})}));