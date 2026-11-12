# Hejbulla Asad Shehab — Academic & Research Portfolio

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion and Lucide icons.
All content lives in **one file**: `src/data/site.ts`.

---

## 1. Project structure

```
shehab-portfolio/
├── public/
│   ├── Hejbulla_Asad_Shehab_CV.pdf     ← the "Download CV" file (replace to update)
│   └── images/profile.webp / .jpg      ← your photo
├── src/
│   ├── data/site.ts                    ← ALL your content (edit this)
│   ├── lib/utils.ts
│   ├── app/
│   │   ├── layout.tsx                  ← fonts, SEO metadata, theme script
│   │   ├── page.tsx                    ← assembles the sections + JSON-LD
│   │   ├── globals.css                 ← colors (light/dark) and base styles
│   │   ├── icon.svg                    ← favicon
│   │   ├── opengraph-image.tsx         ← social preview image
│   │   ├── sitemap.ts, robots.ts       ← Google indexing
│   │   └── loading.tsx, error.tsx, not-found.tsx
│   └── components/
│       ├── Navbar, Footer, ThemeToggle, Reveal, Section, Tag, SocialIcon, ContactForm
│       └── sections/ Hero, About, Education, ResearchInterests,
│                     ResearchExperience, Publications, Projects,
│                     Skills, Achievements, Contact
├── .env.example
├── package.json, tsconfig.json, next.config.mjs, postcss.config.mjs
```

## 2. Set up your computer (one time)

1. Install **Node.js LTS** (version 20 or newer) from https://nodejs.org — run the installer with default options.
2. Install **Git** from https://git-scm.com/downloads.
3. Install **VS Code** from https://code.visualstudio.com (recommended editor).
4. Open a terminal (Windows: "Command Prompt" or PowerShell; Mac: Terminal) and check:
   ```bash
   node -v
   npm -v
   git --version
   ```
   Each command should print a version number.
5. Tell Git who you are (once):
   ```bash
   git config --global user.name "Hejbulla Asad Shehab"
   git config --global user.email "hejbulla.shehab10@gmail.com"
   ```

## 3. Run the website locally

Unzip the project, then in the terminal:

```bash
cd shehab-portfolio
npm install
cp .env.example .env.local      # Windows: copy .env.example .env.local
npm run dev
```

Open http://localhost:3000. Edits to files appear instantly.

Before deploying, always run a production check:

```bash
npm run typecheck
npm run build
```

Both must finish without errors. If you see an error, copy the full message and send it to me.

## 4. Update your content

Open `src/data/site.ts`. Things you should fill in:

| What | Where in `site.ts` |
|------|--------------------|
| Full author lists for each paper | `publications[].authors` |
| DOI / paper links | `publications[].links` — add `{ label: "Read Paper", href: "..." }` or `{ label: "View DOI", href: "https://doi.org/..." }` |
| Year for the AICEI paper | `publications[].year` |
| Confirm each paper's status | `publications[].status` (`"Published"`, `"Accepted"`, `"Under Review"`) |
| GitHub repo links for projects | `projects[].github` |
| Show your phone number (hidden by default) | `profile.showPhone = true` |

To replace your CV: overwrite `public/Hejbulla_Asad_Shehab_CV.pdf` with the new file (same name).

### Contact form
- **Default:** works immediately — it opens the visitor's email app addressed to you.
- **Better:** create a free form at https://formspree.io, copy the form ID, and set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` (and later in Vercel). Messages then arrive directly in your inbox.

## 5. Upload to GitHub

1. Create an account at https://github.com (you already have `shehab1959`).
2. Click **New repository** → name it `shehab-portfolio` → keep it **Public** (or Private, both work with Vercel) → **do not** add a README → **Create repository**.
3. In your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/shehab1959/shehab-portfolio.git
   git push -u origin main
   ```
   If GitHub asks for a password, use a **Personal Access Token** (GitHub → Settings → Developer settings → Personal access tokens) or sign in through the browser window that appears.

## 6. Deploy on Vercel

1. Go to https://vercel.com/signup and choose **Continue with GitHub**.
2. Click **Add New… → Project**, find `shehab-portfolio`, click **Import**.
3. Vercel detects Next.js automatically. Leave the build settings unchanged.
4. Open **Environment Variables** and add (optional but recommended):
   - `NEXT_PUBLIC_SITE_URL` = your final URL (see step 8, then redeploy once)
   - `NEXT_PUBLIC_FORMSPREE_ID` = your Formspree ID, if you set one up
5. Click **Deploy**. After about a minute you will see a success screen.

## 7. Get your permanent URL

On the success screen (and under **Project → Domains**) you get a free address such as `https://shehab-portfolio.vercel.app`. This link is permanent — put it on your CV, LinkedIn, Google Scholar and ResearchGate.

## 8. Fix the SEO address (important)

1. Copy your real URL.
2. In Vercel: **Project → Settings → Environment Variables** → set `NEXT_PUBLIC_SITE_URL` to it (no trailing `/`).
3. **Deployments → ⋯ on the latest → Redeploy.**
4. Optional but helpful for Google: open https://search.google.com/search-console, add your URL as a property, and submit `https://YOUR-URL/sitemap.xml`.

## 9. Update the website later

Edit files → then:

```bash
git add .
git commit -m "Update publications"
git push
```

Vercel rebuilds and publishes automatically within about a minute. Each change gets a preview URL, and `main` becomes the live site.

## 10. Custom domain (optional)

1. Buy a domain (e.g. `hejbullashehab.com`) from Namecheap, GoDaddy, Cloudflare, etc.
2. In Vercel: **Project → Settings → Domains → Add** → enter the domain.
3. Vercel shows DNS records (an `A` record for the root domain and a `CNAME` for `www`). Add them at your domain registrar's DNS settings.
4. Wait a few minutes to a few hours; Vercel issues the HTTPS certificate automatically.
5. Update `NEXT_PUBLIC_SITE_URL` to the new domain and redeploy.

## 11. Final checklist before sharing

- [ ] `npm run build` passes with no errors
- [ ] Every paper's authors, status, year and links are correct in `site.ts`
- [ ] Download CV button downloads the latest PDF
- [ ] GitHub, LinkedIn, Google Scholar and ResearchGate links open the right profiles
- [ ] Contact form tested (send yourself a message)
- [ ] Checked on phone, tablet and desktop, in light and dark mode
- [ ] `NEXT_PUBLIC_SITE_URL` set to the real URL and redeployed
- [ ] Sitemap submitted in Google Search Console
- [ ] Link pasted into a chat app to confirm the social preview image appears
