// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },
  // 设置
  setup(){
    wx.navigateTo({
      url: '/pages/setup/setup',
    })
  },
  // 用户信息
  user(){
    wx.navigateTo({
      url: '/pages/user/user',
    })
  },
  // 跳转收藏
  Collection(){
    wx.navigateTo({
      url: '/pages/Collection/Collection',
    })
  },
  // 我的会员
  member(){
    wx.navigateTo({
      url: '/pages/member/member',
    })
  },
  // 我的优惠卷
  coupon(){
    wx.navigateTo({
      url: '/pages/myQuan/myQuan',
    })
  },
  // 我的消息
  news(){
    wx.navigateTo({
      url: '/pages/messageList/messageList',
    })
  },
  // 问题反馈
  feedback(){
    wx.navigateTo({
      url: '/pages/question/question',
    })
  },
  // 我的订单
  order(){
    wx.navigateTo({
      url: '/pages/myOrder/myOrder',
    })
  },
  curriculum(){
    wx.navigateTo({
      url: '/pages/studyCard/studyCard',
    })
  },
  // 地址管理
  address(){
    wx.navigateTo({
      url: '/pages/address/address',
    })
  }
})