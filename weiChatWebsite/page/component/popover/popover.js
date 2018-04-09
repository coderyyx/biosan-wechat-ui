import {bsPopoverController} from '../../../dist/index.js';

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
    this.$bs_popover_init();
  },
  showPopover:function(){
    this.$bs_popover_init({
        data: [{
            action: 'Scan',
            icon: 'icon-wxbzhuye'
        }, 
        {
            action: 'My Qrcode',
            icon: 'icon-atm'
        }, 
        {
            action: 'Help',
            icon: 'icon-refresh'
        }]
    });
    console.log(111)
    this.setData({
      ['bs_popover.show']: true
    })
  },


  handlePopoverConfirm:function(index){
    console.log(`当前选中了${index}`);

    this.setData({
      ["bs_popover.show"]: false
    })
  },
   handlePopoverCancel:function(){

    this.setData({
      ["bs_popover.show"]: false
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
},bsPopoverController));