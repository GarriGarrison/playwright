import { test as base } from '@playwright/test'
import { HomePage, LanguagesPage } from './pom'


type Fixture = {
  // mockManager: MockManager

  homePage: HomePage
  languagesPage: LanguagesPage
}

export const test = base.extend<Fixture>({
  // mockManager: createMockManagerFixture(),
  
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  languagesPage: async ({ page }, use) => {
    await use (new LanguagesPage(page))
  }
})

export { expect } from '@playwright/test'
