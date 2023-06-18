<template>
	<view class="style-page">
		<view class="bg-view"></view>
		<text class="text iconfont icon-shouye"></text>
		<text class="text iconfont icon-Video"></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.bg-view {
		height: 200rpx;
		border: 1px solid red;

		// 3 kb 在小程序端编译器会将其转成base64
		// background-image: url("~@/static/logo.png");
		background-image: url("~@/static/cvy.png");
		background-repeat: no-repeat;
		background-size: contain;

		// 70+kb 在小程序端是不支持的
		// background-image: url('~@/static/images/banner/banner01.jpeg');
	}

	.text {
		font-size: 50rpx;
		color: red;
	}
</style>