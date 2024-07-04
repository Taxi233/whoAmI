// 引入路由
import { createRouter, createWebHashHistory } from 'vue-router'


//权限路由
export const visRoutes = [
  {
    path: '/pages',
    redirect: '/pages/index',
    name: 'vis',
    meta: { title: '首页', icon: 'dashboard' },
    // alwaysShow: true,
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'my-index',
        component: () => import('@/pages/index/index.vue'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  }
]
// 路由数据
export const constantRoutes = [
  /**
   * redirect 默认路由:进入项目 默认进入 /index 页面
   * hidden 是否在路由栏显示
   * meta : {
   noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
   title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
   icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
   breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
   activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
   }
   */
  {
    path: '/',
    hidden: true,
    redirect: '/pages/index'
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/error/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/pages/error/401.vue'),
    hidden: true
  },
  ...visRoutes
]
// 路由
export const router = createRouter({
  history: createWebHashHistory('/'),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})
export default router
