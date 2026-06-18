---
name: commit-message
description: Génère un message de commit au format Conventional Commits
  à partir du diff stagé. À utiliser dès que l'utilisateur demande de committer,
  commiter, faire un commit, créer un commit, ou rédiger/écrire un message de commit
  (ex. "commit ça", "fais un commit", "git commit", "commite ces changements").
---

## Processus
1. git diff --staged
2. Identifier le type (feat, fix, chore…)
3. Rédiger selon le format

## Format
<type>(<scope>): <description>

[corps si changement complexe]
