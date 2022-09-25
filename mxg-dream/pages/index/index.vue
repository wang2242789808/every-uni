<template>
	<view class="content">
		
		<search class="search" :Background="Background"></search>
		<!-- 回到顶部 -->
		<image class="top-pic" src="../../static/images/top.png" mode="" v-show="flag" @click="touchTop"></image>
		<!-- 轮播图 -->
		<banner @swiperItem="swiperItem"></banner>
		<!-- 分类搜索 -->
		<view class="cate-box">
			<view v-for="item in cateNav.slice(0,7)" :key="item.id"
				@click="toContentView(item.name)">{{item.name}}</view>
			<view @click="toContentView('全部分类')">
				全部分类
			</view>
		</view>
		<view class="list-container">
			<!-- 热门推荐 -->
			<view class="header">
				<view class="left">
					<view class="left-text">
						热门推荐
					</view>
					<view class="hot-text">
						HOT
					</view>
				</view>
				<view class="right">
					全部 >
				</view>
			</view>
			<!-- 商品列表 -->
			<scroll-view scroll-x="true">
				<view>
					<courseView :hotList="hotList"></courseView>
				</view>
			</scroll-view>

			<!-- 近期上新 -->
			<view class="header">
				<view class="left">
					<view class="left-text">
						近期上新
					</view>
					<view class="hot-text">
						NEW
					</view>
				</view>
				<view class="right">
					全部 >
				</view>
			</view>
			<!-- 商品列表 -->
			<scroll-view scroll-x="true" :show-scrollbar="false">
				<view class="content-box">
					<newCourse :newList="newList"></newCourse>
				</view>
			</scroll-view>

			<!-- 免费精选 -->
			<view class="header">
				<view class="left">
					<view class="left-text">
						免费精选
					</view>
					<view class="hot-text">
						FREE
					</view>
				</view>
				<view class="right">
					全部 >
				</view>
			</view>
			<!-- 商品列表 -->
			<courseView :hotList="freeList"></courseView>
			<!-- 付费精品 -->
			<view class="header">
				<view class="left">
					<view class="left-text">
						付费精品
					</view>
					<view class="hot-text">
						NICE
					</view>
				</view>
				<view class="right">
					全部 >
				</view>
			</view>
			<!-- 商品列表 -->
			<courseView :hotList="niceList"></courseView>
		</view>
		
	</view>
</template>

<script>
	import {
		getCateNav,
		getHotList,
		getNewList,
		getFreeList,
		getNiceList
	} from '@/utils/http.js'
	import {
		reactive,
		toRefs
	} from "vue";
	import {
		onReachBottom,
		onPageScroll
	} from '@dcloudio/uni-app'
	export default {
		setup() {
			const data = reactive({
				cateNav: [], //分类导航
				hotList: [], //热门推荐
				newList: [], //近期上新
				freeList: [], //免费推荐
				niceList: [], //付费推荐
				current: 1,
				size: 10,
				flag:false,
				scroll:0,
				Background: "#006C00"
			})
			// 分类导航栏
			getCateNav().then(res => {
				// console.log(res);
				if (res.code == 20000) {
					data.cateNav = res.data
				}
			})
			// 热门推荐数据
			getHotList().then(res => {
				// console.log(res);
				if (res.code == 20000) {
					data.hotList = res.data.records
				}
			})
			// 近期上新数据
			getNewList().then(res => {
				// console.log(res);
				if (res.code == 20000) {
					data.newList = res.data.records
				}
			})
			// 免费推荐数据
			getFreeList().then(res => {
				// console.log(res);
				if (res.code == 20000) {
					data.freeList = res.data.records
				}
			})
			// 付费推荐数据
			getNiceList(data.current, data.size).then(res => {
				// console.log(data.current, data.size);
				// console.log(res);
				if (res.code == 20000) {
					if (data.current == 1) {
						data.niceList = res.data.records
					} else {
						data.niceList = [...data.niceList, ...res.data.records]
					}

				}
			})
			// 上拉加载
			onReachBottom(() => {
				data.current++
				getNiceList(data.current, data.size).then(res => {
					// console.log(data.current, data.size);
					// console.log(res);
					if (res.code == 20000) {
						if (data.current == 1) {
							data.niceList = res.data.records
						} else {
							data.niceList = [...data.niceList, ...res.data.records]
						}

					}
				})
				console.log(data.current);
			});
			// 监听页面滚动
			onPageScroll((e) => {
				// console.log(e.scrollTop);
				data.scroll=e.scrollTop
				if(e.scrollTop>=1200){
					data.flag=true
				}else{
					data.flag=false
				}
			})
			// 回到顶部
			const touchTop=()=>{
				uni.pageScrollTo({
					scrollTop: 0
				})
			}
			// 去课程页面
			const toContentView=(name)=>{
				console.log(name);
				uni.navigateTo({
					url:`/pages/contentView/contentView?name=${name}`
				})
			}
			const swiperItem = (bgc) => {
				data.Background = bgc
			}
			return {
				...toRefs(data),
				touchTop,
				toContentView,
				swiperItem
			}
		},
	}
</script>

<style lang="scss" scoped>
	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		color: transparent;
	}

	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 2% 4%;
		box-sizing: border-box;

		.left {
			view {
				float: left;
			}

			.left-text {
				font-size: 40rpx;
				color: #474a49;
			}

			.hot-text {
				font-size: 24rpx;
				text-align: center;
				width: 80rpx;
				height: 40rpx;
				line-height: 40rpx;
				background-image: linear-gradient(to right, #fb6731, #fa1b11);
				color: white;
				border-radius: 20rpx;
				border-bottom-left-radius: 5rpx;

			}
		}

		.right {
			color: #7a7a7a;
		}
	}

	.content-box {
		margin: 30rpx 0;
	}

	// 分类区域
	.list-container {
		.content-box {
			display: flex;
			width: 266vh;
		}
	}

	.header {
		margin-top: 20rpx;
	}

	.cate-box {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		align-items: center;
		box-sizing: border-box;
		margin: 5% 0;

		view {
			width: 23%;
			margin: 1%;
			height: 70rpx;
			line-height: 70rpx;
			border-radius: 12rpx;
			text-align: center;
			font-size: 26rpx;
			background-color: #f8f9fb;
		}
	}

	.content {
		width: 100%;
		position: relative;
	}
	.top-pic {
		position: fixed;
		bottom: 15%;
		right: 5%;
		width: 100rpx;
		height: 100rpx;
		z-index: 33;
	}

	.search {
		position: sticky;
		top: 0;
		z-index: 1;
	}
</style>
