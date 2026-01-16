#!/bin/bash

# Daily Reading Recommendations Generator
# Run this manually each morning: ./generate-daily-readings.sh

# Get today's date
TODAY=$(date +%Y-%m-%d)
READABLE_DATE=$(date +"%A, %B %d, %Y")
VAULT_PATH="/Users/ranbirsingh/Documents/Obsidian-Vaults/quartz/content"
FILE_NAME="Daily Reading Recommendations - ${TODAY}.md"
FILE_PATH="${VAULT_PATH}/${FILE_NAME}"

# Check if today's note already exists
if [ -f "$FILE_PATH" ]; then
    echo "⚠️  Today's reading note already exists: ${FILE_NAME}"
    echo "Opening it..."
    cat "$FILE_PATH"
    exit 0
fi

# Create the note with placeholder
cat > "$FILE_PATH" << EOF
# Daily Reading Recommendations - ${READABLE_DATE}

## 1. [Article Title]
**Author:** [Author Name]
**Source:** [Publication]
**URL:** [Link]

[Why this is worth reading today]

---

## 2. [Article Title]
**Author:** [Author Name]
**Source:** [Publication]
**URL:** [Link]

[Why this is worth reading today]

---

## 3. [Article Title]
**Author:** [Author Name]
**Source:** [Publication]
**URL:** [Link]

[Why this is worth reading today]

---

## Sources
- [Article 1](url)
- [Article 2](url)
- [Article 3](url)
EOF

echo "✅ Created: ${FILE_NAME}"
echo "📍 Location: ${FILE_PATH}"
echo ""
echo "Now ask Claude Code to fill it in with today's recommendations!"
