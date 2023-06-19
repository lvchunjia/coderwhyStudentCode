<template>
	<view class="detail-bottom-bar">
		<view class="bar-item bar-left">
		  <view class="item">
		    <view class="icon service"></view>
		    <text class="text">客服</text>
		  </view>
		  <view class="item">
		    <view class="icon shop"></view>
		    <text class="text">店铺</text>
		  </view>
		  <view class="item">
		    <view class="icon select"></view>
		    <text class="text">收藏</text>
		  </view>
		</view>
		<view class="bar-item bar-right">
		  <view class="cart" @click="addToCart">加入购物车</view>
		  <view class="buy">购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			
		},
		emits: ['addToCart'],
		setup(props, { emit }) {
			const addToCart =()=>{
				emit('addToCart')
			}
			return {
				addToCart
			}
		}
	}
</script>

<style lang="scss">
	.detail-bottom-bar{
		height: 116rpx;
		position: fixed;
		background-color: #fff;
		left: 0;
		right: 0;
		bottom: 0;
	
		display: flex;
		text-align: center;
		
		border-top: 1rpx solid $gBgColor;
	}
	
   .bar-item {
     flex: 1;
     display: flex;
   }
 
   .bar-item>.item {
     flex: 1;
   }
 
   .bar-left .text {
     font-size: 13px;
   }
 
   .bar-left .icon {
     display: block;
     width: 44rpx;
     height: 44rpx;
     margin: 20rpx auto 6rpx;
    background: url(../../../static/images/detail/detail_bottom.png) 0 0/100%;
   }
 
   .bar-left .service {
     background-position:0 -108rpx;
   }
 
   .bar-left .shop {
     background-position:0 -196rpx;
   }
 
   .bar-right {
     font-size: 30rpx;
     color: #fff;
     line-height: 116rpx;
   }
 
   .bar-right .cart {
     background-color: #ffe817;
     color: #333;
	 flex: 1;
   }
 
   .bar-right .buy {
     background-color: #f69;
	 width: 186rpx;
   }
</style>
