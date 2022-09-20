import http from '@/common/js/request.js'
// 获取轮播图数据
async function getBanner() {
	const {
		data
	} = await http.get('article/api/advert/show/1')
	return data
}
// 获取全部分类导航数据
async function getCateNav() {
	const {
		data
	} = await http.get('article/api/category/label/list')
	return data
}
// 获取热门推荐
async function getHotList() {
	const {
		data
	} = await http.post('course/api/course/search', {
		content: null,
		sort: "hot",
		isFree: null,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 20
	})
	return data
}

// 获取近期上新数据
async function getNewList() {
	const {
		data
	} = await http.post('course/api/course/search', {
		content: null,
		sort: "new",
		isFree: null,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}

// 获取免费精选数据
async function getFreeList() {
	const {
		data
	} = await http.post('course/api/course/search', {
		content: null,
		sort: null,
		isFree: 1,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}
// 获取付费精品数据
async function getNiceList(current,size) {
	const {
		data
	} = await http.post('course/api/course/search', {
		content: null,
		sort: null,
		isFree: 0,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}
// 获取详情数据
async function getDetailList(){
	const {data} =await http.get('course/api/course/null')
	return data
}
export {
	getBanner,
	getCateNav,
	getHotList,
	getNewList,
	getFreeList,
	getNiceList,
	getDetailList
}
