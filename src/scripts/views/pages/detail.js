/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser'
import TheRestoSource from '../../data/theresto-source'
import { createRestoDetailTemplate } from '../templates/template-creator'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import FavoriteRestoIdb from '../../data/favorite-resto-idb'

const Detail = {
  async render () {
    return `
        <div class="detailResto" id="detailResto"></div>
        <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await TheRestoSource.detailRestaurant(url.id)
    const restoContainer = document.querySelector('#detailResto')
    restoContainer.innerHTML = createRestoDetailTemplate(restaurant)
    console.log(restaurant)
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating
      }
    })
  }
}

export default Detail
