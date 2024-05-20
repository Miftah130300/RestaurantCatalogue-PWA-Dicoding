import CONFIG from '../../globals/config'

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="restaurants__name">${restaurant.name}</h2>
  <img class="restaurants__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
  </div>
`
const createRestoItemTemplate = (restaurants) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${restaurants.name}"
           // eslint-disable-next-line no-undef, no-undef
           src="${CONFIG.BASE_IMAGE_URL}${restaurants.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurants.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <p>${restaurants.description}</p>
    </div>
  </div>
`

export {
  createRestoDetailTemplate,
  createRestoItemTemplate
}
