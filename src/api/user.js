import request from '@/utils/request'

const api = {
  userList: '/user/index',
  userCreate: '/user/create',
  userUpdate: '/user/update',
  userUpdateInfo: '/user/updateUserInfo',
  userUpdatePassword: '/user/updateUserPassword',
  sendChangeMail: '/user/sendChangeMail',
  updateUserEmail: '/user/updateUserEmail',
  userDelete: '/user/delete'
}

export default api

export function updateUserEmail (data) {
  return request({
    url: api.updateUserEmail + '/' + data.id,
    method: 'post',
    data: data
  })
}

export function sendChangeMail (data) {
  return request({
    url: api.sendChangeMail + '/' + data.id,
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

export function createUserList (data) {
  return request({
    url: api.userCreate,
    method: 'post',
    data: data
  })
}

export function updateUserList (data) {
  return request({
    url: api.userUpdate + '/' + data.id,
    method: 'put',
    data: data
  })
}

export function updateUserInfo (data) {
  return request({
    url: api.userUpdateInfo + '/' + data.id,
    method: 'put',
    data: data
  })
}

export function updateUserPassword (data, id) {
  return request({
    url: api.userUpdatePassword + '/' + id,
    method: 'put',
    data: data
  })
}

export function deleteUserList (data) {
  return request({
    url: api.userDelete + '/' + data.id,
    method: 'delete'
  })
}
