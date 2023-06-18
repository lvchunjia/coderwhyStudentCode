import { defineStore } from 'pinia'


// name : counter, 是store的名称，需要保证唯一性，或者是唯一的id
export const useCounterStore = defineStore('counter', {
	state: () => {
		return {
			count: 800
		}
	},
	actions: {
		// 同步的action
		increment() {
			this.count++; 
		},
		decrement() {
			this.count--
		},
		
		// 异步的action
		// async getHomeData() {
		// 	const res = await getHomeData()
		// }
	}
})