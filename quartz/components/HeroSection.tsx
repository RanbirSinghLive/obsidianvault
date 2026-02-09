import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import heroSectionStyle from "./styles/heroSection.scss"

interface HeroCard {
  number: string
  title: string
  description: string
  link: string
}

interface HeroSectionOptions {
  title?: string
  subtitle?: string
  cards?: HeroCard[]
}

const defaultCards: HeroCard[] = [
  {
    number: "01",
    title: "The Flamingos Fly",
    description: "A novel about a family in Montreal",
    link: "/Cards/The-Flamingos-Fly",
  },
  {
    number: "02",
    title: "AI Essays",
    description: "Essays on the intersection of AI, creativity, and the future of work",
    link: "/tags/AI",
  },
  {
    number: "03",
    title: "Newsletter",
    description: "Essays on writing & creativity",
    link: "/Cards/Newsletter",
  },
  {
    number: "04",
    title: "Essays",
    description: "Long-form thoughts & ideas",
    link: "/Cards",
  },
  {
    number: "05",
    title: "About Me",
    description: "Writer, aviation professional",
    link: "/Cards/Ranbir-Singh",
  },
  {
    number: "06",
    title: "Digital Garden",
    description: "How this site works",
    link: "/Cards/This-is-my-digital-garden",
  },
]

export default ((opts?: HeroSectionOptions) => {
  const title = opts?.title ?? "Welcome"
  const subtitle = opts?.subtitle ?? "A digital garden for writing, ideas, and creative work"
  const cards = opts?.cards ?? defaultCards

  const HeroSection: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <section class={classNames(displayClass, "hero-section")}>
        <div class="hero-header">
          <h1 class="hero-title">{title}</h1>
          <p class="hero-subtitle">{subtitle}</p>
        </div>
        <div class="hero-cards">
          {cards.map((card) => (
            <a href={card.link} class="hero-card">
              <span class="card-number">{card.number}</span>
              <h2 class="card-title">{card.title}</h2>
              <p class="card-description">{card.description}</p>
            </a>
          ))}
        </div>
      </section>
    )
  }

  HeroSection.css = heroSectionStyle

  return HeroSection
}) satisfies QuartzComponentConstructor
