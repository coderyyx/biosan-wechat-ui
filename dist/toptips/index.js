const BsTopTips=function(content = '', options = {}) {
    let bsTopTips = this.data.bsTopTips || {};
    // 如果已经有一个计时器在了，就清理掉先
    if (bsTopTips.timer) {
      clearTimeout(bsTopTips.timer);
      bsTopTips.timer = 0;
    }
    //支持只传入duration
    if (typeof options === 'number') {
      options = {
        duration: options
      };
    }
  
    // options参数默认参数扩展
    console.log(options)
    options = Object.assign({
      duration: 3000,
      result:"success"
    }, options);
    console.log(options)
    // 设置定时器，定时关闭topTips
    let timer = setTimeout(() => {
      this.setData({
        'bsTopTips.show': false,
        'bsTopTips.timer': 0,
        'bsTopTips.result':"success"
      });
    }, options.duration);
  
    // 展示出topTips
    this.setData({
      bsTopTips: {
        show: true,
        content,
        ...options,
        timer
      }
    });
  }
  
  export {
    BsTopTips
  }
  