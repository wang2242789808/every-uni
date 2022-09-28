// pages/selcourse/selcourse.js
import { getRequest, postRequest } from '../../utils/util.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navList: [
            {
                title: '考研英语',
                id: 2
            },
            {
                title: '考研政治',
                id: 3
            },
            {
                title: '实用英语',
                id: 4
            },
            {
                title: '考研数学',
                id: 5
            }
        ],
        currentId: 1,
        firFlag: false,
        secFlag: false,
        lastFlag: false,
        bannerList: [],  // 轮播图数据
        navTitle: { title: '管理类联考', id: 1 }, // 顶部导航左边标题
        FirstClassify: [], // 考试分类
        currentFirId: null, //切换考试分类
        FirstClassifyDetail: [], //考试分类详情
        currentFir: 1,
        selTitle: '',  //标题
        finishFlag: false,
        selList: [
            {
                name: '在校生',
                id: 1
            },
            {
                name: '在职',
                id: 2
            }
        ],
        currentSecId: null,
        currentLastId: null,
        liveList: [],  //今日直播数据
        openCourse:[],  //近期公开课
        catchCourse:[],
        recomCourse:[]  //推荐好课
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取轮播图数据
        getRequest('app/home/banner/13/4').then(res => {
            this.data.bannerList = res.data
            this.setData({
                bannerList: this.data.bannerList
            })
            // console.log(this.data.bannerList);
        })
        // this.chooseFinal()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    // nav导航栏切换
    changeNav(e) {
        console.log(e);
        this.setData({
            currentId: e.currentTarget.dataset.id
        })
        console.log(this.data.currentId);
    },

    // 选择课程弹框
    togglePopup(e) {
        // 选择考试分类
        getRequest('app/home/getFirstClassify').then(res => {
            console.log(res);
            this.data.FirstClassify = res.data
            this.setData({
                FirstClassify: this.data.FirstClassify,
                currentFir: e.currentTarget.dataset.id
            })
        })
        this.setData({
            firFlag: true
        })
    },
    // 点击考试分类选项
    toggleFirPopup(e) {
        console.log(e);
        const id = e.currentTarget.dataset.val.id
        const title = e.currentTarget.dataset.val.title
        this.data.currentFirId = id
        getRequest(`app/home/getMajor/${id}`).then(res => {
            this.setData({
                FirstClassifyDetail: res.data
            })
        })
        // 选择考试分类详情
        this.setData({
            firFlag: false,
            secFlag: true,
            selTitle: title,
            currentFirId: this.data.currentFirId
        })

        // console.log(this.data.currentFirId);
    },

    // 选择考试详情
    toggleSecPopup(e) {
        // console.log(e);
        const { id } = e.currentTarget.dataset
        this.setData({
            secFlag: false,
            lastFlag: true,
            currentSecId: id
        })
        // console.log(this.data.currentSecId);
    },
    // 选择课程完成按钮
    toggleLastPopup(e) {
        // console.log(e);
        const { id } = e.currentTarget.dataset
        this.setData({
            finishFlag: true,
            currentLastId: id
        })
    },
    // 完成选择课程
    chooseFinal() {
        // // 导航栏左侧标题
        getRequest(`app/home/exam/${this.data.currentFirId}`).then(res => {
            // console.log(res);
            this.setData({
                navTitle: res.data
            })
        })
        // tab栏
        getRequest(`app/home/getSecondClassify/${this.data.currentFirId}`).then(res => {
            // console.log(res);
            this.setData({
                navList: res.data
            })
        })

        // 今日直播
        getRequest(`app/home/liveToday/${this.data.currentFirId}`).then(res => {
            // console.log(res);
            this.setData({
                liveList: res.data
            })
        })

        // 近期公开课
        getRequest(`app/home/marketingCourse/${this.data.currentFirId}`).then(res => {
            this.setData({
                openCourse:res.data.course_list.splice(0,3),
                catchCourse:res.data.course_list
            })
            // console.log(res.data.openCourse);
        })

        // 推荐好课
        getRequest(`app/home/recommendCourse/${this.data.currentFirId}`).then(res =>{
         
            this.setData({
                recomCourse:res.data.course_list
            })
            console.log(this.data.recomCourse);
        })
        this.setData({
            lastFlag: false,
            finishFlag:false
        })
    },
    // 关闭弹窗
    onClose() {
        this.setData({
            firFlag: false,
            secFlag: false,
            lastFlag: false
        })
    },
    closePop() {
        this.setData({
            firFlag: false
        })
    },
    backFir() {
        this.setData({
            firFlag: true,
            secFlag: false
        })
    },
    backSec() {
        this.setData({
            secFlag: true,
            lastFlag: false
        })
    }
})