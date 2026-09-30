# Carewell Health template

Production-oriented white-label healthcare template built with React, TypeScript, Vite, Tailwind CSS, Redux Toolkit, React Router, Framer Motion, React Hook Form, Zod, and Axios.

## Run locally

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## How to rebrand for a new client

1. Edit `src/data/siteConfig.ts` for the name, logo path, colors, contact details, social links, and SEO copy.
2. Replace files in `src/assets/` and `public/assets/` with the client’s logo, imagery, and fonts.
3. Update `src/i18n/locales/en.json`, `fa-AF.json`, and `ps.json` for client-specific copy while keeping the same keys.
4. Set `VITE_USE_MOCK=false` and `VITE_API_BASE_URL=<client backend>` to go live.
5. If the backend response shapes differ, adapt only the relevant `src/services/*.http.ts` mapping and keep components unchanged.

Branding is intentionally isolated from component code so the same product foundation can serve multiple clients.
