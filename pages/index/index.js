//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    x: "120.352001",
    y: "30.313355",
    menu: 'state_disappear',
    top: 'state_disappear',
    park_number: '10001',
    park_location: '浙江理工大学生活一区1单元106号',
    park_time: '8:00-22:00',
    markers: [{
      iconPath: "/image/18.png",
      id: 0,
      latitude: 30.313179,
      longitude: 120.351915
    }, {
      iconPath: "/image/18.png",
      id: 1,
      latitude: 30.312139,
      longitude: 120.355995
    }, {
      iconPath: "/image/18.png",
      id: 2,
      latitude: 30.308888,
      longitude: 120.355705
    }, {
      iconPath: "/image/18.png",
      id: 3,
      latitude: 39.903200,
      longitude: 116.408342
    }, {
      iconPath: "/image/18.png",
      id: 4,
      latitude: 30.273435,
      longitude: 120.155711,
      height: 40
    }],
    pic_address: ['/image/24.png', '/image/25.png','/image/22.png']
  },
  clickMap() {
    this.setData({
      menu: 'state_disappear',
      top: 'state_disappear'
    })
  },
  markertap(e) {
    this.setData({
      menu: 'pic',
      top: 'top'
    })
  },
  remind_1() {
    wx.navigateTo({
      url: '../subscribe/subscribe',
    })
  },
  remind_2() {
    wx.navigateTo({
      url: '../lock/lock',
    })
  },
  remind_3() {
    let that = this
    wx.getLocation({
      success: function (res) {
        that.setData({
          x: res.longitude,
          y: res.latitude
        })
      }
    })
  },
  remind_4() {
    wx.navigateTo({
      url: '../user/user',
    })
  },
  select_p1(){
    this.setData({
      pic_address: ['/image/23.png', '/image/26.png', '/image/22.png']
    })
  },
  select_p2() {
    this.setData({
      pic_address: ['/image/24.png', '/image/25.png', '/image/22.png']
    })
  },
  select_p3() {
    this.setData({
      pic_address: ['/image/24.png', '/image/26.png', '/image/21.png']
    })
  },
  onLoad() {
    if (app.globalData.flag == 0) {
      wx.navigateTo({
        url: '../login/login',
      })
    }
    let that = this
    wx.getLocation({
      success: function (res) {
        that.setData({
          x: res.longitude,
          y: res.latitude
        })
      }
    })
  }
})