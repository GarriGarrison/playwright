import { Page } from '@playwright/test'
import { test } from '../../fixture'
import { Title } from '../../components'
import { BasePage } from '../base/base.page'
import { LanguagesLocators } from './languages.locators'


export class LanguagesPage extends BasePage {
  private readonly locators: LanguagesLocators
  private readonly title: Title

  constructor(page: Page) {
    super(page)

    this.locators = new LanguagesLocators(page)
    this.title = new Title({ page, locator: this.locators.title, name: 'Language title' })
  }

  async languagePresent(language: string): Promise<void> {
    await test.step('Проверить отображение страницы переключения языков', async () => {
      await this.title.shouldBeVisible()
      await this.title.shouldHaveText(language)
    })
  }
}
