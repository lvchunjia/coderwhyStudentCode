<template>
	<view>
		<button type="default" @click="goBack">返回</button>
	</view>
</template>

<script setup> 

	function goBack() {
		uni.navigateBack({
			delta: 1
		})
		
		// 触发事件( 通过事件总线 )
		uni.$emit('acceptDataFormDetail03', {
			data: '这里的数据是从detail03传递到home页面'
		})
	}
	
</script>

<style lang="scss">

</style>
