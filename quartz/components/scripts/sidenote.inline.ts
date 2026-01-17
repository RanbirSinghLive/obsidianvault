function setupSidenotes() {
  const sidenotes = document.querySelectorAll(".sidenote") as NodeListOf<HTMLElement>

  // On desktop, handle overlapping sidenotes
  if (window.matchMedia("(min-width: 1200px)").matches) {
    const positions: { top: number; bottom: number; element: HTMLElement }[] = []

    sidenotes.forEach((sidenote) => {
      // Reset any previous offset
      sidenote.style.marginTop = ""

      const rect = sidenote.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const absoluteTop = rect.top + scrollTop
      const absoluteBottom = absoluteTop + rect.height

      // Check for overlaps with previously positioned sidenotes
      let offset = 0
      for (const pos of positions) {
        if (absoluteTop < pos.bottom && absoluteBottom > pos.top) {
          // Overlap detected, push this sidenote down
          offset = Math.max(offset, pos.bottom - absoluteTop + 10) // 10px gap
        }
      }

      if (offset > 0) {
        sidenote.style.marginTop = `${offset}px`
      }

      // Record final position
      const finalTop = absoluteTop + offset
      positions.push({
        top: finalTop,
        bottom: finalTop + rect.height,
        element: sidenote,
      })
    })
  }

  // Handle toggle functionality for mobile/tablet
  const toggles = document.querySelectorAll(".sidenote-toggle") as NodeListOf<HTMLInputElement>

  toggles.forEach((toggle) => {
    const handler = () => {
      // Close other open sidenotes when opening a new one
      if (toggle.checked) {
        toggles.forEach((otherToggle) => {
          if (otherToggle !== toggle && otherToggle.checked) {
            otherToggle.checked = false
          }
        })
      }
    }

    toggle.addEventListener("change", handler)
    window.addCleanup(() => toggle.removeEventListener("change", handler))
  })

  // Handle click outside to close sidenotes on mobile
  const closeHandler = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest(".sidenote-wrapper")) {
      toggles.forEach((toggle) => {
        toggle.checked = false
      })
    }
  }

  document.addEventListener("click", closeHandler)
  window.addCleanup(() => document.removeEventListener("click", closeHandler))
}

// Run on initial load and after SPA navigation
document.addEventListener("nav", setupSidenotes)
