// pages/myQuan/myQuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:'全部',
        id:1
      },
      {
        name:'未使用',
        id:2
      },
      {
        name:'已使用',
        id:3
      },
      {
        name:'已过期',
        id:4
      }
    ],
    ids:1
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
  tab(e){
    console.log(e);
    this.setData({
      ids:e.currentTarget.dataset.id
    })
  }
})