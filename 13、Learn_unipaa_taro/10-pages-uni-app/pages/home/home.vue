<template>
	<view class="content">
		<view class="">1.路由(组件)</view>
		<navigator url="/pages/detail01/detail01" open-type="navigate">
			<button type="default">01-detail navigate</button>
		</navigator>

		<navigator url="/pages/detail01/detail01" open-type="redirect">
			<button type="default">02-detail redirect</button>
		</navigator>

		<navigator url="/pages/category/category" open-type="switchTab">
			<button type="default">03-category</button>
		</navigator>

		<view class="">2.路由(API)</view>
		<button type="default" @click="goToDetail01()">04-detail navigate</button>
		<button type="default" @click="goToDetail02()">04-detail redirect</button>
		<button type="default" @click="goToDetail03()">04-detail switchTab</button>

		<view class="">3.页面传递参数(正向)</view>
		<navigator url="/pages/detail01/detail01?name=liujun&id=100" open-type="navigate">
			<button type="default">01-detail navigate</button>
		</navigator>
		<button type="default" @click="goToDetail04()">04-detail navigate</button>
		<view class="">4.页面传递参数(逆向)</view>
		<button type="default" @click="goToDetail05()">01-detail02 eventchannel</button>
		<button type="default" @click="goToDetail06()">01-detail03 事件总线</button>

		<view class="">5.页面的生命周期</view>
		<button type="default" @click="goToDetail07()">01-detail04 Options API</button>
		<button type="default" @click="goToDetail08()">01-detail05 Composition API</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		// 1.页面的生命周期
		onLoad() {
			console.log('home onLoad');
			// 通过事件总线在拿到详情传递回来的数据
			uni.$on('acceptDataFromDetail03', this.acceptDataFromDetail03)
		},
		onShow() {
			console.log('home onShow');
		},
		onReady() {
			console.log('home onReady');
		},
		onHide() {
			console.log('home onHide');
		},
		onUnload() {
			console.log('home onUnload');
			uni.$off('acceptDataFromDetail03', this.acceptDataFromDetail03)
		},
		onPullDownRefresh() {
			console.log('home onPullDownRefresh');
		},
		onReachBottom() {
			console.log('home onReachBottom');
		},


		// 2.组件的生命周期
		beforeCreate() {

		},
		created() {

		},
		methods: {
			acceptDataFromDetail03(value) {
				console.log('这是从detail03传递过来的数据:', value);
			},
			goToDetail01() {
				uni.navigateTo({
					url: "/pages/detail01/detail01"
				})
			},
			goToDetail02() {
				uni.redirectTo({
					url: "/pages/detail01/detail01"
				})
			},
			goToDetail03() {
				uni.switchTab({
					url: "/pages/category/category"
				})
			},
			goToDetail04() {
				uni.navigateTo({
					url: "/pages/detail01/detail01?name=liujun&id=200",
					success(res) {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('acceptDataFormHomePage', {
							data: '我是从Home Page 传递过来的数据',
						})
					}
				})
			},
			goToDetail05() {
				uni.navigateTo({
					url: "/pages/detail02/detail02?name=liujun&id=400",
					events: {
						acceptDataFormDetail02(data) {
							console.log("home page 拿到detail02传递过来的数据:", data);
						}
					}
				})
			},
			goToDetail06() {
				uni.navigateTo({
					url: '/pages/detail03/detail03'
				})
			},
			goToDetail07() {
				uni.navigateTo({
					url: '/pages/detail04/detail04'
				})
			},
			goToDetail08() {
				uni.navigateTo({
					url: '/pages/detail05/detail05'
				})
			}
		}
	}
</script>

<style>

</style>