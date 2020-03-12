/**
 * 特色专区
 * @author yaobei on 2020/03/03.
 */
import Taro, {useState} from '@tarojs/taro';
import {View, Image, ScrollView} from '@tarojs/components';
import {getWindowWidth} from "@utils/style";
import ProductCard from '../ProductCard/Index.jsx';
import AreaTitle from '../AreaTitle/Index.jsx';
import './index.scss';
function SpecialArea(props) {
  // const [data, setData] = useState(props && props.data);
  const [urlPre, setUrlPre] = useState(props && props.urlPre);

  return (
    <View className='special-area'>
      <AreaTitle title='新品推荐' />

      <View className='list-container'>
        {
          props && props.data && props.data.map((item, index) => (
            <ProductCard
              marginLeft='5px'
              marginBottom='10px'
              width={(getWindowWidth() - 15)/2 + 'px'}
              key={'key' + index}
              taroKey={index}
              title={item.descript}
              src={urlPre + (item && item.pic)}
              price={item.price}
              originalPrice={item.stock}
            />
          ))
        }
      </View>
    </View>
  );

}

export default SpecialArea
