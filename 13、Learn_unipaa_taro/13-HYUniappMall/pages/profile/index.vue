<template>
	<user-info>
		<template #default>
			登录/注册
		</template>
	</user-info>
	<grid-view :listItems="gridItemDatas"></grid-view>
	<view class="item-bg">
		<list-view class="list-item" :listItems="orderList"></list-view>
		<list-view class="list-item" :listItems="serviceList"></list-view>
	</view>
</template>

<script>
	import { ref, reactive, onMounted } from 'vue'
	
	
	import UserInfo from './childCpns/user-info.vue'
	import GridView from './childCpns/grid-view.vue'
	import ListView from './childCpns/list-view.vue'
	
	// 图片最好存在网络上，不要存在本地。
	import messagePNG from '@/static/images/profile/message.png'
	import appPNG from '@/static/images/profile/app.png'
	import vipPNG from '@/static/images/profile/vip.png'
	import cartPNG from '@/static/images/profile/cart.png'
	import pointerPNG from '@/static/images/profile/pointer.png'
	
	export default{
		components:{
			UserInfo,
			GridView,
			ListView
		},

		setup(){
			const gridItemDatas = ref([
				{
				  price: 0,
				  decimal: 2, // 保留2位小数点
				  unit: '元',
				  name: '我的余额'
				},
				{
				  price: 0,
				  unit: '个',
				  name: '我的优惠'
				},
				{
				  price: 0,
				  unit: '分',
				  name: '我的积分'
				}
			])
			
			
			const orderList = [
			    {icon: messagePNG, iconColor: '#ff8198', info: '我的消息'},
			    {icon: appPNG, iconColor: '#fc7b53', info: '积分商城'},
			    {icon: vipPNG, iconColor: '#ffc636', info: '会员卡'},
			]
			const serviceList = [
			    {icon: cartPNG, iconColor: '#ff8198', info: '我的购物车'},
			    {icon: pointerPNG, iconColor: '#ff8198', info: '下载购物APP'},
			]
			
			return{
				gridItemDatas,
				orderList,
				serviceList
			}
		}
	}
</script>

<style lang="scss">
	.item-bg{
		background-color: $gBgColor;
		border-top: 1px solid $gBgColor;
	}
	.list-item{
		margin-top: 24rpx;
	}
</style>
