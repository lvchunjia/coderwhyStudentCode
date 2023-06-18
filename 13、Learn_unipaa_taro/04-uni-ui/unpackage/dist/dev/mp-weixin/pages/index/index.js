"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      options: [{
        icon: "headphones",
        text: "\u5BA2\u670D"
      }, {
        icon: "shop",
        text: "\u5E97\u94FA",
        info: 2
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 20
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    onClick(e) {
      console.log(e);
      common_vendor.index.showToast({
        title: e.content.text
      });
    },
    buttonClick(e) {
      common_vendor.index.showToast({
        title: e.content.text
      });
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_badge2 + _easycom_uni_countdown2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_badge = () => "../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
const _easycom_uni_countdown = () => "../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_badge + _easycom_uni_countdown + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "100",
      type: "primary"
    }),
    b: common_vendor.p({
      text: "90",
      type: "success"
    }),
    c: common_vendor.p({
      text: "90",
      type: "info",
      absolute: "rightTop"
    }),
    d: common_vendor.p({
      color: "white",
      ["background-color"]: "#cdcdcd",
      day: 0,
      showDay: false,
      hour: 6,
      minute: 12,
      second: 20
    }),
    e: common_vendor.o($options.onClick),
    f: common_vendor.o($options.buttonClick),
    g: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/04-uni-ui/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
