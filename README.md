# Naweel Global — Official Website

> *"Art with soul, Inspired from Indonesia"*

The official frontend for **[naweelglobal.com](https://naweelglobal.com)** — a single-page marketing site and product catalogue for Naweel Global, an Indonesian artisan export company.

---

## 🌿 About Naweel Global

Naweel Global connects the world with the beauty of Indonesian art. We share the stories of local creators to bring a colourful, creative lifestyle to people everywhere.

We are a sister company of **Inpetro Gemilang** (est. 2006), a trusted supplier of oilfield equipment, expanding in 2025 to support local artisans exporting high-quality Indonesian handicrafts globally.

**Contact:** salesnaweel@gmail.com · +62-8588-1763-711
**Address:** Jln. HR. Rasuna Said Kav 3-4, Jakarta 12950, Indonesia

---

## 📄 Pages

### `index.html` — Homepage
| Section | Description |
|---|---|
| **Hero** | Full-screen artisan workshop photo, brand name, slogan, two CTA buttons |
| **Vision** | Brand vision statement with editorial gold-ruled layout |
| **Mission** | 5 mission pillars with large gold numerals |
| **Why Choose Us** | 5 value cards on forest-green background |
| **Our Story** | Company heritage narrative + rotating Inpetro Gemilang badge |
| **Contact** | Email, phone, and address cards with direct links |

### `catalogue.html` — Product Catalogue
| Feature | Description |
|---|---|
| **Hero Banner** | Page title over artisan background |
| **Live Search** | Real-time text filter across all products |
| **Category Filters** | Textiles · Woodwork · Weaving · Ceramics · Jewellery · Home Décor |
| **Product Grid** | 8 artisan product cards with photos, origin labels, descriptions |
| **Product Modal** | Detailed view with specs, tags, and pre-filled enquiry email |
| **CTA Banner** | Prompts custom sourcing enquiries |

---

## 🗂️ Project Structure

```
NaweelWebsite/
├── index.html              # Homepage (single-page)
├── catalogue.html          # Product catalogue page
├── README.md
└── assets/
    ├── css/
    │   ├── style.css       # Global design system & homepage styles
    │   └── catalogue.css   # Catalogue-specific styles
    ├── js/
    │   ├── main.js         # Shared JS (nav, scroll reveal, parallax)
    │   └── catalogue.js    # Catalogue JS (filter, search, modal, product data)
    └── images/
        ├── hero_background.png     # Hero section background
        ├── artisan_pattern.png     # Batik ornament divider
        └── products/
            ├── batik_fabric.png
            ├── carved_wood.png
            ├── rattan_basket.png
            ├── embroidered_textile.png
            ├── ceramic_pottery.png
            ├── silver_jewelry.png
            ├── wayang_puppet.png
            └── bamboo_lamp.png
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Forest Green | `#1a4a3a` | Primary brand colour, section backgrounds |
| Warm Cream | `#f7f3ec` | Page background, hero text |
| Gold Accent | `#c4985a` | Section labels, buttons, accents |
| Heading Font | Cormorant Garamond | Editorial serif for all headings |
| Body Font | Jost | Clean sans-serif for body text |

---

## ⚙️ Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, Grid, Flexbox, `@keyframes`, `clamp()`
- **Vanilla JavaScript** — No frameworks or dependencies
- **Google Fonts** — Cormorant Garamond + Jost
- **No build tools required** — open and run directly

---

## 🚀 Running Locally

```bash
# Using npx serve (recommended)
npx serve .

# Or simply open index.html in your browser
```

Visit `http://localhost:3000` (or the port shown in your terminal).

---

## 🌐 Deployment (GitHub Pages)

This site is configured for **GitHub Pages** deployment from the `main` branch root.

1. Go to **Settings → Pages** in this repository
2. Set Source to `Deploy from a branch`
3. Select branch: `main`, folder: `/ (root)`
4. Save — the site will be live at `https://salesnaweel.github.io/NaweelWebsite/`

To use a custom domain (`naweelglobal.com`), add a `CNAME` file with the domain name and configure DNS with your registrar.

---

## ✨ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Scroll-triggered fade-up animations via `IntersectionObserver`
- ✅ Sticky navbar with transparent → frosted-green scroll transition
- ✅ Mobile hamburger menu with animated X toggle
- ✅ Hero parallax effect
- ✅ Product category filtering + live search
- ✅ Product detail modal with spec grid and pre-filled enquiry mailto
- ✅ Subtle gold cursor trail (desktop)
- ✅ Rotating heritage badge (Our Story section)
- ✅ SEO meta tags, semantic HTML, aria labels

---

## 📬 Enquiries

For product sourcing or partnership enquiries:
**salesnaweel@gmail.com** · **+62-8588-1763-711**

---

*© 2025 Naweel Global · naweelglobal.com · All rights reserved.*
