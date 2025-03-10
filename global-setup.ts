import path from 'node:path'
import { chromium, type FullConfig } from '@playwright/test'

import { environment } from './utils'

const authFile = path.join(__dirname, './.auth/user.json')

async function globalSetup(config: FullConfig): Promise<void> {
  const { baseURL } = config.projects[0].use

  console.info(`📌 Base URL: "${baseURL}"`)

  if (!baseURL) {
    console.error('❌ Base URL is required')
    process.exit(1)
  }

  //* Готовим браузер
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  /**
   * Авторизация
   */
  // Перейти в МК (сработает редирект на https://sso-test.o3.ru/)
  await page.goto(baseURL)

  //* Получим поля формы SSO
  // const loginInput = page.locator('[type=text]')
  // const passwordInput = page.locator('[type=password]')
  // const submitButton = page.locator('[name=login]')

  //* Заполним форму
  // await loginInput.fill(environment.getLogin())
  // await passwordInput.fill(environment.getPassword())

  //* Отправим форму
  // await submitButton.click()

  //* Ждем окончания редиректа
  await page.waitForURL(/^[^#]+$/)

  await page.context().storageState({
    path: authFile,
  })
}

export default globalSetup
