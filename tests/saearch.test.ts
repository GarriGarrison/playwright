import { describe } from 'node:test'
import { test } from '../fixture'

import mockPostList from './mocks/posts-list.json'
import mockStatList from './mocks/stat-user.json'


describe('Поиск документации на языки программирования', () => {
  test.beforeEach(async ({ homePage, mockManager }) => {
    await mockManager.batchQueries([
      // { operationName: 'PostsList', mock: mockPostsList },
      // { operationName: 'StatUser', mock: mockStatUser },
    ])

    homePage.goto('/')
  })

  test('Проверить документации для Python', async ({ homePage, languagesPage }) => {
    await homePage.navbar.openSearchModal()
    await homePage.navbar.searchModal.findResult('python')

    await languagesPage.languagePresent('python')
  })
})
