<template>
	<view class="content">
		<view class="logo" v-if="true">
			<image :style='{"boxShadow":"none","borderColor":"#ccc","borderRadius":"100%","borderWidth":"2rpx","width":"160rpx","borderStyle":"solid","url":"http://codegen.caihongy.cn/20210402/ade098aa8d2a446182e853d1230a4e5c.jpg","isShow":true,"height":"160rpx"}' src='http://codegen.caihongy.cn/20210402/ade098aa8d2a446182e853d1230a4e5c.jpg' mode="aspectFill"></image>
		</view>
		<view v-if="tableName=='zhiyuanzhe'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.zhiyuanzhezhanghao" type="text" class="uni-input" name="" placeholder="志愿者账号" />
		</view>
		<view v-if="tableName=='zhiyuanzhe'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.mima" type="text" class="uni-input" name="" placeholder="密码" />
		</view>
		<view v-if="tableName=='zhiyuanzhe'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.zhiyuanzhexingming" type="text" class="uni-input" name="" placeholder="志愿者姓名" />
		</view>
		<view v-if="tableName=='zhiyuanzhe'" class="uni-form-item uni-column">
                        <picker  @change="zhiyuanzhexingbieChange" :value="zhiyuanzhexingbieIndex" :range="zhiyuanzhexingbieOptions">
                                <view :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
                        </picker>
                </view>
		<view v-if="tableName=='zhiyuanzhe'" class="uni-form-item uni-column">
                        <picker  @change="zhiyuanzhezuigaoxueliChange" :value="zhiyuanzhezuigaoxueliIndex" :range="zhiyuanzhezuigaoxueliOptions">
                                <view :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{ruleForm.zuigaoxueli?ruleForm.zuigaoxueli:"请选择最高学历"}}</view>
                        </picker>
                </view>
		<view v-if="tableName=='zhiyuanzhe'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.minzu" type="text" class="uni-input" name="" placeholder="民族" />
		</view>
		<view v-if="tableName=='zhiyuanzhe'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.zhengzhimianmao" type="text" class="uni-input" name="" placeholder="政治面貌" />
		</view>
		<view v-if="tableName=='zhiyuanzhe'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.shenfenzheng" type="text" class="uni-input" name="" placeholder="身份证" />
		</view>
		<view v-if="tableName=='zhiyuanzhe'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.lianxifangshi" type="text" class="uni-input" name="" placeholder="联系方式" />
		</view>
		<view v-if="tableName=='zhiyuanzhe'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.suozaichengshi" type="text" class="uni-input" name="" placeholder="所在城市" />
		</view>
		<view v-if="tableName=='zhiyuanzhe'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="true" v-model="ruleForm.zhiyuanshizhang" type="text" class="uni-input" name="" placeholder="志愿时长" />
		</view>
		<view v-if="tableName=='putongguanliyuan'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.guanliyuanzhanghao" type="text" class="uni-input" name="" placeholder="管理员账号" />
		</view>
		<view v-if="tableName=='putongguanliyuan'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.mima" type="text" class="uni-input" name="" placeholder="密码" />
		</view>
		<view v-if="tableName=='putongguanliyuan'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.guanliyuanxingming" type="text" class="uni-input" name="" placeholder="管理员姓名" />
		</view>
		<view v-if="tableName=='putongguanliyuan'" class="uni-form-item uni-column">
			<input :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"0 0 2rpx 0","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'  v-model="ruleForm.lianxifangshi" type="text" class="uni-input" name="" placeholder="联系方式" />
		</view>
		<view>
			<button @tap="register" type="primary" :style='{"borderColor":"#ccc","backgroundColor":"rgba(255, 114, 20, 1)","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"2rpx","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}'>注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                                zhiyuanzhexingbieOptions: [],
                                zhiyuanzhexingbieIndex: 0,
                                zhiyuanzhezuigaoxueliOptions: [],
                                zhiyuanzhezuigaoxueliIndex: 0,
				ruleForm: {
				},
				emailcode: "",
				tableName:""
			}
		},
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
	    		this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='zhiyuanzhe'){
                this.zhiyuanzhexingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.zhiyuanzhexingbieOptions[0]
			}
                        // 自定义下拉框值
			if(this.tableName=='zhiyuanzhe'){
                this.zhiyuanzhezuigaoxueliOptions = "硕士,本科,专科,高中".split(',');
				this.ruleForm.zuigaoxueli=this.zhiyuanzhezuigaoxueliOptions[0]
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
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.zhiyuanzhezhanghao) && `zhiyuanzhe` == this.tableName){
					this.$utils.msg(`志愿者账号不能为空`);
					return
				}
				if((this.ruleForm.zhiyuanzhezhanghao.length<3) && `zhiyuanzhe` == this.tableName){
					this.$utils.msg(`志愿者账号长度不能小于3`);
					return
				}
				if((this.ruleForm.zhiyuanzhezhanghao.length>10) && `zhiyuanzhe` == this.tableName){
					this.$utils.msg(`志愿者账号长度不能大于10`);
					return
				}
				if((!this.ruleForm.mima) && `zhiyuanzhe` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if((this.ruleForm.mima.length<3) && `zhiyuanzhe` == this.tableName){
					this.$utils.msg(`密码长度不能小于3`);
					return
				}
				if((this.ruleForm.mima.length>10) && `zhiyuanzhe` == this.tableName){
					this.$utils.msg(`密码长度不能大于10`);
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
				await this.$api.register(`${this.tableName}`, this.ruleForm, this.emailcode);
				this.$utils.msgBack('注册成功');;
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;

	.content {
		padding: 100upx;
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

	.logo {
		text-align: center;

		image {
			height: 200upx;
			width: 200upx;
			margin: 0 0 60upx;
		}
	}

	.uni-form-item {
		margin-bottom: 40upx;
		padding: 0;

		.uni-input {
			font-size: 30upx;
			padding: 7px 0;
		}
	}

	button[type="primary"] {
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}

	.links {
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}

		.link-highlight {
			color: $color-primary
		}
	}
.picker-select-input {
	line-height: 88rpx;
}

</style>
