
const bsSegmentController = {
  $bs_segment_init:function(options = {}){
    let {
      bgColor = 'default',
      disable = 'false',
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
        disable,
        actions
      }
    });
  },
  $bs_segment_btn:function({ currentTarget = {} }){
    const dataset = currentTarget.dataset || {};
    const { index, item } = dataset;
    this.setData({
    })
    
    if (this.btnSegment) {
      this.btnSegment(this.data.bs_segment.valueList);
    } else {
      console.warn('页面缺少 btnSegment 回调函数');
    }
  }
}

export {
  bsSegmentController
}