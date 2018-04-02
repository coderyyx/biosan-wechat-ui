const bsSelectController = {
  $bs_select_init:function(options = {}){
    let {
      valueList = [],
      actions = [
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
      ]
      
    } = options;

    // init
    this.setData({
      bs_select:{
        valueList,
        actions
      }
    });
  },
  $bs_select_selected:function({ currentTarget = {} }){
    const dataset = currentTarget.dataset || {};
    console.log(dataset);
    const { index, item } = dataset;

    let valueList = this.data.bs_select.valueList;
    let actions = this.data.bs_select.actions;
    let valueFlag = actions[index].flag;
    
    if(!valueFlag){
        valueList.splice(index,0,item.value); 
    }else{
        valueList.splice(index,1);
    }
    actions[index].flag = valueFlag?false:true;
    this.setData({
        bs_select:{
            actions:actions,
            valueList:valueList
        }
    })
    
    
    if (this.btnSelect) {
      this.btnSelect(this.data.bs_select.valueList);
    } else {
      console.warn('页面缺少 btnSelect 回调函数');
    }
  },
  $bs_select_clearClick:function() {

    if(this.clearInput){
      this.clearInput();
    }else{
      console.warn('页面缺少 clearInput 回调函数');
    }
  },
}

export {
  bsSelectController
}