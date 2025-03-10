import type { Page } from '@playwright/test'

export abstract class BaseLocators {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get layout() {
    return this.page.getByTestId('default-layout')
  }

  protected badge(testId: string, title = '') {
    return {
      root: this.page.getByTestId(`badge__${testId}`),
      title: this.page.getByTestId(`badge__${testId}`).getByText(title),
    }
  }

  protected button(testId: string) {
    return {
      root: this.page.getByTestId(`button__${testId}`),
    }
  }

  protected checkbox(testId: string, text: string) {
    return {
      root: this.page.getByTestId(`checkbox__${testId}`),
      title: this.page.getByTestId(`checkbox__${testId}`).getByText(text),
    }
  }

  protected datepicker(testId: string, title: string) {
    return {
      root: this.page.getByTestId(`datepicker__${testId}`),
      title: this.page.getByTestId(`datepicker__${testId}`).getByText(title),
      value: this.page.getByTestId(`datepicker__${testId}`).locator('input'),
    }
  }

  protected drawer(testId: string, text: string) {
    return {
      root: this.page.getByTestId(`drawer__${testId}`),
      title: this.page.getByTestId(`drawer__${testId}`).getByText(text),
    }
  }

  protected informer(testId: string, text: string) {
    return {
      root: this.page.getByTestId(`informer__${testId}`),
      text: this.page.getByTestId(`informer__${testId}`).getByText(text),
    }
  }

  protected input(testId: string, placeholder: string) {
    return {
      root: this.page.getByTestId(`input__${testId}`),
      placeholder: this.page.getByTestId(`input__${testId}`).getByText(placeholder),
      value: this.page.getByTestId(`input__${testId}`).locator('input'),
    }
  }

  protected note(testId: string, text: string) {
    return {
      icon: this.page.getByTestId(`icon__${testId}`),
      text: this.page.getByText(text),
    }
  }

  protected radio(testId: string, title: string) {
    return {
      root: this.page.getByTestId(`radio__${testId}`),
      title: this.page.getByTestId(`radio__${testId}`).getByText(title),
      checked: this.page.getByTestId(`radio__${testId}`).locator('input'),
    }
  }

  protected select(testId: string, title: string) {
    return {
      root: this.page.getByTestId(`select__${testId}`),
      title: this.page.getByTestId(`select__${testId}`).getByText(title),
    }
  }

  protected selectItem(testId: string, title: string) {
    return {
      root: this.page.getByTestId(`select-item__${testId}`),
      title: this.page.getByTestId(`select-item__${testId}`).getByText(title),
      checkbox: this.page.getByTestId(`select-item__${testId}`).locator('label'),
    }
  }

  protected tab(testId: string, title: string) {
    return {
      root: this.page.getByTestId(`tab__${testId}`),
      title: this.page.getByTestId(`select__${testId}`).getByText(title),
      active: this.page.getByTestId(`tab__${testId}`).locator('div').first(),
    }
  }

  protected widgetOrderState(title: string) {
    return {
      root: this.widgetContainer(title),
      badge: this.widgetContainer(title).getByTestId(`badge__${title}`),
      count: this.widgetContainer(title).getByTestId('count'),
      percent: this.widgetContainer(title).getByTestId('percent'),
    }
  }

  protected widgetOrderType(title: string) {
    return {
      root: this.widgetContainer(title),
      badge: this.widgetContainer(title).getByTestId(`badge__${title}`),
      count: this.widgetContainer(title).getByTestId('count'),
      percent: this.widgetContainer(title).getByTestId('percent'),
    }
  }

  protected widgetOrderTransaction(testId: string) {
    return {
      root: this.widgetContainer(testId),
      title: this.widgetContainer(testId).getByTestId('title'),
      count: this.widgetContainer(testId).getByTestId('count'),
      percent: this.widgetContainer(testId).getByTestId('percent'),
      description: this.widgetContainer(testId).getByTestId('text'),
    }
  }

  private widgetContainer(testId: string) {
    return this.page.getByTestId(`island-section__${testId}`)
  }
}
