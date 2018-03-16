Page({
    data: {
      list: [
        {
          id: 'view',
          name: '按钮',
          open: false,
          pages: ['button']
        }, {
          id: 'content',
          name: '基础内容',
          open: false,
          pages: ['text', 'icon', 'progress']
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
  
  