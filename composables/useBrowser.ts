const isBrowser = () => typeof window !== 'undefined'

export default function () {
  return {
    isBrowser,
  }
}
