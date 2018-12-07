var WxParse = require('../../wxParse/wxParse.js');
// pages/searchDetail/searchDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ keyword: options.keyword})
    this.getRenrenList()
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

  },
  getRenrenList() {
    var that = this;
    wx.request({
      // url: 'http://47.107.183.69/listxcx?keyword=' + this.data.keyword,
      url: 'http://localhost/listxcx?keyword=' + this.data.keyword,
      data: {},
      method: 'GET', 
      success: function (res) {
        that.setData({ dataList: res.data.data });
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  goToArticle : function(p) {
    console.log(p)
  }
})