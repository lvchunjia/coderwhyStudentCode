"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "hy-button-setup",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  emits: ["onBtnClick"],
  setup(__props, { emit }) {
    function handleBtnClick() {
      emit("onBtnClick");
    }
    common_vendor.onBeforeMount(() => {
      console.log("hy-buton-setup onBeforeMount");
    });
    common_vendor.onMounted(() => {
      console.log("hy-buton-setup onMounted");
    });
    common_vendor.onLoad(() => {
      console.log("hy-buton-setup onLoad");
    });
    common_vendor.onShow(() => {
      console.log("hy-buton-setup onShow");
    });
    common_vendor.onReady(() => {
      console.log("hy-buton-setup onReady");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(__props.type),
        b: common_vendor.o(handleBtnClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/components/hy-button-setup/hy-button-setup.vue"]]);
wx.createComponent(Component);
