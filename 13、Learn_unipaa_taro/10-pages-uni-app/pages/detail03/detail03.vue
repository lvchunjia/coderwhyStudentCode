<template>
	<view>
		<navigator :delta="1" open-type="navigateBack">
			<button type="default" >返回(组件)</button>
		</navigator>
		<button type="default" @click="goBackHome">返回(API)</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(options) {
			console.log('接受url传递过来的数据:', options);
		},
		methods: {
			goBackHome() {
				uni.navigateBack({
					delta: 1
				})
				
				// 触发一个全局的事件( 在触发事件之前一定要先监听 )
				uni.$emit('acceptDataFromDetail03', {
					data: {
						desc: '这个在detail03传递到Home页面的数据'
					}
				})
				
				
			}
		}
		
	}
</script>

<style lang="scss">

</style>
