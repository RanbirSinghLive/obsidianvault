#!/bin/bash
# Essay Pipeline Runner
# Run this via cron to process essays daily
#
# Cron example (run at 6am daily):
#   0 6 * * * /path/to/quartz/content/run-essay-pipeline.sh >> /path/to/logs/essay-pipeline.log 2>&1

set -e

# Configuration
VAULT_PATH="${VAULT_PATH:-$(dirname "$0")}"
LOG_FILE="${LOG_FILE:-$VAULT_PATH/.claude/pipeline-runs.log}"

# Timestamp
echo "========================================" >> "$LOG_FILE"
echo "Pipeline run: $(date '+%Y-%m-%d %H:%M:%S')" >> "$LOG_FILE"
echo "========================================" >> "$LOG_FILE"

# Change to vault directory
cd "$VAULT_PATH"

# Run Claude Code with the pipeline prompt
# Using --print to output results, --dangerously-skip-permissions for automation
# Adjust flags based on your Claude Code setup
claude --print \
  --dangerously-skip-permissions \
  --allowedTools "Read,Write,Edit,Glob,Grep,WebSearch,WebFetch" \
  "Read '90 Templates/Agents/Essay Pipeline - SKILL.md' and execute the essay pipeline for all files in '10 Workbench/'. Process each essay according to its current status. Log what you do." \
  2>&1 | tee -a "$LOG_FILE"

echo "" >> "$LOG_FILE"
echo "Pipeline complete: $(date '+%Y-%m-%d %H:%M:%S')" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"
