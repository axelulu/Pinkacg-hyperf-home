import request from '@/utils/request'

const api = {
  uploadAvatarImg: '/user/updateUserAvatar',
  uploadPostFile: '/uploadPostFile/create',
  uploadImgFile: '/uploadImgFile/create'
}

export default api

export function uploadImgFile (parameter) {
  console.log(parameter)
  return request({
    url: api.uploadImgFile,
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
