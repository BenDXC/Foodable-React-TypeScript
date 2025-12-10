# CI/CD Workflow Guide

This directory contains the GitHub Actions workflow for **React + TypeScript** project with:

- Node 24
- ESLint linting
- TypeScript type checking
- Unit tests
- Husky commit linting
- Semantic Release
- Versioned GitHub Pages deployment

---

## Workflow File

**File:** `.github/workflows/ci-cd-gh-pages-full.yml`

**Triggered on:**  
- Push to `main` (production)  
- Push to `develop` (staging)

---

## Steps Executed

1. **Checkout code** – clones repository  
2. **Setup Node.js 24** – ensures consistent environment  
3. **Cache node modules** – speeds up builds  
4. **Install dependencies** – `npm ci`  
5. **Commit linting** – Husky + commitlint  
6. **Lint code** – `npm run lint`  
7. **TypeScript checks** – `npx tsc --noEmit`  
8. **Unit tests** – `npm test -- --watchAll=false --passWithNoTests`  
9. **Semantic Release** – auto versioning & changelog  
10. **Build React app** – `npm run build`  
11. **Versioned build folder** – for GitHub Pages  
12. **Deploy to GitHub Pages** – staging or production branch  
13. **Update `latest` redirect** – optional for production  
14. **Rollback on failure** – restores previous `gh-pages` version if deployment fails  

---

## Required Secrets

- `GITHUB_TOKEN` – default GitHub Actions token  
- `NPM_TOKEN` – if publishing to npm (optional)  

---

## Commit Message Rules

Semantic Release depends on **Conventional Commits**:

| Type    | Description                     |
| ------- | --------------------------------|
| feat    | New feature                      |
| fix     | Bug fix                          |
| chore   | Build, tooling, etc.             |
| docs    | Documentation updates            |
| refactor| Code restructuring               |
| test    | Add/update tests                 |


---

## Display App Version

In your React app, display the current version:

```tsx
<footer>Version: {process.env.REACT_APP_VERSION}</footer>

