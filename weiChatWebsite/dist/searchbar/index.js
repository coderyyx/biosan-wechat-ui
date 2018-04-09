const bsSearchbarController = {
  $bs_searchbar_init:function(options = {}){
    let {
      inputVal = "",
      inputShowed = false
      
    } = options;

    // init
    this.setData({
      bs_searchbar:{
        inputVal,
        inputShowed
      }
    });
  },
  $bs_searchbar_btnClick:function(e){
    let value = e.detail.value;

    if (this.inputTyping) {
      this.inputTyping(value);
    } else {
      console.warn('页面缺少 inputTyping 回调函数');
    }
  },
  $bs_searchbar_clearClick:function() {

    if(this.clearInput){
      this.clearInput();
    }else{
      console.warn('页面缺少 clearInput 回调函数');
    }
  },
  $bs_searchbar_showInput:function(){

    if (this.showInput) {
      this.showInput();
    } else {
      console.warn('页面缺少 showInput 回调函数');
    }
  },
  $bs_searchbar_hideInput:function() {

    if(this.hideInput){
      this.hideInput();
    }else{
      console.warn('页面缺少 hideInput 回调函数');
    }
  },
}

export {
  bsSearchbarController
}