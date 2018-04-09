function resolveCancelClick({ componentId }) {
  if (this.handleActionsheetCancel) {
    this.handleActionsheetCancel({ componentId });
  } else {
    console.warn('页面缺少 handleActionsheetCancel 回调函数');
  }
}

const bsActionSheetController = {
  $bs_actionSheet_init:function(options = {}){
    //基础action
    let basicAction = [{
      name: '去分享',
      openType: 'share'
    }];

    let {
      show = false,
      cancelText = "关闭 ActionSheet",
      closeOnClickOverlay = true,
      componentId = 'bs_actionSheet',
      actions = []
      
    } = options;

    actions = actions.concat(basicAction);
    // init
    this.setData({
      bs_actionSheet:{
        show,
        cancelText,
        closeOnClickOverlay,
        componentId,
        actions
      }
    });
  },
  $bs_actionSheet_maskClick:function({ currentTarget = {} }){
    const dataset = currentTarget.dataset || {};
    const { componentId, closeOnClickOverlay } = dataset;

    // 判断是否在点击背景时需要关闭弹层
    if (!closeOnClickOverlay) {
      return;
    }

    resolveCancelClick.call(this, { componentId });
  },
  $bs_actionSheet_cancelClick:function({currentTarget = {}}) {
    const { dataset: { componentId } } = currentTarget;

    resolveCancelClick.call(this, { componentId });
  },
  $bs_actionSheet_btnClick:function({ currentTarget = {} }){
    const dataset = currentTarget.dataset || {};
    const { componentId, index } = dataset;

    if (this.handleActionsheetConfirm) {
      this.handleActionsheetConfirm({ componentId, index });
    } else {
      console.warn('页面缺少 handleActionsheetConfirm 回调函数');
    }
  }
}

export {
  bsActionSheetController
}