import request from '@/utils/request'

const api = {
  categoryList: '/category/category_query'
}

export default api

export function getCategoryList (parameter) {
  return request({
    url: api.categoryList,
    method: 'get',
    params: parameter
  })
}
