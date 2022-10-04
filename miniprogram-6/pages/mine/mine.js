// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      key:''
    },
    // 登录
    login(){
      wx.navigateTo({
        url: '/pages/login/login',
      })
  },
  // 注册
  zc(){
    wx.navigateTo({
      url: '/pages/logins/logins',
    })
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
    },
    // 设置跳转
    setup(){
        console.log(1);
        wx.navigateTo({
          url: '/pages/setup/setup',
        })
    },
    // 跳转个人中心
    personal(){
        wx.navigateTo({
          url: '/pages/personal/personal',
        })
    },
    // 跳转订单
    dd(){
      wx.navigateTo({
        url: '/pages/myOrder/myOrder',
      })
    },
    // 兑换课程
    kc(){
      console.log(1);
      wx.navigateTo({
        url: '/pages/studyCard/studyCard',
      })
      },
      // 地址管理
     dz(){
       wx.navigateTo({
         url: '/pages/address/address',
       })
     },
    //  我的收藏
    sc(){
      wx.navigateTo({
        url: '/pages/Collection/Collection',
      })
    },
    // 我的会员
    hy(){
      wx.navigateTo({
        url: '/pages/member/member',
      })
    },
    // 我的优惠券
    yh(){
      wx.navigateTo({
        url: '/pages/myQuan/myQuan',
      })
    },
    // 我的消息
    xx(){
      wx.navigateTo({
        url: '/pages/messageList/messageList',
      })
    },
    // 问题反馈
    wt(){
      wx.navigateTo({
        url: '/pages/question/question',
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
      const this_ = this
      wx.getStorage({
        key: 'key',
        success (res) {
          console.log(res.data)
          this_.setData({
            key:res.data
          })
        }
      })
      console.log(this.data.key);
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