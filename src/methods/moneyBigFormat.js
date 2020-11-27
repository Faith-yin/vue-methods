/*
 * @Date: 2020-11-26 17:18:39
 * @information:金额转大写
 */

export default function moneyBigFormat(val) {
  if(!val) return val
  let fraction = ['角', '分']
  let digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  let unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  val = Math.abs(val)
  let s = ''

  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(val * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  val = Math.floor(val)

  for (let i = 0; i < unit[0].length && val > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && val > 0; j++) {
      p = digit[val % 10] + unit[1][j] + p;
      val = Math.floor(val / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '')
}

