/* eslint-disable no-unused-vars */
import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './utils/sw-register'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const START = 10
const NUMBER_OF_IMAGES = 100

// eslint-disable-next-line no-unused-vars
const LinkSkip = document.querySelector('.skip-link')
const mainContent = document.querySelector('#mainContent')

LinkSkip.addEventListener('click', (event) => {
  event.preventDefault()
  mainContent.scrollIntoView({ behavior: 'smooth' })
  LinkSkip.blur()
})

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
