//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    x: "120.352001",
    y: "30.313355",
    menu: 'state_disappear',
    top: 'top_disappear',
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
      height: 40,
      callout: {
        content: '编号：10001',
        padding: 10,
        bgColor: '#63B8FF',
        borderRadius: 5,
        fontSize: 13,
        color: '#fff'
      }
    }]
  },
  clickMap() {
    this.setData({
      menu: 'state_disappear',
      top: 'top_disappear'
    })
  },
  markertap(e) {
    this.setData({
      menu: 'pic',
      top: 'top'
    })
  },
  fun1() {
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
  fun2() {
    wx.navigateTo({
      url: '../user/user',
    })
  },
  remind_1() {
    wx.showToast({
      title: '预约成功',
      icon: 'success'
    })
  },
  remind_2() {
    wx.navigateTo({
      url: '../lock/lock',
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
  },
  onShow() {
    if (app.globalData.flag == 1 && app.globalData.next == 1) {
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      setTimeout(function () {
        wx.hideLoading()
        app.globalData.next = 0
      }, 2000)
    }
  }
})