/*
 * @Date: 2020-06-18 09:42:21
 * @information: 表单必填校验
 */

function _formRequired(source) {
  let arr = [ 'object', 'array', 'string' ]
  if(!source || !arr.includes(typeof(source))) return;
  let obj
  if(typeof(source) === 'object' && !Array.isArray(source)) {
    // 是对象
    obj = Object.values(source)
  }else {
    // 是字符串或数组
    obj = typeof(source) === 'string' ? [source] : source
  }
  // 判断转换的数组是否为空
  if(!obj.length) return false
  let mark = obj.every(el => {
    if(typeof(el) === 'string') return el
    if(typeof(el) === 'number') return true
    if(Array.isArray(el)) return el.length
    if(typeof(el) === 'object') return _formRequired(el)
    return false
  })
  return mark
}


module.exports = _formRequired

