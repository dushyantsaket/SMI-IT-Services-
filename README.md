# Simple Marketing Ideas

> **Creative Marketing. Powerful Software. Measurable Growth.**

A production-ready monorepo for the **Simple Marketing Ideas** company website — a Digital Marketing + Software Development firm based in Indore, India.

---

## 📁 Project Architecture

```
simple-marketing-ideas/
├── apps/
│   ├── web/              # React + Vite + Tailwind CSS public website
│   └── api/              # Node.js + Express backend API
├── packages/
│   ├── ui/               # Shared UI components
│   ├── config/           # Shared ESLint / Tailwind configs
│   └── types/            # Shared constants / types
├── .env.example
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Monorepo | pnpm workspaces + Turborepo |
| Frontend | React 18, Vite 5, Tailwind CSS v3 |
| Routing | React Router v6 |
| Icons | Lucide React |
| Backend | Node.js, Express |
| Security | Helmet, CORS, express-rate-limit |
| Email | Nodemailer |
| Linting | ESLint, Prettier |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8

```bash
npm install -g pnpm
```

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd simple-marketing-ideas

# Install all dependencies
pnpm install
```

### Environment Setup

```bash
# Copy environment template
cp .env.example apps/web/.env
cp .env.example apps/api/.env

# Fill in your credentials in each .env file
```

---

## 💻 Development

```bash
# Start all apps in dev mode
pnpm dev

# Start only the web app
pnpm dev:web

# Start only the API
pnpm dev:api
```

- Web: http://localhost:5173
- API: http://localhost:4000

---

## 🏗 Production Build

```bash
pnpm build
```

---

## 🔍 Lint & Format

```bash
pnpm lint
pnpm format
```

---

## 🌐 Website Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/software-services` | Software Services |
| `/marketing-services` | Marketing Services |
| `/about` | About Us |
| `/our-work` | Our Work (Portfolio) |
| `/our-work/:slug` | Project Detail |
| `/contact` | Contact |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |

### Contact Form Payload

```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (optional)",
  "company": "string (optional)",
  "service": "string (required)",
  "message": "string (required, min 10 chars)"
}
```

---

## 🔐 Environment Variables

See `.env.example` for all required environment variables.

**Never commit `.env` files.**

---

## 🚢 Deployment

The app is designed for production deployment behind NGINX:

```
Internet → NGINX → Frontend (apps/web/dist) + API (apps/api)
```

### Frontend
Build `apps/web` and serve `dist/` as static files via NGINX.

### Backend
Run `apps/api` with PM2 or a Node.js process manager.

---

## 📞 Contact

**Simple Marketing Ideas**  
34 Pink City, First Phase, Vijay Nagar  
Indore, Madhya Pradesh, 452010  
📞 +91 8085953085

---

© 2026 Simple Marketing Ideas. All rights reserved.
