"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      msg: "\u6211\u662Fdata\u5B9A\u4E49\u7684\u6570\u636E"
    };
  },
  onLoad(options) {
    console.log("detail04 onLoad");
  },
  onShow() {
    console.log("detail04 onShow");
    console.log(this);
  },
  onReady() {
    console.log("detail04 onReady");
  },
  onHide() {
    console.log("detail04 onHide");
  },
  onUnload() {
    console.log("detail04 onUnload");
  },
  onPullDownRefresh() {
    console.log("detail04 onPullDownRefresh");
    setTimeout(() => {
      common_vendor.index.stopPullDownRefresh();
    }, 1e3);
  },
  onReachBottom() {
    console.log("detail04 onReachBottom");
  },
  beforeCreate() {
    console.log("detail04 beforeCreate");
  },
  created() {
    console.log("detail04 created");
  },
  beforeMount() {
    console.log("detail04 beforeMount");
  },
  mounted() {
    console.log("detail04 mounted");
  },
  beforeDestroy() {
    console.log("detail04 beforeDestroy");
  },
  destroyed() {
    console.log("detail04 destroyed");
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/detail04/detail04.vue"]]);
wx.createPage(MiniProgramPage);
