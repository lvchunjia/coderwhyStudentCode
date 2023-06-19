"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    listItems: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  setup() {
    const formatPrice = common_vendor.computed$1(() => {
      return (item) => {
        return item.decimal ? item.price.toFixed(item.decimal) : item.price;
      };
    });
    return {
      formatPrice
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.listItems, (item, index, i0) => {
      return {
        a: common_vendor.t($setup.formatPrice(item)),
        b: common_vendor.t(item.unit),
        c: common_vendor.t(item.name),
        d: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/profile/childCpns/grid-view.vue"]]);
wx.createComponent(Component);
