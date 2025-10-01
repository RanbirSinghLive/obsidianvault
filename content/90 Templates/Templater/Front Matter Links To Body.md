<%*
const frontmatter = tp.frontmatter
let noteLinks = []

for (const [key, value] of Object.entries(frontmatter)) {
  if (Array.isArray(value)) {
    for (let v of value) {
      if (typeof v === "string" && v.match(/\[\[.*\]\]/)) {
        const cleaned = v.replace(/^["']|["']$/g, "").replace(/\[\[|\]\]/g, "").trim()
        noteLinks.push(`[[${cleaned}]]`)
      }
    }
  }
}

noteLinks = [...new Set(noteLinks)]  // Remove duplicates

tR = noteLinks.join("\n")
%>
