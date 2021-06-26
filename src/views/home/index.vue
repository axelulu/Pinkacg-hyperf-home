<template>
  <div class='main'>
    <!-- 幻灯片 -->
    <section id='mod-show' class='content-section clearfix full'>
      <div id='popular'>
        <div id='ghost-popular-container' class='ghost-popular-container'>
          <div class='ghost-popular'>
            <router-link
              v-for='(v, k) in popularPost'
              :key='k'
              class='ghost-slideshow__item__link ghost-popular-link'
              :to='"/" + v.id + ".html"'
              style='background-color: rgba(225,225,225,.3);'>
              <img
                :src='getImg(v.header_img)'
                :alt='v.name'
                class='lazy ghost-popular-img show'
                style='background-color: rgb(245, 217, 215); display: inline;'>
              <div class='ghost-popular-mask'></div>
              <h3 class='ghost-popular-title'>
                <span class='ghost-popular-text'>{{ v.name }}</span>
              </h3>
            </router-link>
          </div>
        </div>
      </div>
    </section>    <!-- 公告 -->
    <div class='container'>
      <div class='ghost_site_notice'>
      </div>
    </div>
    <div class='home'>
      <!--广告-->
      <div class='container'>
      </div>
      <!-- box -->
      <div v-for='(v, k) in cms' :key='k' :class='(v.style === 1 || v.style === 2) ? "container" : "headbox3"'>
        <div :class='v.style === 3 ? "headbox3_bg" : ""'>
          <cms :v='v'></cms>
        </div>
      </div>
    </div>
    <!--侧板工具-->
    <div class='ghost_slide_wrap'>
      <div id='ghost_slide' style='top: 24px;'>
        <div class='ghost_tool'>
          <a class='ghost_control' v-for='(v, k) in cms' :key='k'>
            <span class='poi-icon fas fa-music' aria-hidden='true'></span>
            <span class='ghost_control_text'>{{ v.name }}</span>
          </a>
          <div class='blue' style='top: 52px;'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSettingList } from '@/api/setting'
import cms from './cms'
import { getPostList } from '@/api/post'
import { getImg } from '@/utils/util'

export default {
  name: 'Index',
  components: {
    cms
  },
  metaInfo () {
    return {
      title: '网站首页'
    }
  },
  data () {
    return {
      'cms': {},
      'popularPost': {},
      getImg
    }
  },
  created () {
    this.getSetting()
    getPostList().then((res) => {
      this.popularPost = res.result.data
    })
  },
  methods: {
    async getSetting () {
      const that = this
      await getSettingList({
        'name': 'site_cms'
      }).then(res => {
        console.log(res)
        if (res.code !== 200) {
          that.$message.error(res.message)
          return []
        }
        this.cms = res.result.data[0].value
      })
    }
  }
}
</script>

<style scoped>

</style>
