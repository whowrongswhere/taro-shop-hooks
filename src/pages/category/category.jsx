/**
 * 分类
 * @author yaobei on 2020/03/03.
 */
import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import {useDispatch, useSelector} from '@tarojs/redux'
import {categoryAction, hotAction, newAction} from '@actions/home/homeAction'
import * as types from '@constants/actionTypes'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { BASE_URL } from '@constants/api';
import List from "./List";
import {getWindowHeight} from "@utils/style";

import './index.scss'

function Category(props) {
  Category.config = {
     navigationBarTitleText: '分类'
  }

  //初始化状态
  const [categoryCurrent, setCategoryCurrent] = useState(0);

  const dispatch = useDispatch()
  //使用 useSelector Hooks 获取 Redux Store 数据
  const categoryList = useSelector(state => state.home.categoryList)

  useEffect(()=>{
    function getData() {
      try {
        //请求分类轮播图
        categoryAction().then(res => {
          // 更新 Redux Store 数据
         dispatch({type: types.home.category, data: {categoryList: res}})
        })
      } catch (err) {
        // console.log(err)
      }
    }
    //获取数据
    getData()

  },[])

  const handlCart = () => {

  }

  const handlItem = () => {

  }

  return (
    <View className='container'>
      <AtTabs
        current={categoryCurrent}
        scroll
        height= {getWindowHeight()}
        tabDirection='vertical'
        tabList={categoryList}
        onClick={(index) => setCategoryCurrent(index)}>
        {
          categoryList && categoryList.map((item, index)=> {
            return (
              <AtTabsPane
              tabDirection='vertical'
               current={categoryCurrent}
               index={index}
               key={index}>
                 <List data={item && item.bannerList}
                       urlPre={BASE_URL + '/file/getImgStream?idFile='}
                       onCart={handlCart}
                       onItem={handlItem}
                      />
              </AtTabsPane>
            )
          })
        }
      </AtTabs>
    </View>

  )
}

export default Category
