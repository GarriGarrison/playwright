import type { Page, PlaywrightTestArgs, TestFixture } from '@playwright/test'
import { test } from '../fixture'


interface Batch {
  operationName: string
  mock: unknown
}

export class MockManagerApi {
  protected readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async query<T>(operationName: string, mockResponse: T): Promise<void> {
    // TODO: операция перехватывается по квери, надо смотреть на тело схемы
    await this.page.route(`**/gql?op=${operationName}`, async (route) => {
      await test.step(`Подставить мок для ${operationName}`, () =>
        route.fulfill({
          status: 200,
          json: mockResponse,
        }))
    })
  }

  async mutation<T>(operationName: string, mockResponse: T): Promise<void> {
    return this.query(operationName, mockResponse)
  }

  async batchQueries(batches: Batch[]): Promise<void> {
    await Promise.all(batches.map(({ operationName, mock }) => this.query(operationName, mock)))
  }

  async clear(operationName: string): Promise<void> {
    await this.page.unroute(`**/gql?op=${operationName}`)
  }
}

export const createMockManagerApiFixture =
  (): TestFixture<MockManagerApi, PlaywrightTestArgs> =>
  async ({ page }, use) => {
    await use(new MockManagerApi(page))
  }
