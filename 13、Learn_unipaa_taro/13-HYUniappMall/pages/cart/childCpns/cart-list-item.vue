<template>
	<view class="cart-list-item">
		 <view class="item-selector">
		    <label class="select-all" >
		    	<radio  :checked="itemInfo.checked" color="#ff8198" @click="onChange(itemInfo)"/>
		    	<text class="label-name">全选</text>
		    </label>
		 </view>
		 <view class="item-img">
		   <image class="c-img" :src="itemInfo.imgURL" :lazy-load="true"></image>
		 </view>
		 <view class="item-info">
		   <view class="item-title">{{itemInfo.title}}</view>
		   <view class="item-desc">商品描述: {{itemInfo.desc}}</view>
		   <view class="info-bottom">
		     <view class="item-price left">¥{{itemInfo.newPrice}}</view>
		     <view class="item-count right">x{{itemInfo.count}}</view>
		   </view>
		 </view>
	</view>
</template>

<script>
	import store from '@/store/index.js';//需要引入store
	export default {
		props: {
			itemInfo: {
				type: Object,
				default: function() {
					return {}
				}
			}
		},
		emit: ['checkedChange'],
		setup(props, { emit }) {
			const onChange = (itemInfo)=>{
				// console.log('itemInfo=>', itemInfo)
				// itemInfo.checked = !itemInfo.checked  // 这暂时直接修改props的属性是不推荐的。可以改成修改在父组件中修改
				// 直接修改vuex 
				store.commit('toggleChecked', itemInfo)
				emit('checkedChange', itemInfo)
			}
			return {
				onChange
			}
		}
	}
</script>

<style lang="scss">
	.cart-list-item{
	    width: 100%;
	    display: flex;
	    font-size: 0;
	    padding: 10rpx;
	    border-bottom: 1px solid #ccc;
	}
	
	.item-selector {
		width: 14%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.item-title, .item-desc {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.item-img {
		padding: 10rpx;
		/*border: 1px solid #ccc;*/
	}
	
	.item-img .c-img {
		width: 160rpx;
		height: 200rpx;
		display: block;
		border-radius: 10rpx;
	}
	
	.item-info {
		font-size: 34rpx;
		color: #333;
		padding: 10rpx 20rpx;
		position: relative;
		overflow: hidden;
	}
	
	.item-info .item-desc {
		font-size: 28rpx;
		color: #666;
		margin-top: 30rpx;
	}
	
	.info-bottom {
		margin-top: 20rpx;
		position: absolute;
		bottom: 20rpx;
		left: 20rpx;
		right: 20rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.info-bottom .item-price {
		color: orangered;
	}
	.info-bottom .item-count{
		padding-right: 40rpx;
	}
</style>
