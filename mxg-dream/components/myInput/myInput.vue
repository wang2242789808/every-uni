<template>
	<view>
		<view class="top">
			<image class="left" src="../../static/images/back.png" mode=""></image>
			<view class="center">
				<input type="text" placeholder="搜索你想要的内容">
			</view>
			<navigator url="pages/index/index" open-type="switchTab" hover-class="other-navigator-hover">
			取消
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name:"myInput",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.top{
	width: 100%;
	display: flex;
	border-bottom: 1px solid #f8f8f8;
	padding: 2%;
	box-sizing: border-box;
	justify-content: space-between;
	align-items: center;
	.left{
		width: 40rpx;
		height: 40rpx;
	}
	.center{
		width: 84%;
		input{
			height: 60rpx;
			border-radius: 60rpx;
			background: url('../../static/images/search.png') no-repeat #f0f1f2;
			background-size: 30rpx;
			padding-left: 45rpx;
			background-position: 6rpx;
		}
	}
}
</style>