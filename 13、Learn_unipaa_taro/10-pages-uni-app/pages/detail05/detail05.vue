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

<script setup>
	import {
		ref,
		onBeforeMount,
		onMounted
	} from 'vue'
	import {
		onLoad,
		onShow,
		onReady,
		onHide,
		onUnload,
		onPullDownRefresh,
		onReachBottom
	} from '@dcloudio/uni-app'

	// 1.页面的生命周期
	onLoad(() => {
		console.log('detail05 onLoad');
	})

	onShow(() => {
		console.log('detail05 onShow');
	})

	onReady(() => {
		console.log('detail05 onReady');
	})

	onHide(() => {
		console.log('detail05 onHide');
	})

	onUnload(() => {
		console.log('detail05 onUnload');
	})

	onPullDownRefresh(() => {
		console.log('detail05 onPullDownRefresh');
		setTimeout(() => {
			uni.stopPullDownRefresh()
		}, 1000)
	})

	onReachBottom(() => {
		console.log('detail05 onReachBottom');
	})

	// 2.Vue组件的生命周期
	onBeforeMount(() => {
		console.log('detail05 onBeforeMount');
	})
	onMounted(() => {
		console.log('detail05 onMounted');
	})
</script>

<style lang="scss">
	.item1 {
		height: 200rpx;
		border-bottom: 2rpx solid red;
	}
</style>