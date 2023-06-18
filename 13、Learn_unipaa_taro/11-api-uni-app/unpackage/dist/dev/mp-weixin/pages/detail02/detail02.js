"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "detail02",
  setup(__props) {
    const $instance = common_vendor.ref(common_vendor.getCurrentInstance().proxy);
    function goBack() {
      common_vendor.index.navigateBack({
        delta: 1
      });
      const eventChannel = $instance.value.getOpenerEventChannel();
      eventChannel.emit("acceptDataFormDetail02", {
        data: "\u8FD9\u91CC\u662Fdetail02\u4F20\u9012\u7ED9Home\u9875\u9762\u7684\u6570\u636E"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/pages/detail02/detail02.vue"]]);
wx.createPage(MiniProgramPage);
