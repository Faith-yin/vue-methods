/*
 * @Date: 2020-11-26 10:13:00
 * @information: 获取地址栏上拼接的参数
 */

export default function getUrlQuery(str) {
  if(!str || !window.location.href.includes('?')) return;
  let data = window.location.href.split('?')[1].split('&')
  let result;
  data && data.forEach(el => {
    if(el.split('=')[0] == str) {
      result = el.split('=')[1]
    }
  })
  return result
}


