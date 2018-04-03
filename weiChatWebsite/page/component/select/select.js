import {  bsSelectController } from "../../../dist/index.js";

Page(Object.assign({

  /**
   * 页面的初始数据
   */
  data: {
     api:[
        {
            props:'actions',
            defaultValue:'[]',
            dataType:'list',
            description:"选择项"
        },
        {
            props: 'valueList',
            defaultValue: '[]',
            dataType: 'list',
            description: "选中项"
        },
        {   
            props:'type',
            defaultValue: 'radio',
            dataType: 'string',
            description: "radio,checkbox"
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
            },
            {
                descp:'option3',
                value:'option3',
                flag:false,
                icon:'icon-wxbzhuye'
            }
        ],
        type:'radio',
        valueList:['option1']
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