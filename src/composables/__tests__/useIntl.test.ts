import { beforeEach, describe, expect, it, vi } from 'vitest'
import useIntl, { detectBrowserLanguage } from '../useIntl'

describe('useIntl', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    // Reset navigator.language mock
    vi.clearAllMocks()
  })

  describe('formatMessage', () => {
    it('should format messages in English', () => {
      const { formatMessage } = useIntl()
      expect(formatMessage('header.title')).toBe('Painting')
      expect(formatMessage('header.subtitle')).toBe('Jerzy Zborowski')
    })

    it('should format messages with variables', () => {
      const { formatMessage } = useIntl()
      const result = formatMessage('footer.copyright', { year: 2024 })
      expect(result).toContain('2024')
      expect(result).toContain('Jerzy Zborowski')
    })

    it('should handle Polish translations after switching locale', () => {
      const { formatMessage, switchLocale } = useIntl()

      switchLocale('pl_PL')

      expect(formatMessage('header.title')).toBe('Malarstwo')
      expect(formatMessage('gallery.title')).toBe('Galeria')
    })
  })

  describe('locale detection', () => {
    it('should detect Polish browser language with pl-PL', () => {
      Object.defineProperty(window.navigator, 'language', {
        value: 'pl-PL',
        configurable: true,
      })

      const result = detectBrowserLanguage()
      expect(result).toBe('pl_PL')
    })

    it('should detect Polish browser language with pl', () => {
      Object.defineProperty(window.navigator, 'language', {
        value: 'pl',
        configurable: true,
      })

      const result = detectBrowserLanguage()
      expect(result).toBe('pl_PL')
    })

    it('should default to English for en-US browser', () => {
      Object.defineProperty(window.navigator, 'language', {
        value: 'en-US',
        configurable: true,
      })

      const result = detectBrowserLanguage()
      expect(result).toBe('en_US')
    })

    it('should default to English for other languages', () => {
      Object.defineProperty(window.navigator, 'language', {
        value: 'de-DE',
        configurable: true,
      })

      const result = detectBrowserLanguage()
      expect(result).toBe('en_US')
    })

    it('should use navigator.languages fallback', () => {
      Object.defineProperty(window.navigator, 'language', {
        value: undefined,
        configurable: true,
      })
      Object.defineProperty(window.navigator, 'languages', {
        value: ['pl-PL', 'en-US'],
        configurable: true,
      })

      const result = detectBrowserLanguage()
      expect(result).toBe('pl_PL')
    })
  })

  describe('switchLocale', () => {
    it('should switch from English to Polish', () => {
      const { locale, switchLocale, formatMessage } = useIntl()

      switchLocale('pl_PL')

      expect(locale.value).toBe('pl_PL')
      expect(formatMessage('header.title')).toBe('Malarstwo')
    })

    it('should switch from Polish to English', () => {
      const { locale, switchLocale, formatMessage } = useIntl()

      switchLocale('pl_PL')
      expect(locale.value).toBe('pl_PL')

      switchLocale('en_US')
      expect(locale.value).toBe('en_US')
      expect(formatMessage('header.title')).toBe('Painting')
    })

    it('should persist locale choice to localStorage', () => {
      const { switchLocale } = useIntl()

      switchLocale('pl_PL')

      expect(localStorage.getItem('locale')).toBe('pl_PL')

      switchLocale('en_US')

      expect(localStorage.getItem('locale')).toBe('en_US')
    })
  })

  describe('translation keys', () => {
    it('should have all required header translations', () => {
      const { formatMessage } = useIntl()

      expect(formatMessage('header.title')).toBeTruthy()
      expect(formatMessage('header.subtitle')).toBeTruthy()
    })

    it('should have all required bio translations', () => {
      const { formatMessage } = useIntl()

      expect(formatMessage('bio.intro')).toBeTruthy()
      expect(formatMessage('bio.groupExhibitions')).toBeTruthy()
      expect(formatMessage('bio.awards')).toBeTruthy()
    })

    it('should have all exhibition translations', () => {
      const { formatMessage } = useIntl()

      for (let i = 1; i <= 6; i++) {
        expect(formatMessage(`bio.exhibitions.${i}`)).toBeTruthy()
      }
    })

    it('should have all award translations', () => {
      const { formatMessage } = useIntl()

      for (let i = 1; i <= 3; i++) {
        expect(formatMessage(`bio.awards.${i}`)).toBeTruthy()
      }
    })

    it('should have footer translations', () => {
      const { formatMessage } = useIntl()

      expect(formatMessage('footer.copyright', { year: 2024 })).toBeTruthy()
      expect(formatMessage('footer.madeBy')).toBeTruthy()
    })

    it('should have gallery translation', () => {
      const { formatMessage } = useIntl()

      expect(formatMessage('gallery.title')).toBeTruthy()
    })
  })

  describe('locale format conversion', () => {
    it('should convert locale format for Intl API', () => {
      const { switchLocale, formatMessage } = useIntl()

      // Should not throw error with underscore format
      expect(() => switchLocale('en_US')).not.toThrow()
      expect(() => switchLocale('pl_PL')).not.toThrow()

      // Should still work correctly
      switchLocale('pl_PL')
      expect(formatMessage('header.title')).toBe('Malarstwo')
    })
  })
})
