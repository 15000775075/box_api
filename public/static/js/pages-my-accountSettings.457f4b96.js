(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-accountSettings"],{"015b":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uPopup:n("bb8f").default,uLoading:n("40b2").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-popup",{attrs:{zoom:t.zoom,mode:"center",popup:!1,"z-index":t.uZIndex,length:t.width,"mask-close-able":t.maskCloseAble,"border-radius":t.borderRadius,"negative-top":t.negativeTop},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.popupClose.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-uni-view",{staticClass:"u-model"},[t.showTitle?n("v-uni-view",{staticClass:"u-model__title u-line-1",style:[t.titleStyle]},[t._v(t._s(t.title))]):t._e(),n("v-uni-view",{staticClass:"u-model__content"},[t.$slots.default||t.$slots.$default?n("v-uni-view",{style:[t.contentStyle]},[t._t("default")],2):n("v-uni-view",{staticClass:"u-model__content__message",style:[t.contentStyle]},[t._v(t._s(t.content))])],1),t.showCancelButton||t.showConfirmButton?n("v-uni-view",{staticClass:"u-model__footer u-border-top"},[t.showCancelButton?n("v-uni-view",{staticClass:"u-model__footer__button",style:[t.cancelBtnStyle],attrs:{"hover-stay-time":100,"hover-class":"u-model__btn--hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v(t._s(t.cancelText))]):t._e(),t.showConfirmButton||t.$slots["confirm-button"]?n("v-uni-view",{staticClass:"u-model__footer__button hairline-left",style:[t.confirmBtnStyle],attrs:{"hover-stay-time":100,"hover-class":t.asyncClose?"none":"u-model__btn--hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t.$slots["confirm-button"]?t._t("confirm-button"):[t.loading?n("u-loading",{attrs:{mode:"circle",color:t.confirmColor}}):[t._v(t._s(t.confirmText))]]],2):t._e()],1):t._e()],1)],1)],1)},a=[]},"25bd":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("5319");var o={data:function(){return{show:!1,isPhone:"",phone:""}},onShow:function(){this.getPhone()},methods:{getPhone:function(){if(11==uni.getStorageSync("userInfo").mobile.length){this.isPhone=!0;var t=uni.getStorageSync("userInfo").mobile;t=""+t;var e=t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2");this.phone=e}else this.isPhone=!1},changephone:function(){uni.navigateTo({url:"/pages/my/changePhone"})},bang:function(){this.isPhone?this.$tip.tip("手机号已绑定"):uni.navigateTo({url:"/pages/my/changePhone"})}}};e.default=o},"4b7f":function(t,e,n){var o=n("f6b8");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("1616f18e",o,!0,{sourceMap:!1,shadowMode:!1})},"7cde":function(t,e,n){"use strict";n.r(e);var o=n("a895"),i=n("979b");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("e33b");var r=n("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"5d8e8e3f",null,!1,o["a"],void 0);e["default"]=u.exports},8306:function(t,e,n){"use strict";n.r(e);var o=n("015b"),i=n("aea0");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("dccc");var r=n("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"6f45d284",null,!1,o["a"],void 0);e["default"]=u.exports},"977b":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var o={name:"u-modal",props:{value:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},title:{type:[String],default:"提示"},width:{type:[Number,String],default:600},content:{type:String,default:"内容"},showTitle:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!1},confirmText:{type:String,default:"确认"},cancelText:{type:String,default:"取消"},confirmColor:{type:String,default:"#2979ff"},cancelColor:{type:String,default:"#606266"},borderRadius:{type:[Number,String],default:16},titleStyle:{type:Object,default:function(){return{}}},contentStyle:{type:Object,default:function(){return{}}},cancelStyle:{type:Object,default:function(){return{}}},confirmStyle:{type:Object,default:function(){return{}}},zoom:{type:Boolean,default:!0},asyncClose:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!1},negativeTop:{type:[String,Number],default:0}},data:function(){return{loading:!1}},computed:{cancelBtnStyle:function(){return Object.assign({color:this.cancelColor},this.cancelStyle)},confirmBtnStyle:function(){return Object.assign({color:this.confirmColor},this.confirmStyle)},uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},watch:{value:function(t){!0===t&&(this.loading=!1)}},methods:{confirm:function(){this.asyncClose?this.loading=!0:this.$emit("input",!1),this.$emit("confirm")},cancel:function(){var t=this;this.$emit("cancel"),this.$emit("input",!1),setTimeout((function(){t.loading=!1}),300)},popupClose:function(){this.$emit("input",!1)},clearLoading:function(){this.loading=!1}}};e.default=o},"979b":function(t,e,n){"use strict";n.r(e);var o=n("25bd"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},a895:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uNavbar:n("133a").default,uIcon:n("4342").default,uModal:n("8306").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{title:"账号设置"}}),n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bang.apply(void 0,arguments)}}},[n("v-uni-view",[t._v("手机号")]),n("v-uni-view",{},[n("v-uni-text",{staticClass:"text"},[t._v(t._s(t.isPhone?t.phone:"未绑定"))]),n("u-icon",{attrs:{name:"arrow-right"}})],1)],1)],1),n("u-modal",{attrs:{content:"30天内只可换绑一次","confirm-color":"#01E0DB","show-cancel-button":!0},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.changephone.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},a=[]},aea0:function(t,e,n){"use strict";n.r(e);var o=n("977b"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},c1c3:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-5d8e8e3f]{background-color:#f4f4fc}body.?%PAGE?%[data-v-5d8e8e3f]{background-color:#f4f4fc}.box[data-v-5d8e8e3f]{padding:0 %?20?%;box-sizing:border-box}.list[data-v-5d8e8e3f]{background-color:#fff;margin:%?20?% auto;padding:%?34?% %?20?%;box-sizing:border-box;border-radius:%?10?%;display:flex;justify-content:space-between;align-items:center}.list .text[data-v-5d8e8e3f]{margin-right:%?10?%}",""]),t.exports=e},d8ad:function(t,e,n){var o=n("c1c3");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("f2705c18",o,!0,{sourceMap:!1,shadowMode:!1})},dccc:function(t,e,n){"use strict";var o=n("4b7f"),i=n.n(o);i.a},e33b:function(t,e,n){"use strict";var o=n("d8ad"),i=n.n(o);i.a},f6b8:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-model[data-v-6f45d284]{height:auto;overflow:hidden;font-size:%?32?%;background-color:#fff}.u-model__btn--hover[data-v-6f45d284]{background-color:#e6e6e6}.u-model__title[data-v-6f45d284]{padding-top:%?48?%;font-weight:500;text-align:center;color:#303133}.u-model__content__message[data-v-6f45d284]{padding:%?48?%;font-size:%?30?%;text-align:center;color:#606266}.u-model__footer[data-v-6f45d284]{display:flex;flex-direction:row}.u-model__footer__button[data-v-6f45d284]{flex:1;height:%?100?%;line-height:%?100?%;font-size:%?32?%;box-sizing:border-box;cursor:pointer;text-align:center;border-radius:%?4?%}',""]),t.exports=e}}]);