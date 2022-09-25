<template>
	<view>
		<uni-popup ref="popup" type="center" class="pop" @maskClick="closePop">
			<p>免费试看 <span @click="close">X</span></p>
			<video :src="videoUrl" :autoplay="true"></video>
		</uni-popup>
		<view class="top-pic">
			<image :src="detailList.mainImage" mode="" @click="toBack"></image>
			<span @click="back"></span>
		</view>
		<view class="content-text">
			<view class="fir-text">
				<view class="left">
					￥{{detailList.priceDiscount}}
				</view>
				<view class="center">
					<s>￥{{detailList.priceOriginal}}</s>
				</view>
				<view class="last">
					优惠价
				</view>
			</view>
			<view class="center-text">
				{{detailList.title}}
			</view>
			<view class="last-text">
				<view class="left">
					<image src="../../static/images/flowerdark.png" mode=""></image>
					{{detailList.goodRate}}好评
				</view>
				<view class="right">
					<image src="../../static/images/mydark.png" mode=""></image>
					{{detailList.studyTotal}}人在学
				</view>
			</view>
		</view>

		<!-- tab导航栏 -->
		<view class="tab-box">
			<view :class="{'tab-item':true,active:currentId==item.id}" v-for="item in tabList" :key="item.id"
				@click="changeTab(item.id)">
				{{item.title}}
			</view>
		</view>
		<view class="tab-content">
			<view class="fir-tab" v-show="currentId==0">
				<image :src="detailList.detailUrls" mode=""></image>
			</view>
			<!-- 章节区域 -->
			<view class="sec-tab" v-show="currentId==1">
				<view class="big-box">
					<view class="out-box" v-for="item,index in articleList" :key="item.id">
						<view class="fir-txt">
							<span class="fir-span">第{{index+1}}章 {{item.name}}</span>
							<view class="in-box" v-for="child,i in item.sectionList" :key="child.id"
								@click="toVideo(child)">
								<image src="../../static/images/jian.png" mode=""></image>
								<span class="num">{{ index+1 }}-{{i+1}}</span>
								<span>{{child.name}}</span>
								<span class="free-look" v-show="child.isFree==1">试看</span>
							</view>
						</view>
					</view>

				</view>
			</view>
			<!-- 评论区域 -->
			<view class="thr-tab" v-show="currentId==2">
				<view class="comment-box" v-for="item in commentList" :key="item.id">
					<view class="top">
						<view class="left">
							<view class="left-pic">
								
								<image src="../../static/tab/my.png" mode="" v-if="item.userImage==null"></image>
								<image :src="item.userImage" mode="" v-else></image>
							</view>
							<view class="center">
								<p>{{item.nickName}}</p>
								<p>{{item.createDate}}</p>
							</view>
						</view>
						<image class="logo" src="../../static/images/redflower.png" mode="" v-if="item.isGood==1"></image>
						<image class="logo" src="../../static/images/flower.png" mode="" v-else ></image>
						
					</view>
					<view class="center-text">
						{{item.content}}
					</view>
					<view class="bot-txt" v-if="item.children!=null">
							讲师回复:{{item.children.content}}
					</view>
				</view>
			</view>
			<view class="last-tab" v-show="currentId==3">
				<view class="last-box" v-for="item in groupList" :key="item.id">
					<view class="fir-group">
						{{item.title}}
					</view>
						<courseView :hotList="item.list"></courseView>
					<view class="group-bottom">
						<view class="bo-text">
							<span>￥{{item.groupPrice}}</span>
							<s>￥{{item.totalPrice}}</s>
						</view>
						<span class="buy-btn" @click="buyGroup(item)">购买套餐</span>
					</view>
				</view>
			</view>
		</view>

		<!-- 购买 -->
		<div class="bottom-box">
			<button class="buy-btn">立即购买</button>
		</div>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs,
		ref
	} from "vue"
	import {
		getDetailList,
		getArticle,
		getComment,
		getGroup
	} from '@/utils/http.js'
	import {
		useRoute,
		useRouter
	} from 'vue-router'  
	import {onMounted} from 'vue'
	export default {
		setup() {
			uni.pageScrollTo({
				scrollTop:0
			})
			const data = reactive({
				tabList: [{
						title: '详情',
						id: 0
					},
					{
						title: '章节',
						id: 1
					},
					{
						title: '评论',
						id: 2
					},
					{
						title: '套餐',
						id: 3
					}
				],
				currentId: 0,
				detailList: [], //详情数据
				articleList: [], //章节数据
				commentList:[], //评论数据
				groupList:[] //套餐数据
			})
			
			const route = useRoute()
			const router = useRouter()
			const popup=ref(null)
			
			// 切换导航栏
			const changeTab = (id) => {
				data.currentId = id
				// console.log(id);
			}
			// 获取详情信息
			getDetailList(route.query._value).then(res => {
				// console.log(res);
				data.detailList = res.data
			})

			// 获取章节信息
			getArticle(route.query._value).then(res => {
				console.log(res);
				data.articleList = res.data
			})
			// 视频播放页面
			const toVideo = (val) => {
				// console.log(flag, id);
				console.log(val);
				if (val.isFree == 0) {
					uni.showToast({
						icon:"none",
						title:"请先购买"
					})
				} else {
					popup.value.open()
					data.videoUrl=val.videoUrl
					console.log(data.videoUrl);
					// router.push(`/pages/videoView/videoView?id=${id}`)
				}
				
			}
			// 关闭弹框
			const close=()=>{
				popup.value.close()
			}
			const closePop=()=>{
				popup.value.close()
			}
			// 获取评论
			getComment(route.query._value).then(res =>{
				// console.log(res);
				data.commentList=res.data
			})
			// 获取套餐数据
			getGroup(route.query._value).then(res =>{
				console.log(res);
				data.groupList=res.data
			})
			// 购买套餐
			const buyGroup=(val)=>{
				// router.push(`/pages/orderView/orderView?val=${val}`)
			}
			const back=()=>{
				uni.navigateBack()
			}
			// 返回上一页
			const toBack = () => {
				// console.log(444);
				// router.push("/pages/index/index")
			}
			return {
				...toRefs(data),
				changeTab,
				toBack,
				toVideo,
				buyGroup,
				popup,
				close,
				closePop,
				back
			}
		}
	}
</script>

<style lang="scss">
	// .pop{
	// 	width: 100%;
	// 	min-height: 100vh;
		
	// }
	.pop{
		color: white;
		text-align: center;
		p{
			font-size: 40rpx;
			margin-bottom: 5%;
			span{
				margin-left: 3%;
			}
		}
	}
	// 套餐
	.last-tab{
		width: 100%;
		.last-box{
			width: 90%;
			margin: 5%;
			box-shadow: 5rpx 4rpx 4rpx 4rpx #eee;
			border-radius: 15rpx;
			padding: 3%;
			box-sizing: border-box;
			.fir-group{
				font-size: 35rpx
			}
			.group-bottom{
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-top: 3%;
				.buy-btn{
					color: red;
					font-weight: 550;
				}
				.bo-text{
					span{
						font-weight: 700;
						color: red;
						font-size: 40rpx;
					}
					s{
						color: #8d8d8d;
						margin-left: 5%;
						font-size: 30rpx;
					}
				}
			}
		}
		
	}
	// 评论
	.thr-tab{
		width: 100%;
		.comment-box{
			width: 100%;
			padding: 4%;
			box-sizing: border-box;
			.top{
				width: 100%;
				display: flex;
				justify-content: space-between;
				.left{
					display: flex;
					.center p:nth-of-type(1){
						font-weight: 600;
					}
					.center p:nth-of-type(2){
						color: gray;
						font-size: 28rpx
					}
					.left-pic{
						width: 90rpx;
						height: 90rpx;
						border-radius: 50%;
						background-color: #fff;
						margin-right: 20rpx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					
				}
				.logo{
					width: 50rpx;
					height: 50rpx;
				}
				
			}
			.center-text{
				margin: 2% 0;
			}
			.bot-txt{
				width: 100%;
				padding: 4% 3%;
				box-sizing: border-box;
				background-color: #f8f9fb;
				color: gray;
			}
		}
	}
	// 章节
	.big-box {
		width: 100%;
		height: 100%;

		.out-box {
			width: 100%;

			.fir-txt {
				padding: 25rpx;

				.fir-span {
					font-weight: 550;
					font-size: 38rpx;
				}

				.in-box {
					width: 100%;
					display: flex;
					align-items: center;
					color: black;
					padding: 20rpx 0;
					border-bottom: 1px solid #eee;
					position: relative;

					.free-look {
						position: absolute;
						right: 0;
						color: #007aff;
						font-size: 20rpx;
					}

					.num {
						margin: 0 10rpx;
					}

					image {
						width: 30rpx;
						height: 30rpx;

					}
				}
			}
		}
	}

	// 购买
	.bottom-box {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 4;

		.buy-btn {
			border: none;
			height: 80rpx;
			line-height: 80rpx;
			width: 94%;
			background-color: #345dc2;
			color: #fff;
			border-radius: 50rpx;

		}
	}

	// 导航栏内容
	.tab-content {
		width: 100%;

		.fir-tab,
		.sec-tab,
		.thr-tab,
		.last-tab {
			width: 100%;

			image {
				width: 100%;
				display: block;
			}
		}

		.fir-tab {
			height: 100%;

			image {
				height: 22112rpx;
			}
		}
	}

	// 导航栏
	.tab-box {
		width: 100%;
		height: 80rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #eee;

		.tab-item {
			height: 60rpx;
			line-height: 60rpx;
		}

		.active {
			border-bottom: 4rpx solid #007aff;
			color: #007aff;
		}
	}

	// 文字部分
	.content-text {
		width: 100%;
		padding: 3%;
		border-bottom: 30rpx solid #f8f9fb;

		.fir-text {
			width: 100%;
			display: flex;
			align-items: center;

			.left {
				color: red;
				font-weight: 600;
				font-size: 45rpx;
			}

			.center {
				color: #999999;
				margin: 0 2%;
			}

			.last {
				width: 80rpx;
				height: 30rpx;
				border: 1px solid red;
				color: red;
				text-align: center;
				border-radius: 10rpx;
				line-height: 30rpx;
				font-size: 20rpx;
			}
		}

		.center-text {
			font-weight: 600;
			font-size: 36rpx;
		}

		.last-text {
			width: 100%;
			display: flex;
			margin: 2% 0;
			color: #8d8d8d;
				
			.left,
			.right {
				width: 200rpx;
				height: 70rpx;
				text-align: center;
				line-height: 70rpx;
				border-radius: 40rpx;
				background-color: #f8f9fb;
				
			}

			.left {
				margin-right: 3%;
				image{
					width: 40rpx;
					height: 40rpx;
					vertical-align: middle;
				}
			}
			.right{
				image{
					width: 30rpx;
					height: 30rpx;
					line-height: 30rpx;
				}
			}
		}
	}

	.top-pic {
		width: 100%;
		position: relative;

		span {
			position: absolute;
			width: 64rpx;
			height: 64rpx;
			background-color: rgba(0, 0, 0, 0.5);
			top: 2%;
			left: 2%;
			border-radius: 50%;
		}

		span::before {
			content: "";
			width: 23rpx;
			height: 23rpx;
			border-left: 4rpx solid #fff;
			border-bottom: 4rpx solid #fff;
			position: absolute;
			top: 25%;
			left: 40%;
			transform: rotate(45deg);
		}

		image {
			width: 100%;
		}
	}
</style>
