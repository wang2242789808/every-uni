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
async function getNiceList(current, size) {
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
async function getDetailList(id) {
	const {
		data
	} = await http.get('course/api/course/null')
	return data
}
// 获取章节信息
async function getArticle(id) {
	const {
		data
	} = await http.get('course/api/chapter/section/list/null')
	return data
}
// 获取章节视频信息
async function getVideo(id) {
	const {
		data
	} = await http.get(`course/course/buy/list/null/${id}`)
	return data
}
// 获取评论信息
async function getComment(id) {
	const {
		data
	} = await http.get('course/api/comment/list/null')
	return data
}
// 获取套餐信息
async function getGroup(id) {
	const {
		data
	} = await http.get('course/api/group/list/null')
	return data
}
// 获取阅读信息
async function getArticleList(categoryId, size, current) {
	const {
		data
	} = await http.post('article/api/article/search', {
		categoryId,
		size,
		current
	})
	return data
}
// 获取阅读详情
async function getArticleDetail(id) {
	const {
		data
	} = await http.get(`article/api/article/${id}`)
	return data
}
// 获取评论数据
async function getArticleAsk(id) {
	const {
		data
	} = await http.get(`article/api/comment/list/${id}`)
	return data
}
// 获取问答数据
async function getAskList(currentCate, current, size) {
	const {
		data
	} = await http.post(`question/api/question/${currentCate}`, {
		current,
		size
	})
	return data
}

// 问答详情
async function getAskTop(id) {
	const {
		data
	} = await http.get(`question/api/question/${id}`)
	return data
}
// 获取问答评论
async function getAskQuestion(id) {
	const {
		data
	} = await http.get(`question/api/reply/list/${id}`)
	return data
}
// 获取课程数据
async function getCourseList(id, current, size,sort,isFree,labelId) {
	const {
		data
	} = await http.post('course/api/course/search', {
		categoryId: id,
		content: null,
		current: current,
		isFree: isFree,
		labelId: labelId,
		size: size,
		sort: sort
	})
	return data
}
// 获取文章数据
async function getArticleData(id, current, size,sort,labelId){
	const {data}=await http.post('article/api/article/search',{
		categoryId: id,
		content: null,
		current: current,
		labelId: labelId,
		size: size,
		sort: sort
	})
	return data
}

// 获取问答数据
async function getAskData(id, current, size,sort){
	const {data}=await http.post('question/api/question/search',{
		categoryId: id,
		content: null,
		current: current,
		labelId: null,
		size: size,
		sort: sort
	})
	return data
}
export {
	getBanner,
	getCateNav,
	getHotList,
	getNewList,
	getFreeList,
	getNiceList,
	getDetailList,
	getArticle,
	getVideo,
	getComment,
	getGroup,
	getArticleList,
	getArticleDetail,
	getArticleAsk,
	getAskList,
	getAskTop,
	getAskQuestion,
	getCourseList,
	getArticleData,
	getAskData
}
