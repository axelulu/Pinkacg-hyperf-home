<template>
  <div>
    <Header @changeSearch='changeSearch' @changeLogin='changeLogin'></Header>
    <router-view :key='key' />
    <Footer></Footer>

    <!--搜索-->
    <div v-if='showSearch' class='ghost_search_bar ghost_dialog'>
      <div @click='showSearch = !showSearch' class='ghost_search_bar_ ghost_dialog_ open'></div>
      <div class='search_bar ghost_search_box_container open'>
        <div>
          <div class='search_bar_form'>
            <label class='search_bar_label'>搜索</label>
            <a-input @pressEnter='Search' class='search_bar_input' placeholder='试试：漫画' v-model='searchWord' />
          </div>
          <div class='search_bar_all'>
            <a @click='enterSearch("动漫")' class='search_bar_item'>动漫</a>
            <a @click='enterSearch("小说")' class='search_bar_item'>小说</a>
            <a @click='enterSearch("漫画")' class='search_bar_item'>漫画</a>
          </div>
        </div>
      </div>
    </div>

    <!--登陆-->
    <div v-if='showLogin' class='ghost_login_bar ghost_dialog'>
      <div @click='showLogin = !showLogin' class='ghost_login_bar_ ghost_dialog_ open'></div>
      <div class='ghost_login_box ghost_dialog_box'>
        <div class='ghost_login_box_container open'>
          <a-form id='ghost_login_box_form' class='ghost_login_box_form'>
            <header class='ghost_login_box_header'>
              <div class='ghost_login_box_title'>
                <div class='ghost_login_box_title_left'>
                  <a
                    class='login ghost_login_box_title_left_item is-active'>登录</a>
                  <a
                    class='reg ghost_login_box_title_left_item'>注册</a>
                  <a
                     class='forget ghost_login_box_title_left_item'>丢失密码</a>
                </div>
                <a class='ghost_login_box_close'> <span class='poi-icon fa-times fas fa-fw' aria-hidden='true'></span>
                </a></div>
            </header>
            <div class='ghost_login_box_content'>
              <div class='ghost_login_box_content_text'>
                <div>
                  <div><p>欢迎登录粉萌次元！</p></div>
                  <div class='content'>
                    <div class='ghost_login_box_content_group'><label
                      class='login_input ghost_login_box_content_inputs'>
                      <span
                        class='ghost_login_box_content_inputs_icon'>
                        <span
                          class='poi-icon fa-user fas fa-fw'></span>
                      </span>
                      <span
                        class='poi-form__group__inputs__content'>
                        <input
                          class='ghost_login_box_content_input user'
                          placeholder='您的电子邮件'
                          title='您的电子邮件'
                          v-model='login.username'>
                      </span>
                    </label>
                    </div>
                    <div class='ghost_login_box_content_group'><label
                      class='login_input ghost_login_box_content_inputs'>
                      <span
                        class='ghost_login_box_content_inputs_icon'>
                        <span
                          class='poi-icon fa-unlock-alt fas fa-fw'></span>
                      </span>
                      <span
                        class='poi-form__group__inputs__content'>
                        <input
                          type='password'
                          class='ghost_login_box_content_input pwd'
                          placeholder='密码'
                          title='密码'
                          required=''
                          tabindex='1'
                          v-model='login.password'></span>
                    </label>
                    </div>
                    <label class='remembermetext'>
                      <input
                        type='checkbox'
                        checked='checked'
                        class='rememberme'
                        value='forever'>14天内记住登录</label>
                  </div>
                </div>
              </div>
            </div>
            <footer class='ghost_login_box_footer'>
              <button
                @click='Logins'
                type='submit'
                class='ghost_login_box_footer_btn login'
                tabindex='1'>
                <span class='poi-icon fa-arrow-alt-circle-right fas fa-fw' aria-hidden='true'></span>
                <span
                  class='ghost_icon_text'>登录</span></button>
            </footer>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deviceMixin } from '@/store/device-mixin'
import SelectLang from '@/components/SelectLang'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import { mapActions } from 'vuex'

export default {
  name: 'UserLayout',
  data () {
    return {
      'showSearch': false,
      'showLogin': false,
      'searchWord': '',
      'login': {
        'username': '',
        'password': ''
      },
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
            window.location = '/'
          }, 1000)
        })
    },
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
    changeLogin (val) {
      if (val) {
        this.showLogin = !this.showLogin
      }
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

</style>
