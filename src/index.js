/*
 * @author: 殷鹏飞
 * @Date: 2020-01-10 10:42:09
 * @information: 方法混入全局
 */
const methods = require('./methods/index')

let initArr ={methods: methods}

const install = Vue => {
  Vue.mixin(initArr)
}


// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...methods,
}
