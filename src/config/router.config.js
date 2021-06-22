// eslint-disable-next-line
import { UserLayout } from '@/layouts'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: UserLayout,
    redirect: '/',
    hidden: true,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "user" */ '@/views/home/index')
      },
      {
        path: '/category/:slug',
        name: 'category',
        component: () => import(/* webpackChunkName: "user" */ '@/views/category/index')
      },
      {
        path: '/:id.html',
        name: 'post',
        component: () => import(/* webpackChunkName: "user" */ '@/views/post/index')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
