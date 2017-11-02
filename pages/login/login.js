// pages/login/login.js
const app = getApp();
Page({
  data: {
    code: '获取验证码',
    text_send: 't2',
    phone:'',
    identifyCode:''
  },
  sendCode() {
    // let delay=60;
    // setInterval()
    this.setData({
      code: '验证码已发送',
      text_send: 't2 t2_change'
    })
  },
  handle_phone(event){
    this.data.phone=event.detail.value
    if(this.data.phone.length !== 11){
      wx.showToast({
        title: '手机号码错误',
        image: '/image/19.png'
      })
    }
  },
  handle_code(event){
    this.data.identifyCode=event.detail.value
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
    // wx.navigateBack({
    //   url: '../index/index',
    // })
    // app.globalData.flag = 1;
    console.log(this.data.phone,this.data.identifyCode)
    if(this.data.phone === '123'){
      wx.showToast({
        title: '登录成功',
        image: '/image/20.png'
      })
    }else{
      wx.showToast({
        title: '验证码错误',
        image: '/image/19.png'
      })
    }
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