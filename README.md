<!--
 * @author: 殷鹏飞
 * @Date: 2020-01-10 10:27:25
 * @information: readme
 -->

# ypf-methods

> 全局混入 vue 的 js 常用方法包

## 使用方式

```00
  01. 安装此包

    npm i ypf-methods

  02. 在 main.js 中 引入

    import ypfMethods form 'ypf-methods'

  03. 在 main.js 中 初始化方法包

    Vue.use(ypfMethods)
```

> 方法说明：

### _deepClone  // 深拷贝

```01
  深拷贝：改变对象或数组或字符串的地址（若值是undefined的话，该字段消失）

  let obj = {
    a: "这是a的值",
    b: ["bb1",2,3],
    c: { aa: 123, bb: undefined, cc: null, ee: '', ff: ["ff1",2] }
  }

  let obj2 = this._deepClone(obj)

  //输出结果：
  obj2 = {
    a: '这是a的值',
    b: [ 'bb1', 2, 3 ],
    c: { aa: 123, cc: null, ee: '', ff: [ 'ff1', 2 ] }
  }
```

### _encryStr  // 字符串加星号（*）展示

```02
  //参数说明：第一个：string格式，第二个：起始下标，第三个：结束下标（可以是负数，从末尾起始是-1，以此类推）

  let str = '15631171756'

  this._encryStr(str, 3, 7)   // 156****1756
  this._encryStr(str, 3, -4)   // 156****1756
```

### _formRequired  // 表单必填校验

``` 03
  // 例 1：
  let form = {
    a: '这是a中的表单内容',
    b: 0,
    c: {
      aa: '这是aa中的表单内容',
      bb: '0',
    },
    d: '',
  }

  this._formRequired(form) //false（因为d的value值是空字符串）

  // 例 2：
  let form = {
    a: '这是a中的表单内容',
    b: 0,
    c: {
      aa: '这是aa中的表单内容',
      bb: '0',
    },
    d: '这里新添加了内容',
  }

  this._formRequired(form) //true
```
