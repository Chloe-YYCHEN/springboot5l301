(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dakatuiqian/add-or-update"],{"24af":function(n,e,a){"use strict";(function(n){a("38c9");t(a("66fd"));var e=t(a("3d88"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},"3d57":function(n,e,a){"use strict";a.r(e);var t=a("c144"),r=a.n(t);for(var i in t)"default"!==i&&function(n){a.d(e,n,(function(){return t[n]}))}(i);e["default"]=r.a},"3d88":function(n,e,a){"use strict";a.r(e);var t=a("e656"),r=a("3d57");for(var i in r)"default"!==i&&function(n){a.d(e,n,(function(){return r[n]}))}(i);a("af31");var u,o=a("f0c5"),c=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"3fe7a9ef",null,!1,t["a"],u);e["default"]=c.exports},af31:function(n,e,a){"use strict";var t=a("c963"),r=a.n(t);r.a},c144:function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(a("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function i(n,e,a,t,r,i,u){try{var o=n[i](u),c=o.value}catch(s){return void a(s)}o.done?e(c):Promise.resolve(c).then(t,r)}function u(n){return function(){var e=this,a=arguments;return new Promise((function(t,r){var u=n.apply(e,a);function o(n){i(u,t,r,o,c,"next",n)}function c(n){i(u,t,r,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("bcaf"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{huodongmingcheng:"",fuwuleixing:"",huodongtupian:"",tuiqianshijian:"",guanliyuanzhanghao:"",guanliyuanxingming:"",zhiyuanzhezhanghao:"",zhiyuanzhexingming:"",userid:""},user:{},ro:{huodongmingcheng:!1,fuwuleixing:!1,huodongtupian:!1,tuiqianshijian:!1,guanliyuanzhanghao:!1,guanliyuanxingming:!1,zhiyuanzhezhanghao:!1,zhiyuanzhexingming:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var a=this;return u(t.default.mark((function r(){var i,u,o,c;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.ruleForm.tuiqianshijian=a.$utils.getCurDateTime(),i=n.getStorageSync("nowTable"),r.next=4,a.$api.session(i);case 4:if(u=r.sent,a.user=u.data,a.ruleForm.zhiyuanzhezhanghao=a.user.zhiyuanzhezhanghao,a.ro.zhiyuanzhezhanghao=!0,a.ruleForm.zhiyuanzhexingming=a.user.zhiyuanzhexingming,a.ro.zhiyuanzhexingming=!0,a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){r.next=18;break}return a.ruleForm.id=e.id,r.next=16,a.$api.info("dakatuiqian",a.ruleForm.id);case 16:u=r.sent,a.ruleForm=u.data;case 18:if(a.cross=e.cross,!e.cross){r.next=62;break}o=n.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 22:if((r.t1=r.t0()).done){r.next=62;break}if(c=r.t1.value,"huodongmingcheng"!=c){r.next=28;break}return a.ruleForm.huodongmingcheng=o[c],a.ro.huodongmingcheng=!0,r.abrupt("continue",22);case 28:if("fuwuleixing"!=c){r.next=32;break}return a.ruleForm.fuwuleixing=o[c],a.ro.fuwuleixing=!0,r.abrupt("continue",22);case 32:if("huodongtupian"!=c){r.next=36;break}return a.ruleForm.huodongtupian=o[c],a.ro.huodongtupian=!0,r.abrupt("continue",22);case 36:if("tuiqianshijian"!=c){r.next=40;break}return a.ruleForm.tuiqianshijian=o[c],a.ro.tuiqianshijian=!0,r.abrupt("continue",22);case 40:if("guanliyuanzhanghao"!=c){r.next=44;break}return a.ruleForm.guanliyuanzhanghao=o[c],a.ro.guanliyuanzhanghao=!0,r.abrupt("continue",22);case 44:if("guanliyuanxingming"!=c){r.next=48;break}return a.ruleForm.guanliyuanxingming=o[c],a.ro.guanliyuanxingming=!0,r.abrupt("continue",22);case 48:if("zhiyuanzhezhanghao"!=c){r.next=52;break}return a.ruleForm.zhiyuanzhezhanghao=o[c],a.ro.zhiyuanzhezhanghao=!0,r.abrupt("continue",22);case 52:if("zhiyuanzhexingming"!=c){r.next=56;break}return a.ruleForm.zhiyuanzhexingming=o[c],a.ro.zhiyuanzhexingming=!0,r.abrupt("continue",22);case 56:if("userid"!=c){r.next=60;break}return a.ruleForm.userid=o[c],a.ro.userid=!0,r.abrupt("continue",22);case 60:r.next=22;break;case 62:a.styleChange();case 63:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},tuiqianshijianConfirm:function(n){console.log(n),this.ruleForm.tuiqianshijian=n.result,this.$forceUpdate()},huodongtupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.huodongtupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(t.default.mark((function a(){var r,i,u,o,c,s,l,g,h,f;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.cross){a.next=16;break}if(o=n.getStorageSync("statusColumnName"),c=n.getStorageSync("statusColumnValue"),""==o){a.next=16;break}if(s=n.getStorageSync("crossObj"),o.startsWith("[")){a.next=12;break}for(l in s)l==o&&(s[l]=c);return g=n.getStorageSync("crossTable"),a.next=10,e.$api.update("".concat(g),s);case 10:a.next=16;break;case 12:r=Number(n.getStorageSync("userid")),i=s["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!r){a.next=38;break}return e.ruleForm.crossuserid=r,e.ruleForm.crossrefid=i,h={page:1,limit:10,crossuserid:r,crossrefid:i},a.next=22,e.$api.list("dakatuiqian",h);case 22:if(f=a.sent,!(f.data.total>=u)){a.next=28;break}return e.$utils.msg(n.getStorageSync("tips")),a.abrupt("return",!1);case 28:if(!e.ruleForm.id){a.next=33;break}return a.next=31,e.$api.update("dakatuiqian",e.ruleForm);case 31:a.next=35;break;case 33:return a.next=35,e.$api.add("dakatuiqian",e.ruleForm);case 35:e.$utils.msgBack("提交成功");case 36:a.next=46;break;case 38:if(!e.ruleForm.id){a.next=43;break}return a.next=41,e.$api.update("dakatuiqian",e.ruleForm);case 41:a.next=45;break;case 43:return a.next=45,e.$api.add("dakatuiqian",e.ruleForm);case 45:e.$utils.msgBack("提交成功");case 46:case"end":return a.stop()}}),a)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(a,"-").concat(t,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,a("543d")["default"])},c963:function(n,e,a){},e656:function(n,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"bcaf"))}},r=function(){var n=this,e=n.$createElement;n._self._c},i=[]}},[["24af","common/runtime","common/vendor"]]]);