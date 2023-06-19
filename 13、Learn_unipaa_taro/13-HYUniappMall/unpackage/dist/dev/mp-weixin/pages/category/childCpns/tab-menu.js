"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    categories: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  emits: ["menuItemClick"],
  setup(props, { emit }) {
    const currentTitle = common_vendor.ref("\u6B63\u5728\u6D41\u884C");
    const menuItemClick = (item) => {
      currentTitle.value = item.title;
      emit("menuItemClick", item);
    };
    return {
      currentTitle,
      menuItemClick
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.categories, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.n($setup.currentTitle === item.title ? "active" : ""),
        c: common_vendor.o(($event) => $setup.menuItemClick(item)),
        d: item.maitKey
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/category/childCpns/tab-menu.vue"]]);
wx.createComponent(Component);
