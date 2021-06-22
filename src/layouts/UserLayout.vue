<template>
  <div>
    <Header></Header>
    <router-view :key="key" />
    <Footer></Footer>
  </div>
</template>

<script>
import { deviceMixin } from '@/store/device-mixin'
import SelectLang from '@/components/SelectLang'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

export default {
  name: 'UserLayout',
  components: {
    SelectLang,
    Header,
    Footer
  },
  mixins: [deviceMixin],
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  },
  computed: {
    key () {
      return this.$route.name ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>

<style lang="less" scoped>

</style>
