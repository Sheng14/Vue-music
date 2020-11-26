import jsonp from '../common/js/jsonp'
import { options, commonParams } from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag'
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    outCharset: 'GB2312',
    needNewCode: 0,
    cmd: 'shoubo',
    lan: 'all'
  })
  return jsonp(url, data, options)
}
