import request from '@/utils/request'

const api = {
  category: '/category/index'
}

export default api

export function getCategoryList (parameter) {
  return request({
    url: api.category,
    method: 'get',
    params: parameter
  })
}
