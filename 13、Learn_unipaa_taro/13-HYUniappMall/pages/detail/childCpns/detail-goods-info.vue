<template>
	<view v-if="Object.keys(detailInfo).length !== 0" class="detail-goods-info">
		<view class="info-desc clear-fix">
			<view class="start"></view>
			<view class="desc">{{detailInfo.desc}}</view>
			<view class="end"></view>
		</view>
		<view class="info-key" v-if="detailInfo.detailImage" >{{detailInfo.detailImage[0].key}}</view>
		<view class="info-list" v-if="detailInfo.detailImage">

			<!-- #ifndef H5  -->
			<image class="detail-img" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" mode="widthFix" :lazy-load="true"></image>
			<!-- #endif  -->
			<!-- #ifdef H5  -->
			<img class="detail-img" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" v-lazy="item"  />
			<!-- #endif  -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			 detailInfo: {
				type: Object
			 }
		},
		setup(){
			return {
				
			}
		} 
	}
</script>

<style lang="scss">
	.detail-goods-info {
	  padding: 40rpx 0;
	  border-bottom: 10rpx solid #f2f5f8;
	  background-color: white;
	}

	.info-desc {
	  padding: 0 30rpx;
	}

	.info-desc .start, .info-desc .end {
	  width: 180rpx;
	  height: 2rpx;
	  background-color: #a3a3a5;
	  position: relative;
	}

	.info-desc .start {
	  float: left;
	}

	.info-desc .end {
	  float: right;
	}

	.info-desc .start::before, .info-desc .end::after {
	  content: '';
	  position: absolute;
	  width: 10rpx;
	  height: 10rpx;
	  background-color: #333;
	  bottom: 0;
	}

	.info-desc .end::after {
	  right: 0;
	}

	.info-desc .desc {
	  padding: 30rpx 0;
	  font-size: 28rpx;
	}

	.info-key {
	  margin: 20rpx 0 20rpx 30rpx;
	  color: #333;
	  font-size: 30rpx;
	}

	.info-list .detail-img {
	  width: 100%;
	  // height: 712rpx;
	}
</style>
