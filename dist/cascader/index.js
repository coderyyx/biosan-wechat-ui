let cascaderController = cascaderController || {};

cascaderController = {
  $bs_cascader_init:function(sourceData){
    if(!Array.isArray(sourceData))
      console.warn("数据错误！");

    let provinceData = sourceData;
    let cityData = provinceData[0].children;
    let areaData = cityData[0].children;
    //init
    this.setData({
      bs_cascader:{
        provinceData,
        cityData,
        areaData
      }
    });
  },
  $bs_cascader_showCascader:function(){
      //show
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease',
      })
      this.animation = animation;
      animation.height(1332 + 'rpx').step()
      this.setData({
        animationData: animation.export()
      })

  },
  $bs_cascader_cancel:function(){
    //这里也是动画，然其高度变为0
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })

      this.animation = animation;
      animation.height(0 + 'rpx').step()
      this.setData({
        animationData: animation.export()
      });
  },
  $bs_cascader_confirm:function(){
    let { tempDescp, tempValue, provinceData, cityData, areaData } = this.data.bs_cascader;
    //默认选中
    if(!tempDescp){
      let pV = provinceData[0].value;
      let pL = provinceData[0].label;
      let cV = cityData[0].value;
      let cL = cityData[0].label;
      let aV = areaData[0].value;
      let aL = areaData[0].label;
      tempValue = [ pV , cV , aV];
      tempDescp = `${pL} ${cL} ${aL}`;
    }
    //回调
    if(this.$cascaderConfirm)
      this.$cascaderConfirm(tempDescp,tempValue);
    else
      console.warn("缺少 $cascaderConfirm 回调函数！");
    //隐藏cascade
    this.$bs_cascader_cancel();
  },
  /*
    为了做到组件的通用
    如下方法中的children & value 字段 可以做成可配置
  */
  $bs_cascader_valueChange:function(e){
   let { provinceData, cityData, areaData, applyDetails, tempDescp, tempValue} = this.data.bs_cascader;
    //暂存
    let { value} = e.detail;
    let [ v_0 , v_1 , v_2] = value;
    //设置panel展示数据
    let city = provinceData[v_0].children;
    /*
      改变省的情况下 新得到的value的v_2 还是之前的值
      省的变动导致city得到新值 ，v_2可能会超出新city
      做特殊处理
    */
    v_1 = (v_1 > city.length || v_1==city.length) ? 0 : v_1 ;
    let area = city[ v_1 ].children;
    if(!Array.isArray(area) || area.length == 0){
      area = [{
        label:"",
        value:null
      }]
    }
    this.setData({
      "bs_cascader.cityData":city,
      "bs_cascader.areaData":area
    });
    //获取value & descrition
    let provinceValue = provinceData[v_0].value;
    let provinceDescp = provinceData[v_0].label;
    let cityValue = city[v_1].value;
    let cityDescp = city[v_1].label;
    let areaValue = area[v_2].value;
    let areaDescp = area[v_2].label;
    
    // 省市区label
    tempDescp = `${provinceDescp} ${cityDescp} ${areaDescp}`;
    tempValue = [ provinceValue, cityValue, areaValue ];
    //此处仅暂存changValue
    this.setData({
      "bs_cascader.tempDescp":tempDescp,
      "bs_cascader.tempValue":tempValue
    })
  }
}

export {
    cascaderController
}