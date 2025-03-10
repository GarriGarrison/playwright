import { expect, test } from '../fixture'
import { BaseComponent } from './base'

export class Button extends BaseComponent {
  override get typeOf(): string {
    return 'кнопка'
  }

  async doubleClick(): Promise<void> {
    await test.step(`Сделать двойной клик ${this.typeOf} "${this.name}"`, async () => {
      await this.locator.dblclick()
    })
  }

  async shouldBeEnabled(): Promise<void> {
    await test.step(`Проверить, что ${this.typeOf} "${this.name}" активна`, async () => {
      await expect(this.locator, { message: this.getErrorMessage('does not enabled') }).not.toHaveClass(/button__disabled/i)
    })
  }

  async shouldBeDisabled(): Promise<void> {
    await test.step(`Проверить, что ${this.typeOf} "${this.name}" не доступна`, async () => {
      await expect(this.locator, { message: this.getErrorMessage('does not enabled') }).toHaveClass(/button__disabled/i)
    })
  }
}
