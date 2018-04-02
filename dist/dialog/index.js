

/*
show 弹出框
$bs_dialog_cb:(type,dataset)
回调函数 事件委托 参数：type ，dataset
*/
const dialogController = {
    $bs_dialog_init : function(options){
        let _options = Object.assign({},{
            // 自定义 btn 列表
            // { type: 按钮类型，回调时以此作为区分依据，text: 按钮文案, color: 按钮文字颜色 }
            buttons : [],
            // 标题
            title : '',
            // 内容
            content : ' ',
            // 按钮是否展示为纵向
            buttonsShowVertical : false,
            // 是否展示确定
            showConfirm : true,
            // 确认按钮文案
            confirmText : '确定',
            // 确认按钮颜色
            confirmColor : '#3CC51F',
            // 是否展示取消
            showCancel : false,
            // 取消按钮文案
            cancelText : '取消',
            // 取消按钮颜色
            cancelColor : '#333'
        },options);
        //配置初始化
        // 处理默认按钮的展示
    let { buttons,showConfirm,showCancel,buttonsShowVertical,confirmText,confirmColor,cancelText,cancelColor} = _options;
    // 纵向排布确认按钮在上方
    let showCustomBtns = false;
    if (buttons.length === 0) {
      if (showConfirm) {
        buttons.push({
          type: 'confirm',
          text: confirmText,
          color: confirmColor
        });
      }

      if (showCancel) {
        const cancelButton = {
          type: 'cancel',
          text: cancelText,
          color: cancelColor
        };
        if (buttonsShowVertical) {
          buttons.push(cancelButton);
        } else {
          buttons.unshift(cancelButton);
        }
      }
    } else {
      showCustomBtns = true;
    }
    this.setData({
        bs_dialog:{
            ..._options
        }
    });
    },
    $bs_dialog_listener:function(e){
        let { type} = e.target.dataset;
        //重置
        this.setData({
            bs_dialog:{
                show:false
            }
        });
        this.bs_dialog_listener(type);
    },
    $bs_dialog_show:function(options = {}){
        this.$bs_dialog_init(options);
        this.setData({
            'bs_dialog.show':true
        });
    }
}

export {
    dialogController
}