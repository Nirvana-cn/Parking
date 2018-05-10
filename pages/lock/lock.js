// pages/lock/lock.js
const app = getApp()
let that
Page({
  data: {
    first:'top',
    second:'hidden'
  },
  onLoad() {
    that=this;
    wx.connectSocket({
      url: 'ws://127.0.0.1:3001',
      data: {
        user: app.globalData.userInformation.phone,
        park: app.globalData.park_id
      },
      header: {
        'content-type': 'application/json'
      },
      protocols: ['protocol1'],
      method: "GET"
    })
  }
})
wx.onSocketOpen(function (res) {
  console.log('WebSocket连接已打开！')
  let data = JSON.stringify({
    user: app.globalData.userInformation.phone,
    park: app.globalData.park_id
  })
  wx.sendSocketMessage({
    data: data,
    success() {
      console.log('socket information has send')
    }
  })
})
wx.onSocketMessage(function (res) {
  console.log('receive information from server:' + res.data)
  if (res.data === 'success') {
    app.globalData.flag_use = true
    console.log('receive ' + res.data)
    console.log(that.data.top)
    that.setData({
      first:'hidden',
      second:'bottom'
    })
  }
  if (res.data === 'finish') {
    app.globalData.flag_use = false
    console.log('receive '+res.data)
    wx.closeSocket()
    wx.reLaunch({
      url: '../finish/finish',
    })
  }
})
