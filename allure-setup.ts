import { allure as allurePlaywright } from 'allure-playwright'
import { TestingType, TestPriority, TestScenario } from './consts'


interface AllureManagerCommon {
  tag: string
  suite: string
}

interface AllureManagerTest {
  id: number | null
  severity: TestPriority
  scenario: TestScenario
  hasCrit: boolean
  type: TestingType
}


export const allure = {
  setCommon: async (data: AllureManagerCommon) => {
    await allurePlaywright.label('tag', data.tag)
    await allurePlaywright.suite(data.suite)
  },

  setAttribute: async (data: AllureManagerTest) => {
    if (data.id) allurePlaywright.allureId(String(data.id))
    if (data.scenario === TestScenario.Negative) await allurePlaywright.tag(data.scenario)
    await allurePlaywright.severity(data.severity)
    if (data.hasCrit) await allurePlaywright.tag('CRIT')
    await allurePlaywright.label('Testing type', 'Regression')
    if (data.type === TestingType.Smoke) await allurePlaywright.label('Testing type', 'Smoke')
  }
}
