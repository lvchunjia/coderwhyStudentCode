<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="link"></web-view>
	</view>
</template>

<script>
	import { ref } from 'vue'
	import { onLoad } from "@dcloudio/uni-app"
	
	export default {
		
		setup() {
			const webviewStyles = {
				progress: {
					color: '#ff5777'
				}
			}
			
			
			const link = ref("")
			
			onLoad((options) => {
				link.value = options.link
			})
			
			return {
				webviewStyles,
				link
			}
		}
	}
</script>

<style>

</style>
