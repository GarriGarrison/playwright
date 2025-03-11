import type { Page } from '@playwright/test'
import { test } from '../../fixture'
import { Navbar } from './navigation/navbar'


export abstract class BasePage {
  protected readonly page: Page
  readonly navbar: Navbar

  constructor(page: Page) {
    this.page = page
    this.navbar = new Navbar(page)
  }

  async goto(url: string): Promise<void> {
    await test.step(`Открыть страницу с адресом "${url}"`, async () => {
      await this.page.goto(url, {waitUntil: 'networkidle'})
    })
  }

  async reload(): Promise<void> {
    const currentUrl = this.page.url()

    await test.step(`Перезагрузка страницы с адресом "${currentUrl}"`, async () => {
      await this.page.reload({ waitUntil: 'domcontentloaded'})
    })
  }
}
