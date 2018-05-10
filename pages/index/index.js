const app = getApp()
Page({
  data: {
    x: "120.352001",
    y: "30.313355",
    // menu控制解锁和预约按钮样式
    menu1: 'state_disappear',
    menu2: 'state_disappear',
    // top控制顶部通知栏
    top: 'state_disappear',
    used_time: 'state_disappear',
    available:true,
    time: 0,
    detail: '',
    markers:[],
    parks: [[],[],[]],
    pic_address: ['/image/24.png', '/image/25.png', '/image/22.png']
  },
  clickMap() {
    this.setData({
      menu1: 'state_disappear',
      menu2: 'state_disappear',
      top: 'state_disappear'
    })
    app.globalData.park_id = -1
  },
  markertap(e) {
    if (app.globalData.flag_use === true && app.globalData.flag_login == true) {
      let target = this.data.markers.filter((val) => { return val.id === e.markerId })[0]
      let temp = {
        num: target.id,
        location: target.location,
        time: '全天'
      }
      this.setData({
        top: 'state_disappear',
        detail: temp
      })
      app.globalData.park_id = e.markerId
      console.log(e.markerId)
    }
    if (app.globalData.flag_use === false && app.globalData.flag_login == true) {
      let target = this.data.markers.filter((val) => { return val.id === e.markerId })[0]
      let temp = {
        num: target.id,
        location: target.location,
        time: '全天'
      }
      if(this.data.available==true){
        this.setData({
          menu1: 'pic',
          menu2: 'pic',
          top: 'top',
          detail: temp
        })
      }else{
        this.setData({
          menu2: 'pic',
          top: 'top',
          detail: temp
        })
      }
      app.globalData.park_id = e.markerId
      console.log(e.markerId)
    }
  },
  jump(){
    wx.navigateTo({
      url: '../lock/lock',
    })
  },
  remind_1() {
    if (app.globalData.flag_use === false) {
      wx.navigateTo({
        url: '../subscribe/subscribe'
      })
    }
  },
  remind_2() {
    if (app.globalData.flag_use === false) {
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
      markers: this.data.parks[0],
      menu1: 'state_disappear',
      menu2: 'state_disappear',
      top: 'state_disappear',
      available: true
    })
  },
  select_p2() {
    this.setData({
      pic_address: ['/image/24.png', '/image/25.png', '/image/22.png'],
      markers: this.data.parks[1],
      menu1: 'state_disappear',
      menu2: 'state_disappear',
      top: 'state_disappear',
      available: true
    })
  },
  select_p3() {
    this.setData({
      pic_address: ['/image/24.png', '/image/26.png', '/image/21.png'],
      markers: this.data.parks[2],
      menu1: 'state_disappear',
      menu2: 'state_disappear',
      top: 'state_disappear',
      available: false
    })
  },
  onLoad() {
    if (app.globalData.flag_login == false) {
      wx.navigateTo({
        url: '../login/login',
      })
    }
    let that = this
    // 初始化定位
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
    if (app.globalData.flag_use === true) {
      this.setData({
        menu1: 'state_disappear',
        menu2: 'state_disappear',
        top: 'state_disappear',
        used_time: 'used_time'
      })
    }
    if (app.globalData.flag_use === false) {
      this.setData({
        menu1: 'state_disappear',
        menu2: 'state_disappear',
        top: 'state_disappear'
      })
    }
    // 初始化可用车位标记点信息
    let that=this
    wx.request({
      url: 'http://127.0.0.1:3000/park/init',
      data: {},
      success(res) {
        that.setData({
          parks: [[], [], []]
        })
        res.data.map((val) => {
          that.data.parks[val.category - 1].push({
            id: val.park,
            latitude: val.latitude,
            longitude: val.longitude,
            location: val.location,
            iconPath: '/image/18.png'
          })
        })
        console.log(that.data.parks)
        that.setData({
          markers: that.data.parks[1]
        })
      }
    })
  }
})
