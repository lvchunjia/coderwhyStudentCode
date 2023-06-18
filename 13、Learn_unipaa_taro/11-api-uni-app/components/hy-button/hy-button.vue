<template>
	<view :class="['hy-btn', type]" @click="handleBtnClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"hy-button",
		props: {
			type: {
				type: String,
				default: 'default' // default  primary
			}
		},
		emits:['onBtnClick'],
		data() {
			return {
				
			};
		},
		computed: {},
		watch: {},
		// 1.组件的生命周期函数
		beforeCreate() {
			console.log('hy-btn beforeCreate');
		},
		created() {
			console.log('hy-btn created');
			console.log(this);
		},
		mounted() {
			console.log('hy-btn mounted');
		},
		// 2.页面的生命周期(在options api 中是不会执行)
		onLoad() {
			console.log('hy-btn onLoad');
		},
		onShow() {
			console.log('hy-btn onShow');
		},
		methods: {
			handleBtnClick() {
				this.$emit('onBtnClick')
			}
		}
	}
</script>

<style lang="scss">
	.hy-btn{
		padding: 20rpx 0;
		font-size: 40rpx;
		color: white;
		text-align: center;
		border-radius: 10rpx;
	}
	
	.default {
		background-color: #cdcdcd;
	}
	
	.primary{
		background-color: green;
	}
</style>