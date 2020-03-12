/**
 * 适当封装 Redux，简化调用
 * @author yaobei on 2020/03/11.
 */
import fetch from './request'

export function createAction(options) {
  const { url, data, method, fetchOptions, type} = options;
  return fetch({url, data, method, fetchOptions}).then((res) => {
    return res
  })
}
