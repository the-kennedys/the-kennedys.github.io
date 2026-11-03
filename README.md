# Paul's Recipes (`the-kennedys.me.uk`)

A fast, modern, recipe-first website built with [Astro](https://astro.build) and Tailwind CSS, hosted on GitHub Pages.

---

## 🍳 Features

- **Recipe-First Landing Page**: Instant recipe cards with category pills (`Curries`, `Mains`, `Soups`), servings badges, and excerpts.
- **Instant Search & Filter**: Real-time filtering by recipe title, category, or ingredient tags (e.g., `#lentils`, `#halloumi`, `#spinach`).
- **Kitchen Cooking View**:
  - **Tap-to-Check Ingredients**: Tap any ingredient to strike it through as you prep. Saves state during your cooking session.
  - **Keep Screen Awake (Wake Lock)**: Prevents phone/tablet screen from dimming while cooking.
  - **Clean Print Mode**: Generates clean, printer-friendly sheets (no navigation, headers, or buttons).
- **Recipe Index**: Complete alphabetical A–Z index of recipes by dish, style, and ingredient.
- **Zero-Friction Recipe Workflow**: Recipes live directly in `_recipes/*.md` as plain Markdown.

---

## 🚀 Adding a New Recipe

Just create a new `.md` file in `_recipes/` (e.g. `_recipes/my-new-curry.md`):

```markdown
---
title: "My New Curry"
contents_entry: curries # curries | mains | soups
index_entry: chickpeas, spinach, cumin
---

Serves 4
Prep 15 min
Cook 30 min

Introductory note or source attribution here.

# Ingredients

- 1 tbsp olive oil
- 1 onion, chopped
- 400g chickpeas

# Method

1. Fry onion in olive oil until soft.
2. Add chickpeas and simmer for 20 minutes.
```

Commit and push to `main` — GitHub Actions builds and deploys it automatically!

---

## 💻 Local Development

Requires Node.js 20+:

```bash
# Install dependencies
npm install

# Start local dev server with instant hot-reload
npm run dev

# Build production static site
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment to GitHub Pages

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

### One-Time Setup in GitHub:
1. In your GitHub repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions** (instead of "Deploy from a branch").
3. Your custom domain `the-kennedys.me.uk` will deploy automatically.
