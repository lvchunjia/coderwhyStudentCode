<template>
  <view class="content">
    <view class="">1.封装网络请求</view>
    <button type="primary" @click="fetchData()">发起一个get请求</button>
    <view class="">2.数据的存储</view>
    <button type="default" @click="setStorage">setStorage</button>
    <button type="default" @click="getStorage">getStorage</button>

    <view class="">3.easycom组件规范</view>
    <hy-button type="primary" @onBtnClick="onBtnClick">HYButon</hy-button>
    <hy-button-setup type="info" @onBtnClick="onBtnSetupClick">
      HYButtonSetup
    </hy-button-setup>
    <view class="">{{homeData}}</view>
  </view>
</template>

<script>
  import {
    getHomeMutidata
  } from '@/service/home.js'
  let _this1 = null
  let _this2 = null
  export default {
    data() {
      return {
        title: 'Hello',
        homeData: ''
      }
    },
    // 1.页面的生命周期
    onLoad() {
      console.log(this);
      _this1 = this
    },
    // 2.组件的生命周期
    created() {
      console.log(this);
      _this2 = this
    },
    onReady() {
      console.log(_this1 === _this2); // true
    },
    methods: {
      fetchData() {
        getHomeMutidata().then((res) => {
          console.log('res=>', res);
          this.homeData = res.data
        })
      },
      setStorage() {
        // 将数据存到本地
        uni.setStorage({
          key: 'userinfo',
          data: {
            name: 'liujun',
            id: '100100',
            token: 'asdfxdfgjksiada'
          }
        })
        uni.setStorageSync('token', 'bssdsfsdfccvd')
      },
      getStorage() {
        uni.getStorage({
          key: 'userinfo',
          success(res) {
            console.log(res.data);
          }
        })
        const token = uni.getStorageSync('token')
        console.log(token);
      },
      onBtnClick() {
        console.log('hy-btn click');
      },
      onBtnSetupClick() {
        console.log('hy-btn-setup click');
      },
    }
  }
</script>

<style>

</style>