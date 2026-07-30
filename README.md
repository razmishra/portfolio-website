# Rajneesh Mishra — Portfolio

Personal portfolio site for Rajneesh Mishra, Full Stack Engineer.

## Stack

- React (JavaScript) + Vite
- Tailwind CSS
- Framer Motion
- lucide-react

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Environment variables

Copy `.env.example` to `.env` and adjust as needed:

| Variable | Description |
| --- | --- |
| `VITE_RESUME_URL` | Public resume link (Google Drive URL or a path like `/resume.pdf`) |

Restart the dev server after changing `.env`.

On Vercel or Netlify, set the same `VITE_RESUME_URL` value in the project environment settings.

## Scripts

```bash
npm run dev      # local development
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # run oxlint
```

## Deploy

This is a static site. Deploy the Vite build output to Vercel or Netlify with no backend required.
