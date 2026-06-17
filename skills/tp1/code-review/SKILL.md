---
name: code-review
description: Effectue une revue de code selon
  nos standards. Utiliser quand l'utilisateur
  demande une "revue" ou "review".
model: haiku
allowed-tools: [Read, Bash]
---

# Code Review — Standards Équipe

## Checklist
🔒 Sécurité — Pas de secrets en dur
📖 Lisibilité — Fonctions < 30 lignes
⚡ Performance — Pas de N+1 queries
🧪 Tests — Cas nominaux couverts

## Format de réponse
Résumé en 1-2 phrases, puis :
### 🔴 Bloquants — problème + numéro de ligne
### 🟡 Améliorations — problème + suggestion
### 🟢 Points positifs — au moins un
