import request from '@/utils/request'

const api = {
  postList: '/post/post_query',
  purchase: '/post/post_purchase',
  postCreate: '/post/post_create'
}

export default api

export function getPostList (parameter) {
  return request({
    url: api.postList,
    method: 'get',
    params: parameter
  })
}

export function purchase (parameter) {
  return request({
    url: api.purchase,
    method: 'post',
    data: parameter
  })
}

export function createPostList (parameter) {
  return request({
    url: api.postCreate,
    method: 'post',
    data: parameter
  })
}
