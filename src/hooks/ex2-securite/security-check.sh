#!/bin/bash

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

if [ -z "$COMMAND" ]; then
  exit 0
fi

# Patterns dangereux
BLOCKED_PATTERNS=(
  "rm -rf /"
  "drop table"
  "DROP TABLE"
  "DELETE FROM.*WHERE.*1=1"
  "chmod 777"
  "> /dev/sda"
)

for pattern in "${BLOCKED_PATTERNS[@]}"; do
  if echo "$COMMAND" | grep -qi "$pattern"; then
    echo "🚫 BLOQUÉ : commande potentiellement dangereuse détectée : '$pattern'" >&2
    exit 2
  fi
done

exit 0
