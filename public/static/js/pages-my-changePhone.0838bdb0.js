(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-changePhone"],{"1f88":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".top[data-v-4e28ace8]{position:relative}.top uni-image[data-v-4e28ace8]{width:%?750?%}.top .text[data-v-4e28ace8]{position:absolute;left:%?60?%;top:%?170?%;font-size:%?50?%}.biaodan[data-v-4e28ace8]{padding:%?40?% %?60?%;box-sizing:border-box}.huoqu[data-v-4e28ace8]{color:#00dad9}.row[data-v-4e28ace8]{margin-bottom:%?30?%}.btn[data-v-4e28ace8]{background-color:#00dad9;font-size:%?32?%;margin-top:%?40?%}",""]),t.exports=e},8437:function(t,e,n){"use strict";var i=n("c63c"),a=n.n(i);a.a},"8ae6":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uNavbar:n("5e29").default,uField:n("f95a").default,uVerificationCode:n("b354").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{"border-bottom":!1,title:" ",immersive:!0,background:{backgroundColor:"rgba(0, 0, 0, 0)"}}}),n("v-uni-view",{staticClass:"top"},[n("v-uni-image",{attrs:{src:"https://img.50api.cn/dingdang/qh.png",mode:"widthFix"}}),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",[t._v("你好，")]),n("v-uni-view",[t._v("请绑定手机号")])],1)],1),n("v-uni-view",{staticClass:"biaodan"},[n("v-uni-view",{staticClass:"row"},[n("u-field",{attrs:{type:"number",label:"+86",maxlength:"11",placeholder:"请填写手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"row"},[n("u-field",{attrs:{type:"number",label:"验证码",placeholder:"清输入验证码"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}},[n("v-uni-text",{staticClass:"huoqu",attrs:{slot:"right"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}},slot:"right"},[t._v(t._s(t.codeText))])],1),n("u-verification-code",{ref:"uCode",attrs:{"change-text":"xs"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.codeChange.apply(void 0,arguments)}}})],1),n("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("绑定")])],1)],1)},o=[]},c481:function(t,e,n){"use strict";n.r(e);var i=n("8ae6"),a=n("cd68");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("8437");var u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"4e28ace8",null,!1,i["a"],void 0);e["default"]=c.exports},c63c:function(t,e,n){var i=n("1f88");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0727570c",i,!0,{sourceMap:!1,shadowMode:!1})},c86f:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4");var i={data:function(){return{phone:"",num:"",code:"",codeText:""}},methods:{codeChange:function(t){this.codeText=t},getCode:function(){var t=this;if(this.$refs.uCode.canGetCode){if(0==this.$tip.phoneReg.test(this.phone))return void this.$tip.tip("请填写正确的手机号");uni.showLoading({title:"正在获取验证码"}),this.$http({url:"index.php/api/sms/send",data:{event:"bindmobile",mobile:this.phone}}).then((function(e){1==e.data.code&&(uni.hideLoading(),t.$refs.uCode.start())})).catch((function(t){}))}else this.$u.toast("倒计时结束后再发送")},submit:function(){var t=this;0!=this.$tip.phoneReg.test(this.phone)?""!=this.num?this.$http({url:"index.php/api/user/bindMobile",data:{mobile:this.phone,captcha:this.num}}).then((function(e){console.log(e),1==e.data.code?(t.$tip.tip("绑定成功"),t.getUser(),setTimeout((function(){uni.switchTab({url:"/pages/tabBar/home"})}),700)):t.$tip.tip(e.data.msg)})).catch((function(t){})):this.$tip.tip("请填写验证码"):this.$tip.tip("请填写正确的手机号")},getUser:function(){this.$http({url:"index.php/api/user/userinfo",header:{token:uni.getStorageSync("user").token}}).then((function(t){1==t.data.code&&uni.setStorageSync("userInfo",t.data.data)})).catch((function(t){}))}}};e.default=i},cd68:function(t,e,n){"use strict";n.r(e);var i=n("c86f"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);