<template>
	<view class="tab-control">
		<template v-for="(title, index) in titles" :key="index">
			<view :class="['item', currentIndex === index ? 'active': '']"
				@click="handleItemClick(index)"
			>
				<text class="title">{{title}}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
 	const props = defineProps({
		titles: {
			type: Array,
			default: () => []
		}
	})
	const emit = defineEmits(['tabItemClick'])
	const currentIndex = ref(0)
	
	function handleItemClick(index) {
		currentIndex.value = index
		emit('tabItemClick', index)
	}
	
</script>

<style lang="scss">
	.tab-control{
		@include normalFlex();
		padding: 10rpx;
		margin-top: 10rpx;
		text-align: center;
		.item{
			flex: 1;
			.title{
				display: inline-block;
				padding: 16rpx;
				border-bottom: 6rpx solid #fff;
			}
			
			&.active{
				.title{
					color: $gPrimaryColor;
					border-bottom: 6rpx solid $gPrimaryColor;
				}
			}
		}
	}
</style>