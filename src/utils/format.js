
/**
 * 格式化日期
 * @param {*} date 
 * return YYYY-MM-DD
 */
// eslint-disable-next-line import/prefer-default-export
export const formatDate = (date) => {
    let seperator1 = "-";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

/**
 * 格式化时间
 * @param {*} date 
 * return HH:mm
 */
// eslint-disable-next-line import/prefer-default-export
export const formatTime = (date) => {
    let seperator = ":";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    let currentTime = hours + seperator + minutes;
    return currentTime;
}
