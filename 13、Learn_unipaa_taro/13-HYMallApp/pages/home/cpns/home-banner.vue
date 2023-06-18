<template>
	<swiper class="banner" :indicator-dots="true" indicator-active-color="#ff8198" :autoplay="true" :interval="3000" :duration="1000">
		<template v-for="(item) in banners" :key="item">
			<swiper-item @click="handleItemClick(item)">
				<image class="image" :src="item.image" mode="widthFix"></image>
			</swiper-item>	
		</template>
	</swiper>
</template>

<script setup>
	const props = defineProps({
		banners: {
			type: Array,
			default: () => []
		}
	})
	const emit = defineEmits(['bannerItemClick'])
	function handleItemClick(item) {
		emit('bannerItemClick', item.link)
	}
</script>

<style lang="scss">
	// 150 px — 300rpx
	.banner{
		.image{
			width: 100%;
		}
	}
</style>