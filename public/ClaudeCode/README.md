# Handoff: Canudent — Clínica Dental Homepage

## Overview
Marketing homepage for **Canudent**, a modern Spanish dental clinic. The page's goal is to convey a friendly, approachable, slightly premium brand (not clinical/corporate) and drive appointment bookings ("Pedir cita"). It contains a sticky navbar, a hero with a primary CTA, a 3-card services section, a closing CTA band, and a footer. All copy is in **Spanish (es)**.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look and behavior. They are **not** production code to copy verbatim. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, Next, Astro, etc.) using its established components, tokens, and conventions. If no front-end environment exists yet, choose an appropriate framework and implement there. Treat the HTML/CSS as the spec for layout, color, type, and interaction — not as files to ship.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, radii, shadows, and hover states are all specified below and should be reproduced closely. Icons come from the Lucide icon library; use the codebase's existing icon system (Lucide is available for React/Vue) rather than re-importing the CDN build.

## Brand Tokens (current values)
These are the values currently baked into the design (the user selected a **blue** accent and **Varela Round** headings via the prototype's tweak panel).

| Token | Value | Use |
|---|---|---|
| `--accent` | `#2E7DD1` | Primary brand blue: buttons, links, icon chips, accents |
| `--accent-deep` | `#2666AB` | Hover/pressed state of accent |
| `--accent-soft` | `#EAF2FB` | Tinted backgrounds (eyebrow chip, icon chips, blobs) |
| `--ink` | `#0F2A3F` | Primary text / dark navy, footer background |
| `--muted` | `#5C7383` | Secondary/body text |
| `--line` | `#E7EEF1` | Borders, dividers, card outlines |
| `--radius` | `22px` | Default card/element corner radius |
| Star/rating gold | `#F5B301` | Hero rating stars |
| Page background | `#FFFFFF` | — |
| Max content width | `1200px` | `.wrap` container, 28px side padding (20px on mobile) |

> **Note on the original brand:** the source brand color is **teal `#0891B2`**. The user is currently previewing a **blue `#2E7DD1`** variant. Build with `#2E7DD1` as the live value but keep the accent a single source-of-truth token so it can be swapped back to teal trivially.

### Typography
- **Headings:** `Varela Round` (Google Fonts), weight 400. Rounded, friendly. Letter-spacing `-0.01em`, line-height `1.08`.
- **Body / UI:** `Nunito` (Google Fonts), weights 400–800. Body line-height `1.5`.
- Type scale (clamp = responsive):
  - Hero H1: `clamp(2.6rem, 4.6vw, 4rem)`, weight 600
  - Section H2: `clamp(2rem, 3.4vw, 2.9rem)`
  - CTA band H2: `clamp(1.9rem, 3vw, 2.6rem)`
  - Card H3: `1.5rem`
  - Hero lead paragraph: `1.22rem`, weight 500, `--muted`
  - Section subtitle: `1.12rem`, weight 500
  - Nav links: `0.98rem`, weight 700
  - Kicker/eyebrow: `0.86rem`, uppercase, letter-spacing `0.08em`

### Spacing & shape
- Card radius `--radius` (22px); buttons fully rounded (`999px` pill).
- Hero photo radius: `42px 42px 42px 120px` (asymmetric, organic bottom-left).
- Card icon chip: `64×64`, radius `20px`. Small float-card icon chip: `42×42`, radius `12px`.
- Section vertical rhythm: hero `78px top / 96px bottom`; services `96px top`; CTA band `90px`; footer `60px top / 36px bottom`.

### Shadows
- Primary button: `0 10px 24px -8px <accent 70%>`; hover `0 16px 30px -10px`.
- Card hover: `0 30px 60px -28px rgba(15,42,63,.28)`.
- Hero photo: `0 40px 80px -36px rgba(15,42,63,.42)`.
- Float cards: `0 20px 44px -18px rgba(15,42,63,.30)`.
- Navbar (scrolled): `0 6px 24px -14px rgba(15,42,63,.28)`.

## Screens / Views
Single page, top to bottom:

### 1. Navbar (sticky)
- **Layout:** flex row, height `78px`, max-width 1200 centered. Logo left, nav links, then right group pushed with `margin-left:auto`.
- **Logo:** `assets/wordmark-navy.png`, height `34px` (icon + "Canudent" wordmark).
- **Nav links:** `Servicios`, `Equipo`, `Tarifas`, `Contacto` (anchor links). Weight 700. Hover = accent color + an animated 2px accent underline growing from left.
- **Right group:** phone link `910 000 000` (phone icon in accent) + primary pill button **"Pedir cita"** (calendar-check icon) + a hamburger menu button (hidden ≥960px, shown <960px).
- **Background:** translucent white with `backdrop-filter: blur(14px)`. On scroll past 12px, gains the navbar shadow and more opaque background (toggled via a `.scrolled` class on scroll).

### 2. Hero
- **Layout:** 2-column grid `1.05fr .95fr`, gap `60px`, vertically centered. Collapses to single column <960px (media below copy, max-width 440px, centered).
- **Background decoration:** two soft radial "blobs" (`.b1` top-right accent-soft circle 560px; `.b2` bottom-left blurred accent tint 420px), `pointer-events:none`, behind content.
- **Left (copy):**
  - Eyebrow chip: accent-soft pill, map-pin icon, text "Clínica dental · Madrid".
  - H1: "Tu mejor **sonrisa** empieza aquí" — "sonrisa" is in accent color with a hand-drawn SVG underline stroke (`<path>` with accent stroke, opacity .4) positioned below the word.
  - Lead paragraph (max-width ~35ch): "Odontología moderna y cercana, con la última tecnología. Cuidamos de ti y de toda tu familia en un espacio donde te sentirás como en casa."
  - CTA row: primary "Pedir cita" (calendar-check) + ghost "Ver servicios" (stethoscope, links to #servicios).
  - Trust row: 5 gold stars + "**4,9 / 5** · más de 2.000 pacientes felices".
- **Right (media):**
  - Image placeholder, aspect-ratio 4/5, rounded 42px, with the heavy hero shadow. In the prototype this is a drag-drop `<image-slot>`; **in production use a real `<img>`** of a smiling patient / clinic interior. Placeholder caption: "Foto de paciente sonriendo / clínica".
  - Faint brand-mark watermark (`assets/mark-teal.png`) at ~10% opacity, rotated 8°, behind the photo top-right.
  - Two floating white cards over the photo edges: **"Abierto hoy / Lun–Sáb · 9:00–21:00"** (clock icon, bottom-left) and **"+15 años / cuidando sonrisas"** (heart-handshake icon, top-right).

### 3. Services (`#servicios`)
- **Section header (centered, max-width 620):** kicker "NUESTROS SERVICIOS" (accent, uppercase) → H2 "Todo lo que tu sonrisa necesita" → subtitle "Tratamientos a medida con materiales de primera calidad y un equipo que te explica cada paso con total transparencia."
- **Cards:** 3-column grid, gap `26px`, collapses to 1 column <960px. Each card:
  - White, 1px `--line` border, radius `--radius`, padding `38px 34px 32px`.
  - Icon chip (accent-soft bg, accent-deep icon) → on hover fills with accent, icon turns white.
  - A gradient top-bar (accent → light accent) that scales in from the left on hover; card lifts `-8px` with shadow.
  - "Saber más →" link (arrow nudges right on hover).
  - **Card content:**
    1. icon `align-center-horizontal` — **Ortodoncia invisible** — "Alinea tus dientes sin que nadie lo note, con férulas transparentes hechas a tu medida y revisiones cómodas."
    2. icon `shield-check` — **Implantes dentales** — "Recupera los dientes que faltan con implantes de titanio de alta calidad y resultados naturales y duraderos."
    3. icon `sparkles` — **Estética dental** — "Blanqueamiento y carillas para conseguir una sonrisa luminosa, armónica y completamente natural."

### 4. CTA Band
- Full accent gradient panel (`135deg, --accent → --accent-deep`), radius `40px`, padding `64px 56px`, white text. A soft radial white "glow" decoration top-right.
- Left: H2 "¿Listo para sentirte orgulloso de tu sonrisa?" + subtext "Reserva tu primera visita y diagnóstico sin compromiso."
- Right: white button "Reservar primera visita" (calendar-check icon).
- Flex row, wraps on small screens.

### 5. Footer (`#contacto`)
- Background `--ink` (navy), text white at 70% opacity.
- Top row (flex, wraps): brand block (white wordmark `uploads/wordmark-white.png` + tagline "Odontología moderna y cercana en el corazón de Madrid…") and 3 link columns:
  - **Servicios:** Ortodoncia invisible, Implantes dentales, Estética dental, Odontología general
  - **Clínica:** Sobre nosotros, Equipo, Tarifas, Blog
  - **Contacto:** 910 000 000, hola@canudent.es, "Calle de la Sonrisa, 12 · 28001 Madrid"
- Divider, then bottom row: "© 2026 Canudent. Todos los derechos reservados." and "Aviso legal · Privacidad · Cookies".

## Interactions & Behavior
- **Sticky navbar** adds shadow + opacity once `window.scrollY > 12` (toggle a class).
- **Hover states** on nav links (underline grow), buttons (lift + deeper bg), cards (lift, top-bar grow, icon fill, link arrow nudge). Transitions ~0.18–0.3s ease.
- **Smooth scroll** for in-page anchors (`scroll-behavior:smooth`).
- **Responsive:** at `≤960px` nav links + phone hide and a hamburger appears (wire a mobile drawer — not built in the prototype); hero & cards go single-column. At `≤560px` reduce side padding to 20px and CTA band padding.
- **Mobile menu:** the hamburger button exists but has no drawer in the prototype — implement one in production.

## State Management
Static marketing page — minimal state. Only runtime behavior: scroll-position → navbar shadow class, and a mobile menu open/close boolean to implement.

## Assets (included in this bundle)
- `assets/wordmark-navy.png` — navy "Canudent" icon+wordmark for the navbar (recolored from the original white logo).
- `assets/mark-teal.png` — standalone tooth mark, used as a faint hero watermark.
- `uploads/wordmark-white.png` — white icon+wordmark for the dark footer.
- The original brand logos were supplied as **white PNGs** (transparent). The navy/teal versions here were produced by tinting them. Ideally request **SVG** versions of the logo from the client for crisp scaling, and tint the mark to match whatever final accent color is chosen.
- **Icons:** [Lucide](https://lucide.dev). Names used: `phone`, `calendar-check`, `menu`, `map-pin`, `stethoscope`, `star`, `clock`, `heart-handshake`, `align-center-horizontal`, `shield-check`, `sparkles`, `arrow-right`.
- **Fonts:** Google Fonts — `Varela Round` (headings), `Nunito` (body).
- **Hero photo:** placeholder only — supply a real licensed image.

## Files
- `Canudent Home.html` — the complete prototype (HTML + inline CSS + JS). Primary reference.
- `image-slot.js` — prototype-only drag-drop image placeholder; replace with a real `<img>` in production.
- `tweaks-panel.jsx` — prototype-only design tweak panel (lets you swap accent color, heading font, corner radius, hero layout). **Do not port** — it is a design-exploration tool, not part of the product. It documents the intended theming axes: a single accent token, a heading-font choice, a global radius, and a split-vs-centered hero option.
