(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-cancel"],{"015b":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uPopup:n("bb8f").default,uLoading:n("40b2").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-popup",{attrs:{zoom:t.zoom,mode:"center",popup:!1,"z-index":t.uZIndex,length:t.width,"mask-close-able":t.maskCloseAble,"border-radius":t.borderRadius,"negative-top":t.negativeTop},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.popupClose.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-uni-view",{staticClass:"u-model"},[t.showTitle?n("v-uni-view",{staticClass:"u-model__title u-line-1",style:[t.titleStyle]},[t._v(t._s(t.title))]):t._e(),n("v-uni-view",{staticClass:"u-model__content"},[t.$slots.default||t.$slots.$default?n("v-uni-view",{style:[t.contentStyle]},[t._t("default")],2):n("v-uni-view",{staticClass:"u-model__content__message",style:[t.contentStyle]},[t._v(t._s(t.content))])],1),t.showCancelButton||t.showConfirmButton?n("v-uni-view",{staticClass:"u-model__footer u-border-top"},[t.showCancelButton?n("v-uni-view",{staticClass:"u-model__footer__button",style:[t.cancelBtnStyle],attrs:{"hover-stay-time":100,"hover-class":"u-model__btn--hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v(t._s(t.cancelText))]):t._e(),t.showConfirmButton||t.$slots["confirm-button"]?n("v-uni-view",{staticClass:"u-model__footer__button hairline-left",style:[t.confirmBtnStyle],attrs:{"hover-stay-time":100,"hover-class":t.asyncClose?"none":"u-model__btn--hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t.$slots["confirm-button"]?t._t("confirm-button"):[t.loading?n("u-loading",{attrs:{mode:"circle",color:t.confirmColor}}):[t._v(t._s(t.confirmText))]]],2):t._e()],1):t._e()],1)],1)],1)},a=[]},"1b14":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("14d9"),n("d81d");var i={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var t={};return this.elActiveColor&&this.value&&!this.isDisabled&&(t.borderColor=this.elActiveColor,t.backgroundColor=this.elActiveColor),t.width=this.$u.addUnit(this.checkboxSize),t.height=this.$u.addUnit(this.checkboxSize),t},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var t=[];return t.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&t.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled--checked"),t.join(" ")},checkboxStyle:function(){var t={};return this.parent&&this.parent.width&&(t.width=this.parent.width,t.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(t.width="100%",t.flex="0 0 100%"),t}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var t=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){t.parent&&t.parent.emitEvent&&t.parent.emitEvent()}),80)},setValue:function(){var t=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(e){e.value&&t++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&t>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};e.default=i},"474a":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uNavbar:n("133a").default,uCheckbox:n("953e").default,uModal:n("8306").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{title:"账号注销"}}),n("v-uni-view",{staticClass:"box"},[n("v-uni-rich-text",{attrs:{nodes:t.data}})],1),n("v-uni-view",{staticClass:"gao"}),n("v-uni-view",{staticClass:"btm"},[n("u-checkbox",{attrs:{"label-disabled":!0,"active-color":"#00DAD9",shape:"circle"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("我已知晓注销行为不可恢复，切自愿放弃所有")]),n("v-uni-view",{staticClass:"btns n-flex-row n-justify-between"},[n("v-uni-button",{staticClass:"hui",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.zhuxiao.apply(void 0,arguments)}}},[t._v("继续注销")]),n("v-uni-button",{staticClass:"lan",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("暂不注销")])],1)],1),n("u-modal",{attrs:{"confirm-color":"#00DAD9","confirm-text":"确认注销","show-cancel-button":!0,content:"账号一经注销无法挽回! 清谨慎操作!"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},a=[]},"4b5b":function(t,e,n){"use strict";n.r(e);var i=n("1b14"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"4b7f":function(t,e,n){var i=n("f6b8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("1616f18e",i,!0,{sourceMap:!1,shadowMode:!1})},"5926d":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("4342").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-checkbox",style:[t.checkboxStyle]},[n("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[t.iconClass],style:[t.iconStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggle.apply(void 0,arguments)}}},[n("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:t.checkboxIconSize,color:t.iconColor}})],1),n("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:t.$u.addUnit(t.labelSize)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLabel.apply(void 0,arguments)}}},[t._t("default")],2)],1)},a=[]},"62da":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-checkbox[data-v-7e6e0538]{display:inline-flex;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-7e6e0538]{color:#606266;flex:none;display:-webkit-flex;display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-7e6e0538]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-7e6e0538]{border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-7e6e0538]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-7e6e0538]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-7e6e0538]{color:#c8c9cc!important}.u-checkbox__label[data-v-7e6e0538]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-7e6e0538]{color:#c8c9cc}',""]),t.exports=e},8306:function(t,e,n){"use strict";n.r(e);var i=n("015b"),o=n("aea0");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("dccc");var r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"6f45d284",null,!1,i["a"],void 0);e["default"]=c.exports},"8f26":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{data:"注销",checked:!1,show:!1}},methods:{zhuxiao:function(){this.checked?this.show=!0:this.$tip.tip("请勾选且同意注销")},back:function(){uni.navigateBack()}}};e.default=i},"918c":function(t,e,n){"use strict";var i=n("c64c"),o=n.n(i);o.a},"953e":function(t,e,n){"use strict";n.r(e);var i=n("5926d"),o=n("4b5b");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c2ef");var r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"7e6e0538",null,!1,i["a"],void 0);e["default"]=c.exports},"977b":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"u-modal",props:{value:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},title:{type:[String],default:"提示"},width:{type:[Number,String],default:600},content:{type:String,default:"内容"},showTitle:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!1},confirmText:{type:String,default:"确认"},cancelText:{type:String,default:"取消"},confirmColor:{type:String,default:"#2979ff"},cancelColor:{type:String,default:"#606266"},borderRadius:{type:[Number,String],default:16},titleStyle:{type:Object,default:function(){return{}}},contentStyle:{type:Object,default:function(){return{}}},cancelStyle:{type:Object,default:function(){return{}}},confirmStyle:{type:Object,default:function(){return{}}},zoom:{type:Boolean,default:!0},asyncClose:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!1},negativeTop:{type:[String,Number],default:0}},data:function(){return{loading:!1}},computed:{cancelBtnStyle:function(){return Object.assign({color:this.cancelColor},this.cancelStyle)},confirmBtnStyle:function(){return Object.assign({color:this.confirmColor},this.confirmStyle)},uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},watch:{value:function(t){!0===t&&(this.loading=!1)}},methods:{confirm:function(){this.asyncClose?this.loading=!0:this.$emit("input",!1),this.$emit("confirm")},cancel:function(){var t=this;this.$emit("cancel"),this.$emit("input",!1),setTimeout((function(){t.loading=!1}),300)},popupClose:function(){this.$emit("input",!1)},clearLoading:function(){this.loading=!1}}};e.default=i},"9d6d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".box[data-v-4bf5c941]{padding:%?20?%;box-sizing:border-box}.gao[data-v-4bf5c941]{height:%?250?%}.btm[data-v-4bf5c941]{position:fixed;left:0;bottom:0;width:%?750?%;padding:%?20?%;background-color:#fff;box-sizing:border-box}.btns uni-button[data-v-4bf5c941]{width:45%;color:#fff;margin-top:%?20?%}.hui[data-v-4bf5c941]{background-color:#e6e6e6}.lan[data-v-4bf5c941]{background-color:#00dad9}",""]),t.exports=e},a4a0:function(t,e,n){"use strict";n.r(e);var i=n("8f26"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},aea0:function(t,e,n){"use strict";n.r(e);var i=n("977b"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},c2ef:function(t,e,n){"use strict";var i=n("e1c2"),o=n.n(i);o.a},c64c:function(t,e,n){var i=n("9d6d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("65a9f172",i,!0,{sourceMap:!1,shadowMode:!1})},c8fd:function(t,e,n){"use strict";n.r(e);var i=n("474a"),o=n("a4a0");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("918c");var r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"4bf5c941",null,!1,i["a"],void 0);e["default"]=c.exports},dccc:function(t,e,n){"use strict";var i=n("4b7f"),o=n.n(i);o.a},e1c2:function(t,e,n){var i=n("62da");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("5acb5517",i,!0,{sourceMap:!1,shadowMode:!1})},f6b8:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-model[data-v-6f45d284]{height:auto;overflow:hidden;font-size:%?32?%;background-color:#fff}.u-model__btn--hover[data-v-6f45d284]{background-color:#e6e6e6}.u-model__title[data-v-6f45d284]{padding-top:%?48?%;font-weight:500;text-align:center;color:#303133}.u-model__content__message[data-v-6f45d284]{padding:%?48?%;font-size:%?30?%;text-align:center;color:#606266}.u-model__footer[data-v-6f45d284]{display:flex;flex-direction:row}.u-model__footer__button[data-v-6f45d284]{flex:1;height:%?100?%;line-height:%?100?%;font-size:%?32?%;box-sizing:border-box;cursor:pointer;text-align:center;border-radius:%?4?%}',""]),t.exports=e}}]);