import { dialogController} from "../../../dist/index.js";


Page(Object.assign({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  bs_dialog_listener:function(type){
    console.log(type);
  },
  bindNormal:function(){
    this.$bs_dialog_show({
      title: '弹窗',
      content: '这是一个模态弹窗',
      showCancel: true
    });
  },
  withoutTitleDialog:function(){
    this.$bs_dialog_show({
      content: '这是一个模态弹窗',
      showCancel: false
    });
  },
  toggleButtonDialog: function () {
    this.$bs_dialog_show({
      title: '弹窗',
      content: '这是一个模态弹窗',
      buttons: [{
        text: '现金支付',
        color: 'red',
        type: 'cash'
      }, {
        text: '微信支付',
        color: '#3CC51F',
        type: 'wechat'
      }, {
        text: '取消',
        type: 'cancel'
      }]
    })
  }, 
  toggleButtonVertical: function () {
    this.$bs_dialog_show({
      title: '弹窗',
      content: '这是一个模态弹窗',
      buttonsShowVertical:true,
      buttons: [{
        text: '现金支付',
        color: 'red',
        type: 'cash'
      }, {
        text: '微信支付',
        color: '#3CC51F',
        type: 'wechat'
      }, {
        text: '取消',
        type: 'cancel'
      }]
    })
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
}, dialogController));