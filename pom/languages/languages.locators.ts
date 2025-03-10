import type { Locator } from '@playwright/test';
import { BaseLocators } from '../base/base.locators'


export class LanguagesLocators extends BaseLocators {
  get title(): Locator {
    return this.page.locator('h2#{language}')
  }
}
