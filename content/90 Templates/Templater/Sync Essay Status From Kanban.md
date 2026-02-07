<%*
/**
 * DEPRECATED - Sync Essay Status From Kanban
 *
 * ⚠️ This script is no longer needed as of 2026-02-07.
 * 
 * The pipeline now reads column positions directly from the Kanban board.
 * There is no more `status:` field to sync - the Kanban column position
 * is the single source of truth.
 * 
 * User workflow:
 * - Drag cards between columns manually when ready
 * - Agents process files based on their current column
 * - No syncing needed
 * 
 * This file is kept for reference only.
 * ---
 * 
 * OLD DESCRIPTION:
 * This script reads the Essay Pipeline Kanban board and updates
 * each linked essay's frontmatter status to match its column.
 *
 * Run this manually or bind to a hotkey.
 * Templater Settings > Template Hotkeys
 */

new Notice("This script is deprecated. The pipeline now reads Kanban columns directly.")
tR = ""

/* OLD CODE ARCHIVED BELOW

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
  // Try to find the file (with or without .md extension, in Workbench folder)
  let file = app.vault.getAbstractFileByPath(`10 Workbench/${update.name}.md`)
  if (!file) {
    file = app.vault.getAbstractFileByPath(`10 Workbench/${update.name}`)
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

END OF ARCHIVED CODE */
%>
