"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    titleInfos: {
      type: Array,
      default: function() {
        return [
          {
            id: 0,
            title: "\u5546\u54C1"
          },
          {
            id: 1,
            title: "\u53C2\u6570"
          },
          {
            id: 2,
            title: "\u8BC4\u8BBA"
          },
          {
            id: 3,
            title: "\u63A8\u8350"
          }
        ];
      }
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ["itemClick"],
  setup(props, { emit }) {
    const currentIndex = common_vendor.ref(props.defaultIndex);
    const itemClick = (item) => {
      currentIndex.value = item.id;
      emit("itemClick", item);
    };
    return {
      currentIndex,
      itemClick
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.titleInfos, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.n($setup.currentIndex === item.id ? "active" : ""),
        c: common_vendor.o(($event) => $setup.itemClick(item)),
        d: item.id
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-nav-bar.vue"]]);
wx.createComponent(Component);
