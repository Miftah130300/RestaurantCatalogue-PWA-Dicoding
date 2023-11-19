import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator'

const LikeButtonPresenter = {
  async init ({ likeButtonContainer, favoriteRestos, restaurant }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = restaurant
    this._favoriteRestos = favoriteRestos

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestoExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestoExist (id) {
    const resto = await this._favoriteRestos.getResto(id)
    return !!resto
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestos.putResto(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestos.deleteResto(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default LikeButtonPresenter
