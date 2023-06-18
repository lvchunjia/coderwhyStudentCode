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
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_HIDE = "onHide";
  const ON_LOAD = "onLoad";
  const ON_READY = "onReady";
  const ON_UNLOAD = "onUnload";
  const ON_REACH_BOTTOM = "onReachBottom";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onHide = /* @__PURE__ */ createHook(ON_HIDE);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const onPullDownRefresh = /* @__PURE__ */ createHook(ON_PULL_DOWN_REFRESH);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$9 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
      formatAppLog("log", "at pages/home/home.vue:45", "home onLoad");
      uni.$on("acceptDataFromDetail03", this.acceptDataFromDetail03);
    },
    onShow() {
      formatAppLog("log", "at pages/home/home.vue:50", "home onShow");
    },
    onReady() {
      formatAppLog("log", "at pages/home/home.vue:53", "home onReady");
    },
    onHide() {
      formatAppLog("log", "at pages/home/home.vue:56", "home onHide");
    },
    onUnload() {
      formatAppLog("log", "at pages/home/home.vue:59", "home onUnload");
      uni.$off("acceptDataFromDetail03", this.acceptDataFromDetail03);
    },
    onPullDownRefresh() {
      formatAppLog("log", "at pages/home/home.vue:63", "home onPullDownRefresh");
    },
    onReachBottom() {
      formatAppLog("log", "at pages/home/home.vue:66", "home onReachBottom");
    },
    beforeCreate() {
    },
    created() {
    },
    methods: {
      acceptDataFromDetail03(value) {
        formatAppLog("log", "at pages/home/home.vue:79", "\u8FD9\u662F\u4ECEdetail03\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E:", value);
      },
      goToDetail01() {
        uni.navigateTo({
          url: "/pages/detail01/detail01"
        });
      },
      goToDetail02() {
        uni.redirectTo({
          url: "/pages/detail01/detail01"
        });
      },
      goToDetail03() {
        uni.switchTab({
          url: "/pages/category/category"
        });
      },
      goToDetail04() {
        uni.navigateTo({
          url: "/pages/detail01/detail01?name=liujun&id=200",
          success(res) {
            res.eventChannel.emit("acceptDataFormHomePage", {
              data: "\u6211\u662F\u4ECEHome Page \u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E"
            });
          }
        });
      },
      goToDetail05() {
        uni.navigateTo({
          url: "/pages/detail02/detail02?name=liujun&id=400",
          events: {
            acceptDataFormDetail02(data) {
              formatAppLog("log", "at pages/home/home.vue:112", "home page \u62FF\u5230detail02\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E:", data);
            }
          }
        });
      },
      goToDetail06() {
        uni.navigateTo({
          url: "/pages/detail03/detail03"
        });
      },
      goToDetail07() {
        uni.navigateTo({
          url: "/pages/detail04/detail04"
        });
      },
      goToDetail08() {
        uni.navigateTo({
          url: "/pages/detail05/detail05"
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "" }, "1.\u8DEF\u7531(\u7EC4\u4EF6)"),
      vue.createElementVNode("navigator", {
        url: "/pages/detail01/detail01",
        "open-type": "navigate"
      }, [
        vue.createElementVNode("button", { type: "default" }, "01-detail navigate")
      ]),
      vue.createElementVNode("navigator", {
        url: "/pages/detail01/detail01",
        "open-type": "redirect"
      }, [
        vue.createElementVNode("button", { type: "default" }, "02-detail redirect")
      ]),
      vue.createElementVNode("navigator", {
        url: "/pages/category/category",
        "open-type": "switchTab"
      }, [
        vue.createElementVNode("button", { type: "default" }, "03-category")
      ]),
      vue.createElementVNode("view", { class: "" }, "2.\u8DEF\u7531(API)"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[0] || (_cache[0] = ($event) => $options.goToDetail01())
      }, "04-detail navigate"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[1] || (_cache[1] = ($event) => $options.goToDetail02())
      }, "04-detail redirect"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[2] || (_cache[2] = ($event) => $options.goToDetail03())
      }, "04-detail switchTab"),
      vue.createElementVNode("view", { class: "" }, "3.\u9875\u9762\u4F20\u9012\u53C2\u6570(\u6B63\u5411)"),
      vue.createElementVNode("navigator", {
        url: "/pages/detail01/detail01?name=liujun&id=100",
        "open-type": "navigate"
      }, [
        vue.createElementVNode("button", { type: "default" }, "01-detail navigate")
      ]),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[3] || (_cache[3] = ($event) => $options.goToDetail04())
      }, "04-detail navigate"),
      vue.createElementVNode("view", { class: "" }, "4.\u9875\u9762\u4F20\u9012\u53C2\u6570(\u9006\u5411)"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.goToDetail05())
      }, "01-detail02 eventchannel"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[5] || (_cache[5] = ($event) => $options.goToDetail06())
      }, "01-detail03 \u4E8B\u4EF6\u603B\u7EBF"),
      vue.createElementVNode("view", { class: "" }, "5.\u9875\u9762\u7684\u751F\u547D\u5468\u671F"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[6] || (_cache[6] = ($event) => $options.goToDetail07())
      }, "01-detail04 Options API"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[7] || (_cache[7] = ($event) => $options.goToDetail08())
      }, "01-detail05 Composition API")
    ]);
  }
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$7], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/home/home.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {};
    },
    onLoad() {
      formatAppLog("log", "at pages/category/category.vue:16", "categroy onLoad");
    },
    onShow() {
      formatAppLog("log", "at pages/category/category.vue:19", "categroy onShow");
    },
    onReady() {
      formatAppLog("log", "at pages/category/category.vue:22", "categroy onReady");
    },
    onHide() {
      formatAppLog("log", "at pages/category/category.vue:25", "categroy onHide");
    },
    onUnload() {
      formatAppLog("log", "at pages/category/category.vue:28", "categroy onUnload");
    },
    onPullDownRefresh() {
      formatAppLog("log", "at pages/category/category.vue:31", "categroy onPullDownRefresh");
    },
    onReachBottom() {
      formatAppLog("log", "at pages/category/category.vue:34", "categroy onReachBottom");
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesCategoryCategory = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$6], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/category/category.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesCartCart = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/cart/cart.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesProfileProfile = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/profile/profile.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    onLoad(options) {
      formatAppLog("log", "at pages/detail01/detail01.vue:15", "\u63A5\u53D7\u5230url\u7684\u53C2\u6570:", options);
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on("acceptDataFormHomePage", (data) => {
        formatAppLog("log", "at pages/detail01/detail01.vue:18", "\u63A5\u53D7\u5230eventChannel\u7684\u53C2\u6570", data);
      });
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesDetail01Detail01 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/detail01/detail01.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {};
    },
    onLoad(options) {
      formatAppLog("log", "at pages/detail02/detail02.vue:18", "\u63A5\u53D7url\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E:", options);
    },
    methods: {
      goBackHome() {
        uni.navigateBack({
          delta: 1
        });
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.emit("acceptDataFormDetail02", {
          data: "\u5C06detail02\u9875\u9762\u7684\u6570\u636E\u4F20\u9012\u7ED9Home\u9875\u9762"
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("navigator", {
        delta: 1,
        "open-type": "navigateBack"
      }, [
        vue.createElementVNode("button", { type: "default" }, "\u8FD4\u56DE(\u7EC4\u4EF6)")
      ]),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.goBackHome && $options.goBackHome(...args))
      }, "\u8FD4\u56DE(API)")
    ]);
  }
  const PagesDetail02Detail02 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/detail02/detail02.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    onLoad(options) {
      formatAppLog("log", "at pages/detail03/detail03.vue:18", "\u63A5\u53D7url\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E:", options);
    },
    methods: {
      goBackHome() {
        uni.navigateBack({
          delta: 1
        });
        uni.$emit("acceptDataFromDetail03", {
          data: {
            desc: "\u8FD9\u4E2A\u5728detail03\u4F20\u9012\u5230Home\u9875\u9762\u7684\u6570\u636E"
          }
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("navigator", {
        delta: 1,
        "open-type": "navigateBack"
      }, [
        vue.createElementVNode("button", { type: "default" }, "\u8FD4\u56DE(\u7EC4\u4EF6)")
      ]),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.goBackHome && $options.goBackHome(...args))
      }, "\u8FD4\u56DE(API)")
    ]);
  }
  const PagesDetail03Detail03 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/detail03/detail03.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        msg: "\u6211\u662Fdata\u5B9A\u4E49\u7684\u6570\u636E"
      };
    },
    onLoad(options) {
      formatAppLog("log", "at pages/detail04/detail04.vue:33", "detail04 onLoad");
    },
    onShow() {
      formatAppLog("log", "at pages/detail04/detail04.vue:36", "detail04 onShow");
      formatAppLog("log", "at pages/detail04/detail04.vue:37", this);
    },
    onReady() {
      formatAppLog("log", "at pages/detail04/detail04.vue:40", "detail04 onReady");
    },
    onHide() {
      formatAppLog("log", "at pages/detail04/detail04.vue:43", "detail04 onHide");
    },
    onUnload() {
      formatAppLog("log", "at pages/detail04/detail04.vue:46", "detail04 onUnload");
    },
    onPullDownRefresh() {
      formatAppLog("log", "at pages/detail04/detail04.vue:49", "detail04 onPullDownRefresh");
      setTimeout(() => {
        uni.stopPullDownRefresh();
      }, 1e3);
    },
    onReachBottom() {
      formatAppLog("log", "at pages/detail04/detail04.vue:56", "detail04 onReachBottom");
    },
    beforeCreate() {
      formatAppLog("log", "at pages/detail04/detail04.vue:60", "detail04 beforeCreate");
    },
    created() {
      formatAppLog("log", "at pages/detail04/detail04.vue:63", "detail04 created");
    },
    beforeMount() {
      formatAppLog("log", "at pages/detail04/detail04.vue:66", "detail04 beforeMount");
    },
    mounted() {
      formatAppLog("log", "at pages/detail04/detail04.vue:69", "detail04 mounted");
    },
    beforeDestroy() {
      formatAppLog("log", "at pages/detail04/detail04.vue:72", "detail04 beforeDestroy");
    },
    destroyed() {
      formatAppLog("log", "at pages/detail04/detail04.vue:75", "detail04 destroyed");
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item1"),
      vue.createElementVNode("view", { class: "item1" }, "item8"),
      vue.createElementVNode("view", { class: "item1" }, "item9"),
      vue.createElementVNode("view", { class: "item1" }, "item10")
    ]);
  }
  const PagesDetail04Detail04 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/detail04/detail04.vue"]]);
  const _sfc_main$1 = {
    __name: "detail05",
    setup(__props) {
      onLoad(() => {
        formatAppLog("log", "at pages/detail05/detail05.vue:38", "detail05 onLoad");
      });
      onShow(() => {
        formatAppLog("log", "at pages/detail05/detail05.vue:42", "detail05 onShow");
      });
      onReady(() => {
        formatAppLog("log", "at pages/detail05/detail05.vue:46", "detail05 onReady");
      });
      onHide(() => {
        formatAppLog("log", "at pages/detail05/detail05.vue:50", "detail05 onHide");
      });
      onUnload(() => {
        formatAppLog("log", "at pages/detail05/detail05.vue:54", "detail05 onUnload");
      });
      onPullDownRefresh(() => {
        formatAppLog("log", "at pages/detail05/detail05.vue:58", "detail05 onPullDownRefresh");
        setTimeout(() => {
          uni.stopPullDownRefresh();
        }, 1e3);
      });
      onReachBottom(() => {
        formatAppLog("log", "at pages/detail05/detail05.vue:65", "detail05 onReachBottom");
      });
      vue.onBeforeMount(() => {
        formatAppLog("log", "at pages/detail05/detail05.vue:70", "detail05 onBeforeMount");
      });
      vue.onMounted(() => {
        formatAppLog("log", "at pages/detail05/detail05.vue:73", "detail05 onMounted");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item1"),
          vue.createElementVNode("view", { class: "item1" }, "item8"),
          vue.createElementVNode("view", { class: "item1" }, "item9"),
          vue.createElementVNode("view", { class: "item1" }, "item10")
        ]);
      };
    }
  };
  const PagesDetail05Detail05 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/pages/detail05/detail05.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/category/category", PagesCategoryCategory);
  __definePage("pages/cart/cart", PagesCartCart);
  __definePage("pages/profile/profile", PagesProfileProfile);
  __definePage("pages/detail01/detail01", PagesDetail01Detail01);
  __definePage("pages/detail02/detail02", PagesDetail02Detail02);
  __definePage("pages/detail03/detail03", PagesDetail03Detail03);
  __definePage("pages/detail04/detail04", PagesDetail04Detail04);
  __definePage("pages/detail05/detail05", PagesDetail05Detail05);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/10-pages-uni-app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
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
})(Vue);
