import {  bsActionSheetController } from "../../../dist/index.js";

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
    //组件初始化
    this.$bs_actionSheet_init();
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  showDefaultActionSheet:function(){
      this.setData({
        'bs_actionSheet.show':true
      })
  },
  showDefineActionSheet:function(){
    this.$bs_actionSheet_init({
      actions: [{
        name: '动作一',
        subname: '选项描述语1',
        className: 'action-class',
        loading: false
      }, {
          name: '动作二',
          subname: '选项描述语2',
          className: 'action-class',
          loading: false
        }, {
          name: '动作三',
          subname: '选项描述语3',
          className: 'action-class',
          loading: false
        }]});
    this.setData({
      'bs_actionSheet.show': true
    })
  },

  handleActionsheetCancel: function ({ componentId}){
    this.setData({
      [`${componentId}.show`]: false
    })
  },

  onShareAppMessage(res) {
    console.log(res)
    return {
      title: 'biosan-wei-UI',
      imageUrl: "http://treatdemo.xsesc.com/Treat/web/Layout/index/Images/loginLogo.png"
    };
  },

  handleActionsheetConfirm:function({componentId , index}){
    wx.showToast({
      title: `当前选中了 ${index}`,
    });
    this.setData({
      [`${componentId}.show`]: false
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
},bsActionSheetController));