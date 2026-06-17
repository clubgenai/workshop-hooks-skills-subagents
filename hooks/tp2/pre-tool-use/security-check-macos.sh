#!/bin/bash
INPUT=$(cat)
CMD=$(echo "$INPUT" | python3 -c \
  "import sys,json; d=json.load(sys.stdin); \
   print(d.get('tool_input',{}).get('command',''))")
[ -z "$CMD" ] && exit 0

for p in "rm -rf /" "DROP TABLE" "chmod 777"; do
  if echo "$CMD" | grep -qi "$p"; then
    echo "🚫 Bloqué : '$p'" >&2; exit 2
  fi
done
exit 0
