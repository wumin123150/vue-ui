import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import store from '../store'
import i18n from '../i18n'

// 传送语言
axios.interceptors.request.use(config => {
  store.dispatch('setLoadingState', true)
  if (config.params) {
    config.params.locale = i18n.locale
  } else {
    config.params = { locale: i18n.locale }
  }
  if (store.getters.token) {
    config.headers['X-Token'] = store.getters.token;
  }
  return config
}, error => {
  store.dispatch('setLoadingState', false)
  return Promise.reject(error)
});

// Loading判断
axios.interceptors.response.use(response => {
  store.dispatch('setLoadingState', false)
  return response
}, error => {
  store.dispatch('setLoadingState', false)
  ElementUI.Message.error(i18n.t('error.500'))
  return Promise.reject(error)
});

export default {
  loginIntercept(router, loginPath) {
    axios.interceptors.response.use(response => {
      if (response.data.errorCode === 401) {
        store.dispatch('logout')
        router.replace({ path: loginPath, query: { redirect: router.currentRoute.fullPath } });
      }
      return response;
    }, error => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            store.dispatch('logout');
            router.replace({ path: loginPath, query: { redirect: router.currentRoute.fullPath } });
        }
      }
      return Promise.reject(error);
    });
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data), {
        timeout: 10000
      }).then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      }
      ).catch(error => {
        reject(error);
      })
    })
  },
  get(url, data) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: data,
        timeout: 10000
      }).then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      }
      ).catch(error => {
        reject(error);
      })
    })
  }
}
