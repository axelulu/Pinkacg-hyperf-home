<template>
  <div v-if="!_isMobile()">
    <Header @changeSearch="changeSearch" @signDaily="signDaily" @changeLogin="changeLogin"></Header>
    <router-view @changeLogin="changeLogin" :key="key" />
    <Footer></Footer>

    <!--搜索-->
    <div v-if="showSearch" class="pinkacg_search_bar pinkacg_dialog">
      <div @click="showSearch = !showSearch" class="pinkacg_search_bar_ pinkacg_dialog_ open"></div>
      <div class="search_bar pinkacg_search_box_container open">
        <div>
          <div class="search_bar_form">
            <label class="search_bar_label">搜索</label>
            <a-input @pressEnter="Search" class="search_bar_input" placeholder="试试：漫画" v-model="searchWord" />
          </div>
          <div class="search_bar_all">
            <a @click="enterSearch('动漫')" class="search_bar_item">动漫</a>
            <a @click="enterSearch('小说')" class="search_bar_item">小说</a>
            <a @click="enterSearch('漫画')" class="search_bar_item">漫画</a>
          </div>
        </div>
      </div>
    </div>

    <!--登陆-->
    <div v-if="showLogin" class="pinkacg_login_bar pinkacg_dialog">
      <div @click="showLogin = !showLogin" class="pinkacg_login_bar_ pinkacg_dialog_ open"></div>
      <div class="pinkacg_login_box pinkacg_dialog_box">
        <div class="pinkacg_login_box_container open">
          <a-form id="pinkacg_login_box_form" class="pinkacg_login_box_form">
            <header class="pinkacg_login_box_header">
              <div class="pinkacg_login_box_title">
                <div class="pinkacg_login_box_title_left">
                  <a
                    @click="changeLoginMod"
                    :class="loginMod ? 'is-active' : ''"
                    class="pinkacg_login_box_title_left_item">登录</a>
                  <a
                    @click="changeRegisterMod"
                    :class="registerMod ? 'is-active' : ''"
                    class="pinkacg_login_box_title_left_item">注册</a>
                  <a
                    @click="changeForgetMod"
                    :class="forgetMod ? 'is-active' : ''"
                    class="pinkacg_login_box_title_left_item">丢失密码</a>
                </div>
              </div>
            </header>
            <div v-if="loginMod" class="pinkacg_login_box_content">
              <div class="pinkacg_login_box_content_text">
                <div>
                  <div><p>欢迎登录粉萌次元！</p></div>
                  <a-form-model
                    :model="login"
                    :rules="loginRules"
                    class="content">
                    <a-form-model-item
                      prop="username"
                      class="pinkacg_login_box_content_group"><label
                        class="login_input pinkacg_login_box_content_inputs">
                        <span
                          class="pinkacg_login_box_content_inputs_icon">
                          <span
                            class="poi-icon fa-user fas fa-fw"></span>
                        </span>
                        <span
                          class="poi-form_group_inputs_content">
                          <a-input
                            class="pinkacg_login_box_content_input user"
                            placeholder="您的用户名"
                            title="您的用户名"
                            v-model="login.username"/>
                        </span>
                      </label>
                    </a-form-model-item>
                    <a-form-model-item
                      prop="password"
                      class="pinkacg_login_box_content_group">
                      <label
                        class="login_input pinkacg_login_box_content_inputs">
                        <span
                          class="pinkacg_login_box_content_inputs_icon">
                          <span
                            class="poi-icon fa-unlock-alt fas fa-fw"></span>
                        </span>
                        <span
                          class="poi-form_group_inputs_content">
                          <a-input
                            type="password"
                            class="pinkacg_login_box_content_input pwd"
                            placeholder="密码"
                            title="密码"
                            required=""
                            tabindex="1"
                            v-model="login.password"/>
                        </span>
                      </label>
                    </a-form-model-item>
                  </a-form-model>
                </div>
              </div>
            </div>
            <div v-if="registerMod" class="pinkacg_login_box_content">
              <div class="pinkacg_login_box_content_text">
                <div>
                  <div><p>欢迎注册粉萌次元！</p></div>
                  <a-form-model
                    :model="register"
                    :rules="registerRules"
                    class="content">
                    <a-form-model-item
                      prop="username"
                      class="pinkacg_login_box_content_group">
                      <label
                        class="login_input pinkacg_login_box_content_inputs">
                        <span
                          class="pinkacg_login_box_content_inputs_icon">
                          <span
                            class="poi-icon fa-user fas fa-fw"></span>
                        </span>
                        <span
                          class="poi-form_group_inputs_content">
                          <a-input
                            class="pinkacg_login_box_content_input user"
                            placeholder="您的用户名"
                            title="您的用户名"
                            v-model="register.username"/>
                        </span>
                      </label>
                    </a-form-model-item>
                    <a-form-model-item
                      prop="email"
                      class="pinkacg_login_box_content_group">
                      <label
                        class="login_input pinkacg_login_box_content_inputs">
                        <span
                          class="pinkacg_login_box_content_inputs_icon">
                          <span
                            class="poi-icon fa-user fas fa-fw"></span>
                        </span>
                        <span
                          class="poi-form_group_inputs_content">
                          <a-input
                            class="pinkacg_login_box_content_input user"
                            placeholder="您的电子邮件"
                            title="您的电子邮件"
                            v-model="register.email"/>
                        </span>
                      </label>
                    </a-form-model-item>
                    <a-form-model-item
                      prop="password"
                      class="pinkacg_login_box_content_group">
                      <label
                        class="login_input pinkacg_login_box_content_inputs">
                        <span
                          class="pinkacg_login_box_content_inputs_icon">
                          <span
                            class="poi-icon fa-unlock-alt fas fa-fw"></span>
                        </span>
                        <span
                          class="poi-form_group_inputs_content">
                          <a-input
                            type="password"
                            class="pinkacg_login_box_content_input pwd"
                            placeholder="密码"
                            title="密码"
                            v-model="register.password"/>
                        </span>
                      </label>
                    </a-form-model-item>
                  </a-form-model>
                </div>
              </div>
            </div>
            <footer class="pinkacg_login_box_footer">
              <button
                v-if="loginMod"
                @click="Logins"
                class="pinkacg_login_box_footer_btn login"
                tabindex="1">
                <span class="poi-icon fa-arrow-alt-circle-right fas fa-fw" aria-hidden="true"></span>
                <span
                  class="pinkacg_icon_text">登录</span>
              </button>
              <button
                v-if="registerMod"
                @click="Registers"
                class="pinkacg_login_box_footer_btn login"
                tabindex="1">
                <span class="poi-icon fa-arrow-alt-circle-right fas fa-fw" aria-hidden="true"></span>
                <span
                  class="pinkacg_icon_text">注册</span>
              </button>
              <button
                v-if="forgetMod"
                @click="Forgets"
                class="pinkacg_login_box_footer_btn login"
                tabindex="1">
                <span class="poi-icon fa-arrow-alt-circle-right fas fa-fw" aria-hidden="true"></span>
                <span
                  class="pinkacg_icon_text">提交忘记密码</span>
              </button>
            </footer>
          </a-form>
        </div>
      </div>
    </div>

    <!--每日签到-->
    <div v-if="showSignDaily" class="pinkacg_login_bar pinkacg_dialog">
      <div @click="showSignDaily = !showSignDaily" class="pinkacg_login_bar_ pinkacg_dialog_ open"></div>
      <div class="pinkacg_login_box pinkacg_dialog_box">
        <div class="pinkacg_login_box_container open">
          <div class="pinkacg_login_box_content">
            <div class="pinkacg_login_box_content_text">
              <div>
                <div class="pinkacg_author_portal_item_content" style="margin: 20px">每日一冲正在开发中。。。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>手机端请使用app访问！（app正在开发中。。。）</div>
</template>

<script>
import { deviceMixin } from '@/store/device-mixin'
import SelectLang from '@/components/SelectLang'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import { mapActions } from 'vuex'
import { register } from '@/api/login'

export default {
  name: 'UserLayout',
  data () {
    return {
      'loginRules': {
        username: [
          {
            required: true,
            message: '请输入用户名！',
            whitespace: true
          },
          {
            max: 50,
            message: '用户名不得超过15字符'
          },
          {
            min: 4,
            message: '用户名不得小于4字符'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入你的密码!'
          },
          {
            validator: this.validateToNextPassword
          }
        ]
      },
      'registerRules': {
        username: [
          {
            required: true,
            message: '请输入用户名！',
            whitespace: true
          },
          {
            max: 50,
            message: '用户名不得超过15字符'
          },
          {
            min: 4,
            message: '用户名不得小于4字符'
          }
        ],
        email: [
          {
            type: 'email',
            message: '邮箱格式不正确'
          },
          {
            max: 50,
            message: '邮箱不得超过50字符'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入你的密码!'
          },
          {
            validator: this.validateToNextPassword
          }
        ]
      },
      'loginMod': true,
      'registerMod': false,
      'forgetMod': false,
      'showSearch': false,
      'showSignDaily': false,
      'showLogin': false,
      'searchWord': '',
      'login': {
        'username': '',
        'password': ''
      },
      'register': {
        'username': '',
        'email': '',
        'password': ''
      },
      confirmDirty: false,
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      }
    }
  },
  methods: {
    validateToNextPassword (rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },
    changeLoginMod () {
      this.forgetMod = false
      this.loginMod = true
      this.registerMod = false
    },
    changeRegisterMod () {
      this.forgetMod = false
      this.loginMod = false
      this.registerMod = true
    },
    changeForgetMod () {},
    ...mapActions(['Login']),
    Logins () {
      this.Login(this.login)
        .then(() => {
          this.$message.success('登陆成功')
        })
        .catch(() => {
          this.$message.error('登陆失败')
        })
        .finally(() => {
          setTimeout(() => {
            location.reload()
          }, 1000)
        })
    },
    Registers () {
      register(this.register).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.$message.success('注册成功')
          this.Login({
            'username': this.register.username,
            'password': this.register.password
          })
            .then(() => {
              this.$message.success('登陆成功')
            })
            .catch(() => {
              this.$message.error('登陆失败')
            })
            .finally(() => {
              setTimeout(() => {
                location.reload()
              }, 1000)
            })
        } else {
          this.$message.error('注册失败')
        }
      })
    },
    Forgets () {},
    enterSearch (w) {
      this.showSearch = false
      this.$router.push({
        name: 'search',
        params: {
          word: w
        }
      })
    },
    Search () {
      this.showSearch = false
      this.$router.push({
        name: 'search',
        params: {
          word: this.searchWord
        }
      })
    },
    changeSearch (val) {
      if (val) {
        this.showSearch = !this.showSearch
      }
    },
    signDaily (val) {
      if (val) {
        this.showSignDaily = !this.showSignDaily
      }
    },
    changeLogin (val) {
      if (val) {
        this.showLogin = !this.showLogin
      }
    },
    _isMobile () {
      const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  },
  components: {
    SelectLang,
    Header,
    Footer
  },
  mixins: [deviceMixin],
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  },
  computed: {
    key () {
      return this.$route.name ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>

<style lang='less' scoped>
.ant-form-item {
  margin-bottom: 5px;
}
</style>
