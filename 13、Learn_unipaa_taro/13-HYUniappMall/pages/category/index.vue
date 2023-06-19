<template>
	<view class="category">
		<tab-menu :categories="categories" @menuItemClick="tabMenuItemClick"></tab-menu>
		<scroll-view class="content-scroll" scroll-y="true">
			<tab-content-category :subcategories="subcategories"></tab-content-category>
			<tab-control class="tab-control" :titles="['综合', '新品', '销量']" @tabClick="handleTabClick"></tab-control>
			<view class="goods-list">
				<template v-for="(item, index) in goodsList[currentType]" :key="item.cfav + '_' + item.iid">
					<view class="item">
						<goods-list-item :itemInfo="item" @itemClick="handleGoodItemClick"></goods-list-item>
					</view>
				</template>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		ref,
		reactive,
		onMounted
	} from 'vue'
	import TabMenu from './childCpns/tab-menu.vue'
	import TabContentCategory from './childCpns/tab-content-category.vue'
	import TabControl from '@/components/tab-control/index.vue'
	import GoodsListItem from '@/components/goods-list-item/index.vue'

	import {
		getCategory,
		getSubcategory,
		getCategoryDetail
	} from '../../service/category.js'
	export default {
		components: {
			TabMenu,
			TabContentCategory,
			TabControl,
			GoodsListItem
		},
		setup() {
			const categories = ref([]) // 菜单数据
			const subcategories = ref([]) // 内容分类
			const categoriesDetailPop = ref([]) // 菜单数据
			const categoriesDetailNew = ref([]) // 菜单数据
			const categoriesDetailSell = ref([]) // 菜单数据

			const currentType = ref("pop") // 综合

			const types = ["pop", "new", "sell"] // 综合，新品，销量
			const goodsListOrigin = {}
			types.forEach((type) => {
				goodsListOrigin[type] = []
			})

			const goodsList = reactive(goodsListOrigin)

			// 组件挂载完成
			onMounted(() => {
				getCategory().then((res) => {
					categories.value = res.data.category.list || []

					// 初始化第一个菜单的数据
					if (categories.value && categories.value.length) {
						getCategoryContentData(categories.value[0])
					}

				})

			})
			const tabMenuItemClick = (menuData) => {
				if (menuData) {
					getCategoryContentData(menuData)
				}
			}
			const handleTabClick = (index) => {
				console.log(index)
				currentType.value = types[index]
			}
			const handleGoodItemClick = (id) => {
				console.log(id)
				uni.navigateTo({
					url: "/pages/detail/index?id=" + id,
					fail: (err) => {
						console.log(err)
					}
				})
			}
			const getCategoryContentData = (menuData = {}) => {

				let {
					maitKey,
					miniWallkey
				} = menuData
				getSubcategory(maitKey).then((res) => {
					subcategories.value = res.data.list || []
				})
				getCategoryDataAction("pop", miniWallkey)
				getCategoryDataAction("new", miniWallkey)
				getCategoryDataAction("sell", miniWallkey)

			}
			const getCategoryDataAction = (type, miniWallkey) => {
				getCategoryDetail(type, miniWallkey).then((res) => {
					goodsList[type] = res
				})
			}
			return {
				currentType,
				categories,
				subcategories,
				goodsList,

				tabMenuItemClick,
				handleTabClick,
				handleGoodItemClick
			}
		}
	}
</script>

<style lang="scss">
	// 小程序的page高度为100%, 需要相对定位。这里使用scrollview滚动
	page {
		// height: 100%;
		position: relative;
	}

	.category {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		// background-color: red;

		display: flex;
		flex-direction: row;
		overflow: hidden;

		.content-scroll {
			flex: 1;
			height: 100%;
			background-color: white;
			padding: 20rpx 16rpx 40rpx 16rpx;
			-webkit-overflow-scrolling: touch;

			.goods-list {
				@include normalFlex;
				flex-wrap: wrap;

				padding: 16rpx;

				.item {
					width: 48%;
				}
			}
		}
	}

	.hy-item {
		height: 300rpx;
		border-bottom: 2rpx solid red;
	}
</style>
