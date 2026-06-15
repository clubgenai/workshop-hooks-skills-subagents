# Checklist Club GenΛI – Hooks, Skills et Subagents

- Créer le projet de test avec `mkdir workshop-claude-code && git init`
- Configurer le hook PostToolUse de formatage automatique avec Prettier
- Tester le formatage en demandant à Claude de créer un fichier JS mal formaté
- Créer le script security-check.sh et le rendre exécutable avec chmod +x
- Configurer le hook PreToolUse de sécurité dans settings.json
- Tester le blocage en demandant à Claude d'exécuter `rm -rf /tmp/../`
- Configurer le hook Stop de notification desktop (macOS ou Linux)
- Configurer le hook SessionStart d'injection de contexte git
- Créer la skill code-review dans .claude/skills/code-review/SKILL.md
- Tester la skill code-review en demandant une revue de code à Claude
- Créer la skill commit-message avec le fichier de référence conventional-commits.md
- Tester la skill commit-message en demandant un message de commit
- Créer le subagent tech-writer dans .claude/agents/tech-writer.md
- Tester le subagent tech-writer avec @tech-writer sur un fichier source
- Créer le subagent code-explorer dans .claude/agents/code-explorer.md
- Lancer deux subagents en parallèle : @code-explorer + @tech-writer
