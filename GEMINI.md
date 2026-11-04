# Project Context for Antigravity (AGY)

This file is the AGY equivalent of CLAUDE.md — it provides persistent project context and permissions so I don't need to re-establish them each session.

---

## Project Overview

**Site:** `the-kennedys.github.io` — a personal recipe website for the Kennedy family.
**Stack:** Astro (static site generator), TypeScript, Tailwind CSS.
**Deployment:** GitHub Pages via `.github/workflows/deploy.yml`.

The site was migrated from Jekyll to Astro in October 2026. Recipes live in `_recipes/` as Markdown files with YAML frontmatter, and are rendered via Astro's content collections.

---

## Permissions

- ✅ Read any file in this project directory freely.
- ✅ Run any `git` command **except** `git push` (do not push to upstream / origin).
- ✅ Create, edit, and delete files within the project.
- ❌ Do not `git push` to any remote.

---

## Owner Context

- **Paul Kennedy** — the primary author and site maintainer.
- Paul is **6 weeks into being vegan** (as of November 2026) and is actively learning.
- **Low Salt Preference:** Paul prefers very low salt in recipes (e.g. bread loaf uses only 6g salt, and commercial stock cubes usually supply plenty of sodium). Avoid adding extra salt/pinches of salt by default.
- Some existing recipes were originally vegetarian and have been veganised over time.
- Preferred recipe sources include: Al's Kitchen (YouTube), Bosh!, Fast 800 Cookbook.

---

## Recipe Collection — Current State

Recipes live in `_recipes/*.md`. Each file uses YAML frontmatter:

```yaml
title: "Recipe Name"
date: YYYY-MM-DD HH:MM:SS +0000
categories: recipe <type>      # e.g. curry, soup, bread
contents_entry: <section>      # curries | soups | mains | baking
index_entry: keyword, keyword  # comma-separated search tags
```

### Current Recipes

| File | Title | Type | Vegan? |
|---|---|---|---|
| `aubergine-lentil-dhal.md` | Aubergine and Lentil Dhal | Curry | ✅ Vegan |
| `base-gravy.md` | Base Gravy | Curry | ✅ Vegan |
| `bean-and-spinach.md` | Spiced Bean and Spinach Soup | Soup | ✅ Vegan |
| `black-bean-burrito-bowl.md` | Black Bean Burrito Bowl | Main | ✅ Vegan |
| `bolognese.md` | Lentil Bolognese | Main | ✅ Vegan (WIP) |
| `broc-and-blue-soup.md` | Broccoli and 'Blue Cheese' Soup | Soup | ✅ Vegan (veganised) |
| `broccoli-almond-soup.md` | Broccoli and Almond Soup | Soup | ✅ Vegan |
| `carrot-and-coriander.md` | Carrot and Coriander Soup | Soup | ✅ Vegan |
| `chana-masala.md` | Chana Masala | Curry | ✅ Vegan |
| `chilli.md` | Chilli | Main | ✅ Vegan |
| `chunky-leek-and-potato-soup.md` | Chunky Leek and Potato Soup | Soup | ✅ Vegan |
| `five-spice-madras.md` | 5 Spice Madras | Curry | ✅ Vegan (uses base gravy) |
| `jalfrezi.md` | Al's Jalfrezi | Curry | ✅ Vegan |
| `jambalaya.md` | Big Bean Jambalaya | Main | ✅ Vegan (from Bosh!) |
| `leek-and-barley.md` | Leek and Barley Risotto | Main | ✅ Vegan (veganised) |
| `lentil-coconut-soup.md` | Lentil and Coconut Soup | Soup | ✅ Vegan |
| `moroccan-chickpea-stew.md` | Moroccan Chickpea Stew | Main | ✅ Vegan |
| `mushroom-and-chestnut.md` | Mushroom and Chestnut Hotpot | Main | ✅ Vegan |
| `mushroom-soup.md` | Mushroom Soup | Soup | ✅ Vegan |
| `rat-and-halloumi.md` | Ratatouille and Smoked Tofu Bake | Main | ✅ Vegan (veganised) |
| `roasted-tomato-pepper-soup.md` | Roasted Tomato and Red Pepper Soup | Soup | ✅ Vegan |
| `rogan-josh.md` | Al's Rogan Josh | Curry | ✅ Vegan (veganised) |
| `saag-aloo.md` | Saag Aloo | Curry | ✅ Vegan |
| `sausage-and-bean.md` | Sausage and Bean Bake | Main | ✅ Vegan (veganised) |
| `sweet-pot-and-beet.md` | Spiced Sweet Potato & Beetroot with Chickpeas & Vegan Feta | Main | ✅ Vegan (veganised) |
| `sweet-potato-chickpea-tagine.md` | Sweet Potato and Chickpea Tagine | Main | ✅ Vegan |
| `tofu-satay.md` | Crispy Tofu and Vegetable Peanut Satay | Curry | ✅ Vegan |
| `vegan-ratatouille-bake.md` | Vegan Ratatouille Bake | Main | ✅ Vegan |
| `vegan-shakshuka.md` | Vegan Shakshuka | Main | ✅ Vegan |
| `wholemeal-malted-loaf.md` | 50/50 Wholemeal and Malted Loaf | Baking | ✅ Vegan |

---

## Code Notes

- `src/utils/recipes.ts` — utility functions for parsing recipe frontmatter (categories, servings, prep/cook times, tags, excerpts).
- `src/pages/recipes/[slug].astro` — individual recipe page.
- `src/pages/index.astro` — homepage with recipe cards.
- `src/components/RecipeCard.astro` — recipe card component.
- `src/content.config.ts` — Astro content collection schema for `_recipes/`.

---

## Previous Session Notes (Work PC Web Session)

- A few new recipes were discussed for addition — details not yet recovered. Check other conversation history if needed.
- Vegan recipe suggestions were being explored to build out the collection.
