import * as types from '../mutation-types'

/**
 * App通用配置
 */
const state = {
  loading: false,
  sidebar: false,
  openedViews: [],
  message: ''
}

const actions = {
  setLoadingState: ({ commit }, res) => {
    commit(types.COMMON_LOADING_STATE, res)
  },

  toggleSidebarState: ({ commit }) => {
    commit(types.COMMON_SIDEBAR_STATE, !state.sidebar)
  },

  addView: ({ commit }, res) => {
    commit(types.COMMON_ADD_VIEW, res)
  },

  removeView: ({ commit }, res) => {
    commit(types.COMMON_REMOVE_VIEW, res)
  },

  setMessage({ commit }, res) {
    commit(types.COMMON_MESSAGE, res);
  }
}

const getters = {
  loading: state => state.loading,
  sidebar: state => state.sidebar,
  openedViews: state => state.openedViews,
  message: state => state.message
}

const mutations = {
  [types.COMMON_LOADING_STATE]: (state, data) => {
    state.loading = data
  },

  [types.COMMON_SIDEBAR_STATE]: (state, data) => {
    state.sidebar = data
  },

  [types.COMMON_ADD_VIEW]: (state, view) => {
    if (state.openedViews.some(v => v.path === view.path)) return
    state.openedViews.push({ name: view.name, path: view.path })
  },
  [types.COMMON_REMOVE_VIEW]: (state, view) => {
    for (const [i, v] of state.openedViews.entries()) {
      if (v.path === view.path) {
        state.openedViews.splice(i, 1)
        return
      }
    }
  },

  [types.COMMON_MESSAGE]: (state, data) => {
    state.message = data;
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
