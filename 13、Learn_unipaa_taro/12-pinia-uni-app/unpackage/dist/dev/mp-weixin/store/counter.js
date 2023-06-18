"use strict";
const common_vendor = require("../common/vendor.js");
const useCounterStore = common_vendor.defineStore("counter", {
  state: () => {
    return {
      count: 800
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
});
exports.useCounterStore = useCounterStore;
