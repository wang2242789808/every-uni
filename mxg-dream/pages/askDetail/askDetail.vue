<template>
	<view>
		<view class="fir-box">
			<view class="fir-item" v-for="item in askDetailList.labelList" :key="item.id">
				{{item.name}}
			</view>

		</view>
		<view class="text">
			不是覅评委股票v和【为【呢哦v给
		</view>
		<view class="pic-box">
			<view class="pic">
				<image :src="askDetailList.userImage" mode=""></image>
			</view>
			<span>{{askDetailList.nickName}}</span> · <span>{{askDetailList.updateDate}}</span> ·
			<span>{{askDetailList.viewCount}}人阅读</span>
		</view>

		<div class="content" v-html="askDetailList.htmlContent"></div>
		<!-- 评论-->

		<view class="bottom">
			<p class="hot-text">1个回答</p>

			<view class="ask-item" v-for="item in askQuestion" :key="item.id">
				<view class="pic-left">
					<image :src="item.userImage" mode="" v-if="item.userImage"></image>
					<image src="../../static/tab/my.png" mode="" v-else></image>
				</view>
				<view class="txt-right">
					<p class="fir-name"><span>{{item.nickName}}</span><span>{{item.createDate}}</span></p>
					<p>{{item.mdContent}}</p>
				</view>
			</view>
		</view>

		<!-- 底部 -->
		<view class="position-ask">
			<view class="left">
				<p>
					<image class="picone" src="../../static/images/love.png" mode=""></image>
					关注问题
				</p>
				<!-- <p class="lookAsk">已关注问题</p> -->
			</view>
			<view class="right">
				<image class="pictwo" src="../../static/images/bj.png" mode=""></image>
				<span @click="openPopup">回答问题</span>
			</view>
		</view>
	</view>
	
	<view class="bottom-popup" v-if="flag">
		<view class="top">
			<span @click="closePopup">X</span>
			<span>回答问题</span>
			<span>提交</span>
		</view>
		<view class="content-pop">
			<textarea name="" id="" cols="30" rows="10"  placeholder="有何高见,展开讲讲......"></textarea>
		</view>
	</view>
</template>

<script>
	import {
		useRoute
	} from 'vue-router'
	import {
		getAskTop,
		getAskQuestion
	} from '@/utils/http.js'
	import {
		reactive,
		toRefs
	} from "vue"
	export default {
		setup() {
			const data = reactive({
				askDetailList: [], //问答详情
				askQuestion: [], //评论
				flag:false
			})
			const route = useRoute()
			// console.log(route.query.id);
			// 获取问答详情
			getAskTop(route.query.id).then(res => {
				// console.log(res);
				data.askDetailList = res.data
			})
			// 获取问答评论
			getAskQuestion(route.query.id).then(res => {
				console.log(res);
				data.askQuestion = res.data
			})
			// 回答问题弹框
			const openPopup=()=>{
				data.flag=true
			}
			// 关闭弹框
			const closePopup=()=>{
				data.flag=false
			}
			return {
				...toRefs(data),
				openPopup,
				closePopup
			}
		}
	}
</script>

<style lang="scss">
	.bottom-popup{
		width: 100%;
		height: 34%;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: white;
		z-index: 333;
		box-shadow: 20rpx 20rpx 20rpx 20rpx #ddd;
		border-top-right-radius: 40rpx;
		border-top-left-radius: 40rpx;
		.content-pop{
			width: 94%;
			margin-left: 3%;
			textarea{
				width: 100%;
				height: 320rpx;
				background-color: #f8f9fb;
				padding: 2% 0 0 2%;
				box-sizing: border-box;
			}
		}
		.top{
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: 4%;
			box-sizing: border-box;
		}
		.top span:nth-of-type(1){
			color: #007aff;
		}
		.top span:nth-of-type(2){
			font-weight: 600;
			font-size: 36rpx;
		}	
		.top span:nth-of-type(3){
			width: 100rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			border-radius: 10rpx;
			font-size: 30rpx;
			background-color: #66afff;
			color: whitesmoke;
		}
		}
	.position-ask {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 100rpx;
		background-color: #f8f9fb;
		display: flex;
		text-align: center;
		align-items: center;
		border-top: 1px solid #eee;
		color: #007aff;
		font-weight: 600;
		font-size: 34rpx;
		background-color: white;
		.lookAsk{
			color: #959dad;
		}
		.picone {
			width: 50rpx;
			height: 50rpx;
			vertical-align: middle;
		}

		.pictwo {
			width: 34rpx;
			height: 34rpx;
			vertical-align: middle;
			margin-right: 12rpx;
		}

		.left {
			width: 50%;
			height: 100%;
			border-right: 1px solid #eee;

			p {
				display: inline-block;
				line-height: 100rpx;
			}
		}

		.right {
			flex: 1;
		}
	}

	.bottom {
		width: 100%;
		padding: 2%;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;

		// margin-bottom: 10%;
		.hot-text {
			border-left: 3px solid #345dc2;
			padding-left: 5%;
		}

		.ask-item {
			width: 100%;
			display: flex;
			margin: 6% 0;

			.pic-left {
				width: 14%;

				image {
					width: 70rpx;
					height: 70rpx;
					border-radius: 50%;
				}
			}

			.txt-right {
				flex: 1;

				.fir-name {
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
</style>
