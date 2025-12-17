import { useIntersectionObserver } from '@vueuse/core'

const imgOptions = {
  threshold: 0,
  rootMargin: '0px 0px 400px 0px',
}

const preloadImage = (img: HTMLImageElement) => {
  const src = img.getAttribute('data-src')
  if (!src) {
    return
  }

  img.src = src
  img.classList.remove('opacity-0')
  img.removeAttribute('data-src')
}

const loadImages = () => {
  const images = document.querySelectorAll(
    '[data-src]',
  ) as NodeListOf<HTMLImageElement>

  images.forEach((img) => {
    useIntersectionObserver(
      img,
      (entries, observerElement) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          } else {
            preloadImage(entry.target as HTMLImageElement)
            observerElement.unobserve(entry.target)
          }
        })
      },
      imgOptions,
    )
  })
}

export default function () {
  return {
    loadImages,
  }
}
