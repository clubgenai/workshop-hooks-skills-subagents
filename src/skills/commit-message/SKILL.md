---
name: commit-message
description: Génère des messages de commit selon la convention Conventional Commits. Utiliser quand l'utilisateur veut commiter, faire un commit, ou demande un "git commit".
---

# Générateur de Commit Conventionnel

Génère un message de commit selon le standard Conventional Commits.
Consulte references/conventional-commits.md pour les règles complètes.

## Processus

1. Analyse les changements avec `git diff --staged`
2. Identifie le type de changement (feat, fix, chore, etc.)
3. Rédige le message selon le format

## Format obligatoire

```
<type>(<scope>): <description courte en impératif>

[corps optionnel si changement complexe]

[footer: BREAKING CHANGE: ou Fixes #xxx]
```

## Règles absolues

- Description en minuscules
- Pas de point final
- Maximum 72 caractères pour la première ligne
- En français ou anglais selon la langue du projet
