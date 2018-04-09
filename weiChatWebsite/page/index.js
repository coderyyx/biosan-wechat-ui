Page({
    data: {
      list: [
        {
          id: 'btn',
          name: '自定义按钮',
          open: false,
          pages: ['button']
        }, {
          id: 'grid',
          name: '栅格系统',
          open: false,
          pages: ['row_col']
        }, {
          id: 'icon',
          name: '图标库',
          open: false,
          pages: ['icon']
        }, {
          id: 'basic',
          name: '基础组件',
          open: false,
          pages: ['avatar', 'badge', 'loadmore', 'toptips','card','list','select']
        },
         {
          id: 'func',
          name: '功能组件',
          open: false,
          pages: ['progress', 'steps', 'loading', 'dialog', 'popup', 'toast','actionSheet','segment','accordion','popover']
        },
        {
          id: 'compose',
          name: '组合组件',
          open: false,
          pages: ['cascader','searchbar']
        },
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
  
  