<template>
	<view class="detail-recommend-info">
		<div class="info-header">热门推荐</div>
		<view class="goods-list">
			<template v-for="(item, index) in recommendList" :key="item.cfav + '_' + item.iid">
				<view class="item">
					<goods-list-item :itemInfo="item" @itemClick="handleGoodItemClick"></goods-list-item>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import GoodsListItem from '@/components/goods-list-item/index.vue'
	
	export default {
		props: {
			recommendList: {
				type: Array,
				default: function () {
					return []
				}
			}
		},
		components: {
			GoodsListItem
		},
		setup() {
			const handleGoodItemClick = (item)=>{
				console.log(item)
			}
			return {
				handleGoodItemClick
			}
		}
	}
</script>

<style lang="scss">
	.detail-recommend-info{
		background-color: white;
		padding: 10rpx;
	    .info-header {
	      line-height: 40px;
	      padding-left: 8px;
	      font-size: 15px;
	      color: #333;
	    }
		  
		.goods-list {
			@include normalFlex;
			flex-wrap: wrap;
			
			padding: 16rpx;
			
			.item {
				width: 48%;
			}
		}
	}
</style>
