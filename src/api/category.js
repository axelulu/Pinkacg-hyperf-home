import request from '@/utils/request'

const api = {
  category: '/category/index',
  categoryEdit: '/category/edit'
}

export default api

export function getCategoryList (parameter) {
  return request({
    url: api.category,
    method: 'get',
    params: parameter
  })
}

export function getCategory (parameter) {
  return request({
    url: api.categoryEdit + '/' + parameter.id,
    method: 'post'
  })
}
