"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_index = require("../../../store/index.js");
require("../../../store/modules/cart.js");
const _sfc_main = {
  emits: ["checkedAllChange"],
  setup(props, { emit }) {
    const checked = common_vendor.ref(false);
    const totalPrice = common_vendor.computed$1(() => {
      let isSelectAll = store_index.store.getters.cartList.find((item) => !item.checked);
      checked.value = isSelectAll ? false : true;
      return store_index.store.getters.cartList.filter((item) => {
        return item.checked;
      }).reduce((preValue, item) => {
        return preValue + item.count * item.newPrice;
      }, 0).toFixed(2);
    });
    const cartCount = common_vendor.computed$1(() => {
      let counter = store_index.store.getters.cartCount || 0;
      if (counter > 0) {
        checked.value = true;
      } else {
        checked.value = false;
      }
      return counter;
    });
    const onChange = () => {
      checked.value = !checked.value;
      store_index.store.commit("checkedAll");
      emit("checkedAllChange", checked.value);
    };
    return {
      totalPrice,
      cartCount,
      checked,
      onChange
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $setup.checked,
    b: common_vendor.o((...args) => $setup.onChange && $setup.onChange(...args)),
    c: common_vendor.t($setup.totalPrice),
    d: common_vendor.t($setup.cartCount)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/cart/childCpns/bottom-bar.vue"]]);
wx.createComponent(Component);
