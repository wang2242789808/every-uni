<template>
	<view>
		<view class="box">
			<!-- 搜索 -->
			<search></search>
			<!-- 分类 -->
			<scroll-view scroll-x="true">
				<view class="cate-box">
					<view :class="{'cate-item':true, active:categoryId==0}" @click="changeId(0)">
						推荐
					</view>
					<view :class="{'cate-item':true,active:categoryId==item.id}" v-for="item in articleCate" :key="item.id" @click="changeId(item.id)">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 内容 -->
		<view class="article-box">
			<articleView :articleList="articleList"></articleView>
			
		</view>
	</view>
</template>

<script>
	import {getCateNav,getArticleList} from '@/utils/http.js'
import { reactive, toRefs } from "vue";
import {
		onReachBottom,
		onPageScroll
	} from '@dcloudio/uni-app'
	export default {
		setup(){
			const data=reactive({
				articleCate:[], //分类
				articleList:[], //阅读数据
				categoryId:0,//分类id
				current:1,//页码
				size:10 //页数
			})
			// 获取分类
			getCateNav().then(res =>{
				console.log(res);
				data.articleCate=res.data
			})
			// 切换
			const changeId=(id)=>{
				// console.log(id);
				data.categoryId=id
				getArticleList(data.categoryId,data.size,data.current).then(res =>{
					console.log(res);
					if(data.current==1){
						data.articleList=res.data.records
					}else{
						data.articleList=[...data.articleList,...res.data.records]
					}
					
				})
			}
			// 获取阅读数据
			getArticleList(data.categoryId,data.size,data.current).then(res =>{
				console.log(res);
				if(data.current==1){
					data.articleList=res.data.records
				}else{
					data.articleList=[...data.articleList,...res.data.records]
				}
				
			})
			onReachBottom(()=>{
				data.current++
				getArticleList(data.categoryId,data.size,data.current).then(res =>{
					console.log(res);
					if(data.current==1){
						data.articleList=res.data.records
					}else{
						data.articleList=[...data.articleList,...res.data.records]
					}
					
				})
			})
			return {
				...toRefs(data),
				changeId
			}
		}
	}
</script>

<style lang="scss">
	.box{
		position: sticky;
		left: 0;
		top: 0;
		z-index: 22;
	}
	.article-box{
		width: 100%;
		
	}
.cate-box{
	width: 100%;
	height: 80rpx;
	border-bottom: 1px solid #e7e7e7;
	display: flex;
	background-color: #fff;
	border: none;
	padding: 0 50rpx;
	.cate-item{
		white-space: nowrap;
		height: 70rpx;
		line-height: 70rpx;
		margin-right: 90rpx;
	}
}
.active{
	border-bottom: 6rpx solid #077dff;
	color: #077dff;
}
scroll-view ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    color: transparent;

   }
</style>
