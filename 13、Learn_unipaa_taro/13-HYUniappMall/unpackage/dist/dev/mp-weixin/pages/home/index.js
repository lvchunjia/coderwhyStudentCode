"use strict";
const common_vendor = require("../../common/vendor.js");
const service_home = require("../../service/home.js");
require("../../service/index.js");
const HomeSwiper = () => "./childCpns/home-swiper.js";
const HomeRecommend = () => "./childCpns/home-recommend.js";
const HomePopular = () => "./childCpns/home-popular.js";
const TabControl = () => "../../components/tab-control/index.js";
const GoodsListItem = () => "../../components/goods-list-item/index.js";
const _sfc_main = {
  components: {
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodsListItem
  },
  setup() {
    const banners = common_vendor.ref([]);
    const recommends = common_vendor.ref([]);
    common_vendor.ref([""]);
    const types = ["pop", "new", "sell"];
    const goodsListOrigin = {};
    types.forEach((type) => {
      goodsListOrigin[type] = { page: 1, list: [] };
    });
    const goodsList = common_vendor.reactive(goodsListOrigin);
    const currentType = common_vendor.ref("pop");
    common_vendor.onMounted(() => {
      service_home.getHomeMultidata().then((res) => {
        banners.value = res.data.banner.list;
        recommends.value = res.data.recommend.list;
      });
      getHomeDataAction("pop", 1);
      getHomeDataAction("new", 1);
      getHomeDataAction("sell", 1);
    });
    common_vendor.onReachBottom(() => {
      getHomeDataAction(currentType.value, goodsList[currentType.value].page);
    });
    const handleTabClick = (index) => {
      currentType.value = types[index];
    };
    const handleItemClick = (id) => {
      common_vendor.index.navigateTo({
        url: "/pages/detail/index?id=" + id,
        fail: (err) => {
          console.log(err);
        }
      });
    };
    const getHomeDataAction = (type, page) => {
      service_home.getHomeData(type, page).then((res) => {
        goodsList[type].list.push(...res.data.list);
        goodsList[type].page += 1;
      });
    };
    return {
      banners,
      recommends,
      handleTabClick,
      goodsList,
      currentType,
      handleItemClick
    };
  }
};
if (!Array) {
  const _component_home_swiper = common_vendor.resolveComponent("home-swiper");
  const _component_home_recommend = common_vendor.resolveComponent("home-recommend");
  const _component_home_popular = common_vendor.resolveComponent("home-popular");
  const _component_tab_control = common_vendor.resolveComponent("tab-control");
  const _component_goods_list_item = common_vendor.resolveComponent("goods-list-item");
  (_component_home_swiper + _component_home_recommend + _component_home_popular + _component_tab_control + _component_goods_list_item)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      banners: $setup.banners
    }),
    b: common_vendor.p({
      recommends: $setup.recommends
    }),
    c: common_vendor.o($setup.handleTabClick),
    d: common_vendor.p({
      titles: ["\u6D41\u884C", "\u65B0\u6B3E", "\u7CBE\u9009"]
    }),
    e: common_vendor.f($setup.goodsList[$setup.currentType].list, (item, index, i0) => {
      return {
        a: "236b6a5e-4-" + i0,
        b: common_vendor.p({
          itemInfo: item
        }),
        c: item.iid
      };
    }),
    f: common_vendor.o($setup.handleItemClick)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
