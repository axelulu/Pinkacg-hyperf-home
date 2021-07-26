import router from './router'
import storage from 'store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import { ACCESS_TOKEN } from '@/store/mutation-types'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const allowList = ['post', 'search', 'author', 'category', 'home', 'refresh'] // no redirect allowList
const loginRoutePath = '/'

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (allowList.includes(to.name)) {
    next()
  } else {
    /* has token */
    if (storage.get(ACCESS_TOKEN) || to.path === loginRoutePath) {
      if (to.path === loginRoutePath) {
        next()
      } else {
        if (to.meta.permission) {
          next()
          NProgress.done()
        } else {
          next({ path: loginRoutePath })
          NProgress.done()
        }
      }
    } else {
      next({ path: loginRoutePath })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
