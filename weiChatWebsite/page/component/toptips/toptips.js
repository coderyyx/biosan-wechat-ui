import { bsTipsControll} from "../../../dist/index.js";

Page(Object.assign({

  /**
   * 页面的初始数据
   */
  data: {
  api: [
    {
      props: 'duration',
      defaultValue: 3000,
      dataType: 'number',
      description: "提示modal显示时间"
    },
    {
      props: 'result',
      defaultValue: 'success',
      dataType: 'string',
      description: "控制成功|失败"
    },
    {
      props: 'content',
      defaultValue: '空',
      dataType: 'string',
      description: "提示语"
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
  show:function(){
    // this.BsTopTips("成功！");
    this.$show("成功！");
  },
  show_warn:function(){
    // this.BsTopTips("失败！",{result:"error"});
    this.$show("失败！",{result:"error"});
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
}, bsTipsControll))