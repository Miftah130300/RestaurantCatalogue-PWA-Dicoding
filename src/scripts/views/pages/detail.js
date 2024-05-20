/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser'
import TheRestoSource from '../../data/theresto-source'
import { createRestoDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
        <div class="detailResto" id="detailResto"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await TheRestoSource.detailResto(url.id)
    const restoContainer = document.querySelector('#detailResto')
    restoContainer.innerHTML = createRestoDetailTemplate(restaurant)
    console.log(restaurant)
  }
}

export default Detail
