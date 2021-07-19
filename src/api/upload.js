import request from '@/utils/request'

const api = {
  uploadAvatarImg: '/user/updateUserAvatar',
  uploadPostFile: '/upload/uploadPostFile',
  uploadFile: '/upload/uploadFile'
}

export default api

export function uploadFile (parameter) {
  console.log(parameter)
  return request({
    url: api.uploadFile,
    method: 'post',
    data: parameter
  })
}

export function uploadPostFile (parameter) {
  console.log(parameter)
  return request({
    url: api.uploadPostFile,
    method: 'post',
    data: parameter
  })
}

export function uploadAvatarImg (parameter) {
  return request({
    url: api.uploadAvatarImg + '/' + parameter.id,
    method: 'put',
    data: parameter
  })
}
