<div align="center">
  <img src="assets/images/logo.png" alt="Greenstone Solutions" width="360">

  <h3>The official marketing website for Greenstone Solutions LLC</h3>
  <p>A Texas-based consulting firm helping businesses navigate complex challenges with clarity, strategy, and confidence.</p>

  <p>
    <img alt="Static Site" src="https://img.shields.io/badge/site-static%20HTML%2FCSS%2FJS-6EBC20?style=flat-square">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-6EBC20?style=flat-square">
    <img alt="Made in" src="https://img.shields.io/badge/made%20in-Austin%2C%20TX-6EBC20?style=flat-square">
  </p>

  <a href="https://greenstonesolutions.net">🌐 Live Site</a>
</div>

---

## About

**Greenstone Solutions** is a business consulting firm founded in 2024 and headquartered in Austin, Texas. This repository contains the source for the company's public website — built as a fast, dependency-free static site with no frameworks, no build step, and no bloat.

## ✨ Features

- 🎨 **Light & dark mode** — theme is detected from system preference and persisted via `localStorage`
- ⚡ **Zero build step** — plain HTML, CSS, and JavaScript, deployable anywhere
- 📱 **Fully responsive** — mobile-first layout with an accessible collapsible nav
- 🧩 **Glassmorphism UI** — soft glass-card components with subtle scroll reveal animations
- ♿ **Accessible by default** — skip links, ARIA labeling, and semantic markup throughout
- 🔍 **SEO-ready** — Open Graph metadata, canonical URLs, sitemap, and `robots.txt` included

## 🗂️ Site Map

| Page | Path | Description |
|---|---|---|
| Home | `/` | Hero, services overview, and company highlights |
| About | `/about/` | Company story and mission |
| Services | `/services/` | Custom software, cloud & infrastructure, mobile apps, IT consulting |
| Portfolio | `/portfolio/` | Selected project work |
| Employees | `/employees/` | Team profiles |
| Contact | `/contact/` | Get in touch |

## 📁 Project Structure

```
Greenstone Website/
├── index.html              # Home page
├── about/                  # About page
├── services/                # Services page
├── portfolio/               # Portfolio page
├── employees/                # Team page + individual profiles
├── contact/                  # Contact page
├── assets/
│   ├── css/style.css        # Global styles
│   ├── js/main.js           # Theme toggle, nav, scroll reveal
│   └── images/
│       ├── logo.png          # Full wordmark logo
│       ├── logo-mark.png     # Standalone "G" mark (source asset)
│       ├── icon.png / icon-512.png
│       ├── team/              # Employee headshots
│       └── favicons/          # favicon.ico/.svg, apple-touch-icon, web app manifest icons
├── site.webmanifest
├── sitemap.xml
├── robots.txt
└── serve.bat                 # Quick local dev server
```

## 🚀 Getting Started

This is a static site — no dependencies to install.

### Option 1: Quick start (Windows)

```bash
serve.bat
```

This spins up a local server at `http://localhost:8000` using Python's built-in HTTP server.

### Option 2: Manual

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## 🛠️ Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties for theming, no framework
- **Vanilla JavaScript** — no dependencies

## 📄 License

Licensed under the [MIT License](LICENSE) © 2026 Fayed AL Fahad.

---

<div align="center">
  <sub>Built with care in Austin, Texas 🌱</sub>
</div>
