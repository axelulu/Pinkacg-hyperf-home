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
        path: '/author/:slug',
        name: 'author',
        component: () => import(/* webpackChunkName: "user" */ '@/views/author/index')
      },
      {
        path: '/:id.html',
        name: 'post',
        component: () => import(/* webpackChunkName: "user" */ '@/views/post/index')
      },
      {
        path: '/search/:word',
        name: 'search',
        component: () => import(/* webpackChunkName: "user" */ '@/views/search/index')
      },
      {
        path: '/user/setting',
        name: 'setting',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/setting')
      },
      {
        path: '/user/draft',
        name: 'draft',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/draft')
      },
      {
        path: '/user/newpost',
        name: 'newpost',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/newpost')
      },
      {
        path: '/user/notice',
        name: 'notice',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/notice')
      },
      {
        path: '/user/msg',
        name: 'msg',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/msg')
      },
      {
        path: '/user/order',
        name: 'order',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/order')
      },
      {
        path: '/user/star',
        name: 'star',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/star')
      },
      {
        path: '/user/post',
        name: 'post',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/post')
      },
      {
        path: '/user/fan',
        name: 'fan',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/fan')
      },
      {
        path: '/user/vip',
        name: 'vip',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/vip')
      },
      {
        path: '/user/cash',
        name: 'cash',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/cash')
      },
      {
        path: '/user/credit',
        name: 'credit',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/credit')
      },
      {
        path: '/user/shop',
        name: 'shop',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/shop')
      },
      {
        path: '/user/lottery',
        name: 'lottery',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/lottery')
      },
      {
        path: '/user/answer',
        name: 'answer',
        meta: { permission: [true] },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/answer')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
