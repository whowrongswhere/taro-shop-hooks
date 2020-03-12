import Taro, { useState } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtToast } from "taro-ui"
import classNames from 'classnames'
import {LANG_CATEGORY} from "@constants/lang";
import './index.scss'
import shoppingcart from "@assets/images/tabbar/shoppingcart_selected.png";

function List(props) {
  const {data, urlPre} = props

 /**
   * 购物车点击事件
   */
  const handlCart = (item) => {
    props.onCart(item)
    Taro.showToast({
      title: LANG_CATEGORY.JOIN_CART_TIP
    });
  };

  /**
    * 购物车点击事件
    */
   const handlItem = (item) => {
     // props.onItem(item)
     Taro.showToast({
       title: '111'
     });
   };


  return (
    <View className='cate-list'>
      <View className='cate-list-body'>
          {
            data && data.map((item, index) => {
              return (
                <View key={index} className='item'>
                  <Image className='item-img' src={urlPre + item.idFile} onClick={()=> {handlItem(item)}}/>
                  <View className='middle' onClick={()=> {handlItem(item)}}>
                      <Text className='name'>{item.title}</Text>
                      <Text className='spec'>{item.title}</Text>
                      <View>
                        <Text className='price'>¥{item.createBy}</Text>
                        <Text className='origin_price'>¥{item.createBy}</Text>
                      </View>
                  </View>
                  <Image className='img-cart'
                         src={shoppingcart}
                         onClick={()=> {handlCart(item)}}
                          />
                </View>
              )
            })
          }
      </View>


    </View>
  )

}

export default List
