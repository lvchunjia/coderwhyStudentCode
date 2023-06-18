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
  const cvy = "/static/images/cvy.png";
  const _imports_0 = "/static/images/banner/banner01.jpeg";
  const _imports_1 = "/static/images/banner/banner02.jpeg";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {
    data() {
      return {
        title: "Hello",
        cvy
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(" 直接写div是可以,但是不推荐, 并且这个div标签是不跨平台组件 "),
      vue.createCommentVNode(" <div>我是一个div</div> "),
      vue.createElementVNode("view", { class: "title" }, "1.我是一个View组件(是一个跨平台组件)"),
      vue.createElementVNode("text", { class: "text" }, "2.我是一个Text组件"),
      vue.createElementVNode("button", { type: "default" }, "3.我是一个button"),
      vue.createCommentVNode(" primary 是一个主题色 \r\n		 1. 自己封装一个button\r\n		 2. 重写button的样式( 条件编译 )		\r\n		"),
      vue.createElementVNode("button", { type: "primary" }, "4.我是一个button"),
      vue.createCommentVNode(" 图片 "),
      vue.createCommentVNode(" 相对路径 "),
      vue.createCommentVNode(' <image src="../../static/images/cvy.png" mode="widthFix"></image> '),
      vue.createCommentVNode(" 绝对路径 "),
      vue.createCommentVNode(' <image src="@/static/images/cvy.png" mode="widthFix"></image> '),
      vue.createCommentVNode(" 导入的图片 "),
      vue.createElementVNode("image", {
        class: "image",
        src: $data.cvy,
        mode: "widthFix"
      }, null, 8, ["src"]),
      vue.createCommentVNode(" base64 字符串 "),
      vue.createElementVNode("scroll-view", {
        "scroll-y": "true",
        class: "hy-v-scroll"
      }, [
        vue.createElementVNode("view", { class: "v-item" }, "item1"),
        vue.createElementVNode("view", { class: "v-item" }, "item2"),
        vue.createElementVNode("view", { class: "v-item" }, "item3"),
        vue.createElementVNode("view", { class: "v-item" }, "item4"),
        vue.createElementVNode("view", { class: "v-item" }, "item5"),
        vue.createElementVNode("view", { class: "v-item" }, "item6"),
        vue.createElementVNode("view", { class: "v-item" }, "item7")
      ]),
      vue.createElementVNode("scroll-view", {
        "scroll-x": "true",
        class: "hy-h-scroll",
        "show-scrollbar": false
      }, [
        vue.createElementVNode("view", { class: "h-item" }, "item1"),
        vue.createElementVNode("view", { class: "h-item" }, "item2"),
        vue.createElementVNode("view", { class: "h-item" }, "item3"),
        vue.createElementVNode("view", { class: "h-item" }, "item4"),
        vue.createElementVNode("view", { class: "h-item" }, "item5"),
        vue.createElementVNode("view", { class: "h-item" }, "item6"),
        vue.createElementVNode("view", { class: "h-item" }, "item7")
      ]),
      vue.createElementVNode("swiper", {
        class: "hy-swiper",
        "indicator-dots": true,
        "indicator-active-color": "#ff8198",
        "indicator-color": "#f8f8f8",
        autoplay: true,
        interval: 3e3,
        duration: 1e3
      }, [
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("image", {
            class: "swiper-image",
            src: _imports_0
          })
        ]),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("image", {
            class: "swiper-image",
            src: _imports_1
          })
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "F:/student/coderwhyStudentCode/13、Learn_unipaa_taro/03-cpns-uni-app/pages/index/index.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "style-page" }, [
      vue.createElementVNode("view", { class: "bg-view" }),
      vue.createElementVNode("text", { class: "text iconfont icon-shouye" }),
      vue.createElementVNode("text", { class: "text iconfont icon-Video" })
    ]);
  }
  const PagesStyleStyle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/student/coderwhyStudentCode/13、Learn_unipaa_taro/03-cpns-uni-app/pages/style/style.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/style/style", PagesStyleStyle);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
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
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/student/coderwhyStudentCode/13、Learn_unipaa_taro/03-cpns-uni-app/App.vue"]]);
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
