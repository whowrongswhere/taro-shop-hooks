import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtList, AtListItem, AtIcon, AtGrid } from "taro-ui"
import './index.scss'
import userHeader from "@assets/images/mine/userHeader.jpg";
const icon_color = '#75a342'
const icon_size = 24

const data_grid = [
  {
    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
    value: '待支付'
  },
  {
    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
    value: '待收货'
  },
  {
    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    value: '待评价'
  },
  {
    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
    value: '售后/退款'
  }
]

const application_data = [
  {
    icon: {size: icon_size,color: icon_color, value: 'money'},
    title: '我的优惠劵',
    routeName: 'UserInfo'
  },
  {
    icon: {size: icon_size,color: icon_color, value: 'map-pin'},
    title: '我的收货地址',
    routeName: 'UserInfo'
  },
  {
    icon: {size: icon_size,color: icon_color, value: 'credit-card'},
    title: '我的绿卡',
    routeName: 'UserInfo'
  }
]

const application_data2 = [
  {
    icon: {size: icon_size,color: icon_color, value: 'phone'},
    title: '联系客服',
    extraText: '全天在线',
    routeName: 'UserInfo'
  },
  {
    icon: {size: icon_size,color: icon_color, value: 'message'},
    title: '意见反馈',
    routeName: 'UserInfo'
  },
  {
    icon: {size: icon_size,color: icon_color, value: 'settings'},
    title: '设置',
    routeName: 'UserInfo'
  }
]

function Mine(params) {
  Mine.config = {
     navigationBarTitleText: '我的'
  }

  const onListItem = (item) => {
    console.log(item && item.title)
  }


  return (
    <View className='greyContainer'>
      <View className='mine-useinfo'>
        <Image className='useinfo-img' src={userHeader} />
        <Text className='useinfo-text'>立即登录</Text>
      </View>

      <AtList>
        <AtListItem
          title={'我的订单'}
          arrow='right'
          iconInfo={{ size: 25,color: '#75a342', value: 'tag'}}
          onClick={()=> {onListItem(item)}}
        />
      </AtList>

      <AtGrid
          className='mine-grid'
          hasBorder={false}
          columnNum={4}
          data={data_grid}
      />

      <View className='dLine' />

      <AtList>
        {
          application_data.map((item, index)=> {
              return (
                <AtListItem
                  key={index}
                  title={item.title}
                  arrow='right'
                  iconInfo={item.icon}
                  onClick={()=> {onListItem(item)}}
                />
              )
          })
        }
      </AtList>

      <View className='dLine' />

      <AtList className='mine-atList'>
        {
          application_data2.map((item, index)=> {
              return (
                <AtListItem
                  key={index}
                  title={item.title}
                  arrow='right'
                  iconInfo={item.icon}
                  extraText={item.extraText}
                  onClick={()=> {onListItem(item)}}
                />
              )
          })
        }
      </AtList>
    </View>
  )
}


export default Mine
