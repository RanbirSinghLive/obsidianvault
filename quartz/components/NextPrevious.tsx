import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/nextprevious.scss"
import { resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"
import { trieFromAllFiles } from "../util/ctx"

interface NextPreviousOptions {
  /**
   * Hide navigation when no siblings exist
   */
  hideWhenEmpty: boolean
  /**
   * Folders where navigation should appear (empty array means all folders)
   */
  includeFolders: string[]
}

const defaultOptions: NextPreviousOptions = {
  hideWhenEmpty: true,
  includeFolders: ["Cards"],
}

export default ((opts?: Partial<NextPreviousOptions>) => {
  const options: NextPreviousOptions = { ...defaultOptions, ...opts }

  const NextPrevious: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
    ctx,
  }: QuartzComponentProps) => {
    const trie = (ctx.trie ??= trieFromAllFiles(allFiles))
    const slugParts = fileData.slug!.split("/")

    // Check if the current page is in one of the included folders
    if (options.includeFolders.length > 0) {
      const isInIncludedFolder = options.includeFolders.some((folder) =>
        fileData.slug!.startsWith(`${folder}/`),
      )
      if (!isInIncludedFolder) {
        return null
      }
    }

    // Get parent folder node
    const parentPath = slugParts.slice(0, -1)
    const parentNode = trie.findNode(parentPath)

    if (!parentNode) {
      return null
    }

    // Get all non-folder siblings (actual pages)
    const siblings = parentNode.children
      .filter((child) => !child.isFolder && child.data)
      .sort((a, b) => {
        const aTitle = a.displayName.toLowerCase()
        const bTitle = b.displayName.toLowerCase()
        return aTitle.localeCompare(bTitle)
      })

    // Find current page index
    const currentIndex = siblings.findIndex((child) => child.slug === fileData.slug)

    if (currentIndex === -1 || siblings.length <= 1) {
      return options.hideWhenEmpty ? null : <div />
    }

    const previousPage = currentIndex > 0 ? siblings[currentIndex - 1] : null
    const nextPage = currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null

    if (!previousPage && !nextPage) {
      return options.hideWhenEmpty ? null : <div />
    }

    return (
      <nav class={classNames(displayClass, "nextprevious-container")} aria-label="page navigation">
        <div class="nextprevious-wrapper">
          {previousPage ? (
            <a href={resolveRelative(fileData.slug!, previousPage.slug)} class="previous">
              <span class="arrow">←</span>
              <div class="link-content">
                <span class="label">Previous</span>
                <span class="page-title">{previousPage.displayName}</span>
              </div>
            </a>
          ) : (
            <div class="spacer" />
          )}

          {nextPage ? (
            <a href={resolveRelative(fileData.slug!, nextPage.slug)} class="next">
              <div class="link-content">
                <span class="label">Next</span>
                <span class="page-title">{nextPage.displayName}</span>
              </div>
              <span class="arrow">→</span>
            </a>
          ) : (
            <div class="spacer" />
          )}
        </div>
      </nav>
    )
  }

  NextPrevious.css = style

  return NextPrevious
}) satisfies QuartzComponentConstructor
