<template>
	<view class="content">
		<form class="app-update-pv">
			
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">活动名称</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.huodongmingcheng" v-model="ruleForm.huodongmingcheng" placeholder="活动名称"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">服务类型</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.fuwuleixing" v-model="ruleForm.fuwuleixing" placeholder="服务类型"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group" @tap="huodongtupianTap" :class='left == "left"?"":"active"'>
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">活动图片</view>
				<view class="right-input" :style='{textAlign:"left"}' style="padding:0">
					<image :style='{"width":"100rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"100rpx"}' class="avator" v-if="ruleForm.huodongtupian" :src="baseUrl+ruleForm.huodongtupian" mode="aspectFill"></image>
					<image :style='{"width":"100rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"100rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">退签时间</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.tuiqianshijian" placeholder="退签时间" @tap="toggleTab('tuiqianshijian')"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">管理员账号</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.guanliyuanzhanghao" v-model="ruleForm.guanliyuanzhanghao" placeholder="管理员账号"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">管理员姓名</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.guanliyuanxingming" v-model="ruleForm.guanliyuanxingming" placeholder="管理员姓名"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">志愿者账号</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.zhiyuanzhezhanghao" v-model="ruleForm.zhiyuanzhezhanghao" placeholder="志愿者账号"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">志愿者姓名</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.zhiyuanzhexingming" v-model="ruleForm.zhiyuanzhexingming" placeholder="志愿者姓名"></input>
			</view>
			
			<!-- 否 -->
 

			
			
			<view class="btn">
				<button :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"rgba(255, 114, 20, 1)","borderColor":"rgba(255, 114, 20, 1)","borderRadius":"8rpx","color":"#fff","borderWidth":"1","width":"80%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="tuiqianshijianConfirm" ref="tuiqianshijian" themeColor="#333333"></w-picker>
			
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				huodongmingcheng: '',
				fuwuleixing: '',
				huodongtupian: '',
				tuiqianshijian: '',
				guanliyuanzhanghao: '',
				guanliyuanxingming: '',
				zhiyuanzhezhanghao: '',
				zhiyuanzhexingming: '',
				userid: '',
				},
				// 登陆用户信息
				user: {},
                                ro:{
                                   huodongmingcheng : false,
                                   fuwuleixing : false,
                                   huodongtupian : false,
                                   tuiqianshijian : false,
                                   guanliyuanzhanghao : false,
                                   guanliyuanxingming : false,
                                   zhiyuanzhezhanghao : false,
                                   zhiyuanzhexingming : false,
                                   userid : false,
                                },
			}
		},
		components: {
			wPicker
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
			
			
			
			
			
			
			
			
			
		},
		async onLoad(options) {
        		this.ruleForm.tuiqianshijian = this.$utils.getCurDateTime();

			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.zhiyuanzhezhanghao = this.user.zhiyuanzhezhanghao
			this.ro.zhiyuanzhezhanghao = true;
			this.ruleForm.zhiyuanzhexingming = this.user.zhiyuanzhexingming
			this.ro.zhiyuanzhexingming = true;



			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`dakatuiqian`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='huodongmingcheng'){
					this.ruleForm.huodongmingcheng = obj[o];
					this.ro.huodongmingcheng = true;
					continue;
					}
					if(o=='fuwuleixing'){
					this.ruleForm.fuwuleixing = obj[o];
					this.ro.fuwuleixing = true;
					continue;
					}
					if(o=='huodongtupian'){
					this.ruleForm.huodongtupian = obj[o];
					this.ro.huodongtupian = true;
					continue;
					}
					if(o=='tuiqianshijian'){
					this.ruleForm.tuiqianshijian = obj[o];
					this.ro.tuiqianshijian = true;
					continue;
					}
					if(o=='guanliyuanzhanghao'){
					this.ruleForm.guanliyuanzhanghao = obj[o];
					this.ro.guanliyuanzhanghao = true;
					continue;
					}
					if(o=='guanliyuanxingming'){
					this.ruleForm.guanliyuanxingming = obj[o];
					this.ro.guanliyuanxingming = true;
					continue;
					}
					if(o=='zhiyuanzhezhanghao'){
					this.ruleForm.zhiyuanzhezhanghao = obj[o];
					this.ro.zhiyuanzhezhanghao = true;
					continue;
					}
					if(o=='zhiyuanzhexingming'){
					this.ruleForm.zhiyuanzhexingming = obj[o];
					this.ro.zhiyuanzhexingming = true;
					continue;
					}
					if(o=='userid'){
					this.ruleForm.userid = obj[o];
					this.ro.userid = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv .cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数


			// 日长控件选择日期时间
			tuiqianshijianConfirm(val) {
				console.log(val)
				this.ruleForm.tuiqianshijian = val.result;
				this.$forceUpdate();
			},


			huodongtupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.huodongtupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {


















//跨表计算判断
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
						var obj = uni.getStorageSync('crossObj');
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`dakatuiqian`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`dakatuiqian`, this.ruleForm);
						}else{
							await this.$api.add(`dakatuiqian`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`dakatuiqian`, this.ruleForm);
					}else{
						await this.$api.add(`dakatuiqian`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}
	
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	  padding: 20upx 0;
	}
	
	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}
	
	.cu-form-group+.cu-form-group {
		border: 0;
	}
	
	.cu-form-group uni-input {
		padding: 0 30upx;
	}
	
	.uni-input {
		padding: 0 30upx;
	}
	
	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}
	
	.cu-form-group uni-picker::after {
		line-height: 88rpx;
	}
	
	.select .uni-input {
		line-height: 88rpx;
	}
	
	.input .right-input {
		line-height: 88rpx;
	}
</style>
