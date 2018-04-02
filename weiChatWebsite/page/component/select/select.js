import {  bsSelectController } from "../../../dist/index.js";

Page(Object.assign({

  /**
   * 页面的初始数据
   */
  data: {
     api:[
        {
            props:'inputVal',
            defaultValue:'空',
            dataType:'string',
            description:"输入内容"
        },
        {
            props: 'inputShowed',
            defaultValue: 'false',
            dataType: 'bool',
            description: "是否选中"
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //组件初始化
    this.$bs_select_init({
        actions:[
            {
                descp:'option1',
                value:'option1',
                flag:false,
                icon:'icon-wxbzhuye'
            },
            {
                descp:'option2',
                value:'option2',
                flag:false,
                icon:'icon-wxbzhuye'
            }
        ],
    });
  },
  btnSelect: function (value) {
    this.setData({
      ['bs_select.valueList']: value
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
},bsSelectController));