/**
 * 限时抢购
 * @author yaobei on 2020/03/03.
 */
import Taro, {useState} from '@tarojs/taro';
import {View, Image, ScrollView} from '@tarojs/components';
import ProductCard from '../ProductCard/Index.jsx';
import AreaTitle from '../AreaTitle/Index.jsx';
import './index.scss';

function Seckill(props) {
  // const [hotData, setHotData] = useState(props && props.data);
  const [urlPre, setUrlPre] = useState(props && props.urlPre);

  return (
    <View className='home-seckill'>
      <AreaTitle title='热门推荐'
                 rightText='更多' />
      <ScrollView
        className='scrollview'
        scrollX
        scrollWithAnimation
        // scrollLeft={0}
      >
        <View className='list-container'>
          {
            props && props.data && props.data.map((item, index) => (
              <ProductCard
                marginLeft='5px'
                width='100px'
                key={'key' + index}
                taroKey={index}
                title={item.name}
                src={urlPre + (item && item.pic)}
                price={item.price}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  );

}

export default Seckill
