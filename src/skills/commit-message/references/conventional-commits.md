# Conventional Commits — Référence Complète

## Types

| Type | Quand l'utiliser |
|------|-----------------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation uniquement |
| `style` | Formatage (pas de logique) |
| `refactor` | Refactoring sans bug fix ni feature |
| `test` | Ajout/modification de tests |
| `chore` | Maintenance, dépendances, CI |
| `perf` | Amélioration de performance |
| `ci` | Changements CI/CD |

## Exemples concrets

```
feat(auth): add OAuth2 login with Google
fix(cart): prevent negative quantity on item removal
docs(api): update endpoint documentation for v2
chore(deps): update jest to v29.7.0
refactor(user): extract email validation to utility function
```

## Breaking Changes

Ajouter `!` après le type ou un footer `BREAKING CHANGE:` :
```
feat!: redesign authentication API
feat(auth)!: remove legacy token format
```
