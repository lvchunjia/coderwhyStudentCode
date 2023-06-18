<template>
  <view :class="['hy-btn', type]" @click="handleBtnClick">
    <slot></slot>
  </view>
</template>

<script setup>
// 是组件的生命周期
import { onBeforeMount, onMounted, ref, watch, computed } from 'vue';
// 页面的生命周期
import { onLoad, onShow, onReady } from '@dcloudio/uni-app';

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  }
});

const emit = defineEmits(['onBtnClick']);

function handleBtnClick() {
  emit('onBtnClick');
}
// 1.是组件的生命周期
onBeforeMount(() => {
  console.log('hy-buton-setup onBeforeMount');
});

onMounted(() => {
  console.log('hy-buton-setup onMounted');
});

// 2.页面的生命周期
// 执行
onLoad(() => {
  console.log('hy-buton-setup onLoad');
});
// 执行
onShow(() => {
  console.log('hy-buton-setup onShow');
});
// 这个在App H5没有执行, weapp有执行
onReady(() => {
  console.log('hy-buton-setup onReady');
});
</script>

<style lang="scss">
.hy-btn {
  padding: 20rpx 0;
  font-size: 40rpx;
  color: white;
  text-align: center;
  border-radius: 10rpx;
}

.default {
  background-color: #cdcdcd;
}

.primary {
  background-color: green;
}

.info {
  background-color: orange;
}
</style>
