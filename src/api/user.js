import request from '@/utils/request'

const api = {
  userList: '/user/user_query',
  userUpdateInfo: '/user/user_update_info',
  userUpdatePassword: '/user/user_update_password',
  sendChangeMail: '/user/user_send_email',
  updateUserEmail: '/user/user_update_email',
  UserInfo: '/user/user_info'
}

export default api

export function getInfo () {
  return request({
    url: api.UserInfo,
    method: 'get'
  })
}

export function updateUserEmail (data) {
  return request({
    url: api.updateUserEmail,
    method: 'post',
    data: data
  })
}

export function sendChangeMail (data) {
  return request({
    url: api.sendChangeMail,
    method: 'post',
    data: data
  })
}

export function getUserList (parameter) {
  return request({
    url: api.userList,
    method: 'get',
    params: parameter
  })
}

export function updateUserInfo (data) {
  return request({
    url: api.userUpdateInfo,
    method: 'put',
    data: data
  })
}

export function updateUserPassword (data) {
  return request({
    url: api.userUpdatePassword,
    method: 'put',
    data: data
  })
}
