<div align="center">
  <a href="https://mikemwansa.dev" rel="noopener" target="_blank">
    <img width="100" src="public/assets/logo-mark.png" alt="Logo" />
  </a>
</div>

<h1 align="center">Mike Mwansa</h1>

## Hi there! 👋<br>I'm [Mike Mwansa][website] 👨‍💻<br>Software Engineer<br>Founder of [Akivara Technologies][akivara]

## [About](https://mikemwansa.dev/about)

- 🚀 &nbsp;Building [projects](https://mikemwansa.dev/portfolio) of different sizes and complexity
- 💡 &nbsp;Founder of [Akivara Technologies][akivara], a venture studio for African infrastructure tech
- 💼 &nbsp;See my [journey](https://mikemwansa.dev/experience) so far
- 🎓 &nbsp;Second-year BSc Computer Science student at UNZA
- 🇿🇲 &nbsp;Based in Lusaka, Zambia

<details>
  <summary>🔽 &nbsp;<strong>More</strong></summary>

- 👔 &nbsp;Organized & independent
- 🤓 &nbsp;Love to code
- 🌱 &nbsp;Constantly learning
- 📐 &nbsp;Prone to perfectionism
- 🏆 &nbsp;Competed in ZNRAC & the Africa Digi Free Competition
- 🎧 &nbsp;Curates R&B and indie/alternative pop playlists
- ☕️ &nbsp;Coffee lover

</details>&nbsp;

[<img src="https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white" alt="GitHub" />][website]
[<img src="https://img.shields.io/badge/-LinkedIn-0a66c2?logo=linkedin&logoColor=white" alt="LinkedIn" />][linkedin]
[<img src="https://img.shields.io/badge/-Telegram-26a5e4?logo=telegram&logoColor=white" alt="Telegram" />][telegram]
[<img src="https://img.shields.io/badge/-Instagram-df7f57?logo=instagram&logoColor=white" alt="Instagram" />][instagram]

## Portfolio

This repo powers my personal portfolio site — built with React 19, TypeScript, Vite, MUI and Sass.

### Featured projects

- **ZedShelf** — Zambian student marketplace with UNZA classifieds, real-time messaging & Kwacha pricing
- **UniFlow** (Akivara Technologies) — offline-first academic platform: local RAG, on-device OCR, Ghost-Net mesh
- **Agri-Flow AI** (Akivara Technologies) — agricultural logistics for smallholder farmers, three-agent AI swarm, USSD/SMS
- **SchoolCore Zambia** — SMS-first, offline-friendly K-12 school administration platform
- **Weather App** — modular JS weather app with an Express backend proxy
- **Essie's Birthday Gift** — animated web gift with a heart garden, typewriter letter & photo gallery
- **Startech Communications** — landing page for a Lusaka telecom & Motorola dealer
- **Instagram Meme Pipeline** — automated content pipeline (GitHub Actions, Anthropic API, Imgflip)

## Getting started

```bash
npm install --legacy-peer-deps
npm run dev
```

Copy `.env.example` to `.env` and fill in your own EmailJS / reCAPTCHA / Google Maps keys before
deploying — the contact form and map work without them locally, they just won't send/render.

### Before you deploy, replace:

- [ ] Every `// TODO` in `src/data/common.ts` (GitHub/LinkedIn/Instagram/Telegram/WhatsApp links, email)
- [ ] Real phone number and email in `public/resume.pdf` (a full resume is already included — just update the contact line, or swap the file)
- [ ] The placeholder photos in `src/assets/img/pictures/` with your own
- [ ] The placeholder project screenshots/logos in `public/assets/projects` and `public/assets/logos`
- [ ] `details`/`url` links in `src/data/projects.ts` with your real repo/live links
- [ ] Domain references (`mikemwansa.dev`) in `index.html`, `public/robots.txt`, `public/sitemap.xml`

### Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run lint` — ESLint
- `npm run format` — Prettier
- `npm run test` — Playwright smoke tests

### Deploying

Ready for [Vercel](https://vercel.com) (`vercel.json` included) or
[Netlify](https://netlify.com) (`public/_redirects` included) out of the box.

### Error tracking (optional)

[Sentry](https://sentry.io) is wired in but disabled by default. Set
`VITE_SENTRY_DSN` in your environment (locally in `.env`, or in your host's
dashboard for production) to turn it on — no code changes needed.

[website]: https://github.com/mikemwansaa
[akivara]: https://akivara.dev
[linkedin]: https://linkedin.com/in/mikemwansaa
[telegram]: https://t.me/mikemwansaa
[instagram]: https://instagram.com/mikemwansaa
