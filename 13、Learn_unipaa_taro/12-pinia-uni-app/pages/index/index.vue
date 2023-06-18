<template>
	<view class="content">
		<navigator url="/pages/detail/detail" open-type="navigate">
			<button type="default">GoToDetail</button>
		</navigator>
		<button type="default" @click="addNumber">addNumber</button>
		<button type="default" @click="subNumber">subNumber</button>
		<view class="">{{count}}</view>
	</view>
</template>

<script setup>
	import { storeToRefs } from 'pinia'
	import { useCounterStore } from '@/store/counter.js'
	const counterStore = useCounterStore()
	
	const { count } = storeToRefs(counterStore)
	function addNumber() {
		// 触发一个action -> increment
		counterStore.increment()
	}
	
	function subNumber() {
		// 触发一个action -> decrement
		counterStore.decrement()
	}
</script>

<style>
	
</style>
