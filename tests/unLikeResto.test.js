/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories'
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb'

describe('Unliking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteRestoIdb.putResto({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1)
  })

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy()
  })

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy()
  })

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([])
  })

  it('should not throw error when user click unlike widget if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })
    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestoIdb.deleteResto(1)
    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'))
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([])
  })
})
