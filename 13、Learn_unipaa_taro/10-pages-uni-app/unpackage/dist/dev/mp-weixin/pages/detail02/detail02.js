"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad(options) {
    console.log("\u63A5\u53D7url\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E:", options);
  },
  methods: {
    goBackHome() {
      common_vendor.index.navigateBack({
        delta: 1
      });
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.emit("acceptDataFormDetail02", {
        data: "\u5C06detail02\u9875\u9762\u7684\u6570\u636E\u4F20\u9012\u7ED9Home\u9875\u9762"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goBackHome && $options.goBackHome(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/detail02/detail02.vue"]]);
wx.createPage(MiniProgramPage);
