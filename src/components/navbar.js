// Get and set theme functions
const getTheme = () => document.documentElement.getAttribute('data-theme')
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

const ICONS = {
  dark: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.486 4.768a7.25 7.25 0 1 0 7.399 9.51a6.25 6.25 0 0 1-7.398-9.51M3.25 12a8.75 8.75 0 0 1 10.074-8.65a.75.75 0 0 1 .336 1.342a4.75 4.75 0 1 0 5.83 7.499a.75.75 0 0 1 1.22.654A8.751 8.751 0 0 1 3.25 12" clip-rule="evenodd"/></svg>`,
  light: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"/><path fill="currentColor" fill-rule="evenodd" d="M6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0M12 7.75a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5" clip-rule="evenodd"/><path fill="currentColor" d="M5.46 4.399a.75.75 0 0 0-1.061 1.06l.707.707a.75.75 0 1 0 1.06-1.06zM22.75 12a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75m-3.149-6.54a.75.75 0 1 0-1.06-1.061l-.707.707a.75.75 0 1 0 1.06 1.06zM12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m6.894-2.416a.75.75 0 1 0-1.06 1.06l.707.707a.75.75 0 1 0 1.06-1.06zM3.75 12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75m2.416 6.894a.75.75 0 0 0-1.06-1.06l-.707.707a.75.75 0 0 0 1.06 1.06z"/></svg>`
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('[data-af-theme-toggler]')

  const updateIcon = () => {
    const isDark = getTheme() === 'dark'
    toggleButton.innerHTML = isDark ? ICONS.dark : ICONS.light
  }

  // Toggle theme on button click
  toggleButton.onclick = () => {
    const newTheme = getTheme() === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    updateIcon()
  }

  updateIcon()
})

export const navbar = `
<header class="p-2rem d-flex ai-center jc-space-between pn-fixed w-mx-1280px mx-auto [t,l,r]-0 bg-neutral-50 tr-time-300ms tr-prop-[background-color]" data-theme-header>
  <span class="fs-1.1rem fw-500 ls--0.015em">AnyStack</span>
  <nav>
    <button
      class="[outline]-none bs-solid bw-1px bdr-c-neutral-200 br-6px box-40px d-flex flex-parent-center bg-neutral-50 text-neutral-950 hover:bg-neutral-100 hover:tr-time-300ms"
      data-af-theme-toggler>
    </button>
  </nav>
</header>`
