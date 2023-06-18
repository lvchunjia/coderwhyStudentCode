<template>
	<view class="content">

		<!-- #ifdef H5 -->
		<view class="h5">
			<view>show H5</view>
			<img src="@/static/logo.png" alt="">
		</view>
		<!-- #endif -->

		<!-- #ifdef MP-WEIXIN || APP-PLUS -->
		<view class="weapp">
			<view>show weapp</view>
			<image src="@/static/logo.png" />
		</view>
		<!-- #endif -->

		<!-- #ifdef APP-PLUS -->
		<view class="app">
			<view>show app</view>
			<image src="@/static/logo.png" />
		</view>
		<!-- #endif -->

		<view class="box">我是一个View</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// #ifdef H5
			document.title = 'H5'
			// window.xxx
			// #endif

			// #ifdef MP-WEIXIN
			wx.setNavigationBarTitle({
				title: "WeApp"
			})
			// wx.login()
			// #endif
		},
		onReady() {
			// #ifdef APP-PLUS
			uni.setNavigationBarTitle({
				title: 'App'
			})
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#ff8198'
			})
			console.log('App ========> ');
			// #endif
		},
		methods: {

		}
	}
</script>

<style>
	.box {
		/* #ifdef H5 */
		color: red;
		/* #endif */

		/* #ifdef MP-WEIXIN */
		color: green;
		/* #endif */

		/* #ifdef APP-PLUS */
		color: blue;
		/* #endif */
	}
</style>