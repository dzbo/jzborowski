import useBrowser from '@/composables/useBrowser'

const loadTheme = () => {
  const { isBrowser } = useBrowser()
  if (!isBrowser()) return

  const localStorage = window.localStorage

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const switchTheme = () => {
  const { isBrowser } = useBrowser()
  if (!isBrowser()) return

  const localStorage = window.localStorage
  document.documentElement.classList.toggle('dark')
  localStorage.theme = document.documentElement.classList.contains('dark')
    ? 'dark'
    : 'light'
}

export default function () {
  return {
    loadTheme,
    switchTheme,
  }
}
