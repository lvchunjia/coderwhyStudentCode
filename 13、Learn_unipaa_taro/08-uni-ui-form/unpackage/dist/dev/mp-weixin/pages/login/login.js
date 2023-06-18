"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        username: null,
        password: null
      },
      rules: {
        username: {
          rules: [
            {
              required: true,
              errorMessage: "\u8BF7\u8F93\u5165\u8D26\u53F7"
            }
          ]
        },
        password: {
          rules: [
            {
              required: true,
              errorMessage: "\u8BF7\u8F93\u5165\u5BC6\u7801"
            },
            {
              minLength: 6,
              maxLength: 8,
              errorMessage: "\u8BF7\u8F93\u51656-8\u4F4D\u7684\u5BC6\u7801"
            }
          ]
        }
      }
    };
  },
  methods: {
    submit() {
      console.log("submit");
      this.$refs.form.validate().then((value) => {
        console.log(value);
      }).catch((err) => {
        console.error(err);
      });
    },
    reset() {
      console.log("reset");
      this.$refs.form.clearValidate();
      Object.keys(this.formData).forEach((key) => {
        this.formData[key] = null;
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.username = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7",
      modelValue: $data.formData.username
    }),
    c: common_vendor.p({
      label: "\u8D26\u53F7",
      name: "username",
      required: true
    }),
    d: common_vendor.o(($event) => $data.formData.password = $event),
    e: common_vendor.p({
      type: "password",
      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
      modelValue: $data.formData.password
    }),
    f: common_vendor.p({
      label: "\u5BC6\u7801",
      name: "password",
      required: true
    }),
    g: common_vendor.sr("form", "9ca359a2-0"),
    h: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules
    }),
    i: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    j: common_vendor.o((...args) => $options.reset && $options.reset(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/08-uni-ui-form/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
