//回填选中项
const backFill = (valueList,actions)=>{
  if(valueList==[]){
    return actions;
  }else{
    for(let i=0;i<valueList.length;i++){
      for(let j=0;j<actions.length;j++){
        if(actions[j].value==valueList[i]){
          actions[j].flag=true;
          break;
        }
      }
    }
    return actions;
  }
}

const bsSelectController = {
  $bs_select_init:function(options = {}){
    let {
      valueList = [],
      type = 'radio',
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
        actions:backFill(valueList,actions),
        type
      }
    });
  },
  $bs_select_selected:function({ currentTarget = {} }){
    const dataset = currentTarget.dataset || {};
    const { index, item } = dataset;
    let {valueList,actions,type} = this.data.bs_select;
    let valueFlag = actions[index].flag;

    let updateObj = {};

    if(type=='checkbox'){
      if(!valueFlag){
          valueList.push(item.value); 
      }else{
          valueList.splice(valueList.indexOf(item.value),1);
      }
      actions[index].flag = valueFlag?false:true;
      updateObj = Object.assign({},this.data.bs_select,{actions,valueList});
    }else if(type=='radio'){
      valueList = [];
      for(let i=0;i<actions.length;i++){
        if(index==i){
          actions[i].flag = valueFlag?false:true;
          if(!valueFlag)
            valueList.push(item.value);
        }else{
          actions[i].flag = false;
        }
      }
      updateObj = Object.assign({},this.data.bs_select,{actions,valueList});
    }else{
      console.warn('不支持此类型');
    }
    this.setData({
        bs_select:updateObj
    })
    
    console.log(this.data.bs_select.valueList);
    if (this.btnSelect) {
      this.btnSelect(this.data.bs_select.valueList);
    } else {
      console.warn('页面缺少 btnSelect 回调函数');
    }
  }
}

export {
  bsSelectController
}