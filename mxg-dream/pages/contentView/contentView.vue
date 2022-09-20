<template>
	<view>
		<myInput></myInput>
		<uni-section title="实心标签" type="line">
					<view class="uni-padding-wrap uni-common-mt">
						<uni-segmented-control :current="current" :values="items" style-type="text"
							active-color="#007aff" @clickItem="onClickItem" />
					</view>
					<view class="content">
						<view v-if="current === 0"><text class="content-text">选项卡1的内容</text></view>
						<view v-if="current === 1"><text class="content-text">选项卡2的内容</text></view>
						<view v-if="current === 2"><text class="content-text">选项卡3的内容</text></view>
					</view>
				</uni-section>
				
				<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
					<view class="container">
						<!-- 普通弹窗 -->
						<uni-popup ref="popup" background-color="#fff" @change="change">
						<!-- ... -->
						</uni-popup>
					</view>
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
				items: ['选项1', '选项2', '选项3'],
				current: 0,
				show:false
			})
			const onClickItem = (e) => {
				if (data.current != e.currentIndex) {
					data.current = e.currentIndex;
				}
			}
			const change=(e)=> {
				this.show = e.show
			}
			return {
				...toRefs(data),
				onClickItem,
				change
			}
		}
	}
</script>

<style lang="scss">

</style>
