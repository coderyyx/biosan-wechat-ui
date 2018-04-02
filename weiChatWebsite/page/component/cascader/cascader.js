import { cascaderController} from "../../../dist/index.js";
import sourceData from "../../common/area.js";

Page(Object.assign({

  /**
   * 页面的初始数据
   */
  data: {
      name:"default"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.$bs_cascader_init(sourceData.data);
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
  $cascaderConfirm:function(d,v){
    this.setData({
      name:d
    })
  }
}, cascaderController))