(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cangku-piliang_edit"],{"0552":function(t,e,i){"use strict";i.r(e);var n=i("9aed"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"069d":function(t,e,i){"use strict";i.r(e);var n=i("5fcf8"),a=i("0712");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9e66");var r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"54ca0272",null,!1,n["a"],void 0);e["default"]=c.exports},"0712":function(t,e,i){"use strict";i.r(e);var n=i("9302"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"086c":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("133a").default,uCheckbox:i("953e").default,uEmpty:i("b631").default,uPopup:i("bb8f").default,uInput:i("069d").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("u-navbar",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"goodsList"},[t._l(t.goodsList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"list"},[i("v-uni-view",{staticClass:"goods"},[i("u-checkbox",{attrs:{shape:"circle","active-color":"#5EBD8A",size:"40","label-size":"28"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change(n)}},model:{value:e.check,callback:function(i){t.$set(e,"check",i)},expression:"item.check"}}),i("v-uni-image",{attrs:{src:e.goods_image,mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.list_on(n)}}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"tit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.list_on(n)}}},[t._v(t._s(e.goods_name))]),"bag"==e.status&&1==t.type?i("v-uni-view",{staticClass:"bi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.list_on(n)}}},[t._v("可兑换："),i("v-uni-text",[t._v(t._s(e.goods_coin_price))]),t._v("幸运币")],1):t._e()],1)],1)],1)})),i("v-uni-view",{staticStyle:{height:"100rpx"}}),i("u-empty",{attrs:{text:"暂无数据",mode:"list",show:t.nullShow,"margin-top":"400"}})],2),0==t.isOne&&1==t.type?i("v-uni-view",{staticClass:"newagain"},[t._v("新人首次兑换，额外得重抽卡*1")]):t._e(),3==t.type?i("v-uni-view",{staticClass:"newagain"},[t._v("单次提货满3件及以上包邮")]):t._e(),i("v-uni-view",{staticClass:"bottom11 n-flex-row n-justify-between n-align-center"},[i("u-checkbox",{attrs:{shape:"circle","active-color":"#5EBD8A","label-size":"28",size:"40"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.allSelectChange.apply(void 0,arguments)}},model:{value:t.allSelect,callback:function(e){t.allSelect=e},expression:"allSelect"}},[t._v("全选")]),1==t.type?i("v-uni-view",{staticClass:"yixuan"},[i("v-uni-view",{staticClass:"text"},[t._v("已选"+t._s(t.xz_count)+"件|合计："),i("v-uni-view",[t._v(t._s(t.xz_jiazhi)),i("v-uni-text",[t._v("幸运币")])],1)],1)],1):t._e(),3==t.type?i("v-uni-view",{staticClass:"yixuan"},[i("v-uni-view",{staticClass:"text"},[t._v("已选"+t._s(t.xz_count)+"件商品")])],1):t._e(),1==t.type?i("v-uni-view",{staticClass:"btns n-flex-row"},[i("v-uni-view",{staticClass:"btn ti",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.duihuan1.apply(void 0,arguments)}}},[t._v("立即兑换")])],1):t._e(),2==t.type?i("v-uni-view",{staticClass:"btns n-flex-row"},[i("v-uni-view",{staticClass:"btn ti",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.zhuanzheng.apply(void 0,arguments)}}},[t._v("立即转增")])],1):t._e(),3==t.type?i("v-uni-view",{staticClass:"btns n-flex-row"},[i("v-uni-view",{staticClass:"btn ti",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tihuo.apply(void 0,arguments)}}},[t._v("立即提货")])],1):t._e()],1),i("u-popup",{attrs:{mode:"center","border-radius":"20"},model:{value:t.zhuan,callback:function(e){t.zhuan=e},expression:"zhuan"}},[i("v-uni-view",{staticClass:"zhuan"},[i("v-uni-view",{staticClass:"tit"},[t._v("请输入转赠人的手机号")]),i("u-input",{attrs:{type:"number",maxlength:"11",border:!0,placeholder:"请输入转赠人注册手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),i("v-uni-view",{staticClass:"tip"},[t._v("注：一旦转赠成功不可退货，请谨慎操作")]),i("v-uni-view",{staticClass:"btns1"},[i("v-uni-view",{staticClass:"btn11 a",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.zhuan=!1}}},[t._v("取消")]),i("v-uni-view",{staticClass:"btn11 b",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.zhuanz.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)},o=[]},"0d7d":function(t,e,i){"use strict";i.r(e);var n=i("af0d"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"133a":function(t,e,i){"use strict";i.r(e);var n=i("4e1b"),a=i("0d7d");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a020");var r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"2920cc37",null,!1,n["a"],void 0);e["default"]=c.exports},"1b14":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("14d9"),i("d81d");var n={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var t={};return this.elActiveColor&&this.value&&!this.isDisabled&&(t.borderColor=this.elActiveColor,t.backgroundColor=this.elActiveColor),t.width=this.$u.addUnit(this.checkboxSize),t.height=this.$u.addUnit(this.checkboxSize),t},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var t=[];return t.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&t.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled--checked"),t.join(" ")},checkboxStyle:function(){var t={};return this.parent&&this.parent.width&&(t.width=this.parent.width,t.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(t.width="100%",t.flex="0 0 100%"),t}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var t=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){t.parent&&t.parent.emitEvent&&t.parent.emitEvent()}),80)},setValue:function(){var t=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(e){e.value&&t++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&t>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};e.default=n},"276f":function(t,e,i){var n=i("7588");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("14106515",n,!0,{sourceMap:!1,shadowMode:!1})},"2cd7":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-f52a32c0]{background-color:#f4f4fc}body.?%PAGE?%[data-v-f52a32c0]{background-color:#f4f4fc}.slot-wrap[data-v-f52a32c0]{display:flex;align-items:center;flex:1;padding:0 %?30?%}.swiper-box[data-v-f52a32c0]{width:100vw;height:calc(100vh - %?180?%)}.scroll-view[data-v-f52a32c0]{width:100%;height:100%}.topbtns[data-v-f52a32c0]{padding:%?20?% %?30?%;box-sizing:border-box;background-color:#fff}.topbtns .topbtn[data-v-f52a32c0]{text-align:center;line-height:%?55?%;width:%?140?%;border:%?1?% solid #eee;margin-right:%?20?%}.topbtns .active[data-v-f52a32c0]{background-color:#ebfdff;color:#2ac2b3;border:%?1?% solid #cbfbff}.pl_duihuan[data-v-f52a32c0]{margin:%?20?% %?20?% 0 %?20?%;padding:%?20?%;box-sizing:border-box;background-color:#fff;display:flex;justify-content:space-between}.pl_duihuan .left uni-text[data-v-f52a32c0]{font-weight:600}.goodsList[data-v-f52a32c0]{padding:%?20?%;box-sizing:border-box}.goodsList .list[data-v-f52a32c0]{padding:%?20?%;box-sizing:border-box;background-color:#fff;margin-bottom:%?20?%}.goodsList .list .goods[data-v-f52a32c0]{display:flex;padding-bottom:%?20?%;border-bottom:%?1?% solid #f3f3f3}.goodsList .list .goods1[data-v-f52a32c0]{display:flex;align-items:center}.goodsList .list .goods1 .info[data-v-f52a32c0]{margin-left:%?20?%;width:%?380?%}.goodsList .list .goods1 .tit[data-v-f52a32c0]{font-size:%?30?%;font-weight:700;margin-bottom:%?20?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.goodsList .list .goods1 .row[data-v-f52a32c0]{color:#999}.goodsList .list .goods1 .state[data-v-f52a32c0]{font-weight:700;font-size:%?28?%;color:#2ac2b3;margin-left:%?16?%;flex-shrink:0}.goodsList .list .goods uni-image[data-v-f52a32c0],.goodsList .list .goods1 uni-image[data-v-f52a32c0]{width:%?150?%;height:%?150?%;flex-shrink:0}.goods .info[data-v-f52a32c0]{margin-left:%?20?%;width:100%}.goods .info .bi[data-v-f52a32c0]{color:#f87a01;margin-top:%?10?%}.goods .info .bi uni-text[data-v-f52a32c0]{font-size:%?34?%;margin-right:%?10?%;font-weight:700}.goods .info .time[data-v-f52a32c0]{color:#999;font-size:%?24?%;margin-top:%?15?%}.tip[data-v-f52a32c0]{padding-top:%?10?%}.tip .tit[data-v-f52a32c0]{font-size:%?24?%;color:#999}.tip .tit uni-text[data-v-f52a32c0]{color:#000;font-weight:700}.tip .btns[data-v-f52a32c0]{width:100%;justify-content:flex-end}.tip .btn[data-v-f52a32c0],.bottom11 .btn[data-v-f52a32c0]{padding:%?12?% %?50?%;\r\n\t/* margin-left: 20rpx;\r\n\tmargin-top: 20rpx; */margin:%?10?% %?10?% 0;white-space:nowrap}.tip .btns .btn[data-v-f52a32c0]:last-child{margin-right:0}.tip .ti[data-v-f52a32c0],.bottom11 .ti[data-v-f52a32c0]{\r\n\t/* border: 1rpx solid #F3F3F3; */}.tip .dui[data-v-f52a32c0],.bottom11 .dui[data-v-f52a32c0]{background-color:#70dde0;border:%?1?% solid #70dde0}.againbox[data-v-f52a32c0]{position:relative}.again[data-v-f52a32c0]{position:absolute;right:%?-5?%;top:%?-16?%;padding:%?8?% %?10?%;color:#f87a01;background-color:#fffcdd;font-size:%?20?%}.newagain[data-v-f52a32c0]{position:fixed;left:0;bottom:%?135?%;width:100%;text-align:center;color:#000;\r\n\t/* background-image: linear-gradient(#8DE7EC, #e6ffff); */background-color:#ecf5ff;\r\n\t/* border: 1rpx solid #D1FBFE; */padding:%?10?%;\r\n\t/* border-radius: 60rpx; */box-shadow:0 %?10?% %?30?% #bfd7db}.zhuan[data-v-f52a32c0]{width:%?600?%;text-align:center;padding:%?30?%;box-sizing:border-box;background-color:#fff}.zhuan .tit[data-v-f52a32c0]{font-weight:700;font-size:%?32?%;margin-bottom:%?30?%}.zhuan .tip[data-v-f52a32c0]{color:#fa3534;margin-top:%?10?%}.zhuan .btns1[data-v-f52a32c0]{display:flex;justify-content:space-between;margin-top:%?40?%}.zhuan .btns1 .btn11[data-v-f52a32c0]{width:45%;line-height:%?70?%;border-radius:%?10?%}.zhuan .btns1 .a[data-v-f52a32c0]{background-color:#f3f3f3}.zhuan .btns1 .b[data-v-f52a32c0]{background-color:#70dde0}.bottom11[data-v-f52a32c0]{padding:%?20?% %?30?%;background-color:#fff;position:fixed;left:0;\r\nbottom:1px;\r\n\r\n\r\nbox-sizing:border-box;width:%?750?%;height:%?130?%;border-top:%?1?% solid #f3f3f3}.bottom11 .yixuan[data-v-f52a32c0]{font-size:%?28?%;\r\n\t/* width: 30%; */flex:1;text-align:right;display:flex;justify-content:flex-end}.bottom11 .yixuan .text uni-view[data-v-f52a32c0]{color:#f87a01;font-size:%?34?%}.bottom11 .yixuan .text uni-view uni-text[data-v-f52a32c0]{font-size:%?28?%}.topNav[data-v-f52a32c0]{position:fixed;left:0;top:0;width:100%;z-index:9}.btns[data-v-f52a32c0]{background-color:#30d5c5;margin-left:5px}.btns .btn[data-v-f52a32c0]{padding:8px 25px;margin:0;white-space:nowrap;font-weight:600}",""]),t.exports=e},"34c9":function(t,e,i){var n=i("c7f0");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1443e4ac",n,!0,{sourceMap:!1,shadowMode:!1})},"43d9":function(t,e,i){var n=i("2cd7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("00ff1d77",n,!0,{sourceMap:!1,shadowMode:!1})},"4b5b":function(t,e,i){"use strict";i.r(e);var n=i("1b14"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"4e1b":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("4342").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},o=[]},"5926d":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("4342").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-checkbox",style:[t.checkboxStyle]},[i("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[t.iconClass],style:[t.iconStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggle.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:t.checkboxIconSize,color:t.iconColor}})],1),i("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:t.$u.addUnit(t.labelSize)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLabel.apply(void 0,arguments)}}},[t._t("default")],2)],1)},o=[]},"5fcf8":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("4342").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?i("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):i("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?i("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[i("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?i("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[i("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?i("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[i("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},o=[]},"62da":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-checkbox[data-v-7e6e0538]{display:inline-flex;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-7e6e0538]{color:#606266;flex:none;display:-webkit-flex;display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-7e6e0538]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-7e6e0538]{border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-7e6e0538]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-7e6e0538]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-7e6e0538]{color:#c8c9cc!important}.u-checkbox__label[data-v-7e6e0538]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-7e6e0538]{color:#c8c9cc}',""]),t.exports=e},"652d":function(t,e,i){"use strict";var n=i("80c6"),a=i.n(n);a.a},7588:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-input[data-v-54ca0272]{position:relative;flex:1;display:flex;flex-direction:row}.u-input__input[data-v-54ca0272]{font-size:%?28?%;color:#303133;flex:1}.u-input__textarea[data-v-54ca0272]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;flex:1}.u-input--border[data-v-54ca0272]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-54ca0272]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-54ca0272]{margin-left:%?10?%}.u-input__right-icon--select[data-v-54ca0272]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-54ca0272]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},"80c6":function(t,e,i){var n=i("9c5c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("32d5463a",n,!0,{sourceMap:!1,shadowMode:!1})},9302:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("498a");var a=n(i("95dc")),o={name:"u-input",mixins:[a.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,i=t.detail.value;this.trim&&(i=this.$u.trim(i)),this.$emit("input",i),this.defaultValue=i,setTimeout((function(){e.dispatch("u-form-item","on-form-change",i)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=o},"953d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};e.default=n},"953e":function(t,e,i){"use strict";i.r(e);var n=i("5926d"),a=i("4b5b");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("c2ef");var r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"7e6e0538",null,!1,n["a"],void 0);e["default"]=c.exports},"95dc":function(t,e,i){"use strict";function n(t,e,i){this.$children.map((function(a){t===a.$options.name?a.$emit.apply(a,[e].concat(i)):n.apply(a,[t,e].concat(i))}))}i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d"),i("99af");var a={methods:{dispatch:function(t,e,i){var n=this.$parent||this.$root,a=n.$options.name;while(n&&(!a||a!==t))n=n.$parent,n&&(a=n.$options.name);n&&n.$emit.apply(n,[e].concat(i))},broadcast:function(t,e,i){n.call(this,t,e,i)}}};e.default=a},"9aed":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("a9e3"),i("14d9"),i("ac1f"),i("00b4");var n={data:function(){return{title:"",type:0,goodsList:[],nullShow:!1,isOne:"0",xz_count:0,xz_jiazhi:0,zhuan:!1,phone:"",zhuanId:"",id:0}},onLoad:function(t){this.type=t.type,this.id=t.id,1==this.type&&(this.title="批量兑换"),2==this.type&&(this.title="批量转增"),3==this.type&&(this.title="批量提货"),this.getData(0)},onShow:function(){this.getData(0)},computed:{allSelect:{set:function(t){this.goodsList.forEach((function(e){e.check=t}))},get:function(){return this.goodsList.every((function(t){return 1==t.check}))}}},methods:{allSelectChange:function(){var t=this;this.allSelect=!this.allSelect;var e=[];this.xz_jiazhi=Number(0),this.goodsList.forEach((function(i){1==i.check&&(t.xz_jiazhi=(Number(t.xz_jiazhi)+Number(i.goods_coin_price)).toFixed(2),e.push(i))})),this.xz_count=e.length},change:function(t){var e=this;this.goodsList[t].check=!this.goodsList[t].check;var i=[];this.xz_jiazhi=Number(0),this.goodsList.forEach((function(t){1==t.check&&(e.xz_jiazhi=(Number(e.xz_jiazhi)+Number(t.goods_coin_price)).toFixed(2),i.push(t))})),this.xz_count=i.length},list_on:function(t){var e=this;this.goodsList[t].check=!this.goodsList[t].check;var i=[];this.xz_jiazhi=Number(0),this.goodsList.forEach((function(t){1==t.check&&(e.xz_jiazhi=(Number(e.xz_jiazhi)+Number(t.goods_coin_price)).toFixed(2),i.push(t))})),this.xz_count=i.length},duihuan1:function(){var t=[];if(this.goodsList.forEach((function(e){1==e.check&&t.push(e)})),0!=t.length){var e=[];t.forEach((function(t){e.push({image:t.goods_image,name:t.goods_name,price:t.goods_coin_price,id:t.id})})),uni.setStorageSync("dui",e),uni.navigateTo({url:"/pages/cangku/duihuan"}),console.log(e)}else this.$tip.tip("请选择商品")},zhuanzheng:function(){var t=[];this.goodsList.forEach((function(e){1==e.check&&t.push(e.id)})),1==t.length&&(t=t[0]),console.log(t),this.zhuanId=t,0!=t.length?this.zhuan=!0:this.$tip.tip("请选择商品")},zhuanz:function(){var t=this;this.$u.test.mobile(this.phone)?this.$http({url:"index.php/api/user/echargez",header:{token:uni.getStorageSync("user").token},data:{prizeid:this.zhuanId,mobile:this.phone}}).then((function(e){console.log(e),1==e.data.code?(t.zhuan=!1,t.phone="",t.current=2,t.swiperCurrent=2,setTimeout((function(){t.$tip.tip("转赠成功")}),300),setTimeout((function(){uni.navigateBack({})}),1500)):t.$tip.tip(e.data.msg)})).catch((function(t){})):this.$tip.tip("请输入正确的手机号")},tihuo:function(){var t=[],e=[];if(this.goodsList.forEach((function(i){if(1==i.check){t.push(i.id);var n={image:i.goods_image,name:i.goods_name,yunfei:i.delivery_fee};e.push(n)}})),1==t.length){t=t[0];var i=t}else i=t.join();console.log(e),0!=t.length?(uni.setStorageSync("tihuo_data",e),uni.navigateTo({url:"/pages/cangku/confirmOrder_th?ids="+i})):this.$tip.tip("请选择提货商品")},getData:function(t){var e=this;uni.showLoading({title:"加载中"}),this.goodsList=[],this.$http({url:"index.php/api/order/getMhOrder",header:{token:uni.getStorageSync("user").token},data:{status:t}}).then((function(t){uni.hideLoading(),console.log(t,"商品"),1==t.data.code?(0==t.data.data.length?e.nullShow=!0:e.nullShow=!1,t.data.data.list.forEach((function(t){t.check=!1})),e.goodsList=t.data.data.list,3==e.type&&e.goodsList.forEach((function(t){t.id==e.id&&(t.check=!0,e.xz_count=1)})),e.isOne=t.data.data.cck):(e.nullShow=!0,e.$tip.tip(t.data.msg))})).catch((function(t){}))}}};e.default=n},"9c5c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-empty[data-v-1009c249]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center;height:100%}.u-image[data-v-1009c249]{margin-bottom:%?20?%}.u-slot-wrap[data-v-1009c249]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}',""]),t.exports=e},"9db5":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("4342").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-empty",style:{marginTop:t.marginTop+"rpx"}},[i("u-icon",{attrs:{name:t.src?t.src:"empty-"+t.mode,"custom-style":t.iconStyle,label:t.text?t.text:t.icons[t.mode],"label-pos":"bottom","label-color":t.color,"label-size":t.fontSize,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),i("v-uni-view",{staticClass:"u-slot-wrap"},[t._t("bottom")],2)],1):t._e()},o=[]},"9e66":function(t,e,i){"use strict";var n=i("276f"),a=i.n(n);a.a},a020:function(t,e,i){"use strict";var n=i("34c9"),a=i.n(n);a.a},a205:function(t,e,i){"use strict";i.r(e);var n=i("953d"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},af0d:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n=uni.getSystemInfoSync(),a={},o={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=o},b631:function(t,e,i){"use strict";i.r(e);var n=i("9db5"),a=i("a205");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("652d");var r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"1009c249",null,!1,n["a"],void 0);e["default"]=c.exports},bdf3:function(t,e,i){"use strict";i.r(e);var n=i("086c"),a=i("0552");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e04b");var r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"f52a32c0",null,!1,n["a"],void 0);e["default"]=c.exports},c2ef:function(t,e,i){"use strict";var n=i("e1c2"),a=i.n(n);a.a},c7f0:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-navbar[data-v-2920cc37]{width:100%}.u-navbar-fixed[data-v-2920cc37]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-2920cc37]{width:100%}.u-navbar-inner[data-v-2920cc37]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-2920cc37]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-2920cc37]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-2920cc37]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-2920cc37]{flex:1}.u-title[data-v-2920cc37]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-2920cc37]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-2920cc37]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=e},e04b:function(t,e,i){"use strict";var n=i("43d9"),a=i.n(n);a.a},e1c2:function(t,e,i){var n=i("62da");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5acb5517",n,!0,{sourceMap:!1,shadowMode:!1})}}]);