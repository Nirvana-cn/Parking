// pages/login/login.js
const app = getApp();
Page({
  data: {
    code: '获取验证码',
    text_send: 't2'
  },
  sendCode() {
    this.setData({
      code: '验证码已发送',
      text_send: 't2 t2_change'
    })
  },
  jump() {
    // wx.request({
    //   url: 'http://120.25.200.217:8080/IparkingWeb/LoginServlet',
    //   data:{
    //     userName:'admin',
    //     pwd:'admin'
    //   },
    //   success(res){
    //     console.log(res.statusCode)
    //     console.log(res.data)
    //   },
    //   fail(){
    //     console.log('fail')
    //   }
    // })
    wx.navigateBack({
      url: '../index/index',
    })
    app.globalData.flag = 1;
  },
  connect1() {
    wx.connectSocket({
      url: 'ws://120.25.200.217:10102/ws',
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success() {
        console.log('success');
      },
      fail() {
        console.log('fail')
      }
    })
  }
})
wx.onSocketOpen(function () {
  wx.sendSocketMessage({
    data:JSON.stringify({type:'join',userId:'_12'}),
  })
  wx.sendSocketMessage({
    data: JSON.stringify({type:'msgTo',userId:'_12',info:{toLockId:'12',lockPasswd:'4567'}}),
  })
  wx.onSocketMessage(function (res) {
    console.log(res.data)
  })
})