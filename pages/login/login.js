// pages/login/login.js
const app = getApp();
Page({
  data: {
    code: '获取验证码',
    code_style: 'text',
    phone: '',
    identifyCode: ''
  },
  handle_phone(event) {
    this.data.phone = event.detail.value
    if (this.data.phone.length !== 11) {
      wx.showToast({
        title: '手机号码错误',
        image: '/image/19.png'
      })
    }
  },
  handle_code(event) {
    this.data.identifyCode = event.detail.value
  },
  sendCode() {
    let n = 10;
    let that=this;
    this.setData({
      code: '验证码已发送(' + n + 's)',
      code_style: 'text text_change'
    })
    let time=setInterval(function () {
      that.setData({
        code: '验证码已发送(' + (--n) + 's)',
      })
      if(n===-1){
        that.setData({
          code: '获取验证码',
          code_style: 'text'
        })
        clearInterval(time)
      }
    }, 1000)
  },
  login() {
    if (this.data.identifyCode === '123456') {
      wx.request({
        url: 'http://120.25.200.217:8080/IparkingWeb/LoginServlet',
        data: {
          phone: this.data.phone
        },
        success(res) {
          console.log(res.statusCode)
          console.log(res.data)
          app.globalData.userInformation=res.data
          app.globalData.flag = 1;
        },
        fail() {
          wx.showToast({
            title: '网络连接失败',
            image: '/image/19.png'
          })
        }
      })
      wx.navigateBack({
        url: '../index/index',
      })
    } else {
      wx.showToast({
        title: '验证码错误',
        image: '/image/19.png'
      })
    }
  }
})
// wx.onSocketOpen(function () {
//   wx.sendSocketMessage({
//     data: JSON.stringify({ type: 'join', userId: '_12' }),
//   })
//   wx.sendSocketMessage({
//     data: JSON.stringify({ type: 'msgTo', userId: '_12', info: { toLockId: '12', lockPasswd: '4567' } }),
//   })
//   wx.onSocketMessage(function (res) {
//     console.log(res.data)
//   })
// })
// connect1() {
//   wx.connectSocket({
//     url: 'ws://120.25.200.217:10102/ws',
//     header: {
//       'content-type': 'application/json'
//     },
//     method: "GET",
//     success() {
//       console.log('success');
//     },
//     fail() {
//       console.log('fail')
//     }
//   })
// }