/**
 * 项目入口
 * @author yaobei on 2020/03/02.
 */
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import home from './pages/home/home'

import '@styles/theme.scss' // 全局引入一次即可
// import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      //首页
      'pages/home/home',
      
      //分类
      'pages/category/category',


     

      //购物车
      'pages/cart/cart',

      //我的
      'pages/mine/mine',


      //登录
      'pages/user/login',
    ],
    window: {
      backgroundTextStyle: '#fff',
      navigationBarBackgroundColor: '#75a342',
      navigationBarTitleText: '云社区',
      navigationBarTextStyle: '#fff',
      enablePullDownRefresh: false
    },
    tabBar: {
      color: "#7d7e80",
      selectedColor: "#75a342",
      backgroundColor: "#ffffff",
      borderStyle: "white",
      list: [{
        pagePath: "pages/home/home",
        text: "首页",
        iconPath: "./assets/images/tabbar/home_default.png",
        selectedIconPath: "./assets/images/tabbar/home_selected.png"
      },{
        pagePath: "pages/category/category",
        text: "分类",
        iconPath: "./assets/images/tabbar/category_default.png",
        selectedIconPath: "./assets/images/tabbar/category_selected.png"
      }, {
        pagePath: "pages/cart/cart",
        text: "购物车",
        iconPath: "./assets/images/tabbar/shoppingcart_default.png",
        selectedIconPath: "./assets/images/tabbar/shoppingcart_selected.png"
      },{
        pagePath: "pages/mine/mine",
        text: "我的",
        iconPath: "./assets/images/tabbar/mine_default.png",
        selectedIconPath: "./assets/images/tabbar/mine_selected.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
