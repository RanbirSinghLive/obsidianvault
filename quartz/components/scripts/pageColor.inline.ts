const stringToHue = (str: string): number => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash) % 360
}

const applyPageColor = () => {
  const slug = window.location.pathname
  const hue = stringToHue(slug)
  const root = document.documentElement
  const isDark = root.getAttribute("saved-theme") === "dark"

  // Very subtle: 5% saturation, high lightness
  const lightBg = `hsl(${hue}, 5%, 98%)`
  const darkBg = `hsl(${hue}, 4%, 10%)`

  root.style.setProperty("--light", isDark ? darkBg : lightBg)
}

// Apply on navigation (SPA transitions)
document.addEventListener("nav", applyPageColor)

// Also run on theme change
const observer = new MutationObserver(applyPageColor)
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["saved-theme"],
})

// Initial application
applyPageColor()
