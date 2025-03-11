import { describe } from 'node:test'
import { test } from '../fixture'


describe('Поиск документации на языки программирования', () => {
  test.beforeEach(async ({ homePage }) => {
    homePage.goto('/')
  })

  test('Проверить документации для Python', async ({ homePage, languagesPage }) => {
    await homePage.navbar.openSearchModal()
    await homePage.navbar.searchModal.findResult('python')

    await languagesPage.languagePresent('python')
  })
})
