/**
 * 应用轮播组件
 * @author yaobei on 2020/03/03.
 */
import {useState} from "@tarojs/taro";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import {getWindowWidth} from "@utils/style";
import "./index.scss";

//每页应用数
const MENU_PAGE_SIZE = 10;
const data =  [
          {
            "icon_url": "https://img.ddimg.mobi/faed0c89b1ac61561979943620.jpg",
            "name": "安心蔬菜"
          },
          {
            "icon_url": "https://img.ddimg.mobi/a79822f496ec71561980537120.jpg",
            "name": "豆制品"
          },
          {
            "icon_url": "https://img.ddimg.mobi/febc9219e5f061561980283162.jpg",
            "name": "水果"
          },
          {
            "icon_url": "https://img.ddimg.mobi/57742da7f00ab1562725189267.jpg",
            "name": "肉禽蛋"
          },
          {
            "icon_url": "https://img.ddimg.mobi/3f96191b097cd1562204510108.jpg",
            "name": "海鲜水产"
          },
          {
            "icon_url": "https://img.ddimg.mobi/a19a8501bf4041561980956934.jpg",
            "name": "乳品烘焙"
          },
          {
            "icon_url": "https://img.ddimg.mobi/baf53e7d1e9ce1561980371874.jpg",
            "name": "营养早餐"
          },
          {
            "icon_url": "https://img.ddimg.mobi/cc39ecee3cee51564386403745.jpg",
            "name": "叮咚心选"
          },
          {
            "icon_url": "https://img.ddimg.mobi/67260446df1451561980456552.jpg",
            "name": "米面粮油"
          },
          {
            "icon_url": "https://img.ddimg.mobi/17964fae5012d1561980650167.jpg",
            "name": "调味品"
          }
        ];


//TODO 做成轮播图-类似于拼多多
function MenuBanner(props) {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(props && props.data);

  /**
   * 轮播事件
   */
  const onChange = (e) => {
    setCurrent(e && e.detail && e.detail.current)
  };



  // let dataLength = data && data.length;
  // //整除
  // let itemCount = parseInt(dataLength / MENU_PAGE_SIZE);
  // //取余不为零，则页数加一
  // if(dataLength % MENU_PAGE_SIZE != 0) {
  //   itemCount += 1;
  // }

  //初始化二维数组
  // let array = [];

  // for(let i=0; i < itemCount; i++) {
  //    array[i] = [];
  //   for(let j=0; j < itemCount; i++) {
  //     array[i][j] = 1;
  //   }

  // }
  // console.log(data)

  return (
    <View className='view'>
      <View className='swiper-menu'>
        {
          data && data.map((subItem, subIndex) => (
            <View key={subIndex} className='menu-item' style={{ width: getWindowWidth()/5 + 'px' }}  >
              <Image
                className='img'
                src={subItem.icon_url}
                mode='aspectFill'
              />
              <View className='text'>{subItem.name}</View>
            </View>
          ))
        }
      </View>
    </View>
  )



  // return (
  //   <View
  //     className='view'
  //   >
  //     <Swiper
  //             className='test-h'
  //             indicatorColor='#999'
  //             indicatorActiveColor='#333'
  //             circular
  //             indicatorDots
  //             autoplay={false}
  //             >
  //             {
  //               itemCount && itemCount.map((item, index)=> {
  //                 return (
  //                   <SwiperItem key={index}>
  //                     <View className='swiper-menu'>
  //                       {
  //                         data.map((subItem, subIndex) => (
  //                           <View key={subIndex} className='menu-item'>
  //                             <Image
  //                               className='img'
  //                               src={subItem.icon_url}
  //                               mode='aspectFill'
  //                             />
  //                             <View className='text'>{subItem.name}{index}</View>
  //                           </View>
  //                         ))
  //                       }
  //                     </View>
  //                   </SwiperItem>
  //                 )
  //               })
  //             }



  //           </Swiper>
  //   </View>
  // );

}

export default MenuBanner