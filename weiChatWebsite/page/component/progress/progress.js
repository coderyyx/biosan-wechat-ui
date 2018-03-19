// page/component/progress/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent:50,
    api:[
      {
        props:'percent',
        defaultValue:0,
        dataType:'number',
        description:"百分比"
      },
      {
        props: '_bs_info',
        defaultValue: '空',
        dataType: 'string',
        description: "显示百分比"
      },
      {
        props: '_bs_color',
        defaultValue: '#1aad19',
        dataType: 'string',
        description: "背景色"
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
    var that = this;
    var id;
    

    id = setInterval(function(){
      let { percent } = that.data;

      if (percent == 100) {
        clearInterval(id);
        return;
      }
      that.setData({
        percent: percent + 1
      })
    } , 50)
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