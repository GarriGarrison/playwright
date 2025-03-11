import type { Page } from '@playwright/test'
import { test } from '../../../fixture'
import { Button, Link } from '../../../components'
import { SearchModal } from '../modals/search.modal'
import { NavbarLocators } from './navbar.locator'

export class Navbar {
  readonly searchModal: SearchModal

  private readonly locators: NavbarLocators
  private readonly apiLink: Link
  private readonly docsLink: Link
  private readonly searchButton: Button

  constructor(page: Page) {
    this.apiLink = new Link({ page, locator: this.locators.linkApi, name: 'API' })
    this.docsLink = new Link({ page, locator: this.locators.linkDocs, name: 'документы' })
    this.searchButton = new Button({ page, locator: this.locators.buttonSearch, name: 'поиск' })
  }

  async gotoApi(): Promise<void> {
    await test.step('Перейти на страницу API', async () => {
      await this.apiLink.click()
    })
  }

  async gotoDocs(): Promise<void> {
    await test.step('Перейти на страницу с документацией', async () => {
      await this.docsLink.click()
    })
  }

  async openSearchModal(): Promise<void> {
    await test.step('Открыть модальное окно поиска', async () => {
      await this.searchButton.shouldBeVisible()
      await this.searchButton.click()

      await this.searchModal.isOpened()
    })
  }
}
