(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cangku-confirmOrder"],{"08a6":function(t,e,a){"use strict";a.r(e);var i=a("6762"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"3dca":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uNavbar:a("5e29").default,uIcon:a("0223").default,uRadioGroup:a("c18c").default,uRadio:a("f749").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("u-navbar",{attrs:{title:"确认订单"}}),i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"address",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$.to("/pages/my/address?state=1")}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:a("cbab"),mode:""}}),t.isAdd?i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.address.name)),i("v-uni-text",[t._v(t._s(t.address.mobile))])],1),i("v-uni-view",{staticClass:"add"},[t._v(t._s(t.address.province+" "+t.address.city+" "+t.address.area+" "+t.address.detail))])],1):i("v-uni-view",[t._v("添加收货地址")])],1),i("u-icon",{attrs:{name:"arrow-right",color:"#ccc"}})],1),i("v-uni-view",{staticClass:"goodsBox"},[i("v-uni-view",{staticClass:"goods"},[i("v-uni-image",{attrs:{src:t.info.image,mode:""}}),i("v-uni-view",{staticClass:"goodsInfo"},[i("v-uni-view",{staticClass:"tit"},[t._v(t._s(t.info.name))]),i("v-uni-view",{staticClass:"price n-flex-row n-justify-between",staticStyle:{"margin-top":"10rpx"}},[i("v-uni-view",[t._v("￥0")]),i("v-uni-view",{staticStyle:{color:"#999","font-size":"28rpx"}},[t._v("x1")])],1)],1)],1),i("v-uni-view",{staticClass:"row"},[i("v-uni-view",[t._v("订单类型")]),i("v-uni-view",[t._v("提货订单")])],1),i("v-uni-view",{staticClass:"row"},[i("v-uni-view",[t._v("运费")]),0==t.info.yunfei?i("v-uni-view",{staticClass:"pri"},[t._v("免运费")]):i("v-uni-view",{staticClass:"pri"},[t._v("￥"+t._s(t.info.yunfei))])],1)],1)],1),t.info.yunfei>0?i("v-uni-view",{staticClass:"box1",staticStyle:{"margin-top":"20rpx"}},[i("u-radio-group",{staticStyle:{display:"block"},attrs:{width:"34rpx","active-color":"#70DDE0"},model:{value:t.paymode,callback:function(e){t.paymode=e},expression:"paymode"}},[i("v-uni-view",{staticClass:"rowitem payrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectPay("wechat")}}},[i("v-uni-view",{staticClass:"l"},[i("v-uni-image",{attrs:{src:a("ab31"),mode:""}}),t._v("微信")],1),i("u-radio",{attrs:{name:"wechat"}})],1),i("v-uni-view",{staticClass:"rowitem payrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectPay("alipay")}}},[i("v-uni-view",{staticClass:"l"},[i("v-uni-image",{attrs:{src:a("800d"),mode:""}}),t._v("支付宝")],1),i("u-radio",{attrs:{name:"alipay"}})],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"btm"},[i("v-uni-view",{staticClass:"btmbox"},[i("v-uni-view",{staticClass:"n-flex-row n-align-center"},[i("v-uni-view",{},[i("v-uni-view",[t._v("共1件 | 合计：￥"),i("v-uni-text",[t._v(t._s(t.info.yunfei))])],1),0!=t.info.yunfei?i("v-uni-view",{staticClass:"yun"},[t._v("(含运费￥"+t._s(t.info.yunfei)+")")]):t._e()],1),i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pay.apply(void 0,arguments)}}},[t._v("提交订单")])],1)],1)],1)],1)},o=[]},"4f58":function(t,e,a){"use strict";a.r(e);var i=a("3dca"),n=a("08a6");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("676c");var s=a("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"f6ee292a",null,!1,i["a"],void 0);e["default"]=r.exports},"535f":function(t,e,a){var i=a("66e7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("25551d54",i,!0,{sourceMap:!1,shadowMode:!1})},"58ba":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-f6ee292a]{background-color:#f4f4fc}body.?%PAGE?%[data-v-f6ee292a]{background-color:#f4f4fc}.wrap[data-v-f6ee292a]{padding:%?20?%;box-sizing:border-box}.address[data-v-f6ee292a]{padding:%?40?% %?20?%;background-color:#fff;margin:%?20?% 0;display:flex;justify-content:space-between;align-items:center}.address .left[data-v-f6ee292a]{display:flex;align-items:center}.address .left uni-image[data-v-f6ee292a]{width:%?60?%;height:%?60?%;margin-right:%?10?%}.address .info .name[data-v-f6ee292a]{font-size:%?34?%}.address .info .name uni-text[data-v-f6ee292a]{font-size:%?28?%;color:#999;margin-left:%?20?%}.address .add[data-v-f6ee292a]{margin-top:%?10?%}.goodsBox[data-v-f6ee292a]{padding:%?20?%;box-sizing:border-box;background-color:#fff}.goodsBox .goods[data-v-f6ee292a]{display:flex}.goods uni-image[data-v-f6ee292a]{width:%?190?%;height:%?190?%;margin-right:%?20?%;flex-shrink:0}.goods .goodsInfo[data-v-f6ee292a]{width:100%}.goods .goodsInfo .xinghao[data-v-f6ee292a]{background-color:#f6f6f6;padding:%?10?% %?20?%;color:#999;font-size:%?24?%;margin:%?15?% 0}.goods .goodsInfo .price[data-v-f6ee292a]{font-size:%?34?%}.row[data-v-f6ee292a]{display:flex;justify-content:space-between;padding:%?20?% 0}.hui[data-v-f6ee292a]{color:#999}.row .pri[data-v-f6ee292a]{font-size:%?34?%;font-weight:700}.beizhu[data-v-f6ee292a]{padding-top:%?20?%}.btm[data-v-f6ee292a]{background-color:#fff;position:fixed;left:0;bottom:0;width:%?750?%;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.btmbox[data-v-f6ee292a]{display:flex;justify-content:flex-end;padding:%?20?%;box-sizing:border-box}.btmbox .text[data-v-f6ee292a]{font-size:%?36?%;font-weight:700}.btmbox uni-button[data-v-f6ee292a]{background-color:#00e1db;color:#fff;margin-left:%?20?%;width:%?250?%}.btmbox .yun[data-v-f6ee292a]{color:#999;font-size:%?24?%;text-align:right}.box1[data-v-f6ee292a]{padding:%?20?%;box-sizing:border-box;background-color:#fff}.rowitem[data-v-f6ee292a]{padding:%?20?% 0}.payrow[data-v-f6ee292a]{\r\n\t/* width: 670rpx; */display:flex;align-items:center;justify-content:space-between}.rowitem uni-image[data-v-f6ee292a]{width:%?45?%;height:%?45?%;margin-right:%?10?%}.rowitem .l[data-v-f6ee292a]{display:flex;align-items:center}.box1[data-v-f6ee292a]{padding:%?20?%;box-sizing:border-box;background-color:#fff}.rowitem[data-v-f6ee292a]{padding:%?20?% 0}.payrow[data-v-f6ee292a]{\r\n\t/* width: 670rpx; */display:flex;align-items:center;justify-content:space-between}.rowitem uni-image[data-v-f6ee292a]{width:%?45?%;height:%?45?%;margin-right:%?10?%}.rowitem .l[data-v-f6ee292a]{display:flex;align-items:center}",""]),t.exports=e},"5e29":function(t,e,a){"use strict";a.r(e);var i=a("5e57"),n=a("cbf4");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("daa4");var s=a("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"2920cc37",null,!1,i["a"],void 0);e["default"]=r.exports},"5e57":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uIcon:a("0223").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[a("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),a("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?a("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-icon-wrap"},[a("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?a("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?a("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[a("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),a("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),a("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?a("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},o=[]},"66e7":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-navbar[data-v-2920cc37]{width:100%}.u-navbar-fixed[data-v-2920cc37]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-2920cc37]{width:100%}.u-navbar-inner[data-v-2920cc37]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-2920cc37]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-2920cc37]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-2920cc37]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-2920cc37]{flex:1}.u-title[data-v-2920cc37]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-2920cc37]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-2920cc37]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=e},6762:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{remarks:"",address:"",isAdd:!1,info:"",id:"",paymode:"wechat"}},onLoad:function(t){var e=this;this.id=t.id,this.info=uni.getStorageSync("tihuo"),this.getAddress(),uni.$on("changeAddress",(function(t){console.log(t,"id"),e.upDataAddress(t)}))},onUnload:function(){uni.removeStorageSync("tihuo"),uni.$off("changeAddress")},methods:{pay:function(){var t=this;this.address?this.info.yunfei>0&&""==this.paymode?this.$tip.tip("请选择支付方式"):("wechat"==this.paymode||"alipay"==this.paymode)&&this.$http({url:"index.php/api/order/sqfh",header:{token:uni.getStorageSync("user").token},data:{id:this.id,addresid:this.address.id,terminal:0,payfs:this.paymode}}).then((function(e){if(console.log(e),0==t.info.yunfei)return t.$tip.tip("支付成功","success"),void setTimeout((function(){uni.redirectTo({url:"/pages/mall/paySuccexx"})}),700);uni.navigateTo({url:"/pages/tabBar/pay"}),setTimeout((function(){uni.$emit("h5pay",e.data)}),600),1==e.data.code||t.$tip.tip(e.data.msg)})).catch((function(t){})):this.$tip.tip("请选择地址")},getAddress:function(){var t=this;this.$http({url:"index.php/api/user/myAddress",header:{token:uni.getStorageSync("user").token}}).then((function(e){console.log(e),1==e.data.code?(0==e.data.data.length?t.isAdd=!1:t.isAdd=!0,t.address=e.data.data[0],console.log(t.address)):(t.$tip.tip(e.data.msg),t.isAdd=!1)})).catch((function(t){}))},upDataAddress:function(t){var e=this;this.$http({url:"index.php/api/user/getAddress",header:{token:uni.getStorageSync("user").token},data:{addresid:t}}).then((function(t){console.log(t,"dizhi"),1==t.data.code&&(e.address=t.data.data,e.isAdd=!0)})).catch((function(t){}))},selectPay:function(t){this.paymode=t}}};e.default=i},"676c":function(t,e,a){"use strict";var i=a("985c"),n=a.n(i);n.a},"985c":function(t,e,a){var i=a("58ba");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5dc87521",i,!0,{sourceMap:!1,shadowMode:!1})},cbab:function(t,e,a){t.exports=a.p+"static/img/a1_.ac275d28.png"},cbf4:function(t,e,a){"use strict";a.r(e);var i=a("e8fd"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},daa4:function(t,e,a){"use strict";var i=a("535f"),n=a.n(i);n.a},e8fd:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i=uni.getSystemInfoSync(),n={},o={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:n,statusBarHeight:i.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=o}}]);