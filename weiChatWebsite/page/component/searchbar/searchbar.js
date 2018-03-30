
Page({
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
    ],
    inputVal: ""
  },
  onLoad:function(){
    
  },
  onShow:function(){

  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {

    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});