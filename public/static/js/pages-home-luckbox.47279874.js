(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-luckbox"],{"0533":function(t,i,e){"use strict";e.r(i);var a=e("2e00"),n=e("9143");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("dfb1"),e("445f");var s=e("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"f218fca0",null,!1,a["a"],void 0);i["default"]=r.exports},"1cc2":function(t,i,e){t.exports=e.p+"static/img/xr.3a378b22.png"},2909:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return(0,a.default)(t)||(0,n.default)(t)||(0,o.default)(t)||(0,s.default)()};var a=r(e("6005")),n=r(e("db90")),o=r(e("06c5")),s=r(e("3427"));function r(t){return t&&t.__esModule?t:{default:t}}},"2bd1":function(t,i,e){"use strict";e.r(i);var a=e("59ff"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"2e00":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={uPopup:e("f243").default,uNavbar:e("5e29").default,uCheckbox:e("d475").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"wrap"},[a("v-uni-view",{staticClass:"luckbox"},[a("v-uni-view",{staticClass:"ranks"},t._l(t.num,(function(i,e){return 1!=t.num?a("v-uni-view",{key:e,staticClass:"list"},[a("v-uni-text",[t._v(t._s(e+1))]),t.idx>e?a("v-uni-image",{attrs:{src:t.jieguo[e].images,mode:""}}):t._e()],1):t._e()})),1),a("v-uni-view",{staticClass:"cbox1"},[a("v-uni-view",{staticClass:"item_contents"},[a("v-uni-view",{staticClass:"cons_list"},[a("v-uni-scroll-view",{staticClass:"scroll_list",attrs:{"scroll-x":"true"}},[a("v-uni-view",{staticClass:"lists_cons",style:{transform:"translateX("+t.moveX+"rpx)",transition:t.miao+"s ease-in-out"}},[t._l(t.goodsDetails,(function(i,e){return[a("v-uni-view",{key:e+"_0",staticClass:"detalis",style:{background:"url("+i.bg+")"},attrs:{id:i.goods_id}},[a("v-uni-image",{attrs:{src:i.image,mode:""}}),a("v-uni-view",{staticClass:"tit"},[t._v(t._s(i.goods_name))]),a("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(i.goods_pirce))])],1)]}))],2)],1)],1)],1)],1),a("v-uni-view",{staticClass:"di"},[a("v-uni-view",{staticClass:"stoppic",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tingzhi.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:t.stop_img,mode:"widthFix"}}),a("v-uni-text",[t._v(t._s(t.daojishi))])],1)],1),a("v-uni-view",{staticClass:"kai",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.kaiqi.apply(void 0,arguments)}}},[t._v("一键开启")])],1),a("u-popup",{attrs:{mode:"center"},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[a("v-uni-view",{staticClass:"result",style:{background:"url("+t.bgurl+")",backgroundSize:"100% 100%"}},[a("u-navbar",{attrs:{"custom-back":t.back,immersive:!0,"back-icon-color":"#fff","border-bottom":!1,background:{backgroundColor:""},title:" "}}),a("v-uni-view",{staticClass:"rbox"},[a("v-uni-view",{staticClass:"tit"},[a("v-uni-image",{attrs:{src:"https://img.50api.cn/dingdang/cst.webp",mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"goodsBox"},[a("v-uni-checkbox-group",{staticStyle:{width:"100%"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.checkboxChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cbox",class:"c"+t.num},t._l(t.jieguo,(function(i,n){return a("v-uni-view",{key:n,staticClass:"list",style:{background:"url("+i.bg+")"}},[a("v-uni-view",{staticClass:"list",staticStyle:{position:"absolute","padding-right":"5%"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkAlarm(n)}}},[a("v-uni-view",{staticClass:"price",staticStyle:{position:"absolute",top:"-40rpx",color:"#ff9800","padding-left":"10rpx"}},[a("v-uni-image",{staticStyle:{width:"20rpx",height:"20rpx"},attrs:{src:e("1cc2"),mode:"aspectFit"}}),t._v(t._s(parseInt(i.luckycoin)))],1),a("v-uni-checkbox",{staticClass:"xuanze_kuang",attrs:{checked:i.isCheckeds,value:i.box_prize_record_id},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkAlarm(n)}}})],1),a("v-uni-image",{attrs:{src:i.images,mode:""}}),10!=t.num?a("v-uni-view",{staticClass:"name"},[t._v(t._s(i.goods_name))]):t._e(),a("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(i.goods_pirce))])],1)})),1)],1)],1),t.isPay?t._e():a("v-uni-view",{staticClass:"bottom"},[t.isPay?t._e():a("v-uni-view",{staticClass:"btit"},[t._v("*试玩结果仅供参考")]),t.istwo?a("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jixu.apply(void 0,arguments)}}},[t._v("继续开盒 x10")]):a("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$.to("/pages/home/kaixiang?id="+t.boxId)}}},[t._v("来发真的试试")])],1),t.isPay?a("v-uni-view",{staticClass:"bottom"},[t.isPay?t._e():a("v-uni-view",{staticClass:"btit"},[t._v("*试玩结果仅供参考")]),t.istwo?a("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jixu.apply(void 0,arguments)}}},[t._v("继续开盒 x10")]):a("v-uni-view",[a("v-uni-view",{staticClass:"btn",staticStyle:{"margin-right":"20rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.yj_huishou.apply(void 0,arguments)}}},[t._v("批量寄售")]),a("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shou.apply(void 0,arguments)}}},[t._v("全部收下")])],1)],1):t._e()],1)],1)],1),a("u-popup",{attrs:{mode:"bottom"},model:{value:t.pl_huishou_show,callback:function(i){t.pl_huishou_show=i},expression:"pl_huishou_show"}},[a("v-uni-view",{staticClass:"plhuishou-box"},[a("v-uni-view",{staticClass:"tit"},[t._v("确认批量寄售")]),a("v-uni-view",{staticClass:"con"},[a("v-uni-view",{staticClass:"box1",staticStyle:{"max-height":"60vh","margin-bottom":"200rpx","overflow-y":"auto"}},t._l(t.fuxuan_huishou_data,(function(i,e){return a("v-uni-view",{key:e,staticClass:"list"},[a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticStyle:{color:"red"}},[t._v("价值："+t._s(i.luyck)+"金豆")]),a("v-uni-view",{staticStyle:{margin:"10rpx 20rpx","border-bottom":"1rpx solid #F3F3F3",padding:"10rpx 0"}},[t._v(t._s(i.goods_name))])],1)],1)})),1)],1),a("v-uni-view",{staticStyle:{"background-color":"#fff",position:"fixed",bottom:"0",width:"100%"}},[a("v-uni-view",{staticClass:"obtm",staticStyle:{"text-align":"center",padding:"10rpx 0"}},[t._v("选中了"+t._s(t.huishou_num)+"个盒子进行寄售")]),a("v-uni-view",{staticClass:"obtm"},[a("v-uni-button",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.pl_huisou_sub.apply(void 0,arguments)}}},[t._v("立即寄售"),a("v-uni-text",[t._v(t._s(t.fuxuan_huishou_jindou)+"金豆")])],1)],1),a("v-uni-view",{staticClass:"xieyi"},[a("u-checkbox",{attrs:{shape:"circle","active-color":"#70DDE0","label-size":"22"},model:{value:t.xieyi,callback:function(i){t.xieyi=i},expression:"xieyi"}},[t._v("我已满18岁，已阅读并同意"),a("v-uni-text",{on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.$.to("/pages/my/agreement?type=wfashuiming")}}},[t._v("《支付服务协议》")])],1)],1)],1)],1)],1)],1)},o=[]},3427:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e("d9e2"),e("d401")},4288:function(t,i,e){var a=e("715d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("2b12637e",a,!0,{sourceMap:!1,shadowMode:!1})},"445f":function(t,i,e){"use strict";var a=e("4288"),n=e.n(a);n.a},"535f":function(t,i,e){var a=e("66e7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("25551d54",a,!0,{sourceMap:!1,shadowMode:!1})},"59ff":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3"),e("14d9"),e("d81d");var a={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var t={};return this.elActiveColor&&this.value&&!this.isDisabled&&(t.borderColor=this.elActiveColor,t.backgroundColor=this.elActiveColor),t.width=this.$u.addUnit(this.checkboxSize),t.height=this.$u.addUnit(this.checkboxSize),t},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var t=[];return t.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&t.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled--checked"),t.join(" ")},checkboxStyle:function(){var t={};return this.parent&&this.parent.width&&(t.width=this.parent.width,t.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(t.width="100%",t.flex="0 0 100%"),t}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var t=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){t.parent&&t.parent.emitEvent&&t.parent.emitEvent()}),80)},setValue:function(){var t=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(i){i.value&&t++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&t>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};i.default=a},"5e29":function(t,i,e){"use strict";e.r(i);var a=e("5e57"),n=e("cbf4");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("daa4");var s=e("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"2920cc37",null,!1,a["a"],void 0);i["default"]=r.exports},"5e57":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={uIcon:e("0223").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{},[e("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[e("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),e("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?e("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goBack.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"u-icon-wrap"},[e("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?e("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?e("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[e("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),e("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),e("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?e("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},o=[]},6005:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){if(Array.isArray(t))return(0,a.default)(t)};var a=function(t){return t&&t.__esModule?t:{default:t}}(e("6b75"))},"648d":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".item_contents[data-v-f218fca0]{width:100%;background:url(https://img.50api.cn/dingdang/ql.png) no-repeat;background-size:100% 100%;padding-top:%?182?%;height:%?662?%;box-sizing:border-box;position:relative;overflow:hidden}.cons_list[data-v-f218fca0]{display:inline-block;padding-left:%?32?%;box-sizing:border-box}.scroll_list[data-v-f218fca0]{width:100%;height:%?374?%}.lists_cons[data-v-f218fca0]{display:flex;align-items:center;flex-wrap:nowrap}.detalis[data-v-f218fca0]{width:%?258?%;height:%?374?%;margin-right:%?24?%;position:relative;background-size:100% 100%!important;text-align:center}.detalis uni-image[data-v-f218fca0]{width:%?150?%;height:%?150?%;margin-top:%?80?%}.detalis .tit[data-v-f218fca0]{display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-top:%?10?%;color:#fff;font-size:%?24?%;padding:0 %?16?%}.detalis .price[data-v-f218fca0]{color:#fff;margin-top:%?10?%;font-family:myfont}\n\n/* ::-webkit-scrollbar {\n\twidth: 0;\n\theight: 0;\n\tcolor: transparent;\n} */.cons_list_mask[data-v-f218fca0]{width:100%;height:%?662?%;position:absolute;top:0;left:0;z-index:99999;background-color:transparent}",""]),t.exports=i},"66e7":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-navbar[data-v-2920cc37]{width:100%}.u-navbar-fixed[data-v-2920cc37]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-2920cc37]{width:100%}.u-navbar-inner[data-v-2920cc37]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-2920cc37]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-2920cc37]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-2920cc37]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-2920cc37]{flex:1}.u-title[data-v-2920cc37]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-2920cc37]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-2920cc37]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=i},"6a9a":function(t,i,e){"use strict";var a=e("f92d"),n=e.n(a);n.a},"715d":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".wrap[data-v-f218fca0],\r\n.luckbox[data-v-f218fca0]{width:100vw;height:100vh}.plhuishou-box .tit[data-v-f218fca0]{text-align:center;width:100%;height:%?100?%;line-height:%?100?%}.plhuishou-box .obtm[data-v-f218fca0]{width:70%;margin:auto}.plhuishou-box .obtm uni-button[data-v-f218fca0]{background-color:#f87a01;color:#fff;font-size:%?30?%}.plhuishou-box .obtm uni-text[data-v-f218fca0]{color:#fff;font-size:%?30?%}.plhuishou-box .xieyi[data-v-f218fca0]{text-align:center}.pl_huishou[data-v-f218fca0]{position:fixed;bottom:%?20?%;left:%?50?%;z-index:999;background-color:#f87a01;color:#fff;padding:%?20?% %?50?%;border-radius:%?10?%}.pl_huishou_ok[data-v-f218fca0]{position:fixed;bottom:%?20?%;right:%?50?%;z-index:999;background-color:#70dde0;color:#fff;padding:%?20?% %?50?%;border-radius:%?10?%}.luckbox[data-v-f218fca0]{overflow:hidden;background:url(https://img.50api.cn/dingdang/qg.webp) no-repeat;background-size:100% 100%}.luckbox .cbox1[data-v-f218fca0]{margin-top:%?200?%}.ranks[data-v-f218fca0]{display:flex;align-items:center;justify-content:center;margin-top:%?100?%;padding:0 %?20?%;width:100%;height:%?72?%}.ranks .list[data-v-f218fca0]{border-radius:%?16?%;width:%?52?%;height:%?52?%;border:%?1?% solid #00e1db;position:relative;padding:%?10?%;margin:%?10?%}.ranks .list uni-image[data-v-f218fca0]{width:100%;height:100%}.ranks .list uni-text[data-v-f218fca0]{position:absolute;right:%?-10?%;top:%?-20?%;color:rgba(99,215,214,.7);font-family:myfont;font-size:%?32?%}.di[data-v-f218fca0]{margin-top:%?100?%}.di .stoppic[data-v-f218fca0]{text-align:center;position:relative}.di .stoppic uni-image[data-v-f218fca0]{width:%?600?%}.di .stoppic uni-text[data-v-f218fca0]{color:#fff;font-size:%?100?%;font-family:myfont;position:absolute;left:%?230?%;top:%?4?%}.kai[data-v-f218fca0]{padding:%?10?% %?20?%;border-radius:%?16?%;margin-top:%?40?%;border:%?1?% solid #fff;color:#fff;display:inline-block;margin-left:%?30?%}.result[data-v-f218fca0]{width:100vw;height:100vh}.result .rbox[data-v-f218fca0]{position:relative;display:flex;align-items:center;justify-content:center;height:100vh}.goodsBox .name[data-v-f218fca0]{\r\n\t/* margin: 10rpx 0; */margin-top:%?6?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff;font-size:%?24?%;padding:0 %?16?%}.result .rbox .tit[data-v-f218fca0]{width:%?750?%;text-align:center}.result .rbox .tit uni-image[data-v-f218fca0]{position:absolute;left:0;top:0;width:%?750?%}.result .rbox .bottom[data-v-f218fca0]{width:%?750?%;font-family:myfont;text-align:center;position:absolute;left:0;bottom:%?40?%}.result .rbox .bottom .btit[data-v-f218fca0]{color:#fff;font-size:%?36?%}.result .rbox .bottom .btn[data-v-f218fca0]{padding:%?20?% %?60?%;background-color:#fff;border-radius:%?20?%;font-size:%?38?%;display:inline-block;margin-top:%?20?%}.result .rbox .goodsBox[data-v-f218fca0]{display:flex;align-items:center;justify-content:center;height:calc(100vh - %?400?%);width:%?750?%;position:absolute;left:0;padding:%?40?%;box-sizing:border-box}.result .rbox .goodsBox .cbox[data-v-f218fca0]{display:flex;justify-content:center;flex-wrap:wrap;width:100%}.result .rbox .goodsBox .c1 .list[data-v-f218fca0]{width:70%;height:%?486?%;text-align:center;background-size:100% 100%!important}.result .rbox .goodsBox .c1 .list .price[data-v-f218fca0]{font-size:%?36?%}.result .rbox .goodsBox .c1 .list uni-image[data-v-f218fca0]{width:%?282?%;height:%?286?%;margin-top:%?80?%;margin-bottom:0}.result .rbox .goodsBox .c1 .list .xuanze_kuang[data-v-f218fca0]{position:absolute;bottom:%?20?%;right:%?60?%}.result .rbox .goodsBox .c3 .list uni-image[data-v-f218fca0]{width:%?196?%;height:%?196?%;margin-top:%?46?%;margin-bottom:0}.result .rbox .goodsBox .c5 .list uni-image[data-v-f218fca0]{width:%?120?%;height:%?120?%;margin-top:%?36?%;margin-bottom:0}.result .rbox .goodsBox .c5 .list .xuanze_kuang[data-v-f218fca0]{position:absolute;bottom:%?20?%;right:%?22?%;-webkit-transform:scale(.7);transform:scale(.7)}.result .rbox .goodsBox .c10 .list uni-image[data-v-f218fca0]{width:%?120?%;height:%?120?%;margin-top:%?36?%;margin-bottom:0}.result .rbox .goodsBox .c10 .list .xuanze_kuang[data-v-f218fca0]{position:absolute;bottom:%?20?%;right:%?22?%;-webkit-transform:scale(.7);transform:scale(.7)}.result .rbox .goodsBox .list .price[data-v-f218fca0]{\r\n\t/* margin-top: 1%; */color:#fff;font-family:myfont;text-align:center}.result .rbox .goodsBox .c3 .list[data-v-f218fca0]{width:47%;height:%?338?%;background-size:100% 100%!important;margin:%?10?%;text-align:center}.result .rbox .goodsBox .c3 .list .price[data-v-f218fca0]{font-size:%?36?%}.result .rbox .goodsBox .c3 .list .xuanze_kuang[data-v-f218fca0]{position:absolute;bottom:%?20?%;right:%?44?%;-webkit-transform:scale(.7);transform:scale(.7)}.result .rbox .goodsBox .c5 .list[data-v-f218fca0]{width:30%;height:%?238?%;background-size:100% 100%!important;margin:%?10?%;text-align:center}.result .rbox .goodsBox .c5 .list .price[data-v-f218fca0]{font-size:%?30?%}.result .rbox .goodsBox .c10 .list[data-v-f218fca0]{width:30%;height:%?208?%;background-size:100% 100%!important;margin:%?10?%;text-align:center}.result .rbox .goodsBox .c10 .list .price[data-v-f218fca0]{font-size:%?30?%}.result .rbox .goodsBox .c20 .list[data-v-f218fca0]{width:30%;height:%?208?%;background-size:100% 100%!important;margin:%?10?%;text-align:center}.result .rbox .goodsBox .c20 .list .price[data-v-f218fca0]{font-size:%?30?%}",""]),t.exports=i},9143:function(t,i,e){"use strict";e.r(i);var a=e("fcc4"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"9d38":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-checkbox[data-v-7e6e0538]{display:inline-flex;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-7e6e0538]{color:#606266;flex:none;display:-webkit-flex;display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-7e6e0538]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-7e6e0538]{border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-7e6e0538]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-7e6e0538]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-7e6e0538]{color:#c8c9cc!important}.u-checkbox__label[data-v-7e6e0538]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-7e6e0538]{color:#c8c9cc}',""]),t.exports=i},c80b:function(t,i,e){var a=e("648d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("04cb71c0",a,!0,{sourceMap:!1,shadowMode:!1})},cbf4:function(t,i,e){"use strict";e.r(i);var a=e("e8fd"),n=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},d475:function(t,i,e){"use strict";e.r(i);var a=e("ffe3"),n=e("2bd1");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("6a9a");var s=e("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"7e6e0538",null,!1,a["a"],void 0);i["default"]=r.exports},daa4:function(t,i,e){"use strict";var a=e("535f"),n=e.n(a);n.a},db90:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630")},dfb1:function(t,i,e){"use strict";var a=e("c80b"),n=e.n(a);n.a},e8fd:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a9e3");var a=uni.getSystemInfoSync(),n={},o={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:n,statusBarHeight:a.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};i.default=o},f92d:function(t,i,e){var a=e("9d38");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("29afe66e",a,!0,{sourceMap:!1,shadowMode:!1})},fcc4:function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("2909"));e("d3b7"),e("159b"),e("14d9"),e("99af"),e("3c65"),e("fb6a"),e("c740"),e("d401"),e("25f0");var o=a(e("1acc")),s=uni.createInnerAudioContext(),r=uni.createInnerAudioContext(),c=o.default.baseUrl+"/assets/img/anjian.mp3",u=uni.createInnerAudioContext(),l={name:"horizontalScroll",data:function(){return{goodsDetails:[],stop_img:o.default.baseUrl+"/assets/img/stop.png",winningId:"",count:5,winningIndex:0,moveX:0,miao:5,show:!1,boxId:"",bgurl:"https://img.50api.cn/dingdang/csbg.webp",boxUrl:"https://img.50api.cn/dingdang/cs.png",muteBgMusic:!0,num:"",idx:0,jieguo:[],yichou:[],daojishi:5,ding:"",isKai:!1,istwo:!1,isPay:!1,ooid:"",twoPay:{},endTime:"",fuxuan_huishou_id:"",fuxuan_huishou_data:"",fuxuan_huishou_jindou:0,pl_huishou_show:!1,huishou_num:0,xieyi:!0}},watch:{goodsDetails:{handler:function(t){this.preMove()},immediate:!0}},onLoad:function(t){var i=this;this.$music.playBgm({mute:!0}),console.log(t),t.ooid&&(this.boxId=t.boxid,20==t.num?(this.num=10,this.istwo=!0):this.num=t.num,this.ooid=t.ooid,this.isPay=!0,this.getData1(t.num),this.getBox(t.boxid)),s.src="https://xgmh.hui-xiang.cn/kj.mp3",console.log(s),r.src="https://img.50api.cn/dingdang/zhongjiang.mp3",u.src=c,uni.loadFontFace({family:"myfont",source:'url("https://img.50api.cn/dingdang/YouSheBiaoTiHei.ttf")'}),uni.$on("cdata",(function(t){console.log(t,"数据接收"),i.boxId=t.id,20==t.num?(i.num=10,i.istwo=!0):i.num=t.num,i.isPay=!1,i.getData(),i.getBox(t.id)})),uni.$on("paydata",(function(t){console.log(t,"数据接收"),i.boxId=t.id,20==t.num?(i.num=10,i.istwo=!0):i.num=t.num,i.ooid=t.ooid,i.isPay=!0,i.getData1(t.num),i.getBox(t.id)})),uni.$on("kaidata",(function(t){console.log(t,"数据接收"),i.boxId=t.boxfl_id,i.num=1,i.isPay=!0,i.getData2(t.id),i.getBox(t.boxfl_id)}))},onUnload:function(){uni.$off("cdata"),uni.$off("paydata"),uni.$off("kaidata"),this.$music.playBgm({mute:!1})},methods:{back:function(){uni.switchTab({url:"/pages/tabBar/home"})},shou:function(){uni.switchTab({url:"/pages/tabBar/cangku"})},getBox:function(t){var i=this;this.$http({url:"index.php/api/Box/getBoxShop",data:{id:t}}).then((function(t){if(console.log(t),console.log(t,"商品"),1==t.data.code){var e=t.data.data.shop,a=[];e.forEach((function(t,i){a.push({id:1e4+i,image:t.image,goods_name:t.goods_name,goods_pirce:t.goods_pirce,tag:t.tag})}));var o=a.concat();if(a=a.concat(e),a.length<40)for(var s=0;s<40;s++){var r;if(a.length>=40)break;(r=a).unshift.apply(r,(0,n.default)(o))}a=a.concat(o),a.forEach((function(t){"legend"==t.tag?t.bg="https://img.50api.cn/dingdang/csgoodsbg.png":"supreme"==t.tag?t.bg="https://img.50api.cn/dingdang/ssgoodsbg.png":"rare"==t.tag?t.bg="https://img.50api.cn/dingdang/xygoodsbg.png":t.bg="https://img.50api.cn/dingdang/gjgoodsbg.png"})),console.log(a,"处理数据"),i.goodsDetails=a}})).catch((function(t){}))},state:function(){var t=this;console.log("开始抽奖"),this.winningId=this.jieguo[this.idx].id,console.log(this.winningId,"抽中的id"),this.daojishi=5,this.preMove(),s.play(),this.ding=setInterval((function(){t.daojishi-=1,t.daojishi<=0&&(t.daojishi=0)}),1e3),this.end()},getData:function(){var t=this;this.$http({url:"index.php/api/index/SgetOne",data:{boxid:this.boxId,num:this.num}}).then((function(i){console.log(i,"抽中的商品"),1==i.data.code&&t.changeBg(i.data.data)})).catch((function(t){}))},getData1:function(t){var i=this;console.log(t,"几抽"),this.$http({url:"index.php/api/index/getOne",header:{token:uni.getStorageSync("user").token},data:{ooid:this.ooid}}).then((function(e){if(console.log(e,"抽中的商品"),1==e.data.code)if(20==t){var a=e.data.data.data,n=a.slice(0,10),o=a.slice(10,20);i.twoPay={one:n,two:o},console.log(i.twoPay,"分开的数据"),i.changeBg(i.twoPay.one)}else i.changeBg(e.data.data.data)})).catch((function(t){}))},getData2:function(t){var i=this;this.$http({url:"index.php/api/index/getOnea",header:{token:uni.getStorageSync("user").token},data:{id:t}}).then((function(t){console.log(t,"盲盒"),1==t.data.code?i.changeBg(t.data.data.data):i.$tip.tip(t.data.msg)})).catch((function(t){}))},changeBg:function(t){console.log(t,"换背景"),t.forEach((function(t,i){"legend"==t.tag?t.bg="https://img.50api.cn/dingdang/cs.png":"supreme"==t.tag?t.bg="https://img.50api.cn/dingdang/ss.png":"rare"==t.tag?t.bg="https://img.50api.cn/dingdang/xy.png":t.bg="https://img.50api.cn/dingdang/gj.png"})),this.jieguo=t,console.log(this.jieguo,"结果"),this.state()},tingzhi:function(){},end:function(){var t=this;this.endTime=setTimeout((function(){clearInterval(t.ding),t.yichou=t.jieguo[t.idx],console.log(t.yichou,"一抽"),s.stop(),r.play(),t.idx++,t.idx>=t.jieguo.length?setTimeout((function(){t.show=!0}),2500):(setTimeout((function(){t.miao=0,t.moveX=0}),900),t.isKai||setTimeout((function(){t.miao=5,t.state()}),1e3))}),5e3)},kaiqi:function(){s.stop(),r.play(),this.isKai=!0,this.daojishi=0,this.$forceUpdate(),this.show=!0},jixu:function(){var t=this;this.miao=0,this.moveX=0,clearTimeout(this.endTime),this.num=10,this.istwo=!1,this.idx=0,this.jieguo=[],this.yichou=[],this.daojishi=5,this.isKai=!1,clearInterval(this.ding),setTimeout((function(){t.miao=5,t.isPay?(t.jieguo=t.twoPay.two,t.changeBg(t.twoPay.two)):t.getData(),t.show=!1}),300)},preMove:function(){var t=this;this.winningIndex=this.goodsDetails.findIndex((function(i){return i.id==t.winningId}));var i=Math.floor(141*Math.random())+120;console.log(this.winningIndex,"this.winningIndex----"),this.moveX=-282*this.winningIndex-1+i+50},yj_huishou:function(){var t=this;this.fuxuan_huishou_id=[],this.jieguo.forEach((function(i){1==i.isCheckeds&&t.fuxuan_huishou_id.push(i.box_prize_record_id)})),this.fuxuan_huishou_id=this.fuxuan_huishou_id.toString(),this.$http({url:"index.php/api/order/fuxuan_huishou_data",header:{token:uni.getStorageSync("user").token},data:{ids:this.fuxuan_huishou_id}}).then((function(i){1==i.data.code&&(t.fuxuan_huishou_data=i.data.data.list,t.fuxuan_huishou_jindou=i.data.data.jindou_num,t.huishou_num=i.data.data.count)})).catch((function(t){})),this.pl_huishou_show=!this.pl_huishou_show},pl_huisou_sub:function(){var t=this;if(""!=this.fuxuan_huishou_id){var i=this.fuxuan_huishou_id.split(",");this.$http({url:"index.php/api/user/exchange",header:{token:uni.getStorageSync("user").token},data:{id:i}}).then((function(i){1==i.data.code?(t.pl_huishou_show=!t.pl_huishou_show,t.$tip.tip("寄售成功"),setTimeout((function(){uni.switchTab({url:"/pages/tabBar/home"})}),2e3)):t.$tip.tip(i.data.msg)})).catch((function(t){}))}else this.$tip.tip("请选中需要寄售的盒子再提交！")},checkAlarm:function(t){console.log("alarm",t);var i=this.jieguo[t];i&&(i.isCheckeds=!i.isCheckeds)}}};i.default=l},ffe3:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={uIcon:e("0223").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-checkbox",style:[t.checkboxStyle]},[e("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[t.iconClass],style:[t.iconStyle],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toggle.apply(void 0,arguments)}}},[e("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:t.checkboxIconSize,color:t.iconColor}})],1),e("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:t.$u.addUnit(t.labelSize)},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClickLabel.apply(void 0,arguments)}}},[t._t("default")],2)],1)},o=[]}}]);