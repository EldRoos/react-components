!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],n):"object"==typeof exports?exports["react-components"]=n(require("react")):t["react-components"]=n(t.React)}(window,function(t){return function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=519)}({0:function(n,o){n.exports=t},2:function(t,n,o){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var o=function(t,n){var o=t[1]||"",e=t[3];if(!e)return o;if(n&&"function"==typeof btoa){var r=(a=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=e.sources.map(function(t){return"/*# sourceURL="+e.sourceRoot+t+" */"});return[o].concat(i).concat([r]).join("\n")}var a;return[o].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+o+"}":o}).join("")},n.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var e={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(e[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];null!=a[0]&&e[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),n.push(a))}},n}},3:function(t,n,o){var e,r,i={},a=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=e.apply(this,arguments)),r}),s=function(t){var n={};return function(t,o){if("function"==typeof t)return t();if(void 0===n[t]){var e=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,o);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}}(),c=null,p=0,l=[],f=o(4);function m(t,n){for(var o=0;o<t.length;o++){var e=t[o],r=i[e.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](e.parts[a]);for(;a<e.parts.length;a++)r.parts.push(g(e.parts[a],n))}else{var s=[];for(a=0;a<e.parts.length;a++)s.push(g(e.parts[a],n));i[e.id]={id:e.id,refs:1,parts:s}}}}function u(t,n){for(var o=[],e={},r=0;r<t.length;r++){var i=t[r],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};e[a]?e[a].parts.push(s):o.push(e[a]={id:a,parts:[s]})}return o}function d(t,n){var o=s(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=l[l.length-1];if("top"===t.insertAt)e?e.nextSibling?o.insertBefore(n,e.nextSibling):o.appendChild(n):o.insertBefore(n,o.firstChild),l.push(n);else if("bottom"===t.insertAt)o.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertAt.before,o);o.insertBefore(n,r)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=l.indexOf(t);n>=0&&l.splice(n,1)}function b(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var e=function(){0;return o.nc}();e&&(t.attrs.nonce=e)}return w(n,t.attrs),d(t,n),n}function w(t,n){Object.keys(n).forEach(function(o){t.setAttribute(o,n[o])})}function g(t,n){var o,e,r,i;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var a=p++;o=c||(c=b(n)),e=x.bind(null,o,a,!1),r=x.bind(null,o,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",w(n,t.attrs),d(t,n),n}(n),e=function(t,n,o){var e=o.css,r=o.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(e=f(e));r&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([e],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,o,n),r=function(){h(o),o.href&&URL.revokeObjectURL(o.href)}):(o=b(n),e=function(t,n){var o=n.css,e=n.media;e&&t.setAttribute("media",e);if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){h(o)});return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var o=u(t,n);return m(o,n),function(t){for(var e=[],r=0;r<o.length;r++){var a=o[r];(s=i[a.id]).refs--,e.push(s)}t&&m(u(t,n),n);for(r=0;r<e.length;r++){var s;if(0===(s=e[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var v,y=(v=[],function(t,n){return v[t]=n,v.filter(Boolean).join("\n")});function x(t,n,o,e){var r=o?"":e.css;if(t.styleSheet)t.styleSheet.cssText=y(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},4:function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=n.protocol+"//"+n.host,e=o+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var r,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},461:function(t,n,o){var e=o(462);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(3)(e,r);e.locals&&(t.exports=e.locals)},462:function(t,n,o){(t.exports=o(2)(!1)).push([t.i,".custom-notification {\n  position: fixed;\n  display: block;\n  z-index: 9999;\n  opacity: 0;\n  will-change: transform, opacity;\n  -webkit-transition: transform 600ms cubic-bezier(0.65, -0.15, 0.47, 1.16), opacity 800ms ease-in-out;\n  -moz-transition: transform 600ms cubic-bezier(0.65, -0.15, 0.47, 1.16), opacity 800ms ease-in-out;\n  -o-transition: transform 600ms cubic-bezier(0.65, -0.15, 0.47, 1.16), opacity 800ms ease-in-out;\n  transition: transform 600ms cubic-bezier(0.65, -0.15, 0.47, 1.16), opacity 800ms ease-in-out; }\n  .custom-notification .content-wrapper {\n    min-height: 30px;\n    position: relative;\n    box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.25), 3px 4px 15px rgba(0, 0, 0, 0.5);\n    padding: 8px 13px;\n    color: #fff; }\n    .custom-notification .content-wrapper.clickable {\n      cursor: pointer; }\n    .custom-notification .content-wrapper .notification-title {\n      font-weight: 500;\n      padding-right: 10px;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      display: inline-block; }\n    .custom-notification .content-wrapper .notification-message {\n      font-size: 12px;\n      padding-right: 10px;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none; }\n  .custom-notification .dismiss-btn {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    cursor: pointer;\n    will-change: top, right; }\n    .custom-notification .dismiss-btn svg {\n      fill: #fff;\n      position: relative;\n      display: block;\n      width: 16px;\n      height: 16px; }\n  .custom-notification.style-slide-in {\n    width: 300px; }\n    .custom-notification.style-slide-in.bottom-left {\n      -webkit-transform: translateX(-350px);\n      -moz-transform: translateX(-350px);\n      -o-transform: translateX(-350px);\n      -ms-transform: translateX(-350px);\n      transform: translateX(-350px);\n      left: 20px;\n      bottom: 15px; }\n    .custom-notification.style-slide-in.bottom-right {\n      -webkit-transform: translateX(350px);\n      -moz-transform: translateX(350px);\n      -o-transform: translateX(350px);\n      -ms-transform: translateX(350px);\n      transform: translateX(350px);\n      right: 20px;\n      bottom: 15px; }\n    .custom-notification.style-slide-in.top-left {\n      -webkit-transform: translateX(-350px);\n      -moz-transform: translateX(-350px);\n      -o-transform: translateX(-350px);\n      -ms-transform: translateX(-350px);\n      transform: translateX(-350px);\n      left: 20px;\n      top: 15px; }\n    .custom-notification.style-slide-in.top-right {\n      -webkit-transform: translateX(350px);\n      -moz-transform: translateX(350px);\n      -o-transform: translateX(350px);\n      -ms-transform: translateX(350px);\n      transform: translateX(350px);\n      right: 20px;\n      top: 15px; }\n    .custom-notification.style-slide-in.open {\n      -webkit-transform: translateX(0);\n      -moz-transform: translateX(0);\n      -o-transform: translateX(0);\n      -ms-transform: translateX(0);\n      transform: translateX(0);\n      opacity: 1; }\n    .custom-notification.style-slide-in .content-wrapper {\n      border-radius: 4px;\n      will-change: box-shadow, top, left;\n      -webkit-transition: box-shadow 80ms linear, top 100ms ease, left 100ms ease, background-color 200ms ease;\n      -moz-transition: box-shadow 80ms linear, top 100ms ease, left 100ms ease, background-color 200ms ease;\n      -o-transition: box-shadow 80ms linear, top 100ms ease, left 100ms ease, background-color 200ms ease;\n      transition: box-shadow 80ms linear, top 100ms ease, left 100ms ease, background-color 200ms ease; }\n      .custom-notification.style-slide-in .content-wrapper.clickable:active {\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 1px 2px 11px rgba(0, 0, 0, 0.5);\n        top: 1px;\n        left: 1px; }\n        .custom-notification.style-slide-in .content-wrapper.clickable:active + .dismiss-btn {\n          top: 9px;\n          right: 7px; }\n      .custom-notification.style-slide-in .content-wrapper .actions-wrapper {\n        margin-top: 10px; }\n        .custom-notification.style-slide-in .content-wrapper .actions-wrapper .action-wrapper {\n          text-align: center; }\n          .custom-notification.style-slide-in .content-wrapper .actions-wrapper .action-wrapper .notification-action {\n            background-color: transparent;\n            width: 100%;\n            border: 1px solid #fff;\n            border-radius: 3px;\n            will-change: background-color, color;\n            -webkit-transition: background-color 200ms, color 200ms;\n            -moz-transition: background-color 200ms, color 200ms;\n            -o-transition: background-color 200ms, color 200ms;\n            transition: background-color 200ms, color 200ms;\n            color: #fff; }\n            .custom-notification.style-slide-in .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover {\n              background-color: #fff; }\n            .custom-notification.style-slide-in .content-wrapper .actions-wrapper .action-wrapper .notification-action:focus {\n              box-shadow: none; }\n        .custom-notification.style-slide-in .content-wrapper .actions-wrapper.partitioned .action-wrapper {\n          display: inline-block;\n          width: 50%; }\n          .custom-notification.style-slide-in .content-wrapper .actions-wrapper.partitioned .action-wrapper:first-child {\n            padding-right: 2px; }\n          .custom-notification.style-slide-in .content-wrapper .actions-wrapper.partitioned .action-wrapper:last-child {\n            padding-left: 2px; }\n  .custom-notification.style-bar {\n    width: 100vw;\n    left: 0;\n    right: 0; }\n    .custom-notification.style-bar.top {\n      top: 0;\n      -webkit-transform: translateY(-150%);\n      -moz-transform: translateY(-150%);\n      -o-transform: translateY(-150%);\n      -ms-transform: translateY(-150%);\n      transform: translateY(-150%); }\n    .custom-notification.style-bar.bottom {\n      bottom: 0;\n      -webkit-transform: translateY(150%);\n      -moz-transform: translateY(150%);\n      -o-transform: translateY(150%);\n      -ms-transform: translateY(150%);\n      transform: translateY(150%); }\n    .custom-notification.style-bar.open {\n      -webkit-transform: translateY(0);\n      -moz-transform: translateY(0);\n      -o-transform: translateY(0);\n      -ms-transform: translateY(0);\n      transform: translateY(0);\n      opacity: 1; }\n  .custom-notification.theme-purple .content-wrapper {\n    background-color: #4F2C99; }\n    .custom-notification.theme-purple .content-wrapper.clickable:hover {\n      background-color: #5f35b9; }\n    .custom-notification.theme-purple .content-wrapper.clickable:active {\n      background-color: #4F2C99; }\n    .custom-notification.theme-purple .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover {\n      color: #4F2C99; }\n  .custom-notification.theme-purple .dismiss-btn svg:hover {\n    fill: #000; }\n  .custom-notification.theme-inverted .content-wrapper {\n    background-color: #000; }\n    .custom-notification.theme-inverted .content-wrapper.clickable:hover {\n      background-color: #141414; }\n    .custom-notification.theme-inverted .content-wrapper.clickable:active {\n      background-color: #000; }\n    .custom-notification.theme-inverted .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover {\n      color: #000; }\n  .custom-notification.theme-inverted .dismiss-btn svg:hover {\n    fill: #868686; }\n  .custom-notification.theme-primary .content-wrapper {\n    background-color: #007AC7; }\n    .custom-notification.theme-primary .content-wrapper.clickable:hover {\n      background-color: #0093f0; }\n    .custom-notification.theme-primary .content-wrapper.clickable:active {\n      background-color: #007AC7; }\n    .custom-notification.theme-primary .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover {\n      color: #007AC7; }\n  .custom-notification.theme-primary .dismiss-btn svg:hover {\n    fill: #000; }\n  .custom-notification.theme-success .content-wrapper {\n    background-color: #379D00; }\n    .custom-notification.theme-success .content-wrapper.clickable:hover {\n      background-color: #45c600; }\n    .custom-notification.theme-success .content-wrapper.clickable:active {\n      background-color: #379D00; }\n    .custom-notification.theme-success .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover {\n      color: #379D00; }\n  .custom-notification.theme-success .dismiss-btn svg:hover {\n    fill: #000; }\n  .custom-notification.theme-danger .content-wrapper {\n    background-color: #D81A1A; }\n    .custom-notification.theme-danger .content-wrapper.clickable:hover {\n      background-color: #e73434; }\n    .custom-notification.theme-danger .content-wrapper.clickable:active {\n      background-color: #D81A1A; }\n    .custom-notification.theme-danger .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover {\n      color: #D81A1A; }\n  .custom-notification.theme-danger .dismiss-btn svg:hover {\n    fill: #000; }\n  .custom-notification.theme-warning .content-wrapper {\n    background-color: #FFB400; }\n    .custom-notification.theme-warning .content-wrapper.clickable:hover {\n      background-color: #ffc029; }\n    .custom-notification.theme-warning .content-wrapper.clickable:active {\n      background-color: #FFB400; }\n    .custom-notification.theme-warning .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover {\n      color: #FFB400; }\n  .custom-notification.theme-warning .dismiss-btn svg:hover {\n    fill: #fff; }\n  .custom-notification.theme-warning .content-wrapper {\n    color: #000; }\n    .custom-notification.theme-warning .content-wrapper .actions-wrapper .action-wrapper .notification-action {\n      border-color: #000;\n      color: #000; }\n      .custom-notification.theme-warning .content-wrapper .actions-wrapper .action-wrapper .notification-action:hover {\n        border-color: #fff;\n        color: #000; }\n  .custom-notification.theme-warning .dismiss-btn svg {\n    fill: #000; }\n\n@media only screen and (max-width: 420px) {\n  .custom-notification.style-slide-in {\n    opacity: 0;\n    width: 90%;\n    right: auto; }\n    .custom-notification.style-slide-in.bottom-left, .custom-notification.style-slide-in.bottom-right, .custom-notification.style-slide-in.top-right, .custom-notification.style-slide-in.top-left {\n      left: 50%; }\n    .custom-notification.style-slide-in.bottom-left, .custom-notification.style-slide-in.bottom-right {\n      -webkit-transform: translate(-50%, 150%);\n      -moz-transform: translate(-50%, 150%);\n      -o-transform: translate(-50%, 150%);\n      -ms-transform: translate(-50%, 150%);\n      transform: translate(-50%, 150%);\n      bottom: 15px;\n      top: auto; }\n    .custom-notification.style-slide-in.top-right, .custom-notification.style-slide-in.top-left {\n      -webkit-transform: translate(-50%, -150%);\n      -moz-transform: translate(-50%, -150%);\n      -o-transform: translate(-50%, -150%);\n      -ms-transform: translate(-50%, -150%);\n      transform: translate(-50%, -150%);\n      bottom: auto;\n      top: 15px; }\n    .custom-notification.style-slide-in.open {\n      -webkit-transform: translate(-50%, 0);\n      -moz-transform: translate(-50%, 0);\n      -o-transform: translate(-50%, 0);\n      -ms-transform: translate(-50%, 0);\n      transform: translate(-50%, 0);\n      opacity: 1; } }\n",""])},519:function(t,n,o){"use strict";o.r(n);var e=o(6),r=o(0),i=(o(461),r.createElement("svg",{name:"times",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},r.createElement("path",{d:"M217.5 256l137.2-137.2c4.7-4.7 4.7-12.3 0-17l-8.5-8.5c-4.7-4.7-12.3-4.7-17 0L192 230.5 54.8 93.4c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17L166.5 256 29.4 393.2c-4.7 4.7-4.7 12.3 0 17l8.5 8.5c4.7 4.7 12.3 4.7 17 0L192 281.5l137.2 137.2c4.7 4.7 12.3 4.7 17 0l8.5-8.5c4.7-4.7 4.7-12.3 0-17L217.5 256z"}))),a=function(t){function n(n){var o=t.call(this,n)||this;return o.timerRef=null,o.defaultTimeout=5e3,o.dismiss=o.dismiss.bind(o),o}return e.b(n,t),n.prototype.componentDidMount=function(){this.props.toggle&&!this.props.persist&&this.startTimer()},n.prototype.componentDidUpdate=function(t){t.toggle!==this.props.toggle&&(this.props.toggle&&!this.props.persist?this.startTimer():this.clearTimer())},n.prototype.componentWillUnmount=function(){this.clearTimer()},n.prototype.render=function(){var t=this.getStyleClass(this.props.style);return r.createElement("div",{className:"custom-notification "+t+" "+this.getThemeClass(this.props.theme)+" "+this.getPositionClass(this.props.position,this.props.style)+(this.props.toggle?" open":"")+(this.props.className?" "+this.props.className:"")},r.createElement("div",{className:"content-wrapper"+(this.props.onClick?" clickable":""),onClick:this.props.onClick&&this.props.onClick},this.props.title&&"style-slide-in"===t&&r.createElement("div",{className:"notification-title"},this.props.title),this.props.message&&r.createElement("div",{className:"notification-message"},this.props.message),this.props.children&&this.props.children,"style-slide-in"===t&&this.props.actions&&this.props.actions.length&&this.props.actions.length<3&&r.createElement("div",{className:"actions-wrapper"+(2===this.props.actions.length?" partitioned":"")},this.props.actions.map(function(t,n){return r.createElement("div",{key:n,className:"action-wrapper"},r.createElement("button",{className:"btn btn-sm btn-secondary notification-action",onClick:t.action},t.text))}))),this.props.dismissable&&r.createElement("div",{className:"dismiss-btn",onClick:this.dismiss},i))},n.prototype.dismiss=function(){this.clearTimer(),this.props.onDismiss()},n.prototype.startTimer=function(){var t=this;this.clearTimer(),this.timerRef=window.setTimeout(function(){t.dismiss()},this.props.dismissTimeout||this.defaultTimeout)},n.prototype.clearTimer=function(){this.timerRef&&(clearTimeout(this.timerRef),this.timerRef=null)},n.prototype.getStyleClass=function(t){var n="style-";return t&&-1!==["slide-in","bar"].indexOf(t)?n+=t:n+="slide-in",n},n.prototype.getThemeClass=function(t){var n="theme-";return t&&-1!==["purple","primary","danger","success","warning","inverted"].indexOf(t)?n+=t:n+="purple",n},n.prototype.getPositionClass=function(t,n){var o;if(n&&-1!==["slide-in","bar"].indexOf(n))switch(n){case"slide-in":o=t&&-1!==["bottom-left","bottom-right","top-left","top-right"].indexOf(t)?t:"bottom-left";break;case"bar":o=t&&-1!==["top","bottom"].indexOf(t)?t:"top"}else o=t&&-1!==["bottom-left","bottom-right","top-left","top-right"].indexOf(t)?t:"bottom-left";return o},n}(r.Component);o.d(n,"Notification",function(){return a})},6:function(t,n,o){"use strict";o.d(n,"b",function(){return r}),o.d(n,"a",function(){return i});
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
var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)};function r(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}var i=function(){return(i=Object.assign||function(t){for(var n,o=1,e=arguments.length;o<e;o++)for(var r in n=arguments[o])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)}}})});