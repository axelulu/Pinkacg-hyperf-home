<template>
  <div class="main">
    <div class="clearfix container setting">
      <user-aside></user-aside>
      <div class="col-md-10 float-right setting_box">
        <div class="pinkacg_setting_content">
          <div class="drafts pinkacg_setting_content_container">
            <fieldset class="pinkacg_setting_content_item">
              <legend class="pinkacg_setting_content_item_title">
                <span class="pinkacg_setting_content_primary">
                  <span class="poi-icon fa-user-circle fas fa-fw" aria-hidden="true"></span>
                  <span class="pinkacg_setting_content_text">答题得会员</span></span>
              </legend>
              <div class="pinkacg_setting_content_item_content">
                <div class="pinkacg_setting_content_preface">
                  <p>您可以在这个页面进行答题获取本站会员。</p>
                  <p>答题有时间限制且每日只能做5次，每次限时3分钟！</p>
                </div>
                <div v-if='grade === -1' class="pinkacg_notice_content_preface">
                  <a-spin :spinning="loading">
                    <a-skeleton v-if='loading' active />
                    <div class="user_test">
                      <!--demo1 答题卡-->
                      <div id="test_form" class="card_wrap">
                        <div v-for='(v, k) in questionList' :key='k' class="user_test_card_cont">
                          <div class="user_test_card">
                            <p class="test_content_nr_main question">
                              <span>{{ k+1 }}、</span>{{ v.question }}</p>
                            <ul class="clearfix user_test_select">
                              <li
                                @click='selectAnswer(v, "A")'
                                class="user_test_item"
                                :class='v.result === "A" ? "active" : ""'>
                                <a-input
                                  class="user_test_input"
                                  :title="v.A"/>
                                <label
                                  class="user_test_label">{{ v.A }}</label>
                              </li>
                              <li
                                @click='selectAnswer(v, "B")'
                                :class='v.result === "B" ? "active" : ""'
                                class="user_test_item">
                                <a-input
                                  class="user_test_input"
                                  :title="v.B"/>
                                <label
                                  class="user_test_label">{{ v.B }}</label>
                              </li>
                              <li
                                @click='selectAnswer(v, "C")'
                                :class='v.result === "C" ? "active" : ""'
                                class="user_test_item">
                                <a-input
                                  class="user_test_input"
                                  :title="v.C"/>
                                <label
                                  class="user_test_label">{{ v.C }}</label>
                              </li>
                              <li
                                @click='selectAnswer(v, "D")'
                                :class='v.result === "D" ? "active" : ""'
                                class="user_test_item">
                                <a-input
                                  class="user_test_input"
                                  :title="v.D"/>
                                <label
                                  class="user_test_label">{{ v.D }}</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="commit">
                        <a @click='submitQuestionResult' class="pinkacg_setting_content_btn_success btn_commit submit_test">
                          交卷
                        </a>
                      </div>
                    </div>
                  </a-spin>
                </div>
                <div style='text-align: center' v-else-if='(answer === true && pass === false) || grade >= 0 && grade < 60'>
                  <div style='margin: 20px' class="pinkacg_author_portal_item_content">答题完成，很抱歉，未通过！(每日只能答题一次！)</div>
                  <div style='margin: 20px' class="pinkacg_author_portal_item_content">您的得分：{{ grade }}</div>
                </div>
                <div style='text-align: center' v-else-if='(answer === true && pass === true) || grade >= 60'>
                  <div style='margin: 20px' class="pinkacg_author_portal_item_content">答题完成，恭喜您通过！已自动晋升为本站会员用户！</div>
                  <div style='margin: 20px' class="pinkacg_author_portal_item_content">您的得分：{{ grade }}</div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userAside from '@/views/user/components/aside'
import { getQuestionList, submitQuestionResult } from '@/api/question'
import { getUserList } from '@/api/user'

export default {
  name: 'Answer',
  components: {
    userAside
  },
  metaInfo () {
    return {
      title: '我的现金 - 个人设置'
    }
  },
  data () {
    return {
      model: [],
      loading: false,
      questionList: [],
      pass: false,
      answer: false,
      grade: 0,
      user_id: localStorage.getItem('user_id')
    }
  },
  created () {
    getUserList({
      'id': this.user_id
    }).then((res) => {
      this.grade = res.result['data'][0]['answertest']
    })
    this.loading = true
    getQuestionList({
      'answer': 1
    }).then((res) => {
      this.questionList = res.result.data
      this.loading = false
    })
  },
  methods: {
    selectAnswer (v, result) {
      console.log(v.result)
      v.result = result
      console.log(v.result)
    },
    submitQuestionResult () {
      console.log(this.questionList)
      submitQuestionResult(this.questionList).then((res) => {
        this.answer = true
        this.grade = res.result.grade
        if (res.code === 200) {
          this.$message.success('提交成功，得分：' + this.grade + ' 恭喜通过！')
          this.pass = true
        } else {
          this.$message.info('提交成功，得分：' + this.grade + ' 未通过！')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
