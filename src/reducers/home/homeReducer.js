/**
 * 首页相关reducer
 * @author yaobei on 2020/03/10.
 */
import * as types from '@constants/actionTypes';

const INITIAL_STATE = {
    categoryList: [],      //分类轮播图数组
    hotList: [],           //热门推荐
    newList: [],           //新品推荐
}

export default function homeReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.home.category: {
      //添加title属性
      let arr = action.data && action.data.categoryList
      let newArr = arr.map(v=>{
          return {...v, title: v.name}
      })
      return {
          ...state,
          categoryList: newArr,
        }
    }
    case types.home.hot: {
      return {
          ...state,
          hotList: action.data && action.data.hotList
        }
    }
    case types.home.new: {
      return {
          ...state,
          newList: action.data && action.data.newList
        }
    }
    default:
      return state
  }
}
