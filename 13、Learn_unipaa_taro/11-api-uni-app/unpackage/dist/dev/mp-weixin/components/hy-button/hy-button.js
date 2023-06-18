"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "hy-button",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  emits: ["onBtnClick"],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  beforeCreate() {
    console.log("hy-btn beforeCreate");
  },
  created() {
    console.log("hy-btn created");
    console.log(this);
  },
  mounted() {
    console.log("hy-btn mounted");
  },
  onLoad() {
    console.log("hy-btn onLoad");
  },
  onShow() {
    console.log("hy-btn onShow");
  },
  methods: {
    handleBtnClick() {
      this.$emit("onBtnClick");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.type),
    b: common_vendor.o((...args) => $options.handleBtnClick && $options.handleBtnClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/components/hy-button/hy-button.vue"]]);
wx.createComponent(Component);
