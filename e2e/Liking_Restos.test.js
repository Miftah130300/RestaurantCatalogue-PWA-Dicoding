/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert')
const { async } = require('regenerator-runtime')
Feature('Liking Restos')

Before(({ I }) => {
  I.amOnPage('/#/favorit')
})
Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('.content')
  I.see('Your Liked Restaurant', '.content__heading')
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found')
})

Scenario('liking one resto', async ({ I }) => {
  I.seeElement('.content')
  I.see('Your Liked Restaurant', '.content__heading')
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found')
  I.amOnPage('/')

  I.seeElement('.resto-title a')
  const firstResto = locate('.resto-title a').first()
  const firstRestoTitle = await I.grabTextFrom(firstResto)
  I.click(firstResto)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.wait(1) // Tunggu 1 detik (atau sesuaikan dengan kebutuhan)
  I.amOnPage('/#/favorit')
  I.seeElement('.resto-item')
  const likedRestoTitle = await I.grabTextFrom('.resto-title')
  assert.strictEqual(firstRestoTitle, likedRestoTitle)
})

Scenario('Unliking one restaurant', async ({ I }) => {
  I.seeElement('.content')
  I.see('Your Liked Restaurant', '.content__heading')
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found')

  I.amOnPage('/')

  I.seeElement('.resto-title a')
  const firstResto = locate('.resto-title a').first()
  const firstRestoTitle = await I.grabTextFrom(firstResto)
  I.click(firstResto)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.wait(1) // Tunggu 1 detik (atau sesuaikan dengan kebutuhan)
  I.amOnPage('/#/favorit')
  I.seeElement('.resto-item')

  const likedRestoTitle = await I.grabTextFrom('.resto-title a')
  assert.strictEqual(firstRestoTitle, likedRestoTitle)

  I.click(likedRestoTitle)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.wait(1) // Tunggu 1 detik (atau sesuaikan dengan kebutuhan)
  I.amOnPage('/#/favorit')

  const likedRestoIsEmpty = await I.grabTextFrom('.resto-item__not__found')
  assert.strictEqual('Tidak ada restoran untuk ditampilkan', likedRestoIsEmpty)
})
