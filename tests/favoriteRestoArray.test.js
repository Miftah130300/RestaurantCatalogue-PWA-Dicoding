/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable quotes */
import { itActsAsFavoriteRestoModel } from "./contracts/favoriteRestoContract"

let favoriteRestos = []

const FavoriteRestoArray = {
  getResto (id) {
    if (!id) {
      return
    }

    return favoriteRestos.find((restaurant) => restaurant.id == id)
  },

  getAllRestos () {
    return favoriteRestos
  },

  putResto (restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return
    }

    // pastikan id ini belum ada dalam daftar favoriteRestos
    if (this.getResto(restaurant.id)) {
      return
    }

    favoriteRestos.push(restaurant)
  },

  deleteResto (id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestos = favoriteRestos.filter((restaurant) => restaurant.id != id)
  }
}

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestos = []
  })

  itActsAsFavoriteRestoModel(FavoriteRestoArray)
})
