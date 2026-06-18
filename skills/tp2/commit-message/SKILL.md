---
name: commit-message
description: Génère un message de commit au format Conventional Commits
  à partir du diff stagé. À utiliser dès que l'utilisateur demande de committer,
  commiter, faire un commit, créer un commit, ou rédiger/écrire un message de commit
  (ex. "commit ça", "fais un commit", "git commit", "commite ces changements").
---

Vous rédigez un message de commit Conventional Commits. Vous **ne lancez pas**
`git commit` : vous produisez le message, l'utilisateur committe lui-même.

## Processus
1. Lancer `git diff --staged` pour voir les changements stagés.
2. **Si le diff stagé est vide :** lancer `git add -A` pour stager tous les
   changements, puis relancer `git diff --staged`. Si le diff reste vide,
   signaler qu'il n'y a rien à committer et s'arrêter.
3. Identifier le type (feat, fix, docs, refactor, chore…) et le scope d'après
   les fichiers et la nature des changements.
4. Rédiger le message selon le format ci-dessous.
5. Présenter le message final dans un bloc de code, prêt à être copié.

## Format
```
<type>(<scope>): <description>

[corps optionnel : le « pourquoi » si le changement est complexe]
```

- `<description>` : impératif présent, minuscule, sans point final, ≤ 72 caractères.
- `<type>` : feat, fix, docs, style, refactor, test, chore.
- `<scope>` : zone touchée (optionnel mais recommandé).
