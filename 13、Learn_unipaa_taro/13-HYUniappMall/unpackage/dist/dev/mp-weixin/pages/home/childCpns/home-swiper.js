"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.banners, (item, index, i0) => {
      return {
        a: item.image,
        b: item.acm
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/home/childCpns/home-swiper.vue"]]);
wx.createComponent(Component);
