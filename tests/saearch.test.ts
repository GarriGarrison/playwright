import { describe } from 'node:test'
import { test } from '../fixture'
import { allure } from '../allure-setup'
import { TestGroup, TestingType, TestPriority, TestScenario } from '../consts'

import mockPostList from './mocks/posts-list.json'
import mockStatList from './mocks/stat-user.json'


describe('Поиск документации на языки программирования', () => {
  test.beforeEach(async ({ homePage, mockManager }) => {
    await allure.setCommon({
      tag: TestGroup.Integration,
      suite: 'Документация',
    })

    await mockManager.batchQueries([
      // { operationName: 'PostsList', mock: mockPostsList },
      // { operationName: 'StatUser', mock: mockStatUser },
    ])

    homePage.goto('/')
  })

  test('Проверить документации для Python', async ({ homePage, languagesPage }) => {
    await allure.setAttribute({
      id: null,
      severity: TestPriority.Medium,
      scenario: TestScenario.Positive,
      hasCrit: false,
      type: TestingType.Regression,
    })

    await homePage.navbar.openSearchModal()
    await homePage.navbar.searchModal.findResult('python')

    await languagesPage.languagePresent('python')
  })
})
