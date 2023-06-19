<template>
	<view class="bottom-bar">
		<label class="select-all" >
			<radio :checked="checked" color="#ff8198" @click="onChange"/>
			<text class="label-name">全选</text>
		</label>
		<text class="total-price">合计: ¥{{totalPrice}}</text>
		<text class="buy-product">去计算({{cartCount}})</text>
		<!-- <text class="buy-product">去计算({{$store.getters.cartCount}})</text> -->
	</view>
</template>

<script>
	import { ref, computed, toRaw } from 'vue'
	import store from '@/store/index.js';//需要引入store
		
	export default {
		emits: ['checkedAllChange'],
		setup(props, { emit }) {
			const checked = ref(false)
			const totalPrice = computed(()=>{
				// console.log('store.getters.cartList', store.getters.cartList)
				// 1.判断是否有未选中的按钮
				let isSelectAll = store.getters.cartList.find(item => !item.checked);
				checked.value = isSelectAll ? false : true
				return store.getters.cartList.filter(item => {
				          return item.checked
				        }).reduce((preValue, item) => {
				          return preValue + item.count * item.newPrice
				        }, 0).toFixed(2)
			})
			const cartCount = computed(()=>{
				let counter = store.getters.cartCount || 0
				if(counter > 0){
					checked.value = true
				} else {
					checked.value = false
				}
				// uni.setNavigationBarTitle({
				// 	title: `HY购物车`
				// });
				return counter
			})
			
			const onChange = ()=>{
				checked.value = !checked.value 
				
				// 1.判断是否有未选中的按钮
			    // let isSelectAll = store.getters.cartList.find(item => !item.checked);
				
				// console.log('=>isSelectAll', isSelectAll)
			    // 2.有未选中的内容, 则全部选中
			    // if (isSelectAll) {
			    //  store.commit('checkedAll', true)
			    // } else {
			    //   store.commit('checkedAll', false)
			    // }		
				store.commit('checkedAll')
				emit('checkedAllChange', checked.value )
			}
			return {
				totalPrice,
				cartCount,
				checked,
				
				onChange
			}
		}
	}
</script>

<style lang="scss">

	.bottom-bar{
	    position: fixed;
	    left: 0;
		right:0;
		
		width: 100%;
		height: 88rpx;
		background-color: #eee;
		
	    box-shadow: 0 -4rpx 6rpx rgba(0, 0, 0, .2);
	    font-size: 28rpx;
	    color: #888;
	    line-height: 88rpx;
	    padding-left: 70rpx;
	    box-sizing: border-box;
	}
	/*  #ifndef  H5  */
	.bottom-bar{
		bottom: 0rpx;
	}
	/*  #endif  */
	
	/*  #ifdef  H5 */
	.bottom-bar{
		bottom: 94rpx;
	}
	/*  #endif  */
	
	
	.select-all {
	    position: absolute;
	    line-height: 0;
	    left: 24rpx;
	    top: 26rpx;
		transform: scale(.8);

	}

	.label-name{
		margin-left: 10rpx;
		font-size: 32rpx;
	}
	  
	.total-price {
	    margin-left: 100rpx;
	    font-size: 32rpx;
	    color: #666;
	}
	  
	.buy-product {
	    background-color: orangered;
	    color: #fff;
	    width: 200rpx;
	    height: 88rpx;
	    text-align: center;
	    line-height: 88rpx;
	    float: right;
	}
	  
</style>
