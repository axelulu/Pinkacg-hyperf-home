<template>
  <div class="col-md-2 float-left">
    <aside class="pinkacg_sidebar_container">
      <nav>
        <ul class="pinkacg_sidebar">
          <li class="pinkacg_sidebar_item">
            <a class="pinkacg_sidebar_item_link" title="个人设置">
              <i class="fa-paint-brush fas fa-fw pinkacg_sidebar_item_link_icon"></i> <span
                class="pinkacg_sidebar_item_link_text">个人设置</span>
            </a>
            <ul class="pinkacg_sidebar_item_sub">
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/setting' class="pinkacg_sidebar_item_sub_item_link" title="我的设置">
                  <i class="fa-paint-brush fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i>
                  <span class="pinkacg_sidebar_item_sub_item_link_text">我的设置</span>
                </router-link>
              </li>
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/draft' class="pinkacg_sidebar_item_sub_item_link" title="我的文章">
                  <i class="fa-copy fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i> <span
                    class="pinkacg_sidebar_item_sub_item_link_text">我的草稿</span>
                </router-link>
              </li>
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/newpost' class="pinkacg_sidebar_item_sub_item_link" title="新建文章">
                  <i class="fa-paint-brush fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i>
                  <span class="pinkacg_sidebar_item_sub_item_link_text">新建文章</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="pinkacg_sidebar_item">
            <a class="pinkacg_sidebar_item_link" title="消息管理">
              <i class="fa-bell fas fa-fw pinkacg_sidebar_item_link_icon"></i> <span
                class="pinkacg_sidebar_item_link_text">消息管理</span>
            </a>
            <ul class="pinkacg_sidebar_item_sub">
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/notice' class="pinkacg_sidebar_item_sub_item_link" title="我的通知">
                  <i class="fa-bell fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i> <span
                    class="pinkacg_sidebar_item_sub_item_link_text">我的通知</span>
                </router-link>
              </li>
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/msg' class="pinkacg_sidebar_item_sub_item_link" title="我的消息">
                  <i class="fa-envelope fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i>
                  <span class="pinkacg_sidebar_item_sub_item_link_text">我的消息</span>
                </router-link>
              </li>
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/order' class="pinkacg_sidebar_item_sub_item_link" title="我的订单">
                  <i
                    class="fa-shopping-cart fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"
                   ></i> <span class="pinkacg_sidebar_item_sub_item_link_text">我的订单</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="pinkacg_sidebar_item">
            <a class="pinkacg_sidebar_item_link" title="个人中心">
              <i class="fa-user-circle fas fa-fw pinkacg_sidebar_item_link_icon"></i> <span
                class="pinkacg_sidebar_item_link_text">个人中心</span>
            </a>
            <ul class="pinkacg_sidebar_item_sub">
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/star' class="pinkacg_sidebar_item_sub_item_link" title="我的收藏">
                  <i class="fa-heart fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i> <span
                    class="pinkacg_sidebar_item_sub_item_link_text">我的收藏</span>
                </router-link>
              </li>
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/post' class="pinkacg_sidebar_item_sub_item_link" title="我的文章">
                  <i class="fa-file-alt fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i>
                  <span class="pinkacg_sidebar_item_sub_item_link_text">我的文章</span>
                </router-link>
              </li>
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/fan' class="pinkacg_sidebar_item_sub_item_link" title="我的粉丝">
                  <i class="fa-users fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i> <span
                    class="pinkacg_sidebar_item_sub_item_link_text">我的粉丝</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="pinkacg_sidebar_item">
            <a class="pinkacg_sidebar_item_link" title="我的会员">
              <i class="fa-user-circle fas fa-fw pinkacg_sidebar_item_link_icon"></i> <span
                class="pinkacg_sidebar_item_link_text">我的会员</span>
            </a>
            <ul class="pinkacg_sidebar_item_sub">
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/vip' class="pinkacg_sidebar_item_sub_item_link" title="我的会员">
                  <i class="fa-user-circle fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i>
                  <span class="pinkacg_sidebar_item_sub_item_link_text">我的会员</span>
                </router-link>
              </li>
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/cash' class="pinkacg_sidebar_item_sub_item_link" title="我的余额">
                  <i class="fa-credit-card fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i>
                  <span class="pinkacg_sidebar_item_sub_item_link_text">我的余额</span>
                </router-link>
              </li>
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/credit' class="pinkacg_sidebar_item_sub_item_link" title="我的积分">
                  <i class="fa-gem fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i> <span
                    class="pinkacg_sidebar_item_sub_item_link_text">我的积分</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="pinkacg_sidebar_item">
            <a class="pinkacg_sidebar_item_link" title="扩展中心">
              <i class="fa-unlock fas fa-fw pinkacg_sidebar_item_link_icon"></i> <span
                class="pinkacg_sidebar_item_link_text">扩展中心</span>
            </a>
            <ul class="pinkacg_sidebar_item_sub">
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/shop' class="pinkacg_sidebar_item_sub_item_link" title="商城中心">
                  <i class="fa-gem fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i> <span
                    class="pinkacg_sidebar_item_sub_item_link_text">商城中心</span>
                </router-link>
              </li>
              <li class="pinkacg_sidebar_item_sub_item">
                <router-link to='/user/lottery' class="pinkacg_sidebar_item_sub_item_link" title="积分抽奖">
                  <i class="fa-gem fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i> <span
                    class="pinkacg_sidebar_item_sub_item_link_text">积分抽奖</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="pinkacg_sidebar_item">
            <a class="pinkacg_sidebar_item_link" title="管理设置">
              <i class="fa-unlock fas fa-fw pinkacg_sidebar_item_link_icon"></i> <span
                class="pinkacg_sidebar_item_link_text">管理设置</span>
            </a>
            <ul class="pinkacg_sidebar_item_sub">
              <li class="pinkacg_sidebar_item_sub_item">
                <a
                  class="pinkacg_sidebar_item_sub_item_link"
                  @click="Logouts"
                  title="注销账号">
                  <i class="fa-sign-out-alt fas fa-fw pinkacg_sidebar_item_sub_item_link_icon"></i>
                  <span class="pinkacg_sidebar_item_sub_item_link_text">注销账号</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Aside',
  methods: {
    ...mapActions(['Logout']),
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
    }
  }
}
</script>

<style scoped>

</style>
