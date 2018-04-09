import {  bsSegmentController } from "../../../dist/index.js";

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
            description:"选项"
        },
        {
            props: 'disabled',
            defaultValue: false,
            dataType: 'bool',
            description: "启、禁用"
        },
        {   
            props:'bgColor',
            defaultValue: '空',
            dataType: 'string',
            description: "空、red"
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //组件初始化
    this.$bs_segment_init({
        actions:[
            {
                descp:'segment1',
                value:'segment1',
                flag:true
            },
            {
                descp:'segment2',
                value:'segment2',
                flag:false
            },
            {
                descp:'segment3',
                value:'segment3',
                flag:false
            }
        ]
    });
  },
  //点击，返回当前value
  btnSegment: function (value) {
    this.setData({
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
},bsSegmentController));