<template>
  <div class="main">
    <div class="clearfix container setting">
      <user-aside></user-aside>
      <div class="col-md-10 float-right setting_box">
        <div class="pinkacg_setting_content">
          <div class="pinkacg_setting_content_container">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userAside from '@/views/user/components/aside'

export default {
  name: 'Index',
  components: {
    userAside
  },
  metaInfo () {
    return {
      title: '我的商品 - 个人设置'
    }
  }
}
</script>

<style scoped>

</style>
