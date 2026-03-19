# RedLine

## 1. 🛠️ Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | React | v18.3.1 |
| **Language** | TypeScript | v5.5.3 |
| **Build Tool** | Vite (with SWC plugin) | v5.4.1 |
| **CSS** | Tailwind CSS | v3.4.11 |
| **UI Components** | shadcn/ui (built on Radix UI) | Latest |
| **Routing** | React Router DOM | v6.26.2 |
| **Animation** | Framer Motion | v12.9.4 |
| **Data Fetching** | TanStack React Query | v5.56.2 |
| **Forms** | React Hook Form + Zod | v7.53.0 / v3.23.8 |
| **Icons** | Lucide React | v0.462.0 |
| **Charts** | Recharts | v2.12.7 |
| **Notifications** | Sonner + React Hot Toast | v1.5.0 / v2.5.2 |
| **Map** | Google Maps (embedded iframe) | — |
| **Analytics** | Vercel Analytics (`@vercel/analytics`) | v1.5.0 |

**Pages built:**
- `/` — Home / Landing
- `/about-us` — About Us
- `/careers` — Careers
- `/privacy-policy` — Privacy Policy
- `/terms-of-service` — Terms of Service
- `/cookies-policy` — Cookies Policy
- `/try-redline` — Free Trial CTA page

---

## 2.  Hosting

The website is hosted on **[Vercel](https://vercel.com)** — a cloud-based platform for frontend deployments.

- `vercel.json` is present in the repo root, confirming Vercel configuration.
- Vercel handles SPA routing via a catch-all rewrite rule:
  ```json
  { "rewrites": [{"source": "/(.*)", "destination": "/"}] }
  ```
- `@vercel/analytics` is integrated directly in the app (`App.tsx`).

> ✅ **This IS a cloud deployment** — not a self-hosted or on-premise setup.

---

## 3. Cloud Account Details

Since this is hosted on **Vercel (cloud)**, there is no traditional server to manage. Account access is needed for:

| Service | What to hand over |
|---|---|
| **Vercel** | Access to the Vercel team/account that owns the project (email login or team invite) |
| **GitHub** | Access to the GitHub repository that is connected to Vercel |
| **GoDaddy** | Login credentials / delegate access to the domain account |

---

## 4.  Deployment Strategy

The deployment pipeline is **fully automated** — **GitHub → Vercel → GoDaddy**:

```
Developer pushes code to GitHub
        ↓
Vercel detects push via webhook (CI/CD integration)
        ↓
Vercel auto-builds the project (`vite build`)
        ↓
Vercel deploys to its CDN (global edge network)
        ↓
Custom domain (GoDaddy) points to Vercel via DNS records
```

| Step | Detail |
|---|---|
| **Trigger** | Every `git push` to the connected branch (usually `main`) |
| **Build command** | `vite build` (outputs static files) |
| **Preview deploys** | Vercel also creates preview URLs for every PR/branch automatically |
| **Rollback** | Vercel keeps deployment history; one-click rollback available |
| **No manual upload** | Zero FTP or manual server configuration needed |

---

## 5. Re-deployment Flow
 Here is the step-by-step re-deployment process:

**When a code change is made:**

1. Developer edits code
2. Commits and pushes:
   ```sh
   git add .
   git commit -m "feat: update hero section"
   git push origin main
   ```
3. Vercel automatically detects the push and starts a new build
4. Build completes in ~1–2 minutes
5. New version is live at `redlineoutsourcing.com`

---

## 6.  Domain

- **Domain name:** `redlineoutsourcing.com`
- **Registered via:** **GoDaddy**
- **Connection:** DNS records on GoDaddy point to Vercel's servers

**Subscription Model:** GoDaddy domains are typically **annual subscription-based renewals** (not a one-time purchase). The domain must be renewed each year to remain active.

> ⚠️ Ensure auto-renewal is enabled on GoDaddy, or add a calendar reminder before the renewal date to avoid domain expiry.

---

## 7. 📁 Codebase Access

**Full codebase is available at:** `https://github.com/deba4667/RedLine_Landing.git`

To grant complete access:
- **GitHub Repository:** Share the GitHub repo URL + add collaborators/transfer ownership
- **Vercel:** Invite the new owner to the Vercel project (Settings → Members)
- **GoDaddy:** Transfer domain ownership or share login credentials

**Repository structure summary:**
```
RedLine_Landing/
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, Hero, etc.)
│   ├── pages/            # Route-level pages (Index, AboutUs, Careers, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # App root with routing
│   └── main.tsx          # App entry point
├── public/               # Static assets
├── index.html            # HTML entry point
├── vercel.json           # Vercel deployment config
├── vite.config.ts        # Vite build config
├── tailwind.config.ts    # Tailwind theme config
└── package.json          # Dependencies
```

---

## 8. SaaS Subscriptions

| Service | Purpose | Integration Method | Notes |
|---|---|---|---|
| **EmailJS** | Contact form email delivery | `@emailjs/browser` npm package | Used via 3 env variables: `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` |
| **Vercel** | Hosting + CI/CD + Analytics | Platform-level | Free tier likely used; check if on a paid plan |
| **Google Maps** | Embedded office location map | Iframe embed | No API key visible — uses public embed (free) |

> ⚠️ **EmailJS Credentials** are stored as Vercel environment variables (not in the codebase). Access to the EmailJS account is needed to obtain `Service ID`, `Template ID`, and `Public Key`.

---

## 9. 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────┐
│                  USER's BROWSER                     │
│                                                     │
│   React SPA (Single Page Application)               │
│   Built with Vite + TypeScript + Tailwind CSS       │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │  Pages   │  │Components│  │  External SaaS   │  │
│  │ /        │  │ Navbar   │  │                  │  │
│  │ /about   │  │ Hero     │  │ EmailJS          │  │
│  │ /careers │  │ Contact  │  │ (contact emails) │  │
│  │ /privacy │  │ Footer   │  │                  │  │
│  │ /terms   │  │ Map      │  │ Google Maps      │  │
│  │ /try-rl  │  │ ...      │  │ (iframe embed)   │  │
│  └──────────┘  └──────────┘  │                  │  │
│                               │ Vercel Analytics │  │
│                               └──────────────────┘  │
└───────────────────┬─────────────────────────────────┘
                    │ HTTPS
┌───────────────────▼─────────────────────────────────┐
│              VERCEL CDN (Global Edge)               │
│         Serves pre-built static files               │
│         (HTML + JS + CSS bundles)                   │
└───────────────────┬─────────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────────┐
│              GODADDY DNS                            │
│    redlineoutsourcing.com → Vercel Edge IP          │
└─────────────────────────────────────────────────────┘
```

**Architecture Type:** **Static Frontend SPA (No Backend)**

| Attribute | Detail |
|---|---|
| **Type** | Jamstack / Static Site |
| **Rendering** | Client-Side Rendering (CSR) |
| **Server** | None — Vercel serves pre-built static files |
| **Database** | None |
| **API calls** | Only to EmailJS (outbound from browser) |
| **State management** | Local React state (no Redux/Zustand) |
| **Scalability** | Automatically handled by Vercel CDN |

---

> **Summary:** This is a lean, modern, serverless marketing/landing website. The entire application is static HTML/JS/CSS hosted on Vercel's CDN, with the domain registered on GoDaddy. The only dynamic capability is the contact form, powered by EmailJS. The CI/CD pipeline is fully automated via GitHub → Vercel.

