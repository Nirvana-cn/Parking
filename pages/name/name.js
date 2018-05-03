// pages/name/name.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userName: ''
  },
  changeName(e) {
    this.setData({
      userName:e.detail.value
    })
  },
  confirmName() {
    let that=this
    wx.request({
      url: 'http://127.0.0.1:3000/user/name',
      data: {
        phone: app.globalData.userInformation.phone,
        name: that.data.userName
      },
      success(res) {
        wx.navigateBack({
          url: '../user/user',
        })
      },
      fail() {
        wx.showToast({
          title: '网络连接失败',
          image: '/image/19.png'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    this.setData({
      userName: app.globalData.userInformation.name
    })
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