import type { Locator } from '@playwright/test'
import { BaseLocators } from '../base.locators'

export class NavbarLocators extends BaseLocators {
  get linkApi(): Locator {
    return this.page.locator('//a[text()="API"]')
  }

  get linkDocs(): Locator {
    return this.page.locator('//a[text()="Docs"]')
  }

  get buttonSearch(): Locator {
    return this.page.locator('button.DocSearch-Button')
  }
}
