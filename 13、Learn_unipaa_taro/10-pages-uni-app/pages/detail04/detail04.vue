<template>
	<view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item1</view>
		<view class="item1">item8</view>
		<view class="item1">item9</view>
		<view class="item1">item10</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: '我是data定义的数据'
			};
		},
		// 1.页面的生命周期
		onLoad(options) {
			console.log('detail04 onLoad');
		},
		onShow() {
			console.log('detail04 onShow');
			console.log(this);
		},
		onReady() {
			console.log('detail04 onReady');
		},
		onHide() {
			console.log('detail04 onHide');
		},
		onUnload() {
			console.log('detail04 onUnload');
		},
		onPullDownRefresh() {
			console.log('detail04 onPullDownRefresh');
			setTimeout(() => {
				// 关闭下拉刷新的图标
				uni.stopPullDownRefresh()
			}, 1000)
		},
		onReachBottom() {
			console.log('detail04 onReachBottom');
		},
		// 2.Vue组件的生命周期
		beforeCreate() {
			console.log('detail04 beforeCreate');
		},
		created() {
			console.log('detail04 created');
		},
		beforeMount() {
			console.log('detail04 beforeMount');
		},
		mounted() {
			console.log('detail04 mounted');
		},
		beforeDestroy() {
			console.log('detail04 beforeDestroy');
		},
		destroyed() {
			console.log('detail04 destroyed');
		}
	}
</script>

<style lang="scss">

.item1{
	height: 200rpx;
	border-bottom: 2rpx solid red;
}
</style>
