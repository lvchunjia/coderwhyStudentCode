"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {},
  emits: ["addToCart"],
  setup(props, { emit }) {
    const addToCart = () => {
      emit("addToCart");
    };
    return {
      addToCart
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.addToCart && $setup.addToCart(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-bottom-bar.vue"]]);
wx.createComponent(Component);
