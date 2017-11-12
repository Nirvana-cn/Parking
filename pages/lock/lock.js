// pages/lock/lock.js
let flag = 0
const app=getApp()
Page({
  data: {

  },
  onLoad: function (options) {
    wx.connectSocket({
      url: 'ws://120.25.200.217:10102/ws',
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success() {
        app.globalData.flag_use=1
        // setTimeout(function () {
        //   wx.navigateBack({
        //     url: '../index/index'
        //   })
        // }, 2000)
      },
      fail() {
        console.log('fail')
        wx.navigateBack({
          url: '../index/index'
        })
      }
    })
  }
})
wx.onSocketOpen(function () {
  if (flag === 0) {
    wx.sendSocketMessage({
      data: JSON.stringify({ type: 'join', userId: '_12' }),
    })
    flag = 1;
  }
  wx.sendSocketMessage({
    data: JSON.stringify({ type: 'msgTo', userId: '_12', info: { toLockId: '12', lockPasswd: '4567' } }),
  })
  wx.onSocketMessage(function (res) {
    console.log(res.data)
  })
})