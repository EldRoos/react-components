(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1018:function(t,e,n){var a=n(1019);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(58)(a,o);a.locals&&(t.exports=a.locals)},1019:function(t,e,n){(t.exports=n(54)(!1)).push([t.i,".custom-tabs .nav-tabs .nav-item:not(.active) .nav-link {\n  color: #41B0EE;\n  cursor: pointer; }\n\n.custom-tabs .nav-tabs .nav-item.disabled .nav-link {\n  cursor: default;\n  color: #868686; }\n",""])},1020:function(t,e){t.exports='<hr>\n<p>title: Tabs\ncomponentid: component-tab\nvariantid: default</p>\n<h2 id="guid-tab-guid-default-component-react">guid: &#39;tab-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Tabs Component\nComponent: &quot;Tabs&quot;\nSelector: &quot;&lt;Tabs/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Tabs&quot;\nType: Form Component</code></pre>\n<h2 id="element-information">Element Information</h2>\n<p>This Angular component is based on SEB Bootstrap style. Supports customization and configurations. The module name of this component is <code>Tabs</code> and the selector is <code>&lt;Tabs/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Tabs\n      list={tabsListObj}\n      activeTab={index}\n      onClick={clickHandler}\n/&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Descrition</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>list</td>\n<td><code>Array&lt;TabsListItem&gt;</code><sup>1</sup></td>\n<td>List of tabs</td>\n</tr>\n<tr>\n<td>activeTab</td>\n<td><code>number</code></td>\n<td>Index of the the current active tab</td>\n</tr>\n<tr>\n<td>onClick?</td>\n<td><code>(index: number)=&gt;void</code></td>\n<td>Tab click handler, passes the index of the clicked tab</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Custom class can be passed here</td>\n</tr>\n</tbody></table>\n<h2 id="footnote">Footnote</h2>\n<ol>\n<li><code>list</code> has an exported interface named <code>TabsListItem</code><pre><code class="language-typescript">{\n   text: string;\n   disabled?: boolean;\n}</code></pre>\n</li>\n</ol>\n'},1051:function(t,e,n){"use strict";n.r(e);var a=n(36),o=n(0),s=(n(1018),o.memo(function(t){return o.createElement("div",{className:"custom-tabs"+(t.className?" "+t.className:"")},o.createElement("ul",{className:"nav nav-tabs"},t.list.map(function(e,n){return o.createElement("li",{key:n,className:"nav-item"+(n===t.activeTab?" active":"")+(e.disabled?" disabled":"")},o.createElement("a",{className:"nav-link"+(n===t.activeTab?" active":"")+(e.disabled?" disabled":""),onClick:function(){t.onClick&&!e.disabled&&t.onClick(n)}},e.text))})))})),i=n(398),c=n(399).default,r=n(1020),d=function(t){function e(e){var n=t.call(this,e)||this;return n.state={tabsList:[{text:"First"},{text:"Second"},{text:"Third"},{text:"Fourth",disabled:!0}],activeTab:0},n.onClick=n.onClick.bind(n),n}return a.b(e,t),e.prototype.onClick=function(t){this.setState({activeTab:t})},e.prototype.render=function(){var t=Object(i.a)(this.props.location.search,"mode");return o.createElement("div",{className:"route-template "+("dl"===t||"DL"===t?"brief":"")},o.createElement("div",{className:"info-holder"},o.createElement("div",{className:"info"},o.createElement("div",{className:"md-file"},o.createElement(c,{innerHTML:!0},r))),o.createElement("div",{className:"info"},o.createElement("h2",null,"Output"),o.createElement("p",null,"Here are sample outputs"),o.createElement("div",{className:"result wide"},o.createElement(s,{list:this.state.tabsList,activeTab:this.state.activeTab,onClick:this.onClick})))))},e}(o.Component);e.default=d},398:function(t,e,n){"use strict";function a(t,e){var n=RegExp("[?&]"+e+"=([^&]*)").exec(t);return n&&decodeURIComponent(n[1].replace(/\+/g," "))}n.d(e,"a",function(){return a})}}]);