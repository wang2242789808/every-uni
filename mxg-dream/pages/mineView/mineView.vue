<template>
	<view class="bx">
		<view class="box">
			<view class="login-box">
				<view class="img-box">
					<view class="left">
						<image v-if="token==null" src="http://m.mengxuegu.com/static/logo.png" alt=""></image>
						<image v-if="token" :src="user.imageUrl" mode=""></image>
					</view>
					<view class="text" @click="toLogin">
						<span v-if="token==null">请登录</span>
						<span v-if="token">{{user.nickName}}</span>
						<p v-if="token">用户名:{{user.username}}</p>
					</view>
				</view>
			</view>

		</view>
		<ul class="u1">
			<li class="list" @click="toOrder">
				<div class="left">
					<image class="icon" src="../../static/images/book.png" mode=""></image>
					我的订单
				</div>
				<div class="right">
					<image class="pic-jt" src="../../static/images/right.png" mode=""></image>
				</div>
			</li>
			<li class="list" @click="toBalance">
				<div class="left">
					<image class="icon" src="../../static/images/chesuo.png" mode=""></image>
					我的余额
				</div>
				<div class="right">
					<image class="pic-jt" src="../../static/images/right.png" mode=""></image>
				</div>
			</li>
			<li class="list" @click="toStudy">
				<div class="left">
					<image class="icon" src="../../static/images/jp.png" mode=""></image>
					我的学习
				</div>
				<div class="right">
					<image class="pic-jt" src="../../static/images/right.png" mode=""></image>
				</div>
			</li>
		</ul>
		<ul class="u2">
			<li class="list" @click="toSetup">
				<div class="left">
					<image class="icon" src="../../static/images/set.png" mode=""></image>
					设置
				</div>
				<div class="right">
					<image class="pic-jt" src="../../static/images/right.png" mode=""></image>
				</div>
			</li>

			<li class="list" @click="toFeedBack">
				<div class="left">
					<image class="icon" src="../../static/images/laba.png" mode=""></image>
					意见反馈
				</div>
				<div class="right">
					<image class="pic-jt" src="../../static/images/right.png" mode=""></image>
				</div>
			</li>
		</ul>
		<ul class="u3">
			<li class="list" @click="toOption">
				<div class="left">
					<image class="icon" src="../../static/images/guanyuwomen.png" mode=""></image>
					关于我们
				</div>
				<div class="right">
					<image class="pic-jt" src="../../static/images/right.png" mode=""></image>
				</div>
			</li>

		</ul>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from "vue"
	export default {

		setup() {
			const data = reactive({
				token: '',
				user: {}
			})
			const toLogin = () => {
				if (data.token) {
					uni.navigateTo({
						url: '/pages/userView/userView'
					})
				} else {
					uni.navigateTo({
						url: '/pages/loginView/loginView'
					})
				}

			}

			const toOrder = () => {
				if (data.token) {
					uni.navigateTo({
						url: '/pages/orderView/orderView'
					})
				} else {
					uni.navigateTo({
						url: '/pages/loginView/loginView'
					})
				}

			}
			const toBalance = () => {
				if (data.token) {
					uni.navigateTo({
						url: '/pages/balanceView/balanceView'
					})
				} else {
					uni.navigateTo({
						url: '/pages/loginView/loginView'
					})
				}

			}
			const toStudy = () => {
				if (data.token) {
					uni.navigateTo({
						url: '/pages/studyView/studyView'
					})
				} else {
					uni.navigateTo({
						url: '/pages/loginView/loginView'
					})
				}
			}
			const toSetup = () => {
				uni.navigateTo({
					url: '/pages/setupView/setupView'
				})
			}
			const toFeedBack = () => {
				uni.navigateTo({
					url: '/pages/feedbackView/feedbackView'
				})
			}
			const toOption = () => {
				uni.navigateTo({
					url: '/pages/opinionView/opinionView'
				})
			}
			return {
				...toRefs(data),
				toLogin,
				toOrder,
				toBalance,
				toStudy,
				toSetup,
				toFeedBack,
				toOption
			}
		},
		onShow() {
			this.user = JSON.parse(localStorage.getItem('userInfo'))
			this.token = localStorage.getItem('mxgEducationToken')
		}
	}
</script>

<style lang="scss">
	.icon {
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
	}

	.pic-jt {
		width: 26rpx;
		height: 26rpx;
	}

	.bx {
		background-color: #f8f9fb;
	}


	.u1,
	.u2,
	.u3 {
		margin-top: 20rpx;
		background-color: white;
		padding-left: 0;
	}

	.list {
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		justify-content: space-between;
		border-bottom: 1px solid #eee;

		.left {
			font-size: 34rpx;
			margin-left: 6%;
		}

		.right {
			margin-right: 40rpx;
			font-size: 20px;
			color: gray;
		}
	}

	.box {
		width: 100%;
		background-color: #345dc2;
		overflow: hidden;

		.login-box {
			width: 100%;
			height: 240rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;
			padding: 0 6%;
			box-sizing: border-box;
			margin-top: 90rpx;

			.img-box {
				width: 60%;
				display: flex;
				align-items: center;
				width: 100%;

				.text {
					font-weight: 700;
					font-size: 40rpx;
					margin-left: 5%;

					p {
						width: 100%;
						font-size: 34rpx;
						margin-top: 5rpx;
						font-weight: 300;
						color: #ccc;
					}
				}
			}

			.left {
				width: 150rpx;
				height: 150rpx;

				background-color: white;

				image {
					width: 100%;
					height: 100%;
					border-radius: 50px;
				}
			}
		}
	}
</style>
