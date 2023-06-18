<template>
	<view>
		iid:{{iid}}
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	// 获取到页面传递过来的URL参数
	const props = defineProps({
		iid: {
			type: String,
			default: ''
		}
	})
	// console.log('iid=', props.iid);
	
	// onLoad((options) => {
	// 	console.log('options=>', options);
	// })
	
</script>

<style lang="scss">

</style>
