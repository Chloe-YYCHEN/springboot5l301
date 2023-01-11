<template>
	<view class="content">
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='zhiyuanzhe'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>志愿者账号</view>
			<input disabled="true"  style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.zhiyuanzhezhanghao" placeholder="志愿者账号"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='zhiyuanzhe'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>密码</view>
			<input  type="password" style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.mima" placeholder="密码"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='zhiyuanzhe'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>志愿者姓名</view>
			<input   style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.zhiyuanzhexingming" placeholder="志愿者姓名"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='zhiyuanzhe'" @tap="zhiyuanzhezhaopianTap" class="cu-form-group" :class="left == 'left'?'':'active'">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>照片</view>
			<view style="flex: 1;textAlign:left">
				<image :style='{"width":"100rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"100rpx"}' v-if="ruleForm.zhaopian" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.zhaopian" mode=""></image>
				<image :style='{"width":"100rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"100rpx"}' v-else class="avator" style="margin: 0;" src="../../static/center/face.jpeg" mode=""></image>
			</view>
		</view>
			<view v-if="tableName=='zhiyuanzhe'" :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
                                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">性别</view>
                                <picker  @change="zhiyuanzhexingbieChange" :value="zhiyuanzhexingbieIndex" :range="zhiyuanzhexingbieOptions">
                                        <view style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
                                </picker>
                        </view>
			<view v-if="tableName=='zhiyuanzhe'" :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
                                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}' class="title">最高学历</view>
                                <picker  @change="zhiyuanzhezuigaoxueliChange" :value="zhiyuanzhezuigaoxueliIndex" :range="zhiyuanzhezuigaoxueliOptions">
                                        <view style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input picker-select-input">{{ruleForm.zuigaoxueli?ruleForm.zuigaoxueli:"请选择最高学历"}}</view>
                                </picker>
                        </view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='zhiyuanzhe'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>民族</view>
			<input   style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.minzu" placeholder="民族"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='zhiyuanzhe'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>政治面貌</view>
			<input   style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.zhengzhimianmao" placeholder="政治面貌"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='zhiyuanzhe'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>身份证</view>
			<input   style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.shenfenzheng" placeholder="身份证"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='zhiyuanzhe'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>联系方式</view>
			<input   style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.lianxifangshi" placeholder="联系方式"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='zhiyuanzhe'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>所在城市</view>
			<input   style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.suozaichengshi" placeholder="所在城市"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='zhiyuanzhe'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>志愿时长</view>
			<input disabled="true"  style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.zhiyuanshizhang" placeholder="志愿时长"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='putongguanliyuan'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>管理员账号</view>
			<input disabled="true"  style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.guanliyuanzhanghao" placeholder="管理员账号"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='putongguanliyuan'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>密码</view>
			<input  type="password" style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.mima" placeholder="密码"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='putongguanliyuan'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>管理员姓名</view>
			<input   style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.guanliyuanxingming" placeholder="管理员姓名"></input>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='putongguanliyuan'" @tap="putongguanliyuantouxiangTap" class="cu-form-group" :class="left == 'left'?'':'active'">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>头像</view>
			<view style="flex: 1;textAlign:left">
				<image :style='{"width":"100rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"100rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"100rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"100rpx"}' v-else class="avator" style="margin: 0;" src="../../static/center/face.jpeg" mode=""></image>
			</view>
		</view>
		<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' v-if="tableName=='putongguanliyuan'" class="cu-form-group">
			<view class="title" :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left"}'>联系方式</view>
			<input   style="padding: 0 30upx" :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","borderRadius":"16rpx","color":"rgba(255, 114, 20, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.lianxifangshi" placeholder="联系方式"></input>
		</view>
		
		<view class="btn">
			<view class="box" :style="{width: 'auto'}">
				<button @tap="update()" class="cu-btn lg" :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"#409EFF","borderColor":"#409EFF","borderRadius":"8rpx","color":"#fff","borderWidth":"1","width":"auto","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'>保存</button>
			</view>

			<view class="box" :style="{width: 'auto'}">
				<button @tap="logout()" class="cu-btn lg" :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"rgba(255, 114, 20, 1)","borderColor":"rgba(255, 114, 20, 1)","borderRadius":"8rpx","color":"#fff","borderWidth":"2rpx","width":"auto","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'>退出登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				zhiyuanzhexingbieOptions: [],
				zhiyuanzhexingbieIndex: 0,
				zhiyuanzhezuigaoxueliOptions: [],
				zhiyuanzhezuigaoxueliIndex: 0,
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='zhiyuanzhe'){
				this.zhiyuanzhexingbieOptions = "男,女".split(',');
				this.zhiyuanzhexingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.zhiyuanzhexingbieIndex = index;
					}
				});
			}
			// 自定义下拉框值
			if(this.tableName=='zhiyuanzhe'){
				this.zhiyuanzhezuigaoxueliOptions = "硕士,本科,专科,高中".split(',');
				this.zhiyuanzhezuigaoxueliOptions.forEach((item, index) => {
					if(item==this.ruleForm.zuigaoxueli) {
						this.zhiyuanzhezuigaoxueliIndex = index;
					}
				});
			}
			this.styleChange()
		},
		methods: {
                        // 下拉变化
                        zhiyuanzhexingbieChange(e) {
                                this.zhiyuanzhexingbieIndex = e.target.value
                                this.ruleForm.xingbie = this.zhiyuanzhexingbieOptions[this.zhiyuanzhexingbieIndex]
                        },
                        // 下拉变化
                        zhiyuanzhezuigaoxueliChange(e) {
                                this.zhiyuanzhezuigaoxueliIndex = e.target.value
                                this.ruleForm.zuigaoxueli = this.zhiyuanzhezuigaoxueliOptions[this.zhiyuanzhezuigaoxueliIndex]
                        },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.setStorageSync('token', '');
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {
				if((!this.ruleForm.zhiyuanzhezhanghao) && `zhiyuanzhe` == this.tableName){
					this.$utils.msg(`志愿者账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `zhiyuanzhe` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(`zhiyuanzhe` == this.tableName && this.ruleForm.shenfenzheng&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
					this.$utils.msg(`身份证应输入身份证格式`);
					return
				}
				if(`zhiyuanzhe` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
					this.$utils.msg(`联系方式应输入手机格式`);
					return
				}
				if(`zhiyuanzhe` == this.tableName && this.ruleForm.zhiyuanshizhang&&(!this.$validate.isIntNumer(this.ruleForm.zhiyuanshizhang))){
					this.$utils.msg(`志愿时长应输入整数`);
					return
				}
				if((!this.ruleForm.guanliyuanzhanghao) && `putongguanliyuan` == this.tableName){
					this.$utils.msg(`管理员账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `putongguanliyuan` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(`putongguanliyuan` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
					this.$utils.msg(`联系方式应输入手机格式`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			}

			,zhiyuanzhezhaopianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.zhaopian = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			}
			,putongguanliyuantouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
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

	.avator {
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
		margin-left: 30upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}

	.cu-btn {
		width: 100%;
	}

	.right-input {
		flex: 1;
		text-align: left;
		line-height: 88rpx;
	}
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	  padding: 20upx 0;
	}
	
	.box {
	  width: auto;
	  padding: 0 10upx;
	  box-sizing: border-box;
	  margin-bottom: 20upx;
	}
	
	.cu-btn {
	  width: 100% !important;
	}

.picker-select-input {
	line-height: 88rpx;
}
</style>
