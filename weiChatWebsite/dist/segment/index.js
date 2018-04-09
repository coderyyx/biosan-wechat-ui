
const bsSegmentController = {
  $bs_segment_init:function(options = {}){
    let {
      bgColor = '',
      disabled = false,
      actions = [
            {
                descp:'Segment1',
                value:'Segment1',
                flag:true
            },
            {
                descp:'Segment2',
                value:'Segment2',
                flag:false
            }
      ]
      
    } = options;
    
    // init
    this.setData({
      bs_segment:{
        bgColor,
        disabled,
        actions
      }
    });
  },
  $bs_segment_click:function({ currentTarget = {} }){
    let {actions,disabled} = this.data.bs_segment;
    if(disabled){
      return;
    }
    
    const dataset = currentTarget.dataset || {};
    const { index, item } = dataset;
    
    for(let i=0;i<actions.length;i++){
      if(i==index){
        actions[i].flag = true;
      }else{
        actions[i].flag = false;
      }
    }
    let updateObj = Object.assign({},this.data.bs_segment,{actions});
    this.setData({
      bs_segment:updateObj,
    })
    console.log(item.value);
    if (this.btnSegment) {
      this.btnSegment(item.value);
    } else {
      console.warn('页面缺少 btnSegment 回调函数');
    }
  }
}

export {
  bsSegmentController
}