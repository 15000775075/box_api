(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-addAddress"],{"0537":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-switch[data-v-0d3821ba]{position:relative;display:inline-block;box-sizing:initial;width:2em;height:1em;background-color:#fff;border:1px solid rgba(0,0,0,.1);border-radius:1em;transition:background-color .3s;font-size:%?50?%}.u-switch__node[data-v-0d3821ba]{display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;top:0;left:0;border-radius:100%;z-index:1;background-color:#fff;background-color:#fff;box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);transition:-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05),-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:-webkit-transform cubic-bezier(.3,1.05,.4,1.05);transition:transform cubic-bezier(.3,1.05,.4,1.05);transition:transform cubic-bezier(.3,1.05,.4,1.05),-webkit-transform cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05)}.u-switch__loading[data-v-0d3821ba]{display:flex;flex-direction:row;align-items:center;justify-content:center}.u-switch--on[data-v-0d3821ba]{background-color:#1989fa}.u-switch--on .u-switch__node[data-v-0d3821ba]{-webkit-transform:translateX(100%);transform:translateX(100%)}.u-switch--disabled[data-v-0d3821ba]{opacity:.4}',""]),t.exports=e},"4d98":function(t,e,i){var n=i("dbc3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("fd118d16",n,!0,{sourceMap:!1,shadowMode:!1})},"549e":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("498a");var n={name:"u-field",props:{icon:String,rightIcon:String,required:Boolean,label:String,password:Boolean,clearable:{type:Boolean,default:!0},labelWidth:{type:[Number,String],default:130},labelAlign:{type:String,default:"left"},inputAlign:{type:String,default:"left"},iconColor:{type:String,default:"#606266"},autoHeight:{type:Boolean,default:!0},errorMessage:{type:[String,Boolean],default:""},placeholder:String,placeholderStyle:String,focus:Boolean,fixed:Boolean,value:[Number,String],type:{type:String,default:"text"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},labelPosition:{type:String,default:"left"},fieldStyle:{type:Object,default:function(){return{}}},clearSize:{type:[Number,String],default:30},iconStyle:{type:Object,default:function(){return{}}},borderTop:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},trim:{type:Boolean,default:!0}},data:function(){return{focused:!1,itemIndex:0}},computed:{inputWrapStyle:function(){var t={};return t.textAlign=this.inputAlign,"left"==this.labelPosition?t.margin="0 8rpx":t.marginRight="8rpx",t},rightIconStyle:function(){var t={};return"top"==this.arrowDirection&&(t.transform="roate(-90deg)"),"bottom"==this.arrowDirection?t.transform="roate(90deg)":t.transform="roate(0deg)",t},labelStyle:function(){var t={};return"left"==this.labelAlign&&(t.justifyContent="flext-start"),"center"==this.labelAlign&&(t.justifyContent="center"),"right"==this.labelAlign&&(t.justifyContent="flext-end"),t},justifyContent:function(){return"left"==this.labelAlign?"flex-start":"center"==this.labelAlign?"center":"right"==this.labelAlign?"flex-end":void 0},inputMaxlength:function(){return Number(this.maxlength)},fieldInnerStyle:function(){var t={};return"left"==this.labelPosition?t.flexDirection="row":t.flexDirection="column",t}},methods:{onInput:function(t){var e=t.detail.value;this.trim&&(e=this.$u.trim(e)),this.$emit("input",e)},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t)},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},rightIconClick:function(){this.$emit("right-icon-click"),this.$emit("click")},fieldClick:function(){this.$emit("click")}}};e.default=n},"5bd8":function(t,e,i){"use strict";i.r(e);var n=i("dd0c"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"5f0d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"u-switch",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:50},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#ffffff"},value:{type:Boolean,default:!1},vibrateShort:{type:Boolean,default:!1},activeValue:{type:[Number,String,Boolean],default:!0},inactiveValue:{type:[Number,String,Boolean],default:!1}},data:function(){return{}},computed:{switchStyle:function(){var t={};return t.fontSize=this.size+"rpx",t.backgroundColor=this.value?this.activeColor:this.inactiveColor,t},loadingColor:function(){return this.value?this.activeColor:null}},methods:{onClick:function(){var t=this;this.disabled||this.loading||(this.vibrateShort&&uni.vibrateShort(),this.$emit("input",!this.value),this.$nextTick((function(){t.$emit("change",t.value?t.activeValue:t.inactiveValue)})))}}};e.default=n},"6c4d":function(t,e,i){"use strict";i.r(e);var n=i("75b0"),a=i("bf0a");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("c7eb0");var r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"57096f1c",null,!1,n["a"],void 0);e["default"]=l.exports},"70fb":function(t,e,i){var n=i("0537");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("01f06faa",n,!0,{sourceMap:!1,shadowMode:!1})},"73ac":function(t,e,i){"use strict";i.r(e);var n=i("f9f7"),a=i("7c6d");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("79ce");var r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"0d3821ba",null,!1,n["a"],void 0);e["default"]=l.exports},"75b0":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("b193").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-field",class:{"u-border-top":t.borderTop,"u-border-bottom":t.borderBottom}},[i("v-uni-view",{staticClass:"u-field-inner",class:["textarea"==t.type?"u-textarea-inner":"","u-label-postion-"+t.labelPosition]},[i("v-uni-view",{staticClass:"u-label",class:[t.required?"u-required":""],style:{justifyContent:t.justifyContent,flex:"left"==t.labelPosition?"0 0 "+t.labelWidth+"rpx":"1"}},[t.icon?i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-icon",attrs:{size:"32","custom-style":t.iconStyle,name:t.icon,color:t.iconColor}})],1):t._e(),t._t("icon"),i("v-uni-text",{staticClass:"u-label-text",class:[this.$slots.icon||t.icon?"u-label-left-gap":""]},[t._v(t._s(t.label))])],2),i("v-uni-view",{staticClass:"fild-body"},[i("v-uni-view",{staticClass:"u-flex-1 u-flex",style:[t.inputWrapStyle]},["textarea"==t.type?i("v-uni-textarea",{staticClass:"u-flex-1 u-textarea-class",style:[t.fieldStyle],attrs:{value:t.value,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,focus:t.focus,autoHeight:t.autoHeight,fixed:t.fixed},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.fieldClick.apply(void 0,arguments)}}}):i("v-uni-input",{staticClass:"u-flex-1 u-field__input-wrap",style:[t.fieldStyle],attrs:{type:t.type,value:t.value,password:t.password||"password"===this.type,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.fieldClick.apply(void 0,arguments)}}})],1),t.clearable&&""!=t.value&&t.focused?i("u-icon",{staticClass:"u-clear-icon",attrs:{size:t.clearSize,name:"close-circle-fill",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"u-button-wrap"},[t._t("right")],2),t.rightIcon?i("u-icon",{staticClass:"u-arror-right",style:[t.rightIconStyle],attrs:{name:t.rightIcon,color:"#c0c4cc",size:"26"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightIconClick.apply(void 0,arguments)}}}):t._e()],1)],1),!1!==t.errorMessage&&""!=t.errorMessage?i("v-uni-view",{staticClass:"u-error-message",style:{paddingLeft:t.labelWidth+"rpx"}},[t._v(t._s(t.errorMessage))]):t._e()],1)},o=[]},"786f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-abefac50]{background-color:#f4f4fc}body.?%PAGE?%[data-v-abefac50]{background-color:#f4f4fc}.addbox[data-v-abefac50]{position:relative;min-height:100vh}.row[data-v-abefac50]{width:%?710?%;padding:%?10?% 0;background-color:#fff;margin:%?20?% auto;border-radius:%?10?%}.btn[data-v-abefac50]{width:%?710?%;position:absolute;left:%?20?%;bottom:%?40?%;background-color:#2ac2b3;color:#fff}",""]),t.exports=e},7986:function(t,e,i){"use strict";i.r(e);var n=i("9694"),a=i("5bd8");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a712");var r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"abefac50",null,!1,n["a"],void 0);e["default"]=l.exports},"79ce":function(t,e,i){"use strict";var n=i("70fb"),a=i.n(n);a.a},"7c6d":function(t,e,i){"use strict";i.r(e);var n=i("5f0d"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"8d33":function(t,e,i){var n=i("786f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("189cd074",n,!0,{sourceMap:!1,shadowMode:!1})},9694:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("536a").default,uField:i("6c4d").default,uSwitch:i("73ac").default,uPicker:i("56bd").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"addbox"},[i("u-navbar",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"row"},[i("u-field",{attrs:{"border-bottom":!1,label:"收件人",placeholder:"请填写收货人姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-uni-view",{staticClass:"row"},[i("u-field",{attrs:{type:"number","border-bottom":!1,maxlength:"11",label:"手机号",placeholder:"请填写手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"row",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0}}},[i("u-field",{attrs:{disabled:!0,"right-icon":"arrow-right","border-bottom":!1,label:"所在地区",placeholder:"点击选择地址"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),i("v-uni-view",{staticClass:"row"},[i("u-field",{attrs:{type:"textarea","border-bottom":!1,label:"详细地址",placeholder:"详细的地址，如道路、小区、门牌号等"},model:{value:t.addressInfo,callback:function(e){t.addressInfo=e},expression:"addressInfo"}})],1),i("v-uni-view",{staticClass:"row"},[i("u-field",{attrs:{disabled:!0,"border-bottom":!1,label:"详细地址"}},[i("v-uni-view",{attrs:{slot:"right"},slot:"right"},[i("u-switch",{attrs:{"active-color":"#2AC2B3","inactive-color":"#E6E6E6"},model:{value:t.isdefault,callback:function(e){t.isdefault=e},expression:"isdefault"}})],1)],1)],1),1==t.type?i("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("保存地址")]):i("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.edit.apply(void 0,arguments)}}},[t._v("修改地址")]),i("u-picker",{attrs:{mode:"region"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},o=[]},a712:function(t,e,i){"use strict";var n=i("8d33"),a=i.n(n);a.a},bf0a:function(t,e,i){"use strict";i.r(e);var n=i("549e"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c7eb0:function(t,e,i){"use strict";var n=i("4d98"),a=i.n(n);a.a},dbc3:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-field[data-v-57096f1c]{font-size:%?28?%;padding:%?20?% %?28?%;text-align:left;position:relative;color:#303133}.u-field-inner[data-v-57096f1c]{display:flex;flex-direction:row;align-items:center}.u-textarea-inner[data-v-57096f1c]{align-items:flex-start}.u-textarea-class[data-v-57096f1c]{min-height:%?96?%;width:auto;font-size:%?28?%}.fild-body[data-v-57096f1c]{display:flex;flex-direction:row;flex:1;align-items:center}.u-arror-right[data-v-57096f1c]{margin-left:%?8?%}.u-label-text[data-v-57096f1c]{display:inline-flex}.u-label-left-gap[data-v-57096f1c]{margin-left:%?6?%}.u-label-postion-top[data-v-57096f1c]{flex-direction:column;align-items:flex-start}.u-label[data-v-57096f1c]{width:%?130?%;flex:1 1 %?130?%;text-align:left;position:relative;display:flex;flex-direction:row;align-items:center}.u-required[data-v-57096f1c]::before{content:"*";position:absolute;left:%?-16?%;font-size:14px;color:#fa3534;height:9px;line-height:1}.u-field__input-wrap[data-v-57096f1c]{position:relative;overflow:hidden;font-size:%?28?%;height:%?48?%;flex:1;width:auto}.u-clear-icon[data-v-57096f1c]{display:flex;flex-direction:row;align-items:center}.u-error-message[data-v-57096f1c]{color:#fa3534;font-size:%?26?%;text-align:left}.placeholder-style[data-v-57096f1c]{color:#969799}.u-input-class[data-v-57096f1c]{font-size:%?28?%}.u-button-wrap[data-v-57096f1c]{margin-left:%?8?%}',""]),t.exports=e},dd0c:function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac1f"),i("00b4");var n={data:function(){return{title:"",name:"",phone:"",address:"",addressInfo:"",isdefault:!1,show:!1,province:"",city:"",area:"",id:"",type:""}},onLoad:function(t){this.type=t.type,1==t.type?this.title="新增地址":2==t.type&&(this.id=t.id,this.getData(),this.title="地址编辑")},methods:{getData:function(){var e=this;this.$http({url:"index.php/api/user/getAddress",header:{token:uni.getStorageSync("user").token},data:{addresid:this.id}}).then((function(i){if(t("log",i," at pages/my/addAddress.vue:77"),1==i.data.code){var n=i.data.data;e.name=n.name,e.phone=n.mobile,e.address=n.province+" "+n.city+" "+n.area,e.addressInfo=n.detail,e.isdefault=1==n.is_default}})).catch((function(t){}))},edit:function(){var e=this;this.$http({url:"index.php/api/user/editAddress",header:{token:uni.getStorageSync("user").token},data:{name:this.name,mobile:this.phone,province:this.province,city:this.city,area:this.area,detail:this.addressInfo,is_default:this.isdefault?"1":"0",addressid:this.id}}).then((function(i){t("log",i," at pages/my/addAddress.vue:106"),1==i.data.code?(e.$tip.tip("修改成功"),setTimeout((function(){uni.navigateBack()}),500)):e.$tip.tip(i.data.msg)})).catch((function(t){}))},add:function(){var e=this;""!=this.name?0!=this.$tip.phoneReg.test(this.phone)?""!=this.address?""!=this.addressInfo?this.$http({url:"index.php/api/user/addAddress",header:{token:uni.getStorageSync("user").token},data:{name:this.name,mobile:this.phone,province:this.province,city:this.city,area:this.area,detail:this.addressInfo,is_default:this.isdefault?"1":"0"}}).then((function(i){t("log",i," at pages/my/addAddress.vue:150"),1==i.data.code?(e.$tip.tip("添加成功"),setTimeout((function(){uni.navigateBack()}),500)):e.$tip.tip(i.data.msg)})).catch((function(t){})):this.$tip.tip("请输入详细地址"):this.$tip.tip("请选择地址"):this.$tip.tip("请填写正确的手机号"):this.$tip.tip("请输入姓名")},confirm:function(t){this.address=t.province.label+" "+t.city.label+" "+t.area.label,this.province=t.province.label,this.city=t.city.label,this.area=t.area.label}}};e.default=n}).call(this,i("0de9")["log"])},f9f7:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uLoading:i("b5ae").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-switch",class:[1==t.value?"u-switch--on":"",t.disabled?"u-switch--disabled":""],style:[t.switchStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-switch__node node-class",style:{width:t.$u.addUnit(this.size),height:t.$u.addUnit(this.size)}},[i("u-loading",{staticClass:"u-switch__loading",attrs:{show:t.loading,size:.6*t.size,color:t.loadingColor}})],1)],1)},o=[]}}]);