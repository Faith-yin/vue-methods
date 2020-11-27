/*
 * @Date: 2020-11-26 17:22:27
 * @information: 金额格式限制
 */

export default function moneyReplace(val) {
  if(!val) return val
  // 若第一字符是 .  则替换为 0.
  val = String(val).replace(/^\./, "0.")
  // 保证 . 只出现一次 ， 而不能出现两次或两次以上
  val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")
  // 只能输入两个小数
  val = val.replace(/^(\d+)\.(\d\d).*$/, "$1.$2")
  // 如果没有小数点，首位不能为类似于 01、02的金额
  if((val.indexOf(".") == -1) && val != 0) {
    val = parseFloat(val)
  }
  return Number.isNaN(Number(val)) ? 0 : val
}

