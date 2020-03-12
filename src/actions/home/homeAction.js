/**
 * 首页相关action
 * @author yaobei on 2020/03/10.
 */
import * as types from '@constants/actionTypes';
import { API_CONSTANT } from '@constants/api';
import { createAction } from '@utils/redux';

/**
 * 请求首页分类
 * @param {*} data
 */
export const categoryAction = (data) => createAction({
    url: API_CONSTANT.HOME_CATEGORY,
    type: types.home.category,
})

/**
 * 请求首页热门推荐
 * @param {*} data
 */
export const hotAction = (data) => createAction({
    url: API_CONSTANT.HOME_HOT,
    type: types.home.hot,
})

/**
 * 请求首页新品推荐
 * @param {*} data
 */
export const newAction = (data) => createAction({
    url: API_CONSTANT.HOME_New,
    type: types.home.new,
})
