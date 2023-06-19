<template>
	<view class="cart">
		
		<scroll-view class="cart-scroll" scroll-y="true">
			<template v-for="item in cartList" :key="item.iid" >
				<cart-list-item :item-info="item" @checkedChange="handleCheckedChange"></cart-list-item>
			</template>
		</scroll-view>
		<!-- 44px -->
		<bottom-bar @checkedAllChange="handlecCheckedAllChange"></bottom-bar>
	</view>
</template>

<script>
	import { computed } from 'vue'
	import store from '@/store/index.js';//需要引入store
		
	import CartListItem from './childCpns/cart-list-item.vue'
	import BottomBar from './childCpns/bottom-bar.vue'
	export default {
		props:{
			
		},
		components: {
			CartListItem,
			BottomBar
		},
		setup() {
			const cartList = computed(()=>{
				return store.getters.cartList || []
			})
			
			const handleCheckedChange = (itemInfo)=>{
				
			}		
			const handlecCheckedAllChange = (checked)=>{
				console.log('checked=>', checked)
			}
			
			return {
				cartList,
				handleCheckedChange,
				handlecCheckedAllChange
			}
		}
	}
</script>

<style lang="scss">
	page, .cart{
		height: 100%;
	}
	.cart{
	// background-color: red;
	}
	.cart-scroll{
		height: calc(100% - 88rpx);
	}
</style>
