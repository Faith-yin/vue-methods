/*
 * @Date: 2020-11-26 10:17:00
 * @information: 入口
 */
import {
  _deepClone,
  _encryStr,
  _getUrlQuery,
  _moneyBigFormat,
  _moneyReplace,
  _moneyThousandFormat,
} from './methods/index'

import ypfMethods from './methods/index'

export {
  _deepClone,
  _encryStr,
  _getUrlQuery,
  _moneyBigFormat,
  _moneyReplace,
  _moneyThousandFormat,
}

export default {
  ...ypfMethods,
}

