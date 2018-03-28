# biosan-wei-UI
  `BioSan 前端团队出品`

## 期望  
*旨在快速构建微信小程序，提高开发速度

*统一用户体验

*搭建开发与产品经理、设计师之间沟通的桥梁

*最后的期望是不仅仅是一个组件库，也是一套css框架、同时未来也可以移植到其他移动端（可以包容h5的载体）、开发移动端组件库

## 开发注意事项

使用微信开发者工具打开 weiChatWebsite 目录

初次开发运行 npm install 安装开发依赖

构建项目运行 npm run build dist

构建weiChatWebsite 运行 npm run build weichatDemo

开发先fork项目，修改bug或开发组件后 提交PR ,描述清楚此次提交做了哪些工作~

## 开发规范

*工程使用less预处理器、类名统一以bs开头 ； example:bs-row,bs-col-1；

*长度单位统一使用微信小程序自适应单位 rpx；

*为了使组件库具备可定制的功能，组件的颜色及一些尺寸放在less全局变量表里，注意写全注释；

*为了避免组件的逻辑代码对业务代码造成的比较严重的侵入性，和减少他们之间的耦合，组件的逻辑代码单独处理，单独引入；处理方式详见 `shearchBar` 组件;

*为了防止组件的属性或方法与业务组件属性或方法重名导致意外bug，规定组件属性、方法以`$bs_`开头 ，example: `$bs_showTips:function(){}`;

## Developers
![coderyyx](https://s.gravatar.com/avatar/096c6a7c3c923b932bb81580c1fc0770?size=60&default=retro)
![yejie](https://avatars2.githubusercontent.com/u/31266618?s=60&v=4)
![huxi](https://avatars3.githubusercontent.com/u/22619783?s=60&v=4)
