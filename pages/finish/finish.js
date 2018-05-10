const app = getApp()
Page({
  data: {
    time:0,
    money:0,
    cost:5,
    pay:5
  },
  returnIndex(){
    app.globalData.flag_use=false
    wx.reLaunch({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this
    wx.request({
      url: 'http://127.0.0.1:3000/user/clear',
      data:{
        phone:app.globalData.userInformation.phone
      },
      success(res) {
        console.log(res.data)
        that.setData({
          time:new Date(res.data.time).getSeconds(),
          money:app.globalData.userInformation.account
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})