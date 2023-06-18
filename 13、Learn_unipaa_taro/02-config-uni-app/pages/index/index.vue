<template>
  <view class="content">
    <view class="title name box">1.全局变量</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  // 页面的生命周期
  onLoad() {
    // console.log(this); // Vue的实例

    // 1.拿到全局数据 globalData
    const app = getApp(); // weapp  h5  app
    console.log("globalData=", app.globalData);

    // 2.拿到当前页面的路由
    const pages = getCurrentPages();
    console.log(pages[pages.length - 1].route);
  },
  // 属于的Vue组件的生命周期
  beforeCreate() {},
  created() {},
  methods: {},
};
</script>

<style lang="scss">
// @import '@/static/css/base.scss';

// 默认就是局部样式
.box {
  border-radius: $radius;
}

page {
  // height: auto;
}
</style>
