# Clarity AI — Master SaaS Application

Clarity AI is a commercial-grade SaaS AI platform that helps people understand their contracts/agreements, monthly bills, and personal data permissions.

## Key Features

1. **Three Independent AI Companions**:
   - **Document Analyzer** (`/companions/document`): Side-by-side contract viewer with exact quote highlights, renewal/notice deadlines, and "View Source" scroll/pulse interaction.
   - **AI Current Bill Teller** (`/companions/bill`): Line item comparison table, 3-month spending trend chart (Recharts), math check verification (`sum(items) === total`), and cautious "Worth Checking" recommendations.
   - **AI Personal Information** (`/companions/privacy`): Sensitive data scanner with solid block masking (`███████`), redacted text file exporter, 5-topic privacy policy evaluator, and SSRF-protected policy URL fetcher.
2. **DEMO MODE Out-of-the-Box**:
   - Runs with zero external accounts or API keys required using verified, deterministic sample datasets labeled `DEMO SAMPLE`.
3. **Data Privacy & Security**:
   - Strict per-user server-side session isolation.
   - Automatic post-processing file deletion.
   - Real JSON data export (`/api/settings/export`) and hard data deletion (`/api/settings/delete-all`).

## Tech Stack

- **Framework**: Next.js (App Router) + TypeScript + Tailwind CSS
- **Animations**: Framer Motion (`framer-motion`)
- **Icons**: Lucide React (`lucide-react`)
- **Charts**: Recharts (`recharts`)
- **Validation**: Zod (`zod`)
- **Text Processing**: `pdf-parse`, `mammoth`, `tesseract.js`
- **Auth**: `bcryptjs` password hashing + HTTP-only session cookies

## Setup & Running Instructions

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
pnpm dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Test Suite
```bash
pnpm test
# or
npm test
```

## Route Map

- `/login` — Login page
- `/signup` — Create Account page
- `/forgot-password` — Password reset form
- `/` — Home page with Hero & 3 Companion selection cards
- `/companions/document` — Document Analyzer workspace
- `/companions/document/results/[id]` — Document side-by-side analysis
- `/companions/bill` — AI Current Bill Teller workspace
- `/companions/bill/results/[id]` — Bill analysis results & Recharts trend chart
- `/companions/privacy` — Personal Information workspace (Scan & Policy tabs)
- `/companions/privacy/results/[id]` — Privacy scan & policy results
- `/history` — Filterable analysis history
- `/settings` — Settings, export data, & danger zone delete modal
- `/privacy-policy`, `/terms`, `/disclaimer` — Legal static pages
