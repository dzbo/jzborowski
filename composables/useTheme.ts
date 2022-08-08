import useBrowser from './useBrowser'

const loadTheme = () => {
  const { isBrowser } = useBrowser()
  if (!isBrowser()) {
    return
  }

  if (
    window.localStorage.getItem('theme') === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const switchTheme = () => {
  const { isBrowser } = useBrowser()
  if (!isBrowser()) {
    return
  }

  document.documentElement.classList.toggle('dark')
  window.localStorage.setItem(
    'theme',
    document.documentElement.classList.contains('dark') ? 'dark' : ''
  )
}

export default function () {
  return {
    loadTheme,
    switchTheme,
  }
}
