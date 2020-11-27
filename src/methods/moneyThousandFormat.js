/*
 * @Date: 2020-11-26 17:35:34
 * @information: 金额添加千分符
 */

export default function moneyThousandFormat(val) {
  if(!val) return val;
  val = Number(val).toFixed(2)
  return val.toString().replace(/\d+/, function(s) {
    return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  })
}
