!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],r):"object"==typeof exports?exports["react-components"]=r(require("react")):e["react-components"]=r(e.React)}(window,(function(e){return function(e){var r={};function t(o){if(r[o])return r[o].exports;var s=r[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)t.d(o,s,function(r){return e[r]}.bind(null,s));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=431)}({0:function(r,t){r.exports=e},2:function(e,r,t){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=function(e,r){var t=e[1]||"",o=e[3];if(!o)return t;if(r&&"function"==typeof btoa){var s=(n=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[t].concat(i).concat([s]).join("\n")}var n,a,l;return[t].join("\n")}(r,e);return r[2]?"@media ".concat(r[2],"{").concat(t,"}"):t})).join("")},r.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},s=0;s<this.length;s++){var i=this[s][0];null!=i&&(o[i]=!0)}for(var n=0;n<e.length;n++){var a=e[n];null!=a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="(".concat(a[2],") and (").concat(t,")")),r.push(a))}},r}},3:function(e,r,t){"use strict";var o,s={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},n=function(){var e={};return function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[r]=t}return e[r]}}();function a(e,r){for(var t=[],o={},s=0;s<e.length;s++){var i=e[s],n=r.base?i[0]+r.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[n]?o[n].parts.push(a):t.push(o[n]={id:n,parts:[a]})}return t}function l(e,r){for(var t=0;t<e.length;t++){var o=e[t],i=s[o.id],n=0;if(i){for(i.refs++;n<i.parts.length;n++)i.parts[n](o.parts[n]);for(;n<o.parts.length;n++)i.parts.push(g(o.parts[n],r))}else{for(var a=[];n<o.parts.length;n++)a.push(g(o.parts[n],r));s[o.id]={id:o.id,refs:1,parts:a}}}}function u(e){var r=document.createElement("style");if(void 0===e.attributes.nonce){var o=t.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(t){r.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(r);else{var s=n(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(r)}return r}var d,c=(d=[],function(e,r){return d[e]=r,d.filter(Boolean).join("\n")});function m(e,r,t,o){var s=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=c(r,s);else{var i=document.createTextNode(s),n=e.childNodes;n[r]&&e.removeChild(n[r]),n.length?e.insertBefore(i,n[r]):e.appendChild(i)}}function p(e,r,t){var o=t.css,s=t.media,i=t.sourceMap;if(s&&e.setAttribute("media",s),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,b=0;function g(e,r){var t,o,s;if(r.singleton){var i=b++;t=f||(f=u(r)),o=m.bind(null,t,i,!1),s=m.bind(null,t,i,!0)}else t=u(r),o=p.bind(null,t,r),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;o(e=r)}else s()}}e.exports=function(e,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=i());var t=a(e,r);return l(t,r),function(e){for(var o=[],i=0;i<t.length;i++){var n=t[i],u=s[n.id];u&&(u.refs--,o.push(u))}e&&l(a(e,r),r);for(var d=0;d<o.length;d++){var c=o[d];if(0===c.refs){for(var m=0;m<c.parts.length;m++)c.parts[m]();delete s[c.id]}}}}},396:function(e,r,t){var o=t(397);"string"==typeof o&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1};t(3)(o,s);o.locals&&(e.exports=o.locals)},397:function(e,r,t){(e.exports=t(2)(!1)).push([e.i,'.form-group.custom-slider{padding-right:5px}.form-group.custom-slider .input-field{position:relative}.form-group.custom-slider .input-field input[type="range"]{position:relative;display:inline-block;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:rgba(0,0,0,0);cursor:pointer;height:15px;margin-top:10px;margin-bottom:7px}.form-group.custom-slider .input-field input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:56px;height:32px;background:rgba(0,0,0,0);border-radius:4px;border:0;outline:0;box-shadow:0;transform:translateY(-14px)}.form-group.custom-slider .input-field input[type="range"]::-webkit-slider-thumb:not(:disabled){cursor:pointer}.form-group.custom-slider .input-field input[type="range"]::-moz-range-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:56px;height:32px;background:rgba(0,0,0,0);border-radius:4px;border:0;outline:0;box-shadow:0;transform:translateY(-14px);transform:none}.form-group.custom-slider .input-field input[type="range"]::-moz-range-thumb:not(:disabled){cursor:pointer}.form-group.custom-slider .input-field input[type="range"]::-ms-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:56px;height:32px;background:rgba(0,0,0,0);border-radius:4px;border:0;outline:0;box-shadow:0;transform:translateY(-14px)}.form-group.custom-slider .input-field input[type="range"]::-ms-thumb:not(:disabled){cursor:pointer}.form-group.custom-slider .input-field input[type="range"]::-webkit-slider-runnable-track{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:rgba(0,0,0,0);color:rgba(0,0,0,0);border:0;outline:0;box-shadow:0;height:5px}.form-group.custom-slider .input-field input[type="range"]::-moz-range-track{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:rgba(0,0,0,0);color:rgba(0,0,0,0);border:0;outline:0;box-shadow:0;height:5px}.form-group.custom-slider .input-field input[type="range"]::-ms-track{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:rgba(0,0,0,0);color:rgba(0,0,0,0);border:0;outline:0;box-shadow:0;height:5px}.form-group.custom-slider .input-field input[type="range"]::-ms-tooltip{display:none}.form-group.custom-slider .input-field input[type="range"]::-ms-fill{background-color:rgba(0,0,0,0)}.form-group.custom-slider .input-field input[type="range"]::-ms-fill-lower{background-color:rgba(0,0,0,0);border:0}.form-group.custom-slider .input-field input[type="range"]::-ms-ticks,.form-group.custom-slider .input-field input[type="range"]::-ms-ticks-after,.form-group.custom-slider .input-field input[type="range"]::-ms-ticks-after{display:none;color:rgba(0,0,0,0)}.form-group.custom-slider .input-field input[type="range"]:not(:disabled):focus{outline:none}.form-group.custom-slider .input-field input[type="range"]:not(:disabled):focus+.custom-slider-holder>.custom-slider-track>.custom-slider-thumb{box-shadow:rgba(85,85,85,0.4) 0 2px 5px,0px 0 0px 2px rgba(0,146,225,0.45)}.form-group.custom-slider .input-field input[type="range"]:not(:disabled):hover+.custom-slider-holder>.custom-slider-track>.custom-slider-thumb{-webkit-transform:translateX(-50%) scale(1.1);-moz-transform:translateX(-50%) scale(1.1);-o-transform:translateX(-50%) scale(1.1);transform:translateX(-50%) scale(1.1)}.form-group.custom-slider .input-field input[type="range"]:not(:disabled):active+.custom-slider-holder>.custom-slider-track>.custom-slider-thumb{-webkit-transform:translateX(-50%) scale(1.05);-moz-transform:translateX(-50%) scale(1.05);-o-transform:translateX(-50%) scale(1.05);transform:translateX(-50%) scale(1.05)}.form-group.custom-slider .input-field input[type="range"]:not(:disabled):active+.custom-slider-holder>.custom-slider-track>.custom-slider-thumb .custom-slider-preview:not(.always-show){display:block}.form-group.custom-slider .input-field .custom-slider-holder{position:absolute;top:15px;pointer-events:none;padding:0 28px;right:0;left:0;height:4px}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track{position:relative;width:100%;height:5px;border-radius:8px;pointer-events:none;z-index:2;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track [class^="custom-slider-slider-"]{position:absolute;top:0;bottom:0;height:100%;z-index:2}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-slider-before{left:0px;width:calc(100% + 56px);margin:0 -28px;background-color:#adadad}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-slider-after{will-change:width;transform-origin:left;margin:0 -28px;transform:rotateY(0deg)}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb{position:relative;height:32px;width:56px;background-color:#0092E1;border-radius:4px;top:-14px;transform-origin:center;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);pointer-events:none;box-shadow:rgba(85,85,85,0.4) 0 2px 5px;will-change:left;-webkit-transition:transform 80ms ease-in-out,box-shadow 80ms ease-in;-moz-transition:transform 80ms ease-in-out,box-shadow 80ms ease-in;-o-transition:transform 80ms ease-in-out,box-shadow 80ms ease-in;transition:transform 80ms ease-in-out,box-shadow 80ms ease-in;z-index:2}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview{pointer-events:none;font-size:14px;padding:0 10px;display:none;height:25px;white-space:nowrap;position:absolute;top:-30px;text-align:center;color:#fff;border-radius:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:translateX(-49%);-moz-transform:translateX(-49%);-o-transform:translateX(-49%);transform:translateX(-49%);left:50%}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview:after{content:" ";width:0px;height:0px;border:8px solid;position:absolute;bottom:-15px;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.always-show{display:block}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.primary{background-color:#007AC7}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.primary:after{border-color:#007AC7 transparent transparent transparent}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.inverted{background-color:#000}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.inverted:after{border-color:#000 transparent transparent transparent}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.success{background-color:#379D00}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.success:after{border-color:#379D00 transparent transparent transparent}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.danger{background-color:#BB000C}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.danger:after{border-color:#BB000C transparent transparent transparent}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.warning{background-color:#F8A000}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.warning:after{border-color:#F8A000 transparent transparent transparent}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.purple{background-color:#3F2587}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.purple:after{border-color:#3F2587 transparent transparent transparent}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb [class*="custom-slider-icon-"]{position:absolute;top:50%;transform:translateY(-50%)}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb [class*="custom-slider-icon-"] svg{width:12px;fill:#fff}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-icon-left{left:12px}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-icon-right{right:12px}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-label{position:absolute;top:20px;font-size:12px;white-space:nowrap;-webkit-transform:translateX(-46%);-moz-transform:translateX(-46%);-o-transform:translateX(-46%);transform:translateX(-46%)}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-label.show-ticks:before{content:"|";position:absolute;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);top:-12px;font-size:8px;line-height:1;font-weight:bold}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track.with-transitions .custom-slider-slider-after{-webkit-transition:width 80ms ease-out,transform 80ms linear;-moz-transition:width 80ms ease-out,transform 80ms linear;-o-transition:width 80ms ease-out,transform 80ms linear;transition:width 80ms ease-out,transform 80ms linear}.form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track.with-transitions .custom-slider-thumb{-webkit-transition:left 80ms ease-out,transform 80ms ease-in-out,box-shadow 80ms ease-in;-moz-transition:left 80ms ease-out,transform 80ms ease-in-out,box-shadow 80ms ease-in;-o-transition:left 80ms ease-out,transform 80ms ease-in-out,box-shadow 80ms ease-in;transition:left 80ms ease-out,transform 80ms ease-in-out,box-shadow 80ms ease-in}.form-group.custom-slider .input-field.has-labels input[type="range"]{margin-bottom:30px}.form-group.custom-slider.disabled>div.input-field>input[type="range"]{cursor:default}.form-group.custom-slider.disabled>div.input-field>div.custom-slider-holder>div.custom-slider-track>div.custom-slider-slider-before{background-color:#ccc}.form-group.custom-slider.disabled>div.input-field>div.custom-slider-holder>div.custom-slider-track>div.custom-slider-slider-before:before{background-color:#ccc}.form-group.custom-slider.disabled>div.input-field>div.custom-slider-holder>div.custom-slider-track>div.custom-slider-slider-after{background-color:#adadad}.form-group.custom-slider.disabled>div.input-field>div.custom-slider-holder>div.custom-slider-track>div.custom-slider-slider-after:after{background-color:#adadad}.form-group.custom-slider.disabled>div.input-field>div.custom-slider-holder>div.custom-slider-track>div.custom-slider-thumb{background-color:#9a9a9a;border-color:#8c8c8c}.form-group.custom-slider .alert{padding:0px 2px;margin:0}.form-group.custom-slider .alert.alert-danger{color:#F03529;background:none;border:none;border-radius:0px;width:100%}.form-group.custom-slider .input-field .custom-slider-holder.primary .custom-slider-track .custom-slider-slider-after{background-color:#0092E1}.form-group.custom-slider .input-field .custom-slider-holder.primary .custom-slider-track .custom-slider-thumb{background-color:#0092E1;border:0}.form-group.custom-slider .input-field .custom-slider-holder.primary .custom-slider-track .custom-slider-thumb::after{background-color:#007AC7}.form-group.custom-slider .input-field .custom-slider-holder.inverted .custom-slider-track .custom-slider-slider-after{background-color:#000}.form-group.custom-slider .input-field .custom-slider-holder.inverted .custom-slider-track .custom-slider-thumb{background-color:#000;border:0}.form-group.custom-slider .input-field .custom-slider-holder.inverted .custom-slider-track .custom-slider-thumb::after{background-color:#000}.form-group.custom-slider .input-field .custom-slider-holder.success .custom-slider-track .custom-slider-slider-after{background-color:#45B400}.form-group.custom-slider .input-field .custom-slider-holder.success .custom-slider-track .custom-slider-thumb{background-color:#45B400;border:0}.form-group.custom-slider .input-field .custom-slider-holder.success .custom-slider-track .custom-slider-thumb::after{background-color:#379D00}.form-group.custom-slider .input-field .custom-slider-holder.danger .custom-slider-track .custom-slider-slider-after{background-color:#D81A1A}.form-group.custom-slider .input-field .custom-slider-holder.danger .custom-slider-track .custom-slider-thumb{background-color:#D81A1A;border:0}.form-group.custom-slider .input-field .custom-slider-holder.danger .custom-slider-track .custom-slider-thumb::after{background-color:#BB000C}.form-group.custom-slider .input-field .custom-slider-holder.warning .custom-slider-track .custom-slider-slider-after{background-color:#FFB400}.form-group.custom-slider .input-field .custom-slider-holder.warning .custom-slider-track .custom-slider-thumb{background-color:#FFB400;border:0}.form-group.custom-slider .input-field .custom-slider-holder.warning .custom-slider-track .custom-slider-thumb::after{background-color:#F8A000}.form-group.custom-slider .input-field .custom-slider-holder.purple .custom-slider-track .custom-slider-slider-after{background-color:#4F2C99}.form-group.custom-slider .input-field .custom-slider-holder.purple .custom-slider-track .custom-slider-thumb{background-color:#4F2C99;border:0}.form-group.custom-slider .input-field .custom-slider-holder.purple .custom-slider-track .custom-slider-thumb::after{background-color:#3F2587}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.form-group.custom-slider .input-field input[type="range"]{padding:0}}@-moz-document url-prefix(){.form-group.custom-slider .input-field input[type="range"]{padding:0}}\n',""])},431:function(e,r,t){"use strict";t.r(r);var o=t(0),s=function(e){var r=o.useRef(null),t=o.useState(0),s=t[0],i=t[1];return o.useEffect((function(){for(var e=r.current.children,t=0,o=0;o<e.length;o++)t+=e.item(o).scrollHeight;i(t)}),[e.triggerValue]),o.createElement("div",{className:"expand",ref:r,style:{overflow:"hidden",height:s,opacity:s?1:0,transition:"height 200ms linear, opacity 400ms linear"}},e.children)},i=(t(396),o.createElement("svg",{name:"angle-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512"},o.createElement("path",{d:"M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z"}))),n=o.createElement("svg",{name:"angle-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512"},o.createElement("path",{d:"M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"})),a=function(e){var r=o.useState(e.min||0),t=r[0],a=r[1],l=o.useState(e.max||100),u=l[0],d=l[1],c=o.useState(0),m=c[0],p=c[1],f=o.useState([]),b=f[0],g=f[1],h=o.useState(0),v=h[0],k=h[1],w=o.useState({}),x=w[0],y=w[1];function E(){if(e.value<=t)return 0;if(e.value>=u)return 100;var r=Math.abs(e.value-t);return m?r/m*100:0}return o.useEffect((function(){var r="number"!=typeof e.min?0:e.min,o="number"!=typeof e.max?100:e.max;a(r),d(o),p(function(e,r){return r>e?r-e:(console.warn("The max value of the slider should be larger than the min value (Max:"+u+", Min: "+t),e-r)}(r,o))}),[e.min,e.max]),o.useEffect((function(){if(e.labels&&e.labels.length){var r=[];e.labels.map((function(e){r.push(function(e){if(e>=u)return 100;if(e<=t)return 0;return Math.abs((e-t)/(u-t)*100)}(e.position)+"%")})),g(r)}}),[e.labels,t,u]),o.useEffect((function(){k(E()),y(function(){var r,o=E(),s={};t>=0?(r=0,s.left=r+"%",s.width="calc("+o+"% + 27px)"):u<=0?(r=100,s.left="calc("+r+"% + 56px)",s.width="calc("+(100-o)+"% + 27px)",s.transform="rotateY(180deg)"):e.value<=0?(r=m?Math.abs(t/m*100):0,s.left="calc("+r+"% + 27px)",s.width=r-o+"%",s.transform="rotateY(180deg)"):(r=m?Math.abs(100-u/m*100):0,s.left="calc("+r+"% + 27px)",s.width=o-r+"%");return s}())}),[e.value,t,u,m]),o.createElement("div",{className:"form-group custom-slider"+(e.className?" "+e.className:"")+(e.disabled?" disabled":"")},e.label&&o.createElement("label",{className:"custom-label"},e.label),o.createElement("div",{className:"input-field"+(e.labels&&e.labels.length?" has-labels":"")},o.createElement("input",{type:"range",id:e.id,name:e.name,min:t,max:u,step:e.step,value:e.value,onChange:e.onChange,ref:e.reference,disabled:e.disabled}),o.createElement("div",{className:"custom-slider-holder"+(e.theme?" "+e.theme:" primary")},o.createElement("div",{className:"custom-slider-track"+(m/e.step<=30?" with-transitions":"")},o.createElement("div",{className:"custom-slider-slider-before"}),o.createElement("div",{className:"custom-slider-slider-after",style:x}),o.createElement("div",{className:"custom-slider-thumb",style:{left:v+"%"}},o.createElement("div",{className:"custom-slider-preview"+(e.alwaysShowTooltip?" always-show":"")+(e.tooltipTheme?" "+e.tooltipTheme:" inverted")},e.tooltipValue||e.value),o.createElement("span",{className:"custom-slider-icon-left"},i),o.createElement("span",{className:"custom-slider-icon-right"},n)),e.labels&&e.labels.length?e.labels.map((function(r,t){return o.createElement("div",{key:t,className:"custom-slider-label"+(e.showTicks?" show-ticks":""),style:{left:b[t]}},o.createElement("span",null,r.text))})):null))),o.createElement(s,{triggerValue:e.error},o.createElement("div",{className:"alert alert-danger"},e.error)))};t.d(r,"Slider",(function(){return a}))}})}));