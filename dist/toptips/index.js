const bsTipsControll = {
    $init : function(content , options){
        let bsTopTips = this.data.bsTopTips || {};
        //初始化定时器
        this.$clear(bsTopTips);
        //支持 options 是duration
        if (typeof options === 'number') {
          options = {
            duration: options
          };
        }
        // options参数默认参数扩展
        options = Object.assign({},{
          duration: 3000,
          result:"success",
          content
        }, options);

        return options;
    },
    $clear : function(bsTopTips){
        if (bsTopTips.timer) {
          clearTimeout(bsTopTips.timer);
          bsTopTips.timer = 0;
        }
    },
    $show : function(content = '' , options = {}){
        let _options = this.$init(content , options);
        
        let duration = _options.duration;

        let timer = setTimeout(() => {
            this.setData({
              'bsTopTips.show': false,
              'bsTopTips.timer': 0
            });
          }, duration);

          // 展示出topTips
          this.setData({
            bsTopTips: {
              show: true,
              timer,
              ..._options
            }
          });
    }
}
  
  export {
    bsTipsControll
  }
  