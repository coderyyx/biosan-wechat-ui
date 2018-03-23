import { bsToastController} from "../../../dist/index.js";

Page(Object.assign({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  noIcon:function(){
    this.$bs_toast_show({text:"加载中..."});
  },
  icon:function(){
    this.$bs_toast_show({ text: "加载中..." ,icon:"icon-refresh"});
  },
  src:function(){
    this.$bs_toast_show({ text: "加载中...", src:"https://s10.mogucdn.com//mlcdn/c45406/171017_885a650c746k7hajhf04aja566h1i_68x68.png" });
  },
  level:function(){
    this.$bs_toast_show({ text: "这是一个非常长非常长非常长的文案！" });
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
},bsToastController))