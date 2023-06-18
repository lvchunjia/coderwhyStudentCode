"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "home",
  setup(__props) {
    common_vendor.onLoad(() => {
      common_vendor.index.$on("acceptDataFormDetail03", acceptDataFormDetail03);
    });
    common_vendor.onUnload(() => {
      common_vendor.index.$off("acceptDataFormDetail03", acceptDataFormDetail03);
    });
    function acceptDataFormDetail03(value) {
      console.log("\u63A5\u6536\u5230detail03\u4F20\u9012\u7ED9home\u9875\u9762\u7684\u6570\u636E:", value);
    }
    function goToDetail01() {
      console.log("goToDetail01");
      common_vendor.index.navigateTo({
        url: "/pages/detail01/detail01?name=liujun&id=100",
        success(res) {
          res.eventChannel.emit("acceptDataFormHomePage", {
            data: "\u6211\u662Fhome\u9875\u9762\u4F20\u9012\u7ED9detail01\u7684\u6570\u636E"
          });
        }
      });
    }
    function goToDetail02() {
      common_vendor.index.navigateTo({
        url: "/pages/detail02/detail02?name=liujun&id=200",
        events: {
          acceptDataFormDetail02(value) {
            console.log("\u63A5\u6536\u5230detail02\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E", value);
          }
        }
      });
    }
    function goToDetail03() {
      common_vendor.index.navigateTo({
        url: "/pages/detail03/detail03?name=liujun&id=300"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goToDetail01),
        b: common_vendor.o(goToDetail02),
        c: common_vendor.o(goToDetail03)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
