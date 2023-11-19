import TheRestoSource from '../../data/theresto-source'
import { createRestoItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return ` 
      <section class="listContent">
        <h1 class="content_result">See The Restaurant</h1>
        <div class="listResto" id="list_resto"></div>
      </section>
    `
  },

  async afterRender () {
    const resto = await TheRestoSource.restoHome()
    const restoContainer = document.querySelector('.listResto')
    resto.forEach((restaurants) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurants)
    })
  }
}

export default Home
