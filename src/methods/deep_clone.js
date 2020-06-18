/*
 * @Date: 2020-06-18 09:39:37
 * @information: 深拷贝
 */

function _deepClone(obj) {
  if (!obj) return;
  let target
  if (JSON) {
    // 是 json
    target = JSON.parse(JSON.stringify(obj))
  } else if (typeof(obj) === 'object') {
    // 是对象
    target = obj instanceof Array ? [] : {}
    for (let key in obj) {
      obj.hasOwnProperty(key) && (target[key] = _deepClone(obj[key]))
    }
  } else {
    // 其他
    target = obj
  }
  return target
}


module.exports = _deepClone
