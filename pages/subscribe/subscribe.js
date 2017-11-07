const app=getApp()
Page({
  data: {
    date: '2017-09-01',
    time1: '10:00',
    time2: '12:00'
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time1: e.detail.value
    })
  },
  bindTimeChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time2: e.detail.value
    })
  },
  show(){
    wx.navigateBack({
      url:'../index/index'
    })
    app.globalData.flag_use=2
  }
})