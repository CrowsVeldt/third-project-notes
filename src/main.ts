import './style.css'
import mainPage from './components/page'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${mainPage}
`
