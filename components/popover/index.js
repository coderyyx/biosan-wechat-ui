
const bsPopoverController = {
  $bs_popover_init:function(options = {}){
    let {
      show = false,
      data = [
            {
                action:'Scan',
                icon:''
            },
            {
                action:'My Qrcode',
                icon:''
            },
            {
                action:'Help',
                icon:''
            }
      ]
      
    } = options;
    
    // init
    this.setData({
      bs_popover:{
        show,
        data
      }
    });
  },
  $bs_popover_confirm:function({ currentTarget = {} }){
    
    const dataset = currentTarget.dataset || {};
    const { index, item } = dataset;
    
    if (this.handlePopoverConfirm) {
      this.handlePopoverConfirm(index);
    } else {
      console.warn('页面缺少 handlePopoverConfirm 回调函数');
    }
  },
  $bs_popover_cancel:function({ currentTarget = {} }){
    if (this.handlePopoverCancel) {
      this.handlePopoverCancel();
    } else {
      console.warn('页面缺少 handlePopoverCancel 回调函数');
    }
  },
}

export {
  bsPopoverController
}