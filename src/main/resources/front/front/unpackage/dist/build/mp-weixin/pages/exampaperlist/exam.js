(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/exampaperlist/exam"],{"7de9":function(e,t,n){"use strict";var r=n("f0a0"),a=n.n(r);a.a},8800:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},s=[]},"8d64":function(e,t,n){"use strict";n.r(t);var r=n("8800"),a=n("99d9");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("7de9");var i,o=n("f0c5"),u=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"7495e079",null,!1,r["a"],i);t["default"]=u.exports},"99d9":function(e,t,n){"use strict";n.r(t);var r=n("f3a6"),a=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=a.a},b6ce:function(e,t,n){"use strict";(function(e){n("38c9");r(n("66fd"));var t=r(n("8d64"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},f0a0:function(e,t,n){},f3a6:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,r,a,s,i){try{var o=e[s](i),u=o.value}catch(c){return void n(c)}o.done?t(u):Promise.resolve(u).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){s(i,r,a,o,u,"next",e)}function u(e){s(i,r,a,o,u,"throw",e)}o(void 0)}))}}var o={data:function(){return{item:{},paper:{},isSubmit:!1,answer:"",currentItem:1,score:0,inter:null,list:[],user:{},count:0}},onLoad:function(t){var n=this;return i(r.default.mark((function a(){var s,o,u,c,p,l;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.score=0,s=e.getStorageSync("nowTable"),a.next=4,n.$api.session(s);case 4:return o=a.sent,n.user=o.data,a.next=8,n.$api.info("exampaper",t.id);case 8:return o=a.sent,n.paper=o.data,a.next=12,n.$api.list("examquestion",{page:1,limit:999,sort:"sequence",paperid:t.id});case 12:for(o=a.sent,n.list=o.data.list,n.count=60*n.paper.time,n.count>0&&(u=n,n.inter=setInterval((function(){u.count=u.count-1,u.count<0&&(clearInterval(u.inter),e.showModal({title:"答题结束",content:"本次考试成绩："+u.score,showCancel:!1,success:function(){var t=i(r.default.mark((function t(n){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.confirm&&e.navigateBack({delta:1});case 1:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()}))}),1e3)),c=0;c<n.list.length;c++){for(p=JSON.parse(n.list[c].options),l=0;l<p.length;l++)p[l].checked=!1;n.list[c].options=p}console.log(n.list),n.item=n.list[0];case 19:case"end":return a.stop()}}),a)})))()},destroyed:function(){clearInterval(this.inter)},computed:{SecondToDate:function(){var e=this.count;return null!=e&&""!=e&&(e=e>60&&e<3600?parseInt(e/60)+"分钟"+parseInt(60*(parseFloat(e/60)-parseInt(e/60)))+"秒":e>=3600&&e<86400?parseInt(e/3600)+"小时"+parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(e/3600)-parseInt(e/3600)))-parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))))+"秒":e>=86400?parseInt(e/3600/24)+"天"+parseInt(24*(parseFloat(e/3600/24)-parseInt(e/3600/24)))+"小时"+parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(e/3600)-parseInt(e/3600)))-parseInt(60*(parseFloat(e/3600)-parseInt(e/3600)))))+"秒":parseInt(e)+"秒"),e}},methods:{leaveTap:function(){var t=this;e.showModal({title:"提示",content:"确定离开考试?未答题目按0分计算",success:function(){var e=i(r.default.mark((function e(n){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.confirm&&t.$utils.msgBack("本次$examAlias成绩："+t.score);case 1:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()})},itemCheckTap:function(e,t){if(0==this.item.type||2==this.item.type)for(var n=0;n<this.item.options.length;n++)this.item.options[n].checked=!1;if(this.item.options[t].checked=!e,1==this.item.type){for(var r=[],a=0;a<this.item.options.length;a++)this.item.options[a].checked&&r.push(this.item.options[a].code);this.answer=r.join(",")}1!=this.item.type&&(this.answer=this.item.options[t].code),console.log(e,t,this.answer)},submitTap:function(){var t=this;return i(r.default.mark((function n(){var a,s,o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(3!=t.item.type||t.answer){n.next=3;break}return t.$utils.msg("请填写答案"),n.abrupt("return");case 3:return a=0,t.answer==t.item.answer&&(t.score=Number(t.score)+Number(t.item.score),a=t.item.score),s={userid:t.user.id,username:t.user.zhiyuanzhexingming,paperid:t.paper.id,papername:t.paper.name,questionid:t.item.id,questionname:t.item.questionname,options:JSON.stringify(t.item.options),score:t.item.score,answer:t.item.answer,analysis:t.item.analysis,myscore:a,myanswer:t.answer},n.next=8,t.$api.add("examrecord",s);case 8:t.isSubmit=!0,o=t,t.currentItem==t.list.length&&e.showModal({title:"答题结束",content:"本次考试成绩："+o.score,showCancel:!1,success:function(){var t=i(r.default.mark((function t(n){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.confirm&&e.navigateBack({delta:1});case 1:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()});case 11:case"end":return n.stop()}}),n)})))()},nextTap:function(){this.isSubmit=!1,this.currentItem=this.currentItem+1,this.item=this.list[this.currentItem-1],this.answer=""}}};t.default=o}).call(this,n("543d")["default"])}},[["b6ce","common/runtime","common/vendor"]]]);