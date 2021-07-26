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
                  <span class="pinkacg_setting_content_text">会员信息</span></span>
              </legend>
              <div class="pinkacg_setting_content_item_content">
                <div class="pinkacg_setting_content_preface">
                  <p>您可以在这个页面查看您发布过的帖子，鼠标悬浮即可见编辑按钮。</p>
                  <p>重新编辑帖子后需要二次审核，请谨慎编辑哦！</p>
                </div>
                <div class="pinkacg_notice_content_preface">
                  <div v-if="$store.getters.userInfo.name" class="pinkacg_author_portal_portal_item">
                    <div class="pinkacg_author_portal_item_title">昵称</div>
                    <div class="pinkacg_author_portal_item_content">{{ $store.getters.userInfo.name }}</div></div>
                  <div v-if="$store.getters.userInfo.id" class="pinkacg_author_portal_portal_item">
                    <div class="pinkacg_author_portal_item_title">UID</div>
                    <div class="pinkacg_author_portal_item_content">{{ $store.getters.userInfo.id }}</div></div>
                  <div v-if="$store.getters.userInfo.desc" class="pinkacg_author_portal_portal_item">
                    <div class="pinkacg_author_portal_item_title">描述</div>
                    <div class="pinkacg_author_portal_item_content">{{ $store.getters.userInfo.desc }}</div>
                  </div>
                  <div v-if="$store.getters.userInfo.role_meta" class="pinkacg_author_portal_portal_item">
                    <div class="pinkacg_author_portal_item_title">身份状态：</div>
                    <div class="pinkacg_author_portal_item_content">{{ $store.getters.userInfo.role_meta.name }}</div>
                  </div>
                  <div class="pinkacg_author_portal_portal_item">
                    <div class="pinkacg_author_portal_item_title">答题得分：</div>
                    <div v-if="$store.getters.userInfo.answertest === -1" class="pinkacg_author_portal_item_content">未答题</div>
                    <div v-else class="pinkacg_author_portal_item_content">{{ $store.getters.userInfo.answertest }}</div>
                  </div>
                  <div v-if="$store.getters.userInfo.credit >= 0" class="pinkacg_author_portal_portal_item">
                    <div class="pinkacg_author_portal_item_title">积分信息：</div>
                    <div class="pinkacg_author_portal_item_content">{{ $store.getters.userInfo.credit }}</div>
                  </div>
                  <div class="pinkacg_author_portal_portal_item">
                    <div class="pinkacg_author_portal_item_title">累计发帖</div>
                    <div class="pinkacg_author_portal_item_content">{{ $store.getters.userInfo.post_num }}</div></div>
                  <div class="pinkacg_author_portal_portal_item">
                    <div class="pinkacg_author_portal_item_title">累计评论</div>
                    <div class="pinkacg_author_portal_item_content">{{ $store.getters.userInfo.comment_num }}</div>
                  </div>
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

export default {
  name: 'Index',
  components: {
    userAside
  },
  metaInfo () {
    return {
      title: '我的vip - 个人设置'
    }
  }
}
</script>

<style scoped>

</style>
