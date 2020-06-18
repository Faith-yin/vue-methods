/*
 * @Date: 2020-06-18 09:41:26
 * @information: 字符串加星(*)展示
 */

function _encryStr(str, m, n) {
  if( !str
      || typeof(str) !== 'string'
      || m < 0
      || m+Math.abs(n)>str.length
      || n > str.length ) return str;
  // 前面字符  中间字符  后面字符
  let frontStr = '', midStr = '', endStr = ''
  // 拼接前面原字符
  for(let g = 0; g < m; g ++) {
    frontStr += str[g]
  }
  // 加星中间字符
  for(let i = m; i < (n > 0 ? n : str.length-Math.abs(n)); i ++) {
    midStr += '*'
  }
  // 拼接后面原字符
  for(let k = (n > 0 ? n : str.length-Math.abs(n)); k < str.length; k ++ ) {
    endStr += str[k]
  }
  // 结果拼接
  let target = `${frontStr}${midStr}${endStr}`
  return target
}


module.exports = {
  _encryStr
}
