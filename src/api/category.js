import request from '@/utils/request'

const api = {
  categoryList: '/category/category_query',
  categoryListTree: '/category/category_query_tree',
  categoryNum: '/category/category_num_query'
}

export default api

export function getCategoryList (parameter) {
  return request({
    url: api.categoryList,
    method: 'get',
    params: parameter
  })
}

export function getCategoryNum (parameter) {
  return request({
    url: api.categoryNum,
    method: 'get',
    params: parameter
  })
}
