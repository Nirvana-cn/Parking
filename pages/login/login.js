// pages/login/login.js
const app = getApp();
Page({
  data: {
    code: '获取验证码',
    phone: '',
    identifyCode: '',
    disabled:false
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
    let n = 60;
    let that=this;
    this.setData({
      code: '验证码已发送(' + n + 's)',
      disabled:true
    })
    let time=setInterval(function () {
      that.setData({
        code: '验证码已发送(' + (--n) + 's)',
      })
      if(n===-1){
        that.setData({
          code: '获取验证码',
          disabled: false
        })
        clearInterval(time)
      }
    }, 1000)
  },
  login() {
    if (this.data.identifyCode === '111111') {
      let that=this
      wx.request({
        url: 'http://127.0.0.1:3000/user/login',
        data: {
          phone: that.data.phone
        },
        success(res) {
          app.globalData.userInformation=res.data
          // console.log(res.data)
          app.globalData.flag_login = true;
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
    } else {
      wx.showToast({
        title: '验证码错误',
        image: '/image/19.png'
      })
    }
  }
})