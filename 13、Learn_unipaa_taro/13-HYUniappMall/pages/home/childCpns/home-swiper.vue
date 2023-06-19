<template>
	<swiper class="banner"
					indicator-dots 
					indicator-active-color="#ff7555"
					circular>
		<template v-for="(item, index) in banners" :key="item.acm">
			<swiper-item class="banner-item">
				<image class="image" :src="item.image" mode="widthFix"></image>
			</swiper-item>
		</template>
	</swiper>
</template>

<script>
	import { ref } from 'vue'
	
	export default {
		props: {
			banners: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="scss">
	.banner {
		.banner-item {
			.image {
				width: 100%;
			}
		}
	}
</style>
