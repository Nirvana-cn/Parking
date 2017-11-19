// pages/lock/lock.js
let flag = 0
const app = getApp()
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
        app.globalData.flag_use = 1
        setTimeout(function () {
          wx.navigateBack({
            url: '../index/index'
          })
        }, 2000)
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
  let userMessage = {
    type: 'join',
    userId: '_'+app.globalData.userInformation.userid
  }
  let lockMessage = {
    type: 'msgTo',
    userId: '_' + app.globalData.userInformation.userid,
    info: {
      toLockId: app.globalData.park_id,
      msg: '_6abcd'
    }
  }
  if (flag === 0) {
    wx.sendSocketMessage({
      data: JSON.stringify(userMessage),
    })
    flag = 1;
  }
  wx.sendSocketMessage({
    data: JSON.stringify(lockMessage),
  })
  wx.onSocketMessage(function (res) {
    if(res.data==='{6ok}'){
      wx.request({
        url: 'http://120.25.200.217:8080/IparkingWeb/RoadWantParking.action',
        data: {
          userid: app.globalData.userInformation.userid,
          sid: app.globalData.park_id,
          fl: 1
        },
        success(res) {
          console.log('success')
        },
        fail() {
          console.log('fail')
        }
      })
    }
  })
})
