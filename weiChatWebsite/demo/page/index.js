Page({
    data: {
      list: [
        {
          id: 'view',
          name: '自定义按钮',
          open: false,
          pages: ['button']
        }, {
          id: 'content',
          name: '栅格系统',
          open: false,
          pages: ['row_col']
        }, {
          id: 'form',
          name: '表单组件',
          open: false,
          pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
        }
      ]
    },
    kindToggle: function (e) {
      var id = e.currentTarget.id, list = this.data.list;
      for (var i = 0, len = list.length; i < len; ++i) {
        if (list[i].id == id) {
          list[i].open = !list[i].open
        } else {
          list[i].open = false
        }
      }
      this.setData({
        list: list
      });
    }
  })
  
  