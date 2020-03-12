/**
 * 轮播组件
 * @author yaobei on 2020/03/02.
 */
import {useState} from "@tarojs/taro";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import "./index.scss";

function Banner(props) {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(props && props.data);
  const [urlPre, setUrlPre] = useState(props && props.urlPre);

  /**
   * 轮播事件
   */
  const onChange = (e) => {
    setCurrent(e && e.detail && e.detail.current)
  };

  return (
    <View className='app-banner'>
      <Swiper
        indicatorDots
        indicatorColor='#ccc'
        indicatorActiveColor='#333'
        className='app-banner-swiper'
        autoplay={false}
        circular
        onChange={onChange}
        current={current}
      >
        {
          data && data.map((item, index) => (
            <SwiperItem key={index}>
              <Image
                className='banner-item-img'
                mode='widthFix'
                src={urlPre + (item && item.idFile)}
              />
            </SwiperItem>
          ))
        }
      </Swiper>
    </View>
  );

}

export default Banner
