<template>
	<view class="detail-param-info">
		<!-- 第一个表格 -->
		<uni-table  emptyText="暂无更多数据" v-if="Object.keys(paramInfo).length !== 0">
			<!-- 表格数据行 -->
			<template v-for="(table, index) in getTableData" :key="index">
				<uni-tr>
					<uni-td>{{table[0]}}</uni-td>
					<uni-td>{{table[1]}}</uni-td>
					<uni-td>{{table[2]}}</uni-td>
					<uni-td>{{table[3]}}</uni-td>
				</uni-tr>
			</template>
		</uni-table>
		
		<!-- 第二个表格 -->
		<uni-table  emptyText="暂无更多数据" v-if="Object.keys(paramInfo).length !== 0">
			<!-- 表格数据行 -->
			<template v-for="(info, index) in paramInfo.infos" :key="index">
				<uni-tr>
					<uni-td class="col-key" :width="76" >{{info.key}}</uni-td>
					<uni-td class="col-value" ><text :style="{color: '#eb4868' }">{{info.value}}</text></uni-td>
				</uni-tr>
			</template>
		</uni-table>
	</view>
</template>

<script>
	import { toRaw , computed } from 'vue'
	export default {
		props:{
			paramInfo: {
				type: Object
			}
		},
		setup(props){ 
			
			
			const getTableData = computed(()=>{
				// let sizes = props.paramInfo.sizes[0] || []
				return props.paramInfo.sizes[0] || []
			})
			return {
				getTableData
			}
		}
	}
</script>

<style lang="scss">
	.detail-param-info{
		background-color: white;
		padding: 40rpx 30rpx;
		margin-bottom: 10rpx;
		.col-key {
			display: inline-block;
			width: 180rpx !important;
		}
		.col-value{
			
		}
	}
</style>
