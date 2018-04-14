/**
 * Created by zhoujie on 2018/4/9.
 */
import {bsAccordionController} from "../../../dist/index.js";
Page(Object.assign({
        /**
         * 页面的初始数据
         */
        data: {
            api:[
                {
                    props:'datas',
                    defaultValue:'[]',
                    dataType:'list',
                    description:"手风琴中的内容"
                },
                {
                    props: 'activeKey',
                    defaultValue: '[]',
                    dataType: 'list',
                    description: "当前激活 tab 面板的 key"
                },
                {
                    props:'defaultkey',
                    defaultValue: '无',
                    dataType: 'string',
                    description: "初始化选中面板的key"
                }
            ]
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
            //组件初始化
            this.$bs_accordion_init({
                defaultkey:"无",
                activeKey:[ ],
                datas:[
                    {
                        title: 'title',
                        flag: false,
                        childs: [
                            {
                                content: 'accordion content1',
                                icon: ''
                            },
                            {
                                content: 'accordion content1',
                                icon: ''
                            }
                        ]
                    },
                    {
                        title: 'accordion title2',
                        flag: false,
                        childs: [
                            {
                                content: '手风琴内容',
                                icon: ''
                            }
                        ]
                    }
                ],
            });
        },
        titleSelect: function (activeKey) {
            this.setData({
                ['bs_accordion.activeKey']: activeKey
            });
        },
        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {
        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {

        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide: function () {

        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload: function () {

        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh: function () {

        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom: function () {

        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage: function () {

        }
}, bsAccordionController
));