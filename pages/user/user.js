// pages/user/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: '',
    condition: 0
  },
  jumpToWallet() {
    if (app.globalData.flag_login == 1) {
      wx.navigateTo({
        url: '../wallet/wallet',
      })
    }
  },
  jumpToOrder() {
    if (app.globalData.flag_login == 1) {
      wx.navigateTo({
        url: '../order/order',
      })
    }
  },
  jumpToPublish() {
    if (app.globalData.flag_login == 1) {
      wx.navigateTo({
        url: '../publish/publish',
      })
    }
  },
  jumpToManage() {
    if (app.globalData.flag_login == 1) {
      wx.navigateTo({
        url: '../manage/manage',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      user: app.globalData.userInformation
    })
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
    if (app.globalData.flag_login == 1) {
      this.setData({
        condition: 1
      })
    }
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

  }
})