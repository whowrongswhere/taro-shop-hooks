### Taro简介
github地址: https://github.com/NervJS/taro
Taro 是由凹凸实验室打造的一套遵循 React 语法规范的多端统一开发框架。
Taro-UI: https://taro-ui.aotu.io/#/docs/introduction

### 解决依赖问题
rm -rf node_modules && npm install

**微信小程序编译预览模式:**

# npm script
npm run dev:weapp
# 或 仅限全局安装
taro build --type weapp --watch

#npm run build

**H5编译预览模式:**

# npm script
npm run dev:h5
# 或 仅限全局安装
taro build --type h5 --watch

### 浏览器调试
debugger

###文件目录如下：
├── dist                   编译结果目录
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── pages              页面文件目录
|   |   ├── index          index页面目录
|   |   |   ├── index.js   index页面逻辑
|   |   |   └── index.css  index页面样式
|   ├── app.css            项目总通用样式
|   └── app.js             项目入口文件
└── package.json
```
进入项目目录开始开发，可以选择小程序预览模式，或者h5预览模式，若使用微信小程序预览模式，则需要自行下载并打开[微信开发者工具]选择预览项目根目录。
```
### 开发前注意
若使用 微信小程序预览模式 ，则需下载并使用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)添加项目进行预览，此时需要注意微信开发者工具的项目设置
* 需要设置关闭ES6转ES5功能，开启可能报错
* 需要设置关闭上传代码时样式自动补全，开启可能报错
* 需要设置关闭代码压缩上传，开启可能报错


### 开发记录
2020-03-02  项目初始化
