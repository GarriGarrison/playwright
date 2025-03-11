import type { Page } from '@playwright/test'
import { test } from '../../../fixture'
import { Input, ListItem, Title } from '../../../components'
import { SearchModalLocators } from './search.locator'


export class SearchModal {
  private readonly locators: SearchModalLocators
  private readonly emptyResultsTitle: Title
  private readonly searchInput: Input
  private readonly searchResult: ListItem

  constructor(page: Page) {
    this.emptyResultsTitle = new Title({ page, locator: this.locators.title, name: 'Empty results' })
    this.searchInput = new Input({ page, locator: this.locators.inputSearch, name: 'Search docs' })
    this.searchResult = new ListItem({ page, locator: this.locators.listItemSearch, name: 'Result item'})
  }

  async isOpened(): Promise<void> {
    await test.step('Проверить открытие модального окна Поиска', async () => {
      await this.searchInput.shouldBeVisible()
      await this.emptyResultsTitle.shouldBeVisible()
    })
  }

  async findResult(keyword: string): Promise<void> {
    await test.step('Найти документацию по ключевому слову', async () => {
      await this.searchInput.fill(keyword)
      await this.searchResult.click()
    })
  }
}
