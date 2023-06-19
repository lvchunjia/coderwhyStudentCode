<template>
  <home-swiper :banners="banners"></home-swiper>
  <home-recommend :recommends="recommends"></home-recommend>
  <home-popular></home-popular>
  <tab-control
    class="tab-control"
    :titles="['流行', '新款', '精选']"
    @tabClick="handleTabClick"
  ></tab-control>
  <view class="goods-list">
    <template v-for="(item, index) in goodsList[currentType].list" :key="item.iid">
      <view class="item">
        <goods-list-item :itemInfo="item" @itemClick="handleItemClick"></goods-list-item>
      </view>
    </template>
  </view>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import { onReachBottom, onShow } from '@dcloudio/uni-app';

import { getHomeMultidata, getHomeData } from '../../service/home.js';

import HomeSwiper from './childCpns/home-swiper.vue';
import HomeRecommend from './childCpns/home-recommend.vue';
import HomePopular from './childCpns/home-popular.vue';
import TabControl from '@/components/tab-control/index.vue';
import GoodsListItem from '@/components/goods-list-item/index.vue';

export default {
  components: {
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodsListItem
  },
  setup() {
    const banners = ref([]);
    const recommends = ref([]);
    const titles = ref(['']);

    const types = ['pop', 'new', 'sell'];
    const goodsListOrigin = {};
    types.forEach((type) => {
      goodsListOrigin[type] = { page: 1, list: [] };
    });
    const goodsList = reactive(goodsListOrigin);
    const currentType = ref('pop');

    onMounted(() => {
      getHomeMultidata().then((res) => {
        banners.value = res.data.banner.list;
        recommends.value = res.data.recommend.list;
      });

      getHomeDataAction('pop', 1);
      getHomeDataAction('new', 1);
      getHomeDataAction('sell', 1);
    });

    onReachBottom(() => {
      getHomeDataAction(currentType.value, goodsList[currentType.value].page);
    });

    const handleTabClick = (index) => {
      currentType.value = types[index];
    };

    const handleItemClick = (id) => {
      uni.navigateTo({
        url: '/pages/detail/index?id=' + id,
        fail: (err) => {
          console.log(err);
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
</script>

<style lang="scss">
// 小程序的page高度auto，其它的为100%, 超过需要出现滚动条
page {
  /* #ifdef MP-WEIXIN */
  height: auto;
  /* #endif */
  overflow: auto;
}
.tab-control {
  position: sticky;
  top: 0rpx;
  z-index: 100;
}

.goods-list {
  @include normalFlex;
  flex-wrap: wrap;

  padding: 16rpx;

  .item {
    width: 48%;
  }
}
</style>
