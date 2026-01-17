import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import notFoundStyle from "../styles/notFound.scss"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="not-found-page">
      <div class="glitch-container">
        <h1 class="glitch-text" data-text="404">404</h1>
      </div>
      <p class="not-found-title">{i18n(cfg.locale).pages.error.notFound}</p>
      <p class="not-found-subtitle">{i18n(cfg.locale).pages.error.subtitle}</p>
      <a href={baseDir} class="not-found-link">
        {i18n(cfg.locale).pages.error.home}
      </a>
    </article>
  )
}

NotFound.css = notFoundStyle

export default (() => NotFound) satisfies QuartzComponentConstructor
