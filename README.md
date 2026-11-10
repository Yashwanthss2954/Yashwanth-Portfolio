# Yashwanth Bhaskaruni — Portfolio

A responsive personal portfolio built with Next.js, React, TypeScript, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

The résumé is available at `/Yashwanth_AI_Engineer.pdf`. The project descriptions summarize enterprise work at a high level to avoid exposing internal details.

## Deploy to GitHub Pages

This project exports to static files in `out/`. The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever you push to `main`.

1. Push this project to the GitHub repository you want to publish.
2. In that repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish. GitHub will show the published URL in the deployment environment.

The workflow automatically handles both a project site (`username.github.io/repository`) and a user site (`username.github.io`).
