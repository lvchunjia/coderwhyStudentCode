"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    detailInfo: {
      type: Object
    }
  },
  setup() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: Object.keys($props.detailInfo).length !== 0
  }, Object.keys($props.detailInfo).length !== 0 ? common_vendor.e({
    b: common_vendor.t($props.detailInfo.desc),
    c: $props.detailInfo.detailImage
  }, $props.detailInfo.detailImage ? {
    d: common_vendor.t($props.detailInfo.detailImage[0].key)
  } : {}, {
    e: $props.detailInfo.detailImage
  }, $props.detailInfo.detailImage ? {
    f: common_vendor.f($props.detailInfo.detailImage[0].list, (item, index, i0) => {
      return {
        a: index,
        b: item
      };
    })
  } : {}) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-goods-info.vue"]]);
wx.createComponent(Component);
