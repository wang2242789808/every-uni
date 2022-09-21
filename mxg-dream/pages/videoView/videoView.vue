<template>
	<view>
		<view class="video-box">
			<video :src="videoUrl" :autoplay="true"></video>
		</view>
		<view class="text-box">
			<view class="left">
				<span>和算法皮内那个苹果那个破二位股票共轭</span>
			</view>
			<view class="right">
				详情 &gt;
			</view>
		</view>
		<view class="big-box">
			<view class="out-box" v-for="item,index in articleList" :key="item.id">
				<view class="fir-txt">
					<span class="fir-span">第{{index+1}}章 {{item.name}}</span>
					<view :class="{'in-box':true,active:currentId==child.id}" v-for="child in item.sectionList" :key="child.id" @click="changeVideo(child)">
						<image src="../../static/images/jian.png" mode=""></image>
						<span class="num">{{index+1}}-{{index+1}}</span>
						<span>{{child.name}}</span>
					</view>
				</view>
			</view>
		
		</view>
		<view class="bottom">
			<image src="../../static/images/card.png" mode=""></image>
			<span>评价</span>
		</view>
	</view>
</template>

<script>
	import {
		useRoute
	} from 'vue-router'
	import {
		reactive,
		toRefs
	} from "vue"
	import {getVideo} from "@/utils/http.js"
	export default {
		setup() {
			const route = useRoute()
			const data = reactive({
				articleList:[], //视频章节详情
				currentId:1,
				videoUrl:''
			})
			console.log(route.query.id);
			// 获取视频详情
			getVideo(route.query.id).then(res => {
				console.log(res);
				data.articleList=res.data
			})
			const changeVideo=(val)=>{
				// console.log(val);
				console.log(val.id);
				data.currentId=val.id
				data.videoUrl=val.videoUrl
				console.log(data.videoUrl);
			}
			return {
				...toRefs(data),
				changeVideo
			}
		}
	}
</script>

<style lang="scss">
	.bottom{
		width: 100%;
		height: 100rpx;
		position: sticky;
		padding: 6rpx 0;
		box-sizing: border-box;
		bottom: 0;
		left: 0;
		background-color: #fff;
		color: gray;
		display: flex;
		flex-direction: column;
		align-items: center;
		image{
			width: 50rpx;
			height: 50rpx;
		}
	}
	.active{
		span{
			color: #007aff;
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
	
	// 视频
	.text-box{
		width: 100%;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		height: 160rpx;
		line-height: 60rpx;
		border-bottom: 1px solid #eee;
		padding: 2% 5% 0 5%;
		.left{
			width: 80%;
			span{
				font-weight: 600;
				font-size: 35rpx;
			}
		}
		.right{
			flex: 1;
			text-align: right;
			font-size: 30rpx;
			font-weight: 550;
		}
	}
.video-box{
	width: 100%;
	video{
		width: 100%;
	}
}
</style>
