<template>
	<view class="user-info" @click='itemClick'>
		<view class="user-icon">
			<image class="avatar" src="../../../static/images/profile/avatar-default.png"></image>
		</view>
		
		<view class="login-info">
			<view class="name">
				<slot>登录</slot>
			</view>
			<view class="phone">
				<image class="phone-icon" src="../../../static/images/profile/phone.png"></image>
				<text>暂无绑定手机号</text>
			</view>
		</view>
		
		<image class="arrow" src="../../../static/images/common/arrow-right.png" ></image>
	</view>
</template>

<script>
	export default {
		setup(){
			const itemClick = ()=>{
				console.log('登录/注册')
			}
			return {
				itemClick
			}
		}
	}
</script>

<style lang="scss">
	.user-info{
		padding: 30rpx;
		height: 120rpx;
		background-color: $gTintColor;
		margin-top: -2rpx;
		
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.user-icon{
			width: 120rpx;
			height: 120rpx;
			background-color: white;
			border-radius: 100%;
			.avatar{
				width: 100%;
				height: 100%;
			}
		}
		.login-info{
			flex: 1;
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			color: white;
			
			.phone{
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-top: 10rpx;
				color: white;
				opacity: .8;
				font-size: 26rpx;
				.phone-icon{
					width: 36rpx;
					height: 36rpx;
					margin-right: 5rpx;
				}
			}
		}
		
		.arrow{
			width: 32rpx;
			height: 40rpx;
		}
	}

</style>
