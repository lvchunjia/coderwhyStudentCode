<template>
	<view class="home">
		<!-- 轮播图组件 -->
		<home-banner :banners="banners" @bannerItemClick="handleBannerItemClick"></home-banner>
		<!-- 推荐栏组件 -->
		<home-recommend :recommends="recommends"></home-recommend>
		<!-- 热门栏组件 -->
		<home-popular></home-popular>
		<!-- 选项卡组件 -->
		<tab-control :titles="['流行', '新款', '精选']" @tabItemClick="handleTabItemClick"></tab-control>
		<!-- 九宫格组件 -->
		<uni-grid :column="2" :highlight="false" :showBorder="false" :square="false" borderColor="#ff8198">
			<template v-for="(itemInfo, index) in goodsList[currentType].list" :key="itemInfo.iid">
				<uni-grid-item :index="index">
					<grid-view-item :itemInfo="itemInfo" @itemClick="handleGridItemClick"></grid-view-item>
				</uni-grid-item>
			</template>
		</uni-grid>
	</view>
</template>

<script setup>
	import { onMounted } from 'vue'
	import { onLoad, onReachBottom } from '@dcloudio/uni-app'
	import { storeToRefs } from 'pinia'
	import {
		useHomeStore,
		types
	} from '@/store/home.js'
	import HomeBanner from './cpns/home-banner.vue'
	import HomeRecommend from './cpns/home-recommend.vue'
	import HomePopular from './cpns/home-popular.vue'
	
	
	const homeStore = useHomeStore()
	// refs
	const { banners, recommends, goodsList, currentType } = storeToRefs(homeStore)

	onLoad(() => {
		// 触发一个异步的 action( 获取首页轮播数据 )
		homeStore.fetchHomeMultidata()
		
		homeStore.fetchHomeData('pop', 1) // 获取流行第一页的商品
		homeStore.fetchHomeData('new', 1) // 获取新款第一页的商品
		homeStore.fetchHomeData('sell', 1) // 获取精选第一页的商品
	})
	
	// 监听页面滚动到底部
	onReachBottom(() => {
		// console.log('onReachBottom'); // 加载对应分类的下一页数据
		homeStore.fetchHomeData(currentType.value, goodsList.value[currentType.value].page + 1)
		
	})

	// 轮播图的点击事件
	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}
	
	// tab-control的点击事件
	function handleTabItemClick(index) {
		// console.log('handleTabItemClick=>', index); // 0->pop 1->new 2->sell
		homeStore.setCurrentType(types[index])
	}
	
	// grid-view-item 的点击事件（会跳转到详情页面）
	function handleGridItemClick(itemInfo) {
		uni.navigateTo({
			url: '/pages/detail/detail?iid=' + itemInfo.iid
		})
	}
</script>

<style>

</style>
