<template>
	<view class="content">
		<form class="app-update-pv">
			
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">活动编号</view>
				<picker @change="huodongbianhaoChange" :value="huodongbianhaoIndex"  :range="huodongbianhaoOptions">
					<view :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{huodongbianhaoOptions[huodongbianhaoIndex]}}</view>
				</picker>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">活动名称</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.huodongmingcheng" v-model="ruleForm.huodongmingcheng" placeholder="活动名称"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">志愿时长</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.zhiyuanshizhang" v-model="ruleForm.zhiyuanshizhang" placeholder="志愿时长"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group" @tap="huodongtupianTap" :class='left == "left"?"":"active"'>
				<view :style='{"width":"220rpx","fontSize":"40rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">活动图片</view>
				<view class="right-input" :style='{textAlign:"left"}' style="padding:0">
					<image :style='{"width":"100rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"100rpx"}' class="avator" v-if="ruleForm.huodongtupian" :src="baseUrl+ruleForm.huodongtupian" mode="aspectFill"></image>
					<image :style='{"width":"100rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"100rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
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

			
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				huodongbianhao: '',
				huodongmingcheng: '',
				zhiyuanshizhang: '',
				huodongtupian: '',
				zhiyuanzhezhanghao: '',
				zhiyuanzhexingming: '',
				userid: '',
				},
				huodongbianhaoOptions: [],
				huodongbianhaoIndex: 0,
				// 登陆用户信息
				user: {},
                                ro:{
                                   huodongbianhao : false,
                                   huodongmingcheng : false,
                                   zhiyuanshizhang : false,
                                   huodongtupian : false,
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
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下2
			res = await this.$api.option(`zhiyuanhuodong`,`huodongbianhao`,{});
			this.huodongbianhaoOptions = res.data;

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
				res = await this.$api.info(`zhiyuanshizhang`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='huodongbianhao'){
					this.ruleForm.huodongbianhao = obj[o];
					this.ro.huodongbianhao = true;
					continue;
					}
					if(o=='huodongmingcheng'){
					this.ruleForm.huodongmingcheng = obj[o];
					this.ro.huodongmingcheng = true;
					continue;
					}
					if(o=='zhiyuanshizhang'){
					this.ruleForm.zhiyuanshizhang = obj[o];
					this.ro.zhiyuanshizhang = true;
					continue;
					}
					if(o=='huodongtupian'){
					this.ruleForm.huodongtupian = obj[o];
					this.ro.huodongtupian = true;
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
            this.ruleForm.zhiyuanshizhang = 0;
            this.ro.zhiyuanshizhang = false;
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
			// 下二随
			async huodongbianhaoChange (e) {
				this.huodongbianhaoIndex = e.target.value
				this.ruleForm.huodongbianhao = this.huodongbianhaoOptions[this.huodongbianhaoIndex]
				let res = await this.$api.follow(`zhiyuanhuodong`, `huodongbianhao`,{
					columnValue: this.ruleForm.huodongbianhao
				});
				if(res.data.huodongmingcheng){
					this.ruleForm.huodongmingcheng = res.data.huodongmingcheng
				}
				if(res.data.zhiyuanshizhang){
					this.ruleForm.zhiyuanshizhang = res.data.zhiyuanshizhang
				}
			},

			// 多级联动参数




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
				if(this.ruleForm.zhiyuanshizhang&&(!this.$validate.isIntNumer(this.ruleForm.zhiyuanshizhang))){
					this.$utils.msg(`志愿时长应输入整数`);
					return
				}
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
					let res = await this.$api.list(`zhiyuanshizhang`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
                        var obj = uni.getStorageSync('crossObj');
                        var table = uni.getStorageSync('crossTable');
                        obj.zhiyuanshizhang = parseFloat(obj.zhiyuanshizhang) + parseFloat(this.ruleForm.zhiyuanshizhang)
                        await this.$api.update(`${table}`, obj);
						if(this.ruleForm.id){
							await this.$api.update(`zhiyuanshizhang`, this.ruleForm);
						}else{
							await this.$api.add(`zhiyuanshizhang`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
                    var obj = uni.getStorageSync('crossObj');
                    var table = uni.getStorageSync('crossTable');
                    obj.zhiyuanshizhang = parseFloat(obj.zhiyuanshizhang) + parseFloat(this.ruleForm.zhiyuanshizhang)
                    await this.$api.update(`${table}`, obj);
					if(this.ruleForm.id){
						await this.$api.update(`zhiyuanshizhang`, this.ruleForm);
					}else{
						await this.$api.add(`zhiyuanshizhang`, this.ruleForm);
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
