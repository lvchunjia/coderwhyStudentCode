<template>
	<view class="tab-control">
		<template v-for="(item, index) in titles" :key="index">
			<view class="item" :class="currentIndex === index? 'active': ''" @click="tabControlClick(index)">
				<span class="title">{{item}}</span>
			</view>
		</template>
	</view>
</template>

<script>
	import { ref } from 'vue';
	
	export default {
		props: {
			titles: {
				type: Array,
				default: () => []
			}
		},
		emits: ["tabClick"],
		setup(props, { emit }) {
			const currentIndex = ref(0)
			
			// console.log(props)
			
			const tabControlClick = (index) => {
				currentIndex.value = index
				emit('tabClick', currentIndex.value)
			}
			
			return {
				currentIndex,
				tabControlClick
			}
		}
	}
</script>

<style lang="scss">
	// @import "@/uni.scss";
	
	.tab-control {
		margin-top: 20rpx;
		padding: 10rpx;
		background-color: #fff;
		@include normalFlex;
		
		.item {
			flex: 1;
			text-align: center;
			
			.title {
				display: inline-block;
				padding: 8px;
				border-bottom: 3px solid #fff;
			}
			
			&.active {
				color: #FF5777;
				.title {
					border-bottom-color: #FF5777;
				}
			}
		}
	}
</style>
