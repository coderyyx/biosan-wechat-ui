const backFill = (defaultkey, activeKey, datas)=> {
    if (activeKey == [] && defaultkey == '') {
        return actions;
    } else if (activeKey.length > 0) {
        for (let i = 0; i < activeKey.length; i++) {
            for (let j = 0; j < datas.length; j++) {
                if (datas[j].title == activeKey[i]) {
                    datas[j].flag = true;
                    break;
                }
            }
        }
        return datas;
    } else {
        for (let i = 0; i < datas.length; i++) {
            if (i == parseInt(defaultkey, 10)) {
                datas[i].flag = true;
                break;
            }
        }
        return datas;
    }
}

const bsAccordionController = {
    $bs_accordion_init: function (options = {}) {
        let {
            defaultkey='0',
            activeKey = [],
            datas = [
                {
                    title: 'title',
                    flag: false,
                    childs: [
                        {
                            content: 'content1',
                            icon: ''
                        },
                        {
                            content: 'content1',
                            icon: ''
                        }
                    ]
                },
                {
                    title: 'title2',
                    flag: false,
                    childs: [
                        {
                            content: 'content2',
                            icon: ''
                        },
                        {
                            content: 'content2',
                            icon: ''
                        }
                    ]
                }
            ]

        } = options;
        // init
        this.setData({
            bs_accordion: {
                defaultkey,
                activeKey,
                datas: backFill(defaultkey, activeKey, datas)
            }
        });
    },
    $bs_accordion_title_clicked: function ({currentTarget = {}}) {
        const dataset = currentTarget.dataset || {};
        const {index, item} = dataset;
        let {activeKey, datas} = this.data.bs_accordion;
        let valueFlag = datas[index].flag;
        activeKey = [];
        if (!valueFlag) {
            activeKey.push(item.title);
        } else {
            activeKey.splice(activeKey.indexOf(item.title), 1);
        }
        datas[index].flag = valueFlag ? false : true;
        let updateObj = Object.assign({}, this.data.bs_accordion, {datas, activeKey});
        this.setData({
            bs_accordion: updateObj
        })
        if (this.titleSelect) {
            this.titleSelect(this.data.bs_accordion.activeKey);
        }
    },
};

export{bsAccordionController}

