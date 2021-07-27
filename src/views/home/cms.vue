<template>
  <section :class="v.style === 1 ? 'style-1' : v.style === 2 ? 'style-2' : 'style-1 container'" class="pinkacg_nav cat-col cat-col-full">
    <div class="cat-container clearfix">
      <div class="pinkacg-homebox_header pinkacg-panel_header poi-panel_header">
        <h4 class="pinkacg-homebox_title pinkacg-panel_title poi-panel_title">
          <router-link
            :to="'/category/' + v.menu"
            class="pinkacg-homebox_title_link">
            <span class="pinkacg-homebox_title_icon_mask" style="color: #61b4ca"> <i
              class="fas fa-music poi-icon pinkacg-homebox_title_icon"
              aria-hidden="true"></i> </span> <span
                style="color:#000"
                class="pinkacg-homebox_title_text">{{ v.name }}</span>
          </router-link>
        </h4>
        <span style="-webkit-box-flex: 1;-ms-flex-positive: 1;flex-grow: 1;"></span>
        <a @click="orderBy='updated_at'" :class="orderBy=='updated_at' ? 'active ' : ''" class="home_title_menu_item">最新</a>
        <a @click="orderBy='comment_count'" :class="orderBy=='comment_count' ? 'active ' : ''" class="home_title_menu_item">评论</a>
        <a @click="orderBy='views'" :class="orderBy=='views' ? 'active ' : ''" class="home_title_menu_item">浏览</a>
      </div>
      <a-spin :spinning="loading">
        <div id="pinkacg_box_1" style="height: 480px" class="cms-cat cms-cat-s7">
          <div v-for="(v, k) in categoryPost" :key="k" class="col-md-2 box-1 float-left">
            <article id="post-78060" class="post type-post status-publish format-standard">
              <div class="entry-thumb hover-scale">
                <router-link :to="'/' + v.id + '.html'">
                  <img
                    width="500"
                    height="340"
                    :src="getImg(v.header_img)"
                    class="lazy show"
                    style="display: block;"/>
                </router-link>
                <ul class="post-categories">
                  <li v-for="(v, k) in v.menuMeta" :key="k"><router-link :to="'/category/' + v.value" rel="category tag">{{ v.label }}</router-link></li>
                </ul>
              </div>
              <router-link :to="'/author/' + v.authorMeta.id" class="post_box_avatar_link" :title="v.authorMeta.id">
                <img
                  class="post_box_avatar_img"
                  :title="v.authorMeta.name"
                  :src="getImg(v.authorMeta.avatar)"
                  width="50"
                  height="50"
                  :alt="v.authorMeta.name">
                <span class="post_box_avatar_author_name">{{ v.authorMeta.name }}</span>
              </router-link>
              <div class="entry-detail">
                <header class="entry-header">
                  <h2 class="entry-title h4">
                    <router-link :to="'/' + v.id + '.html'" rel="bookmark">{{ v.title }}</router-link>
                  </h2>
                  <div class="entry-meta entry-meta-1">
                    <span class="entry-date text-muted">
                      <i class="fas fa-bell"></i>
                      <time
                        class="entry-date"
                        :datetime="v.updated_at"
                        :title="v.updated_at">{{ diaplayTime(v.updated_at) }}</time>
                    </span>
                    <span class="comments-link text-muted pull-right">
                      <i class="far fa-comment"></i>
                      <router-link :to="'/' + v.id + '.html'">{{ v.comment_count }}</router-link>
                    </span>
                    <span class="views-count text-muted pull-right"><i class="fas fa-eye"></i>{{ v.view }}</span>
                  </div>
                </header>
              </div>
            </article>
          </div>
        </div>
      </a-spin>
    </div>
    <div class="pinkacg_home_more_post">
      <router-link class="more-post" :to="'/category/' + v.menu">更多文章 <i class="tico tico-angle-right"></i></router-link>
    </div>
  </section>
</template>

<script>
import { getPostList } from '@/api/post'
import { getImg, diaplayTime } from '@/utils/util'

export default {
  name: 'Cms',
  props: ['v'],
  data () {
    return {
      'categoryPost': {},
      'orderBy': 'updated_at',
      'loading': false,
      getImg,
      diaplayTime
    }
  },
  created () {
    this.getPosts()
  },
  watch: {
    orderBy () {
      this.loading = true
      getPostList({
        'menu': this.v.menu,
        'orderBy': this.orderBy
      }).then((res) => {
        this.categoryPost = res.result.data
        this.loading = false
      })
    }
  },
  methods: {
    async getPosts (menu) {
      this.loading = true
      await getPostList({
        'menu': this.v.menu,
        'orderBy': this.orderBy
      }).then((res) => {
        this.categoryPost = res.result.data
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
