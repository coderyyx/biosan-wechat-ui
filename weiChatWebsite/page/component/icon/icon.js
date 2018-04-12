// page/component/icon/icon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: [{
      class:"icon-wxbzhuye",
      name:"主页"
    },{
      class:"icon-atm",
      name:"atm"
    }, {
        class: "icon-link",
      name: "link"
      }, {
        class: "icon-down",
      name: "down"
      }, {
        class: "icon-refresh",
        name: "refresh"
    }, {
        class: "icon-good",
        name: "good"
      }, {
        class: "icon-iconfontmingpian",
        name: "card"
    }, {
        class: "icon-iconfontxingxing",
      name: "star"
      }, {
        class: "icon-wxbsousuotuiguang",
        name: "搜索推广"
      } , {
        class: "icon-tipssuccess",
        name: "成功"
      }, {
        class: "icon-jiantou",
        name: "右箭头"
      }, {
        class: "icon-jiantou2",
        name: "左箭头"
      }, {
        class: "icon-danjiantoushang",
        name: "上箭头"
      }, {
        class: "icon-jiantou6",
        name: "下箭头"
      },{
        class:"icon-chacha",
        name:"叉"
      },{
        class:"icon-laba",
        name:"喇叭"
      },{
        class:"icon-zhengque",
        name:"正确"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  choose(e){
    let { _class } = e.currentTarget.dataset;
    // console.log(_class)
    wx.showToast({
      title:_class,
      icon:'none'
    });
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