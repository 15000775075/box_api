(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cangku-duihuan"],{"015b":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uPopup:n("bb8f").default,uLoading:n("40b2").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-popup",{attrs:{zoom:t.zoom,mode:"center",popup:!1,"z-index":t.uZIndex,length:t.width,"mask-close-able":t.maskCloseAble,"border-radius":t.borderRadius,"negative-top":t.negativeTop},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.popupClose.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-uni-view",{staticClass:"u-model"},[t.showTitle?n("v-uni-view",{staticClass:"u-model__title u-line-1",style:[t.titleStyle]},[t._v(t._s(t.title))]):t._e(),n("v-uni-view",{staticClass:"u-model__content"},[t.$slots.default||t.$slots.$default?n("v-uni-view",{style:[t.contentStyle]},[t._t("default")],2):n("v-uni-view",{staticClass:"u-model__content__message",style:[t.contentStyle]},[t._v(t._s(t.content))])],1),t.showCancelButton||t.showConfirmButton?n("v-uni-view",{staticClass:"u-model__footer u-border-top"},[t.showCancelButton?n("v-uni-view",{staticClass:"u-model__footer__button",style:[t.cancelBtnStyle],attrs:{"hover-stay-time":100,"hover-class":"u-model__btn--hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v(t._s(t.cancelText))]):t._e(),t.showConfirmButton||t.$slots["confirm-button"]?n("v-uni-view",{staticClass:"u-model__footer__button hairline-left",style:[t.confirmBtnStyle],attrs:{"hover-stay-time":100,"hover-class":t.asyncClose?"none":"u-model__btn--hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t.$slots["confirm-button"]?t._t("confirm-button"):[t.loading?n("u-loading",{attrs:{mode:"circle",color:t.confirmColor}}):[t._v(t._s(t.confirmText))]]],2):t._e()],1):t._e()],1)],1)],1)},i=[]},"288b":function(t,e,n){"use strict";n.r(e);var o=n("d9a6"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"4b7f":function(t,e,n){var o=n("f6b8");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("1616f18e",o,!0,{sourceMap:!1,shadowMode:!1})},8306:function(t,e,n){"use strict";n.r(e);var o=n("015b"),a=n("aea0");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("dccc");var d=n("f0c5"),s=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"6f45d284",null,!1,o["a"],void 0);e["default"]=s.exports},"8bd1":function(t,e,n){"use strict";n.r(e);var o=n("d9b8"),a=n("288b");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("c787");var d=n("f0c5"),s=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"1db6a7f8",null,!1,o["a"],void 0);e["default"]=s.exports},"977b":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var o={name:"u-modal",props:{value:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:""},title:{type:[String],default:"提示"},width:{type:[Number,String],default:600},content:{type:String,default:"内容"},showTitle:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!1},confirmText:{type:String,default:"确认"},cancelText:{type:String,default:"取消"},confirmColor:{type:String,default:"#2979ff"},cancelColor:{type:String,default:"#606266"},borderRadius:{type:[Number,String],default:16},titleStyle:{type:Object,default:function(){return{}}},contentStyle:{type:Object,default:function(){return{}}},cancelStyle:{type:Object,default:function(){return{}}},confirmStyle:{type:Object,default:function(){return{}}},zoom:{type:Boolean,default:!0},asyncClose:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!1},negativeTop:{type:[String,Number],default:0}},data:function(){return{loading:!1}},computed:{cancelBtnStyle:function(){return Object.assign({color:this.cancelColor},this.cancelStyle)},confirmBtnStyle:function(){return Object.assign({color:this.confirmColor},this.confirmStyle)},uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},watch:{value:function(t){!0===t&&(this.loading=!1)}},methods:{confirm:function(){this.asyncClose?this.loading=!0:this.$emit("input",!1),this.$emit("confirm")},cancel:function(){var t=this;this.$emit("cancel"),this.$emit("input",!1),setTimeout((function(){t.loading=!1}),300)},popupClose:function(){this.$emit("input",!1)},clearLoading:function(){this.loading=!1}}};e.default=o},aea0:function(t,e,n){"use strict";n.r(e);var o=n("977b"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},b7cf:function(t,e,n){var o=n("f729");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("7f6c403a",o,!0,{sourceMap:!1,shadowMode:!1})},c787:function(t,e,n){"use strict";var o=n("b7cf"),a=n.n(o);a.a},d9a6:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7"),n("159b"),n("14d9");var o={data:function(){return{value:"1",oneshow:!1,rule:"",data:"",show:!1,id:"",total:0}},onLoad:function(t){var e=this;this.id=t.id,this.getRule(),this.data=uni.getStorageSync("dui"),this.data.forEach((function(t){e.total=e.total+1*t.price})),this.total=this.total.toFixed(2),console.log(this.total)},methods:{valChange:function(t){console.log("当前值为: "+t.value)},duihuan:function(){this.show=!0},success:function(){uni.navigateTo({url:"/pages/cangku/successduihuan"})},confirm:function(){var t=this,e=[];this.data.forEach((function(t){e.push(t.id)})),1==e.length&&(e=e[0]),console.log(e),this.$http({url:"index.php/api/user/exchange",header:{token:uni.getStorageSync("user").token},data:{id:e}}).then((function(e){1==e.data.code?(t.$tip.tip("兑换成功"),uni.navigateBack()):t.$tip.tip(e.data.msg)})).catch((function(t){}))},getRule:function(){var t=this;this.$http({url:"index.php/api/common/agreement",header:{token:uni.getStorageSync("user").token},data:{name:"recharge_introduction"}}).then((function(e){1==e.data.code?t.rule=e.data.data.content:t.$tip.tip(e.data.msg)})).catch((function(t){}))}}};e.default=o},d9b8:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uNavbar:n("133a").default,uPopup:n("bb8f").default,uModal:n("8306").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{title:"兑换"}}),n("v-uni-view",{staticClass:"goodsList"},t._l(t.data,(function(e,o){return n("v-uni-view",{key:o,staticClass:"list"},[n("v-uni-view",{staticClass:"goods"},[n("v-uni-image",{attrs:{src:e.image,mode:""}}),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"tit"},[t._v(t._s(e.name))])],1)],1),n("v-uni-view",{staticClass:"tip"},[n("v-uni-view",{staticClass:"bi"},[t._v("兑换价格："),n("v-uni-text",[t._v(t._s(e.price))]),t._v("幸运币")],1)],1)],1)})),1),n("v-uni-view",{staticClass:"rule"},[n("v-uni-rich-text",{attrs:{nodes:t.rule}})],1),n("v-uni-view",{staticStyle:{height:"200rpx"}}),n("v-uni-view",{staticClass:"btm"},[n("v-uni-view",{staticClass:"btmbox"},[n("v-uni-view",{staticClass:"n-flex-row n-align-center"},[t._v("共"+t._s(t.data.length)+"件 | 合计："),n("v-uni-text",{staticClass:"bi"},[n("v-uni-text",{staticClass:"num"},[t._v(t._s(t.total))]),t._v("幸运币")],1),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.duihuan.apply(void 0,arguments)}}},[t._v("立即兑换")])],1)],1)],1),n("u-popup",{attrs:{mode:"center"},model:{value:t.oneshow,callback:function(e){t.oneshow=e},expression:"oneshow"}},[n("v-uni-view",{staticClass:"onebox"},[n("v-uni-view",{staticClass:"bg"},[n("v-uni-view",{staticClass:"tit"},[t._v("新人首次兑换得")]),n("v-uni-view",{staticClass:"num"},[t._v("重抽卡*1")])],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"tip1"},[t._v("幸运币兑换根据市场成本变化，一经兑换无法撤销，请确认是否兑换？")]),n("v-uni-view",{staticClass:"btns"},[n("v-uni-view",{staticClass:"qu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.oneshow=!1}}},[t._v("取消")]),n("v-uni-view",{staticClass:"que",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.success.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1),n("u-modal",{attrs:{content:"幸运币兑换根据市场成本变化，一经兑换无法撤销，请确认是否兑换？","show-cancel-button":!0},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},i=[]},dccc:function(t,e,n){"use strict";var o=n("4b7f"),a=n.n(o);a.a},f6b8:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-model[data-v-6f45d284]{height:auto;overflow:hidden;font-size:%?32?%;background-color:#fff}.u-model__btn--hover[data-v-6f45d284]{background-color:#e6e6e6}.u-model__title[data-v-6f45d284]{padding-top:%?48?%;font-weight:500;text-align:center;color:#303133}.u-model__content__message[data-v-6f45d284]{padding:%?48?%;font-size:%?30?%;text-align:center;color:#606266}.u-model__footer[data-v-6f45d284]{display:flex;flex-direction:row}.u-model__footer__button[data-v-6f45d284]{flex:1;height:%?100?%;line-height:%?100?%;font-size:%?32?%;box-sizing:border-box;cursor:pointer;text-align:center;border-radius:%?4?%}',""]),t.exports=e},f729:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"uni-page-body[data-v-1db6a7f8]{background-color:#f4f4fc}body.?%PAGE?%[data-v-1db6a7f8]{background-color:#f4f4fc}.goodsList[data-v-1db6a7f8]{padding:%?20?%;box-sizing:border-box}.goodsList .list[data-v-1db6a7f8]{padding:%?20?%;box-sizing:border-box;background-color:#fff;margin-bottom:%?20?%}.goodsList .list .goods[data-v-1db6a7f8]{display:flex;padding-bottom:%?20?%;border-bottom:%?1?% solid #f3f3f3}.goodsList .list .goods uni-image[data-v-1db6a7f8]{width:%?150?%;height:%?150?%;flex-shrink:0}.goods .info[data-v-1db6a7f8]{margin-left:%?20?%;width:100%}.goods .info .shengyu[data-v-1db6a7f8]{color:#999;margin-top:%?10?%;font-size:%?24?%}.tip[data-v-1db6a7f8]{padding-top:%?10?%;display:flex;justify-content:space-between;align-items:center}.tip .bi[data-v-1db6a7f8]{color:#f87a01;margin-top:%?10?%}.tip .bi uni-text[data-v-1db6a7f8]{font-size:%?34?%;margin-right:%?10?%;font-weight:700}.rule[data-v-1db6a7f8]{padding:%?20?%;background-color:#fff;margin:0 auto;box-sizing:border-box;width:%?710?%}.rule .tit[data-v-1db6a7f8]{color:#999;font-size:%?24?%}.btm[data-v-1db6a7f8]{background-color:#fff;position:fixed;left:0;bottom:0;width:%?750?%;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.btmbox[data-v-1db6a7f8]{display:flex;justify-content:flex-end;padding:%?20?%;box-sizing:border-box}\n\n/* .btmbox text{\n\tfont-size: 36rpx;\n\tfont-weight: bold;\n} */.btmbox uni-button[data-v-1db6a7f8]{background-color:#00e1db;color:#fff;margin-left:%?20?%;width:%?250?%}.btmbox .bi[data-v-1db6a7f8]{color:#f87a01}.btmbox .num[data-v-1db6a7f8]{font-size:%?36?%;font-weight:700}.newagain[data-v-1db6a7f8]{position:fixed;left:0;bottom:%?180?%;color:#21616a;background-image:linear-gradient(#8de7ec,#e6ffff);border:%?1?% solid #d1fbfe;padding:%?20?% %?40?%;border-radius:%?60?%;box-shadow:0 %?10?% %?30?% #bfd7db}.onebox[data-v-1db6a7f8]{width:%?600?%;background-color:#fff}.onebox .bg[data-v-1db6a7f8]{background:url(https://img.50api.cn/dingdang/pf.png) no-repeat;background-size:100%;height:%?270?%;padding-top:%?60?%;padding-left:%?40?%;box-sizing:border-box}.onebox .bg .tit[data-v-1db6a7f8]{color:#63a8a6;font-size:%?50?%;font-family:myfont}.onebox .bg .num[data-v-1db6a7f8]{font-family:myfont;font-size:%?60?%;color:#ef662d}.onebox .text[data-v-1db6a7f8]{padding:%?20?% %?50?%;box-sizing:border-box}.onebox .text .tip1[data-v-1db6a7f8]{color:#999}.onebox .text .btns[data-v-1db6a7f8]{display:flex;justify-content:space-between;margin:%?30?% 0}.onebox .text .btns uni-view[data-v-1db6a7f8]{padding:%?25?% %?80?%}.onebox .text .btns .qu[data-v-1db6a7f8]{background-color:#f2f2f2}.onebox .text .btns .que[data-v-1db6a7f8]{background-color:#6ededf}",""]),t.exports=e}}]);