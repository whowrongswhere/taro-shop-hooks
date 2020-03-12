/**
 * 首页
 * @author yaobei on 2020/03/03.
 */
import Taro, { useState, useEffect, useCallback } from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'
import {useDispatch, useSelector} from '@tarojs/redux'
import {categoryAction, hotAction, newAction} from '@actions/home/homeAction'
import * as types from '@constants/actionTypes';
import { AtTabs, AtTabsPane } from 'taro-ui'
import Banner from "@components/Banner";
import MenuBanner from "@components/MenuBanner";
import Seckill from "@components/HomeSeckill";
import SpecialArea from "@components/SpecialArea";
import { BASE_URL } from '@constants/api';
import './index.scss'

function Home(props) {
  //初始化状态
  const [tabsCurrent, setTabsCurrent] = useState(0);

  const dispatch = useDispatch()
  //使用 useSelector Hooks 获取 Redux Store 数据
  const categoryList = useSelector(state => state.home.categoryList)
  const hotList = useSelector(state => state.home.hotList)
  const newList = useSelector(state => state.home.newList)


  useEffect(()=>{
    function getData() {
      try {
        //请求分类轮播图
        categoryAction().then(res => {
          // 更新 Redux Store 数据
         dispatch({type: types.home.category, data: {categoryList: res}})
        })

        //请求热门推荐
        hotAction().then(res => {
          // 更新 Redux Store 数据
         dispatch({type: types.home.hot, data: {hotList: res}})
        })

        //请求新品推荐
        newAction().then(res => {
          // 更新 Redux Store 数据
         dispatch({type: types.home.new, data: {newList: res}})
        })
      } catch (err) {
        // console.log(err)
      }
    }

    //获取数据
    getData()

  },[])

  return (
    <View className='greyContainer'>
      <View className='view-tabs mbLine'>
        <AtTabs current={tabsCurrent}
                tabList={categoryList}
                onClick={(index) => setTabsCurrent(index)}>
          {
            categoryList && categoryList.map((item, index)=> {
              return (
                <AtTabsPane
                 current={tabsCurrent}
                 index={index}
                 key={index}>
                   <Banner data={item && item.bannerList}
                           urlPre={BASE_URL + '/file/getImgStream?idFile='}
                   />
                </AtTabsPane>
              )
            })
          }
        </AtTabs>
      </View>

      <Seckill data={hotList}
               urlPre={BASE_URL + '/file/getImgStream?idFile='}
      />

      <SpecialArea data={newList}
                   urlPre={BASE_URL + '/file/getImgStream?idFile='}
      />
    </View>
  )
}

export default Home
