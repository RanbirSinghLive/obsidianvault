import { QuartzTransformerPlugin } from "../types"
import { PluggableList } from "unified"
import { visit } from "unist-util-visit"
import { Element, Root as HtmlRoot, ElementContent } from "hast"
import { JSResource, CSSResource } from "../../util/resources"
// @ts-ignore
import sidenoteScript from "../../components/scripts/sidenote.inline"
import sidenoteStyle from "../../components/styles/sidenote.inline.scss"

export interface Options {
  // Hide the original footnotes section on desktop
  hideFootnotes: boolean
}

const defaultOptions: Options = {
  hideFootnotes: true,
}

export const Sidenotes: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "Sidenotes",
    htmlPlugins(): PluggableList {
      return [
        () => {
          return (tree: HtmlRoot, _file) => {
            // Step 1: Find the footnotes section and extract content
            const footnoteContent: Map<string, ElementContent[]> = new Map()

            visit(tree, "element", (node: Element) => {
              // Find <section data-footnotes class="footnotes">
              if (
                node.tagName === "section" &&
                node.properties?.dataFootnotes !== undefined
              ) {
                // Extract footnote definitions from the <ol>
                visit(node, "element", (liNode: Element) => {
                  if (liNode.tagName === "li" && liNode.properties?.id) {
                    const id = String(liNode.properties.id)
                    // id format: "user-content-fn-X"
                    const fnId = id.replace("user-content-fn-", "")

                    // Clone children, removing back-reference links
                    const content = (liNode.children as ElementContent[]).filter(
                      (child) =>
                        !(
                          child.type === "element" &&
                          child.tagName === "a" &&
                          child.properties?.dataFootnoteBackref !== undefined
                        )
                    )

                    // Also filter out back-references nested in paragraphs
                    const cleanedContent = content.map((child) => {
                      if (child.type === "element" && child.tagName === "p") {
                        return {
                          ...child,
                          children: (child.children as ElementContent[]).filter(
                            (pChild) =>
                              !(
                                pChild.type === "element" &&
                                pChild.tagName === "a" &&
                                pChild.properties?.dataFootnoteBackref !== undefined
                              )
                          ),
                        }
                      }
                      return child
                    })

                    footnoteContent.set(fnId, cleanedContent as ElementContent[])
                  }
                })

                // Add class to hide footnotes section on desktop
                if (opts.hideFootnotes) {
                  node.properties = {
                    ...node.properties,
                    className: [
                      ...((node.properties?.className as string[]) ?? []),
                      "sidenote-hidden-footnotes",
                    ],
                  }
                }
              }
            })

            // Step 2: Transform inline footnote references
            visit(tree, "element", (node: Element, index, parent) => {
              // Find <sup> containing footnote reference <a>
              if (node.tagName === "sup" && parent && typeof index === "number") {
                const anchor = (node.children as Element[]).find(
                  (child): child is Element =>
                    child.type === "element" &&
                    child.tagName === "a" &&
                    child.properties?.dataFootnoteRef !== undefined
                )

                if (anchor) {
                  const href = String(anchor.properties?.href ?? "")
                  // href format: "#user-content-fn-X"
                  const fnId = href.replace("#user-content-fn-", "")
                  const content = footnoteContent.get(fnId)

                  if (content) {
                    // Create sidenote wrapper
                    const sidenoteWrapper: Element = {
                      type: "element",
                      tagName: "span",
                      properties: {
                        className: ["sidenote-wrapper"],
                      },
                      children: [
                        // The reference marker (clickable label)
                        {
                          type: "element",
                          tagName: "label",
                          properties: {
                            htmlFor: `sidenote-toggle-${fnId}`,
                            className: ["sidenote-number"],
                          },
                          children: [node], // Keep original sup content
                        },
                        // Hidden checkbox for mobile toggle
                        {
                          type: "element",
                          tagName: "input",
                          properties: {
                            type: "checkbox",
                            id: `sidenote-toggle-${fnId}`,
                            className: ["sidenote-toggle"],
                          },
                          children: [],
                        },
                        // The sidenote content
                        {
                          type: "element",
                          tagName: "span",
                          properties: {
                            className: ["sidenote"],
                            id: `sidenote-${fnId}`,
                          },
                          children: [
                            {
                              type: "element",
                              tagName: "span",
                              properties: { className: ["sidenote-number"] },
                              children: [{ type: "text", value: fnId }],
                            },
                            ...content,
                          ],
                        },
                      ],
                    }

                    // Replace the sup with the sidenote wrapper
                    ;(parent as Element).children.splice(index, 1, sidenoteWrapper)
                  }
                }
              }
            })
          }
        },
      ]
    },
    externalResources() {
      const js: JSResource[] = [
        {
          script: sidenoteScript,
          loadTime: "afterDOMReady",
          contentType: "inline",
        },
      ]
      const css: CSSResource[] = [
        {
          content: sidenoteStyle,
          inline: true,
        },
      ]
      return { js, css }
    },
  }
}
