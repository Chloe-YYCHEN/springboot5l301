(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dakatuiqian-add-or-update"],{"18f3":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-04204cb6]{padding:%?20?%}.content[data-v-04204cb6]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-04204cb6]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-04204cb6]{width:%?180?%}.avator[data-v-04204cb6]{width:%?150?%;height:%?60?%}.right-input[data-v-04204cb6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-04204cb6]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-04204cb6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-04204cb6]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-04204cb6]{border:0}.cu-form-group uni-input[data-v-04204cb6]{padding:0 %?30?%}.uni-input[data-v-04204cb6]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-04204cb6]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-04204cb6]::after{line-height:%?88?%}.select .uni-input[data-v-04204cb6]{line-height:%?88?%}.input .right-input[data-v-04204cb6]{line-height:%?88?%}',""]),e.exports=r},"1ba9":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("96cf");var n=i(t("3b8d")),a=i(t("e2b1")),o={data:function(){return{cross:"",ruleForm:{huodongmingcheng:"",fuwuleixing:"",huodongtupian:"",tuiqianshijian:"",guanliyuanzhanghao:"",guanliyuanxingming:"",zhiyuanzhezhanghao:"",zhiyuanzhexingming:"",userid:""},user:{},ro:{huodongmingcheng:!1,fuwuleixing:!1,huodongtupian:!1,tuiqianshijian:!1,guanliyuanzhanghao:!1,guanliyuanxingming:!1,zhiyuanzhezhanghao:!1,zhiyuanzhexingming:!1,userid:!1}}},components:{wPicker:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.tuiqianshijian=this.$utils.getCurDateTime(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:if(i=e.sent,this.user=i.data,this.ruleForm.zhiyuanzhezhanghao=this.user.zhiyuanzhezhanghao,this.ro.zhiyuanzhezhanghao=!0,this.ruleForm.zhiyuanzhexingming=this.user.zhiyuanzhexingming,this.ro.zhiyuanzhexingming=!0,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=18;break}return this.ruleForm.id=r.id,e.next=16,this.$api.info("dakatuiqian",this.ruleForm.id);case 16:i=e.sent,this.ruleForm=i.data;case 18:if(this.cross=r.cross,!r.cross){e.next=62;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 22:if((e.t1=e.t0()).done){e.next=62;break}if(a=e.t1.value,"huodongmingcheng"!=a){e.next=28;break}return this.ruleForm.huodongmingcheng=n[a],this.ro.huodongmingcheng=!0,e.abrupt("continue",22);case 28:if("fuwuleixing"!=a){e.next=32;break}return this.ruleForm.fuwuleixing=n[a],this.ro.fuwuleixing=!0,e.abrupt("continue",22);case 32:if("huodongtupian"!=a){e.next=36;break}return this.ruleForm.huodongtupian=n[a],this.ro.huodongtupian=!0,e.abrupt("continue",22);case 36:if("tuiqianshijian"!=a){e.next=40;break}return this.ruleForm.tuiqianshijian=n[a],this.ro.tuiqianshijian=!0,e.abrupt("continue",22);case 40:if("guanliyuanzhanghao"!=a){e.next=44;break}return this.ruleForm.guanliyuanzhanghao=n[a],this.ro.guanliyuanzhanghao=!0,e.abrupt("continue",22);case 44:if("guanliyuanxingming"!=a){e.next=48;break}return this.ruleForm.guanliyuanxingming=n[a],this.ro.guanliyuanxingming=!0,e.abrupt("continue",22);case 48:if("zhiyuanzhezhanghao"!=a){e.next=52;break}return this.ruleForm.zhiyuanzhezhanghao=n[a],this.ro.zhiyuanzhezhanghao=!0,e.abrupt("continue",22);case 52:if("zhiyuanzhexingming"!=a){e.next=56;break}return this.ruleForm.zhiyuanzhexingming=n[a],this.ro.zhiyuanzhexingming=!0,e.abrupt("continue",22);case 56:if("userid"!=a){e.next=60;break}return this.ruleForm.userid=n[a],this.ro.userid=!0,e.abrupt("continue",22);case 60:e.next=22;break;case 62:this.styleChange();case 63:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tuiqianshijianConfirm:function(e){console.log(e),this.ruleForm.tuiqianshijian=e.result,this.$forceUpdate()},huodongtupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.huodongtupian="upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var r,t,i,n,a,o,u,s,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.cross){e.next=16;break}if(n=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==n){e.next=16;break}if(o=uni.getStorageSync("crossObj"),n.startsWith("[")){e.next=12;break}for(u in o)u==n&&(o[u]=a);return s=uni.getStorageSync("crossTable"),e.next=10,this.$api.update("".concat(s),o);case 10:e.next=16;break;case 12:r=Number(uni.getStorageSync("userid")),t=o["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 16:if(!t||!r){e.next=38;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=t,l={page:1,limit:10,crossuserid:r,crossrefid:t},e.next=22,this.$api.list("dakatuiqian",l);case 22:if(c=e.sent,!(c.data.total>=i)){e.next=28;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 28:if(!this.ruleForm.id){e.next=33;break}return e.next=31,this.$api.update("dakatuiqian",this.ruleForm);case 31:e.next=35;break;case 33:return e.next=35,this.$api.add("dakatuiqian",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:e.next=46;break;case 38:if(!this.ruleForm.id){e.next=43;break}return e.next=41,this.$api.update("dakatuiqian",this.ruleForm);case 41:e.next=45;break;case 43:return e.next=45,this.$api.add("dakatuiqian",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},"325f":function(e,r,t){"use strict";var i={"w-picker":t("e2b1").default},n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("活动名称")]),t("v-uni-input",{style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.huodongmingcheng,placeholder:"活动名称"},model:{value:e.ruleForm.huodongmingcheng,callback:function(r){e.$set(e.ruleForm,"huodongmingcheng",r)},expression:"ruleForm.huodongmingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("服务类型")]),t("v-uni-input",{style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.fuwuleixing,placeholder:"服务类型"},model:{value:e.ruleForm.fuwuleixing,callback:function(r){e.$set(e.ruleForm,"fuwuleixing",r)},expression:"ruleForm.fuwuleixing"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.huodongtupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("活动图片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.huodongtupian?t("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"0",textAlign:"left",height:"100rpx"},attrs:{src:e.baseUrl+e.ruleForm.huodongtupian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"0",textAlign:"left",height:"100rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("退签时间")]),t("v-uni-input",{style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"退签时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("tuiqianshijian")}},model:{value:e.ruleForm.tuiqianshijian,callback:function(r){e.$set(e.ruleForm,"tuiqianshijian",r)},expression:"ruleForm.tuiqianshijian"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("管理员账号")]),t("v-uni-input",{style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.guanliyuanzhanghao,placeholder:"管理员账号"},model:{value:e.ruleForm.guanliyuanzhanghao,callback:function(r){e.$set(e.ruleForm,"guanliyuanzhanghao",r)},expression:"ruleForm.guanliyuanzhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("管理员姓名")]),t("v-uni-input",{style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.guanliyuanxingming,placeholder:"管理员姓名"},model:{value:e.ruleForm.guanliyuanxingming,callback:function(r){e.$set(e.ruleForm,"guanliyuanxingming",r)},expression:"ruleForm.guanliyuanxingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("志愿者账号")]),t("v-uni-input",{style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhiyuanzhezhanghao,placeholder:"志愿者账号"},model:{value:e.ruleForm.zhiyuanzhezhanghao,callback:function(r){e.$set(e.ruleForm,"zhiyuanzhezhanghao",r)},expression:"ruleForm.zhiyuanzhezhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("志愿者姓名")]),t("v-uni-input",{style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhiyuanzhexingming,placeholder:"志愿者姓名"},model:{value:e.ruleForm.zhiyuanzhexingming,callback:function(r){e.$set(e.ruleForm,"zhiyuanzhexingming",r)},expression:"ruleForm.zhiyuanzhexingming"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(255, 114, 20, 1)",borderColor:"rgba(255, 114, 20, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"tuiqianshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.tuiqianshijianConfirm.apply(void 0,arguments)}}})],1)},a=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))},"367a":function(e,r,t){var i=t("18f3");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("e7556e66",i,!0,{sourceMap:!1,shadowMode:!1})},"4b5a":function(e,r,t){"use strict";t.r(r);var i=t("325f"),n=t("c82b");for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);t("a415");var o,u=t("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"04204cb6",null,!1,i["a"],o);r["default"]=s.exports},a415:function(e,r,t){"use strict";var i=t("367a"),n=t.n(i);n.a},c82b:function(e,r,t){"use strict";t.r(r);var i=t("1ba9"),n=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=n.a}}]);