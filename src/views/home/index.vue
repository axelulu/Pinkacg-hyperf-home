<template>
  <div class="main" ref='viewBox'>
    <!-- 幻灯片 -->
    <section class="content-section clearfix full">
      <a-spin :spinning="loading">
        <div class="pinkacg-popular-container">
          <div class="pinkacg-popular">
            <router-link
              v-for="(v, k) in popularPost"
              :key="k"
              class="pinkacg-slideshow_item_link pinkacg-popular-link"
              :to="'/' + v.id + '.html'"
              style="background-color: rgba(225,225,225,.3);">
              <img
                :src="getImg(v.header_img)"
                :alt="v.name"
                class="lazy pinkacg-popular-img show"
                style="background-color: rgb(245, 217, 215); display: inline;">
              <div class="pinkacg-popular-mask"></div>
              <h3 class="pinkacg-popular-title">
                <span class="pinkacg-popular-text">{{ v.name }}</span>
              </h3>
            </router-link>
          </div>
        </div>
      </a-spin>
    </section>    <!-- 公告 -->
    <div class="container">
      <div class="pinkacg_site_notice">
      </div>
    </div>
    <div class="home">
      <!--广告-->
      <div class="container">
      </div>
      <!-- box -->
      <div v-for="(v, k) in cms" :key="k" :class="(v.style === 1 || v.style === 2) ? 'alideScroll_' + k + ' container' : 'alideScroll_' + k + ' headbox3'">
        <div :class="v.style === 3 ? 'headbox3_bg' : ''">
          <cms :v="v"></cms>
        </div>
      </div>
    </div>
    <!--侧板工具-->
    <div class="pinkacg_slide_wrap">
      <div class="pinkacg_slide" style="top: 24px;">
        <div class="pinkacg_tool">
          <a @click="showAlide(k)" :class="showAlideBtn === k ? 'on' : ''" class="pinkacg_control" v-for="(v, k) in cms" :key="k">
            <span class="poi-icon" :class='v.icon' aria-hidden="true"></span>
            <span :class="showAlideBtn === k ? 'show' : ''" class="pinkacg_control_text">{{ v.name }}</span>
          </a>
          <div class="blue" style="top: 52px;"></div>
        </div>
        <router-link to='/user/answer' style='background: #ff6699;border-radius: 20px;margin-top: 20px;color: #fff;' class="pinkacg_control">
          <span class="pinkacg_control_text show">答题得会员</span>
        </router-link>
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
      title: this.meta.seo_title + ' - ' + this.meta.seo_description
    }
  },
  data () {
    return {
      'showAlideBtn': null,
      'loading': false,
      'cms': {},
      'meta': {},
      'popularPost': {},
      getImg
    }
  },
  created () {
    this.getSetting()
    this.getSiteMetaSetting()
    this.loading = true
    getPostList({
      'pageSize': 20,
      'orderBy': 'updated_at'
    }).then((res) => {
      if (res.code !== 200) {
        this.$message.error(res.message)
        return []
      }
      this.popularPost = res.result.data
      this.loading = false
    })
  },
  methods: {
    showAlide (k) {
      this.showAlideBtn = k
      this.navgatorIndex = k

      this.$el.querySelector(`.alideScroll_${k}`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      this.listBoxState = false

      let timeId
      clearTimeout(timeId)
      timeId = setTimeout(() => {
        this.listBoxState = true
      }, 200)
    },
    async getSetting () {
      const that = this
      await getSettingList({
        'name': 'site_cms'
      }).then(res => {
        if (res.code !== 200) {
          that.$message.error(res.message)
          return []
        }
        this.cms = res.result.data[0].value
      })
    },
    async getSiteMetaSetting () {
      const that = this
      await getSettingList({
        'name': 'site_meta'
      }).then(res => {
        if (res.code !== 200) {
          that.$message.error(res.message)
          return []
        }
        this.meta = res.result.data[0].value
      })
    },
    checkDivScroolTop () {
      this.cms.forEach((item, index) => {
        const Height = this.$el.querySelector('.alideScroll_' + index).getBoundingClientRect().top
        if (Height > 0 && Height < 50) {
          this.showAlideBtn = index
        }
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.checkDivScroolTop)
  }
}
</script>

<style scoped>
.headbox3 {
  background: url(https://fontawesome.catacg.cn/post_img/1/2020/07/1-dee60980702ee0fade4a63218660ecd7.jpg) no-repeat center;
}
</style>
