<template>
	<view>
		<button type="default" @click="addNumber">addNumber</button>
		<view class="">{{count}}</view>
	</view>
</template>

<script setup>
	import { storeToRefs } from 'pinia'
	import { useCounterStore } from '@/store/counter.js'
	const counterStore = useCounterStore()
	const { count } = storeToRefs(counterStore)
	
	function addNumber() {
		counterStore.increment()
	}
</script>

<style lang="scss">

</style>
