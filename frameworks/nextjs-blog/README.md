# Next.js Blog

A minimalist blog built with [Next.js](https://nextjs.org/) - the React framework for production.

## Features

- ⚛️ Built with React 19 and Next.js 15
- 🎨 Dark mode with gray accents
- 🇧🇷 Brazilian Portuguese interface
- 📱 Responsive design
- 🚀 Static export for GitHub Pages
- 🔧 TypeScript support
- 📝 File-based routing with App Router

## Getting Started

### Install Dependencies

```bash
cd frameworks/nextjs-blog
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog.

### Build for Production

```bash
npm run build
```

The static site will be generated in the `out/` directory.

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── app/             # App Router (pages)
│   │   ├── posts/       # Posts pages
│   │   │   ├── [slug]/  # Dynamic post pages
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx # Posts index
│   │   ├── sobre/       # About page
│   │   │   └── page.tsx
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/      # React components
│   │   └── Counter.tsx  # Example interactive component
│   └── lib/
│       └── posts.ts     # Post data and utilities
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## Writing Blog Posts

Posts are defined in `src/lib/posts.ts`. You can:

### Option 1: Use the Simple Array (Current)

Edit `src/lib/posts.ts` and add posts to the array:

```typescript
const posts: Post[] = [
  {
    slug: 'my-post',
    title: 'My Post Title',
    date: '2026-01-04',
    description: 'A brief description',
    content: `Your content here in HTML or Markdown`,
  },
];
```

### Option 2: Use a Headless CMS

Integrate with popular headless CMS options:
- [Contentful](https://www.contentful.com/)
- [Sanity](https://www.sanity.io/)
- [Strapi](https://strapi.io/)
- [MDX](https://mdxjs.com/) (for local Markdown files)

### Option 3: Use MDX (Recommended for Markdown)

1. Install `@next/mdx`:
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

2. Configure in `next.config.ts`
3. Create `.mdx` files in `src/app/posts/`

## Creating Interactive Components

All components are React components. Use `'use client'` directive for client-side interactivity:

```tsx
'use client';

import { useState } from 'react';

export default function MyComponent() {
  const [state, setState] = useState(0);
  // ... your component logic
}
```

## Customization

### Colors

Edit `src/app/globals.css` to change colors:

```css
:root {
  --gray-500: #6b7280; /* Accent color */
  --bg-primary: var(--gray-950);
  /* ... other colors */
}
```

### Site Information

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Blog Title",
  description: "Your description",
};
```

## Deployment

### GitHub Pages

1. Copy `nextjs-deploy.yml` to `.github/workflows/`
2. Push to main branch
3. Enable GitHub Pages in repository settings (Source: GitHub Actions)

The site will be automatically deployed on every push.

### Other Platforms

Next.js works with all major hosting providers:
- **Vercel**: Native support (recommended)
- **Netlify**: Full support
- **AWS Amplify**: Full support
- **Cloudflare Pages**: Full support

## Why Next.js?

Next.js is perfect for React developers:

- **React Native**: Full React ecosystem access
- **App Router**: Modern file-based routing
- **Server Components**: Better performance by default
- **Hybrid Rendering**: SSG, SSR, ISR all available
- **Built-in Optimization**: Images, fonts, scripts
- **Developer Experience**: Fast Refresh, TypeScript support

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)
- [React Documentation](https://react.dev/)

## License

MIT
