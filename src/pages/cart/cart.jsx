/**
 * 购物车
 * @author yaobei on 2020/03/09.
 */
import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import Empty from "./Empty";
import List from "./List";

import './index.scss'
import cart_image from "@assets/images/cart/cart_image.png";

const cartDataList = [
  {
    "icon_url": cart_image,
    "name": "琯溪三红蜜柚1个 1.25kg以上",
    "price": "1.90",
    "number": 2
  },{
    "icon_url": cart_image,
    "name": "琯溪三红蜜柚1个 1.25kg以上",
    "price": "1.90",
    "number": 3
  }
]

function Cart(props) {
  Cart.config = {
     navigationBarTitleText: '购物车'
  }

  const [cartList, setCartList] = useState(cartDataList);

  // const onChangeNumber = (data) => {
  //   // console.log(data)
  //   setData(data)
  //
  //   useEffect(() => {
  //   setData(data)
  //   });
  // }


  const onChangeNumber = (data) => {
    // console.log(data)
    setCartList(data)
  }

  // function onChangeNumber (data) {
  //   console.log(data)
  //   setCartList([])
  // }

  useEffect(() => {

  });

  const onHand = ()=> {
    console.log(cartList)
  }





  return (
    <View className='cart'>
    <div>
          <p>You clicked {count} times</p>
          <Button onClick={onHand}>
            Click me
          </Button>
        </div>

      <List data={cartList}
            onChangeNumber={onChangeNumber}
      />

    </View>
  )
}


export default Cart
