import { test as base } from '@playwright/test'

type Fixture = {
  // mockManager: MockManager

  // ordersPage: OrdersPage
  // postsPage: PostsPage
}

export const test = base.extend<Fixture>({
  // mockManager: createMockManagerFixture(),
  // ordersPage: async ({ page }, use) => {
  // await use(new OrdersPage(page))
  // },
  // postsPage: async ({ page }, use) => {
  // await use(new PostsPage(page))
  // },
})

export { expect } from '@playwright/test'
