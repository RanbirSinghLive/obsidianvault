import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ranbir",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "00 Private",
      "10 Workbench",
      "40 Reference",
      "90 Templates"
      // 'Media' is intentionally not ignored so it uploads, but will be hidden from navigation elsewhere
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Source Serif 4",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e8e4e0",
          gray: "#9a9590",
          darkgray: "#3d3a38",
          dark: "#1a1816",
          secondary: "#2d5a7b",
          tertiary: "#5b8a72",
          highlight: "rgba(45, 90, 123, 0.08)",
          textHighlight: "#f4d35e55",
        },
        darkMode: {
          light: "#1a1816",
          lightgray: "#2d2a28",
          gray: "#5a5652",
          darkgray: "#d4d0cc",
          dark: "#f5f3f0",
          secondary: "#7ba3c4",
          tertiary: "#8fba9f",
          highlight: "rgba(123, 163, 196, 0.12)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time (also requires network to fetch fonts)
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
