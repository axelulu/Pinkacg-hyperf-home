<template>
  <div class="main single container">
    <div class="clearfix">
      <div data-id="4422" class="article float-left col-lg-9">
        <article>
          <h1 class="ghost_single_title">{{ postMeta.title }}</h1>
          <header class="ghost_single_header">
            <span class="single_header_item ghost_single_category" title="分类">
              <router-link :to="'/category/' + postMeta.menu">
                <i class="fa-folder-open fas fa-fw poi-icon" aria-hidden="true"></i>
                <span class="ghost_icon_text">{{ postMeta.menu }}</span>
              </router-link>
            </span>
            <time datetime="2018-03-12 16:37:14" class="single_header_item ghost_single_date" title="3年前">
              <i class="fa-clock fas fa-fw poi-icon" aria-hidden="true"></i>
              <span class="ghost_icon_text">{{ postMeta.updated_at }}</span>
            </time>
            <router-link v-if='postMeta.authorMeta' :to="'/author/' + postMeta.authorMeta.id" :title="postMeta.authorMeta.name" class="single_header_item ghost_single_author">
              <i class="fa-user-circle fas fa-fw poi-icon" aria-hidden="true"></i> <span class="ghost_icon_text">{{ postMeta.authorMeta.name }}</span>
            </router-link>
            <span class="single_header_item ghost_single_view" title="查看数">
              <a href="javascript:void(0)">
                <i class="fa-play-circle fas fa-fw poi-icon" aria-hidden="true"></i>
                <span class="ghost_single_view_num">{{ postMeta.views }}</span>
              </a>
            </span>
            <span class="single_header_item ghost_single_comment_count" title="评论数">
              <a href="javascript:void(0)">
                <i class="fa-comments fas fa-fw poi-icon" aria-hidden="true"></i>
                <span class="ghost_single_comment_count_num">{{ postMeta.comment_count }}</span>
              </a>
            </span>
            <span class="single_header_item " title="编辑文章">
              <a href="https://mkw2023.com/?c=User&amp;m=editpost&amp;id=4422" target="_blank"><i class="poi-icon fas fa-paint-brush fa-fw" aria-hidden="true"></i>
                <span class="">编辑文章</span></a>
            </span>
          </header>
          <!--文章内容-->
          <div class="single_post_body" v-html='postMeta.content'></div>

          <!-- 下载链接 -->
          <div v-if='postMeta.download_status' class="ghost_download_content">
            <div>文章作者的链接:</div>
            <fieldset v-for='(v, k) in postMeta.download' :key='k' class="ghost_download_content_content">
              <legend class="ghost_download_content_name">
                <span class="ghost_download_label_success">磁力链接</span></legend>
              <div class="ghost_download_content_item_download_pwd">
                <div class="ghost_download_">
                  <div class="col-lg-2 float-left">
                    <div class="ghost_download_content_item_label">
                      <span class="poi-icon fa-unlock-alt fas fa-fw" aria-hidden="true"></span>
                      <span class="ghost_icon_text">提取密码</span></div>
                  </div>
                  <div style="padding-right:0px" class="col-lg-10 float-left">
                    <div class="poi-btn-group">
                      <input class="ghost_input ghost_download_content_item_input" type="text" readonly="" :value="v.name">
                      <a class="ghost_btn ghost_btn_success ghost_btn_copy">
                        <span class="poi-icon fa-copy fas fa-fw" aria-hidden="true"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ghost_download_content_item_extract_pwd">
                <div class="ghost_download_">
                  <div class="col-lg-2 float-left">
                    <div class="ghost_download_content_item_label">
                      <span class="poi-icon fa-key fas fa-fw" aria-hidden="true"></span>
                      <span class="ghost_icon_text">解压密码</span></div>
                  </div>
                  <div style="padding-right:0px" class="col-lg-10 float-left">
                    <div class="poi-btn-group">
                      <input class="ghost_input ghost_download_content_item_input" type="text" readonly="" :value="v.pwd">
                      <a class="ghost_btn ghost_btn_success ghost_btn_copy">
                        <span class="poi-icon fa-copy fas fa-fw" aria-hidden="true"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ghost_download_content_btn">
                <div class="poi-btn-group">
                  <a :href="v.link" class="ghost_btn ghost_btn_success download" rel="noreferrer" target="_blank">
                    <span class="poi-icon fa-cloud-download-alt fas fa-fw" aria-hidden="true"></span>
                    <span class="ghost_icon_text">下载（如果点击无反应，可能是磁力链接）</span></a>
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
                <a :href="'http://service.weibo.com/share/share.php?url=https://pinkacg.com/78561.html&amp;coun=1&amp;pic=&amp;title=' + postMeta.title" class="inn-singular__post__share__item poi-tooltip poi-tooltip_top" rel="nofollow" title="分享到微博" aria-label="分享到微博">
                  <i class="fa-weibo fab fa-fw poi-icon" aria-hidden="true"></i>
                </a>
                <a href="http://connect.qq.com/widget/shareqq/index.html?url=https://pinkacg.com/78561.html&amp;desc=来<粉萌次元>看看这篇文章吧，有惊喜哦！&amp;title=赛博朋克2077中文破解版下载&amp;summary=赛博朋克2077中文破解版下载&amp;pics=&amp;site=粉萌次元" class="inn-singular__post__share__item poi-tooltip poi-tooltip_top" rel="nofollow" title="分享到QQ空间" aria-label="分享到QQ空间">
                  <i class="fa-qq fab fa-fw poi-icon" aria-hidden="true"></i>
                </a>
                <a href="" class="inn-singular__post__share__item poi-tooltip poi-tooltip_top" rel="nofollow" title="分享到微信" aria-label="分享到微信">
                  <i class="fa-weixin fab fa-fw poi-icon" aria-hidden="true"></i>
                </a>
                <a href="http://tieba.baidu.com/f/commit/share/openShareApi?url=https://pinkacg.com/78561.html&amp;title=赛博朋克2077中文破解版下载&amp;comment=&amp;pic=&amp;red_tag=y2016799123" class="inn-singular__post__share__item poi-tooltip poi-tooltip_top" rel="nofollow" title="分享到贴吧" aria-label="分享到贴吧">
                  <i class="fa-bold fas fa-fw poi-icon" aria-hidden="true"></i>
                </a>
              </div>
              <div id="ghost-report" class="single_post_footer_report">
                <div class="ghost_report single_post_footer_container">
                  <a class="single_post_footer_btn"><span class="poi-icon fa-paperclip fas fa-fw" aria-hidden="true"></span> <span class="ghost_icon_text">链接失效</span></a>
                </div>
              </div>
              <div id="ghost-add_link" class="single_post_footer_report">
                <div data-userid="1" class="ghost_add_link single_post_footer_container">
                  <a class="single_post_footer_btn"><span class="poi-icon fa-link fas fa-fw" aria-hidden="true"></span> <span class="ghost_icon_text">帮他补链</span></a>
                </div>
              </div>
              <div class="single_post_footer_report">
                <div class="download_img single_post_footer_container">
                  <a class="single_post_footer_btn"><span class="poi-icon fa-images fas fa-fw" aria-hidden="true"></span> <span class="ghost_icon_text">图片下载</span></a>
                </div>
              </div>
              <div class="single_post_footer_report">
                <div class="post_stars single_post_footer_container">
                  <a class="single_post_footer_btn"><span class="poi-icon fa-star far fa-fw" aria-hidden="true"></span> <span class="ghost_icon_text">收藏文章</span></a>
                </div>
              </div>
            </div>
            <ul class="single_post_footer_source">
              <li> 本作品是由 <a href="https://pinkacg.com">粉萌次元</a> 会员 <a href="https://pinkacg.com/author/1">小宅酱</a> 的投递作品。 </li> <li>转载请务请署名并注明出处：<a href="https://pinkacg.com/78561.html" rel="nofollow">https://pinkacg.com/78561.html</a>。</li>
              <li>禁止再次修改后发布；任何商业用途均须联系作者。如未经授权用作他处，作者将保留追究侵权者法律责任的权利。</li>
            </ul>
          </footer>
        </article>

        <!-- 底部文章模块 -->
        <section>
          <div class="cat-container clearfix">
            <div id="ghost_box_1" class="cms-cat cms-cat-s7">
              <morePost :k='postMeta.menu'></morePost>
            </div>
          </div>
        </section>

        <!-- 评论 -->
        <aside>
          <div class="ghost_comment">
            <div data-userid="147" class="join_comments ghost_comment_faker">
              <img class="ghost_comment_faker_avatar" src="https://mkw2023.com/tp/8707097.png" alt="avatar" width="18" height="18">
              <span class="ghost_comment_text">点击参与讨论！</span></div>
            <h2 class="ghost_comment_title">
              <span class="poi-icon fa-comments fas fa-fw" aria-hidden="true"></span>
              <span class="ghost_icon_text">评论</span></h2>
            <div class="ghost_comment_container">

            </div>
          </div>
        </aside>
      </div>

        <!--weight-->
      <div class="weight float-right col-lg-3">
        <aside id="ghost_widget" class="ghost_widget">
          <div class="ghost_widget_content">
            <div class="widget_ghost_author">

              <h3 class="ghost_hot_post_title">
                <span>
                  <i class="fas fa-user-circle"></i>
                  <span>用户工具</span></span>
              </h3>
              <div class="ghost_author_header ghost_my_flowers ghost_author_widget">
                <div v-if='postMeta.authorMeta' class="mkw1">
                  <div class="ghost_author_widget_container">
                    <div class="ghost_author_widget_avatar">
                      <router-link class="ghost_author_widget_avatar_link" :to="'/author/' + postMeta.authorMeta.id">
                        <img class="ghost_author_widget_avatar_img" width="150" height="150" :src="'http://localhost:9501/' + postMeta.authorMeta.avatar" alt="站长菌">
                      </router-link>
                    </div>
                    <div class="ghost_author_widget_info">
                      <div class="ghost_author_widget_name_container">
                        <router-link :to="'/author/' + postMeta.authorMeta.id" class="ghost_author_widget_name_link">{{ postMeta.authorMeta.name }}</router-link></div>
                      <div class="ghost_author_widget_group_container">
                        <div class="ghost_author_widget_group_uid" title="UID"></div>
                        <div class="ghost_author_widget_group_role" style="background-color: rgb(165, 132, 168);">{{ postMeta.authorMeta.desc }}</div></div>
                      <div class="ghost_author_widget_description">{{ postMeta.authorMeta.desc }}</div></div>
                    <div class="ghost_author_widget_point">
                      <span class="poi-icon fa-paw fas fa-fw" aria-hidden="true"></span>
                      <span class="ghost_author_widget_point_text">{{ postMeta.authorMeta.credit }}</span></div>
                    <div class="ghost_author_widget_tools">
                      <a class="ghost-btn ghost-btn_success ghost_author_btn my_flower">
                        <div class="del_flowers">
                          <span class="poi-icon fa-check fas fa-fw" aria-hidden="true"></span>
                          <span class="ghost_icon_text">已关注</span>
                        </div>
                      </a>
                      <a class="ghost-btn ghost-btn_default ghost_author_btn send_msg">
                        <span class="poi-icon fa-envelope fas fa-fw" aria-hidden="true"></span>
                        <span class="ghost_icon_text">站内信</span></a>
                    </div>
                    <div class="ghost_author_widget_author_profile_count">
                      <a class="ghost_author_widget_count_item" href="https://pinkacg.com/author/1?type=flowers">
                        <div class="ghost_author_widget_item_number">1</div>
                        <div class="ghost_author_widget_item_name">关注</div></a>
                      <a class="ghost_author_widget_count_item" href="https://pinkacg.com/author/1?type=fans">
                        <div class="ghost_author_widget_item_number">216</div>
                        <div class="ghost_author_widget_item_name">粉丝</div></a>
                      <a class="ghost_author_widget_count_item" href="https://pinkacg.com/author/1?type=posts">
                        <div class="ghost_author_widget_item_number">8395</div>
                        <div class="ghost_author_widget_item_name">帖子</div></a>
                      <a class="ghost_author_widget_count_item" href="https://pinkacg.com/author/1?type=comments">
                        <div class="ghost_author_widget_item_number">41</div>
                        <div class="ghost_author_widget_item_name">评论</div></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget_ghost_hot_post">
                <div id="ghost_hot_post" class="ghost_hot_post">
                  <h3 class="ghost_hot_post_title">
                    <span>
                      <i class="fas fa-eye"></i>
                      <span>热门文章</span></span>
                  </h3>
                  <div class="ghost_hot_post_container clearfix">
                    <article class="ghost_hot_post_article">
                      <div class="ghost_hot_post_post">
                        <div class="ghost_hot_post_item_container">
                          <a href="https://mkw2023.com/78580.html" class="ghost_hot_post_item_container_a">
                            <img
                              class="ghost_hot_post_item_container_img"
                              src="https://mkw2023.com/tp/578f.png"
                              data-original="https://fontawesome.catacg.cn/post_img/1/2020/07/1-de66f060395e2159ed537973c123029a.jpg"
                              alt="我试试发帖可以获得多少奖励"
                              width="320"
                              height="180"
                              style="display: block;"></a>
                          <div class="ghost_hot_post_item_container_item_view">
                            <i class="fa-eye fas fa-fw poi-icon"></i>3</div>
                          <div class="ghost_hot_post_item_container_time">
                            <time datetime="2021-03-14 22:19:52" title="3个月前">3个月前</time></div>
                        </div>
                        <h3 class="ghost_hot_post_item_container_item__title" title="我试试发帖可以获得多少奖励">
                          <a href="https://mkw2023.com/78580.html" class="ghost_hot_post_item_container_title__link">我试试发帖可以获得多少奖励</a></h3>
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
import { getPostList } from '@/api/post'
import morePost from '@/views/post/morePost'

export default {
  name: 'Index',
  components: {
    morePost
  },
  data () {
    return {
      'postMeta': {}
    }
  },
  created () {
    this.getPostMeta()
  },
  methods: {
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
          console.log(res.result.data[0])
          this.postMeta = res.result.data[0]
        })
    }
  }
}
</script>

<style scoped>

</style>
