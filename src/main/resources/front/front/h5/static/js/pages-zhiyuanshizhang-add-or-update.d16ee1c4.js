(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-zhiyuanshizhang-add-or-update"],{"284d":function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-form",{staticClass:"app-update-pv"},[n("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("活动编号")]),n("v-uni-picker",{attrs:{value:e.huodongbianhaoIndex,range:e.huodongbianhaoOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.huodongbianhaoChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.huodongbianhaoOptions[e.huodongbianhaoIndex]))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("活动名称")]),n("v-uni-input",{style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.huodongmingcheng,placeholder:"活动名称"},model:{value:e.ruleForm.huodongmingcheng,callback:function(t){e.$set(e.ruleForm,"huodongmingcheng",t)},expression:"ruleForm.huodongmingcheng"}})],1),n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("志愿时长")]),n("v-uni-input",{style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhiyuanshizhang,placeholder:"志愿时长"},model:{value:e.ruleForm.zhiyuanshizhang,callback:function(t){e.$set(e.ruleForm,"zhiyuanshizhang",t)},expression:"ruleForm.zhiyuanshizhang"}})],1),n("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.huodongtupianTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("活动图片")]),n("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.huodongtupian?n("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"0",textAlign:"left",height:"100rpx"},attrs:{src:e.baseUrl+e.ruleForm.huodongtupian,mode:"aspectFill"}}):n("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"0",textAlign:"left",height:"100rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("志愿者账号")]),n("v-uni-input",{style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhiyuanzhezhanghao,placeholder:"志愿者账号"},model:{value:e.ruleForm.zhiyuanzhezhanghao,callback:function(t){e.$set(e.ruleForm,"zhiyuanzhezhanghao",t)},expression:"ruleForm.zhiyuanzhezhanghao"}})],1),n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"220rpx",fontSize:"40rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left"}},[e._v("志愿者姓名")]),n("v-uni-input",{style:{boxShadow:"none",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(255, 114, 20, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhiyuanzhexingming,placeholder:"志愿者姓名"},model:{value:e.ruleForm.zhiyuanzhexingming,callback:function(t){e.$set(e.ruleForm,"zhiyuanzhexingming",t)},expression:"ruleForm.zhiyuanzhexingming"}})],1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(255, 114, 20, 1)",borderColor:"rgba(255, 114, 20, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},i=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}))},"2eb4":function(e,t,n){"use strict";var r=n("d1a6"),a=n.n(r);a.a},"39ea":function(e,t,n){"use strict";n.r(t);var r=n("ea76"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},"4b49":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-115d6dd0]{padding:%?20?%}.content[data-v-115d6dd0]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-115d6dd0]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-115d6dd0]{width:%?180?%}.avator[data-v-115d6dd0]{width:%?150?%;height:%?60?%}.right-input[data-v-115d6dd0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-115d6dd0]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-115d6dd0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-115d6dd0]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-115d6dd0]{border:0}.cu-form-group uni-input[data-v-115d6dd0]{padding:0 %?30?%}.uni-input[data-v-115d6dd0]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-115d6dd0]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-115d6dd0]::after{line-height:%?88?%}.select .uni-input[data-v-115d6dd0]{line-height:%?88?%}.input .right-input[data-v-115d6dd0]{line-height:%?88?%}',""]),e.exports=t},9833:function(e,t,n){"use strict";n.r(t);var r=n("284d"),a=n("39ea");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("2eb4");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"115d6dd0",null,!1,r["a"],o);t["default"]=s.exports},d1a6:function(e,t,n){var r=n("4b49");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("38bb22d3",r,!0,{sourceMap:!1,shadowMode:!1})},ea76:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a481"),n("c5f6"),n("f559"),n("ac6a"),n("96cf");var a=r(n("3b8d")),i=r(n("e2b1")),o={data:function(){return{cross:"",ruleForm:{huodongbianhao:"",huodongmingcheng:"",zhiyuanshizhang:"",huodongtupian:"",zhiyuanzhezhanghao:"",zhiyuanzhexingming:"",userid:""},huodongbianhaoOptions:[],huodongbianhaoIndex:0,user:{},ro:{huodongbianhao:!1,huodongmingcheng:!1,zhiyuanshizhang:!1,huodongtupian:!1,zhiyuanzhezhanghao:!1,zhiyuanzhexingming:!1,userid:!1}}},components:{wPicker:i.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:return r=e.sent,this.user=r.data,e.next=7,this.$api.option("zhiyuanhuodong","huodongbianhao",{});case 7:if(r=e.sent,this.huodongbianhaoOptions=r.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=17;break}return this.ruleForm.id=t.id,e.next=15,this.$api.info("zhiyuanshizhang",this.ruleForm.id);case 15:r=e.sent,this.ruleForm=r.data;case 17:if(this.cross=t.cross,!t.cross){e.next=55;break}a=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(a);case 21:if((e.t1=e.t0()).done){e.next=53;break}if(i=e.t1.value,"huodongbianhao"!=i){e.next=27;break}return this.ruleForm.huodongbianhao=a[i],this.ro.huodongbianhao=!0,e.abrupt("continue",21);case 27:if("huodongmingcheng"!=i){e.next=31;break}return this.ruleForm.huodongmingcheng=a[i],this.ro.huodongmingcheng=!0,e.abrupt("continue",21);case 31:if("zhiyuanshizhang"!=i){e.next=35;break}return this.ruleForm.zhiyuanshizhang=a[i],this.ro.zhiyuanshizhang=!0,e.abrupt("continue",21);case 35:if("huodongtupian"!=i){e.next=39;break}return this.ruleForm.huodongtupian=a[i],this.ro.huodongtupian=!0,e.abrupt("continue",21);case 39:if("zhiyuanzhezhanghao"!=i){e.next=43;break}return this.ruleForm.zhiyuanzhezhanghao=a[i],this.ro.zhiyuanzhezhanghao=!0,e.abrupt("continue",21);case 43:if("zhiyuanzhexingming"!=i){e.next=47;break}return this.ruleForm.zhiyuanzhexingming=a[i],this.ro.zhiyuanzhexingming=!0,e.abrupt("continue",21);case 47:if("userid"!=i){e.next=51;break}return this.ruleForm.userid=a[i],this.ro.userid=!0,e.abrupt("continue",21);case 51:e.next=21;break;case 53:this.ruleForm.zhiyuanshizhang=0,this.ro.zhiyuanshizhang=!1;case 55:this.styleChange();case 56:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},huodongbianhaoChange:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.huodongbianhaoIndex=t.target.value,this.ruleForm.huodongbianhao=this.huodongbianhaoOptions[this.huodongbianhaoIndex],e.next=4,this.$api.follow("zhiyuanhuodong","huodongbianhao",{columnValue:this.ruleForm.huodongbianhao});case 4:n=e.sent,n.data.huodongmingcheng&&(this.ruleForm.huodongmingcheng=n.data.huodongmingcheng),n.data.zhiyuanshizhang&&(this.ruleForm.zhiyuanshizhang=n.data.zhiyuanshizhang);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),huodongtupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.huodongtupian="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,n,r,a,i,o,u,s,h,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.zhiyuanshizhang||this.$validate.isIntNumer(this.ruleForm.zhiyuanshizhang)){e.next=3;break}return this.$utils.msg("志愿时长应输入整数"),e.abrupt("return");case 3:if(!this.cross){e.next=19;break}if(a=uni.getStorageSync("statusColumnName"),i=uni.getStorageSync("statusColumnValue"),""==a){e.next=19;break}if(o=uni.getStorageSync("crossObj"),a.startsWith("[")){e.next=15;break}for(u in o)u==a&&(o[u]=i);return s=uni.getStorageSync("crossTable"),e.next=13,this.$api.update("".concat(s),o);case 13:e.next=19;break;case 15:t=Number(uni.getStorageSync("userid")),n=o["id"],r=uni.getStorageSync("statusColumnName"),r=r.replace(/\[/,"").replace(/\]/,"");case 19:if(!n||!t){e.next=46;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=n,h={page:1,limit:10,crossuserid:t,crossrefid:n},e.next=25,this.$api.list("zhiyuanshizhang",h);case 25:if(d=e.sent,!(d.data.total>=r)){e.next=31;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 31:return o=uni.getStorageSync("crossObj"),s=uni.getStorageSync("crossTable"),o.zhiyuanshizhang=parseFloat(o.zhiyuanshizhang)+parseFloat(this.ruleForm.zhiyuanshizhang),e.next=36,this.$api.update("".concat(s),o);case 36:if(!this.ruleForm.id){e.next=41;break}return e.next=39,this.$api.update("zhiyuanshizhang",this.ruleForm);case 39:e.next=43;break;case 41:return e.next=43,this.$api.add("zhiyuanshizhang",this.ruleForm);case 43:this.$utils.msgBack("提交成功");case 44:e.next=59;break;case 46:return o=uni.getStorageSync("crossObj"),s=uni.getStorageSync("crossTable"),o.zhiyuanshizhang=parseFloat(o.zhiyuanshizhang)+parseFloat(this.ruleForm.zhiyuanshizhang),e.next=51,this.$api.update("".concat(s),o);case 51:if(!this.ruleForm.id){e.next=56;break}return e.next=54,this.$api.update("zhiyuanshizhang",this.ruleForm);case 54:e.next=58;break;case 56:return e.next=58,this.$api.add("zhiyuanshizhang",this.ruleForm);case 58:this.$utils.msgBack("提交成功");case 59:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}}]);