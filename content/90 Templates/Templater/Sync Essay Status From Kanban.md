<%*
/**
 * Sync Essay Status From Kanban
 *
 * This script reads the Essay Pipeline Kanban board and updates
 * each linked essay's frontmatter status to match its column.
 *
 * Run this manually or bind to a hotkey.
 * Templater Settings > Template Hotkeys
 */

const kanbanPath = "10 Workbench/Essay Pipeline.md"
const kanbanFile = app.vault.getAbstractFileByPath(kanbanPath)

if (!kanbanFile) {
  new Notice("Kanban file not found: " + kanbanPath)
  return
}

const content = await app.vault.read(kanbanFile)

// Map Kanban column headers to frontmatter status values
const columnToStatus = {
  "ideas": "idea",
  "research": "research",
  "drafting": "draft",
  "editing": "edit",
  "published": "published"
}

// Parse Kanban to find which essays are in which columns
const lines = content.split("\n")
let currentColumn = null
let updates = []

for (const line of lines) {
  // Detect column headers (## Column Name)
  const headerMatch = line.match(/^## (.+)$/i)
  if (headerMatch) {
    const header = headerMatch[1].toLowerCase().trim()
    currentColumn = columnToStatus[header] || null
    continue
  }

  // Detect wiki links in list items
  if (currentColumn && line.includes("[[")) {
    const linkMatch = line.match(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/)
    if (linkMatch) {
      const linkName = linkMatch[1]
      updates.push({ name: linkName, status: currentColumn })
    }
  }
}

// Update each essay's frontmatter
let updatedCount = 0
for (const update of updates) {
  // Try to find the file (with or without .md extension, in Essays folder)
  let file = app.vault.getAbstractFileByPath(`10 Workbench/Essays/${update.name}.md`)
  if (!file) {
    file = app.vault.getAbstractFileByPath(`10 Workbench/Essays/${update.name}`)
  }
  if (!file) {
    // Try searching by name in case it's elsewhere
    const allFiles = app.vault.getMarkdownFiles()
    file = allFiles.find(f => f.basename === update.name)
  }

  if (file) {
    await app.fileManager.processFrontMatter(file, (fm) => {
      if (fm.status !== update.status) {
        const oldStatus = fm.status || "none"
        fm.status = update.status
        fm.updated = tp.date.now("YYYY-MM-DD")

        // Add to agent log
        if (!fm.agent_log) fm.agent_log = []
        fm.agent_log.push(`${tp.date.now("YYYY-MM-DD")} kanban-sync: Status changed from ${oldStatus} to ${update.status}`)

        updatedCount++
      }
    })
  }
}

new Notice(`Synced ${updatedCount} essay(s) from Kanban`)
tR = ""
%>
