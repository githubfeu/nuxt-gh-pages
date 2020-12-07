import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71635495 = () => interopDefault(import('../pages/about/About.vue' /* webpackChunkName: "pages/about/About" */))
const _55f3bbce = () => interopDefault(import('../pages/howtobuy/HowToBuy.vue' /* webpackChunkName: "pages/howtobuy/HowToBuy" */))
const _4781a314 = () => interopDefault(import('../pages/user/wishlist/index.vue' /* webpackChunkName: "pages/user/wishlist/index" */))
const _0e142792 = () => interopDefault(import('../pages/product_detail/_id.vue' /* webpackChunkName: "pages/product_detail/_id" */))
const _441028fc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/boardgame/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about/About",
    component: _71635495,
    name: "about-About"
  }, {
    path: "/howtobuy/HowToBuy",
    component: _55f3bbce,
    name: "howtobuy-HowToBuy"
  }, {
    path: "/user/wishlist",
    component: _4781a314,
    name: "user-wishlist"
  }, {
    path: "/product_detail/:id?",
    component: _0e142792,
    name: "product_detail-id"
  }, {
    path: "/",
    component: _441028fc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
