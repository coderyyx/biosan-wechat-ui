import { bsSearchbarController } from "../dist/index.js";
import { bsAccordionController } from "../dist/index.js";

const trim = (str) => {
  if (str && typeof str == 'string')
    str = str.replace(/\s+/g, "");
  return str;
}

const all = ['avatar', 'badge', 'loadmore', 'toptips', 'card', 'list', 'select', 'progress', 'steps', 'loading', 'dialog', 'popup', 'toast', 'actionSheet', 'segment', 'accordion', 'popover', 'cascader', 'searchbar','button','row_col','icon'];

Page(Object.assign({
    data: {
      keyWords:[
        
      ],
      flag:false,
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
          pages: ['progress', 'steps', 'loading', 'dialog', 'popup', 'toast','actionSheet','segment','accordion','popover','tabs']
        },
        {
          id: 'compose',
          name: '组合组件',
          open: false,
          pages: ['cascader','searchbar']
        },
      ]
    },
    filterDisease: function (diseaseList, diseaseName) {
      let temp = [];
      let patt1 = new RegExp(trim(diseaseName), "g");
      if (!Array.isArray(diseaseList) || diseaseList.length == 0)
        return temp;

      temp = diseaseList.filter((item, index) => {
        // let { name } = item;
        return item.match(patt1);
      });

      return temp;

    },
    onLoad: function (options) {
      //组件初始化
      this.$bs_searchbar_init();
      //
      this.$bs_accordion_init({
        defaultkey: "0",
        activeKey: [],
        datas: [
          {
            title: 'example : 录入组件名称检索',
            flag: false,
            childs: [
              {
                content: 'button 、card 、badge 、 cascader 、 dialog  、 doc  、icon 、 list ......',
                icon: ''
              }
            ]
          }
        ],
      });
    },
    showInput: function () {
      this.setData({
        ['bs_searchbar.inputShowed']: true,
        flag:true
      });
    },
    hideInput: function () {
      this.setData({
        ['bs_searchbar.inputVal']: "",
        ['bs_searchbar.inputShowed']: false,
        flag:false,
        keyWords:[]
      });
    },
    clearInput: function () {
      this.setData({
        ['bs_searchbar.inputVal']: "",
        flag: false,
        keyWords: []
      });
    },
    inputTyping: function (value) {
      console.log(value)
      this.setData({
        ['bs_searchbar.inputVal']: value
      });
      this.setData({
        keyWords: this.filterDisease(all,value)
      })
    },
    titleSelect: function (activeKey) {
      this.setData({
        ['bs_accordion.activeKey']: activeKey
      });
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
}, bsSearchbarController, bsAccordionController))
  
  