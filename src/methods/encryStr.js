/*
 * @Date: 2020-11-26 10:12:28
 * @information: 字符串加星(*)展示
 */

export default function encryStr(str, start, end) {
  if(!str || !start || !end || typeof(str)==='number') return str
  let subStr =''
  let endLen = str.length
  let End = end<0 ? endLen+end : end
  let len =  End - start
  len = len>(endLen-start) ? endLen-start : len
  while(len --) {
      subStr += '*'
  }
  return `${str.substring(0,start)}${subStr}${str.substring(End,endLen)}`
}


