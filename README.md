# Nuxt 4 + Tailwind v4 + Shadcn Boilerplate

A battle-tested production starter kit combining the cutting-edge performance of **Nuxt 4**, **Tailwind CSS v4**, and **Shadcn Vue**. 

This boilerplate contains a built-in resolution for the infamous Vue macro compilation errors (`No fs option provided to compileScript`) and auto-import resolution conflicts that typically crash Nuxt 4 / Shadcn configurations during development.

## 🚀 Key Fixes Included

* **Vue Compiler Bypass:** Pre-configured global `isCustomElement` options in `nuxt.config.ts` to prevent the Vue engine from crashing on deep `reka-ui` macro types during component compilation.
* **Native Nuxt 4 Architecture:** Fully aligned with the mandatory Nuxt 4 directory structure (`/app`), ensuring seamless component auto-discovery and preventing runtime resolution failures.
* **Tailwind v4 Integration:** Built around the high-performance `@tailwindcss/vite` configuration without triggering local file caching or filesystem loops.

## 🛠️ Setup

Make sure to install the dependencies cleanly:

```bash
# npm
npm install

# pnpm
pnpm install

# bun
bun install
```

## 💻 Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# bun
bun run dev
```

## 🏗️ Adding UI Components

Shadcn components will be automatically generated inside the Nuxt 4 standard `/app/components/ui/` directory based on the updated `components.json` layout mappings.

To add new components, simply run:

```bash
npx shadcn@latest add [component-name]
```

## 📦 Production Build

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# bun
bun run build
```

Locally preview the production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# bun
bun run preview
```

Check out the [Nuxt deployment documentation](https://nuxt.com) for more information.
