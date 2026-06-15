---
name: code-review
description: Effectue une revue de code approfondie selon nos standards d'équipe. Utiliser après avoir écrit ou modifié du code, ou quand l'utilisateur demande une "revue", "review" ou "vérification du code".
---

# Code Review — Standards Équipe

## Checklist obligatoire

Lors de chaque revue, vérifie systématiquement :

### 🔒 Sécurité
- Pas de secrets ou tokens en dur dans le code
- Inputs utilisateur validés et sanitizés
- Pas de SQL dynamique non paramétré
- Dépendances à jour (vérifie avec les CVE connues)

### 📖 Lisibilité
- Fonctions de moins de 30 lignes
- Noms de variables explicites (pas de `x`, `tmp`, `data`)
- Commentaires sur le "pourquoi", pas le "quoi"

### ⚡ Performance
- Pas de N+1 queries en évidence
- Opérations coûteuses mises en cache si pertinent

### 🧪 Tests
- Cas nominaux couverts
- Cas limites identifiés

## Format de sortie

Organise ton feedback ainsi :
1. **Résumé** (1-2 phrases)
2. **🔴 Bloquants** (doivent être corrigés)
3. **🟡 Améliorations** (recommandées)
4. **🟢 Points positifs** (toujours en mentionner au moins un)
