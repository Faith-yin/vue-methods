<!--
 * @author: 殷鹏飞
 * @Date: 2020-01-10 10:27:25
 * @information: readme
 -->

# ypf-methods

## 使用方式

```00
  01. 安装此包

    npm i ypf-methods

  02. 在 main.js 中 引入

    import ypfMethods form 'ypf-methods'

  03. 可绑定至原型链

    Vue.prototype.$ypfMethods = ypfMethods
```

> 方法说明：

### 1. _deepClone  // 深拷贝

参数：字符串或引用类型

```01
  深拷贝：改变对象或数组或字符串的地址

  let obj = {
    aa: undefined,
    name: 'xm',
    birth: new Date,
    desc: null,
    reg: /^123$/,
    ss: [1,2,3],
    fn: function() {
      console.log('123')
    },
  }

  let obj2 = _deepClone(obj)

  //输出结果：
  obj2: {
    aa: undefined,
    name: 'xm',
    birth: new Date,
    desc: null,
    reg: /^123$/,
    ss: [1,2,3],
    fn: function() {
      console.log('123')
    },
  }
```

### 2. _encryStr  // 字符串加星号（*）展示

参数：第一个：string字符串，第二个：起始下标，第三个：结束下标（可以是负数，从末尾起始是-1，以此类推）

```02
  let str = '15631171756'

  _encryStr(str, 3, 7)   // 156****1756
  _encryStr(str, 3, -4)   // 156****1756
```

### 3. _getUrlQuery  // 获取地址栏上拼接的参数

参数：string字符串

``` 03
  // 若当前地址栏 url = http://localhost:8080/detail/2784?code=123&name=yyy

  _getUrlQuery('code') // "123"
  _getUrlQuery('name') // "yyy"
```

### 4. _moneyBigFormat  // 金额转大写

参数：string字符串 或 number

``` 03
  _moneyBigFormat(123456.78)   // "壹拾贰万叁仟肆佰伍拾陆元柒角捌分"
  _moneyBigFormat('123456.78') // "壹拾贰万叁仟肆佰伍拾陆元柒角捌分"
```

### 5. _moneyReplace  // 金额格式限制

参数：string字符串 或 number

``` 03
  _moneyReplace(123456.78)    // "123.45"
  _moneyReplace('123456.78')  // "123.45"
  _moneyReplace('a')  // 0
```

### 6. _moneyThousandFormat  // 金额添加千分符

参数：string字符串 或 number

``` 03
  _moneyThousandFormat(12345678)    // "12,345,678.00"
  _moneyThousandFormat('123456.78')    // "123,456.78"
```
