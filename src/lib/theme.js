document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('[data-af-theme-toggler]')
  toggleButton.onclick = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }
})
