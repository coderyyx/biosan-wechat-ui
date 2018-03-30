// page/component/avatar/avatar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    api:[
      {
        props:'src',
        defaultValue:'空',
        dataType:'string',
        description:"图片地址"
      },
      {
        props: 'mold',
        defaultValue: 'circle',
        dataType: 'string',
        description: "圆、方"
      },
      {
        props: 'size',
        defaultValue: 'middle',
        dataType: 'string',
        description: "大、中、小"
      },
      {
        props: 'count',
        defaultValue: '无',
        dataType: 'string',
        description: "消息数"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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