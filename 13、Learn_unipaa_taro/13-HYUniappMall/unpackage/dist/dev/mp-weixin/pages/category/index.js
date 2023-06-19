"use strict";
const common_vendor = require("../../common/vendor.js");
const service_category = require("../../service/category.js");
require("../../service/index.js");
const TabMenu = () => "./childCpns/tab-menu.js";
const TabContentCategory = () => "./childCpns/tab-content-category.js";
const TabControl = () => "../../components/tab-control/index.js";
const GoodsListItem = () => "../../components/goods-list-item/index.js";
const _sfc_main = {
  components: {
    TabMenu,
    TabContentCategory,
    TabControl,
    GoodsListItem
  },
  setup() {
    const categories = common_vendor.ref([]);
    const subcategories = common_vendor.ref([]);
    common_vendor.ref([]);
    common_vendor.ref([]);
    common_vendor.ref([]);
    const currentType = common_vendor.ref("pop");
    const types = ["pop", "new", "sell"];
    const goodsListOrigin = {};
    types.forEach((type) => {
      goodsListOrigin[type] = [];
    });
    const goodsList = common_vendor.reactive(goodsListOrigin);
    common_vendor.onMounted(() => {
      service_category.getCategory().then((res) => {
        categories.value = res.data.category.list || [];
        if (categories.value && categories.value.length) {
          getCategoryContentData(categories.value[0]);
        }
      });
    });
    const tabMenuItemClick = (menuData) => {
      if (menuData) {
        getCategoryContentData(menuData);
      }
    };
    const handleTabClick = (index) => {
      console.log(index);
      currentType.value = types[index];
    };
    const handleGoodItemClick = (id) => {
      console.log(id);
      common_vendor.index.navigateTo({
        url: "/pages/detail/index?id=" + id,
        fail: (err) => {
          console.log(err);
        }
      });
    };
    const getCategoryContentData = (menuData = {}) => {
      let {
        maitKey,
        miniWallkey
      } = menuData;
      service_category.getSubcategory(maitKey).then((res) => {
        subcategories.value = res.data.list || [];
      });
      getCategoryDataAction("pop", miniWallkey);
      getCategoryDataAction("new", miniWallkey);
      getCategoryDataAction("sell", miniWallkey);
    };
    const getCategoryDataAction = (type, miniWallkey) => {
      service_category.getCategoryDetail(type, miniWallkey).then((res) => {
        goodsList[type] = res;
      });
    };
    return {
      currentType,
      categories,
      subcategories,
      goodsList,
      tabMenuItemClick,
      handleTabClick,
      handleGoodItemClick
    };
  }
};
if (!Array) {
  const _component_tab_menu = common_vendor.resolveComponent("tab-menu");
  const _component_tab_content_category = common_vendor.resolveComponent("tab-content-category");
  const _component_tab_control = common_vendor.resolveComponent("tab-control");
  const _component_goods_list_item = common_vendor.resolveComponent("goods-list-item");
  (_component_tab_menu + _component_tab_content_category + _component_tab_control + _component_goods_list_item)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($setup.tabMenuItemClick),
    b: common_vendor.p({
      categories: $setup.categories
    }),
    c: common_vendor.p({
      subcategories: $setup.subcategories
    }),
    d: common_vendor.o($setup.handleTabClick),
    e: common_vendor.p({
      titles: ["\u7EFC\u5408", "\u65B0\u54C1", "\u9500\u91CF"]
    }),
    f: common_vendor.f($setup.goodsList[$setup.currentType], (item, index, i0) => {
      return {
        a: "7f3ba5bd-3-" + i0,
        b: common_vendor.p({
          itemInfo: item
        }),
        c: item.cfav + "_" + item.iid
      };
    }),
    g: common_vendor.o($setup.handleGoodItemClick)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/category/index.vue"]]);
wx.createPage(MiniProgramPage);
