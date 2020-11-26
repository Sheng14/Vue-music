import originJsonp from 'jsonp' // 引入库

export default function jsonp (url, data, opts) { // 定义jsonp方法返回promise，注意url与data的拆分
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data) // 判断当前url地址是有？还是&给予不同的后缀然后再加上处理完的参数们
  return new Promise((resolve, reject) => {
    originJsonp(url, opts, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param (data) { // 遍历拼接后面的参数们
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : '' // 如果是参数为undefined就无需返回给个空就行
    url += `&${k}=${encodeURIComponent(value)}` // 拼接这些参数，，记得encode一下
  }
  return url ? url.substring(1) : '' // 最后返回把最开头那个&去掉
}
