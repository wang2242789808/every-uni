<template>
	<view>
		<view class="cate-box">
			<scroll-view scroll-y="true" class="left" :show-scrollbar="false">
				<view >
					<view :class="{'left-item':true,active:currentId==item.id}" v-for="item in cateNav" :key="item.id" @click="changeId(item,item.id)">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
			
			
			<view class="right">
				<view class="right-box">
					<view class="right-item" v-for="item in cateRight" :key="item.id">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {getCateNav} from '@/utils/http.js'
import { reactive, toRefs } from "vue";
	export default {
		setup(){
			const data=reactive({
				cateNav:[],
				currentId:1,
				cateRight:[]
			})
			// 分类导航栏
			getCateNav().then(res => {
				console.log(res);
				if (res.code == 20000) {
					data.cateNav = res.data
					data.cateRight=res.data[data.currentId-1].labelList
				}
			})
			const changeId=(item,id)=>{
				data.cateRight=item.labelList
				data.currentId=id
				
			}
			return {
				...toRefs(data),
				changeId
			}
		}
	}
</script>

<style lang="scss">
	
	scroll-view ::-webkit-scrollbar {
	   display: none;
	   width: 0;
	   height: 0;
	   color: transparent;
	  }
	.active{
		color: #345dc2 !important;
	}
	.active::before{
		content: "";
		position: absolute;
		width: 6rpx;
		height: 50rpx;
		background-color: #345dc2;
		left: 0;
		top: 35%;
	}
.cate-box{
	width: 100%;
	display: flex;
	.left{
		width: 30%;
		text-align: center;
		height: calc(100vh - 100rpx);
		background-color: #f8f9fb;
		.left-item{
			height: 140rpx;
			line-height: 140rpx;
			font-size: 30rpx;
			font-weight: 400;
			position: relative;
			color: #8c8c8c;
		}
	}
	.right{
		flex: 1;
		.right-box{
			width: 100%;
			padding: 5%;
			.right-item{
				display: inline-block;
				height: 32px;
				line-height: 32px;
				padding: 0 4%;
				border-radius: 18px;
				border: 1px solid #bbb;
				margin: 1%;
				color: #33352d;
			}
		}
	}
}
</style>
