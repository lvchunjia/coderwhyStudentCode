<template>
	<view>
		<view class="">1.页面传递数据(正向)</view>
		<button type="default" @click="goToDetail01">01-detail01 navigate</button>
		
		<view class="">2.页面传递数据(逆向)</view>
		<button type="default" @click="goToDetail02">01-detail02 navigate</button>
		
		<view class="">3.页面逆向传递数据(全局事件总线)</view>
		<button type="default" @click="goToDetail03">01-detail03 navigate</button>
		
	</view>
</template>

<script setup>
	
	import {
		onLoad,
		onUnload
	} from '@dcloudio/uni-app'
	
	onLoad(() => {
		uni.$on('acceptDataFormDetail03', acceptDataFormDetail03)
	})
	onUnload(() => {
		uni.$off('acceptDataFormDetail03', acceptDataFormDetail03)
	}) 
	
	function acceptDataFormDetail03(value) {
		console.log('接收到detail03传递给home页面的数据:', value);
	}
	
	function goToDetail01() {
		console.log('goToDetail01');
		uni.navigateTo({
			url: '/pages/detail01/detail01?name=liujun&id=100',
			success(res) {
				res.eventChannel.emit('acceptDataFormHomePage', {
					data: '我是home页面传递给detail01的数据'
				})
			},
		})
	}
	
	function goToDetail02() {
		uni.navigateTo({
			url: '/pages/detail02/detail02?name=liujun&id=200',
			events: {
				acceptDataFormDetail02(value) {
					console.log('接收到detail02传递过来的数据', value);
				}
			}
		})
	}
	
	function goToDetail03() {
		uni.navigateTo({
			url: '/pages/detail03/detail03?name=liujun&id=300'
		})
	}
	
</script>

<style lang="scss">

</style>
