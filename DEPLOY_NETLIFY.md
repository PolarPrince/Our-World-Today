# Deploy to Netlify

Your site is ready to deploy! Here are the steps:

## Option 1: Connect GitHub to Netlify (Recommended - Auto-deploys)

1. Go to https://netlify.com and sign up (use your GitHub account)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** and authorize
4. Choose the **`Our-World-Today`** repository
5. Settings will auto-detect:
   - **Build command:** `npm run build`
   - **Publish directory:** `site/dist`
   - **Base directory:** `site`
6. Click **"Deploy site"**
7. Your site will be live in 1-2 minutes at a Netlify URL

Every time you push to GitHub, Netlify auto-deploys!

## Option 2: Manual Deploy

If you have a Netlify auth token:

```bash
cd /workspaces/Our-World-Today/site
netlify deploy --prod --dir=dist
```

## Project Structure

```
/site
├── package.json (dependencies + build scripts)
├── vite.config.js (bundler config)
├── netlify.toml (deployment config)
├── src/
│   ├── App.jsx (main React component)
│   ├── main.jsx (React entry point)
│   └── index.css (Tailwind styles)
└── dist/ (production bundle - auto-generated)
```

## Build & Test Locally

```bash
cd /workspaces/Our-World-Today/site
npm run build    # Create optimized bundle
npm run preview  # Test production build locally
```

## Environment

- **Runtime:** Node.js + React 18
- **CSS:** Tailwind CSS (3.x)
- **Bundler:** Vite 4.5
- **Build output:** ~156KB JavaScript, ~12KB CSS (gzipped: 50KB + 2.8KB)

---

Your site is production-ready! 🚀
