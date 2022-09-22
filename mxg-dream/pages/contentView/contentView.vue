<template>
	<view>
		<myInput></myInput>
		<view class="cate-box">
			<p :class="{active:currentIndex==index}" v-for="item,index in cateNav" :key="index" @click="changeCate(index)">{{item.name}}</p>
		</view>
			<view class="content-box">
				<view class="fir-box" v-show="currentIndex==0">
					<courseView :hotList="courseList"></courseView>
				</view>
				<view class="sec-box" v-show="currentIndex==1">
					33333
				</view>
				<view class="thr-box" v-show="currentIndex==2">
					44444
				</view>
			</view>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs
	} from "vue"
	import {useRoute} from 'vue-router'
	import {getCourseList} from '@/utils/http.js'
	export default {
		setup() {
			const data=reactive({
				cateNav:[
					{
						name:'课程'
					},
					{
						name:'文章'
					},
					{
						name:'问答'
					}
				],
				currentIndex:0,
				categoryId: 0,
				courseList:[] //课程数据
			})
			const route=useRoute()
			console.log(route.query.id);
			// 切换分类
			const changeCate=(index)=>{
				// console.log(index);
				data.currentIndex=index
			}
			getCourseList(route.query.id).then(res =>{
				console.log(res);
				data.courseList=res.data.records
			})
			return {
				...toRefs(data),
				changeCate
			}
		}
	}
</script>

<style lang="scss">
	.content-box{
		width: 100%;
	}
	.active{
		color: #007aff;
		border-bottom: 6rpx solid #007aff;
	}
.cate-box{
	width: 100%;
	height: 80rpx;
	border-bottom: 1px solid #eee;
	display: flex;
	justify-content: space-around;
	align-items: center;
	p{
		display: inline-block;
		height: 68rpx;
		line-height: 68rpx;
	}
}
</style>
