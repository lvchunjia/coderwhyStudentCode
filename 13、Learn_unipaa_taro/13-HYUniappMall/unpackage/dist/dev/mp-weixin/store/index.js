"use strict";
const common_vendor = require("../common/vendor.js");
const store_modules_cart = require("./modules/cart.js");
const store = common_vendor.createStore({
  state: {
    version: "1.0.0",
    projectName: "HYUniappMall"
  },
  modules: {
    cart: store_modules_cart.cart
  }
});
exports.store = store;
