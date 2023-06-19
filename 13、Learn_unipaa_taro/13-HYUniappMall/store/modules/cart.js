// 子模块cart路径：store/modules/cart.js 
export default {
	// state.cart.text
	state: {
		// text:"我是cart模块下state.text的值",
		cartList: [] // 购物车的数据
	},
	
	getters: {
		// store.getters.cartList
		cartList(state) {
		  return state.cartList
		},
		cartCount(state, getters) {
		  return getters.cartList.length
		}
	},
	
	mutations: {
		// store.commit('addCart', info)
		addCart(state, info) {
		    // console.log(info);
		    // 1.查看是否添加过
		    const oldInfo = state.cartList.find(item => item.iid === info.iid)
		
		    // 2.+1或者新添加
		    if (oldInfo) {
		      oldInfo.count += 1
		    } else {
		      info.count = 1
		      info.checked = true
		      state.cartList.push(info)
		    }
		},
		toggleChecked(state, info) {
			const currentInfo = state.cartList.find(item => item.iid === info.iid)
			if(currentInfo){
				currentInfo.checked = !currentInfo.checked
			}
		},
		checkedAll(state) {
			// 1.判断是否有未选中的按钮
			let isSelectAll = state.cartList.find(item => !item.checked);
			state.cartList.forEach((item)=>{
				item.checked = isSelectAll ? true : false
			})
		}
	},
	actions: {
		// store.dispatch('addCountAction', info)
		addCartAction (context, info) { // 添加购物车 
			// console.log('addCartAction=>', info);
			context.commit('addCart', info)
		}
	}
}