import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import http from '../utils/http'
import commonRoutes from './common'
import adminRoutes from './admin'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: commonRoutes.concat(adminRoutes)
});

http.loginIntercept(router, '/login')

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (!store.getters.loginState) {
      http.get('/current').then(result => {
        if (result.success && result.data != null) {
          store.dispatch('login', result.data);
          next();
        } else {
          next({ path: '/login', query: { redirect: to.fullPath } });
        }
      })
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
