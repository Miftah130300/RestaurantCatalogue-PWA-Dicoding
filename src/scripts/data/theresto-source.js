import API_ENDPOINT from '../globals/api-endpoint'

class TheRestoSource {
  static async restoHome () {
    const response = await fetch(API_ENDPOINT.HOME)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  // eslint-disable-next-line space-before-function-paren
  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }
}

export default TheRestoSource
