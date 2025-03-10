import { BaseComponent } from './base'


export class Title extends BaseComponent {
  override get typeOf(): string {
    return 'заголовок'
  }
}
