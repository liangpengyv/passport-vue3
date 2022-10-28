import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'

const lang = navigator.language.substring(0, 2)

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: lang,
  fallbackLocale: 'en',
  messages: { en, zh }
})

export { lang }
export default i18n