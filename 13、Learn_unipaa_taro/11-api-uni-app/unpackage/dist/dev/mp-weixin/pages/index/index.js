"use strict";
const common_vendor = require("../../common/vendor.js");
const service_home = require("../../service/home.js");
require("../../service/index.js");
let _this1 = null;
let _this2 = null;
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
    console.log(this);
    _this1 = this;
  },
  created() {
    console.log(this);
    _this2 = this;
  },
  onReady() {
    console.log(_this1 === _this2);
  },
  methods: {
    fetchData() {
      service_home.getHomeMutidata().then((res) => {
        console.log("res=>", res);
      });
    },
    setStorage() {
      common_vendor.index.setStorage({
        key: "userinfo",
        data: {
          name: "liujun",
          id: "100100",
          token: "asdfxdfgjksiada"
        }
      });
      common_vendor.index.setStorageSync("token", "bssdsfsdfccvd");
    },
    getStorage() {
      common_vendor.index.getStorage({
        key: "userinfo",
        success(res) {
          console.log(res.data);
        }
      });
      const token = common_vendor.index.getStorageSync("token");
      console.log(token);
    },
    onBtnClick() {
      console.log("hy-btn click");
    },
    onBtnSetupClick() {
      console.log("hy-btn-setup click");
    }
  }
};
if (!Array) {
  const _easycom_hy_button2 = common_vendor.resolveComponent("hy-button");
  const _easycom_hy_button_setup2 = common_vendor.resolveComponent("hy-button-setup");
  (_easycom_hy_button2 + _easycom_hy_button_setup2)();
}
const _easycom_hy_button = () => "../../components/hy-button/hy-button.js";
const _easycom_hy_button_setup = () => "../../components/hy-button-setup/hy-button-setup.js";
if (!Math) {
  (_easycom_hy_button + _easycom_hy_button_setup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.fetchData()),
    b: common_vendor.o((...args) => $options.setStorage && $options.setStorage(...args)),
    c: common_vendor.o((...args) => $options.getStorage && $options.getStorage(...args)),
    d: common_vendor.o($options.onBtnClick),
    e: common_vendor.p({
      type: "primary"
    }),
    f: common_vendor.o($options.onBtnSetupClick),
    g: common_vendor.p({
      type: "info"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
