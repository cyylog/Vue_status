import request from '@/utils/request'

// 获取所有 ns 列表
export function getList() {
  return request({
    url: '/nslist',
    method: 'get',
  })
}
