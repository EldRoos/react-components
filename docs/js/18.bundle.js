(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1075:function(e,o,t){"use strict";t.r(o);var n=t(36),d=t(0),r=t(1041),a=(t(788),function(e){return d.createElement("div",{className:"form-group custom-dropdown"+(e.className?" "+e.className:"")},d.createElement("div",{className:"input-field"+(e.error?" has-error":"")},e.label&&d.createElement("label",{className:"custom-label",htmlFor:e.name},e.label),e.native&&d.createElement("select",{className:"dropdown-input form-control",name:e.name,value:e.selectedValue?e.selectedValue.value:"",onChange:e.onChange},e.placeholder&&d.createElement("option",{key:"default",value:"DEFAULT"},e.placeholder),e.list.map(function(e){return d.createElement("option",{key:e.value,value:e.value},e.label)})),!e.native&&d.createElement(r.a,{name:e.name,placeholder:e.placeholder,value:e.selectedValue,onChange:e.onChange,options:e.list,isSearchable:void 0!==e.searchable&&e.searchable,isClearable:void 0!==e.clearable&&e.searchable,isMulti:e.multi,isDisabled:e.disabled,menuPlacement:"bottom",className:"custom-dropdown",classNamePrefix:"custom-dropdown"}),d.createElement("div",{className:"alert alert-danger"},e.error)))}),l=t(398),s=t(399).default,c=t(803),i=function(e){function o(o){var t=e.call(this,o)||this;return t.state={dropDownList1:[{value:"1",label:"1st item"},{value:"2",label:"2nd item"},{value:"3",label:"3rd item"}],dropDownSelected1:null,dropDownList2:[{value:"1",label:"1st"},{value:"2",label:"2nd"},{value:"3",label:"3rd"},{value:"4",label:"4th"},{value:"5",label:"5th"}],dropDownSelected2:null,dropDownList3:[{value:"1",label:"1st item"},{value:"2",label:"2nd item"},{value:"3",label:"3rd item"}],dropDownSelected3:null},t}return n.b(o,e),o.prototype.render=function(){var e=this,o=Object(l.a)(this.props.location.search,"mode");return d.createElement("div",{className:"route-template "+("dl"===o||"DL"===o?"brief":"")},d.createElement("div",{className:"info-holder"},d.createElement("div",{className:"info"},d.createElement("div",{className:"md-file"},d.createElement(s,{innerHTML:!0},c))),d.createElement("div",{className:"info"},d.createElement("h2",null,"Output"),d.createElement("p",null,"Here is the basic one:"),d.createElement("div",{className:"result"},d.createElement(a,{selectedValue:this.state.dropDownSelected1,list:this.state.dropDownList1,label:"Dropdown label",onChange:function(o){e.setState({dropDownSelected1:o})},placeholder:"Single option"})),d.createElement("p",null,"Here is the multi select one:"),d.createElement("div",{className:"result"},d.createElement(a,{selectedValue:this.state.dropDownSelected2,list:this.state.dropDownList2,onChange:function(o){e.setState({dropDownSelected2:o})},searchable:!0,placeholder:"Multi option",multi:!0,clearable:!0})),d.createElement("p",null,"Here is the native one:"),d.createElement("div",{className:"result"},d.createElement(a,{selectedValue:this.state.dropDownSelected3,list:this.state.dropDownList3,onChange:function(o){e.setState({dropDownSelected3:o})},placeholder:"Native option",native:!0})))))},o}(d.Component);o.default=i},398:function(e,o,t){"use strict";function n(e,o){var t=RegExp("[?&]"+o+"=([^&]*)").exec(e);return t&&decodeURIComponent(t[1].replace(/\+/g," "))}t.d(o,"a",function(){return n})},788:function(e,o,t){var n=t(789);"string"==typeof n&&(n=[[e.i,n,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};t(58)(n,d);n.locals&&(e.exports=n.locals)},789:function(e,o,t){(e.exports=t(54)(!1)).push([e.i,".form-group.custom-dropdown {\n  margin: 0;\n  min-width: 200px; }\n  .form-group.custom-dropdown > .input-field > .custom-dropdown > .custom-dropdown__menu {\n    position: absolute;\n    bottom: auto; }\n  .form-group.custom-dropdown > .input-field > .custom-dropdown:not(.custom-dropdown--is-disabled) > .custom-dropdown__control {\n    -webkit-transition: border-color 200ms;\n    -moz-transition: border-color 200ms;\n    -o-transition: border-color 200ms;\n    transition: border-color 200ms;\n    height: 42px;\n    min-width: 200px;\n    background-color: #fff;\n    cursor: pointer; }\n    .form-group.custom-dropdown > .input-field > .custom-dropdown:not(.custom-dropdown--is-disabled) > .custom-dropdown__control > .custom-dropdown__value-container {\n      height: 42px; }\n      .form-group.custom-dropdown > .input-field > .custom-dropdown:not(.custom-dropdown--is-disabled) > .custom-dropdown__control > .custom-dropdown__value-container .custom-dropdown__input {\n        background: transparent; }\n      .form-group.custom-dropdown > .input-field > .custom-dropdown:not(.custom-dropdown--is-disabled) > .custom-dropdown__control > .custom-dropdown__value-container .custom-dropdown__placeholder,\n      .form-group.custom-dropdown > .input-field > .custom-dropdown:not(.custom-dropdown--is-disabled) > .custom-dropdown__control > .custom-dropdown__value-container .custom-dropdown__single-value {\n        color: #000; }\n    .form-group.custom-dropdown > .input-field > .custom-dropdown:not(.custom-dropdown--is-disabled) > .custom-dropdown__control > .custom-dropdown__indicators .custom-dropdown__indicator-separator {\n      display: none; }\n    .form-group.custom-dropdown > .input-field > .custom-dropdown:not(.custom-dropdown--is-disabled) > .custom-dropdown__control > .custom-dropdown__indicators .custom-dropdown__indicator > svg {\n      color: #41B0EE; }\n  .form-group.custom-dropdown > .input-field > label.custom-label:not(.form-check-label):not(.custom-checkbox):not(.custom-radio):not(.custom-control-label) {\n    display: block;\n    margin-bottom: 4px;\n    line-height: 1;\n    font-weight: normal;\n    font-size: 12px; }\n  .form-group.custom-dropdown > .input-field > .alert {\n    opacity: 0;\n    margin: 0;\n    padding: 0;\n    background: transparent;\n    max-height: 0;\n    overflow: hidden;\n    -webkit-transition: opacity 200ms, padding 200ms, max-height 400ms;\n    -moz-transition: opacity 200ms, padding 200ms, max-height 400ms;\n    -o-transition: opacity 200ms, padding 200ms, max-height 400ms;\n    transition: opacity 200ms, padding 200ms, max-height 400ms; }\n    .form-group.custom-dropdown > .input-field > .alert.alert-danger {\n      color: #F03529; }\n  .form-group.custom-dropdown > .input-field > .dropdown-input {\n    height: 42px; }\n  .form-group.custom-dropdown > .input-field.has-error > .custom-dropdown > .custom-dropdown__control {\n    border: 1px solid #F03529; }\n    .form-group.custom-dropdown > .input-field.has-error > .custom-dropdown > .custom-dropdown__control > .custom-dropdown__placeholder {\n      color: #F03529; }\n  .form-group.custom-dropdown > .input-field.has-error > .dropdown-input {\n    border: 1px solid #F03529; }\n  .form-group.custom-dropdown > .input-field.has-error > .alert {\n    opacity: 1;\n    padding-top: 2px;\n    max-height: 100px; }\n",""])},803:function(e,o){e.exports='<hr>\n<p>title: Dropdown\ncomponentid: component-dropdown\nvariantid: default</p>\n<h2 id="guid-dropdown-guid-default-component-react">guid: &#39;dropdown-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Dropdown Component\nComponent: &quot;DropDown&quot;\nSelector: &quot;&lt;DropDown/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/DropDown&quot;\nType: Form Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component is based on <code>react-select</code>. Supports customization and configurations. The component name is <code>DropDown</code> and the selector is <code>&lt;DropDown/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;DropDown\n    selectedValue={this.state.dropDownSelected}\n    list={this.state.dropDownList}\n    onChange={(selectedItem: DropDownItem) =&gt; { this.setState({ dropDownSelected: selectedItem }) }}\n    placeholder=&quot;dropdown placeholder&quot;\n/&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Descrition</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>list</td>\n<td><code>Array&lt;DropdownItem&gt;</code> <sup>1</sup></td>\n<td>an array of DropdownItem</td>\n</tr>\n<tr>\n<td>selectedValue</td>\n<td><code>DropdownItem</code></td>\n<td>selected object from list</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td><code>(event: any) =&gt; void</code></td>\n<td>on change event</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>custom class</td>\n</tr>\n<tr>\n<td>native?</td>\n<td><code>boolean</code></td>\n<td>it renders the native dropdown, default false</td>\n</tr>\n<tr>\n<td>searchable?</td>\n<td><code>boolean</code></td>\n<td>works only with non-native ver</td>\n</tr>\n<tr>\n<td>multi?</td>\n<td><code>boolean</code></td>\n<td>enables searching, works only with non-native</td>\n</tr>\n<tr>\n<td>clearable?</td>\n<td><code>boolean</code></td>\n<td>enables clearning the value, work only with non-native</td>\n</tr>\n<tr>\n<td>error?</td>\n<td><code>string</code></td>\n<td>error message (if any)</td>\n</tr>\n<tr>\n<td>disabled?</td>\n<td><code>boolean</code></td>\n<td>disabled status</td>\n</tr>\n</tbody></table>\n<h2 id="reference">Reference</h2>\n<p>This component is a wrapper around <a href="https://github.com/JedWatson/react-select">react-select</a></p>\n<h2 id="footnote">Footnote</h2>\n<ol>\n<li><code>list</code> items has an exported interface named <code>DropdownItem</code><pre><code class="language-javascript">{\n   label = string,\n   value = any\n}</code></pre>\n</li>\n</ol>\n'}}]);