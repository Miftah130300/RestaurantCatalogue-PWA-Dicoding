/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb'
import * as TestFactories from './helpers/testFactories'

// eslint-disable-next-line no-undef
describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }
  beforeEach(() => {
    addLikeButtonContainer()
  })
  // eslint-disable-next-line no-undef
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })
    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy()
  })

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })
    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy()
  })

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    // Memastikan film berhasil disukai
    const restaurant = await FavoriteRestoIdb.getResto(1)
    expect(restaurant).toEqual({ id: 1 })

    await FavoriteRestoIdb.deleteResto(1)
  })

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })
    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoIdb.putResto({ id: 1 })
    // Simulasikan pengguna menekan tombol suka resto
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    // Tidak ada resto yang ganda
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }])
    await FavoriteRestoIdb.deleteResto(1)
  })

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({})
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([])
  })
})
