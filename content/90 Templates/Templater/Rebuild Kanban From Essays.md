<%*
/**
 * Rebuild Kanban From Essays
 *
 * Scans all essays in 10 Workbench/ and rebuilds
 * the Kanban board, preserving file positions where possible.
 *
 * Files that are already on the Kanban stay in their columns.
 * New files are added to Ideas column.
 */

const essaysFolder = "10 Workbench"
const kanbanPath = "10 Workbench/Essay Pipeline.md"

// First, read the current Kanban to see where files are
const kanbanFile = app.vault.getAbstractFileByPath(kanbanPath)
let existingPositions = {}

if (kanbanFile) {
  const content = await app.vault.read(kanbanFile)
  const lines = content.split("\n")
  let currentColumn = null
  
  const columnNames = {
    "ideas": "idea",
    "research": "research",
    "drafting": "draft",
    "editing": "edit",
    "publish": "publish"
  }
  
  for (const line of lines) {
    // Detect column headers
    const headerMatch = line.match(/^## (.+)$/i)
    if (headerMatch) {
      const header = headerMatch[1].toLowerCase().trim()
      currentColumn = columnNames[header] || null
      continue
    }
    
    // Detect wiki links in list items
    if (currentColumn && line.includes("[[")) {
      const linkMatch = line.match(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/)
      if (linkMatch) {
        const linkName = linkMatch[1]
        existingPositions[linkName] = currentColumn
      }
    }
  }
}

// Get all markdown files, excluding Kanban files
const folder = app.vault.getAbstractFileByPath(essaysFolder)
if (!folder || !folder.children) {
  new Notice("Essays folder not found: " + essaysFolder)
  return
}

const essays = folder.children.filter(f => 
  f.extension === "md" && 
  f.basename !== "Essay Pipeline" && 
  f.basename !== "Essay Pipe"
)

// Group essays by their current column position (or "idea" if new)
const columns = {
  idea: [],
  research: [],
  draft: [],
  edit: [],
  publish: []
}

for (const file of essays) {
  const cache = app.metadataCache.getFileCache(file)
  const title = cache?.frontmatter?.title || file.basename
  
  // Check if file already exists in Kanban
  const existingColumn = existingPositions[file.basename]
  
  if (existingColumn && columns[existingColumn]) {
    // Keep in existing column
    columns[existingColumn].push({ name: file.basename, title: title })
  } else {
    // New file, add to Ideas
    columns.idea.push({ name: file.basename, title: title })
  }
}

// Build Kanban content
const buildColumn = (items) => {
  if (items.length === 0) return "- [ ]\n"
  return items.map(item => `- [ ] [[${item.name}|${item.title}]]`).join("\n") + "\n"
}

const kanbanContent = `---

kanban-plugin: basic

---

## Ideas

${buildColumn(columns.idea)}

## Research

${buildColumn(columns.research)}

## Drafting

${buildColumn(columns.draft)}

## Editing

${buildColumn(columns.edit)}

## Publish

${buildColumn(columns.publish)}

%% kanban:settings
\`\`\`
{"kanban-plugin":"basic","lane-width":250,"show-checkboxes":false,"hide-tags-in-title":true}
\`\`\`
%%
`

// Write the Kanban file
if (kanbanFile) {
  await app.vault.modify(kanbanFile, kanbanContent)
  new Notice(`Rebuilt Kanban with ${essays.length} essays`)
} else {
  await app.vault.create(kanbanPath, kanbanContent)
  new Notice(`Created Kanban with ${essays.length} essays`)
}

tR = ""
%>
