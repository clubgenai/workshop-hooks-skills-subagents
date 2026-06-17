# TP — Fichiers des ateliers

Tout le code des ateliers pratiques, extrait de la présentation. La structure
**reprend exactement les liens « Chemin dans le repo » affichés sur les slides**
(`hooks/` · `skills/` · `subagents/`, puis `tpN/`).

Les commandes qui dépendent du système sont fournies en **trois fichiers**
suivant la convention `nom-de-la-commande-os` :

- `…-macos` — macOS
- `…-linux` — Linux
- `…-windows` — Windows (PowerShell)

> macOS et Linux partagent le même `bash` : pour les *scripts*, les deux fichiers
> ont alors un contenu identique. Seul **TP3 (stop)** diffère vraiment
> (`osascript` vs `notify-send` vs `BurntToast`).
>
> **Chemins cohérents :** chaque `settings-<os>.json` référence son script par son
> nom exact (`~/.claude/hooks/notify-macos.sh`, etc.). À l'installation, copiez le
> script de votre OS dans `~/.claude/hooks/` **en gardant son nom** — aucun renommage.
>
> Les fichiers de skill / subagent ne dépendent pas de l'OS → un seul fichier
> (`SKILL.md` en majuscules, requis par Claude Code).

## Arborescence

```
tp/
├── hooks/
│   ├── tp1/post-tool-use/    settings-{macos,linux,windows}.json
│   ├── tp2/pre-tool-use/     security-check-{macos,linux,windows}.{sh|ps1}
│   │                         settings-{macos,linux,windows}.json
│   ├── tp3/stop/             notify-{macos,linux,windows}.{sh|ps1}
│   │                         settings-{macos,linux,windows}.json
│   └── tp4/session-start/    context-{macos,linux,windows}.{sh|ps1}
│                             settings-{macos,linux,windows}.json
├── skills/
│   ├── tp1/code-review/      SKILL.md + setup-{macos,linux,windows}.{sh|ps1}
│   │                         src/auth.js                  ← fixture de test
│   └── tp2/commit-message/   SKILL.md + references/conventional-commits.md
└── subagents/
    ├── tp1/                  tech-writer.md + src/api/users.js   ← fixture
    └── tp2/                  code-explorer.md
```

## Correspondance slide → fichiers → destination

| TP | Lien de dossier (slide) | Fichiers | Destination |
|----|--------------------------|----------|-------------|
| Hooks · TP1 Formatage | `hooks/tp1/post-tool-use` | `settings-*.json` | `.claude/settings.json` (projet) |
| Hooks · TP2 Sécurité | `hooks/tp2/pre-tool-use` | `security-check-*.{sh,ps1}` | `~/.claude/hooks/` (même nom) |
| | | `settings-*.json` | `~/.claude/settings.json` |
| Hooks · TP3 Notification | `hooks/tp3/stop` | `notify-*.{sh,ps1}` | `~/.claude/hooks/` (même nom) |
| | | `settings-*.json` | `~/.claude/settings.json` |
| Hooks · TP4 Contexte | *(inline dans le deck → `tp4/session-start`)* | `context-*.{sh,ps1}` | `~/.claude/hooks/` (même nom) |
| | | `settings-*.json` | `~/.claude/settings.json` |
| Skills · TP1 Code Review | `skills/tp1/code-review/SKILL.md` | `SKILL.md` | `.claude/skills/code-review/SKILL.md` |
| | | `setup-*.{sh,ps1}` | crée l'arborescence `.claude/skills/code-review/` |
| | | `src/auth.js` | `src/auth.js` (projet de test) |
| Skills · TP2 Commit Message | `skills/tp2/commit-message/SKILL.md` | `SKILL.md` + `references/` | `.claude/skills/commit-message/` |
| Subagents · TP1 Tech Writer | `subagents/tp1/tech-writer.md` | `tech-writer.md` | `.claude/agents/tech-writer.md` |
| | | `src/api/users.js` | `src/api/users.js` (projet de test) |
| Subagents · TP2 Code Explorer | `subagents/tp2/code-explorer.md` | `code-explorer.md` | `.claude/agents/code-explorer.md` |

> Sur macOS / Linux, rendez les scripts exécutables : `chmod +x <fichier>.sh`.
> Sur Windows, autorisez les scripts une fois : `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

> TP4 (Contexte / `SessionStart`) n'a pas de lien « Chemin dans le repo » sur les
> slides (code montré en onglets OS) ; il est rangé sous `hooks/tp4/session-start`
> par cohérence avec le nommage par événement des autres hooks.

## Fixtures de test

`src/auth.js` (Skills TP1) et `src/api/users.js` (Subagents TP1) sont inclus **au
chemin exact** où les déposer dans le projet de test. Ils contiennent des défauts
volontaires (secrets en dur, injection SQL, validation manquante…) à faire détecter.
