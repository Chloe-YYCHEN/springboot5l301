(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/putongguanliyuan/add-or-update"],{"05f4":function(e,n,t){},"1bc5":function(e,n,t){"use strict";var a=t("05f4"),r=t.n(a);r.a},"6b81":function(e,n,t){"use strict";t.r(n);var a=t("b28f"),r=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);n["default"]=r.a},b28f:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,a,r,u,i){try{var o=e[u](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(a,r)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function o(e){u(i,a,r,o,c,"next",e)}function c(e){u(i,a,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("bcaf"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{cross:"",ruleForm:{guanliyuanzhanghao:"",mima:"",guanliyuanxingming:"",touxiang:"",lianxifangshi:""},user:{},ro:{guanliyuanzhanghao:!1,mima:!1,guanliyuanxingming:!1,touxiang:!1,lianxifangshi:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return i(a.default.mark((function r(){var u,i,o,c;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u=e.getStorageSync("nowTable"),r.next=3,t.$api.session(u);case 3:if(i=r.sent,t.user=i.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=13;break}return t.ruleForm.id=n.id,r.next=11,t.$api.info("putongguanliyuan",t.ruleForm.id);case 11:i=r.sent,t.ruleForm=i.data;case 13:if(t.cross=n.cross,!n.cross){r.next=41;break}o=e.getStorageSync("crossObj"),r.t0=a.default.keys(o);case 17:if((r.t1=r.t0()).done){r.next=41;break}if(c=r.t1.value,"guanliyuanzhanghao"!=c){r.next=23;break}return t.ruleForm.guanliyuanzhanghao=o[c],t.ro.guanliyuanzhanghao=!0,r.abrupt("continue",17);case 23:if("mima"!=c){r.next=27;break}return t.ruleForm.mima=o[c],t.ro.mima=!0,r.abrupt("continue",17);case 27:if("guanliyuanxingming"!=c){r.next=31;break}return t.ruleForm.guanliyuanxingming=o[c],t.ro.guanliyuanxingming=!0,r.abrupt("continue",17);case 31:if("touxiang"!=c){r.next=35;break}return t.ruleForm.touxiang=o[c],t.ro.touxiang=!0,r.abrupt("continue",17);case 35:if("lianxifangshi"!=c){r.next=39;break}return t.ruleForm.lianxifangshi=o[c],t.ro.lianxifangshi=!0,r.abrupt("continue",17);case 39:r.next=17;break;case 41:t.styleChange();case 42:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(a.default.mark((function t(){var r,u,i,o,c,s,l,f,g,d;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.guanliyuanzhanghao){t.next=3;break}return n.$utils.msg("管理员账号不能为空"),t.abrupt("return");case 3:if(n.ruleForm.mima){t.next=6;break}return n.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(!n.ruleForm.lianxifangshi||n.$validate.isMobile(n.ruleForm.lianxifangshi)){t.next=9;break}return n.$utils.msg("联系方式应输入手机格式"),t.abrupt("return");case 9:if(!n.cross){t.next=25;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){t.next=25;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=21;break}for(l in s)l==o&&(s[l]=c);return f=e.getStorageSync("crossTable"),t.next=19,n.$api.update("".concat(f),s);case 19:t.next=25;break;case 21:r=Number(e.getStorageSync("userid")),u=s["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 25:if(!u||!r){t.next=47;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=u,g={page:1,limit:10,crossuserid:r,crossrefid:u},t.next=31,n.$api.list("putongguanliyuan",g);case 31:if(d=t.sent,!(d.data.total>=i)){t.next=37;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 37:if(!n.ruleForm.id){t.next=42;break}return t.next=40,n.$api.update("putongguanliyuan",n.ruleForm);case 40:t.next=44;break;case 42:return t.next=44,n.$api.add("putongguanliyuan",n.ruleForm);case 44:n.$utils.msgBack("提交成功");case 45:t.next=55;break;case 47:if(!n.ruleForm.id){t.next=52;break}return t.next=50,n.$api.update("putongguanliyuan",n.ruleForm);case 50:t.next=54;break;case 52:return t.next=54,n.$api.add("putongguanliyuan",n.ruleForm);case 54:n.$utils.msgBack("提交成功");case 55:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(t,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},cf69:function(e,n,t){"use strict";(function(e){t("38c9");a(t("66fd"));var n=a(t("dc2c"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},dc2c:function(e,n,t){"use strict";t.r(n);var a=t("ec14"),r=t("6b81");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("1bc5");var i,o=t("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"5df42eac",null,!1,a["a"],i);n["default"]=c.exports},ec14:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},u=[]}},[["cf69","common/runtime","common/vendor"]]]);