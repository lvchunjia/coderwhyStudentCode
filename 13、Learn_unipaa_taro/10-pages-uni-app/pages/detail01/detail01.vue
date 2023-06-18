<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(options) {
			console.log("接受到url的参数:", options);
			 const eventChannel = this.getOpenerEventChannel();
			 eventChannel.on('acceptDataFormHomePage', (data) => {
				 console.log("接受到eventChannel的参数", data);
			 })
		}
	}
</script>

<style lang="scss">

</style>
