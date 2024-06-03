import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/index', name: 'index', component: import('../pages/Index/index.vue') },
  { path: '/routeDemo', name: 'routeDemo', component: import('../pages/RouteDemo/RouteDemo.vue') },
  { path: '/parent', name: 'parent', component: import('../pages/MyParent/MyParent.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  //  to:要去哪个页面
  //  from:从哪里来
  //  next:它是一个函数。
  //     如果直接放行 next()
  //     如果要跳到其它页 next(其它页)

  console.log('to', to)
  console.log('from', from)
  // 首次进去to.name为undefined
  if (to.name == undefined) {
    next('index')
  } else {
    next()
  }
})

export default router
