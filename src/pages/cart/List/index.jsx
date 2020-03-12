import Taro, { useState } from '@tarojs/taro'
import { View, Text, Image, Checkbox} from '@tarojs/components'
import { AtToast, AtInputNumber } from "taro-ui"
import classNames from 'classnames'
import {LANG_CATEGORY} from "@constants/lang";
import './index.scss'

function List(props) {
  // const {data} = props
  const [data, setData] = useState(props && props.data);

  /**
   * 标题点击事件
   */
  const onTitle = (index) => {
    props.onTitle(index)
  };

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
    * 列表项点击事件
    */
   const handlItem = (item) => {
     props.onItem(item)
   };

  return (
    <View className='greyContainer cate-shopping'>
      <View className='cate-shopping-body'>
          {
            data && data.map((item, index) => {
              return (
                <View key={index} className='item'>
                  <Radio value='选中' />
                  <Image className='item-img' src={item.icon_url} />
                  <View className='middle'>
                      <Text className='name'>{item.name}</Text>
                      <Text className='price'>¥{item.price}</Text>
                  </View>
                  <View className='atInputNumber'>
                     <AtInputNumber
                            min={0}
                            max={10}
                            step={1}
                            value={item.number}
                            onChange={(value)=> {
                              // item.number = value
                              // data[index] = item
                              data[index] = {...item, ...{number: value}}
                              props.onChangeNumber(data)
                            }}
                          />
                  </View>
                </View>
              )
            })
          }
      </View>


    </View>
  )

}

export default List
