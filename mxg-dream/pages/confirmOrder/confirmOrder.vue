<template>
	<view>
		<view class="head">
			<image src="../../static/images/back.png" mode="" @click="$router.go(-1)"></image>
			<view class="text">
				确认购买
			</view>
		</view>
		
		<view class="box">
			<span>商品信息</span>
			<courseView :hotList="orderList"></courseView>
		</view>
		<view class="first-box">
			<span class="fir-txt">支付方式</span>
			<view class="zhi-box">
				<view>
					<image src="../../pay/alipay.png" mode=""></image>
					<span>支付宝</span>
				</view>
				<view>
					<label class="radio">
						<radio value="" checked="true" />
					</label>
				</view>
			</view>
			<view class="wei-box">
				<view>
					<image src="../../pay/wxpay.png" mode=""></image>
					<span>微信支付</span>
				</view>
				<view>
					<label class="radio1">
						<radio value="" />
					</label>
				</view>
			</view>
		</view>
		
		<view class="sec-box">
			<view class="goods-price">
				<span>商品金额</span>
				<span>￥{{totalPrice}}</span>
			</view>
			<view class="sec-price">
				<span>优惠价</span>
				<span>￥{{groupPrice}}</span>
			</view>
		</view>
		
		<view class="bottom-box">
			<p><span>实付金额:</span>
			<span>{{groupPrice}}</span></p>
			<p class="buy-btn">立即支付</p>
		</view>
	</view>
</template>

<script>
	import {onLoad} from '@dcloudio/uni-app'
import { reactive, toRefs } from "vue";
	export default {
		
		setup(){
			const data=reactive({
				orderList:[],
				totalPrice:0,
				groupPrice:0
			})
			return {
				...toRefs(data)
			}
		},
		onLoad(option) {
			this.orderList=JSON.parse(option.group).list
			this.totalPrice=JSON.parse(option.group).totalPrice
			this.groupPrice=JSON.parse(option.group).groupPrice
		}
		
	}
</script>

<style lang="scss">
	.first-box,.sec-box{
		width: 100%;
		padding: 2% 3%;
		box-sizing: border-box;
		box-shadow: 4rpx 2rpx 4rpx 2rpx #eee;
		border-radius: 20rpx;
		.fir-txt{
			display: block;
			width: 100%;
			height: 70rpx;
			line-height: 70rpx;
			border-bottom: 1px solid #eee;
		}
		.zhi-box,.wei-box{
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: 2% 0;
			image{
				width: 60rpx;
				height: 60rpx;
				vertical-align: middle;
			}
		}
	}
	.sec-box{
		margin: 6% 0 6% 0;
		.goods-price,.sec-price{
			width: 100%;
			height: 70rpx;
			display: flex;
			justify-content: space-between;
		}
	}
	.bottom-box{
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2%;
		box-sizing: border-box;
		border-top: 1px solid #eee;
		position: sticky;
		left: 0;
		bottom: 0;
		background-color: white;
		.buy-btn{
			background-color: #345dc2;
			color: white;
			padding: 2% 3%;
			box-sizing: border-box;
			border-radius: 60rpx;
		}
	}
	.bottom-box span:nth-of-type(2){
		color: red;
		font-weight: 600;
		padding-left: 10rpx;
		font-size: 34rpx;
	}
	.box{
		width: 100%;
		padding: 4% 2%;
		box-sizing: border-box;
		span{
			margin-left: 20rpx;
		}
	}
.head{
	width: 100%;
	height: 60rpx;
	padding: 0 2%;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	image{
		width: 40rpx;
		height: 40rpx;
	}
	.text{
		margin-left: 34%;
		font-weight: 700;
	}
}
</style>
