"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
    console.log("home onLoad");
    common_vendor.index.$on("acceptDataFromDetail03", this.acceptDataFromDetail03);
  },
  onShow() {
    console.log("home onShow");
  },
  onReady() {
    console.log("home onReady");
  },
  onHide() {
    console.log("home onHide");
  },
  onUnload() {
    console.log("home onUnload");
    common_vendor.index.$off("acceptDataFromDetail03", this.acceptDataFromDetail03);
  },
  onPullDownRefresh() {
    console.log("home onPullDownRefresh");
  },
  onReachBottom() {
    console.log("home onReachBottom");
  },
  beforeCreate() {
  },
  created() {
  },
  methods: {
    acceptDataFromDetail03(value) {
      console.log("\u8FD9\u662F\u4ECEdetail03\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E:", value);
    },
    goToDetail01() {
      common_vendor.index.navigateTo({
        url: "/pages/detail01/detail01"
      });
    },
    goToDetail02() {
      common_vendor.index.redirectTo({
        url: "/pages/detail01/detail01"
      });
    },
    goToDetail03() {
      common_vendor.index.switchTab({
        url: "/pages/category/category"
      });
    },
    goToDetail04() {
      common_vendor.index.navigateTo({
        url: "/pages/detail01/detail01?name=liujun&id=200",
        success(res) {
          res.eventChannel.emit("acceptDataFormHomePage", {
            data: "\u6211\u662F\u4ECEHome Page \u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E"
          });
        }
      });
    },
    goToDetail05() {
      common_vendor.index.navigateTo({
        url: "/pages/detail02/detail02?name=liujun&id=400",
        events: {
          acceptDataFormDetail02(data) {
            console.log("home page \u62FF\u5230detail02\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E:", data);
          }
        }
      });
    },
    goToDetail06() {
      common_vendor.index.navigateTo({
        url: "/pages/detail03/detail03"
      });
    },
    goToDetail07() {
      common_vendor.index.navigateTo({
        url: "/pages/detail04/detail04"
      });
    },
    goToDetail08() {
      common_vendor.index.navigateTo({
        url: "/pages/detail05/detail05"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.goToDetail01()),
    b: common_vendor.o(($event) => $options.goToDetail02()),
    c: common_vendor.o(($event) => $options.goToDetail03()),
    d: common_vendor.o(($event) => $options.goToDetail04()),
    e: common_vendor.o(($event) => $options.goToDetail05()),
    f: common_vendor.o(($event) => $options.goToDetail06()),
    g: common_vendor.o(($event) => $options.goToDetail07()),
    h: common_vendor.o(($event) => $options.goToDetail08())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
