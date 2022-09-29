<template>
	<view>
		<view class="ipt-box">
			<searchInput></searchInput>
		</view>
		<!-- 轮播图 -->
		<view class="wrap">
			<u-swiper :list="data.banner" height="340" name="image_src"></u-swiper>
		</view>
		<u-grid :col="4">
			<u-grid-item>
				<u-icon name="photo" :size="46"></u-icon>
				<view class="grid-text">图片</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="lock" :size="46"></u-icon>
				<view class="grid-text">锁头</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="hourglass" :size="46"></u-icon>
				<view class="grid-text">沙漏</view>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script lang="ts" setup>
	import {
		getSwiper
	} from '@/api/api.ts'
	import * as TS from '@/api/define.ts'
	import {
		reactive
	} from 'vue'

	const data: any = reactive({
		banner: []
	})

	getSwiper().then(res => {
		if (res.meta.status == 200) {
			data.banner = res.message
		}
	})
</script>

<style lang="scss" scoped>
	.ipt-box {
		width: 100%;
		background-color: #d75255;
		height: 70rpx;
		line-height: 70rpx;
	}
</style>
