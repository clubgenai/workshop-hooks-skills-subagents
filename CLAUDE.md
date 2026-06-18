# Workshop — Hooks, Skills & Subagents

Guide d'installation des TPs du workshop.

**Important:** Tous les fichiers s'installent dans `.claude/` (répertoire du projet courant), pas dans le répertoire utilisateur.

---

## 📋 Comment installer

### Méthode générale

1. **Identifier votre OS** — macOS/Linux ou Windows
2. **Copier le fichier `settings-<os>.json`** → `.claude/settings.json`
3. **Copier les scripts/fichiers** → destinations indiquées ci-dessous
4. **Sur macOS/Linux:** rendre exécutables les `.sh` avec `chmod +x`

---

## 📍 Destinations d'installation

| TP | Fichier source | Destination |
|----|---|---|
| **Hooks TP1** | `hooks/tp1/post-tool-use/settings-<os>.json` | `.claude/settings.json` |
| **Hooks TP2** | `hooks/tp2/pre-tool-use/security-check-<os>.*` | `.claude/hooks/security-check.*` |
| | `hooks/tp2/pre-tool-use/settings-<os>.json` | `.claude/settings.json` |
| **Hooks TP3** | `hooks/tp3/stop/notify-<os>.*` | `.claude/hooks/notify.*` |
| | `hooks/tp3/stop/settings-<os>.json` | `.claude/settings.json` |
| **Hooks TP4** | `hooks/tp4/session-start/context-<os>.*` | `.claude/hooks/context.*` |
| | `hooks/tp4/session-start/settings-<os>.json` | `.claude/settings.json` |
| **Skill TP1** | `skills/tp1/code-review/SKILL.md` | `.claude/skills/code-review/SKILL.md` |
| | `skills/tp1/code-review/src/` | `.claude/skills/code-review/src/` |
| **Skill TP2** | `skills/tp2/commit-message/SKILL.md` | `.claude/skills/commit-message/SKILL.md` |
| | `skills/tp2/commit-message/references/` | `.claude/skills/commit-message/references/` |
| **Subagent TP1** | `subagents/tp1/tech-writer.md` | `.claude/agents/tech-writer.md` |
| | `subagents/tp1/src/api/users.js` | `src/api/users.js` (fixture) |
| **Subagent TP2** | `subagents/tp2/code-explorer.md` | `.claude/agents/code-explorer.md` |

---

## 🛠️ Exemples rapides

**macOS/Linux — copier un hook:**
```bash
mkdir -p .claude/hooks
cp hooks/tp2/pre-tool-use/security-check-macos.sh .claude/hooks/security-check.sh
chmod +x .claude/hooks/security-check.sh
cp hooks/tp2/pre-tool-use/settings-macos.json .claude/settings.json
```

**Windows — copier un hook:**
```powershell
New-Item -ItemType Directory -Path .claude/hooks -Force | Out-Null
Copy-Item hooks/tp2/pre-tool-use/security-check-windows.ps1 .claude/hooks/security-check.ps1
Copy-Item hooks/tp2/pre-tool-use/settings-windows.json .claude/settings.json
```

**macOS/Linux — copier une skill:**
```bash
mkdir -p .claude/skills/code-review
cp skills/tp1/code-review/SKILL.md .claude/skills/code-review/
cp -r skills/tp1/code-review/src/ .claude/skills/code-review/
```

---

## 📌 Notes

- **Nommage:** Garder le nom de base du fichier (ex: `security-check-macos.sh` → `security-check.sh`)
- **Permissions Unix:** `chmod +x .claude/hooks/*.sh` après copie
- **Fixtures:** Les fichiers `src/` sont des tests avec défauts intentionnels
- **Invocation:** Skills via `/code-review` ou `/commit-message` · Subagents via `/Agent tech-writer`

Bon workshop! 🎉
