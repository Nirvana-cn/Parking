// pages/lock/lock.js
const app = getApp()
Page({
  data: {

  },
  onLoad() {
    wx.request({
      url: 'http://127.0.0.1:3000/user/lock',
      data: {
        phone: app.globalData.userInformation.phone,
        parking: app.globalData.park_id
      },
      success(res) {
        app.globalData.flag_use=true
        wx.navigateBack({
          url: '../index/index'
        })
      },
      fail() {
        wx.showToast({
          title: '网络连接失败',
          image: '/image/19.png'
        })
      }
    })
  }
})
