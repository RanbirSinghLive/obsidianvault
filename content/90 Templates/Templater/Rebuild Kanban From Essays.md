<%*
/**
 * Rebuild Kanban From Essays
 *
 * Scans all essays in 10 Workbench/Essays/ and rebuilds
 * the Kanban board based on their frontmatter status.
 *
 * Useful after the pipeline runs and updates statuses.
 */

const essaysFolder = "10 Workbench/Essays"
const kanbanPath = "10 Workbench/Essay Pipeline.md"

// Get all essay files
const folder = app.vault.getAbstractFileByPath(essaysFolder)
if (!folder || !folder.children) {
  new Notice("Essays folder not found: " + essaysFolder)
  return
}

const essays = folder.children.filter(f => f.extension === "md")

// Group essays by status
const columns = {
  idea: [],
  research: [],
  draft: [],
  edit: [],
  published: []
}

for (const file of essays) {
  const cache = app.metadataCache.getFileCache(file)
  const status = cache?.frontmatter?.status || "idea"
  const title = cache?.frontmatter?.title || file.basename

  if (columns[status]) {
    columns[status].push({ name: file.basename, title: title })
  } else {
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

## Published

${buildColumn(columns.published)}

%% kanban:settings
\`\`\`
{"kanban-plugin":"basic","lane-width":250,"show-checkboxes":false,"hide-tags-in-title":true}
\`\`\`
%%
`

// Write the Kanban file
const kanbanFile = app.vault.getAbstractFileByPath(kanbanPath)
if (kanbanFile) {
  await app.vault.modify(kanbanFile, kanbanContent)
  new Notice(`Rebuilt Kanban with ${essays.length} essays`)
} else {
  await app.vault.create(kanbanPath, kanbanContent)
  new Notice(`Created Kanban with ${essays.length} essays`)
}

tR = ""
%>
