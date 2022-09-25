<template>
	<view>
		<swiper @change="swiperItem" :indicator-dots="true" :autoplay="true" indicator-active-color="#fff" indicator-color="#ccc" :interval="3000" :duration="1000">
			<swiper-item v-for="item in bannerList" :key="item.id" :style="`background-image:linear-gradient(${item.background},#fff)`">				
					<image :src="item.imageUrl" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {getBanner} from '@/utils/http.js'
import { reactive, toRefs } from "vue";
	export default {
		setup(props, ctx){
			const data=reactive({
				bannerList:[]
			})
			
			const swiperItem = (e) => {
				ctx.emit('swiperItem', data.bannerList[e.detail.current].background)
			}
			
			getBanner().then(res =>{
				console.log(res);
				if(res.code==20000){
					data.bannerList=res.data
				}
			})
			return {
				...toRefs(data),
				swiperItem
			}
		}
	}
</script>

<style lang="scss">
 .swiper{
		width: 100%;
		height: 350rpx;
	}
	image{
		width: 90%;
		margin-left: 5%;
		height: 297rpx;
		border-radius: 15rpx;
	}
</style>
