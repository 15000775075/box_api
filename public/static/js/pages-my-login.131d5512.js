(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-login"],{"2bd1":function(t,e,n){"use strict";n.r(e);var i=n("59ff"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"3e8d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-228196fc]{width:%?560?%;background-color:#fff;padding-bottom:%?30?%;color:#000;position:relative;z-index:9}.confrim-btn[data-v-228196fc]{width:%?510?%;color:#fff;background-color:#9400d3;height:%?80?%;border-radius:%?40?%;text-align:center;line-height:%?80?%;margin-left:%?25?%\n\t/* margin: 25rpx; */}.node-box[data-v-228196fc]{width:%?560?%;padding:%?50?%;box-sizing:border-box}",""]),t.exports=e},"4cf3":function(t,e,n){"use strict";n.r(e);var i=n("6972"),a=n("97ae");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("5db2");var c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"8c844bec",null,!1,i["a"],void 0);e["default"]=r.exports},"59ff":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("14d9"),n("d81d");var i={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var t={};return this.elActiveColor&&this.value&&!this.isDisabled&&(t.borderColor=this.elActiveColor,t.backgroundColor=this.elActiveColor),t.width=this.$u.addUnit(this.checkboxSize),t.height=this.$u.addUnit(this.checkboxSize),t},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var t=[];return t.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&t.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled--checked"),t.join(" ")},checkboxStyle:function(){var t={};return this.parent&&this.parent.width&&(t.width=this.parent.width,t.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(t.width="100%",t.flex="0 0 100%"),t}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var t=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){t.parent&&t.parent.emitEvent&&t.parent.emitEvent()}),80)},setValue:function(){var t=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(e){e.value&&t++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&t>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};e.default=i},"5db2":function(t,e,n){"use strict";var i=n("8310"),a=n.n(i);a.a},6972:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uNavbar:n("5e29").default,uField:n("f95a").default,uVerificationCode:n("b354").default,uCheckbox:n("d475").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"loginbox"},[n("u-navbar",{attrs:{"border-bottom":!1,title:" ",immersive:!0,background:{backgroundColor:"rgba(0, 0, 0, 0)"}}}),n("v-uni-view",{staticClass:"top"},[n("v-uni-image",{attrs:{src:"https://img.50api.cn/dingdang/qh.png",mode:"widthFix"}}),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",[t._v("你好，")]),n("v-uni-view",[t._v("欢迎来到"+t._s(t.appName))])],1)],1),n("v-uni-view",{staticClass:"biaodan"},[n("v-uni-view",{staticClass:"row"},[n("u-field",{attrs:{type:"number",label:"+86",maxlength:"11",placeholder:"请填写手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"row"},[n("u-field",{attrs:{type:"number",label:"验证码",placeholder:"清输入验证码"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}},[n("v-uni-text",{staticClass:"huoqu",attrs:{slot:"right"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}},slot:"right"},[t._v(t._s(t.codeText))])],1),n("u-verification-code",{ref:"uCode",attrs:{"change-text":"xs"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}})],1),n("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("登录")])],1),n("v-uni-view",{staticClass:"xf-tip"},[n("u-checkbox",{attrs:{shape:"circle","active-color":"#9400D3"},model:{value:t.agreeChecked,callback:function(e){t.agreeChecked=e},expression:"agreeChecked"}}),n("v-uni-view",{staticClass:"agreeText"},[t._v("我已阅读"),n("v-uni-text",{staticClass:"book-style",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openAgree.apply(void 0,arguments)}}},[t._v("《用户协议》")]),t._v("，"),n("v-uni-text",{staticClass:"book-style",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openAgree.apply(void 0,arguments)}}},[t._v("《隐私协议》")]),t._v("并同意授权获得本机号码")],1),n("v-uni-button",{staticClass:"xf-tip-btn",attrs:{"open-type":"getPhoneNumber"},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("同意并授权")]),n("AgreePop",{attrs:{show:t.showAgree},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.showAgree=!1}}})],1)],1)},o=[]},"6a9a":function(t,e,n){"use strict";var i=n("f92d"),a=n.n(i);a.a},8310:function(t,e,n){var i=n("c14c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("57754607",i,!0,{sourceMap:!1,shadowMode:!1})},"88d9":function(t,e,n){"use strict";var i=n("bdec"),a=n.n(i);a.a},"97ae":function(t,e,n){"use strict";n.r(e);var i=n("c918"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"9d38":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-checkbox[data-v-7e6e0538]{display:inline-flex;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-7e6e0538]{color:#606266;flex:none;display:-webkit-flex;display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-7e6e0538]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-7e6e0538]{border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-7e6e0538]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-7e6e0538]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-7e6e0538]{color:#c8c9cc!important}.u-checkbox__label[data-v-7e6e0538]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-7e6e0538]{color:#c8c9cc}',""]),t.exports=e},"9d75":function(t,e,n){"use strict";n.r(e);var i=n("dd42"),a=n("c98f");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("88d9");var c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"228196fc",null,!1,i["a"],void 0);e["default"]=r.exports},bdec:function(t,e,n){var i=n("3e8d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("30f38198",i,!0,{sourceMap:!1,shadowMode:!1})},c14c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.top[data-v-8c844bec]{position:relative}.top uni-image[data-v-8c844bec]{width:%?750?%}.top .text[data-v-8c844bec]{position:absolute;left:%?60?%;top:%?170?%;font-size:%?50?%}.biaodan[data-v-8c844bec]{padding:%?40?% %?60?%;box-sizing:border-box}.huoqu[data-v-8c844bec]{color:#00dad9}.row[data-v-8c844bec]{margin-bottom:%?30?%}.btn[data-v-8c844bec]{background-color:#00dad9;font-size:%?32?%;margin-top:%?40?%}.loginbox[data-v-8c844bec]{position:relative;min-height:100vh}.other[data-v-8c844bec]{position:absolute;width:%?750?%;left:0;bottom:%?100?%;text-align:center}.other uni-image[data-v-8c844bec]{width:%?80?%;height:%?80?%;margin-top:%?30?%}[data-v-8c844bec] .xf-tip{background-color:rgba(0,0,0,.9);width:%?750?%;position:fixed;bottom:%?0?%;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);left:%?0?%;color:#fbeee6;display:flex;padding:%?30?% %?20?%;box-sizing:border-box;align-items:center;z-index:999}[data-v-8c844bec] .xf-tip-bth{flex-shrink:0;padding:%?20?%!important}[data-v-8c844bec] .xf-tip-btn{padding:%?0?% %?10?%!important;flex-shrink:0;height:%?60?%;line-height:%?60?%;margin-left:%?20?%;font-size:%?20?%;border-radius:%?30?%;background-color:#9400d3;color:#fff}.agreeText[data-v-8c844bec]{word-wrap:break-word;font-size:%?20?%}.book-style[data-v-8c844bec]{color:#409eff}',""]),t.exports=e},c918:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4");var a=i(n("9d75")),o={components:{AgreePop:a.default},data:function(){return{showAgree:!1,agreeChecked:!1,phone:"",num:"",code:"",codeText:"",nickName:"",headImage:"",id:"",appName:"",pnoneNum:""}},onLoad:function(t){t.id&&(this.id=t.id),console.log(this.id,"邀请码"),this.getName()},methods:{openAgree:function(){this.showAgree=!0},applogin:function(){var t=this;uni.login({provider:"weixin",onlyAuthorize:!0,success:function(e){e.code;t.$http({url:"index.php/api/user/getWechatInfoByAPP",data:{code:e.code}}).then((function(e){console.log(e,"1111"),1==e.data.code&&(uni.setStorageSync("user",e.data.data),t.getUser())})).catch((function(t){}))},fail:function(e){t.$tip.tip("授权失败")}})},login:function(t){var e=this;if(t.detail.encryptedData)if(this.agreeChecked){var n=t.detail,i=n.code;n.encryptedData,n.iv;console.log(i),this.$http({url:"index.php/api/user/getPhoneNumber",data:{code:i}}).then((function(t){console.log(t,"1111"),1==t.data.code&&(e.pnoneNum=t.data.phoneNumber,e.weixin())})).catch((function(t){}))}else this.$tip.tip("请先同意以下协议");else this.$tip.tip("授权失败")},codeChange:function(t){this.codeText=t},weixin:function(){var t=this;uni.login({success:function(e){e.code&&(console.log(t.id,"id"),t.$http({url:"index.php/api/user/mpWxLogin",data:{code:e.code,nickName:t.pnoneNum,avatarUrl:"https://xgmh.hui-xiang.cn/assets/img/head.jpg",invitecode:t.id}}).then((function(e){console.log(e,"1111"),1==e.data.code&&(uni.setStorageSync("user",e.data.data),t.getUser())})).catch((function(t){})))}})},getUser:function(){var t=this;this.$http({url:"index.php/api/user/userinfo",header:{token:uni.getStorageSync("user").token}}).then((function(e){console.log(e),1==e.data.code&&(uni.setStorageSync("userInfo",e.data.data),console.log(t.$tip.tip("登录成功")),setTimeout((function(){uni.switchTab({url:"/pages/tabBar/home"})}),700))})).catch((function(t){}))},getName:function(){var t=this;this.$http({url:"index.php/api/index/getSite"}).then((function(e){console.log(e,"1111"),1==e.data.code&&(console.log(111),t.appName=e.data.data)})).catch((function(t){}))},getCode:function(){var t=this;if(this.$refs.uCode.canGetCode){if(0==this.$tip.phoneReg.test(this.phone))return void this.$tip.tip("请填写正确的手机号");uni.showLoading({title:"正在获取验证码"}),this.$http({url:"index.php/api/sms/send",data:{event:"login",mobile:this.phone}}).then((function(e){console.log(e),1==e.data.code&&(uni.hideLoading(),t.$refs.uCode.start())})).catch((function(t){}))}else this.$u.toast("倒计时结束后再发送")},submit:function(){var t=this;0!=this.$tip.phoneReg.test(this.phone)?""!=this.num?this.$http({url:"index.php/api/user/mobilelogin",data:{mobile:this.phone,captcha:this.num}}).then((function(e){console.log(e),1==e.data.code?(uni.setStorageSync("user",e.data.data),uni.$emit("updataUser"),uni.switchTab({url:"/pages/tabBar/home"})):t.$tip.tip(e.data.msg)})).catch((function(t){})):this.$tip.tip("请填写验证码"):this.$tip.tip("请填写正确的手机号")}}};e.default=o},c98f:function(t,e,n){"use strict";n.r(e);var i=n("fc88"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d475:function(t,e,n){"use strict";n.r(e);var i=n("ffe3"),a=n("2bd1");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("6a9a");var c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"7e6e0538",null,!1,i["a"],void 0);e["default"]=r.exports},dd42:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uPopup:n("f243").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-popup",{staticClass:"popup-show",attrs:{mode:"center","border-radius":10,"z-index":99999999,"mask-close-able":!1},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-scroll-view",{staticStyle:{height:"50vh","padding-bottom":"30rpx"},attrs:{"scroll-y":"true"}},[n("v-uni-view",{staticClass:"node-box"},[n("v-uni-rich-text",{attrs:{nodes:t.data}})],1)],1),n("v-uni-view",{staticClass:"confrim-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closed.apply(void 0,arguments)}}},[t._v("我知道了")])],1)],1)],1)},o=[]},f92d:function(t,e,n){var i=n("9d38");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("29afe66e",i,!0,{sourceMap:!1,shadowMode:!1})},fc88:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{show:{type:Boolean,default:function(){return!1}},type:{type:String,default:function(){return"user_agreement"}}},created:function(){this.getData()},data:function(){return{data:""}},methods:{closed:function(){this.$emit("close")},getData:function(){var t=this;this.$http({url:"index.php/api/common/agreement",data:{name:this.type}}).then((function(e){console.log(e),1==e.data.code?t.data=e.data.data.content:t.$tip.tip(e.data.msg)})).catch((function(t){}))}}};e.default=i},ffe3:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("0223").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-checkbox",style:[t.checkboxStyle]},[n("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[t.iconClass],style:[t.iconStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggle.apply(void 0,arguments)}}},[n("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:t.checkboxIconSize,color:t.iconColor}})],1),n("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:t.$u.addUnit(t.labelSize)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLabel.apply(void 0,arguments)}}},[t._t("default")],2)],1)},o=[]}}]);