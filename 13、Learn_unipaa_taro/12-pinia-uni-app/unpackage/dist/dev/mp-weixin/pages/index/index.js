"use strict";
const common_vendor = require("../../common/vendor.js");
const store_counter = require("../../store/counter.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const counterStore = store_counter.useCounterStore();
    const { count } = common_vendor.storeToRefs(counterStore);
    function addNumber() {
      counterStore.increment();
    }
    function subNumber() {
      counterStore.decrement();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(addNumber),
        b: common_vendor.o(subNumber),
        c: common_vendor.t(common_vendor.unref(count))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/12-pinia-uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
