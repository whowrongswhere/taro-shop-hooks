/**
 * 区域标题
 * @author yaobei on 2020/03/05.
 */
import {useState} from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

function AreaTitle(props) {
  const {title, rightText} = this.props;

  return (
    <View className='areaTitle'>
        <Text className='leftText'>{title}</Text>
        <Text className='rightText'>{rightText}</Text>
    </View>
  );

}

export default AreaTitle