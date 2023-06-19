// 页面路径：store/index.js (Vue3 导入的语法，Vue2不是这样导入的哈)
import { createStore } from 'vuex'
import cart from './modules/cart.js'
const store = createStore({
	// state.version
	state:{//存放状态
		// count: 0,
		version:"1.0.0",
		projectName: 'HYUniappMall'
	},
	// mutations:{
	// 	add(state) {
	// 		// 变更状态
	// 		state.count += 2
	// 	}
	// },
	// actions:{
	// 	addCountAction (context) {
	// 	    context.commit('add')
	// 	}
	// },
	modules: {
		cart
	}
})

export default store