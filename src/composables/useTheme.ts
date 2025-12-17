const loadTheme = () => {
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
  document.documentElement.classList.toggle('dark')
  window.localStorage.setItem(
    'theme',
    document.documentElement.classList.contains('dark') ? 'dark' : '',
  )
}

export default function () {
  return {
    loadTheme,
    switchTheme,
  }
}
