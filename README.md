# SettleLawers — Legal Debt Settlement & Anti-Harassment Shield

A multi-page static web application recreating and elevating the legal debt resolution, anti-harassment protection, and creditor settlement services of **LawyerSettle** (`https://www.lawyersettle.com/`) under the new brand identity **SettleLawers**, authored for GitHub user **Aman22kr**.

---

## 1. What the Website Does

**SettleLawers** represents distressed borrowers across India dealing with overdue unsecured debts (credit cards, personal loans, business loans, and digital lending app loans). The platform provides:
- **Anti-Harassment Shield**: Immediately halts aggressive third-party collection calls, abusive WhatsApp messages, and unannounced doorstep visits by enforcing Reserve Bank of India (RBI) regulations (RBI/2022-23/108).
- **Legal Defense Shield**: Prepares formal legal replies to statutory notices (such as Section 138 Negotiable Instruments Act cheque bounce notices, Section 25 PSSA summons, arbitration claims, and Lok Adalat notices).
- **Loan Settlement Shield**: Negotiates legitimate One-Time Settlements (OTS) directly with bank settlement committees, aiming to reduce total claimed debt by 40%–60% with an official Bank Sanction Letter and No Dues Certificate (NDC).
- **Interactive Settlement Calculator**: Real-time financial modeling tool calculating expected settlement ranges, money saved, and structured escrow monthly savings targets.
- **Harassment Incident Logger & Client Dossier**: Browser-persisted evidence logger for documenting collection agent infractions (outside 8 AM – 7 PM, abusive threats, workplace visits) to attach to formal RBI Ombudsman complaints.

---

## 2. Brand Identity & Reference Mapping

| Attribute | Reference Website | New Implementation |
| :--- | :--- | :--- |
| **Original URL** | `https://www.lawyersettle.com/` | `SettleLawers` |
| **Brand Wordmark** | LawyerSettle / LexAssure Services | **SettleLawers** |
| **GitHub Username** | — | `Aman22kr` |
| **Primary Color Palette** | Navy & Amber Gold (`#0f172a`, `#d97706`) | Tailored Legal Navy & Warm Amber |
| **Typography** | Sans-Serif | `Plus Jakarta Sans` & `Playfair Display` |
| **Legal Focus** | India (RBI Fair Practices Code) | Complete RBI Frameworks & Bar Council Advocacy |
| **Routing** | Standard Web Multi-page | React Router with `HashRouter` (GitHub Pages compatible) |

---

## 3. Implemented Pages & Architecture

1. **Homepage (`/`)**:
   - Hero banner with high-fidelity legal advocate imagery (`hero_legal_consultation`).
   - Live KPI stat strip (₹48+ Cr Settled, 9,450+ Families Protected, 45%–75% Avg Savings).
   - The Three Shields Architecture (Anti-Harassment, Legal Defense, Loan Settlement).
   - Embedded interactive Settlement Calculator.
   - Supported Loan Categories (Credit cards, personal loans, fintech apps, MSME debt, auto loans).
   - 3-Step Legal Resolution Process.
   - Verified before-and-after settlement case studies.
   - Video educational section with aspect-ratio-accurate **YouTube Video Placeholder**.
   - Standardized, compact **Advertisement Placeholder Unit**.

2. **About Page (`/about`)**:
   - The "Protection-First" philosophy.
   - Comparison matrix: SettleLawers vs Generic Unregulated Settlement Agencies.
   - Full legal team photography (`about_legal_team`).
   - Physical Chamber location in Yusuf Sarai, Green Park, South Delhi.

3. **Services Overview & Dedicated Detail Pages**:
   - `/services`: Comprehensive catalog of all legal defense capabilities.
   - `/services/anti-harassment`: Step-by-step recovery shield protocol, call diversion instructions, and cease & desist notices.
   - `/services/legal-defense`: Courtroom defense for Section 138 (Cheque Bounce), Section 25 (e-Mandate), unilateral arbitration quashing, and Lok Adalat awards.
   - `/services/loan-settlement`: Detailed OTS procedure, fraud-proof bank sanction letter verification, and No Dues Certificate delivery.

4. **Debt Settlement Calculator (`/calculator`)**:
   - Multi-parameter loan slider and category selector.
   - Dynamic settlement range computation (30% to 60%).
   - Calculation plan saving into `localStorage` with target monthly accumulation timeline.

5. **RBI Borrower Rights Directory (`/rights`)**:
   - Breakdown of Master Circular RBI/2022-23/108 (the 8 AM – 7 PM contact boundary, ban on intimidation, privacy rights).
   - 3-Step Guide to filing on the RBI Integrated Ombudsman (CMS) portal.
   - Interactive harassment incident modal launcher.

6. **Legal Insights / Blog (`/blogs` and `/blogs/:slug`)**:
   - Advocate-authored articles on dealing with recovery agents, understanding OTS, defending Section 138 notices, and rebuilding CIBIL scores.
   - Instant search and category filtering.
   - Client bookmarking functionality persisted to `localStorage`.
   - Single-click clipboard share.

7. **Free Case Evaluation & Contact (`/contact`)**:
   - Complete confidential evaluation intake with client-side validation.
   - Instant reference dossier generation (`#cons-XXXXX`).
   - Physical address, emergency 24/7 hotline, and consultation hours.

8. **My Case Tracker (`/tracker`)**:
   - Client portal displaying all submitted consultation requests, logged recovery agent harassment incidents, saved settlement plans, and bookmarked guides.
   - Copy evidence snippet for police/ombudsman filing.
   - Clear local data control.

9. **Privacy Policy (`/privacy`) & Terms of Service (`/terms`)**:
   - Transparent legal terms clarifying attorney-client confidentiality and disclaiming advance settlement escrow into third-party accounts.

10. **404 Not Found Page (`*`)**:
    - Graceful fallback with navigation links and emergency helpline access.

---

## 4. Project Structure

```
settlelawers/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated deployment workflow
├── public/                     # Static public assets
├── src/
│   ├── assets/
│   │   └── images/             # Generated high-fidelity visual assets
│   ├── components/
│   │   ├── AdBanner.tsx        # Compact advertisement placeholder unit
│   │   ├── Footer.tsx          # Comprehensive footer with legal disclaimers
│   │   ├── IncidentReportModal.tsx # Harassment incident logger modal
│   │   ├── Navbar.tsx          # 1-row, 3-zone Top Bar Contract navigation
│   │   ├── SettlementCalculator.tsx # Dynamic OTS financial calculator
│   │   └── YouTubePlaceholder.tsx   # Clean 16:9 blank video player placeholder
│   ├── context/
│   │   └── AppContext.tsx      # Browser localStorage state provider
│   ├── data/
│   │   ├── assets.ts           # Typed asset paths
│   │   └── mockData.ts         # Structured mock data (services, rules, cases, blogs)
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── AntiHarassmentPage.tsx
│   │   ├── BlogDetailPage.tsx
│   │   ├── BlogsPage.tsx
│   │   ├── CalculatorPage.tsx
│   │   ├── ClientTrackerPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── LegalDefensePage.tsx
│   │   ├── LoanSettlementPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PrivacyPage.tsx
│   │   ├── RbiRightsPage.tsx
│   │   ├── ServicesPage.tsx
│   │   └── TermsPage.tsx
│   ├── App.tsx                 # Root application with HashRouter
│   ├── index.css               # Tailwind CSS v4 and font definitions
│   └── main.tsx                # React entry point
├── .gitignore
├── index.html                  # HTML entry point with SettleLawers meta tags
├── metadata.json               # Applet metadata
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Committed deterministic lockfile
├── tsconfig.json
├── vite.config.ts              # Vite config with base: './'
└── README.md                   # Comprehensive deployment documentation
```

---

## 5. Prerequisites & Environment

- **Node.js**: Version 20.x or 22.x LTS (compatible with Node 22 specified in GitHub Actions).
- **npm**: Version 9.x or 10.x.

---

## 6. How to Install Dependencies

To install all required packages using the committed `package-lock.json`:

```bash
# Clean deterministic install
npm ci
```

If you add new packages in development:

```bash
npm install
```

---

## 7. How to Run the Development Server

Start the Vite development server on port 3000:

```bash
npm run dev
```

The application will be live at `http://localhost:3000` (or the host provided by your environment).

---

## 8. How to Generate and Preview the Production Build

Generate the production distribution bundle in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 9. How `localStorage` Is Used & Limitations

### What is Stored:
1. `settlelawers_consultations_v1`: Submitted case evaluation inquiries with reference IDs.
2. `settlelawers_incidents_v1`: Recovery agent harassment logs (dates, caller names, violation types, notes).
3. `settlelawers_plans_v1`: Custom OTS calculations generated in the calculator.
4. `settlelawers_bookmarks_v1`: Array of bookmarked article slugs.
5. `settlelawers_search_history_v1`: Recent search keywords.

### Limitations:
- **Device & Browser Specific**: Data saved in `localStorage` exists solely within the browser and device where it was entered. It does not synchronize to another computer or phone.
- **Not a Replacement for Live Database**: Form submissions do not connect to a live email server; they simulate realistic client dossier intake.
- **No Sensitive Secrets**: No passwords, credit card numbers, or bank account credentials are ever stored in `localStorage`.

---

## 10. GitHub Configuration for Aman22kr

1. Initialize git and commit all files:
   ```bash
   git init
   git add .
   git commit -m "Initial release of SettleLawers static web app"
   ```

2. Link to your GitHub repository under `Aman22kr`:
   ```bash
   git remote add origin https://github.com/Aman22kr/<repository-name>.git
   git branch -M main
   ```

---

## 11. Enabling GitHub Pages with GitHub Actions

1. Open your repository on GitHub: `https://github.com/Aman22kr/<repository-name>`
2. Click on **Settings** in the top navigation.
3. In the left sidebar, click on **Pages**.
4. Under **Build and deployment**:
   - In the **Source** dropdown, select **GitHub Actions** (do NOT choose "Deploy from a branch").
5. The pre-configured `.github/workflows/deploy.yml` will automatically detect push events to the `main` branch.

---

## 12. Pushing Changes & Automatic Deployment

Push your commit to the `main` branch:

```bash
git push -u origin main
```

- GitHub Actions will start the workflow defined in `.github/workflows/deploy.yml`.
- The workflow checks out the repository, installs dependencies using `npm ci`, runs `npm run build`, uploads the `./dist` artifact, and deploys it to GitHub Pages.
- Once complete, your live website will be available at:
  `https://aman22kr.github.io/<repository-name>/`

---

## 13. Troubleshooting Common Deployment Issues

1. **Assets return 404 on GitHub Pages**:
   - `vite.config.ts` includes `base: './'`. This relative base path ensures that CSS, JS, and image bundles resolve correctly under subpaths like `/repository-name/`.
2. **Page refresh results in 404**:
   - SettleLawers uses `HashRouter` (`/#/services`, `/#/calculator`, etc.). Hash routes do not send subpath requests to GitHub Pages static servers, guaranteeing that page refreshes always work without special 404 redirects.
3. **Workflow permissions error**:
   - Ensure repository settings allow GitHub Actions to deploy to Pages (`Settings` -> `Actions` -> `General` -> `Workflow permissions` set to "Read and write permissions").

---

## 14. Customization & Rebranding Guide

To update brand parameters or reuse this codebase for another client:
1. Open `src/data/mockData.ts` and modify `BRAND_INFO`:
   - `name`: Brand name
   - `phone`, `helpline`, `email`: Contact endpoints
   - `address`: Physical office chamber
2. Modify services or case studies in `src/data/mockData.ts`.
3. Update brand wordmark in `src/components/Navbar.tsx` and `src/components/Footer.tsx`.
4. Update page `<title>` and `<meta>` in `index.html` and `metadata.json`.

---

## 15. Mock Implementations & Current Limitations

- **Backend**: This is a frontend static application. Form submissions populate local client state and generate realistic reference numbers without transmitting data to a third-party CRM.
- **YouTube Placeholders**: Embedded video regions feature blank aspect-ratio placeholders per prompt specification instead of live YouTube embeds.
- **Advertisement Sections**: Reusable `<AdBanner />` components present standard slot mockups without tracking or third-party ad networks.
