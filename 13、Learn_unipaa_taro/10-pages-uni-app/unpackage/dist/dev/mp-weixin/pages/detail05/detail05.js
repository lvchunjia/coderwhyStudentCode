"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "detail05",
  setup(__props) {
    common_vendor.onLoad(() => {
      console.log("detail05 onLoad");
    });
    common_vendor.onShow(() => {
      console.log("detail05 onShow");
    });
    common_vendor.onReady(() => {
      console.log("detail05 onReady");
    });
    common_vendor.onHide(() => {
      console.log("detail05 onHide");
    });
    common_vendor.onUnload(() => {
      console.log("detail05 onUnload");
    });
    common_vendor.onPullDownRefresh(() => {
      console.log("detail05 onPullDownRefresh");
      setTimeout(() => {
        common_vendor.index.stopPullDownRefresh();
      }, 1e3);
    });
    common_vendor.onReachBottom(() => {
      console.log("detail05 onReachBottom");
    });
    common_vendor.onBeforeMount(() => {
      console.log("detail05 onBeforeMount");
    });
    common_vendor.onMounted(() => {
      console.log("detail05 onMounted");
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/detail05/detail05.vue"]]);
wx.createPage(MiniProgramPage);
