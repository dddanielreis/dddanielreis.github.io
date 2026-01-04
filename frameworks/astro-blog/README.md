# Astro Blog

A minimalist blog built with [Astro](https://astro.build/) - the web framework that delivers zero JavaScript by default.

## Features

- ⚡ Zero JavaScript by default (ships 40x less JS than Gatsby)
- ⚛️ React components support for interactivity
- 🎨 Dark mode with gray accents
- 🇧🇷 Brazilian Portuguese interface
- 📱 Responsive design
- 🚀 Extremely fast (100 Lighthouse scores)
- 🔧 TypeScript support

## Getting Started

### Install Dependencies

```bash
cd frameworks/astro-blog
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to see your blog.

### Build for Production

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   └── Counter.tsx  # Example React component
│   ├── layouts/         # Astro layouts
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/           # File-based routing
│   │   ├── posts/       # Blog posts (Markdown)
│   │   │   ├── index.astro
│   │   │   └── exemplo.md
│   │   ├── index.astro  # Home page
│   │   └── sobre.astro  # About page
│   └── styles/
│       └── global.css   # Global styles
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## Writing Blog Posts

Create a new Markdown file in `src/pages/posts/`:

```markdown
---
layout: ../../layouts/PostLayout.astro
title: 'Your Post Title'
description: 'A brief description'
date: 2026-01-04
---

# Your Content

Write your content here using Markdown.
```

### Using React Components in Posts

You can import and use React components in your Markdown files:

1. Create a component in `src/components/`
2. Import it in your post
3. Use the `client:*` directive for interactivity

Example:
```astro
import Counter from '../../components/Counter.tsx';

<Counter client:load />
```

## Customization

### Colors

Edit `src/styles/global.css` to change colors:

```css
:root {
  --gray-500: #6b7280; /* Accent color */
  --bg-primary: var(--gray-950);
  /* ... other colors */
}
```

### Site Information

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

## Deployment

### GitHub Pages

1. Copy `astro-deploy.yml` to `.github/workflows/`
2. Push to main branch
3. Enable GitHub Pages in repository settings (Source: GitHub Actions)

The site will be automatically deployed on every push.

### Manual Build

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## Why Astro?

Astro is perfect for content-focused sites:

- **Fast**: Ships zero JavaScript by default
- **SEO**: Great for SEO with SSG
- **Flexible**: Use React, Vue, Svelte, or just HTML/CSS
- **Simple**: Familiar syntax, easy to learn
- **Modern**: Best practices built-in

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [React in Astro](https://docs.astro.build/en/guides/integrations-guide/react/)

## License

MIT
