<template>
	<view class="content">
		<!-- 直接写div是可以,但是不推荐, 并且这个div标签是不跨平台组件 -->
		<!-- <div>我是一个div</div> -->
		<view class="title">1.我是一个View组件(是一个跨平台组件)</view>
		<text class="text">2.我是一个Text组件</text>
		<button type="default">3.我是一个button</button>
		<!-- primary 是一个主题色 
		 1. 自己封装一个button
		 2. 重写button的样式( 条件编译 )		
		-->
		<button type="primary">4.我是一个button</button>

		<!-- 图片 -->
		<!-- 相对路径 -->
		<!-- <image src="../../static/images/cvy.png" mode="widthFix"></image> -->
		<!-- 绝对路径 -->
		<!-- <image src="@/static/images/cvy.png" mode="widthFix"></image> -->
		<!-- 导入的图片 -->
		<image class="image" :src="cvy" mode="widthFix"></image>
		<!-- base64 字符串 -->

		<scroll-view scroll-y="true" class="hy-v-scroll">
			<view class="v-item">item1</view>
			<view class="v-item">item2</view>
			<view class="v-item">item3</view>
			<view class="v-item">item4</view>
			<view class="v-item">item5</view>
			<view class="v-item">item6</view>
			<view class="v-item">item7</view>
		</scroll-view>

		<scroll-view scroll-x="true" class="hy-h-scroll" :show-scrollbar="false">
			<view class="h-item">item1</view>
			<view class="h-item">item2</view>
			<view class="h-item">item3</view>
			<view class="h-item">item4</view>
			<view class="h-item">item5</view>
			<view class="h-item">item6</view>
			<view class="h-item">item7</view>
		</scroll-view>

		<swiper class="hy-swiper" :indicator-dots="true" indicator-active-color="#ff8198" indicator-color="#f8f8f8"
			:autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<image class="swiper-image" src="@/static/images/banner/banner01.jpeg"></image>
			</swiper-item>
			<swiper-item>
				<image class="swiper-image" src="@/static/images/banner/banner02.jpeg"></image>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	import cvy from '@/static/images/cvy.png'
	export default {
		data() {
			return {
				title: 'Hello',
				cvy
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.image {
		width: 200rpx;
	}

	.hy-v-scroll {
		height: 400rpx;
		border: 2rpx solid red;
		box-sizing: border-box;

		.v-item {
			height: 200rpx;
			border-bottom: 2rpx solid blue;
		}
	}


	// 局部样式
	.hy-h-scroll {
		white-space: nowrap;
		// 隐藏原生实现的滚动条
		// &::webkit-scrollbar{
		// 	display: none;
		// }

		// 编写全局样式
		// :global()
		:deep(.hy-h-scroll .uni-scroll-view::-webkit-scrollbar) {
			display: none;
		}

		.h-item {
			display: inline-block;
			height: 200rpx;
			width: 200rpx;
			border-right: 2rpx solid hotpink;
		}
	}

	.hy-swiper {
		height: 400rpx;
	}

	.swiper-image {
		width: 100%;
		height: 100%;
	}
</style>