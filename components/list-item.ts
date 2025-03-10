import { BaseComponent } from './base'

export class ListItem extends BaseComponent {
  override get typeOf(): string {
    return 'строка в списке'
  }
}
