//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    x: "120.352001",
    y: "30.313355",
    menu: 'state_disappear',
    top: 'state_disappear',
    used_time: 'state_disappear',
    time: 0,
    detail: {
      num: '10001',
      location: '浙江理工大学生活一区1单元106号',
      time: '8:00-22:00'
    },
    markers: [],
    pic_address: ['/image/24.png', '/image/25.png', '/image/22.png'],
    map_markers: {
      roadSide: [{
        iconPath: "/image/18.png",
        id: 0,
        latitude: 30.313179,
        longitude: 120.351915
      }],
      parking: [{
        iconPath: "/image/18.png",
        id: 1,
        latitude: 30.312139,
        longitude: 120.355995
      }, {
        iconPath: "/image/18.png",
        id: 2,
        latitude: 30.273546,
        longitude: 120.155501
      }],
      district: [{
        iconPath: "/image/18.png",
        id: 3,
        latitude: 30.308888,
        longitude: 120.355705
      }]
    }
  },
  clickMap() {
    this.setData({
      menu: 'state_disappear',
      top: 'state_disappear'
    })
    app.globalData.park_id = -1
  },
  markertap(e) {
    if (app.globalData.flag_use === 0) {
      this.setData({
        menu: 'pic',
        top: 'top'
      })
      console.log(e.markerId)
      app.globalData.park_id = e.markerId
    }
  },
  remind_1() {
    if (app.globalData.flag_use === 0) {
      wx.navigateTo({
        // url: '../subscribe/subscribe',
        url: '../finish/finish'
      })
    }
  },
  remind_2() {
    if (app.globalData.flag_use === 0) {
      wx.navigateTo({
        url: '../lock/lock',
      })
    }
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
  select_p1() {
    this.setData({
      pic_address: ['/image/23.png', '/image/26.png', '/image/22.png'],
      markers: this.data.map_markers.roadSide,
      menu: 'state_disappear',
      top: 'state_disappear'
    })
  },
  select_p2() {
    this.setData({
      pic_address: ['/image/24.png', '/image/25.png', '/image/22.png'],
      markers: this.data.map_markers.parking,
      menu: 'state_disappear',
      top: 'state_disappear'
    })
  },
  select_p3() {
    this.setData({
      pic_address: ['/image/24.png', '/image/26.png', '/image/21.png'],
      markers: this.data.map_markers.district,
      menu: 'state_disappear',
      top: 'state_disappear'
    })
  },
  onLoad() {
    this.setData({
      markers: this.data.map_markers.parking
    })
    if (app.globalData.flag_login == 0) {
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
    if (app.globalData.flag_use === 1) {
      this.setData({
        menu: 'state_disappear',
        top: 'state_disappear',
        used_time: 'used_time'
      })
    }
    if (app.globalData.flag_use === 2) {
      this.setData({
        menu: 'state_disappear',
        top: 'state_disappear'
      })
    }
  }
})