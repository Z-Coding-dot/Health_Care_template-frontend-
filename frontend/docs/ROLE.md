ROLE
You are a senior frontend architect. Build a production-grade, white-label Healthcare/Hospital website template that I will resell to multiple clients. Rebranding for a new client must require editing ONLY: src/data/siteConfig.ts (name, logo, colors, contact, socials, SEO), src/assets/, and src/i18n locale files. No component code changes.

TECH STACK
- React 18 + TypeScript (strict mode) + Vite
- Tailwind CSS (latest stable) with design tokens via CSS variables
- react-i18next + i18next-browser-languagedetector: languages "en", "fa-AF" (Dari), "ps" (Pashto). Max 3.
- react-router-dom (lazy-loaded routes)
- Redux Toolkit + react-redux (auth, UI state)
- React Context (only i18n/direction and theme)
- Framer Motion (animations)
- react-hook-form + zod (forms/validation)
- axios (API layer), lucide-react (icons), clsx + tailwind-merge
- ESLint + Prettier
No other UI kit (no MUI/Chakra). All UI is custom-built.

FOLDER STRUCTURE (follow exactly, TypeScript versions)
frontend/
├─ public/
├─ src/
│  ├─ api/            axios instance, interceptors, endpoint definitions
│  ├─ assets/         logo, images, fonts, icons
│  ├─ components/
│  │  ├─ layout/      Navbar, Footer, Container, Section, PageLayout, LanguageSwitcher, ScrollToTop, ScrollProgress
│  │  └─ ui/          Button, Card, Input, Textarea, Select, Modal, Badge, Accordion, Tabs, Avatar, Skeleton, Toast, Rating, SectionHeading, StatCard, ServiceCard, DoctorCard, TestimonialCard, BlogCard, PricingCard, Hero, CTASection, AnimatedWrapper
│  ├─ context/        ThemeContext, LanguageContext (sets dir="rtl"/"ltr" and lang on <html>)
│  ├─ data/           siteConfig.ts, navigation.ts, static content (services, doctors, departments, FAQs, blog posts)
│  ├─ hooks/          useScrollPosition, useMediaQuery, useDebounce, useInView, useAuth, useDirection
│  ├─ i18n/           index.ts + locales/en.json, fa-AF.json, ps.json
│  ├─ pages/          one folder per page
│  ├─ redux/          store.ts, slices (auth, ui), typed hooks
│  ├─ services/       auth.service.ts, appointment.service.ts, contact.service.ts, etc.
│  ├─ utils/          helpers, constants, validators, cn()
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css       ← the ONE global stylesheet
├─ eslint.config.js
├─ index.html
├─ package.json
└─ .gitignore

PAGES (10)
1. Home (hero, stats, services, departments, why-us, featured doctors, testimonials, CTA, latest blog)
2. About (mission, vision, history timeline, team, values)
3. Services (grid + filter)
4. Service Details
5. Departments
6. Doctors (search + filter by department, debounced)
7. Doctor Profile
8. Book Appointment (multi-step form with validation)
9. Blog / News
10. Contact (form, map placeholder, hours, emergency banner)
Plus: Login, Sign Up, Forgot Password, 404.

REUSABILITY RULES
- Every UI piece is a typed, reusable component with props and variants (size, variant, color) via a variant map. No copy-pasted markup.
- Pages contain only composition of components + data from src/data. No hardcoded text: every string comes from i18n keys.
- Layout primitives: Container (max-width, padding), Section (spacing, background variants, id), SectionHeading (title, subtitle, alignment).
- Content lives in src/data and locale files, never inside components.

STYLING RULES
- ALL styles live in src/index.css: Tailwind directives, CSS variable design tokens (colors, radius, shadows, fonts) that siteConfig overrides at runtime, and reusable classes with @layer components + @apply (e.g. .btn, .btn-primary, .card, .container-app, .section, .input, .heading-1...).
- Components use these classes; avoid long inline utility strings.
- Light/dark mode support via tokens.
- Use logical properties (ms-, me-, ps-, pe-, start-, end-) so RTL/LTR works without duplicate styles.
- Fonts: Inter for English; an Arabic-script font with Pashto glyph support (e.g., Noto Sans Arabic or Vazirmatn) for Dari/Pashto. Verify Pashto letters render.
- Design: modern, clean, trustworthy medical look, calm blue/teal default palette, generous whitespace, rounded cards, soft shadows, fully responsive (mobile-first), WCAG AA contrast.

ANIMATIONS
- Framer Motion page transitions (AnimatePresence) on every route.
- Scroll-reveal on every section (reusable AnimatedWrapper with fadeUp/fadeIn/slide/scale variants and stagger).
- Hero with animated background/shapes and animated headline.
- Hover/tap micro-interactions on cards and buttons.
- Animated counters for stats.
- Respect prefers-reduced-motion.
- ScrollToTop on route change + floating "back to top" button + top scroll progress bar.

AUTH PAGES
Beautiful split-screen Login and Sign Up (illustration/brand side + form side), zod validation, show/hide password, loading and error states, social-login button placeholders, mock auth service structured so a real backend can replace it later. Protected route wrapper.

i18n
- Language switcher in navbar, persisted in localStorage.
- Auto set document dir and lang on change.
- Complete translations for all three languages for every page (no missing keys; fallback to en).
- Dates/numbers formatted per locale.

SYSTEM-DESIGN PRINCIPLES TO APPLY (frontend-relevant only, from github.com/karanpratapsingh/system-design)
- Separation of concerns and layered architecture (UI → hooks → services → api).
- Route-level code splitting and lazy loading; image lazy loading; optimized/responsive images (webp).
- Caching: API response caching in services layer, memoization where measured.
- Debounce/throttle for search and scroll handlers.
- Centralized error handling (axios interceptors, ErrorBoundary, toast).
- Loading states with skeletons.
- Config-driven design (siteConfig) for multi-tenant/white-label reuse.
- SEO: per-page title/meta via react-helmet-async, semantic HTML, accessibility (aria, keyboard nav, focus states).

DELIVERABLES
1. Working project scaffold with all folders/files above and install/run instructions.
2. Complete code for every component, page, slice, service, hook, and locale file. No placeholders or "..." omissions.
3. A short README section: "How to rebrand for a new client" (step by step).
4. Everything must pass `tsc --noEmit`, ESLint, and `vite build` with no errors.

WORKFLOW
Build in this order and confirm each step compiles before moving on: (1) scaffold + config + index.css tokens, (2) i18n + contexts + redux, (3) layout + ui components, (4) pages, (5) auth pages, (6) animations polish, (7) README. If any requirement is ambiguous, ask me one precise question before proceeding.

-----------------------------------------------------------------------------------

API & SERVICES (replaces any earlier mention)
- Add .env.example with:
    VITE_API_BASE_URL=
    VITE_USE_MOCK=true
- src/api/client.ts: axios instance using VITE_API_BASE_URL, request/response interceptors, centralized error normalization, 401 handling (logout + redirect), timeout, and retry for idempotent GET requests only.
- src/api/endpoints.ts: all endpoint paths as typed constants.
- src/api/types.ts: request/response TypeScript types + zod schemas. Validate responses with zod.
- Each service (auth, appointment, contact, doctors, services, departments, blog) exposes ONE interface. Two implementations per service:
    - *.mock.ts (uses src/data, simulated latency)
    - *.http.ts (uses api/client)
  A factory in src/services/index.ts picks the implementation from VITE_USE_MOCK. Components and hooks never know which is active.
- In-memory cache with TTL for GET responses in the services layer.
- Include docs/API_CONTRACT.md listing every endpoint, method, request body, response shape, and error format, so any backend developer can implement it.

AUTH (replaces earlier auth rules)
- Design for httpOnly-cookie sessions (withCredentials: true) as the default. Do NOT store JWTs in localStorage.
- Keep only non-sensitive user info (name, role) in Redux.
- Endpoints: POST /auth/login, /auth/register, /auth/logout, /auth/forgot-password, GET /auth/me.
- Protected route wrapper calls /auth/me on app load.

REBRAND README ADDITION
- Step: set VITE_USE_MOCK=false and VITE_API_BASE_URL=<client backend> to go live, and adapt the *.http.ts mapping if the client's response shapes differ.

BUILD TOOL
- Vite + React + TypeScript template. Path alias "@/" → src/. Include vite.config.ts, tsconfig.json with strict mode, and tsconfig.node.json.