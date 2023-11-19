/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract'
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb'

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestos()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.deleteResto(restaurant.id)
    })
  })

  itActsAsFavoriteRestoModel(FavoriteRestoIdb)
})
