import { createIntl, createIntlCache } from '@formatjs/intl'
import { computed, ref } from 'vue'
import enUS from '@/translations/en_US.json'
import plPL from '@/translations/pl_PL.json'

type Locale = 'en_US' | 'pl_PL'

const messages = {
  en_US: enUS,
  pl_PL: plPL,
}

const localeToIntlFormat = (locale: Locale): string => {
  return locale.replace('_', '-')
}

const cache = createIntlCache()

export const detectBrowserLanguage = (): Locale => {
  const browserLang = navigator.language || navigator.languages?.[0]
  if (browserLang?.startsWith('pl')) {
    return 'pl_PL'
  }
  return 'en_US'
}

const storedLocale = window.localStorage.getItem('locale') as Locale | null
const currentLocale = ref<Locale>(storedLocale || detectBrowserLanguage())

const intl = ref(
  createIntl(
    {
      locale: localeToIntlFormat(currentLocale.value),
      messages: messages[currentLocale.value],
    },
    cache,
  ),
)

export default function useIntl() {
  const locale = computed(() => currentLocale.value)

  const formatMessage = (
    id: string,
    values?: Record<string, string | number>,
  ): string => {
    return intl.value.formatMessage({ id }, values)
  }

  const switchLocale = (newLocale: Locale) => {
    currentLocale.value = newLocale
    window.localStorage.setItem('locale', newLocale)
    intl.value = createIntl(
      {
        locale: localeToIntlFormat(newLocale),
        messages: messages[newLocale],
      },
      cache,
    )
  }

  return {
    formatMessage,
    locale,
    switchLocale,
  }
}
