import Taro from '@tarojs/taro';
import {View, Image, Text} from '@tarojs/components';
import './index.scss';

function ProductCard(props) {
  let {src, price, title, originalPrice, width, marginLeft, marginBottom} = this.props;

  return (
    <View
      className='product-card'
      style={{width: width, marginLeft: marginLeft, marginBottom: marginBottom}}
    >
      <Image
        style={{width, height: width}}
        className='img'
        src={src}
        mode='aspectFill'
      ></Image>
      <View className='title'>{title}</View>
      <View className=''>
        {price && <Text className='price'>{price}</Text>}
        {originalPrice && (
          <Text className='originalPrice'>{originalPrice}</Text>
        )}
      </View>
    </View>
  );

}

export default ProductCard