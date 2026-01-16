// @ts-ignore
import pageColorScript from "./scripts/pageColor.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const PageColor: QuartzComponent = (_props: QuartzComponentProps) => {
  // This component renders nothing, it just loads the page color script
  return null
}

PageColor.afterDOMLoaded = pageColorScript

export default (() => PageColor) satisfies QuartzComponentConstructor
