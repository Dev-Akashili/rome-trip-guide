# AKASHILI'S ROME TRIP

A responsive, static React travel guide for navigating Rome on foot.  
The app is built as a personal companion for short, practical reads while moving between landmarks.

## Features

- **Three core categories**:
  - Historic Centre
  - Ancient Rome
  - Vatican City
- **Tourist / Priority mode**:
  - Tourist mode shows all destinations.
  - Priority mode hides optional destinations in category lists and previous/next navigation.
- **Light / Dark / System theme toggle** with local persistence.
- **Scroll-aware navbar**:
  - remains visible near top,
  - hides while scrolling down,
  - reappears while scrolling up.
- **Route navigation starts at the top** of the new page.
- **Destination detail pages** with:
  - route-aware back navigation,
  - type-driven content sections (`Att`, `Opt`, `Str`, `Shop`),
  - previous/next navigation within the same category and active mode.
- **Image attribution support** and visual fallbacks when external images fail.
- **Responsive high-resolution Wikimedia images**, including a contemporary photograph of Rome's Jewish quarter.
- **Expanded on-site context** on every destination page, alongside the attraction, route, and shopping sections.
- A simple footer linking to Akashili's personal website.
- **Static-host friendly routing** via `HashRouter`.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- shadcn-style UI primitives in `components/ui/` (Radix + CVA pattern)
- React Router
- Lucide React icons

## Project Structure

```text
src/
  components/
    layout/
    shared/
    ui/
  data/
    categories.ts
    destinations.ts
  hooks/
    use-navbar-visibility.ts
  lib/
    navigation.ts
    preferences-context.tsx
    utils.ts
  pages/
    category-page.tsx
    home-page.tsx
    item-page.tsx
    not-found-page.tsx
  types/
    index.ts
  App.tsx
  index.css
  main.tsx
```

## Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Type-check + Production Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Preview Production Build

```bash
npm run preview
```

## Data and Content Model

- Category definitions and ordering are in `src/data/categories.ts`.
- Destination content is canonical and typed in `src/data/destinations.ts`.
- Category membership references destination IDs, avoiding duplicated destination content.
- Destination pages render sections based on assigned destination types:
  - `att` / `opt`: attraction guide + history + observations + fun facts
  - `str`: orientation and route guidance
  - `shop`: shopping character, suggested places, and practical tips

## GitHub Pages Deployment

The repository is configured to deploy automatically to GitHub Pages when changes are pushed to `main`. Vite builds with the `/rome-trip-guide/` base path, and the app uses **HashRouter**, so category and destination routes do not require server-side rewrites.

1. Push the project to the `main` branch on GitHub.
2. In the repository, open **Settings → Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for the **Deploy to GitHub Pages** workflow to finish.

The site URL is `https://dev-akashili.github.io/rome-trip-guide/`. For a different repository name or custom domain, update the Vite `base` path in `vite.config.ts`.

To build locally, run `npm run build`; the static files are written to `dist/`.

## External Image Dependency Notes

- Most destination/category images are Wikimedia-hosted URLs sourced via related Wikipedia pages.
- Wikimedia thumbnail sources are requested responsively at larger widths for sharper display on high-density screens.
- The Jewish Ghetto photograph is by Jorge Franganillo and is licensed CC BY 2.0; attribution links to its Wikimedia Commons file page.
- If an image URL becomes unavailable, the UI shows a built-in fallback block instead of a broken image.
- For the Leonardo da Vinci Museum stop, a thematic verified open-license image is used because a stable open-license museum-specific image URL could not be consistently verified.
