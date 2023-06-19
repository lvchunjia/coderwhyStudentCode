if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  const ON_REACH_BOTTOM = "onReachBottom";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const BASE_URL = "http://152.136.185.210:7878/api/hy66";
  const TIME_OUT = 1e4;
  class HYRequest {
    request(url, method, params) {
      return new Promise((resolve, reject) => {
        uni.request({
          url: BASE_URL + url,
          timeout: TIME_OUT,
          method,
          data: params,
          success: (res) => {
            resolve(res.data);
          },
          fail: reject
        });
      });
    }
    get(url, params) {
      return this.request(url, "GET", params);
    }
    post(url, data) {
      return this.request(url, "POST", data);
    }
  }
  const hyRequest = new HYRequest();
  function getHomeMultidata() {
    return hyRequest.get("/home/multidata");
  }
  function getHomeData(type, page) {
    return hyRequest.get("/home/data", {
      type,
      page
    });
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$v = {
    props: {
      banners: {
        type: Array,
        default: () => []
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("swiper", {
      class: "banner",
      "indicator-dots": "",
      "indicator-active-color": "#ff7555",
      circular: ""
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.banners, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("swiper-item", {
          key: item.acm,
          class: "banner-item"
        }, [
          vue.createElementVNode("image", {
            class: "image",
            src: item.image,
            mode: "widthFix"
          }, null, 8, ["src"])
        ]);
      }), 128))
    ]);
  }
  const HomeSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-a3146fa1"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/home/childCpns/home-swiper.vue"]]);
  const _sfc_main$u = {
    props: {
      recommends: {
        type: Array,
        default: () => []
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "recommend" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.recommends, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: item.acm,
          class: "recommend-item"
        }, [
          vue.createElementVNode("image", {
            class: "image",
            src: item.image
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(item.title), 1)
        ]);
      }), 128))
    ]);
  }
  const HomeRecommend = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-4cbe16d3"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/home/childCpns/home-recommend.vue"]]);
  const _sfc_main$t = {};
  function _sfc_render$s(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "popular" }, [
      vue.createElementVNode("image", {
        class: "image",
        mode: "widthFix",
        src: "/static/images/home/recommend_bg.jpg"
      })
    ]);
  }
  const HomePopular = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-8ed5435f"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/home/childCpns/home-popular.vue"]]);
  const _sfc_main$s = {
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    emits: ["tabClick"],
    setup(props, { emit }) {
      const currentIndex = vue.ref(0);
      const tabControlClick = (index) => {
        currentIndex.value = index;
        emit("tabClick", currentIndex.value);
      };
      return {
        currentIndex,
        tabControlClick
      };
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab-control" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.titles, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: index,
          class: vue.normalizeClass(["item", $setup.currentIndex === index ? "active" : ""]),
          onClick: ($event) => $setup.tabControlClick(index)
        }, [
          vue.createElementVNode("span", { class: "title" }, vue.toDisplayString(item), 1)
        ], 10, ["onClick"]);
      }), 128))
    ]);
  }
  const TabControl = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-738e0dd7"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/components/tab-control/index.vue"]]);
  const _sfc_main$r = {
    props: {
      itemInfo: {
        type: Object,
        default: () => {
        }
      },
      abc: {
        type: String
      }
    },
    emits: ["itemClick"],
    setup(props, { emit }) {
      const itemClick = () => {
        emit("itemClick", props.itemInfo.iid);
      };
      return {
        itemClick
      };
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "goods-item",
      onClick: _cache[0] || (_cache[0] = (...args) => $setup.itemClick && $setup.itemClick(...args))
    }, [
      vue.createElementVNode("image", {
        class: "image",
        src: $props.itemInfo.image || $props.itemInfo.img || $props.itemInfo.show.img,
        mode: "widthFix"
      }, null, 8, ["src"]),
      vue.createElementVNode("view", { class: "desc-info" }, [
        vue.createElementVNode("view", { class: "title" }, vue.toDisplayString($props.itemInfo.title), 1),
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode("text", { class: "price" }, "\xA5" + vue.toDisplayString($props.itemInfo.price), 1),
          vue.createElementVNode("image", {
            class: "icon",
            src: "/static/images/common/favor.png"
          }),
          vue.createElementVNode("text", { class: "cfav" }, vue.toDisplayString($props.itemInfo.cfav), 1)
        ])
      ])
    ]);
  }
  const GoodsListItem = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-d02aae71"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/components/goods-list-item/index.vue"]]);
  const _sfc_main$q = {
    components: {
      HomeSwiper,
      HomeRecommend,
      HomePopular,
      TabControl,
      GoodsListItem
    },
    setup() {
      const banners = vue.ref([]);
      const recommends = vue.ref([]);
      vue.ref([""]);
      const types = ["pop", "new", "sell"];
      const goodsListOrigin = {};
      types.forEach((type) => {
        goodsListOrigin[type] = { page: 1, list: [] };
      });
      const goodsList = vue.reactive(goodsListOrigin);
      const currentType = vue.ref("pop");
      vue.onMounted(() => {
        getHomeMultidata().then((res) => {
          banners.value = res.data.banner.list;
          recommends.value = res.data.recommend.list;
        });
        getHomeDataAction("pop", 1);
        getHomeDataAction("new", 1);
        getHomeDataAction("sell", 1);
      });
      onReachBottom(() => {
        getHomeDataAction(currentType.value, goodsList[currentType.value].page);
      });
      const handleTabClick = (index) => {
        currentType.value = types[index];
      };
      const handleItemClick = (id) => {
        uni.navigateTo({
          url: "/pages/detail/index?id=" + id,
          fail: (err) => {
            formatAppLog("log", "at pages/home/index.vue:71", err);
          }
        });
      };
      const getHomeDataAction = (type, page) => {
        getHomeData(type, page).then((res) => {
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
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_home_swiper = vue.resolveComponent("home-swiper");
    const _component_home_recommend = vue.resolveComponent("home-recommend");
    const _component_home_popular = vue.resolveComponent("home-popular");
    const _component_tab_control = vue.resolveComponent("tab-control");
    const _component_goods_list_item = vue.resolveComponent("goods-list-item");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_home_swiper, { banners: $setup.banners }, null, 8, ["banners"]),
      vue.createVNode(_component_home_recommend, { recommends: $setup.recommends }, null, 8, ["recommends"]),
      vue.createVNode(_component_home_popular),
      vue.createVNode(_component_tab_control, {
        class: "tab-control",
        titles: ["\u6D41\u884C", "\u65B0\u6B3E", "\u7CBE\u9009"],
        onTabClick: $setup.handleTabClick
      }, null, 8, ["onTabClick"]),
      vue.createElementVNode("view", { class: "goods-list" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($setup.goodsList[$setup.currentType].list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: item.iid,
            class: "item"
          }, [
            vue.createVNode(_component_goods_list_item, {
              itemInfo: item,
              onItemClick: $setup.handleItemClick
            }, null, 8, ["itemInfo", "onItemClick"])
          ]);
        }), 128))
      ])
    ], 64);
  }
  const PagesHomeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/home/index.vue"]]);
  const _sfc_main$p = {
    props: {
      categories: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    emits: ["menuItemClick"],
    setup(props, { emit }) {
      const currentTitle = vue.ref("\u6B63\u5728\u6D41\u884C");
      const menuItemClick = (item) => {
        currentTitle.value = item.title;
        emit("menuItemClick", item);
      };
      return {
        currentTitle,
        menuItemClick
      };
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab-menu" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-y": "true",
        class: "tab-menu-scroll"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.categories, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: item.maitKey,
            class: vue.normalizeClass(["scroll-view-item", $setup.currentTitle === item.title ? "active" : ""]),
            onClick: ($event) => $setup.menuItemClick(item)
          }, vue.toDisplayString(item.title), 11, ["onClick"]);
        }), 128))
      ])
    ]);
  }
  const TabMenu = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-b71bc09c"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/category/childCpns/tab-menu.vue"]]);
  const _sfc_main$o = {
    props: {
      subcategories: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    setup() {
      const itemClick = (item) => {
        uni.navigateTo({
          url: "/pages/webview/index?link=" + item.link,
          fail: (err) => {
            formatAppLog("log", "at pages/category/childCpns/tab-content-category.vue:34", err);
          }
        });
      };
      return {
        itemClick
      };
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab-content-category" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.subcategories, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: item.miniWallkey,
          class: "content-item",
          onClick: ($event) => $setup.itemClick(item)
        }, [
          vue.createElementVNode("image", {
            class: "c-img",
            src: item.image,
            "lazy-load": true
          }, null, 8, ["src"]),
          vue.createElementVNode("text", { class: "title" }, vue.toDisplayString(item.title), 1)
        ], 8, ["onClick"]);
      }), 128))
    ]);
  }
  const TabContentCategory = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-29933d70"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/category/childCpns/tab-content-category.vue"]]);
  function getCategory() {
    return hyRequest.get("/category");
  }
  function getSubcategory(maitKey) {
    return hyRequest.get(`/subcategory?maitKey=${maitKey}`);
  }
  function getCategoryDetail(type, miniWallkey) {
    return hyRequest.get(`/subcategory/detail?miniWallkey=${miniWallkey}&type=${type}`);
  }
  const _sfc_main$n = {
    components: {
      TabMenu,
      TabContentCategory,
      TabControl,
      GoodsListItem
    },
    setup() {
      const categories = vue.ref([]);
      const subcategories = vue.ref([]);
      vue.ref([]);
      vue.ref([]);
      vue.ref([]);
      const currentType = vue.ref("pop");
      const types = ["pop", "new", "sell"];
      const goodsListOrigin = {};
      types.forEach((type) => {
        goodsListOrigin[type] = [];
      });
      const goodsList = vue.reactive(goodsListOrigin);
      vue.onMounted(() => {
        getCategory().then((res) => {
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
        formatAppLog("log", "at pages/category/index.vue:77", index);
        currentType.value = types[index];
      };
      const handleGoodItemClick = (id) => {
        formatAppLog("log", "at pages/category/index.vue:81", id);
        uni.navigateTo({
          url: "/pages/detail/index?id=" + id,
          fail: (err) => {
            formatAppLog("log", "at pages/category/index.vue:85", err);
          }
        });
      };
      const getCategoryContentData = (menuData = {}) => {
        let {
          maitKey,
          miniWallkey
        } = menuData;
        getSubcategory(maitKey).then((res) => {
          subcategories.value = res.data.list || [];
        });
        getCategoryDataAction("pop", miniWallkey);
        getCategoryDataAction("new", miniWallkey);
        getCategoryDataAction("sell", miniWallkey);
      };
      const getCategoryDataAction = (type, miniWallkey) => {
        getCategoryDetail(type, miniWallkey).then((res) => {
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
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tab_menu = vue.resolveComponent("tab-menu");
    const _component_tab_content_category = vue.resolveComponent("tab-content-category");
    const _component_tab_control = vue.resolveComponent("tab-control");
    const _component_goods_list_item = vue.resolveComponent("goods-list-item");
    return vue.openBlock(), vue.createElementBlock("view", { class: "category" }, [
      vue.createVNode(_component_tab_menu, {
        categories: $setup.categories,
        onMenuItemClick: $setup.tabMenuItemClick
      }, null, 8, ["categories", "onMenuItemClick"]),
      vue.createElementVNode("scroll-view", {
        class: "content-scroll",
        "scroll-y": "true"
      }, [
        vue.createVNode(_component_tab_content_category, { subcategories: $setup.subcategories }, null, 8, ["subcategories"]),
        vue.createVNode(_component_tab_control, {
          class: "tab-control",
          titles: ["\u7EFC\u5408", "\u65B0\u54C1", "\u9500\u91CF"],
          onTabClick: $setup.handleTabClick
        }, null, 8, ["onTabClick"]),
        vue.createElementVNode("view", { class: "goods-list" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($setup.goodsList[$setup.currentType], (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: item.cfav + "_" + item.iid,
              class: "item"
            }, [
              vue.createVNode(_component_goods_list_item, {
                itemInfo: item,
                onItemClick: $setup.handleGoodItemClick
              }, null, 8, ["itemInfo", "onItemClick"])
            ]);
          }), 128))
        ])
      ])
    ]);
  }
  const PagesCategoryIndex = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/category/index.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = vue.effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn, key) {
        computedObj[key] = partial(fn, store2);
        computedCache[key] = vue.computed(function() {
          return computedObj[key]();
        });
        Object.defineProperty(store2.getters, key, {
          get: function() {
            return computedCache[key].value;
          },
          enumerable: true
        });
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    store2._scope = scope;
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
    if (oldScope) {
      oldScope.stop();
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(
        local.state,
        local.getters,
        store3.state,
        store3.getters
      );
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api.on.getInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api.on.editInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state) {
          var data = {};
          if (mutation.payload) {
            data.payload = mutation.payload;
          }
          data.state = state;
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state) {
            var data = {};
            if (action.payload) {
              data.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data
              }
            });
          },
          after: function(action, state) {
            var data = {};
            var duration = Date.now() - action._time;
            data.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data.payload = action.payload;
            }
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(
      function(module, moduleName, i) {
        var child = module[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn(
          "[vuex] trying to unregister module '" + key + "', which is not registered"
        );
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn(
              "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(
          assertOptions.assert(value),
          makeAssertionMessage(path, key, type, value, assertOptions.expected)
        );
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._scope = null;
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  const cart = {
    state: {
      cartList: []
    },
    getters: {
      cartList(state) {
        return state.cartList;
      },
      cartCount(state, getters) {
        return getters.cartList.length;
      }
    },
    mutations: {
      addCart(state, info) {
        const oldInfo = state.cartList.find((item) => item.iid === info.iid);
        if (oldInfo) {
          oldInfo.count += 1;
        } else {
          info.count = 1;
          info.checked = true;
          state.cartList.push(info);
        }
      },
      toggleChecked(state, info) {
        const currentInfo = state.cartList.find((item) => item.iid === info.iid);
        if (currentInfo) {
          currentInfo.checked = !currentInfo.checked;
        }
      },
      checkedAll(state) {
        let isSelectAll = state.cartList.find((item) => !item.checked);
        state.cartList.forEach((item) => {
          item.checked = isSelectAll ? true : false;
        });
      }
    },
    actions: {
      addCartAction(context, info) {
        context.commit("addCart", info);
      }
    }
  };
  const store = createStore({
    state: {
      version: "1.0.0",
      projectName: "HYUniappMall"
    },
    modules: {
      cart
    }
  });
  const _sfc_main$m = {
    props: {
      itemInfo: {
        type: Object,
        default: function() {
          return {};
        }
      }
    },
    emit: ["checkedChange"],
    setup(props, { emit }) {
      const onChange = (itemInfo) => {
        store.commit("toggleChecked", itemInfo);
        emit("checkedChange", itemInfo);
      };
      return {
        onChange
      };
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "cart-list-item" }, [
      vue.createElementVNode("view", { class: "item-selector" }, [
        vue.createElementVNode("label", { class: "select-all" }, [
          vue.createElementVNode("radio", {
            checked: $props.itemInfo.checked,
            color: "#ff8198",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.onChange($props.itemInfo))
          }, null, 8, ["checked"]),
          vue.createElementVNode("text", { class: "label-name" }, "\u5168\u9009")
        ])
      ]),
      vue.createElementVNode("view", { class: "item-img" }, [
        vue.createElementVNode("image", {
          class: "c-img",
          src: $props.itemInfo.imgURL,
          "lazy-load": true
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", { class: "item-info" }, [
        vue.createElementVNode("view", { class: "item-title" }, vue.toDisplayString($props.itemInfo.title), 1),
        vue.createElementVNode("view", { class: "item-desc" }, "\u5546\u54C1\u63CF\u8FF0: " + vue.toDisplayString($props.itemInfo.desc), 1),
        vue.createElementVNode("view", { class: "info-bottom" }, [
          vue.createElementVNode("view", { class: "item-price left" }, "\xA5" + vue.toDisplayString($props.itemInfo.newPrice), 1),
          vue.createElementVNode("view", { class: "item-count right" }, "x" + vue.toDisplayString($props.itemInfo.count), 1)
        ])
      ])
    ]);
  }
  const CartListItem = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-2bcad901"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/cart/childCpns/cart-list-item.vue"]]);
  const _sfc_main$l = {
    emits: ["checkedAllChange"],
    setup(props, { emit }) {
      const checked = vue.ref(false);
      const totalPrice = vue.computed(() => {
        let isSelectAll = store.getters.cartList.find((item) => !item.checked);
        checked.value = isSelectAll ? false : true;
        return store.getters.cartList.filter((item) => {
          return item.checked;
        }).reduce((preValue, item) => {
          return preValue + item.count * item.newPrice;
        }, 0).toFixed(2);
      });
      const cartCount = vue.computed(() => {
        let counter = store.getters.cartCount || 0;
        if (counter > 0) {
          checked.value = true;
        } else {
          checked.value = false;
        }
        return counter;
      });
      const onChange = () => {
        checked.value = !checked.value;
        store.commit("checkedAll");
        emit("checkedAllChange", checked.value);
      };
      return {
        totalPrice,
        cartCount,
        checked,
        onChange
      };
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "bottom-bar" }, [
      vue.createElementVNode("label", { class: "select-all" }, [
        vue.createElementVNode("radio", {
          checked: $setup.checked,
          color: "#ff8198",
          onClick: _cache[0] || (_cache[0] = (...args) => $setup.onChange && $setup.onChange(...args))
        }, null, 8, ["checked"]),
        vue.createElementVNode("text", { class: "label-name" }, "\u5168\u9009")
      ]),
      vue.createElementVNode("text", { class: "total-price" }, "\u5408\u8BA1: \xA5" + vue.toDisplayString($setup.totalPrice), 1),
      vue.createElementVNode("text", { class: "buy-product" }, "\u53BB\u8BA1\u7B97(" + vue.toDisplayString($setup.cartCount) + ")", 1),
      vue.createCommentVNode(' <text class="buy-product">\u53BB\u8BA1\u7B97({{$store.getters.cartCount}})</text> ')
    ]);
  }
  const BottomBar = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-4ab4d87e"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/cart/childCpns/bottom-bar.vue"]]);
  const _sfc_main$k = {
    props: {},
    components: {
      CartListItem,
      BottomBar
    },
    setup() {
      const cartList = vue.computed(() => {
        return store.getters.cartList || [];
      });
      const handleCheckedChange = (itemInfo) => {
      };
      const handlecCheckedAllChange = (checked) => {
        formatAppLog("log", "at pages/cart/index.vue:37", "checked=>", checked);
      };
      return {
        cartList,
        handleCheckedChange,
        handlecCheckedAllChange
      };
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cart_list_item = vue.resolveComponent("cart-list-item");
    const _component_bottom_bar = vue.resolveComponent("bottom-bar");
    return vue.openBlock(), vue.createElementBlock("view", { class: "cart" }, [
      vue.createElementVNode("scroll-view", {
        class: "cart-scroll",
        "scroll-y": "true"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($setup.cartList, (item) => {
          return vue.openBlock(), vue.createBlock(_component_cart_list_item, {
            key: item.iid,
            "item-info": item,
            onCheckedChange: $setup.handleCheckedChange
          }, null, 8, ["item-info", "onCheckedChange"]);
        }), 128))
      ]),
      vue.createCommentVNode(" 44px "),
      vue.createVNode(_component_bottom_bar, { onCheckedAllChange: $setup.handlecCheckedAllChange }, null, 8, ["onCheckedAllChange"])
    ]);
  }
  const PagesCartIndex = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/cart/index.vue"]]);
  const _sfc_main$j = {
    setup() {
      const itemClick = () => {
        formatAppLog("log", "at pages/profile/childCpns/user-info.vue:25", "\u767B\u5F55/\u6CE8\u518C");
      };
      return {
        itemClick
      };
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "user-info",
      onClick: _cache[0] || (_cache[0] = (...args) => $setup.itemClick && $setup.itemClick(...args))
    }, [
      vue.createElementVNode("view", { class: "user-icon" }, [
        vue.createElementVNode("image", {
          class: "avatar",
          src: "/static/images/profile/avatar-default.png"
        })
      ]),
      vue.createElementVNode("view", { class: "login-info" }, [
        vue.createElementVNode("view", { class: "name" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createTextVNode("\u767B\u5F55")
          ], true)
        ]),
        vue.createElementVNode("view", { class: "phone" }, [
          vue.createElementVNode("image", {
            class: "phone-icon",
            src: "/static/images/profile/phone.png"
          }),
          vue.createElementVNode("text", null, "\u6682\u65E0\u7ED1\u5B9A\u624B\u673A\u53F7")
        ])
      ]),
      vue.createElementVNode("image", {
        class: "arrow",
        src: "/static/images/common/arrow-right.png"
      })
    ]);
  }
  const UserInfo = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-1f7ad0d8"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/profile/childCpns/user-info.vue"]]);
  const _sfc_main$i = {
    props: {
      listItems: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    setup() {
      const formatPrice = vue.computed(() => {
        return (item) => {
          return item.decimal ? item.price.toFixed(item.decimal) : item.price;
        };
      });
      return {
        formatPrice
      };
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "grid-view" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.listItems, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: index,
          class: "item"
        }, [
          vue.createElementVNode("view", { class: "number" }, [
            vue.createElementVNode("text", { class: "price" }, vue.toDisplayString($setup.formatPrice(item)), 1),
            vue.createElementVNode("text", null, vue.toDisplayString(item.unit), 1)
          ]),
          vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(item.name), 1)
        ]);
      }), 128))
    ]);
  }
  const GridView = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-6d7b2cf7"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/profile/childCpns/grid-view.vue"]]);
  const _sfc_main$h = {
    props: {
      listItems: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    setup() {
      return {
        url: "http://localhost:8080/img/home.7210ddcb.svg"
      };
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "list-view" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.listItems, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: index,
          class: "item"
        }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: item.icon
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "info" }, vue.toDisplayString(item.info), 1)
        ]);
      }), 128))
    ]);
  }
  const ListView = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-fb4818c1"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/profile/childCpns/list-view.vue"]]);
  const messagePNG = "/static/images/profile/message.png";
  const appPNG = "/static/images/profile/app.png";
  const vipPNG = "/static/images/profile/vip.png";
  const cartPNG = "/static/images/profile/cart.png";
  const pointerPNG = "/static/images/profile/pointer.png";
  const _sfc_main$g = {
    components: {
      UserInfo,
      GridView,
      ListView
    },
    setup() {
      const gridItemDatas = vue.ref([
        {
          price: 0,
          decimal: 2,
          unit: "\u5143",
          name: "\u6211\u7684\u4F59\u989D"
        },
        {
          price: 0,
          unit: "\u4E2A",
          name: "\u6211\u7684\u4F18\u60E0"
        },
        {
          price: 0,
          unit: "\u5206",
          name: "\u6211\u7684\u79EF\u5206"
        }
      ]);
      const orderList = [
        { icon: messagePNG, iconColor: "#ff8198", info: "\u6211\u7684\u6D88\u606F" },
        { icon: appPNG, iconColor: "#fc7b53", info: "\u79EF\u5206\u5546\u57CE" },
        { icon: vipPNG, iconColor: "#ffc636", info: "\u4F1A\u5458\u5361" }
      ];
      const serviceList = [
        { icon: cartPNG, iconColor: "#ff8198", info: "\u6211\u7684\u8D2D\u7269\u8F66" },
        { icon: pointerPNG, iconColor: "#ff8198", info: "\u4E0B\u8F7D\u8D2D\u7269APP" }
      ];
      return {
        gridItemDatas,
        orderList,
        serviceList
      };
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_user_info = vue.resolveComponent("user-info");
    const _component_grid_view = vue.resolveComponent("grid-view");
    const _component_list_view = vue.resolveComponent("list-view");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_user_info, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode(" \u767B\u5F55/\u6CE8\u518C ")
        ]),
        _: 1
      }),
      vue.createVNode(_component_grid_view, { listItems: $setup.gridItemDatas }, null, 8, ["listItems"]),
      vue.createElementVNode("view", { class: "item-bg" }, [
        vue.createVNode(_component_list_view, {
          class: "list-item",
          listItems: $setup.orderList
        }, null, 8, ["listItems"]),
        vue.createVNode(_component_list_view, {
          class: "list-item",
          listItems: $setup.serviceList
        }, null, 8, ["listItems"])
      ])
    ], 64);
  }
  const PagesProfileIndex = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/profile/index.vue"]]);
  function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
    return fmt;
  }
  function padLeftZero(str) {
    return ("00" + str).substr(str.length);
  }
  const debounce = (method, delay) => {
    delay = delay || 500;
    let timer = null;
    return function() {
      const self = this;
      const args = arguments;
      timer && clearTimeout(timer);
      timer = setTimeout(function() {
        method.apply(self, args);
      }, delay);
    };
  };
  function getGoodDetail(id) {
    return hyRequest.get(`/detail?iid=${id}`);
  }
  function getGoodRecommend() {
    return hyRequest.get(`/recommend`);
  }
  class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.nowPrice = itemInfo.highNowPrice;
    }
  }
  class GoodsParam {
    constructor(info, rule) {
      this.image = info.images ? info.images[0] : "";
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }
  class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods;
    }
  }
  const _sfc_main$f = {
    props: {
      titleInfos: {
        type: Array,
        default: function() {
          return [
            {
              id: 0,
              title: "\u5546\u54C1"
            },
            {
              id: 1,
              title: "\u53C2\u6570"
            },
            {
              id: 2,
              title: "\u8BC4\u8BBA"
            },
            {
              id: 3,
              title: "\u63A8\u8350"
            }
          ];
        }
      },
      defaultIndex: {
        type: Number,
        default: 0
      }
    },
    emits: ["itemClick"],
    setup(props, { emit }) {
      const currentIndex = vue.ref(props.defaultIndex);
      const itemClick = (item) => {
        currentIndex.value = item.id;
        emit("itemClick", item);
      };
      return {
        currentIndex,
        itemClick
      };
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail-nav-bar" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.titleInfos, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("text", {
          key: item.id,
          class: vue.normalizeClass(["title", $setup.currentIndex === item.id ? "active" : ""]),
          onClick: ($event) => $setup.itemClick(item)
        }, vue.toDisplayString(item.title), 11, ["onClick"]);
      }), 128))
    ]);
  }
  const DetailNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-8ce8a099"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-nav-bar.vue"]]);
  const _sfc_main$e = {
    props: {
      banners: {
        type: Array,
        default: () => []
      },
      height: {
        type: String,
        default: "600rpx"
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("swiper", {
      class: "detail-swiper",
      style: vue.normalizeStyle({ height: $props.height }),
      "indicator-dots": "",
      "indicator-active-color": "#ff7555",
      circular: ""
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.banners, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("swiper-item", {
          key: item,
          class: "banner-item"
        }, [
          vue.createElementVNode("image", {
            class: "image",
            src: item,
            mode: "widthFix",
            "lazy-load": true
          }, null, 8, ["src"])
        ]);
      }), 128))
    ], 4);
  }
  const DetailSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-1be0d310"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-swiper.vue"]]);
  const _sfc_main$d = {
    props: {
      good: {
        type: Object,
        default: function() {
          return {};
        }
      }
    },
    setup(props) {
      return {};
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail-base-info" }, [
      vue.createElementVNode("view", { class: "info-title" }, vue.toDisplayString($props.good.title), 1),
      vue.createElementVNode("view", { class: "info-price" }, [
        vue.createElementVNode("text", { class: "n-price" }, vue.toDisplayString($props.good.newPrice), 1),
        vue.createElementVNode("text", { class: "o-price" }, vue.toDisplayString($props.good.oldPrice), 1),
        vue.createElementVNode("text", { class: "discount" }, vue.toDisplayString($props.good.discount), 1)
      ]),
      $props.good.columns ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "info-other"
      }, [
        vue.createElementVNode("text", null, vue.toDisplayString($props.good.columns[0]), 1),
        vue.createElementVNode("text", null, vue.toDisplayString($props.good.columns[1]), 1),
        vue.createElementVNode("text", null, vue.toDisplayString($props.good.services[$props.good.services.length - 1].name), 1)
      ])) : vue.createCommentVNode("v-if", true),
      $props.good.services ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "info-service"
      }, [
        (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(4, (index) => {
          return vue.createElementVNode("view", {
            key: index,
            class: "info-service-item"
          }, [
            vue.createElementVNode("image", {
              class: "service-icon",
              src: $props.good.services[index - 1].icon
            }, null, 8, ["src"]),
            vue.createElementVNode("text", { class: "service-name" }, vue.toDisplayString($props.good.services[index - 1].name), 1)
          ]);
        }), 64))
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const DetailBaseInfo = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-668c7e91"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-base-info.vue"]]);
  const _sfc_main$c = {
    props: {
      shop: {
        type: Object,
        default: function() {
          return {};
        }
      }
    },
    setup() {
      const formateNumber = vue.computed(() => {
        return (number) => {
          if (number < 1e4)
            return number;
          return (number / 1e4).toFixed(1) + "\u4E07";
        };
      });
      return {
        formateNumber
      };
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail-shop-info" }, [
      vue.createElementVNode("view", { class: "shop-top" }, [
        vue.createElementVNode("image", {
          class: "top-icon",
          src: $props.shop.logo
        }, null, 8, ["src"]),
        vue.createElementVNode("text", { class: "title" }, vue.toDisplayString($props.shop.name), 1)
      ]),
      vue.createElementVNode("view", { class: "shop-middle" }, [
        vue.createElementVNode("view", { class: "shop-middle-item shop-middle-left" }, [
          vue.createElementVNode("view", { class: "info-sells" }, [
            vue.createElementVNode("view", { class: "sells-count" }, vue.toDisplayString($setup.formateNumber($props.shop.sells)), 1),
            vue.createElementVNode("view", { class: "sells-text" }, "\u603B\u9500\u91CF")
          ]),
          vue.createElementVNode("view", { class: "info-goods" }, [
            vue.createElementVNode("view", { class: "goods-count" }, vue.toDisplayString($props.shop.goodsCount), 1),
            vue.createElementVNode("view", { class: "goods-text" }, "\u5168\u90E8\u5B9D\u8D1D")
          ])
        ]),
        vue.createElementVNode("view", { class: "shop-middle-item shop-middle-right" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.shop.score, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "mid-item"
            }, [
              vue.createElementVNode("text", { class: "name" }, vue.toDisplayString(item.name), 1),
              vue.createElementVNode("text", {
                class: vue.normalizeClass(["score", { "score-better": item.isBetter }])
              }, vue.toDisplayString(item.score), 3),
              vue.createElementVNode("text", {
                class: vue.normalizeClass(["better", { "better-more": item.isBetter }])
              }, [
                vue.createElementVNode("text", null, vue.toDisplayString(item.isBetter ? "\u9AD8" : "\u4F4E"), 1)
              ], 2)
            ]);
          }), 128))
        ])
      ]),
      vue.createElementVNode("view", { class: "shop-bottom" }, [
        vue.createElementVNode("view", { class: "enter-shop" }, "\u8FDB\u5E97\u901B\u901B")
      ])
    ]);
  }
  const DetailShopInfo = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-41f87d38"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-shop-info.vue"]]);
  const _sfc_main$b = {
    props: {
      detailInfo: {
        type: Object
      }
    },
    setup() {
      return {};
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return Object.keys($props.detailInfo).length !== 0 ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "detail-goods-info"
    }, [
      vue.createElementVNode("view", { class: "info-desc clear-fix" }, [
        vue.createElementVNode("view", { class: "start" }),
        vue.createElementVNode("view", { class: "desc" }, vue.toDisplayString($props.detailInfo.desc), 1),
        vue.createElementVNode("view", { class: "end" })
      ]),
      $props.detailInfo.detailImage ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "info-key"
      }, vue.toDisplayString($props.detailInfo.detailImage[0].key), 1)) : vue.createCommentVNode("v-if", true),
      $props.detailInfo.detailImage ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "info-list"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.detailInfo.detailImage[0].list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("image", {
            class: "detail-img",
            key: index,
            src: item,
            mode: "widthFix",
            "lazy-load": true
          }, null, 8, ["src"]);
        }), 128))
      ])) : vue.createCommentVNode("v-if", true)
    ])) : vue.createCommentVNode("v-if", true);
  }
  const DetailGoodsInfo = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-efa204f7"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-goods-info.vue"]]);
  const _sfc_main$a = {
    name: "uniTd",
    options: {
      virtualHost: true
    },
    props: {
      width: {
        type: [String, Number],
        default: ""
      },
      align: {
        type: String,
        default: "left"
      },
      rowspan: {
        type: [Number, String],
        default: 1
      },
      colspan: {
        type: [Number, String],
        default: 1
      }
    },
    data() {
      return {
        border: false
      };
    },
    created() {
      this.root = this.getTable();
      this.border = this.root.border;
    },
    methods: {
      getTable() {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== "uniTable") {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(` :class="{'table--border':border}"  `),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-table-td", { "table--border": $data.border }]),
        style: vue.normalizeStyle({ width: $props.width + "px", "text-align": $props.align })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6)
    ], 2112);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-edae4802"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/uni_modules/uni-table/components/uni-td/uni-td.vue"]]);
  const _sfc_main$9 = {
    name: "TableCheckbox",
    emits: ["checkboxSelected"],
    props: {
      indeterminate: {
        type: Boolean,
        default: false
      },
      checked: {
        type: [Boolean, String],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number,
        default: -1
      },
      cellData: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    watch: {
      checked(newVal) {
        if (typeof this.checked === "boolean") {
          this.isChecked = newVal;
        } else {
          this.isChecked = true;
        }
      },
      indeterminate(newVal) {
        this.isIndeterminate = newVal;
      }
    },
    data() {
      return {
        isChecked: false,
        isDisabled: false,
        isIndeterminate: false
      };
    },
    created() {
      if (typeof this.checked === "boolean") {
        this.isChecked = this.checked;
      }
      this.isDisabled = this.disabled;
    },
    methods: {
      selected() {
        if (this.isDisabled)
          return;
        this.isIndeterminate = false;
        this.isChecked = !this.isChecked;
        this.$emit("checkboxSelected", {
          checked: this.isChecked,
          data: this.cellData
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-table-checkbox",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.selected && $options.selected(...args))
    }, [
      !$props.indeterminate ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["checkbox__inner", { "is-checked": $data.isChecked, "is-disable": $data.isDisabled }])
      }, [
        vue.createElementVNode("view", { class: "checkbox__inner-icon" })
      ], 2)) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "checkbox__inner checkbox--indeterminate"
      }, [
        vue.createElementVNode("view", { class: "checkbox__inner-icon" })
      ]))
    ]);
  }
  const tableCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-25e435b1"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/uni_modules/uni-table/components/uni-tr/table-checkbox.vue"]]);
  const _sfc_main$8 = {
    name: "uniTr",
    components: { tableCheckbox },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      keyValue: {
        type: [String, Number],
        default: ""
      }
    },
    options: {
      virtualHost: true
    },
    data() {
      return {
        value: false,
        border: false,
        selection: false,
        widthThArr: [],
        ishead: true,
        checked: false,
        indeterminate: false
      };
    },
    created() {
      this.root = this.getTable();
      this.head = this.getTable("uniThead");
      if (this.head) {
        this.ishead = false;
        this.head.init(this);
      }
      this.border = this.root.border;
      this.selection = this.root.type;
      this.root.trChildren.push(this);
      const rowData = this.root.data.find((v) => v[this.root.rowKey] === this.keyValue);
      if (rowData) {
        this.rowData = rowData;
      }
      this.root.isNodata();
    },
    mounted() {
      if (this.widthThArr.length > 0) {
        const selectionWidth = this.selection === "selection" ? 50 : 0;
        this.root.minWidth = this.widthThArr.reduce((a, b) => Number(a) + Number(b)) + selectionWidth;
      }
    },
    unmounted() {
      const index = this.root.trChildren.findIndex((i) => i === this);
      this.root.trChildren.splice(index, 1);
      this.root.isNodata();
    },
    methods: {
      minWidthUpdate(width) {
        this.widthThArr.push(width);
      },
      checkboxSelected(e) {
        let rootData = this.root.data.find((v) => v[this.root.rowKey] === this.keyValue);
        this.checked = e.checked;
        this.root.check(rootData || this, e.checked, rootData ? this.keyValue : null);
      },
      change(e) {
        this.root.trChildren.forEach((item) => {
          if (item === this) {
            this.root.check(this, e.detail.value.length > 0 ? true : false);
          }
        });
      },
      getTable(name = "uniTable") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_table_checkbox = vue.resolveComponent("table-checkbox");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-table-tr" }, [
      $data.selection === "selection" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["checkbox", { "tr-table--border": $data.border }])
      }, [
        vue.createVNode(_component_table_checkbox, {
          checked: $data.checked,
          indeterminate: $data.indeterminate,
          disabled: $props.disabled,
          onCheckboxSelected: $options.checkboxSelected
        }, null, 8, ["checked", "indeterminate", "disabled", "onCheckboxSelected"])
      ], 2)) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-b48b3e32"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/uni_modules/uni-table/components/uni-tr/uni-tr.vue"]]);
  const _sfc_main$7 = {
    name: "uniTable",
    options: {
      virtualHost: true
    },
    emits: ["selection-change"],
    props: {
      data: {
        type: Array,
        default() {
          return [];
        }
      },
      border: {
        type: Boolean,
        default: false
      },
      stripe: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: ""
      },
      emptyText: {
        type: String,
        default: "\u6CA1\u6709\u66F4\u591A\u6570\u636E"
      },
      loading: {
        type: Boolean,
        default: false
      },
      rowKey: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        noData: true,
        minWidth: 0,
        multiTableHeads: []
      };
    },
    watch: {
      loading(val) {
      },
      data(newVal) {
        this.theadChildren;
        if (this.theadChildren) {
          this.theadChildren.rowspan;
        }
        this.noData = false;
      }
    },
    created() {
      this.trChildren = [];
      this.thChildren = [];
      this.theadChildren = null;
      this.backData = [];
      this.backIndexData = [];
    },
    methods: {
      isNodata() {
        this.theadChildren;
        let rowspan = 1;
        if (this.theadChildren) {
          rowspan = this.theadChildren.rowspan;
        }
        this.noData = this.trChildren.length - rowspan <= 0;
      },
      selectionAll() {
        let startIndex = 1;
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        } else {
          startIndex = theadChildren.rowspan - 1;
        }
        let isHaveData = this.data && this.data.length.length > 0;
        theadChildren.checked = true;
        theadChildren.indeterminate = false;
        this.trChildren.forEach((item, index) => {
          if (!item.disabled) {
            item.checked = true;
            if (isHaveData && item.keyValue) {
              const row = this.data.find((v) => v[this.rowKey] === item.keyValue);
              if (!this.backData.find((v) => v[this.rowKey] === row[this.rowKey])) {
                this.backData.push(row);
              }
            }
            if (index > startIndex - 1 && this.backIndexData.indexOf(index - startIndex) === -1) {
              this.backIndexData.push(index - startIndex);
            }
          }
        });
        this.$emit("selection-change", {
          detail: {
            value: this.backData,
            index: this.backIndexData
          }
        });
      },
      toggleRowSelection(row, selected) {
        row = [].concat(row);
        this.trChildren.forEach((item, index) => {
          const select = row.findIndex((v) => {
            if (typeof v === "number") {
              return v === index - 1;
            } else {
              return v[this.rowKey] === item.keyValue;
            }
          });
          let ischeck = item.checked;
          if (select !== -1) {
            if (typeof selected === "boolean") {
              item.checked = selected;
            } else {
              item.checked = !item.checked;
            }
            if (ischeck !== item.checked) {
              this.check(item.rowData || item, item.checked, item.rowData ? item.keyValue : null, true);
            }
          }
        });
        this.$emit("selection-change", {
          detail: {
            value: this.backData,
            index: this.backIndexData
          }
        });
      },
      clearSelection() {
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        }
        theadChildren.checked = false;
        theadChildren.indeterminate = false;
        this.trChildren.forEach((item) => {
          item.checked = false;
        });
        this.backData = [];
        this.backIndexData = [];
        this.$emit("selection-change", {
          detail: {
            value: [],
            index: []
          }
        });
      },
      toggleAllSelection() {
        let list = [];
        let startIndex = 1;
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        } else {
          startIndex = theadChildren.rowspan - 1;
        }
        this.trChildren.forEach((item, index) => {
          if (!item.disabled) {
            if (index > startIndex - 1) {
              list.push(index - startIndex);
            }
          }
        });
        this.toggleRowSelection(list);
      },
      check(child, check, keyValue, emit) {
        let theadChildren = this.theadChildren;
        if (!this.theadChildren) {
          theadChildren = this.trChildren[0];
        }
        let childDomIndex = this.trChildren.findIndex((item, index) => child === item);
        if (childDomIndex < 0) {
          childDomIndex = this.data.findIndex((v) => v[this.rowKey] === keyValue) + 1;
        }
        this.trChildren.filter((v) => !v.disabled && v.keyValue).length;
        if (childDomIndex === 0) {
          check ? this.selectionAll() : this.clearSelection();
          return;
        }
        if (check) {
          if (keyValue) {
            this.backData.push(child);
          }
          this.backIndexData.push(childDomIndex - 1);
        } else {
          const index = this.backData.findIndex((v) => v[this.rowKey] === keyValue);
          const idx = this.backIndexData.findIndex((item) => item === childDomIndex - 1);
          if (keyValue) {
            this.backData.splice(index, 1);
          }
          this.backIndexData.splice(idx, 1);
        }
        const domCheckAll = this.trChildren.find((item, index) => index > 0 && !item.checked && !item.disabled);
        if (!domCheckAll) {
          theadChildren.indeterminate = false;
          theadChildren.checked = true;
        } else {
          theadChildren.indeterminate = true;
          theadChildren.checked = false;
        }
        if (this.backIndexData.length === 0) {
          theadChildren.indeterminate = false;
        }
        if (!emit) {
          this.$emit("selection-change", {
            detail: {
              value: this.backData,
              index: this.backIndexData
            }
          });
        }
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-table-scroll", { "table--border": $props.border, "border-none": !$data.noData }])
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-table", { "table--stripe": $props.stripe }]),
        style: vue.normalizeStyle({ "min-width": $data.minWidth + "px" })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
        $data.noData ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-table-loading"
        }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["uni-table-text", { "empty-border": $props.border }])
          }, vue.toDisplayString($props.emptyText), 3)
        ])) : vue.createCommentVNode("v-if", true),
        $props.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: vue.normalizeClass(["uni-table-mask", { "empty-border": $props.border }])
        }, [
          vue.createElementVNode("div", { class: "uni-table--loader" })
        ], 2)) : vue.createCommentVNode("v-if", true)
      ], 6)
    ], 2);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-c1ea9b5d"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/uni_modules/uni-table/components/uni-table/uni-table.vue"]]);
  const _sfc_main$6 = {
    props: {
      paramInfo: {
        type: Object
      }
    },
    setup(props) {
      const getTableData = vue.computed(() => {
        return props.paramInfo.sizes[0] || [];
      });
      return {
        getTableData
      };
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_td = resolveEasycom(vue.resolveDynamicComponent("uni-td"), __easycom_0);
    const _component_uni_tr = resolveEasycom(vue.resolveDynamicComponent("uni-tr"), __easycom_1);
    const _component_uni_table = resolveEasycom(vue.resolveDynamicComponent("uni-table"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail-param-info" }, [
      vue.createCommentVNode(" \u7B2C\u4E00\u4E2A\u8868\u683C "),
      Object.keys($props.paramInfo).length !== 0 ? (vue.openBlock(), vue.createBlock(_component_uni_table, {
        key: 0,
        emptyText: "\u6682\u65E0\u66F4\u591A\u6570\u636E"
      }, {
        default: vue.withCtx(() => [
          vue.createCommentVNode(" \u8868\u683C\u6570\u636E\u884C "),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($setup.getTableData, (table, index) => {
            return vue.openBlock(), vue.createBlock(_component_uni_tr, { key: index }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_td, null, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(table[0]), 1)
                  ]),
                  _: 2
                }, 1024),
                vue.createVNode(_component_uni_td, null, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(table[1]), 1)
                  ]),
                  _: 2
                }, 1024),
                vue.createVNode(_component_uni_td, null, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(table[2]), 1)
                  ]),
                  _: 2
                }, 1024),
                vue.createVNode(_component_uni_td, null, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(table[3]), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" \u7B2C\u4E8C\u4E2A\u8868\u683C "),
      Object.keys($props.paramInfo).length !== 0 ? (vue.openBlock(), vue.createBlock(_component_uni_table, {
        key: 1,
        emptyText: "\u6682\u65E0\u66F4\u591A\u6570\u636E"
      }, {
        default: vue.withCtx(() => [
          vue.createCommentVNode(" \u8868\u683C\u6570\u636E\u884C "),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.paramInfo.infos, (info, index) => {
            return vue.openBlock(), vue.createBlock(_component_uni_tr, { key: index }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_td, {
                  class: "col-key",
                  width: 76
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(info.key), 1)
                  ]),
                  _: 2
                }, 1024),
                vue.createVNode(_component_uni_td, { class: "col-value" }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("text", { style: { color: "#eb4868" } }, vue.toDisplayString(info.value), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const DetailParamInfo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-e2719e94"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-param-info.vue"]]);
  const _sfc_main$5 = {
    props: {
      commentInfo: {
        type: Object,
        default: function() {
          return {};
        }
      }
    },
    setup() {
      const showDate = vue.computed(() => {
        return (value) => {
          let date = new Date(value * 1e3);
          return formatDate(date, "yyyy-MM-dd");
        };
      });
      return {
        showDate
      };
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return Object.keys($props.commentInfo).length !== 0 ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "detail-comment-info"
    }, [
      vue.createElementVNode("view", { class: "info-header" }, [
        vue.createElementVNode("view", { class: "header-title" }, "\u7528\u6237\u8BC4\u4EF7"),
        vue.createElementVNode("view", { class: "header-more" }, [
          vue.createTextVNode(" \u66F4\u591A "),
          vue.createElementVNode("text", { class: "arrow-right" })
        ])
      ]),
      $props.commentInfo.user ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "info-user"
      }, [
        vue.createElementVNode("image", {
          class: "user-icon",
          src: $props.commentInfo.user.avatar
        }, null, 8, ["src"]),
        vue.createElementVNode("text", { class: "user-name" }, vue.toDisplayString($props.commentInfo.user.uname), 1)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "info-detail" }, [
        vue.createElementVNode("text", { class: "content" }, vue.toDisplayString($props.commentInfo.content), 1),
        vue.createElementVNode("view", { class: "info-other" }, [
          vue.createElementVNode("text", { class: "date" }, vue.toDisplayString($setup.showDate($props.commentInfo.created)), 1),
          vue.createElementVNode("text", null, vue.toDisplayString($props.commentInfo.style), 1)
        ]),
        vue.createElementVNode("view", { class: "info-imgs" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.commentInfo.images, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("image", {
              class: "info-img",
              src: item
            }, null, 8, ["src"]);
          }), 256))
        ])
      ])
    ])) : vue.createCommentVNode("v-if", true);
  }
  const DetailCommentInfo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-ee94b1b1"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-comment-info.vue"]]);
  const _sfc_main$4 = {
    props: {
      recommendList: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    components: {
      GoodsListItem
    },
    setup() {
      const handleGoodItemClick = (item) => {
        formatAppLog("log", "at pages/detail/childCpns/detail-recommend-info.vue:31", item);
      };
      return {
        handleGoodItemClick
      };
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_goods_list_item = vue.resolveComponent("goods-list-item");
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail-recommend-info" }, [
      vue.createElementVNode("div", { class: "info-header" }, "\u70ED\u95E8\u63A8\u8350"),
      vue.createElementVNode("view", { class: "goods-list" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.recommendList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: item.cfav + "_" + item.iid,
            class: "item"
          }, [
            vue.createVNode(_component_goods_list_item, {
              itemInfo: item,
              onItemClick: $setup.handleGoodItemClick
            }, null, 8, ["itemInfo", "onItemClick"])
          ]);
        }), 128))
      ])
    ]);
  }
  const DetailRecommendInfo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-5d194963"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-recommend-info.vue"]]);
  const _sfc_main$3 = {
    props: {},
    emits: ["addToCart"],
    setup(props, { emit }) {
      const addToCart = () => {
        emit("addToCart");
      };
      return {
        addToCart
      };
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail-bottom-bar" }, [
      vue.createElementVNode("view", { class: "bar-item bar-left" }, [
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("view", { class: "icon service" }),
          vue.createElementVNode("text", { class: "text" }, "\u5BA2\u670D")
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("view", { class: "icon shop" }),
          vue.createElementVNode("text", { class: "text" }, "\u5E97\u94FA")
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("view", { class: "icon select" }),
          vue.createElementVNode("text", { class: "text" }, "\u6536\u85CF")
        ])
      ]),
      vue.createElementVNode("view", { class: "bar-item bar-right" }, [
        vue.createElementVNode("view", {
          class: "cart",
          onClick: _cache[0] || (_cache[0] = (...args) => $setup.addToCart && $setup.addToCart(...args))
        }, "\u52A0\u5165\u8D2D\u7269\u8F66"),
        vue.createElementVNode("view", { class: "buy" }, "\u8D2D\u4E70")
      ])
    ]);
  }
  const DetailBottomBar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-578f7f6b"], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/childCpns/detail-bottom-bar.vue"]]);
  const _sfc_main$2 = {
    props: {
      id: {
        type: String,
        default: ""
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      DetailBottomBar
    },
    setup(props, context) {
      formatAppLog("log", "at pages/detail/index.vue:71", "props=", props);
      formatAppLog("log", "at pages/detail/index.vue:72", "context=", context);
      const id = vue.ref("");
      const scrollTop = vue.ref(0);
      const currentNavBarIndex = vue.ref(0);
      const topImages = vue.ref([]);
      const good = vue.ref({});
      const shop = vue.ref({});
      const detailInfo = vue.ref({});
      const paramInfo = vue.ref({});
      const commentInfo = vue.ref({});
      const recommendList = vue.ref([]);
      onShow(() => {
        formatAppLog("log", "at pages/detail/index.vue:95", "onShow");
      });
      onLoad((options) => {
        id.value = options.id;
      });
      vue.onMounted(() => {
        getGoodDetail(id.value).then((res) => {
          const data = res.result;
          topImages.value = data.itemInfo.topImages || [];
          good.value = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
          shop.value = new Shop(data.shopInfo);
          detailInfo.value = data.detailInfo || {};
          paramInfo.value = new GoodsParam(data.itemParams.info, data.itemParams.rule);
          if (data.rate.list) {
            commentInfo.value = data.rate.list[0];
          }
        });
        getGoodRecommend().then((res) => {
          recommendList.value = res.data.list || [];
        });
      });
      const addToCart = debounce(() => {
        formatAppLog("log", "at pages/detail/index.vue:133", "addToCart");
        uni.showToast({
          title: "\u5DF2\u52A0\u5165\u8D2D\u7269\u8F66",
          duration: 1e3
        });
        const obj = {};
        obj.iid = id.value;
        obj.imgURL = topImages.value[0];
        obj.title = good.value.title;
        obj.desc = good.value.desc;
        obj.newPrice = good.value.nowPrice;
        store.dispatch("addCartAction", obj);
      }, 500);
      const handleNavBarItemClick = ({ id: id2 }) => {
        currentNavBarIndex.value = id2;
      };
      const handleScroll = ({ detail }) => {
      };
      return {
        scrollTop,
        currentNavBarIndex,
        topImages,
        good,
        shop,
        detailInfo,
        paramInfo,
        commentInfo,
        recommendList,
        addToCart,
        handleNavBarItemClick,
        handleScroll
      };
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_detail_nav_bar = vue.resolveComponent("detail-nav-bar");
    const _component_detail_swiper = vue.resolveComponent("detail-swiper");
    const _component_detail_base_info = vue.resolveComponent("detail-base-info");
    const _component_detail_shop_info = vue.resolveComponent("detail-shop-info");
    const _component_detail_goods_info = vue.resolveComponent("detail-goods-info");
    const _component_detail_param_info = vue.resolveComponent("detail-param-info");
    const _component_detail_comment_info = vue.resolveComponent("detail-comment-info");
    const _component_detail_recommend_info = vue.resolveComponent("detail-recommend-info");
    const _component_detail_bottom_bar = vue.resolveComponent("detail-bottom-bar");
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail" }, [
      vue.createCommentVNode(" 44px "),
      vue.createVNode(_component_detail_nav_bar, { onItemClick: $setup.handleNavBarItemClick }, null, 8, ["onItemClick"]),
      vue.createElementVNode("scroll-view", {
        class: "detail-scroll",
        "scroll-y": "true",
        "scroll-top": $setup.scrollTop,
        onScroll: _cache[0] || (_cache[0] = (...args) => $setup.handleScroll && $setup.handleScroll(...args))
      }, [
        $setup.currentNavBarIndex === 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createVNode(_component_detail_swiper, {
            ref: "base",
            banners: $setup.topImages
          }, null, 8, ["banners"]),
          vue.createVNode(_component_detail_base_info, { good: $setup.good }, null, 8, ["good"]),
          vue.createVNode(_component_detail_shop_info, { shop: $setup.shop }, null, 8, ["shop"]),
          vue.createVNode(_component_detail_goods_info, { detailInfo: $setup.detailInfo }, null, 8, ["detailInfo"])
        ], 64)) : $setup.currentNavBarIndex === 1 ? (vue.openBlock(), vue.createBlock(_component_detail_param_info, {
          key: 1,
          ref: "param",
          "param-info": $setup.paramInfo
        }, null, 8, ["param-info"])) : $setup.currentNavBarIndex === 2 ? (vue.openBlock(), vue.createBlock(_component_detail_comment_info, {
          key: 2,
          ref: "comment",
          "comment-info": $setup.commentInfo
        }, null, 8, ["comment-info"])) : (vue.openBlock(), vue.createBlock(_component_detail_recommend_info, {
          key: 3,
          ref: "recommend",
          "recommend-list": $setup.recommendList
        }, null, 8, ["recommend-list"]))
      ], 40, ["scroll-top"]),
      vue.createCommentVNode(" 58px "),
      vue.createVNode(_component_detail_bottom_bar, { onAddToCart: $setup.addToCart }, null, 8, ["onAddToCart"])
    ]);
  }
  const PagesDetailIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/detail/index.vue"]]);
  const _sfc_main$1 = {
    setup() {
      const webviewStyles = {
        progress: {
          color: "#ff5777"
        }
      };
      const link = vue.ref("");
      onLoad((options) => {
        link.value = options.link;
      });
      return {
        webviewStyles,
        link
      };
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("web-view", {
        "webview-styles": $setup.webviewStyles,
        src: $setup.link
      }, null, 8, ["webview-styles", "src"])
    ]);
  }
  const PagesWebviewIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/pages/webview/index.vue"]]);
  __definePage("pages/home/index", PagesHomeIndex);
  __definePage("pages/category/index", PagesCategoryIndex);
  __definePage("pages/cart/index", PagesCartIndex);
  __definePage("pages/profile/index", PagesProfileIndex);
  __definePage("pages/detail/index", PagesDetailIndex);
  __definePage("pages/webview/index", PagesWebviewIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("warn", "at App.vue:4", "\u5F53\u524D\u7EC4\u4EF6\u4EC5\u652F\u6301 uni_modules \u76EE\u5F55\u7ED3\u6784 \uFF0C\u8BF7\u5347\u7EA7 HBuilderX \u5230 3.1.0 \u7248\u672C\u4EE5\u4E0A\uFF01");
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/\u4E34\u65F6\u4EE3\u7801\u76EE\u5F55/\u8DE8\u5E73\u53F0/uni-app/HYUniappMall/HYUniappMall/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
