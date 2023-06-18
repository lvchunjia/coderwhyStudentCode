"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad(options) {
    console.log("\u63A5\u53D7\u5230url\u7684\u53C2\u6570:", options);
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("acceptDataFormHomePage", (data) => {
      console.log("\u63A5\u53D7\u5230eventChannel\u7684\u53C2\u6570", data);
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/detail01/detail01.vue"]]);
wx.createPage(MiniProgramPage);
