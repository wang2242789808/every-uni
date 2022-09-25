<template>
	<view class="bx">
		<view class="box">
			<view class="login-box" @click="toLogin">
				<view class="img-box">
					<view class="left">
						<image src="http://m.mengxuegu.com/static/logo.png" mode=""></image>
					</view>
					<view class="text">
						请登录
					</view>
				</view>
				<view class="right">
					<image class="pic-jt" src="../../static/images/right.png" mode=""></image>
				</view>
			</view>

		</view>
		<ul class="u1">
			<li class="list">
				<div class="left">
					<image class="icon" src="../../static/images/book.png" mode=""></image>
					我的订单
				</div>
				<div class="right">
					<image class="pic-jt" src="../../static/images/right.png" mode=""></image>
				</div>
			</li>
			<li class="list">
				<div class="left">
					<image class="icon" src="../../static/images/chesuo.png" mode=""></image>
					我的余额
				</div>
				<div class="right">
					<image class="pic-jt" src="../../static/images/right.png" mode=""></image>
				</div>
			</li>
			<li class="list">
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
			<li class="list">
				<div class="left">
					<image class="icon" src="../../static/images/set.png" mode=""></image>
					设置
				</div>
				<div class="right">
					<image class="pic-jt" src="../../static/images/right.png" mode=""></image>
				</div>
			</li>
			<li class="list">
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
			<li class="list">
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
	export default {
		setup() {
			const toLogin = () => {
				uni.navigateTo({
					url: '/pages/loginView/loginView'
				})
			}
			return {
				toLogin
			}
		}
	}
</script>

<style lang="scss">
	.icon{
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
	}
	.pic-jt{
		width: 26rpx;
		height: 26rpx;
	}
	.bx {
		background-color: #f8f9fb;
	}


	.u1,.u2,.u3{
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

				.text {
					font-weight: 700;
					font-size: 40rpx;
					margin-left: 5%;
				}
			}

			.left {
				width: 150rpx;
				height: 150rpx;

				background-color: white;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
