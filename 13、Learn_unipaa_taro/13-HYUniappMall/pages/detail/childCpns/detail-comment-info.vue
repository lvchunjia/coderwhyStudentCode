<template>
	<view  v-if="Object.keys(commentInfo).length !== 0" class="detail-comment-info">
		<view class="info-header">
			<view class="header-title">用户评价</view>
			<view class="header-more">
				更多
				<text class="arrow-right"></text>
			</view>
		</view>
		<view v-if="commentInfo.user" class="info-user">
		  <image class="user-icon" :src="commentInfo.user.avatar" ></image>
		  <text class="user-name">{{commentInfo.user.uname}}</text>
		</view>
		
		<view class="info-detail">
		  <text class="content">{{commentInfo.content}}</text>
		  <view class="info-other">
		    <text class="date">{{showDate(commentInfo.created)}}</text>
		    <text>{{commentInfo.style}}</text>
		  </view>
		  <view class="info-imgs">
		    <image class="info-img" :src="item" v-for="(item, index) in commentInfo.images"></image>
		  </view>
		</view>
			  
	</view>
</template>

<script>
	import { computed } from 'vue'
	import { formatDate } from '@/utils/common.js'
	
	export default {
		props: {
			commentInfo: {
				type: Object,
				default: function() {
					return {}
				}
			}
		},
		setup() {
			const showDate = computed(()=> {
				return (value)=>{
					let date = new Date(value*1000);
					return formatDate(date, 'yyyy-MM-dd')
				}
			})
			return {
				showDate
			}
		}
	}
</script>

<style lang="scss">

	.detail-comment-info {
	  padding: 10rpx 24rpx;
	  color: #333;
	  border-bottom: 10rpx solid #f2f5f8;
	  background-color: white;
	  
	}

	.info-header {
	  height: 100rpx;
	  line-height: 100rpx;
	  border-bottom: 2rpx solid rgba(0,0,0,.1);
	}

	.header-title {
	  float: left;
	  font-size: 30rpx;
	}

	.header-more {
	  float: right;
	  margin-right: 20rpx;
	  font-size: 26rpx;
	}
	.arrow-right{
		border-top: 1px solid #999;
		border-left: 1px solid #999;
		width: 9px;
		height: 9px;
		background-color: transparent;
		transform: rotate(135deg);
		display: inline-block;
	}

	.info-user {
	  padding: 20rpx 0 10rpx;
	}
	
	.info-user .user-icon {
	  width: 84rpx;
	  height: 84rpx;
	  border-radius: 50%;
	}

	.info-user .user-name {
	  position: relative;
	  font-size: 30rpx;
	  top: -30rpx;
	  margin-left: 20rpx;
	}

	.info-detail {
	  padding: 0 10rpx 30rpx;
	}

	.info-detail .content {
	  font-size: 28rpx;
	  color: #777;
	  line-height: 1.5;
	}

	.info-detail .info-other {
	  font-size: 24rpx;
	  color: #999;
	  margin-top: 20rpx;
	}

	.info-other .date {
	  margin-right: 16rpx;
	}

	.info-imgs {
	  margin-top: 20rpx;
	}

	.info-imgs .info-img {
	  width: 140rpx;
	  height: 140rpx;
	  margin-right: 10rpx;
	}
</style>
