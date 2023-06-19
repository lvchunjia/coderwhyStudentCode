"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    good: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  setup(props) {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.good.title),
    b: common_vendor.t($props.good.newPrice),
    c: common_vendor.t($props.good.oldPrice),
    d: common_vendor.t($props.good.discount),
    e: $props.good.columns
  }, $props.good.columns ? {
    f: common_vendor.t($props.good.columns[0]),
    g: common_vendor.t($props.good.columns[1]),
    h: common_vendor.t($props.good.services[$props.good.services.length - 1].name)
  } : {}, {
    i: $props.good.services
  }, $props.good.services ? {
    j: common_vendor.f(4, (index, k0, i0) => {
      return {
        a: $props.good.services[index - 1].icon,
        b: common_vendor.t($props.good.services[index - 1].name),
        c: index
      };
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-base-info.vue"]]);
wx.createComponent(Component);
