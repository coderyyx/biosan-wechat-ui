import { loadingController} from "../../../dist/index.js";
 
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
  defaultLoading:function(){
    this.$bs_loading_show();
  },
  definePic:function(){
    this.$bs_loading_show({
      image:"https://s10.mogucdn.com/mlcdn/c45406/171023_625g128f20b5k0aace38jgghe737b_200x200.png",
      slip:"https://s10.mogucdn.com/mlcdn/c45406/170810_6la1hibih5861b4i2j0j5e4jgl3ee_200x200.png"
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
}, loadingController))