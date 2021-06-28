<template>
  <div class="main">
    <div class="clearfix container setting">
      <user-aside></user-aside>
      <div class="col-md-10 float-right setting_box">
        <div class="ghost_setting_content">
          <div class="ghost_setting_content_container">
            <fieldset class="ghost_setting_content_item">
              <legend class="ghost_setting_content_item_title">
                <span class="ghost_setting_content_primary">
                  <span class="poi-icon fa-user-circle fas fa-fw"></span>
                  <span class="ghost_setting_content_text">我的头像</span></span>
              </legend>
              <div class="ghost_setting_content_item_content">
                <div class="ghost_setting_content_preface">
                  <p>修改头像需要 -5 个喵爪哦！</p>
                </div>
                <div class="ghost_setting_content_my_avatar">
                  <div class="ghost_setting_content_my_avatar_img">
                    <img
                      style="width: 100px;height: 100px;"
                      :src="getImg(userInfo.avatar)"
                      alt="avatar"
                      class="ghost_setting_content_avatar_img"
                      width="100"
                      height="100"></div>
                  <label class="ghost_setting_content_my_avatar_upload-btn">
                    <span class="poi-icon fa-camera fas fa-fw"></span>
                    <span class="ghost_setting_content_text">更改我的头像</span>
                    <a-input
                      style="display:none"
                      type="file"
                      name="my_avatar"
                      id="my_avatar"
                      accept=".jpg, .gif, .png"
                      resetonclick="true"/>
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset class="ghost_setting_content_item">
              <legend class="ghost_setting_content_item_title">
                <span class="ghost_setting_content_primary">
                  <span class="poi-icon fa-user-circle fas fa-fw"></span>
                  <span class="ghost_setting_content_text">个人资料</span></span>
              </legend>
              <div class="ghost_setting_content_item_content">
                <div class="ghost_setting_content_preface">
                  <p>这里可以修改个人资料哦！</p>
                </div>
                <a-form-model
                  :model="userInfo"
                  ref='userInfo'
                  :rules='userInfoRules'
                  id="my_setting_information">
                  <a-form-model-item
                    prop='name'
                    class="ghost_setting_content_preface_item">
                    <div class="clearfix ">
                      <div class="col-lg-2 float-left">
                        <div class="ghost_setting_content_preface_item_title">昵称</div>
                      </div>
                      <div class="col-lg-10 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <a-input
                            class="ghost_setting_content_preface_control"
                            placeholder="昵称"
                            title="昵称"
                            v-model="userInfo.name"/>
                        </div>
                      </div>
                    </div>
                  </a-form-model-item>
                  <a-form-model-item
                    prop='desc'
                    class="ghost_setting_content_preface_item">
                    <div class="clearfix ">
                      <div class="col-lg-2 float-left">
                        <div class="ghost_setting_content_preface_item_title">描述</div>
                      </div>
                      <div class="col-lg-10 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <a-textarea
                            class="ghost_setting_content_preface_control"
                            placeholder="描述"
                            title="描述"
                            v-model="userInfo.desc">
                          </a-textarea>
                        </div>
                      </div>
                    </div>
                  </a-form-model-item>
                  <a-form-model-item class="ghost_setting_content_preface_item">
                    <div class="clearfix ">
                      <div class="col-lg-10 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <a-button @click='updateUserInfo' class="my_text_msg ghost_setting_content_btn_success">
                            <span class="poi-icon fa-check fas fa-fw"></span>
                            <span class="ghost_setting_content_text">更新个人资料</span>
                          </a-button>
                        </div>
                      </div>
                    </div>
                  </a-form-model-item>
                </a-form-model>
              </div>
            </fieldset>
            <fieldset class="ghost_setting_content_item">
              <legend class="ghost_setting_content_item_title">
                <span class="ghost_setting_content_primary">
                  <span class="poi-icon fa-at fas fa-fw"></span>
                  <span class="ghost_setting_content_text">账号邮箱</span></span>
              </legend>
              <div class="ghost_setting_content_item_content">
                <div class="ghost_setting_content_preface">
                  <p>修改账号邮箱，需要 -10 个喵爪哦！</p>
                </div>
                <a-form-model
                  :model="userEmail"
                  ref='userEmail'
                  :rules='userEmailRules'>
                  <a-form-model-item
                    prop='email'
                    class="ghost_setting_content_preface_item">
                    <div class="clearfix">
                      <div class="col-lg-2 float-left">
                        <div class="ghost_setting_content_preface_item_title">新邮箱</div>
                      </div>
                      <div class="col-lg-10 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <a-input
                            class="ghost_setting_content_preface_control"
                            placeholder="新邮箱"
                            title="新邮箱"
                            v-model="userEmail.email"/>
                        </div>
                      </div>
                    </div>
                  </a-form-model-item>
                  <a-form-model-item
                    prop='myConfirm'
                    class="ghost_setting_content_preface_item">
                    <div class="clearfix">
                      <div class="col-lg-2 float-left">
                        <div class="ghost_setting_content_preface_item_title">验证码</div>
                      </div>
                      <div class="col-lg-10 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <div class="clearfix">
                            <div style="padding-left:0px" class="col-lg-5 float-left">
                              <a-input
                                class="ghost_setting_content_preface_control"
                                placeholder="验证码"
                                title="验证码"
                                v-model='userEmail.myConfirm'/>
                            </div>
                            <div class="col-lg-7 float-right">
                              <a @click='sendMails' class="sent_email ghost_setting_content_text_email">
                                <span class="poi-icon fa-envelope fas fa-fw"></span>
                                <span class="">发送验证码</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a-form-model-item>
                  <a-form-model-item class="ghost_setting_content_preface_item">
                    <div class="clearfix">
                      <div class="col-lg-2 float-left">
                        <div class="ghost_setting_content_preface_item_title"></div>
                      </div>
                      <div class="col-lg-10 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <a-button
                            @click='updateUserEmails'
                            class="my_email_msg ghost_setting_content_btn_success">
                            <span class="poi-icon fa-check fas fa-fw"></span>
                            <span class="ghost_setting_content_text">更新邮箱</span>
                          </a-button>
                        </div>
                      </div>
                    </div>
                  </a-form-model-item>
                </a-form-model>
              </div>
            </fieldset>
            <fieldset class="ghost_setting_content_item">
              <legend class="ghost_setting_content_item__title is-enabled-toggle">
                <span class="ghost_setting_content_primary">
                  <span class="poi-icon fa-lock fas fa-fw"></span>
                  <span class="ghost_setting_content_text">我的密码</span></span>
              </legend>
              <div class="ghost_setting_content_item__content is-expand">
                <div class="ghost_setting_content_preface">
                  <p>修改密码，需要 -10 个喵爪哦！</p>
                </div>
                <a-form-model
                  :model="userNewPassword"
                  ref='userNewPassword'
                  :rules='userNewPasswordRules'>
                  <a-form-model-item class="ghost_setting_content_preface_item">
                    <div class="clearfix">
                      <div class="col-lg-2 float-left">
                        <div class="ghost_setting_content_preface_item_title">旧密码</div>
                      </div>
                      <div class="col-lg-10 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <a-input
                            class="ghost_setting_content_preface_control"
                            placeholder="旧密码"
                            title="旧密码"
                            v-model='userNewPassword.password'/>
                        </div>
                      </div>
                    </div>
                  </a-form-model-item>
                  <a-form-model-item class="ghost_setting_content_preface_item">
                    <div class="clearfix">
                      <div class="col-lg-2 float-left">
                        <div class="ghost_setting_content_preface_item_title">新密码</div>
                      </div>
                      <div class="col-lg-10 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <a-input
                            class="ghost_setting_content_preface_control"
                            placeholder="新密码"
                            title="新密码"
                            v-model='userNewPassword.newPassword'/>
                        </div>
                      </div>
                    </div>
                  </a-form-model-item>
                  <div class="ghost_setting_content_preface_item">
                    <div class="clearfix">
                      <div class="col-lg-2 float-left">
                        <div class="ghost_setting_content_preface_item_title">确认新密码</div>
                      </div>
                      <div class="col-lg-10 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <a-input
                            class="ghost_setting_content_preface_control"
                            placeholder="确认新密码"
                            title="确认新密码"
                            v-model='userNewPassword.confirmPassword'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ghost_setting_content_preface_item">
                    <div class="clearfix">
                      <div class="col-lg-2 float-left">
                        <div class="ghost_setting_content_preface_item_title"></div>
                      </div>
                      <div class="col-lg-10 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <a-button
                            @click='updateUserPassword'
                            class="my_pwd_msg ghost_setting_content_btn_success">
                            <span class="poi-icon fa-check fas fa-fw"></span>
                            <span class="ghost_setting_content_text">更新密码</span>
                          </a-button>
                        </div>
                      </div>
                    </div>
                  </div>
                </a-form-model>
              </div>
            </fieldset>
            <fieldset class="ghost_setting_content_item">
              <legend class="ghost_setting_content_item__title is-enabled-toggle">
                <span class="ghost_setting_content_primary">
                  <span class="poi-icon fa-lock fas fa-fw"></span>
                  <span class="ghost_setting_content_text">提醒显示</span></span>
              </legend>
              <div class="ghost_setting_content_item__content is-expand">
                <div class="ghost_setting_content_preface">
                  <p>邮件提醒及内容显示开关</p>
                </div>
                <a-form-model>
                  <a-form-model-item class="ghost_setting_content_preface_item" style="margin: 25px 0px;">
                    <div class="clearfix">
                      <div class="col-lg-4 float-left">
                        <div class="ghost_setting_content_preface_item_title">显示ip地址</div>
                      </div>
                      <div class="col-lg-8 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <div class="toggle-button-cover">
                            <div class="button-cover">
                              <div class="button r">
                                <input value="yes" type="checkbox" name="show_ip" class="ghost_show_ip checkbox">
                                <div class="knobs"></div>
                                <div class="layer"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a-form-model-item>
                  <a-form-model-item class="ghost_setting_content_preface_item">
                    <div class="clearfix">
                      <div class="col-lg-2 float-left">
                        <div class="ghost_setting_content_preface_item_title"></div>
                      </div>
                      <div class="col-lg-10 float-right">
                        <div class="ghost_setting_content_preface_item_content">
                          <a-button
                            class="my_switch_msg ghost_setting_content_btn_success">
                            <span class="poi-icon fa-check fas fa-fw"></span>
                            <span class="ghost_setting_content_text">更新选项</span></a-button>
                        </div>
                      </div>
                    </div>
                  </a-form-model-item>
                </a-form-model>
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
import { getUserList, sendChangeMail, updateUserEmail, updateUserInfo, updateUserPassword } from '@/api/user'
import { getImg } from '@/utils/util'

export default {
  name: 'Index',
  components: {
    userAside
  },
  data () {
    return {
      'userInfoRules': {
        name: [{ required: true, message: '请输入名称！' }],
        desc: [{ required: true, message: '请输入描述！' }]
      },
      'userEmailRules': {
        email: [{ required: true, message: '请输入邮箱！' }],
        myConfirm: [{ required: true, message: '请输入验证码！' }]
      },
      'userNewPasswordRules': {
        email: [{ required: true, message: '请输入邮箱！' }],
        myConfirm: [{ required: true, message: '请输入验证码！' }]
      },
      'userNewPassword': {
        'password': '',
        'confirmPassword': '',
        'newPassword': ''
      },
      'userEmail': {
        'myConfirm': '',
        'email': ''
      },
      'userInfo': {},
      'userId': this.$store.getters.userInfo.id,
      getImg
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    updateUserEmails () {
      const that = this
      this.$refs.userNewPassword.validate(valide => {
        if (valide) {
          updateUserEmail({
            'id': this.userInfo.id,
            'email': this.userEmail.email,
            'myConfirm': this.userEmail.myConfirm
          }).then((res) => {
            if (res.code !== 200) {
              that.$message.error(res.message)
              return []
            }
            that.$message.success(res.message)
          })
        }
      })
    },
    sendMails () {
      const that = this
      sendChangeMail({
        'id': this.userInfo.id,
        'email': this.userEmail.email
      }).then((res) => {
        if (res.code !== 200) {
          that.$message.error(res.message)
          return []
        }
        that.$message.success(res.message)
      })
    },
    updateUserPassword () {
      const that = this
      this.$refs.userNewPassword.validate(valide => {
        if (valide) {
          updateUserPassword(this.userNewPassword, this.userInfo.id).then((res) => {
            if (res.code !== 200) {
              that.$message.error(res.message)
              return []
            }
            that.$message.success(res.message)
          })
        }
      })
    },
    updateUserInfo () {
      const that = this
      this.$refs.userInfo.validate(valide => {
        if (valide) {
          updateUserInfo(this.userInfo).then((res) => {
            if (res.code !== 200) {
              that.$message.error(res.message)
              return []
            }
            that.$message.success(res.message)
          })
        }
      })
    },
    getUserInfo () {
      const that = this
      getUserList({
        'id': this.userId
      }).then((res) => {
        if (res.code !== 200) {
          that.$message.error(res.message)
          return []
        }
        this.userInfo = res.result.data[0]
      })
    }
  }
}
</script>

<style scoped>
  input, textarea, button {
    font-size: 12px;
  }
  .ant-form-item {
    margin-bottom: 0px;
  }
</style>
