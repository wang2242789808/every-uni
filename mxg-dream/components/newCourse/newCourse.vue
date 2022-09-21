<template>
	<view class="course-item" v-for="item in newList" :key="item.id"  @click="toDetail(item.id)">
		<view class="course-img">
			<image :src="item.mainImage" mode=""></image>
			<view class="course-time">
				{{ item.totalTime }}
			</view>
		</view>
		<view class="first-text">
			{{item.title}}
		</view>
		<view class="teacther-text">
			<image src="../../static/images/mine.png" mode=""></image>{{item.nickName}}
		</view>
		<view class="bottom">
			<view class="left">
				<image src="../../static/images/money.png" mode=""></image>{{item.isFree==0?item.priceOriginal:'免费'}}
			</view>
			<view class="right">
				<image src="../../static/images/video.png" mode=""></image>{{item.studyTotal}}人在学
			</view>
		</view>
	</view>

</template>

<script>
	import {useRouter} from 'vue-router'
	export default {
		name: "newCourse",
		props: ['newList'],
		setup(){
			const router=useRouter()
			const toDetail = (id) => {
				console.log(id);
				uni.navigateTo({
					url:`/pages/detailView/detailView?id=${id}`
				})
			}
			return{
				toDetail
			}
		}
	}
</script>

<style lang="scss">
	
	.course-item {
		width: 300rpx;
		height: 360rpx;
		padding: 15rpx;
		margin-right: 20rpx;
		margin-bottom: 30rpx;
		background-color: #fff;
		box-shadow: 4rpx 4rpx 4rpx 4rpx #eee;
		border-radius: 30rpx;
		.course-img {
			width: 100%;
			height: 170rpx;
			position: relative;
			image {
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}
			.course-time {
				position: absolute;
				bottom: 2px;
				right: 2px;
				font-size: 11px;
				color: #fff;
				background: rgba(51, 51, 51, .4);
				border-radius: 10px;
				padding: 0 4px;
			}
		}

		.first-text {
			font-weight: 600;
			font-size: 30rpx;
			margin-top: 10rpx;
		}

		.teacther-text {
			color: #5e5e5e;
			margin-top: 9%;
			font-size: 25rpx;

			image {
				width: 25rpx;
				height: 25rpx;
			}
		}

		.bottom {
			width: 100%;
			display: flex;
			font-size: 26rpx;
			justify-content: space-between;

			.left {
				color: orangered;
			}

			image {
				width: 25rpx;
				height: 25rpx;
			}
		}

	}
</style>
