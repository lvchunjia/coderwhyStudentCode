"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    paramInfo: {
      type: Object
    }
  },
  setup(props) {
    const getTableData = common_vendor.computed$1(() => {
      return props.paramInfo.sizes[0] || [];
    });
    return {
      getTableData
    };
  }
};
if (!Array) {
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_td2 + _easycom_uni_tr2 + _easycom_uni_table2)();
}
const _easycom_uni_td = () => "../../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_tr = () => "../../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_table = () => "../../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_td + _easycom_uni_tr + _easycom_uni_table)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: Object.keys($props.paramInfo).length !== 0
  }, Object.keys($props.paramInfo).length !== 0 ? {
    b: common_vendor.f($setup.getTableData, (table, index, i0) => {
      return {
        a: common_vendor.t(table[0]),
        b: "e5f9ee72-2-" + i0 + "," + ("e5f9ee72-1-" + i0),
        c: common_vendor.t(table[1]),
        d: "e5f9ee72-3-" + i0 + "," + ("e5f9ee72-1-" + i0),
        e: common_vendor.t(table[2]),
        f: "e5f9ee72-4-" + i0 + "," + ("e5f9ee72-1-" + i0),
        g: common_vendor.t(table[3]),
        h: "e5f9ee72-5-" + i0 + "," + ("e5f9ee72-1-" + i0),
        i: "e5f9ee72-1-" + i0 + ",e5f9ee72-0",
        j: index
      };
    }),
    c: common_vendor.p({
      emptyText: "\u6682\u65E0\u66F4\u591A\u6570\u636E"
    })
  } : {}, {
    d: Object.keys($props.paramInfo).length !== 0
  }, Object.keys($props.paramInfo).length !== 0 ? {
    e: common_vendor.f($props.paramInfo.infos, (info, index, i0) => {
      return {
        a: common_vendor.t(info.key),
        b: "e5f9ee72-8-" + i0 + "," + ("e5f9ee72-7-" + i0),
        c: common_vendor.t(info.value),
        d: "e5f9ee72-9-" + i0 + "," + ("e5f9ee72-7-" + i0),
        e: "e5f9ee72-7-" + i0 + ",e5f9ee72-6",
        f: index
      };
    }),
    f: common_vendor.p({
      width: 76
    }),
    g: common_vendor.p({
      emptyText: "\u6682\u65E0\u66F4\u591A\u6570\u636E"
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-param-info.vue"]]);
wx.createComponent(Component);
