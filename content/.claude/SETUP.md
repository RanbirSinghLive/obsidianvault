# Essay Pipeline Setup

## Prerequisites

1. **Claude Code CLI** installed and authenticated
   ```bash
   # Check if installed
   claude --version

   # If not, install via npm
   npm install -g @anthropic-ai/claude-code
   ```

2. **Permissions configured** (first run will prompt, or use `--dangerously-skip-permissions` for automation)

---

## Quick Start

### Manual Run
```bash
cd /path/to/quartz/content
./run-essay-pipeline.sh
```

### Cron Setup (Daily at 6am)

1. Open crontab:
   ```bash
   crontab -e
   ```

2. Add this line (adjust paths):
   ```
   0 6 * * * /Users/ranbir/path/to/quartz/content/run-essay-pipeline.sh >> /Users/ranbir/logs/essay-pipeline.log 2>&1
   ```

3. Create log directory:
   ```bash
   mkdir -p ~/logs
   ```

### Launchd Setup (macOS alternative to cron)

Create `~/Library/LaunchAgents/com.essay-pipeline.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.essay-pipeline</string>
    <key>ProgramArguments</key>
    <array>
        <string>/path/to/quartz/content/run-essay-pipeline.sh</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>6</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>
    <key>StandardOutPath</key>
    <string>/Users/ranbir/logs/essay-pipeline.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/ranbir/logs/essay-pipeline-error.log</string>
</dict>
</plist>
```

Then load it:
```bash
launchctl load ~/Library/LaunchAgents/com.essay-pipeline.plist
```

---

## Kanban Integration

The pipeline includes a Kanban board at `10 Workbench/Essay Pipeline.md`.

### Required Plugin

- **Kanban** - For the board itself

### How It Works

**You control the workflow** by manually dragging cards between columns:

1. Create files in `10 Workbench/` with your ideas
2. Add wiki links (`[[Filename]]`) to the Ideas column on the Kanban
3. Pipeline runs → agents process files based on their column position
4. When ready for the next stage, **you drag the card** to the next column
5. Pipeline runs again → next agent processes the file

**The Kanban column position is the single source of truth.** No `status:` field syncing needed.

### Column-to-Agent Mapping

| Kanban Column | Agent | What It Does |
|---------------|-------|--------------|
| Ideas | Idea Agent | Brainstorms concepts, generates questions to explore |
| Research | Research Agent | Finds sources and background information |
| Drafting | Draft Agent | Writes first draft based on research |
| Editing | Edit Agent | Provides editorial feedback and suggestions |
| Publish | Publish Agent | Prepares publication checklist |

### Rebuild Kanban Script

Use the Templater script to rebuild the Kanban while preserving file positions:

| Script | What it does |
|--------|--------------|
| `Rebuild Kanban From Essays.md` | Scans Workbench folder and adds new files to Kanban (preserves existing positions) |

**Setup:** Templater settings → Template Hotkeys (optional)

---

## How to Use

### 1. Create a New Essay

Two ways to start:

**Option A: Direct creation**
- Create a new file in `10 Workbench/` with your initial notes
- Add `[[Filename]]` to the Ideas column on the Kanban
- Pipeline will add brainstorming when it runs

**Option B: Use template**
- Use the template in `90 Templates/Essay Template.md`
- Create file in `10 Workbench/`
- Add to Kanban Ideas column

### 2. Pipeline Stages

| Column | Agent | Callout Added | What It Does |
|--------|-------|---------------|--------------|
| Ideas | Idea Agent | `[!idea]` | Brainstorms related concepts and questions |
| Research | Research Agent | `[!research]` | Finds sources and background info |
| Drafting | Draft Agent | `[!draft]` | Writes first draft |
| Editing | Edit Agent | `[!edit]` | Reviews and suggests improvements |
| Publish | Publish Agent | `[!publish]` | Prepares publication checklist |

### 3. Moving Through Stages

1. Pipeline runs and processes files in their current columns
2. Review the AI-generated callout
3. **When ready**, manually drag the card to the next column
4. Next pipeline run will process it with the next agent

**You control when files move forward.** Agents only add content, they don't move cards.

### 4. Review AI Work

After each run, check the callouts:
- Incorporate what's useful
- Delete callouts you don't want
- The pipeline won't recreate deleted callouts (it checks for existence)

### 5. Move Backwards or Skip Stages

Want to redo a stage or skip ahead?
1. Delete the relevant callout (e.g., delete `[!draft]` to regenerate)
2. Drag the card to the desired column
3. Pipeline will process it according to its new column position

---

## Customization

### Change Target Folder
Edit `Essay Pipeline - SKILL.md` in `90 Templates/Agents/` and `run-essay-pipeline.sh` to point to a different folder.

### Add Custom Callout Types
Edit the agent files in `90 Templates/Agents/` to add new callout types.

### Adjust Agent Behavior
Each agent file (`Research Agent.md`, `Draft Agent.md`, etc.) in `90 Templates/Agents/` has detailed instructions you can modify.

---

## Troubleshooting

**Pipeline doesn't run:**
- Check Claude Code is installed: `claude --version`
- Check script is executable: `chmod +x run-essay-pipeline.sh`
- Check logs: `cat .claude/pipeline-runs.log`

**Agent overwrites callouts:**
- This shouldn't happen. Check the SKILL.md detection logic.
- Ensure callouts use exact format: `> [!idea]`, `> [!research]`, etc. (with the `>` prefix)

**Files not being processed:**
- Check that files are linked in the Kanban with `[[double brackets]]`
- Plain text items without links won't be processed
- Check the pipeline reads the Kanban file correctly

**Wrong voice in drafts:**
- Add more of your writing samples to the essay's Notes section
- Edit `Draft Agent.md` to emphasize voice matching

---

## File Structure

```
quartz/content/
├── .claude/
│   ├── run-essay-pipeline.md  # Prompt file
│   ├── pipeline-runs.log      # Run history
│   └── SETUP.md               # This file
├── 10 Workbench/
│   ├── *.md                   # Your essays live here
│   └── Essay Pipeline.md      # Kanban board
├── 90 Templates/
│   ├── Essay Template.md      # Template for new essays
│   ├── Agents/
│   │   ├── Essay Pipeline - SKILL.md  # Orchestrator
│   │   ├── Idea Agent.md              # Ideas column
│   │   ├── Research Agent.md          # Research column
│   │   ├── Draft Agent.md             # Drafting column
│   │   ├── Edit Agent.md              # Editing column
│   │   └── Publish Agent.md           # Publish column
│   └── Templater/
│       ├── Sync Essay Status From Kanban.md  # DEPRECATED
│       └── Rebuild Kanban From Essays.md
└── run-essay-pipeline.sh      # Runner script
```
