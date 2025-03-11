import type { Locator } from '@playwright/test'
import { BaseLocators } from '../base.locators'

export class SearchModalLocators extends BaseLocators {
  get title(): Locator {
    return this.page.locator('p.DocSearch-Help')
  }

  get inputSearch(): Locator {
    return this.page.locator('#docsearch-input')
  }

  get listItemSearch(): Locator {
    return this.page.locator('#docsearch-item-{resultNumber}')
  }
}
