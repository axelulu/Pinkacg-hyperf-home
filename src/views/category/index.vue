<template>
  <div>
    <div class="main cat container">
      <!-- 面包屑 -->
      <div style="margin: 0px auto;padding: 5px 5px 0px 5px;" class="header white crumb-container">
        <nav class="poi-crumb">
          <router-link
            to="/"
            class="poi-crumb_item poi-crumb_link poi-crumb_item_home"
            title="返回到首页"
            aria-label="返回到首页"> <i
              class="fa-home fas poi-icon poi-crumb_item_icon poi-crumb_item_home_icon"
              aria-hidden="true"></i>
          </router-link>
          <span class="poi-crumb_split"><i class="fa-angle-right fas poi-icon" aria-hidden="true"></i> </span>
          <router-link class="poi-crumb_item poi-crumb_link" :to="'/category/' + category">{{ category }}</router-link>
          <span class="poi-crumb_split"><i class="fa-angle-right fas poi-icon" aria-hidden="true"></i> </span>
          <span class="poi-crumb_item">目录浏览</span>
        </nav>
      </div>
      <!-- 排序 -->
      <div style="margin: 0px auto;margin-top: 0px;padding: 0px 5px 5px 5px;" class="header white crumb-container">
        <nav class="paixu poi-crumb">
          <a @click="orderBy='id'" :class="orderBy=='id' ? 'is-active ' : ''" class="pinkacg-paixu">按最新</a>
          <a @click="orderBy='comment_count'" :class="orderBy=='comment_count' ? 'is-active ' : ''" class="pinkacg-paixu">按评论</a>
          <a @click="orderBy='created_at'" :class="orderBy=='created_at' ? 'is-active ' : ''" class="pinkacg-paixu">按日期</a>
          <a @click="orderBy='views'" :class="orderBy=='views' ? 'is-active ' : ''" class="pinkacg-paixu">按查看</a>
          <a @click="orderBy='title'" :class="orderBy=='title' ? 'is-active ' : ''" class="pinkacg-paixu">随机</a>
        </nav>

      </div>
      <!-- 分类文章 -->
      <div class="cat_ajax_post">
        <section class="cat-2 cat-col cat-col-full">
          <div class="cat-container clearfix">
            <div class="pinkacg_box_1 cms-cat cms-cat-s7">
              <a-spin :spinning="loading">
                <div class="single_posts">
                  <a-empty style="padding: 180px;" v-if='posts.length === 0' />
                  <div v-for="(v, k) in posts" :key="k" class="col-md-2 box-2 float-left">
                    <article class="post type-post status-publish format-standard">
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
              <div class="pinkacg_other_more_post">
                <a class="more-post ajax-morepost">更多文章 <i
                  class="tico tico-angle-right"></i></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { getPostList } from '@/api/post'
import { getImg, diaplayTime } from '@/utils/util'
import { getCategoryList } from '@/api/category'

export default {
  name: 'Index',
  data () {
    return {
      category: this.$route.params.slug,
      categoryMeta: {},
      orderBy: 'id',
      posts: [],
      loading: false,
      getImg,
      diaplayTime
    }
  },
  metaInfo () {
    return {
      title: this.categoryMeta.label + ' - 分类页面'
    }
  },
  watch: {
    orderBy () {
      this.loading = true
      getPostList({
        'menu': this.category,
        'orderBy': this.orderBy
      }).then((res) => {
        this.posts = res.result.data
        this.loading = false
      })
    }
  },
  created () {
    this.loading = true
    getCategoryList({
      'value': this.category
    }).then((res) => {
      if (res.code !== 200) {
        this.$message.error(res.message)
        return []
      }
      this.categoryMeta = (res.result.data)[0]
    })
    getPostList({
      'menu': this.category,
      'orderBy': this.orderBy
    }).then((res) => {
      if (res.code !== 200) {
        this.$message.error(res.message)
        return []
      }
      this.posts = res.result.data
      this.loading = false
    })
  }
}
</script>

<style scoped>

</style>
