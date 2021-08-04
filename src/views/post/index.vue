<template>
  <div class="main single container">
    <div class="clearfix">
      <div class="article float-left col-lg-9">
        <article>
          <h1 class="pinkacg_single_title">{{ postMeta.title }}</h1>
          <header class="pinkacg_single_header">
            <span class="single_header_item pinkacg_single_category" title="分类">
              <router-link v-if='postMeta.menuMeta' v-for='(v, k) in postMeta.menuMeta' :key='k' :to="'/category/' + v.value">
                <i class="fa-folder-open fas fa-fw poi-icon" aria-hidden="true"></i>
                <span class="pinkacg_icon_text">{{ v.label }}</span>
              </router-link>
            </span>
            <time :datetime="postMeta.updated_at" class="single_header_item pinkacg_single_date" :title="postMeta.updated_at">
              <i class="fa-clock fas fa-fw poi-icon" aria-hidden="true"></i>
              <span class="pinkacg_icon_text">{{ diaplayTime(postMeta.updated_at) }}</span>
            </time>
            <router-link v-if='postMeta.authorMeta' :to="'/author/' + postMeta.authorMeta.id" :title="postMeta.authorMeta.name" class="single_header_item pinkacg_single_author">
              <i class="fa-user-circle fas fa-fw poi-icon" aria-hidden="true"></i> <span class="pinkacg_icon_text">{{ postMeta.authorMeta.name }}</span>
            </router-link>
            <span class="single_header_item pinkacg_single_view" title="查看数">
              <a>
                <i class="fa-play-circle fas fa-fw poi-icon" aria-hidden="true"></i>
                <span class="pinkacg_single_view_num">{{ postMeta.views }}</span>
              </a>
            </span>
            <span class="single_header_item pinkacg_single_comment_count" title="评论数">
              <a>
                <i class="fa-comments fas fa-fw poi-icon" aria-hidden="true"></i>
                <span class="pinkacg_single_comment_count_num">{{ postMeta.comment_count }}</span>
              </a>
            </span>
            <span class="single_header_item " title="编辑文章">
              <a href=""><i class="poi-icon fas fa-paint-brush fa-fw" aria-hidden="true"></i>
                <span class="">编辑文章</span></a>
            </span>
          </header>
          <!--文章内容-->
          <div class="single_post_body" v-html='postMeta.content'></div>

          <!-- 下载链接 -->
          <div v-if='postMeta.download_status' class="pinkacg_download_content">
            <router-view ref='download'></router-view>
            <fieldset v-for='(v, k) in postMeta.download' :key='k' class="pinkacg_download_content_content">
              <div v-if='v.code === 200'>
                <legend class="pinkacg_download_content_name">
                  <span class="pinkacg_download_label_success">磁力链接</span>
                </legend>
                <div class="pinkacg_download_content_item_download_pwd">
                  <div class="pinkacg_download_">
                    <div class="col-lg-2 float-left">
                      <div class="pinkacg_download_content_item_label">
                        <span class="poi-icon fa-unlock-alt fas fa-fw" aria-hidden="true"></span>
                        <span class="pinkacg_icon_text">下载名称</span></div>
                    </div>
                    <div style="padding-right:0px" class="col-lg-10 float-left">
                      <div class="poi-btn-group">
                        <a class="pinkacg_root_key" style="padding: 6px;margin-bottom: 10px;">{{ v.name }}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pinkacg_download_content_item_download_pwd">
                  <div class="pinkacg_download_">
                    <div class="col-lg-2 float-left">
                      <div class="pinkacg_download_content_item_label">
                        <span class="poi-icon fa-unlock-alt fas fa-fw" aria-hidden="true"></span>
                        <span class="pinkacg_icon_text">提取密码</span></div>
                    </div>
                    <div style="padding-right:0px" class="col-lg-10 float-left">
                      <div class="poi-btn-group">
                        <input class="pinkacg_input pinkacg_download_content_item_input" type="text" readonly="" :value="v.pwd">
                        <a class="pinkacg_btn pinkacg_btn_success pinkacg_btn_copy">
                          <span class="poi-icon fa-copy fas fa-fw" aria-hidden="true"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pinkacg_download_content_item_extract_pwd">
                  <div class="pinkacg_download_">
                    <div class="col-lg-2 float-left">
                      <div class="pinkacg_download_content_item_label">
                        <span class="poi-icon fa-key fas fa-fw" aria-hidden="true"></span>
                        <span class="pinkacg_icon_text">解压密码</span></div>
                    </div>
                    <div style="padding-right:0px" class="col-lg-10 float-left">
                      <div class="poi-btn-group">
                        <input class="pinkacg_input pinkacg_download_content_item_input" type="text" readonly="" :value="v.pwd2">
                        <a class="pinkacg_btn pinkacg_btn_success pinkacg_btn_copy">
                          <span class="poi-icon fa-copy fas fa-fw" aria-hidden="true"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pinkacg_download_content_btn">
                  <div class="poi-btn-group">
                    <a :href="v.link" class="pinkacg_btn pinkacg_btn_success download" rel="noreferrer">
                      <span class="poi-icon fa-cloud-download-alt fas fa-fw" aria-hidden="true"></span>
                      <span class="pinkacg_icon_text">下载（如果点击无反应，可能是磁力链接）</span></a>
                  </div>
                </div>
              </div>

              <div v-else-if='postMeta.download.code === 400'>
                <legend class="pinkacg_download_content_name">
                  <span class="pinkacg_download_label_success">请登录</span>
                </legend>
                <div class="pinkacg_download_content_btn">
                  <div class="poi-btn-group">
                    <a @click='$emit("changeLogin", true)' class="pinkacg_btn pinkacg_btn_success download buy_download_link">
                      <span class="poi-icon fa-cloud-download-alt fas fa-fw" aria-hidden="true"></span>
                      <span class="pinkacg_icon_text">登录购买</span></a>
                  </div>
                </div>
              </div>

              <div v-else-if='v.code === 401'>
                <legend class="pinkacg_download_content_name">
                  <span class="pinkacg_download_label_success">请购买</span>
                </legend>
                <div class="pinkacg_root">
                  <span aria-hidden="true" class="poi-icon fa-unlock-alt fas fa-fw"></span>
                  文章：<a class="pinkacg_root_key">{{ v.name }}</a>
                  <span class="pinkacg_xinxi_text">下载所需积分：</span>
                  <a class="pinkacg_root_key">{{ v.credit }}</a>
                </div>
                <div class="pinkacg_download_content_btn">
                  <div class="poi-btn-group">
                    <a @click='purchase(k, v)' class="pinkacg_btn pinkacg_btn_success download buy_download_link">
                      <span class="poi-icon fa-cloud-download-alt fas fa-fw" aria-hidden="true"></span>
                      <span class="pinkacg_icon_text">{{ v.credit }}积分购买</span></a>
                  </div>
                </div>
              </div>
            </fieldset>
            <div>热心网友的补链:</div>
          </div>

          <!-- 标签 -->
          <footer class="single_post_footer">
            <div class="single_post_footer_tags">
              <router-link v-for='(v, k) in postMeta.tag' :key='k' :to="'/tag/' + v" rel="tag">
                {{ v }}</router-link><br>
            </div>
            <div class="single_post_footer_box">
              <div class="single_post_footer_share">
                <a :href="'http://service.weibo.com/share/share.php?url=https://pinkacg.com/78561.html&amp;coun=1&amp;pic=&amp;title=' + postMeta.title" class="inn-singular_post_share_item poi-tooltip poi-tooltip_top" rel="nofollow" title="分享到微博" aria-label="分享到微博">
                  <i class="fa-weibo fab fa-fw poi-icon" aria-hidden="true"></i>
                </a>
                <a href="http://connect.qq.com/widget/shareqq/index.html?url=https://pinkacg.com/78561.html&amp;desc=来<粉萌次元>看看这篇文章吧，有惊喜哦！&amp;title=赛博朋克2077中文破解版下载&amp;summary=赛博朋克2077中文破解版下载&amp;pics=&amp;site=粉萌次元" class="inn-singular_post_share_item poi-tooltip poi-tooltip_top" rel="nofollow" title="分享到QQ空间" aria-label="分享到QQ空间">
                  <i class="fa-qq fab fa-fw poi-icon" aria-hidden="true"></i>
                </a>
                <a href="" class="inn-singular_post_share_item poi-tooltip poi-tooltip_top" rel="nofollow" title="分享到微信" aria-label="分享到微信">
                  <i class="fa-weixin fab fa-fw poi-icon" aria-hidden="true"></i>
                </a>
                <a href="http://tieba.baidu.com/f/commit/share/openShareApi?url=https://pinkacg.com/78561.html&amp;title=赛博朋克2077中文破解版下载&amp;comment=&amp;pic=&amp;red_tag=y2016799123" class="inn-singular_post_share_item poi-tooltip poi-tooltip_top" rel="nofollow" title="分享到贴吧" aria-label="分享到贴吧">
                  <i class="fa-bold fas fa-fw poi-icon" aria-hidden="true"></i>
                </a>
              </div>
              <div class="single_post_footer_report">
                <div class="pinkacg_report single_post_footer_container">
                  <a class="single_post_footer_btn"><span class="poi-icon fa-paperclip fas fa-fw" aria-hidden="true"></span> <span class="pinkacg_icon_text">链接失效</span></a>
                </div>
              </div>
              <div class="single_post_footer_report">
                <div class="pinkacg_add_link single_post_footer_container">
                  <a class="single_post_footer_btn"><span class="poi-icon fa-link fas fa-fw" aria-hidden="true"></span> <span class="pinkacg_icon_text">帮他补链</span></a>
                </div>
              </div>
              <div class="single_post_footer_report">
                <div class="download_img single_post_footer_container">
                  <a class="single_post_footer_btn"><span class="poi-icon fa-images fas fa-fw" aria-hidden="true"></span> <span class="pinkacg_icon_text">图片下载</span></a>
                </div>
              </div>
              <div class="single_post_footer_report">
                <div class="post_stars single_post_footer_container">
                  <a class="single_post_footer_btn"><span class="poi-icon fa-star far fa-fw" aria-hidden="true"></span> <span class="pinkacg_icon_text">收藏文章</span></a>
                </div>
              </div>
            </div>
            <ul class="single_post_footer_source">
              <li> 本作品是由 <router-link to="/">粉萌次元</router-link> 会员 <router-link v-if='postMeta.authorMeta' :to="'/author/' + postMeta.authorMeta.id">小宅酱</router-link> 的投递作品。 </li> <li>转载请务请署名并注明出处。</li>
              <li>禁止再次修改后发布；任何商业用途均须联系作者。如未经授权用作他处，作者将保留追究侵权者法律责任的权利。</li>
            </ul>
          </footer>
        </article>

        <!-- 底部文章模块 -->
        <section>
          <div class="cat-container clearfix">
            <div class="pinkacg_box_1 cms-cat cms-cat-s7">
              <morePost v-if='postMeta.menuMeta' :k='postMeta.menuMeta.value'></morePost>
            </div>
          </div>
        </section>

        <!-- 评论 -->
        <aside>
          <div class="pinkacg_comment">
            <div class="join_comments pinkacg_comment_faker">
              <img class="pinkacg_comment_faker_avatar" src="https://mkw2023.com/tp/8707097.png" alt="avatar" width="18" height="18">
              <span class="pinkacg_comment_text">点击参与讨论！</span></div>
            <h2 class="pinkacg_comment_title">
              <span class="poi-icon fa-comments fas fa-fw" aria-hidden="true"></span>
              <span class="pinkacg_icon_text">评论</span></h2>
            <div class="pinkacg_comment_container">

            </div>
          </div>
        </aside>
      </div>

        <!--weight-->
      <div class="weight float-right col-lg-3">
        <aside class="pinkacg_widget">
          <div class="pinkacg_widget_content">
            <div class="widget_pinkacg_author">

              <h3 class="pinkacg_hot_post_title">
                <span>
                  <i class="fas fa-user-circle"></i>
                  <span>用户工具</span></span>
              </h3>
              <div v-if='postMeta.authorMeta' :style="'background-image:url(' + getImg(postMeta.authorMeta.background) + ');'" class="pinkacg_author_header pinkacg_my_flowers pinkacg_author_widget">
                <div v-if='postMeta.authorMeta' class="pinkacg_author_meta">
                  <div class="pinkacg_author_widget_container">
                    <div class="pinkacg_author_widget_avatar">
                      <router-link v-if='postMeta.authorMeta' class="pinkacg_author_widget_avatar_link" :to="'/author/' + postMeta.authorMeta.id">
                        <img class="pinkacg_author_widget_avatar_img" width="150" height="150" :src="getImg(postMeta.authorMeta.avatar)" alt="站长菌">
                      </router-link>
                    </div>
                    <div class="pinkacg_author_widget_info">
                      <div class="pinkacg_author_widget_name_container">
                        <router-link v-if='postMeta.authorMeta' :to="'/author/' + postMeta.authorMeta.id" class="pinkacg_author_widget_name_link">{{ postMeta.authorMeta.name }}</router-link></div>
                      <div class="pinkacg_author_widget_group_container">
                        <div class="pinkacg_author_widget_group_uid" title="UID"></div>
                        <div class="pinkacg_author_widget_group_role" style="background-color: rgb(165, 132, 168);">{{ postMeta.authorMeta.desc }}</div></div>
                      <div class="pinkacg_author_widget_description">{{ postMeta.authorMeta.desc }}</div></div>
                    <div class="pinkacg_author_widget_point">
                      <span class="poi-icon fa-paw fas fa-fw" aria-hidden="true"></span>
                      <span class="pinkacg_author_widget_point_text">{{ postMeta.authorMeta.credit }}</span></div>
                    <div class="pinkacg_author_widget_tools">
                      <a class="pinkacg-btn pinkacg-btn_success pinkacg_author_btn my_flower">
                        <div class="del_flowers">
                          <span class="poi-icon fa-check fas fa-fw" aria-hidden="true"></span>
                          <span class="pinkacg_icon_text">已关注</span>
                        </div>
                      </a>
                      <a class="pinkacg-btn pinkacg-btn_default pinkacg_author_btn send_msg">
                        <span class="poi-icon fa-envelope fas fa-fw" aria-hidden="true"></span>
                        <span class="pinkacg_icon_text">站内信</span></a>
                    </div>
                    <div class="pinkacg_author_widget_author_profile_count">
                      <a class="pinkacg_author_widget_count_item" href="https://pinkacg.com/author/1?type=flowers">
                        <div class="pinkacg_author_widget_item_number">1</div>
                        <div class="pinkacg_author_widget_item_name">关注</div></a>
                      <a class="pinkacg_author_widget_count_item" href="https://pinkacg.com/author/1?type=fans">
                        <div class="pinkacg_author_widget_item_number">216</div>
                        <div class="pinkacg_author_widget_item_name">粉丝</div></a>
                      <a class="pinkacg_author_widget_count_item" href="https://pinkacg.com/author/1?type=posts">
                        <div class="pinkacg_author_widget_item_number">8395</div>
                        <div class="pinkacg_author_widget_item_name">帖子</div></a>
                      <a class="pinkacg_author_widget_count_item" href="https://pinkacg.com/author/1?type=comments">
                        <div class="pinkacg_author_widget_item_number">41</div>
                        <div class="pinkacg_author_widget_item_name">评论</div></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget_pinkacg_hot_post">
                <div class="pinkacg_hot_post">
                  <h3 class="pinkacg_hot_post_title">
                    <span>
                      <i class="fas fa-eye"></i>
                      <span>热门文章</span></span>
                  </h3>
                  <div class="pinkacg_hot_post_container clearfix">
                    <article class="pinkacg_hot_post_article">
                      <div class="pinkacg_hot_post_post">
                        <div class="pinkacg_hot_post_item_container">
                          <a href="https://mkw2023.com/78580.html" class="pinkacg_hot_post_item_container_a">
                            <img
                              class="pinkacg_hot_post_item_container_img"
                              src="https://mkw2023.com/tp/578f.png"
                              alt="我试试发帖可以获得多少奖励"
                              width="320"
                              height="180"
                              style="display: block;"></a>
                          <div class="pinkacg_hot_post_item_container_item_view">
                            <i class="fa-eye fas fa-fw poi-icon"></i>3</div>
                          <div class="pinkacg_hot_post_item_container_time">
                            <time datetime="2021-03-14 22:19:52" title="3个月前">3个月前</time></div>
                        </div>
                        <h3 class="pinkacg_hot_post_item_container_item_title" title="我试试发帖可以获得多少奖励">
                          <a href="https://mkw2023.com/78580.html" class="pinkacg_hot_post_item_container_title_link">我试试发帖可以获得多少奖励</a></h3>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div></aside>
      </div></div>
  </div>
</template>

<script>
import { getPostList, purchase } from '@/api/post'
import morePost from '@/views/post/morePost'
import { getImg, diaplayTime } from '@/utils/util'

export default {
  name: 'Index',
  components: {
    morePost
  },
  metaInfo () {
    return {
      title: this.postMeta.title + ' - 文章页面'
    }
  },
  data () {
    return {
      'postMeta': {},
      getImg,
      diaplayTime
    }
  },
  created () {
    this.getPostMeta()
  },
  methods: {
    purchase (k, v) {
      purchase({
        'user_id': this.$store.getters.userInfo.id,
        'post_id': this.postMeta.id,
        'download_key': k,
        'credit': v.credit
      }).then((res) => {
        if (res.code === 200) {
          this.$message.success('购买成功')
          this.postMeta.download[k] = res.result.data
          setTimeout(() => {
            this.$router.replace({
              'path': '/refresh'
            })
          }, 2000)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    async getPostMeta () {
      const that = this
      await getPostList({
        'id': this.$route.params.id
      })
        .then(res => {
          if (res.code !== 200) {
            that.$message.error(res.message)
            return []
          }
          this.postMeta = res.result.data[0]
        })
    }
  }
}
</script>

<style scoped>

</style>
