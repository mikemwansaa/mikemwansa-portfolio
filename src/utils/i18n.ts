import i18n, {type InitOptions} from 'i18next'
import {initReactI18next} from 'react-i18next'

import {EN} from '#translations/index'
import {MY_NAME} from '#data/common'

document.documentElement.setAttribute('lang', 'en')
document.title = `${MY_NAME} | Software Engineer | Founder of Akivara Technologies`

const options: InitOptions = {
  lng: 'en',
  resources: {
    en: {
      translation: EN,
    },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
}

i18n.use(initReactI18next).init(options)

export default i18n
