import request from '@/utils/request'

const api = {
  questionList: '/question/index',
  submitQuestionResult: '/submitQuestionResult/index'
}

export default api

export function getQuestionList (parameter) {
  return request({
    url: api.questionList,
    method: 'get',
    params: parameter
  })
}

export function submitQuestionResult (parameter) {
  return request({
    url: api.submitQuestionResult,
    method: 'post',
    data: parameter
  })
}
