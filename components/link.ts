import { BaseComponent } from './base'

export class Link extends BaseComponent {
  override get typeOf(): string {
    return 'ссылка'
  }
}
