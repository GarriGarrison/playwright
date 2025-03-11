import { test as base } from '@playwright/test'
import { createMockManagerApiFixture, type MockManagerApi } from './fixtures/mock-api'
import { HomePage, LanguagesPage } from './pom'


type Fixture = {
  mockManager: MockManagerApi

  homePage: HomePage
  languagesPage: LanguagesPage
}

export const test = base.extend<Fixture>({
  mockManager: createMockManagerApiFixture(),
  
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  languagesPage: async ({ page }, use) => {
    await use(new LanguagesPage(page))
  }
})

export { expect } from '@playwright/test'
