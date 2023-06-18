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
				
				const eventChannel = this.getOpenerEventChannel();
				eventChannel.emit('acceptDataFormDetail02', {
					data: '将detail02页面的数据传递给Home页面'
				})
			}
		}
		
	}
</script>

<style lang="scss">

</style>
