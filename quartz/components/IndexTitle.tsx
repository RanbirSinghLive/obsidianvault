import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const IndexTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title ?? "Welcome"
  return (
    <h1 class={classNames(displayClass, "index-title")}>
      {title}
    </h1>
  )
}

IndexTitle.css = `
.index-title {
  font-size: 2.5rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => IndexTitle) satisfies QuartzComponentConstructor 