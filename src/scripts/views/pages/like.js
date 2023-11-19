import FavoriteRestoIdb from '../../data/favorite-resto-idb'
import { createRestoItemTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    const restaurants = await FavoriteRestoIdb.getAllRestos()

    // Check if the array is empty
    if (restaurants.length === 0) {
      return `
        <div class="content">
          <h2 class="content__heading">Your Liked Restaurant</h2>
          <div id="restos" class="restos">
            <div class="resto-item__not__found">Tidak ada restoran untuk ditampilkan</div>
          </div>
        </div>
      `
    }

    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restos" class="restos">
          ${restaurants.map((restaurant) => createRestoItemTemplate(restaurant)).join('')}
        </div>
      </div>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestoIdb.getAllRestos()
    const restosContainer = document.querySelector('#restos')
    restosContainer.innerHTML = ''

    if (restaurants.length === 0) {
      // If no liked restaurants, show the "not found" message
      restosContainer.innerHTML = `
        <div class="resto-item__not__found">Tidak ada restoran untuk ditampilkan</div>
      `
    } else {
      // Otherwise, add the liked restaurants
      restaurants.forEach((restaurant) => {
        restosContainer.innerHTML += createRestoItemTemplate(restaurant)
      })
    }
  }
}

export default Like
