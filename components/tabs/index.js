
const bsTabsController = {
  
$bs_tabs_init:function(options,res){
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            let tabWidth = options.tabWidth?options.tabWidth:100 / options.tabs.length;
            options.tabWidth = tabWidth;
            let _options = Object.assign({},{
                selectColor : "#ccc",//tabs 选中颜色
                textColor:"#000",//tab字体颜色
                tabWidth: tabWidth,//tab宽度 单位为（%）
                sliderWidth: tabWidth,//滚动条宽度 单位为（%）
                sliderOffset: options.activeIndex?options.activeIndex*100:0,//滚动条位移距离
                activeIndex:0,//当前选中项
                contentHeight: 100,//内容高度
            },options);
            that.setData({
                bs_tabs:{
                  ..._options
              }
          });
      } })
    },
    
    $bs_swiper_change: function (e) {
        var current = e.detail.current;
        this.setData({
          bs_tabs:{
            ...this.data.bs_tabs,
            activeIndex: current,
            sliderOffset: (100 * current)
          }
        });
        console.log("bindChange:" + current,...this.data.bs_tabs,e);
      },
    
    $bs_nav_tab_click: function (e) {
        this.setData({
          bs_tabs:{
            ...this.data.bs_tabs,
            sliderOffset: (100*e.currentTarget.id),
            activeIndex: e.currentTarget.id
          }
        });
        console.log("navTabClick:" + e.currentTarget.id,e.currentTarget,);
      }
}

export {
  bsTabsController
}

