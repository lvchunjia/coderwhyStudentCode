"use strict";
const cart = {
  state: {
    cartList: []
  },
  getters: {
    cartList(state) {
      return state.cartList;
    },
    cartCount(state, getters) {
      return getters.cartList.length;
    }
  },
  mutations: {
    addCart(state, info) {
      const oldInfo = state.cartList.find((item) => item.iid === info.iid);
      if (oldInfo) {
        oldInfo.count += 1;
      } else {
        info.count = 1;
        info.checked = true;
        state.cartList.push(info);
      }
    },
    toggleChecked(state, info) {
      const currentInfo = state.cartList.find((item) => item.iid === info.iid);
      if (currentInfo) {
        currentInfo.checked = !currentInfo.checked;
      }
    },
    checkedAll(state) {
      let isSelectAll = state.cartList.find((item) => !item.checked);
      state.cartList.forEach((item) => {
        item.checked = isSelectAll ? true : false;
      });
    }
  },
  actions: {
    addCartAction(context, info) {
      context.commit("addCart", info);
    }
  }
};
exports.cart = cart;
