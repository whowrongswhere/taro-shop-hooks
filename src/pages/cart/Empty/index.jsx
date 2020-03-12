/**
 * 购物车无数据组件
 * @author yaobei on 2020/03/09.
 */
import Taro, { useState } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import classNames from 'classnames'
import icon_empty from "@assets/images/cart/empty.png";
import './index.scss'

function Empty(props) {
  // const [current, setCurrent] = useState(props && props.current);
  // const [data, setData] = useState(props && props.data || []);

  /**
  * 点击事件
  */
  const onClick = () => {
    //跳转至分类页面
    Taro.switchTab({
      url: '/pages/category/category'
    })
  };

  return (
    <View className='cate-empty'>
        <Image className='cate-empty-img' src={icon_empty} />
        <Text className='cate-empty-text'>购物车空空滴～</Text>
        <Button className='cate-empty-button' type='primary'
        onClick={()=> {onClick()}}
        >去逛逛</Button>
    </View>
  )

}

export default Empty
