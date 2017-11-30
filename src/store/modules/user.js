import * as types from '../mutation-types'
import commonRoutes from '@/router/common'
import adminRoutes from '@/router/admin'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
const hasPermission = (roles, route) => {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤路由表，返回符合用户角色权限的路由表
 * @param routes
 * @param roles
 */
const filterRoutes = (routes, roles) => {
  const accessedRoutes = routes.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterRoutes(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRoutes
}

const state = {
  // 登录状态
  token: localStorage.getItem('token'),
  // 用户信息
  user: JSON.parse(localStorage.getItem('user')) || {},
  roles: [],
  routers: adminRoutes
}

const actions = {
  /**
   * 用户登录
   */
  login({ commit }, res) {
    commit(types.LOGIN, res)
  },

  /**
   * 退出登录
   */
  logout({ commit }) {
    commit(types.LOGOUT)
  },

  /**
   * 用户信息
   */
  setUser({ commit }, res) {
    commit(types.USER, res);
  },

  setRoles({ commit }, res) {
    commit(types.ROLES, res);
  },

  generateRoutes({ commit }, res) {
    return new Promise(resolve => {
      const { roles } = res;
      let accessedRoutes;
      if (roles.indexOf('admin') >= 0) {
        accessedRoutes = adminRoutes;
      } else {
        accessedRoutes = filterRoutes(adminRoutes, roles)
      }
      commit(types.ROUTER, accessedRoutes);
      resolve();
    })
  }
}

const getters = {
  token: state => state.token,
  user: state => state.user,
  roles: state => state.roles,
  loginState: state => state.token !== null,
  routers: state => state.routers
}

const mutations = {
  [types.LOGIN]: (state, data) => {
    localStorage.token = data;
    state.token = data;
  },

  [types.LOGOUT]: state => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    state.token = null;
  },

  [types.USER]: (state, data) => {
    localStorage.setItem('user', JSON.stringify(data));
    state.user = data;
  },

  [types.ROLES]: (state, data) => {
    state.roles = data
  },

  [types.ROUTER]: (state, data) => {
    state.routers = commonRoutes.concat(data);
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
