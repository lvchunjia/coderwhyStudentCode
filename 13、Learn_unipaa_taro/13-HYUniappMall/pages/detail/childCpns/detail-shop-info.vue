<template>
	<view class="detail-shop-info">
		<view class="shop-top">
			<image  class="top-icon" :src="shop.logo"></image>
			<text class="title">{{shop.name}}</text>
		</view>
		 <view class="shop-middle">
		      <view class="shop-middle-item shop-middle-left">
		        <view class="info-sells">
		          <view class="sells-count">
		            {{formateNumber(shop.sells)}}
		          </view>
		          <view class="sells-text">总销量</view>
		        </view>
		        <view class="info-goods">
		          <view class="goods-count">
		            {{shop.goodsCount}}
		          </view>
		          <view class="goods-text">全部宝贝</view>
		        </view>
		      </view>
		      <view class="shop-middle-item shop-middle-right">
				  <template v-for="(item, index) in shop.score" :key="index">
					  <view class="mid-item">
					  	 <text class="name">{{item.name}}</text>
					  	 <text class="score" :class="{'score-better': item.isBetter}">{{item.score}}</text>
					  	 <text class="better" :class="{'better-more': item.isBetter}"><text>{{item.isBetter ? '高':'低'}}</text></text>
					  </view>
				  </template>
		      </view>
		</view>
		<view class="shop-bottom">
		   <view class="enter-shop">进店逛逛</view>
		</view>
	</view>
</template>

<script>
	import { computed } from 'vue'
	export default {
		props: {
			shop: {
				type: Object,
				default: function() {
					return {}
				}
			}
		},
		setup() {
			const formateNumber = computed(()=>{
				return (number)=>{
					if (number < 10000) return number;
					return (number/10000).toFixed(1) + '万'
				}
			})
			return {
				formateNumber
			}
		}
	}
</script>

<style lang="scss">
	.detail-shop-info {
	    padding: 50rpx 16rpx;
	    border-bottom: 10rpx solid #f2f5f8;
		background-color: white;
	  }
	
	  .shop-top {
	    line-height: 90rpx;
	    /* 让元素垂直中心对齐 */
	    display: flex;
	    align-items: center;
	  }
	
	  .shop-top .top-icon {
	    width: 90rpx;
	    height: 90rpx;
	    border-radius: 50%;
	    border: 1rpx solid rgba(0,0,0,.1);
	  }
	
	  .shop-top .title {
	    margin-left: 20rpx;
	    vertical-align: center;
	  }
	
	  .shop-middle {
	    margin-top: 30rpx;
	    display: flex;
	    align-items: center;
	  }
	
	  .shop-middle-item {
	    flex: 1;
	  }
	
	  .shop-middle-left {
	    display: flex;
	    justify-content: space-evenly;
	    color: #333;
	    text-align: center;
	    border-right: 1rpx solid rgba(0,0,0,.1);
	  }
	
	  .sells-count, .goods-count {
	    font-size: 36rpx;
	  }
	
	  .sells-text, .goods-text {
	    margin-top: 20rpx;
	    font-size: 24rpx;
	  }
	
	  .shop-middle-right {
	    font-size: 26rpx;
	    color: #333;
	  }
	
	  .shop-middle-right .mid-item {
	    width: 240rpx;
	    margin-left: 60rpx;
	  }
	
	  .shop-middle-right .mid-item {
		  .name, .score, .better{
			display: inline-block;
			padding: 10rpx 8rpx;
		  }
	    
	  }
	
	  .shop-middle-right .score {
	    color: #5ea732;
		width: 52rpx;
	  }
	
	  .shop-middle-right .score-better {
	    color: #f13e3a;
	  }
	
	  .shop-middle-right .better text {
	    background-color: #5ea732;
	    color: #fff;
	    text-align: center;
	  }
	
	  .shop-middle-right .better-more text {
	    background-color: #f13e3a;
	  }
	
	  .shop-bottom {
	    text-align: center;
	    margin-top: 20rpx;
	  }
	
	  .enter-shop {
	    display: inline-block;
	    font-size: 28rpx;
	    background-color: #f2f5f8;
	    width: 300rpx;
	    height: 60rpx;
	    text-align: center;
	    line-height: 60rpx;
	    border-radius: 20rpx;
	  }
</style>
