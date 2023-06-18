"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "detail01",
  props: {
    name: String,
    id: String
  },
  setup(__props) {
    const props = __props;
    const $instance = common_vendor.ref(common_vendor.getCurrentInstance().proxy);
    console.log("\u5728props\u4E2D\u63A5\u53D7home\u4F20\u9012\u8FC7\u6765url\u7684\u6570\u636E:", props.name, props.id);
    common_vendor.onLoad((options) => {
      console.log("\u63A5\u53D7\u5230home\u4F20\u9012\u8FC7\u6765url\u7684\u6570\u636E:", options);
      const eventChannel = $instance.value.getOpenerEventChannel();
      eventChannel.on("acceptDataFormHomePage", (value) => {
        console.log("\u63A5\u6536\u5230home\u9875\u9762eventchannel\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E:", value);
      });
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/pages/detail01/detail01.vue"]]);
wx.createPage(MiniProgramPage);
