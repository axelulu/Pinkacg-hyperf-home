import request from '@/utils/request'

export function getSettingList (parameter) {
  return request({
    url: '/setting/' + parameter.name + '/setting_query',
    method: 'get',
    params: parameter
  })
}

export function getSettingKey (parameter) {
  return request({
    url: '/setting/' + parameter.name + '/setting_query_key',
    method: 'get',
    params: parameter
  })
}
