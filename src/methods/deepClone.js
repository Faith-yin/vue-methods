/*
 * @Date: 2020-11-26 10:11:26
 * @information: 深拷贝
 */

export default function deepClone(obj) {
  // null 的情况
  if (obj === null) return null;
  // 正则表达式的情况
  if (obj instanceof RegExp) return new RegExp(obj);
  // 日期对象的情况
  if (obj instanceof Date) return new Date(obj);
  // 函数的情况
  //非复杂类型,直接返回 也是结束递归的条件
  if (typeof obj !== "object") {
    return obj
  }
  // [].__proto__.constructor = Array()
  // {}.__proto__.constructor = Object()
  // 因此处理数组对象的情况时, 可以取巧用这个办法来new新对象
  let newObj = new obj.__proto__.constructor;
  for (let key in obj) {
    newObj[key] = deepClone(obj[key])
  }
  return newObj;
}

