<template>
	<view class="detail">
		<!-- 44px -->
		<detail-nav-bar @itemClick="handleNavBarItemClick"></detail-nav-bar>
		
		<scroll-view class="detail-scroll" scroll-y="true" :scroll-top="scrollTop" @scroll="handleScroll">
			<template v-if="currentNavBarIndex === 0">
				<detail-swiper ref="base" :banners="topImages"></detail-swiper>
				<detail-base-info :good="good"></detail-base-info>
				<detail-shop-info :shop="shop"></detail-shop-info>
				<detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
			</template>
			
			<template v-else-if="currentNavBarIndex === 1">
				<detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
			</template>
			<template v-else-if="currentNavBarIndex === 2">
				<detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
			</template>
			<template v-else>
				<detail-recommend-info ref="recommend" :recommend-list="recommendList"></detail-recommend-info>
			</template>
			
		</scroll-view>
		

		<!-- 58px -->
		<detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
	</view>
</template>

<script>
	import { ref, onMounted } from 'vue'
	import { onShow, onLoad } from "@dcloudio/uni-app"
	import store from '@/store/index.js';//需要引入store
	import { debounce } from '@/utils/common.js'
	
	
	import { getGoodDetail, getGoodRecommend , Goods, Shop, GoodsParam} from '@/service/detail.js'
	
	import DetailNavBar from './childCpns/detail-nav-bar.vue'
	import DetailSwiper from './childCpns/detail-swiper.vue'
	import DetailBaseInfo from './childCpns/detail-base-info.vue'
	import DetailShopInfo from './childCpns/detail-shop-info.vue'
	import DetailGoodsInfo from './childCpns/detail-goods-info.vue'
	import DetailParamInfo from './childCpns/detail-param-info.vue'
	import DetailCommentInfo from './childCpns/detail-comment-info.vue'
	import DetailRecommendInfo from './childCpns/detail-recommend-info.vue'
	import DetailBottomBar from './childCpns/detail-bottom-bar.vue'
	export default {
		props: {
			id: {
				type: String,
				default: ""
			}
		},
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			DetailRecommendInfo,
			DetailBottomBar
		},

		
		setup(props, context) {
			console.log('props=', props) // 接收页面的参数
			console.log('context=', context) // context
			const id = ref("")
			const scrollTop = ref(0)
			
			const currentNavBarIndex = ref(0)
			
			// 获取顶部信息
			const topImages = ref([])
			// 获取商品信息
			const good = ref({})
			// 获取店铺信息
			const shop = ref({})
			// 获取商品信息
			const detailInfo = ref({})
			// 保存参数信息
			const paramInfo = ref({})
			// 保存评论信息
			const commentInfo = ref({})
			
			// 推荐列表
			const recommendList = ref([])
			
			onShow(()=>{
				console.log('onShow')
			})
			onLoad((options) => {
				id.value = options.id
			})
			onMounted(()=>{
				getGoodDetail(id.value).then((res)=>{
					 // 2.1.获取结果
					const data = res.result;
		
					// 2.2.获取顶部信息
					topImages.value = data.itemInfo.topImages || [];
		
					// 2.3.获取商品信息
					good.value = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
		
					// 2.4.获取店铺信息
					shop.value = new Shop(data.shopInfo);
		
					// 2.5.获取商品信息
					detailInfo.value = data.detailInfo || {}
		
					// 2.6.保存参数信息
					paramInfo.value = new GoodsParam(data.itemParams.info, data.itemParams.rule);
		
					// 2.7.保存评论信息
					if (data.rate.list) {
					  commentInfo.value = data.rate.list[0];
					}
				})
				
				getGoodRecommend().then((res)=>{
					// console.log(res)
					recommendList.value  = res.data.list || []
				})
			})
			// 防抖
			const addToCart = debounce(()=>{
				console.log('addToCart')
				uni.showToast({
					title: '已加入购物车',
					duration: 1000
				});
				
				 // 1.创建对象
				 const obj = {}
				 // 2.对象信息
				 obj.iid = id.value
				 obj.imgURL = topImages.value[0]
				 obj.title = good.value.title
				 obj.desc = good.value.desc
				 // obj.count = 1
				 obj.newPrice = good.value.nowPrice
				 // console.log(obj)
				 // console.log(store.state.version)
				 // 3.添加到Store中
				 store.dispatch('addCartAction', obj)
				 // console.log('cartList=>', store.getters.cartList)
				 // store.dispatch('cart/addCartAction', obj) // 下面都是错误的写法
				 // store.commit('cart/addCartAction', obj)
			}, 500)
			const handleNavBarItemClick = ({id})=>{
				currentNavBarIndex.value = id
			}
			const handleScroll = ({detail})=>{
				// scrollTop.value = detail.scrollTop
			}
			return {
				scrollTop,
				currentNavBarIndex,
				
				topImages,
				good,
				shop,
				detailInfo,
				paramInfo,
				commentInfo,
				recommendList,
				addToCart,
				
				handleNavBarItemClick,
				handleScroll
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: $gBgColor;
		height: 100%;
	}
	.detail{
		height: 100%;
	}
	.detail-scroll{
		height: calc(100% - 204rpx);
	}

	
</style>
