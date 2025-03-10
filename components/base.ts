import type { Locator, Page } from '@playwright/test'
import { expect, test } from '../fixture'
import { capitalize } from '../utils'


interface ComponentProps {
  page: Page
  name: string
  locator: Locator
}

export abstract class BaseComponent {
  page: Page
  locator: Locator
  name: string

  constructor({ page, locator, name }: ComponentProps) {
    this.page = page
    this.locator = locator
    this.name = name
  }

  get typeOf(): string {
    return 'компонент'
  }

  async shouldBeVisible(): Promise<void> {
    await test.step(`${this.typeOfUpper} "${this.name}" отображается на странице`, async () => {
      await expect(this.locator, { message: this.getErrorMessage('is not visible') }).toBeVisible()
    })
  }

  async shouldHaveText(text: string): Promise<void> {
    await test.step(`${this.typeOfUpper} "${this.name}" содержит текст "${text}"`, async () => {
      await expect(this.locator, { message: this.getErrorMessage(`does not have text "${text}"`) }).toContainText(text)
    })
  }

  async click(): Promise<void> {
    await test.step(`Кликнуть по: ${this.typeOf} "${this.name}"`, async () => {
      await this.locator.click()
    })
  }

  getErrorMessage(action: string): string {
    return `${this.typeOfUpper} "${this.name}" с локатором ${this.locator} - ${action}`
  }

  private get typeOfUpper(): string {
    return capitalize(this.typeOf)
  }
}
