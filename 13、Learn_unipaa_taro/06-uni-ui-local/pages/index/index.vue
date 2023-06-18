<template>
	<view class="content">
		<uni-countdown color="white" background-color="#cdcdcd" :day="0" :showDay="false" :hour="6" :minute="12"
			:second="20">
		</uni-countdown>

		<uni-badge text="100" type="primary"></uni-badge>
		<uni-badge text="90" type="success"></uni-badge>

		<uni-badge text="90" type="info" absolute="rightTop">
			<button>button</button>
		</uni-badge>

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

		},
		methods: {

		}
	}
</script>

<style>

</style>