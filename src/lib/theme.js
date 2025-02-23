const themeToggle = document.querySelector('[data-af-theme-toggler]')
const html = document.documentElement
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const getTheme = () => localStorage.getItem('theme') || (mediaQuery.matches ? 'dark' : 'light')
const setTheme = (theme) => {
  html.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}
setTheme(getTheme())
themeToggle.addEventListener('click', () =>
  setTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light')
)
mediaQuery.addEventListener(
  'change',
  (e) => !localStorage.getItem('theme') && setTheme(e.matches ? 'dark' : 'light')
)
