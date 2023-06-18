<template>
	<view>
		
	</view>
</template>

<script setup>
	import { ref , getCurrentInstance } from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	
	// 2.方式二: ?name=liujun&id=100
	const props = defineProps({
		name: String,
		id: String
	})
	
	// $instance => this
	const $instance = ref(getCurrentInstance().proxy)
	console.log('在props中接受home传递过来url的数据:', props.name, props.id);
	
	// 1.方式一: ?name=liujun&id=100
	onLoad((options) => {
		console.log('接受到home传递过来url的数据:', options);
		// const eventChannel = this.getOpenerEventChannel();
		const eventChannel = $instance.value.getOpenerEventChannel();
		eventChannel.on('acceptDataFormHomePage', (value) => {
			console.log('接收到home页面eventchannel传递过来的数据:', value);
		})
		
	})
</script>

<style lang="scss">

</style>
