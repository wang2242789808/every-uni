<template>
	<view>
		<view class="top">
			<image src="../../static/images/back.png" mode="" @click="back"></image>
			<p>{{articleDetailList.title}}</p>
		</view>
		<view class="fir-box">
			<view class="fir-item" v-for="item in articleDetailList.labelList" :key="item.id">
				{{item.name}}
			</view>
			<view class="fir-item">
				dsifpsh
			</view>
		</view>
		<view class="text">
			不是覅评委股票v和【为【呢哦v给
		</view>
		<view class="pic-box">
			<view class="pic">
				<image :src="articleDetailList.userImage" mode=""></image>
			</view>
			<span>{{articleDetailList.nickName}}</span> · <span>{{articleDetailList.updateDate}}</span> ·
			<span>{{articleDetailList.viewCount}}人阅读</span>
		</view>

		<div class="content" v-html="articleDetailList.htmlContent"></div>
		<!-- 评论-->

		<view class="bottom">
			<p class="hot-text">热门评论</p>

			<view class="ask-item" v-for="item in articleAsk" :key="item.id">
				<view class="pic-left">
					<image :src="item.userImage" mode="" v-if="item.userImage"></image>
					<image src="../../static/tab/my.png" mode="" v-else></image>
				</view>
				<view class="txt-right">
					<p class="fir-name"><span>{{item.nickName}}</span><span>{{item.createDate}}</span></p>
					<p>{{item.content}}</p>
				</view>
			</view>
		</view>
		<view class="bottom-ipt">
			<input type="text" placeholder="有何高见,展开讲讲......">
			<span>提交</span>
		</view>


	</view>
</template>

<script>
	import {
		getArticleDetail,
		getArticleAsk
	} from '@/utils/http.js'
	import {
		useRoute
	} from 'vue-router'
	import {
		reactive,
		toRefs
	} from "vue"
	export default {
		setup() {
			const data = reactive({
				articleDetailList: [], //文章详情数据
				articleAsk:[] //热门评论
			})
			const route = useRoute()
			// console.log(route.query.id);
			// 获取阅读详情
			getArticleDetail(route.query.id).then(res => {
				// console.log(res);
				data.articleDetailList = res.data
			})
			// 获取热门评论
			getArticleAsk(route.query.id).then(res =>{
				console.log(res);
				data.articleAsk=res.data
			})
			const back=()=>{
				uni.navigateBack()
				
			}
			return {
				...toRefs(data),
				back
			}
		}
	}
</script>

<style lang="scss">
	.bottom {
		width: 100%;
		padding: 2%;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;
		.hot-text{
			border-left: 3px solid #345dc2;
			padding-left: 5%;
		}
		.ask-item{
			width: 100%;
			display: flex;
			margin: 4% 0;
			.pic-left{
				width: 14%;
				image{
					width: 70rpx;
					height: 70rpx;
					border-radius: 50%;
				}
			}
			.txt-right{
				flex: 1;
				.fir-name{
					width: 100%;
					display: flex;
					justify-content: space-between;
					color: gray;
					font-size: 26rpx
				}
			}
		}
		.hot-text {
			font-weight: 700;
			font-size: 36rpx;
		}
	}

	.bottom-ipt {
		position: sticky;
		bottom: 0;
		left: 0;
		background-color: white;
		padding: 4% 2%;
		box-sizing: border-box;
		display: flex;
		color: gray;

		input {
			width: 80%;
			height: 70rpx;
			border-radius: 36rpx;
			background-color: #f8f9fb;
			padding-left: 4%;
			font-size: 30rpx
		}

		span {
			width: 18%;
			margin-left: 2%;
			height: 70rpx;
			line-height: 70rpx;
			border-radius: 10rpx;
			display: inline-block;
			text-align: center;
			background-color: #f8f9fb;
			font-size: 30rpx;
		}
	}

	.content {
		padding: 4%;
		box-sizing: border-box;
		margin: 3% 0;
		border-bottom: 20rpx solid #eee;
	}

	.title {
		font-weight: 600;
		font-size: 50rpx;
		margin: 3% 2%;
	}

	.text {
		font-size: 40rpx;
		font-weight: 600;
		padding: 2%;
	}

	.pic-box {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0 2%;

		span:nth-of-type(1) {
			font-size: 30rpx;
			color: black;
		}

		span {
			color: gray;
			font-size: 26rpx;
			margin: 0 10rpx;
		}

		.pic {
			width: 60rpx;
			height: 60rpx;

			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
	}

	.fir-box {
		width: 100%;
		padding: 3%;
		box-sizing: border-box;

		.fir-item {
			border: 1px solid #17a6ff;
			color: #17a6ff;
			display: inline-block;
			font-size: 26rpx;
			padding: 1% 2%;
			box-sizing: border-box;
			border-radius: 30rpx;
			margin-right: 2%;
		}
	}

	.top {
		width: 100%;
		display: flex;
		padding: 4%;
		box-sizing: border-box;
		align-items: center;
		font-size: 30rpx;
		background-color: white;
		position: sticky;
		top: 0;
		left: 0;
		image{
			width: 40rpx;
			height: 40rpx;
		}
		p {
			margin-left: 10%;
			font-weight: 600;

		}
	}
</style>
