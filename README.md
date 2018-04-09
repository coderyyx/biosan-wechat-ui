# biosan-wei-UI
  `BioSan 前端团队出品`
  
<p align="center">
    <img alt="项目logo" src="http://treatdemo.xsesc.com/Treat/web/Layout/index/Images/loginLogo.png">
  <p align="center">BioSan</p>
</p>


## 期望  
*旨在快速构建微信小程序，提高开发速度

*统一用户体验

*搭建开发与产品经理、设计师之间沟通的桥梁

*最后的期望是不仅仅是一个组件库，也是一套css框架、同时未来也可以移植到其他移动端（可以包容h5的载体）、开发移动端组件库

## 开发注意事项

使用微信开发者工具打开 weiChatWebsite 目录

*建议使用yarn开发 安装方式 npm install yarn -g

初次开发运行 npm install / yarn install(下同) 安装开发依赖

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

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="90" height="90"
        src="https://s.gravatar.com/avatar/096c6a7c3c923b932bb81580c1fc0770?size=60&default=retro">
        <br />
        <a href="https://github.com/coderyyx">coderyyx</a>
      </td>
      <td align="center">
        <img width="90" height="90"
        src="https://avatars2.githubusercontent.com/u/31266618?s=60&v=4">
        <br />
        <a href="https://github.com/yinluer" align="center">yejie</a>
      </td>
      <td align="center">
        <img width="90" height="90"
        src="https://avatars0.githubusercontent.com/u/38059186?s=60&v=4">
        <br />
        <a href="https://github.com/zhoujie198929" align="center">zhoujie</a>
      </td>
       <td align="center">
        <img width="90" height="90"
        src="https://avatars3.githubusercontent.com/u/22619783?s=60&v=4">
        <br />
        <a href="https://github.com/huxi123" align="center">huxi</a>
      </td>
    </tr>
  </tbody>
</table>
