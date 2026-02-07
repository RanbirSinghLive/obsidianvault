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

### Automatic Sync (Pipeline → Kanban)

The pipeline **automatically rebuilds the Kanban** after processing essays. No manual step needed.

When the pipeline runs:
1. Essays advance stages, frontmatter updates
2. Pipeline rebuilds `Essay Pipeline.md` from scratch
3. Cards appear in correct columns based on `status:`

### Manual Sync (Kanban → Essays)

If you drag cards manually on the Kanban, use the Templater script to sync back:

| Script | Hotkey suggestion | What it does |
|--------|-------------------|--------------|
| `Sync Essay Status From Kanban.md` | `Cmd+Shift+K` | Updates essay frontmatter to match Kanban position |

**Setup:** Templater settings → Template Hotkeys → Add the script

### Column Mapping

| Kanban Column | Frontmatter Status |
|---------------|-------------------|
| Ideas | `idea` |
| Research | `research` |
| Drafting | `draft` |
| Editing | `edit` |
| Published | `published` |

---

## How to Use

### 1. Create a New Essay

Use the template in `90 Templates/Essay Template.md`:
- Create a new file in `10 Workbench/Essays/`
- Set `status: idea` in frontmatter
- Write your initial idea in "The Idea" section

### 2. Pipeline Stages

| Status | What Happens | Callout Added |
|--------|--------------|---------------|
| `idea` | Research agent finds sources | `[!research]` |
| `research` | Draft agent writes first draft | `[!draft]` |
| `draft` | Edit agent reviews and suggests | `[!edit]` |
| `edit` | Publish agent prepares metadata | `[!publish]` |

### 3. Review AI Work

After each run, check the callouts:
- Incorporate what's useful
- Delete callouts you don't want
- The pipeline won't recreate deleted callouts (it checks for existence)

### 4. Move Backwards

Want to redo a stage?
1. Delete the relevant callout
2. Set `status` back to the previous stage
3. Pipeline will regenerate on next run

---

## Customization

### Change Target Folder
Edit `SKILL.md` and `run-essay-pipeline.sh` to point to a different folder.

### Add Custom Callout Types
Edit the agent files in `.claude/skills/essay-pipeline/` to add new callout types.

### Adjust Agent Behavior
Each agent file (`research-agent.md`, etc.) has detailed instructions you can modify.

---

## Troubleshooting

**Pipeline doesn't run:**
- Check Claude Code is installed: `claude --version`
- Check script is executable: `chmod +x run-essay-pipeline.sh`
- Check logs: `cat .claude/pipeline-runs.log`

**Agent overwrites callouts:**
- This shouldn't happen. Check the SKILL.md detection logic.
- Ensure callouts use exact format: `> [!research]` (with the `>` prefix)

**Wrong voice in drafts:**
- Add more of your writing samples to the essay's Notes section
- Edit `draft-agent.md` to emphasize voice matching

---

## File Structure

```
quartz/content/
├── .claude/
│   ├── skills/essay-pipeline/
│   │   ├── SKILL.md           # Orchestrator
│   │   ├── research-agent.md  # Stage 1
│   │   ├── draft-agent.md     # Stage 2
│   │   ├── edit-agent.md      # Stage 3
│   │   └── publish-agent.md   # Stage 4
│   ├── run-essay-pipeline.md  # Prompt file
│   ├── pipeline-runs.log      # Run history
│   └── SETUP.md               # This file
├── 10 Workbench/
│   ├── Essays/                # Your essays live here
│   └── Essay Pipeline.md      # Kanban board
├── 90 Templates/
│   ├── Essay Template.md      # Template for new essays
│   └── Templater/
│       ├── Sync Essay Status From Kanban.md
│       └── Rebuild Kanban From Essays.md
└── run-essay-pipeline.sh      # Runner script
```
