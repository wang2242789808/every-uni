// pages/huatiDetails/huatiDetails.js
import {
    getRequest,
    postRequest
} from '../../utils/util'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dynaList: [],
        info: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        getRequest(`app/theme/info/${options.id}?theme_id=${options.id}`).then(res => {
            console.log(res);
            this.setData({
                info: res.data
            })
        })
        getRequest(`app/theme/dynaList/${options.id}?page=1&limit=10&theme_id=${options.id}`).then(res => {
            console.log(res);
            this.setData({
                dynaList: res.data
            })
        })
    },
    // 返回上一页
    back() {
        wx.navigateBack({
            delta: 1,
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})