<template>
  <div>
    <div
      :style="'background-image:url(http://localhost:9501/' + site_setting.header_img + ');'"
      class='header-tu'>
      <div class='container'>
        <div class='header-yonghu poi-container'>
          <nav class='ghost-topbar'>
            <ul class='menu'>
              <li class='ghost-topbar-item is-icon-text'>
                <a href='' title='测试' target='_self'>
                  <i
                  style='font-size: 1.2em;'
                  class='fas fa-2x poi-icon'></i>
                <span>测试</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Logo -->
        <div class='ghost-head-nav'>
          <router-link class='logo nav-col' to='/' title=''>
            <img class='ghost-logo' :src='"http://localhost:9501/" + site_setting.logo' alt='梦灵神社'>
          </router-link>
        </div>
      </div>
    </div>
    <div class='scroll-header-menu container'><!-- 菜单 -->
      <header id='scroll-header' class='header-menu'>
        <div style='margin:0px auto' class='header white'>
          <div class='ghost-header-logo'>
            <div
              :style="'background-image:url(http://localhost:9501/' + site_setting.header_img + ');'"
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
              <div class='ghost_sign_daily'>
                <a class='ghost_sign_daily_btn' title='未签到'>
                  <span class='poi-icon fa-map-marker fas fa-fw'></span>
                  <span class='poi-icon__text'>未签到</span>
                </a>
              </div>
              <li class='login-actions'>
                <i
                  class='ghost-author-posts-count'
                  title='未读消息数量'
                  style='background: red;border-radius: 50%;right: 48px;top: 5px;padding: 5px;'></i>
                <a style='padding:0px;background: hsla(0, 0%, 100%, 0);' class='login-link bind-redirect'>
                  <img
                    src='https://img.catacg.cn/pinkacg_upload/img/2020/06/6027905533d2eec5809d812f5cd69d14f04263f0.png'
                    alt=''
                    class='ghost_guajian'>
                  <img
                    src='https://mkw2023.com/uploads/UserAvatar/147/2021/04/12/8472e4ef0f923923dc94b79ad9e6d996.png'
                    alt='avatar'
                    class='ghost_setting_content_avatar_img'
                    width='100'
                    height='100'>
                </a>

                <div class='ghost_user_menu_nav'>
                  <div class='ghost_user_menu_item'>
                    <div class='ghost_user_menu_item_title'>
                      <div class='ghost_user_menu_item_title_icon'>
                        <i class='poi-icon fas fa-address-card'></i>
                      </div>
                      <div class='ghost_user_menu_item_title_text'>个人设置</div>
                    </div>
                    <a href='https://mkw2023.com/?c=User&amp;m=setting' title='我的设置' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-cog'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>我的设置</div>
                    </a>
                    <a href='https://mkw2023.com/?c=User&amp;m=drafts' title='我的文章' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-copy'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>我的草稿</div>
                    </a>
                    <a href='https://mkw2023.com/?c=User&amp;m=newpost' title='新建文章' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-paint-brush'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>新建文章</div>
                    </a>
                  </div>
                  <div class='ghost_user_menu_item'>
                    <div class='ghost_user_menu_item_title'>
                      <div class='ghost_user_menu_item_title_icon'>
                        <i class='poi-icon fa-bell fas'></i>
                      </div>
                      <div class='ghost_user_menu_item_title_text'>消息管理</div>
                    </div>
                    <i style='top: 64px;right: 82px;' class='ghost-author-posts-count' title='未读通知数量'>0</i>
                    <a href='https://mkw2023.com/?c=User&amp;m=notice' title='我的通知' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-bell'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>我的通知</div>
                    </a>
                    <a href='https://mkw2023.com/?c=User&amp;m=msg' title='我的消息' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-envelope'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>我的消息</div>
                    </a>
                    <a href='https://mkw2023.com/?c=User&amp;m=orders' title='我的订单' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-shopping-cart'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>我的订单</div>
                    </a>
                  </div>
                  <div class='ghost_user_menu_item'>
                    <div class='ghost_user_menu_item_title'>
                      <div class='ghost_user_menu_item_title_icon'>
                        <i class='poi-icon fas fa-user-circle'></i>
                      </div>
                      <div class='ghost_user_menu_item_title_text'>个人中心</div>
                    </div>
                    <a href='https://mkw2023.com/?c=User&amp;m=stars' title='我的收藏' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-heart'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>我的收藏</div>
                    </a>
                    <a href='https://mkw2023.com/?c=User&amp;m=posts' title='我的文章' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-file-alt'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>我的文章</div>
                    </a>
                    <a href='https://mkw2023.com/?c=User&amp;m=fans' title='我的粉丝' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fa-users fas'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>我的粉丝</div>
                    </a>
                  </div>
                  <div class='ghost_user_menu_item'>
                    <div class='ghost_user_menu_item_title'>
                      <div class='ghost_user_menu_item_title_icon'>
                        <i class='poi-icon fas fa-user-circle'></i>
                      </div>
                      <div class='ghost_user_menu_item_title_text'>我的会员</div>
                    </div>
                    <a href='https://mkw2023.com/?c=User&amp;m=vip' title='我的会员' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-user-circle'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>我的会员</div>
                    </a>
                    <a href='https://mkw2023.com/?c=User&amp;m=cash' title='我的余额' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-credit-card'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>我的余额</div>
                    </a>
                    <a href='https://mkw2023.com/?c=User&amp;m=credits' title='我的积分' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-gem'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>我的积分</div>
                    </a>
                  </div>
                  <div class='ghost_user_menu_item'>
                    <div class='ghost_user_menu_item_title'>
                      <div class='ghost_user_menu_item_title_icon'>
                        <i class='poi-icon fas fa-unlock'></i>
                      </div>
                      <div class='ghost_user_menu_item_title_text'>管理设置</div>
                    </div>
                    <a href='https://mkw2023.com/?c=User&amp;m=shop' title='商城中心' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-gem'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>商城中心</div>
                    </a>
                    <a href='https://mkw2023.com/?c=User&amp;m=price' title='积分抽奖' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-gem'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>积分抽奖</div>
                    </a>
                    <a href='https://mkw2023.com/?p=admin' title='后台管理' class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-gem'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>后台管理</div>
                    </a>
                    <a
                      href='https://mkw2023.com/index.php?c=User&amp;a=Logout'
                      title='注销账号'
                      class='ghost_user_menu_item_link'>
                      <div class='ghost_user_menu_item_link_icon'>
                        <i class='poi-icon fas fa-sign-out-alt'></i>
                      </div>
                      <div class='ghost_user_menu_item_link_text'>注销账号</div>
                    </a>
                  </div>
                </div>

              </li>
              <div class='ghost_header_search_anniu ghost-search-bar_toggle-btn_container'>
                <a
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

export default {
  name: 'Header',
  data () {
    return {
      'category': [],
      'site_setting': {}
    }
  },
  created () {
    this.getSetting()
    getCategoryList({
      'son': 0,
      'son_slug': 1
    }).then((res) => {
      this.category = res.result.data
      console.log(this.category)
    })
  },
  methods: {
    async getSetting () {
      const that = this
      await getSettingList({
        'site': 'site_setting'
      }).then(res => {
        if (res.code !== 200) {
          that.$message.error(res.message)
          return []
        }
        this.site_setting = res.result.data[0].value
      })
    }
  }
}
</script>

<style scoped>

</style>
