/**
 * 用于创建请求头权限
 * @param {*} userId 用户id
 * @param {*} token 用户token
 * @return uesrId_token
 */
// eslint-disable-next-line import/prefer-default-export
export const authorization = (userId, token) => {
    if (userId && token) {
      return `${userId}_${token}`;
    }
    return null;
}