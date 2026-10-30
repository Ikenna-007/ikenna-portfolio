# Ikenna's Software Engineering Portfolio

A beginner-friendly full-stack portfolio starter built with React, Vite, Tailwind CSS v4, React Router, Node.js and Express.

## Requirements
- Node.js 20.19+ or 22.12+ (required by current Vite)
- npm

## Install
```bash
cd client
npm install
cd ../server
npm install
cp .env.example .env
```

## Run locally
Open two Terminal windows.

Terminal 1:
```bash
cd server
npm run dev
```

Terminal 2:
```bash
cd client
npm run dev
```

Open http://localhost:5173. Vite proxies `/api` requests to Express on port 4000.

## Enable email delivery
Configure SMTP in `server/.env`. Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`, and `CONTACT_FROM`. These settings must remain server-side and must never be placed in the React client.

Until SMTP is configured, the API returns HTTP 503 instead of pretending the email was sent.

## API
- `GET /api/health` — health check
- `POST /api/contact` — accepts `{ name, email, subject, message, website }`
- `website` is a hidden honeypot field and should remain blank.

## Before publishing
- Verify project descriptions, technologies, and claims.
- Replace the LinkedIn placeholder URL in `client/src/App.jsx`.
- Add your CV PDF to `client/public/` and link it.
- Keep `.env` secrets out of Git.
- Configure production CORS, rate limiting, spam protection, logging, and deployment settings before launch.

## Build
```bash
cd client
npm run build
```
