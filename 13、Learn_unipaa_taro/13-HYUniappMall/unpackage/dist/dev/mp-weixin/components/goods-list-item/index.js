"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    itemInfo: {
      type: Object,
      default: () => {
      }
    },
    abc: {
      type: String
    }
  },
  emits: ["itemClick"],
  setup(props, { emit }) {
    const itemClick = () => {
      emit("itemClick", props.itemInfo.iid);
    };
    return {
      itemClick
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.itemInfo.image || $props.itemInfo.img || $props.itemInfo.show.img,
    b: common_vendor.t($props.itemInfo.title),
    c: common_vendor.t($props.itemInfo.price),
    d: common_vendor.t($props.itemInfo.cfav),
    e: common_vendor.o((...args) => $setup.itemClick && $setup.itemClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/components/goods-list-item/index.vue"]]);
wx.createComponent(Component);
