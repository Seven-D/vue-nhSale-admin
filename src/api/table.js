import request from '@/utils/request'

export function getList(params) {  //获取数据函数
  return request({
    url: '/table/list',  //请求URL
    method: 'get',       //请求方式,还有一个post
    params
  })
}
