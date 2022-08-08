/* eslint no-global-assign: 0 */
import { expect, test } from 'vitest'
import useBrowser from '../useBrowser'

test('isBrowser in client mode', () => {
  window = {} as any

  const { isBrowser } = useBrowser()
  expect(isBrowser()).toBe(true)
})

test('isBrowser in server mode', () => {
  window = undefined

  const { isBrowser } = useBrowser()
  expect(isBrowser()).toBe(false)
})
