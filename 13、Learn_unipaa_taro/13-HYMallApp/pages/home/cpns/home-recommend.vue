<template>
	<view class="recommend">
		<template v-for="(item) in recommends" :key="item">
			<view class="recommend-item" @click="handleItemClick(item)">
				<image class="image" :src="item.image" mode="widthFix"></image>
				<view class="title">{{item.title}}</view>
			</view>
		</template>
	</view>
</template>

<script setup>
	const props = defineProps({
		recommends: {
			type: Array,
			default: () => []
		}
	})
	const emit = defineEmits(['itemClick'])
	
	function handleItemClick(item) {
		emit('itemClick', item)
	}
</script>

<style lang="scss">
	.recommend{
		@include normalFlex();
		padding: 20rpx;
		.recommend-item{
			@include normalFlex(column);
			align-items: center;
			font-size: $gFontSize;
			.image{
				width: 150rpx;
				height: 150rpx;
			}
			.title{
				margin-top: 10rpx;
			}
		}
	}
</style>