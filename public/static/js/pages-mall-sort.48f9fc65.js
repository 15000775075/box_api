(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mall-sort"],{"535f":function(t,e,n){var a=n("66e7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("25551d54",a,!0,{sourceMap:!1,shadowMode:!1})},"5e29":function(t,e,n){"use strict";n.r(e);var a=n("5e57"),i=n("cbf4");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("daa4");var c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"2920cc37",null,!1,a["a"],void 0);e["default"]=u.exports},"5e57":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uIcon:n("0223").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[n("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),n("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?n("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?n("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?n("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[n("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),n("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),n("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?n("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},r=[]},"61ff":function(t,e,n){"use strict";n.r(e);var a=n("d6cc"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"66e7":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-navbar[data-v-2920cc37]{width:100%}.u-navbar-fixed[data-v-2920cc37]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-2920cc37]{width:100%}.u-navbar-inner[data-v-2920cc37]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-2920cc37]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-2920cc37]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-2920cc37]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-2920cc37]{flex:1}.u-title[data-v-2920cc37]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-2920cc37]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-2920cc37]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=e},6877:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("5e29").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-wrap"},[n("u-navbar",{attrs:{title:"商品分类"}}),n("v-uni-view",{staticClass:"u-menu-wrap"},[n("v-uni-scroll-view",{staticClass:"u-tab-view menu-scroll-view",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":t.scrollTop,"scroll-into-view":t.itemId}},t._l(t.tabbar,(function(e,a){return n("v-uni-view",{key:a,staticClass:"u-tab-item",class:[t.current==a?"u-tab-item-active":""],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.swichMenu(a)}}},[n("v-uni-text",{staticClass:"u-line-1"},[t._v(t._s(e.flname))])],1)})),1),n("v-uni-scroll-view",{staticClass:"right-box",attrs:{"scroll-top":t.scrollRightTop,"scroll-y":!0,"scroll-with-animation":!0},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.rightScroll.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"page-view"},t._l(t.tabbar,(function(e,a){return n("v-uni-view",{key:a,staticClass:"class-item",attrs:{id:"item"+a}},[n("v-uni-view",{staticClass:"item-title"},[n("v-uni-text",[t._v(t._s(e.flname))])],1),n("v-uni-view",{staticClass:"item-container"},t._l(e.foods,(function(e,a){return n("v-uni-view",{key:a,staticClass:"thumb-box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.$.to("/pages/mall/list?id="+e.id+"&name="+e.flname)}}},[n("v-uni-image",{staticClass:"item-menu-image",attrs:{src:e.image,mode:""}}),n("v-uni-view",{staticClass:"item-menu-name"},[t._v(t._s(e.flname))])],1)})),1)],1)})),1)],1)],1)],1)},r=[]},a94c:function(t,e,n){"use strict";var a=n("b224"),i=n.n(a);i.a},b224:function(t,e,n){var a=n("d1be");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("42c61ab8",a,!0,{sourceMap:!1,shadowMode:!1})},b611:function(t,e,n){"use strict";n.r(e);var a=n("6877"),i=n("61ff");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("a94c");var c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"03d124ac",null,!1,a["a"],void 0);e["default"]=u.exports},cbf4:function(t,e,n){"use strict";n.r(e);var a=n("e8fd"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},d1be:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-wrap[data-v-03d124ac]{height:calc(100vh);height:calc(100vh - var(--window-top));display:flex;flex-direction:column}.u-search-box[data-v-03d124ac]{padding:%?18?% %?30?%}.u-menu-wrap[data-v-03d124ac]{flex:1;display:flex;overflow:hidden}.u-search-inner[data-v-03d124ac]{background-color:#eaeaea;border-radius:%?100?%;display:flex;align-items:center;padding:%?10?% %?16?%}.u-search-text[data-v-03d124ac]{font-size:%?26?%;color:#909399;margin-left:%?10?%}.u-tab-view[data-v-03d124ac]{width:%?200?%;height:100%}.u-tab-item[data-v-03d124ac]{height:%?110?%;background:#f6f6f6;box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-size:%?26?%;color:#444;font-weight:400;line-height:1}.u-tab-item-active[data-v-03d124ac]{position:relative;color:#0ca79f;font-size:%?30?%;font-weight:600;background:#fff}.u-tab-item-active[data-v-03d124ac]::before{content:"";position:absolute;border-left:4px solid #0ca79f;height:%?32?%;left:0;top:%?39?%}.u-tab-view[data-v-03d124ac]{height:100%}.right-box[data-v-03d124ac]{background-color:#fafafa}.page-view[data-v-03d124ac]{padding:%?16?%}.class-item[data-v-03d124ac]{margin-bottom:%?30?%;background-color:#fff;padding:%?16?%;border-radius:%?8?%}.class-item[data-v-03d124ac]:last-child{min-height:100vh}.item-title[data-v-03d124ac]{font-size:%?26?%;color:#303133;font-weight:700}.item-menu-name[data-v-03d124ac]{font-weight:400;font-size:%?24?%;color:#303133}.item-container[data-v-03d124ac]{display:flex;flex-wrap:wrap}.thumb-box[data-v-03d124ac]{width:33.333333%;display:flex;align-items:center;justify-content:center;flex-direction:column;margin-top:%?20?%}.item-menu-image[data-v-03d124ac]{width:%?120?%;height:%?120?%}',""]),t.exports=e},d6cc:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7"),n("ac1f"),n("d81d"),n("159b"),n("14d9");var i=a(n("c7eb")),r=a(n("1da1")),c={data:function(){return{scrollTop:0,oldScrollTop:0,current:0,menuHeight:0,menuItemHeight:0,itemId:"",tabbar:[],menuItemPos:[],arr:[],scrollRightTop:0,timer:null}},onLoad:function(){this.getList()},onReady:function(){this.getMenuItemTop()},methods:{getList:function(){var t=this;this.$http({url:"index.php/api/shop/getShopfl"}).then((function(e){console.log(e),1==e.data.code&&(t.tabbar=e.data.data)})).catch((function(t){}))},swichMenu:function(t){var e=this;return(0,r.default)((0,i.default)().mark((function n(){return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!=e.arr.length){n.next=3;break}return n.next=3,e.getMenuItemTop();case 3:if(t!=e.current){n.next=5;break}return n.abrupt("return");case 5:e.scrollRightTop=e.oldScrollTop,e.$nextTick((function(){this.scrollRightTop=this.arr[t],this.current=t,this.leftMenuStatus(t)}));case 7:case"end":return n.stop()}}),n)})))()},getElRect:function(t,e){var n=this;new Promise((function(a,i){var r=uni.createSelectorQuery().in(n);r.select("."+t).fields({size:!0},(function(i){i?(n[e]=i.height,a()):setTimeout((function(){n.getElRect(t)}),10)})).exec()}))},observer:function(){var t=this;return(0,r.default)((0,i.default)().mark((function e(){return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.tabbar.map((function(e,n){var a=uni.createIntersectionObserver(t);a.relativeTo(".right-box",{top:0}).observe("#item"+n,(function(e){if(e.intersectionRatio>0){var n=e.id.substring(4);t.leftMenuStatus(n)}}))}));case 1:case"end":return e.stop()}}),e)})))()},leftMenuStatus:function(t){var e=this;return(0,r.default)((0,i.default)().mark((function n(){return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.current=t,0!=e.menuHeight&&0!=e.menuItemHeight){n.next=6;break}return n.next=4,e.getElRect("menu-scroll-view","menuHeight");case 4:return n.next=6,e.getElRect("u-tab-item","menuItemHeight");case 6:e.scrollTop=t*e.menuItemHeight+e.menuItemHeight/2-e.menuHeight/2;case 7:case"end":return n.stop()}}),n)})))()},getMenuItemTop:function(){var t=this;new Promise((function(e){var n=uni.createSelectorQuery();n.selectAll(".class-item").boundingClientRect((function(n){n.length?n.forEach((function(a){t.arr.push(a.top-n[0].top),e()})):setTimeout((function(){t.getMenuItemTop()}),10)})).exec()}))},rightScroll:function(t){var e=this;return(0,r.default)((0,i.default)().mark((function n(){return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.oldScrollTop=t.detail.scrollTop,0!=e.arr.length){n.next=4;break}return n.next=4,e.getMenuItemTop();case 4:if(!e.timer){n.next=6;break}return n.abrupt("return");case 6:if(e.menuHeight){n.next=9;break}return n.next=9,e.getElRect("menu-scroll-view","menuHeight");case 9:setTimeout((function(){e.timer=null;for(var n=t.detail.scrollTop+e.menuHeight/2,a=0;a<e.arr.length;a++){var i=e.arr[a],r=e.arr[a+1];if(!r||n>=i&&n<r)return void e.leftMenuStatus(a)}}),10);case 10:case"end":return n.stop()}}),n)})))()}}};e.default=c},daa4:function(t,e,n){"use strict";var a=n("535f"),i=n.n(a);i.a},e8fd:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a=uni.getSystemInfoSync(),i={},r={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:i,statusBarHeight:a.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=r}}]);