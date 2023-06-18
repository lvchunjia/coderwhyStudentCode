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
(function(vue, shared) {
  "use strict";
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  const ON_READY = "onReady";
  const ON_UNLOAD = "onUnload";
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
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$7 = {
    __name: "home",
    setup(__props) {
      onLoad(() => {
        uni.$on("acceptDataFormDetail03", acceptDataFormDetail03);
      });
      onUnload(() => {
        uni.$off("acceptDataFormDetail03", acceptDataFormDetail03);
      });
      function acceptDataFormDetail03(value) {
        formatAppLog("log", "at pages/home/home.vue:30", "\u63A5\u6536\u5230detail03\u4F20\u9012\u7ED9home\u9875\u9762\u7684\u6570\u636E:", value);
      }
      function goToDetail01() {
        formatAppLog("log", "at pages/home/home.vue:34", "goToDetail01");
        uni.navigateTo({
          url: "/pages/detail01/detail01?name=liujun&id=100",
          success(res) {
            res.eventChannel.emit("acceptDataFormHomePage", {
              data: "\u6211\u662Fhome\u9875\u9762\u4F20\u9012\u7ED9detail01\u7684\u6570\u636E"
            });
          }
        });
      }
      function goToDetail02() {
        uni.navigateTo({
          url: "/pages/detail02/detail02?name=liujun&id=200",
          events: {
            acceptDataFormDetail02(value) {
              formatAppLog("log", "at pages/home/home.vue:50", "\u63A5\u6536\u5230detail02\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E", value);
            }
          }
        });
      }
      function goToDetail03() {
        uni.navigateTo({
          url: "/pages/detail03/detail03?name=liujun&id=300"
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "" }, "1.\u9875\u9762\u4F20\u9012\u6570\u636E(\u6B63\u5411)"),
          vue.createElementVNode("button", {
            type: "default",
            onClick: goToDetail01
          }, "01-detail01 navigate"),
          vue.createElementVNode("view", { class: "" }, "2.\u9875\u9762\u4F20\u9012\u6570\u636E(\u9006\u5411)"),
          vue.createElementVNode("button", {
            type: "default",
            onClick: goToDetail02
          }, "01-detail02 navigate"),
          vue.createElementVNode("view", { class: "" }, "3.\u9875\u9762\u9006\u5411\u4F20\u9012\u6570\u636E(\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF)"),
          vue.createElementVNode("button", {
            type: "default",
            onClick: goToDetail03
          }, "01-detail03 navigate")
        ]);
      };
    }
  };
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/pages/home/home.vue"]]);
  const _sfc_main$6 = {
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
      formatAppLog("log", "at components/hy-button/hy-button.vue:26", "hy-btn beforeCreate");
    },
    created() {
      formatAppLog("log", "at components/hy-button/hy-button.vue:29", "hy-btn created");
      formatAppLog("log", "at components/hy-button/hy-button.vue:30", this);
    },
    mounted() {
      formatAppLog("log", "at components/hy-button/hy-button.vue:33", "hy-btn mounted");
    },
    onLoad() {
      formatAppLog("log", "at components/hy-button/hy-button.vue:37", "hy-btn onLoad");
    },
    onShow() {
      formatAppLog("log", "at components/hy-button/hy-button.vue:40", "hy-btn onShow");
    },
    methods: {
      handleBtnClick() {
        this.$emit("onBtnClick");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["hy-btn", $props.type]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleBtnClick && $options.handleBtnClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 2);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$1], ["__scopeId", "data-v-0365af80"], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/components/hy-button/hy-button.vue"]]);
  const _sfc_main$5 = {
    __name: "hy-button-setup",
    props: {
      type: {
        type: String,
        default: "default"
      }
    },
    emits: ["onBtnClick"],
    setup(__props, { emit }) {
      function handleBtnClick() {
        emit("onBtnClick");
      }
      vue.onBeforeMount(() => {
        formatAppLog("log", "at components/hy-button-setup/hy-button-setup.vue:31", "hy-buton-setup onBeforeMount");
      });
      vue.onMounted(() => {
        formatAppLog("log", "at components/hy-button-setup/hy-button-setup.vue:35", "hy-buton-setup onMounted");
      });
      onLoad(() => {
        formatAppLog("log", "at components/hy-button-setup/hy-button-setup.vue:41", "hy-buton-setup onLoad");
      });
      onShow(() => {
        formatAppLog("log", "at components/hy-button-setup/hy-button-setup.vue:45", "hy-buton-setup onShow");
      });
      onReady(() => {
        formatAppLog("log", "at components/hy-button-setup/hy-button-setup.vue:49", "hy-buton-setup onReady");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["hy-btn", __props.type]),
          onClick: handleBtnClick
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2);
      };
    }
  };
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d11a05ef"], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/components/hy-button-setup/hy-button-setup.vue"]]);
  const TIME_OUT = 6e4;
  const BASE_URL = "http://152.136.185.210:7878/api/hy66";
  class HYRequest {
    request(url, method, data) {
      return new Promise((resolve, reject) => {
        uni.request({
          url: BASE_URL + url,
          method: method || "GET",
          timeout: TIME_OUT,
          data,
          success(res) {
            resolve(res.data);
          },
          fail(err) {
            reject(err);
          }
        });
      });
    }
    get(url, params2) {
      return this.request(url, "GET", params2);
    }
    post(url, data) {
      return this.request(url, "POST", params);
    }
  }
  const hyRequest = new HYRequest();
  const getHomeMutidata = () => {
    return hyRequest.get("/home/multidata", {});
  };
  let _this1 = null;
  let _this2 = null;
  const _sfc_main$4 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
      formatAppLog("log", "at pages/index/index.vue:31", this);
      _this1 = this;
    },
    created() {
      formatAppLog("log", "at pages/index/index.vue:36", this);
      _this2 = this;
    },
    onReady() {
      formatAppLog("log", "at pages/index/index.vue:40", _this1 === _this2);
    },
    methods: {
      fetchData() {
        getHomeMutidata().then((res) => {
          formatAppLog("log", "at pages/index/index.vue:45", "res=>", res);
        });
      },
      setStorage() {
        uni.setStorage({
          key: "userinfo",
          data: {
            name: "liujun",
            id: "100100",
            token: "asdfxdfgjksiada"
          }
        });
        uni.setStorageSync("token", "bssdsfsdfccvd");
      },
      getStorage() {
        uni.getStorage({
          key: "userinfo",
          success(res) {
            formatAppLog("log", "at pages/index/index.vue:64", res.data);
          }
        });
        const token = uni.getStorageSync("token");
        formatAppLog("log", "at pages/index/index.vue:68", token);
      },
      onBtnClick() {
        formatAppLog("log", "at pages/index/index.vue:71", "hy-btn click");
      },
      onBtnSetupClick() {
        formatAppLog("log", "at pages/index/index.vue:74", "hy-btn-setup click");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_hy_button = resolveEasycom(vue.resolveDynamicComponent("hy-button"), __easycom_0);
    const _component_hy_button_setup = resolveEasycom(vue.resolveDynamicComponent("hy-button-setup"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "" }, "1.\u5C01\u88C5\u7F51\u7EDC\u8BF7\u6C42"),
      vue.createElementVNode("button", {
        type: "primary",
        onClick: _cache[0] || (_cache[0] = ($event) => $options.fetchData())
      }, "\u53D1\u8D77\u4E00\u4E2Aget\u8BF7\u6C42"),
      vue.createElementVNode("view", { class: "" }, "2.\u6570\u636E\u7684\u5B58\u50A8"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.setStorage && $options.setStorage(...args))
      }, "setStorage"),
      vue.createElementVNode("button", {
        type: "default",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.getStorage && $options.getStorage(...args))
      }, "getStorage"),
      vue.createElementVNode("view", { class: "" }, "3.easycom\u7EC4\u4EF6\u89C4\u8303"),
      vue.createVNode(_component_hy_button, {
        type: "primary",
        onOnBtnClick: $options.onBtnClick
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("HYButon")
        ]),
        _: 1
      }, 8, ["onOnBtnClick"]),
      vue.createVNode(_component_hy_button_setup, {
        type: "info",
        onOnBtnClick: $options.onBtnSetupClick
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(" HYButtonSetup ")
        ]),
        _: 1
      }, 8, ["onOnBtnClick"])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render], ["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/pages/index/index.vue"]]);
  const _sfc_main$3 = {
    __name: "detail01",
    props: {
      name: String,
      id: String
    },
    setup(__props) {
      const props = __props;
      const $instance = vue.ref(vue.getCurrentInstance().proxy);
      formatAppLog("log", "at pages/detail01/detail01.vue:21", "\u5728props\u4E2D\u63A5\u53D7home\u4F20\u9012\u8FC7\u6765url\u7684\u6570\u636E:", props.name, props.id);
      onLoad((options) => {
        formatAppLog("log", "at pages/detail01/detail01.vue:25", "\u63A5\u53D7\u5230home\u4F20\u9012\u8FC7\u6765url\u7684\u6570\u636E:", options);
        const eventChannel = $instance.value.getOpenerEventChannel();
        eventChannel.on("acceptDataFormHomePage", (value) => {
          formatAppLog("log", "at pages/detail01/detail01.vue:29", "\u63A5\u6536\u5230home\u9875\u9762eventchannel\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E:", value);
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view");
      };
    }
  };
  const PagesDetail01Detail01 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/pages/detail01/detail01.vue"]]);
  const _sfc_main$2 = {
    __name: "detail02",
    setup(__props) {
      const $instance = vue.ref(vue.getCurrentInstance().proxy);
      function goBack() {
        uni.navigateBack({
          delta: 1
        });
        const eventChannel = $instance.value.getOpenerEventChannel();
        eventChannel.emit("acceptDataFormDetail02", {
          data: "\u8FD9\u91CC\u662Fdetail02\u4F20\u9012\u7ED9Home\u9875\u9762\u7684\u6570\u636E"
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("button", {
            type: "default",
            onClick: goBack
          }, "\u8FD4\u56DE")
        ]);
      };
    }
  };
  const PagesDetail02Detail02 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/pages/detail02/detail02.vue"]]);
  const _sfc_main$1 = {
    __name: "detail03",
    setup(__props) {
      function goBack() {
        uni.navigateBack({
          delta: 1
        });
        uni.$emit("acceptDataFormDetail03", {
          data: "\u8FD9\u91CC\u7684\u6570\u636E\u662F\u4ECEdetail03\u4F20\u9012\u5230home\u9875\u9762"
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("button", {
            type: "default",
            onClick: goBack
          }, "\u8FD4\u56DE")
        ]);
      };
    }
  };
  const PagesDetail03Detail03 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/pages/detail03/detail03.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/detail01/detail01", PagesDetail01Detail01);
  __definePage("pages/detail02/detail02", PagesDetail02Detail02);
  __definePage("pages/detail03/detail03", PagesDetail03Detail03);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/\u5171\u4EAB\u7ED9\u5B66\u751F\u6587\u4EF6\u5939/\u4E0A\u8BFE\u8D44\u6599/13_\u9636\u6BB5\u5341\u4E09-\u8DE8\u5E73\u53F0\u5F00\u53D1uni-app\u548CTaro/code/01-uni-app/11-api-uni-app/App.vue"]]);
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
})(Vue, uni.VueShared);
