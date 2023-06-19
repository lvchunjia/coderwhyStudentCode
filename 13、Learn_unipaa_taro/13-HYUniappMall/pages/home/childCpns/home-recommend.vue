<template>
	<view class="recommend">
		<template v-for="(item, index) in recommends" :key="item.acm">
			<view class="recommend-item">
				<image class="image" :src="item.image"></image>
				<view class="title">{{item.title}}</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		props: {
			recommends: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="scss">
	@import "@/uni.scss";
	
	.recommend {
		@include  normalFlex;
		padding: 20rpx;
	}
	
	.recommend-item {
		color: $gNormalColor;
		font-size: 28rpx;
		
		@include normalFlex(column);
		align-items: center;
		
		.image {
			width: 150rpx;
			height: 150rpx;
		}
		
		.title {
			margin-top: 10rpx;
		}
	}
</style>
