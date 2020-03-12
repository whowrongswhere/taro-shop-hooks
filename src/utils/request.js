import Taro from '@tarojs/taro';
import { TIP_CONSTANT, STORE_KEYS} from '@constants/system';
import { BASE_URL, API_CONSTANT } from '@constants/api';
// import { authorization } from './authorization';

/**
 * 获取缓存信息
 * @param {*} key 缓存名
 */
export const getStorage = (key) => {
  return Taro.getStorageSync(key)
}

/**
 * 更新缓存信息
 * @param {*} key 缓存名
 * @param {*} data  缓存值
 */
export const updateStorage = (key, data) => {
    return Taro.setStorageSync(key, data)
}


/**
 * 封装请求
 */
export default async function fetch(options) {
    //资源位置，请求携带内容对象，http请求方法，
    const { url, data, method = 'GET', fetchOptions} = options;
    //是否显示加载提示框
    let showToast = fetchOptions && fetchOptions.showToast ? fetchOptions.showToast: true;
    let autoLogin = fetchOptions && fetchOptions.autoLogin ? fetchOptions.autoLogin: true;

    //资源请求前缀
    let urlPre = fetchOptions && fetchOptions.urlPre ? fetchOptions.urlPre : '';
    //url前缀取值顺序：urlPre -> BASE_URL
    urlPre = urlPre !== null && urlPre !== '' && urlPre !== undefined ? urlPre : BASE_URL;
    
    return new Promise(async function (resolve, reject) {
        //显示加载图标
        Taro.showLoading({ title: TIP_CONSTANT.LOADING });

         // 拼接请求链接
         let newUrl = urlPre + url;
         //网络请求需携带前置参数,后置参数
         if(newUrl.substring(0, 7) !== "http://") {
            newUrl = "http://" + newUrl;
          }

        //http请求
        Taro.request({
          url: newUrl,
          data: data,
          method: method,
          header: {
            'content-type': 'application/json;charset=utf-8',
            'Authorization': getStorage(STORE_KEYS.USER) ? getStorage(STORE_KEYS.USER).token : '',
          }
        }).then(async res => {
          //隐藏加载图标
          Taro.hideLoading();
          if (res && res.data && res.data.code === 20000) {
            // //如果是登录请求，则缓存token
            // if (url === API_CONSTANT.LOGIN) {
            //   await updateStorage(STORE_KEYS.USER, data);
            // }

            resolve(res.data && res.data.data);
          } else {
              if(showToast) {
                Taro.showToast({
                  title: res && res.data && res.data.message || TIP_CONSTANT.UNABLE_TO_SERVER,
                  icon: 'none',
                  duration: 1500
                })
              }
            // reject(res && res.data && res.data.msg && res.data.msg.msg || '');
          }
        }).catch((error) => {
          if(showToast) {
            Taro.showToast({
              title: TIP_CONSTANT.UNABLE_TO_SERVER,
              icon: 'none',
              duration: 1500
            })
          }
          // error.message = TIP_CONSTANT.UNABLE_TO_SERVER;
          // reject(error);
      });
    });
}
