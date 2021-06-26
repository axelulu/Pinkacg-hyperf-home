<template>
  <div>
    <footer class="footer">
      <div class="footer-wrap">
        <!-- 页脚菜单/版权信息 IDC No. -->
        <div class="footer-nav">
          <div class="ghost-footer-width">
            <div class="ghost-footer">
              <aside>
                <div class="widget widget_text">
                  <div class="heading">
                    <i class="fas fa-link"></i><span class="widget-title">链接导航</span>
                  </div>
                  <div class="textwidget" v-html='site_footer.link'></div>
                </div>
              </aside>
            </div>
            <div class="ghost-footer">
              <aside>
                <div class="widget widget_text">
                  <div class="heading">
                    <i class="fas fa-bullhorn"></i><span class="widget-title">声明</span>
                  </div>
                  <div class="textwidget" v-html='site_footer.notice'></div>
                </div>
              </aside>
            </div>
            <div class="ghost-footer">
              <aside>
                <div class="widget widget_text">
                  <div class="heading">
                    <i class="fas fa-user-circle"></i><span class="widget-title">关于我们</span>
                  </div>
                  <div class="textwidget" v-html='site_footer.about'></div>
                </div>
              </aside>
            </div>
            <div class="ghost-footer">
              <aside>
                <div class="widget widget_text">
                  <div class="heading">
                    <i class="fas fa-envelope"></i><span class="widget-title">联系我们</span>
                  </div>
                  <div class="textwidget" v-html='site_footer.connect'></div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="ghost_bottom_tools" style="display: block;">
      <div class="container">
        <div class="ghost_bottom_tools_container">
          <div class="ghost_bottom_tool_container">
            <div class="ghost_bottom_tools_top_item">
              <a class="ghost_bottom_tools_top_link" title="返回顶部"><span class="ghost_bottom_tools_top_icon poi-icon fa-arrow-up fas fa-fw" aria-hidden="true"></span>
                <span class="ghost_bottom_tools_top_text">返回顶部</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ghost_footer" v-html='site_footer.footer'></div>
  </div>
</template>

<script>
import { getSettingList } from '@/api/setting'

export default {
  name: 'Footer',
  data () {
    return {
      'site_footer': {}
    }
  },
  created () {
    this.getSetting()
  },
  methods: {
    async getSetting () {
      const that = this
      await getSettingList({
        'name': 'site_footer'
      }).then(res => {
        if (res.code !== 200) {
          that.$message.error(res.message)
          return []
        }
        this.site_footer = res.result.data[0].value
      })
    }
  }
}
</script>

<style scoped>

</style>
