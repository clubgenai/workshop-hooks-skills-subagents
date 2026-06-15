# Workshop — Étendre Claude Code : Hooks, Skills & Subagents

Guide de démarrage rapide pour les participants.

---

## Prérequis techniques

Les outils suivants doivent être installés et disponibles dans votre PATH avant le workshop :

| Outil | Version minimale | Vérification |
|-------|-----------------|--------------|
| **Claude Code** | v1.x+ | `claude --version` |
| **Node.js** | v22+ | `node --version` |
| **npm / npx** | bundlé avec Node | `npx --version` |
| **jq** | v1.6+ | `jq --version` |
| **git** | v2+ | `git --version` |
| **bash** | v4+ (macOS: brew install bash) | `bash --version` |
| **prettier** | via npx (pas besoin d'install globale) | `npx prettier --version` |

> **macOS** : `brew install jq git node`
> **Ubuntu/Debian** : `sudo apt install jq git nodejs npm`
> **Windows** : utiliser Git Bash ou WSL2

---

## Structure de ce dossier

```
src/
├── README.md                        ← Ce fichier
├── checklist.md                     ← Progression du TP
├── hooks/
│   ├── ex1-formatage/
│   │   └── settings.json            ← Hook PostToolUse formatage Prettier
│   ├── ex2-securite/
│   │   ├── settings.json            ← Hook PreToolUse sécurité
│   │   └── security-check.sh        ← Script de sécurité à copier dans ~/.claude/hooks/
│   ├── ex3-notification/
│   │   ├── settings-macos.json      ← Hook Stop notification macOS
│   │   └── settings-linux.json      ← Hook Stop notification Linux
│   └── ex4-contexte/
│       └── settings.json            ← Hook SessionStart injection de contexte
├── skills/
│   ├── code-review/
│   │   └── SKILL.md                 ← Skill de revue de code
│   └── commit-message/
│       ├── SKILL.md                 ← Skill de génération de commits
│       └── references/
│           └── conventional-commits.md
└── agents/
    ├── tech-writer.md               ← Subagent rédacteur technique
    └── code-explorer.md             ← Subagent explorateur read-only
```

---

## Plan du workshop

| Partie | Exercice | Durée | Objectif |
|--------|---------|-------|---------|
| **Hooks** | Ex 1 — Formatage automatique | 5 min | Hook PostToolUse avec Prettier |
| **Hooks** | Ex 2 — Sécurité | 7 min | Hook PreToolUse bloquant |
| **Hooks** | Ex 3 — Notification desktop | 5 min | Hook Stop non-bloquant |
| **Hooks** | Ex 4 — Injection de contexte | 3 min | Hook SessionStart |
| **Skills** | Ex 1 — Skill code-review | 8 min | Créer et tester une skill |
| **Skills** | Ex 2 — Skill commit-message | 7 min | Skill avec fichiers de référence |
| **Subagents** | Ex 1 — Agent tech-writer | 8 min | Créer un agent spécialisé |
| **Subagents** | Ex 2 — Agents en parallèle | 9 min | Orchestration multi-agents |

---

## Démarrage rapide

### 1. Créer un projet de test

```bash
mkdir workshop-claude-code && cd workshop-claude-code
git init
mkdir -p .claude/hooks .claude/skills .claude/agents
```

### 2. Rendre les scripts exécutables

```bash
chmod +x src/hooks/ex2-securite/security-check.sh
```

### 3. Copier les fichiers du bon exercice

Pour chaque exercice, copiez le fichier correspondant vers votre projet de test.

**Exemple — Exercice 1 (formatage) :**
```bash
# Copier le settings.json dans votre projet
cp src/hooks/ex1-formatage/settings.json .claude/settings.json
```

**Exemple — Exercice 2 (sécurité) :**
```bash
# Copier le script dans votre dossier hooks global
mkdir -p ~/.claude/hooks
cp src/hooks/ex2-securite/security-check.sh ~/.claude/hooks/
chmod +x ~/.claude/hooks/security-check.sh

# Copier la config dans votre projet (ou dans ~/.claude/settings.json pour global)
cp src/hooks/ex2-securite/settings.json .claude/settings.json
```

**Exemple — Skills :**
```bash
# Copier la skill dans votre projet
cp -r src/skills/code-review .claude/skills/
```

**Exemple — Agents :**
```bash
# Copier l'agent dans votre projet
cp src/agents/tech-writer.md .claude/agents/
```

### 4. Lancer Claude Code

```bash
claude
```

---

## Commandes utiles dans Claude Code

```bash
/hooks     # Affiche tous les hooks configurés
/agents    # Affiche les subagents disponibles
/mcp       # Affiche les serveurs MCP connectés
```
