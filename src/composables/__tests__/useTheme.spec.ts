/* eslint no-global-assign: 0 */
import { afterEach, expect, test, vi } from 'vitest'
import useTheme from '../useTheme'

const mockMatches = vi.fn()
const mockSetItem = vi.fn()
const mockGetItem = vi.fn()
window.matchMedia = () =>
  ({
    matches: mockMatches(),
  } as MediaQueryList)
window.localStorage = {
  setItem: () => mockSetItem(),
  getItem: () => mockGetItem(),
} as unknown as Storage

afterEach(() => {
  vi.resetAllMocks()
})

test('loadTheme: set based on media query', () => {
  mockMatches.mockReturnValue(true)
  const { loadTheme } = useTheme()
  loadTheme()
  expect(document.documentElement.classList.value).toEqual('dark')
})

test('loadTheme: set based on local storage', () => {
  mockGetItem.mockReturnValue('dark')
  const { loadTheme } = useTheme()
  loadTheme()
  expect(document.documentElement.classList.value).toEqual('dark')
})

test('loadTheme: can remove dark class', () => {
  const { loadTheme } = useTheme()
  loadTheme()
  expect(document.documentElement.classList.value).toEqual('')
})

test('switchTheme: can add dark class', () => {
  const { switchTheme } = useTheme()
  switchTheme()
  expect(document.documentElement.classList.value).toEqual('dark')
})

test('switchTheme: can remove dark class', () => {
  document.documentElement.classList.add('dark')
  const { switchTheme } = useTheme()
  switchTheme()
  expect(document.documentElement.classList.value).toEqual('')
})
