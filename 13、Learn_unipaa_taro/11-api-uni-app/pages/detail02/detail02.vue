<template>
	<view>
		<button type="default" @click="goBack">返回</button>
	</view>
</template>

<script setup>
	import {
		getCurrentInstance,
		ref
	} from 'vue'
 
	const $instance = ref(getCurrentInstance().proxy) // this 
 
	function goBack() {
		uni.navigateBack({
			delta: 1
		})
		const eventChannel = $instance.value.getOpenerEventChannel()
		// 触发事件, 将detail02的数据传递给Home页面
		eventChannel.emit('acceptDataFormDetail02', {
			data: '这里是detail02传递给Home页面的数据'
		})
	}
</script>

<style lang="scss">

</style>
