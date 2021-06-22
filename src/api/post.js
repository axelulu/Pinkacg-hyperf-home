import request from '@/utils/request'

const api = {
  post: '/post/index'
}

export default api

export function getPostList (parameter) {
  return request({
    url: api.post,
    method: 'get',
    params: parameter
  })
}
