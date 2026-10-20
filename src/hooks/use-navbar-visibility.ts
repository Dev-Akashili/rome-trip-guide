import { useEffect, useState } from "react"

const SCROLL_THRESHOLD = 14

export function useNavbarVisibility() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return true
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.scrollY <= SCROLL_THRESHOLD
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) {
      return
    }

    let lastY = window.scrollY
    let ticking = false

    const updateVisibility = () => {
      const currentY = window.scrollY

      if (currentY <= SCROLL_THRESHOLD) {
        setIsVisible(true)
      } else if (Math.abs(currentY - lastY) > SCROLL_THRESHOLD) {
        setIsVisible(currentY < lastY)
        lastY = currentY
      }

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return isVisible
}
