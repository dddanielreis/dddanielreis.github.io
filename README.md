# Static Blog Framework Comparison

Multiple minimalist blog implementations showcasing different modern frameworks - all with dark mode, gray accents, and Brazilian Portuguese interface.

## 📚 Available Frameworks

This repository contains **three complete blog implementations** using different static site generators:

### 1. **Hugo** - Fastest Build Times
- 📂 Location: `frameworks/hugo-blog/`
- ⚡ Build time: <1ms per page
- 🎯 Best for: Content-heavy sites, non-developers
- 🔧 Language: Go (no setup needed)

### 2. **Astro** - Best Performance ⭐ RECOMMENDED
- 📂 Location: `frameworks/astro-blog/`
- ⚡ Ships zero JavaScript by default (40x less than Gatsby)
- 🎯 Best for: Modern static blogs with optional React components
- 🔧 Language: JavaScript/TypeScript + React support

### 3. **Next.js** - Full React Framework
- 📂 Location: `frameworks/nextjs-blog/`
- ⚡ Static export + full React ecosystem
- 🎯 Best for: React developers, complex interactions
- 🔧 Language: TypeScript/React

## 🎨 Common Features

All implementations include:
- ✨ Minimalist dark mode design
- 🎨 Gray accent colors (#6b7280)
- 🇧🇷 Brazilian Portuguese interface
- 📱 Fully responsive
- 🚀 GitHub Actions deployment workflows
- 📝 Markdown-based content (Hugo, Astro) or data-based (Next.js)

## 🚀 Quick Start

Choose your framework and follow its README:

| Framework | Setup | Dev Server | Build |
|-----------|-------|------------|-------|
| **Hugo** | Install Hugo CLI | `hugo server -D` | `hugo` |
| **Astro** | `npm install` | `npm run dev` | `npm run build` |
| **Next.js** | `npm install` | `npm run dev` | `npm run build` |

### Detailed Instructions

Each framework has its own detailed README:
- [Hugo Documentation](./frameworks/hugo-blog/README.md) (Portuguese)
- [Astro Documentation](./frameworks/astro-blog/README.md) (English)
- [Next.js Documentation](./frameworks/nextjs-blog/README.md) (English)

## 📊 Framework Comparison

| Feature | Hugo | Astro ⭐ | Next.js |
|---------|------|---------|---------|
| **JavaScript Size** | 0 KB | 5 KB | 87+ KB |
| **Build Speed** | ⚡⚡⚡ Fastest | ⚡⚡ Fast | ⚡ Good |
| **React Support** | ❌ No | ✅ Optional | ✅ Full |
| **Learning Curve** | Easy | Easy | Medium |
| **Setup Complexity** | Low | Medium | Medium |
| **Lighthouse Score** | 100 | 98-100 | 90-95 |
| **Best For** | Simple blogs | Modern blogs | React apps |

## 🎯 Which Framework Should You Choose?

### Choose **Hugo** if:
- You want the fastest builds
- You prefer simple configuration
- You don't need JavaScript interactivity
- You want the easiest setup

### Choose **Astro** ⭐ if:
- You want best performance
- You might need React components later
- You value modern development experience
- You want zero JavaScript by default

### Choose **Next.js** if:
- You're a React developer
- You need complex client-side interactions
- You want full React ecosystem access
- You plan to add dynamic features later

## 🚀 Deployment

All three frameworks include GitHub Actions workflows in `.github/workflows/`:

- `hugo-deploy.yml` - Deploy Hugo Blog
- `astro-deploy.yml` - Deploy Astro Blog
- `nextjs-deploy.yml` - Deploy Next.js Blog

### Deployment Options

**Option 1: Manual Deployment (GitHub UI)**
1. Go to Actions tab in your repository
2. Select the workflow you want to run (Hugo, Astro, or Next.js)
3. Click "Run workflow" button
4. Choose the branch and click "Run workflow"

**Option 2: Automatic Deployment**
- Workflows automatically trigger when you push changes to `main` branch
- Each workflow only runs when files in its framework directory change

### Setup
1. Enable GitHub Pages in repository settings (Source: GitHub Actions)
2. Choose your preferred framework
3. Either run manually from Actions tab or push to main branch

## 📁 Repository Structure

```
dddanielreis.github.io/
├── .github/
│   └── workflows/          # GitHub Actions workflows
│       ├── hugo-deploy.yml
│       ├── astro-deploy.yml
│       └── nextjs-deploy.yml
├── frameworks/
│   ├── hugo-blog/          # Hugo implementation
│   │   ├── hugo.toml
│   │   ├── content/
│   │   ├── themes/
│   │   └── README.md
│   ├── astro-blog/         # Astro implementation
│   │   ├── src/
│   │   ├── package.json
│   │   └── README.md
│   └── nextjs-blog/        # Next.js implementation
│       ├── src/
│       ├── package.json
│       └── README.md
├── .gitignore
└── README.md               # This file
```

## 📖 Research Sources

This comparison is based on 2026 industry research:

- [Astro vs Next.js vs Remix Comparison (Octahedroid)](https://octahedroid.com/blog/astro-vs-nextjs-vs-remix-react-router-static-site-generators-comparison-2026)
- [Astro vs Next.js for Blogs in 2026](https://sourabhyadav.com/blog/astro-vs-nextjs-for-blogs-2026/)
- [Top 5 Static Site Generators in 2026 (Kinsta)](https://kinsta.com/blog/static-site-generator/)
- [Hugo vs Jekyll Benchmarking 2024](https://michaelnordmeyer.com/benchmarking-hugo-vs-jekyll-vs-github-pages-in-2024)

## 📝 Contributing

Feel free to submit issues or pull requests to improve any of the implementations.

## 📄 License

MIT

---

Built with ❤️ to compare modern static site generators
