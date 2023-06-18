<template>
	<view class="login">
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<!-- 第一个表单向 -->
			<uni-forms-item label="账号" name="username" required>
				<!-- <input type="text" v-model="formData.username" placeholder="请输入账号" /> -->
				<uni-easyinput type="text" v-model="formData.username" placeholder="请输入账号" />
			</uni-forms-item>

			<!-- 第一个表单向 -->
			<uni-forms-item label="密码" name="password" required>
				<!-- <input type="password" v-model="formData.password" placeholder="请输入密码" /> -->
				<uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
			</uni-forms-item>

		</uni-forms>

		<button type="default" @click="submit">提交表单</button>
		<button type="default" @click="reset">重置</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					username: null,
					password: null
				},
				rules: {
					username: {
						rules: [{
							required: true,
							errorMessage: '请输入账号'
						}]
					},
					password: {
						rules: [{
								required: true,
								errorMessage: '请输入密码'
							},
							{
								minLength: 6,
								maxLength: 8,
								errorMessage: '请输入6-8位的密码'
							}
						]
					}
				}
			};
		},
		methods: {
			submit() {
				console.log('submit');
				this.$refs.form.validate().then((value) => {
					// 表单验证成功
					console.log(value);
				}).catch((err) => {
					// 表单验证失败
					console.error(err);
				})
			},
			reset() {
				console.log('reset');
				// 清除表单验证的结果
				this.$refs.form.clearValidate()
				// 重置表单的值
				Object.keys(this.formData).forEach((key) => {
					this.formData[key] = null
				})
			}
		}
	}
</script>

<!-- 属于局部样式 -->
<style lang="scss">
// 方案一: weapp app
.uni-forms-item__label {
	color: red !important;
	padding-left: 10rpx;
}


// 方案二: weapp  h5  app
:deep(.uni-forms-item__label) {
	color: pink !important;
}

// 方案三: weapp h5 app
:global(.uni-forms-item__label) {
	color: purple !important;
}
</style>