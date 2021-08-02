import request from '@/utils/request'

const api = {
  questionList: '/question/question_query',
  submitQuestionResult: '/question/question_submit'
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
