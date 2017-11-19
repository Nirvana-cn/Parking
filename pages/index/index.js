function AddMarker(obj) {
  this.iconPath = "/image/18.png"
  this.id = obj.sid
  this.latitude = obj.latitude
  this.longitude = obj.longitude
  this.location = obj.location
}
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
      location: '',
      time: '8:00-22:00'
    },
    markers: [],
    markers_1: [],
    markers_2: [],
    markers_3: [],
    pic_address: ['/image/24.png', '/image/25.png', '/image/22.png']
  },
  clickMap() {
    this.setData({
      menu: 'state_disappear',
      top: 'state_disappear'
    })
    app.globalData.park_id = -1
  },
  markertap(e) {
    if (app.globalData.flag_use === 0 && app.globalData.flag_login == 0) {
      let temp = {
        num: '10001',
        location: '',
        time: '8:00-22:00'
      }
      temp.location = this.data.markers.filter((val) => { return val.id === e.markerId })[0].location
      this.setData({
        top: 'top',
        detail: temp
      })
      app.globalData.park_id = e.markerId
    }
    if (app.globalData.flag_use === 0 && app.globalData.flag_login == 1) {
      let temp = {
        num: '10001',
        location: '',
        time: '8:00-22:00'
      }
      temp.location = this.data.markers.filter((val) => { return val.id === e.markerId })[0].location
      this.setData({
        menu: 'pic',
        top: 'top',
        detail: temp
      })
      app.globalData.park_id = e.markerId
    }
  },
  remind_1() {
    if (app.globalData.flag_use === 0) {
      wx.navigateTo({
        url: '../subscribe/subscribe'
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
      markers: this.data.markers_1,
      menu: 'state_disappear',
      top: 'state_disappear'
    })
    // console.log(this.data.markers)
  },
  select_p2() {
    this.setData({
      pic_address: ['/image/24.png', '/image/25.png', '/image/22.png'],
      markers: this.data.markers_2,
      menu: 'state_disappear',
      top: 'state_disappear'
    })
    // console.log(this.data.markers)
  },
  select_p3() {
    this.setData({
      pic_address: ['/image/24.png', '/image/26.png', '/image/21.png'],
      markers: this.data.markers_3,
      menu: 'state_disappear',
      top: 'state_disappear'
    })
    // console.log(this.data.markers)
  },
  onLoad() {
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
    wx.request({
      url: 'http://120.25.200.217:8080/IparkingWeb/Spaces.action?flag=1',
      data: {},
      success(res) {
        for (let i = 0; i < res.data.length; i++) {
          let temp = new AddMarker(res.data[i])
          that.data.markers_1[i] = temp
        }
      }
    })
    wx.request({
      url: 'http://120.25.200.217:8080/IparkingWeb/Spaces.action?flag=2',
      data: {},
      success(res) {
        for (let i = 0; i < res.data.length; i++) {
          let temp = new AddMarker(res.data[i])
          that.data.markers_3[i] = temp
        }
      }
    })
  },
  onShow() {
    let that = this
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
