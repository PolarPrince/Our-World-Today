# Our World Today — Vite + React + Tailwind

Run locally:

```bash
cd site
npm install
npm run dev
```

Build for production:

```bash
cd site
npm run build
# preview
npm run preview
```

Deploy:
- Vercel / Netlify: connect repo and set build to `npm run build`, publish `dist`.
- GitHub Pages: use an action to push `dist` to `gh-pages`.
