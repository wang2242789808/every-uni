<template>
	<view>
		<view class="box">
			<!-- 搜索 -->
			<search></search>
			<!-- 分类 -->
			<view class="cate-box">
				<view :class="{'cate-item':true,active:currentCate==item.cate}" v-for="item,index in cateNav" :key="index" @click="changeCate(item.cate)">
					{{item.title}}
				</view>
				
			</view>
		</view>

		<!-- 内容 -->
		<askDataList :askList="askList"></askDataList>
	</view>
</template>

<script>
	import {
		getAskList
	} from '@/utils/http.js'
	import {
		onReachBottom,
		onPageScroll
	} from '@dcloudio/uni-app'
	import {
		reactive,
		toRefs
	} from "vue";
	export default {
		setup() {
			const data = reactive({
				askList: [], //问答数据
				current: 1,
				size: 10,
				cateNav:[
					{
						title:'热门回答',
						cate:'hot'
					},
					{
						title:'最新问题',
						cate:'new'
					},
					{
						title:'等待回答',
						cate:'wait'
					}
				],
				currentCate:'hot'
			})
			// 获取全部问答数据
			getAskList(data.currentCate,data.current, data.size).then(res => {
				console.log(res);
				if (data.current == 1) {
					data.askList = res.data.records
				} else {
					daa.askList = [...data.askList, ...res.data.records]
				}

			})
			// 切换分类
			const changeCate=(val)=>{
				console.log(val);
				data.currentCate=val
				getAskList(data.currentCate,data.current, data.size).then(res => {
					console.log(res);
					if (data.current == 1) {
						data.askList = res.data.records
					} else {
						daa.askList = [...data.askList, ...res.data.records]
					}
				
				})
			}
			// 去详情页
			const toAskDetail=(id)=>{
				uni.navigateTo({
					url:`/pages/askDetail/askDetail?id=${id}`
				})
			}
			// 上拉加载
			onReachBottom(() => {
				data.current++
				getAskList(data.current, data.size).then(res => {
					console.log(res);
					if (data.current == 1) {
						data.askList = res.data.records
					} else {
						data.askList = [...data.askList, ...res.data.records]
					}

				})
			})
			return {
				...toRefs(data),
				changeCate,
				toAskDetail
			}
		}
	}
</script>

<style lang="scss">
	.ask-box {
		width: 100%;

		.ask-item {
			width: 100%;
			border-bottom: 1px solid #eee;
			padding: 4%;
			box-sizing: border-box;

			.fir-text {
				font-weight: 700;
				font-size: 35rpx;
			}

			.sec-text {
				display: flex;
				justify-content: space-between;
				margin: 2% 0;
				color: gray;
			}
		}
	}

	.box {
		position: sticky;
		left: 0;
		top: 0;
		z-index: 22;
	}

	.article-box {
		width: 100%;

	}

	.cate-box {
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #e7e7e7;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		border: none;
	
	.cate-item {
			height: 70rpx;
			line-height: 70rpx;
		}
	}

	.active {
		border-bottom: 6rpx solid #077dff;
		color: #077dff;
	}
</style>
