import API_ENDPOINT from '../globals/api-endpoint'

class TheRestoSource {
  static async restoHome () {
    const response = await fetch(API_ENDPOINT.HOME)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default TheRestoSource
