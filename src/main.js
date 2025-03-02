import 'virtual:anyframe.css'
import './lib/ui-dev.js'
import { navbar } from './components/navbar.js'

document.getElementById('app').innerHTML = `
${navbar}
<main class="w-mx-1280px mx-auto">
  <article class="p-2rem h-100vh d-flex flex-parent-center">
    <header class="tw-balance">
  <h1 class="fs-2.5rem fw-500 ls--0.025em">Hello World! Let's build great app with AnyFrame UI!</h1>
    </header>
  </article>
</main>`
