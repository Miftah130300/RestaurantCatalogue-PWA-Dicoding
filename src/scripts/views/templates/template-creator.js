import CONFIG from '../../globals/config'

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="resto__name">${restaurant.name}</h2>
  <img class="resto__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Menu Makanan</h4>
    <ul>
      ${restaurant.menus.foods.map((foods) => `<li>${foods.name}</li>`).join('')}
    </ul>
    <h4>Menu Minuman</h4>
    <ul>
      ${restaurant.menus.drinks.map((drinks) => `<li>${drinks.name}</li>`).join('')}
    </ul>
    <h4>Customer Reviews</h4>
    ${restaurant.customerReviews.map((review) => `
      <div class="review">
        <p class="review__name">${review.name}</p>
        <p class="review__date">${review.date}</p>
        <p class="review__text">${review.review}</p>
      </div>
    `).join('')}
  </div>
`
const createRestoItemTemplate = (restaurants) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img id="resto-item__header__poster" class="lazyload" alt="${restaurants.name}"
           // eslint-disable-next-line no-undef, no-undef
           data-src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}"
           width='300'
           height='300'>
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurants.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class='resto-title'><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <p>${restaurants.description}</p>
    </div>
  </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
