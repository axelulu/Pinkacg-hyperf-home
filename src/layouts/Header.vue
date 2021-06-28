<template>
  <div>
    <div
      :style="'background-image:url(http://localhost:9501/' + site_meta.header_img + ');'"
      class='header-tu'>
      <div class='container'>
        <div class='header-yonghu poi-container'>
          <nav class='ghost-topbar'>
            <ul class='menu'>
              <li class='ghost-topbar-item is-icon-text'>
                <router-link :to='"/"' title='测试' target='_self'>
                  <i
                  style='font-size: 1.2em;'
                  class='fas fa-2x poi-icon'></i>
                <span>测试</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Logo -->
        <div class='ghost-head-nav'>
          <router-link class='logo nav-col' to='/' title=''>
            <img class='ghost-logo' :src='"http://localhost:9501/" + site_meta.logo' alt='梦灵神社'>
          </router-link>
        </div>
      </div>
    </div>
    <div class='scroll-header-menu container'><!-- 菜单 -->
      <header id='scroll-header' class='header-menu'>
        <div style='margin:0px auto' class='header white'>
          <div class='ghost-header-logo'>
            <div
              :style="'background-image:url(http://localhost:9501/' + site_meta.header_img + ');'"
              class='header-bg'>
            </div>
          </div>
          <nav id='header-nav' class='navigation clearfix' role='navigation'>

            <div class='header-menu-div'>
              <ul id='menu-%e8%8f%9c%e5%8d%95' class='ghost_menu_ul'>
                <li>
                  <router-link to='/' style='padding: 10px 15px 10px 10px;font-size: 25px;'><i
                  class='catacg-mune-tubiao fas fa-home'> </i></router-link>
                </li>
                <li
                  v-for='(v, k) in category'
                  :key='k'
                  class='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-26519'>
                  <router-link :to='"/category/" + v.value'>
                    <i class='catacg-mune-tubiao fas fa-music'> </i>{{ v.label }}<i class='ghost-menu-posts-count' title='本周发布的'>{{ v.num }}</i>
                  </router-link>
                  <ul v-if='v.children' class='sub-menu'>
                    <li
                      v-for='(v, k) in v.children'
                      :key='k'
                      class='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26520'>
                      <router-link :to='"/category/" + v.value'><i class='catacg-mune-tubiao fas fa-video'>
                      </i>{{ v.label }}<i class='ghost-menu-posts-count' title='本周发布的'>3</i>
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class='ghost-nav-tool__container'>
              <div v-if='isLogin' class="ghost_sign_daily">
                <a class="ghost_sign_daily_btn" title="未签到">
                  <span class="poi-icon fa-map-marker fas fa-fw" aria-hidden="true"></span>
                  <span class="poi-icon__text">未签到</span>
                </a>
              </div>
              <li v-if='isLogin' class="login-actions">
                <i class="ghost-author-posts-count" title="未读消息数量" style="background: red;border-radius: 50%;right: 48px;top: 5px;padding: 5px;"></i>
                <a style="padding:0px;background: hsla(0, 0%, 100%, 0);" class="login-link bind-redirect">
                  <img src="https://img.catacg.cn/pinkacg_upload/img/2020/06/6027905533d2eec5809d812f5cd69d14f04263f0.png" alt="" class="ghost_guajian">
                  <img :src="getImg($store.getters.avatar)" alt="avatar" class="ghost_setting_content_avatar_img" width="100" height="100">
                </a>

                <div class="ghost_user_menu_nav">
                  <div class="ghost_user_menu_item">
                    <div class="ghost_user_menu_item_title">
                      <div class="ghost_user_menu_item_title_icon">
                        <i class="poi-icon fas fa-address-card" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_title_text">个人设置</div>
                    </div>
                    <router-link to="/user/setting" title="我的设置" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-cog" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">我的设置</div>
                    </router-link>
                    <router-link to="/user/draft" title="我的草稿" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-copy" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">我的草稿</div>
                    </router-link>
                    <router-link to="/user/newpost" title="新建文章" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-paint-brush" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">新建文章</div>
                    </router-link>
                  </div>
                  <div class="ghost_user_menu_item">
                    <div class="ghost_user_menu_item_title">
                      <div class="ghost_user_menu_item_title_icon">
                        <i class="poi-icon fa-bell fas" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_title_text">消息管理</div>
                    </div>
                    <i style="top: 64px;right: 82px;" class="ghost-author-posts-count" title="未读通知数量">0</i>
                    <router-link to="/user/notice" title="我的通知" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-bell" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">我的通知</div>
                    </router-link>
                    <router-link to="/user/msg" title="我的消息" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-envelope" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">我的消息</div>
                    </router-link>
                    <router-link to="/user/order" title="我的订单" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-shopping-cart" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">我的订单</div>
                    </router-link>
                  </div>
                  <div class="ghost_user_menu_item">
                    <div class="ghost_user_menu_item_title">
                      <div class="ghost_user_menu_item_title_icon">
                        <i class="poi-icon fas fa-user-circle" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_title_text">个人中心</div>
                    </div>
                    <router-link to="/user/star" title="我的收藏" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-heart" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">我的收藏</div>
                    </router-link>
                    <router-link to="/user/post" title="我的文章" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-file-alt" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">我的文章</div>
                    </router-link>
                    <router-link to="/user/fan" title="我的粉丝" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fa-users fas" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">我的粉丝</div>
                    </router-link>
                  </div>
                  <div class="ghost_user_menu_item">
                    <div class="ghost_user_menu_item_title">
                      <div class="ghost_user_menu_item_title_icon">
                        <i class="poi-icon fas fa-user-circle" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_title_text">我的会员</div>
                    </div>
                    <router-link to="/user/vip" title="我的会员" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-user-circle" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">我的会员</div>
                    </router-link>
                    <router-link to="/user/cash" title="我的余额" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-credit-card" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">我的余额</div>
                    </router-link>
                    <router-link to="/user/credit" title="我的积分" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-gem" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">我的积分</div>
                    </router-link>
                  </div>
                  <div class="ghost_user_menu_item">
                    <div class="ghost_user_menu_item_title">
                      <div class="ghost_user_menu_item_title_icon">
                        <i class="poi-icon fas fa-unlock" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_title_text">管理设置</div>
                    </div>
                    <router-link to="/user/shop" title="商城中心" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-gem" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">商城中心</div>
                    </router-link>
                    <router-link to="/user/lottery" title="积分抽奖" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-gem" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">积分抽奖</div>
                    </router-link>
                    <a @click='Logouts' title="注销账号" class="ghost_user_menu_item_link">
                      <div class="ghost_user_menu_item_link_icon">
                        <i class="poi-icon fas fa-sign-out-alt" aria-hidden="true"></i>
                      </div>
                      <div class="ghost_user_menu_item_link_text">注销账号</div>
                    </a>
                  </div>
                </div>

              </li>
              <li v-else class="login-actions">
                <a
                  @click='$emit("changeLogin", true)'
                  class="user-login login-link bind-redirect"><span>登陆</span></a>
              </li>
              <div class='ghost_header_search_anniu ghost-search-bar_toggle-btn_container'>
                <a
                  @click='$emit("changeSearch", true)'
                  class='poi-icon fa-search fa fa-2x ghost-search-bar_btn'
                  aria-label='搜索'
                  title='搜索'>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import { getCategoryList } from '@/api/category'
import { getSettingList } from '@/api/setting'
import storage from 'store'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { mapActions } from 'vuex'
import { getImg } from '@/utils/util'

export default {
  name: 'Header',
  data () {
    return {
      'isLogin': !!storage.get(ACCESS_TOKEN),
      'category': [],
      'site_meta': {},
      getImg
    }
  },
  created () {
    if (this.isLogin) {
      this.GetInfo()
    }
    this.getSetting()
    getCategoryList({
      'son': 0,
      'son_slug': 1
    }).then((res) => {
      this.category = res.result.data
    })
  },
  metaInfo () {
    return {
      meta: [
        {
          name: '关键词',
          content: this.site_meta.seo_keywords
        },
        {
          name: '描述',
          content: this.site_meta.seo_description
        }
      ]
    }
  },
  methods: {
    ...mapActions(['Logout', 'GetInfo']),
    Logouts () {
      this.Logout().then(() => {
        this.$message.success('退出成功')
      }).catch(() => {
        this.$message.error('退出失败')
      }).finally(() => {
        setTimeout(() => {
          window.location = '/'
        }, 1000)
      })
    },
    async getSetting () {
      const that = this
      await getSettingList({
        'name': 'site_meta'
      }).then(res => {
        if (res.code !== 200) {
          that.$message.error(res.message)
          return []
        }
        this.site_meta = res.result.data[0].value
      })
    }
  }
}
</script>

<style scoped>

</style>
