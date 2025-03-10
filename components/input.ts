import { expect, test } from '../fixture'
import { BaseComponent } from './base'


export class Input extends BaseComponent {
  override get typeOf(): string {
    return 'поле'
  }

  async fill(value: string): Promise<void> {
    await test.step(`Заполнить ${this.typeOf} "${this.name}" значением ${value}`, async () => {
      await this.locator.fill(value)
    })
  }

  async shouldHaveValue(value: string): Promise<void> {
    await test.step(`Проверить, что ${this.typeOf} "${this.name}" содержит значение ${value}`, async () => {
      await expect(this.locator, { message: this.getErrorMessage('does not value') }).toHaveValue(value)
    })
  }
}
