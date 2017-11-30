import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enElementUI from 'element-ui/lib/locale/lang/en'
import zhElementUI from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages: {
    zh_CN: {
      error: {
        500: '网络异常请稍后重试'
      },
      ...zhElementUI
    },
    en: {
      error: {
        500: 'Network exception. Please try again later'
      },
      ...enElementUI
    }
  }
})

export default i18n
