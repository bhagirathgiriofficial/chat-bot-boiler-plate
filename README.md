# MERN AI Chatbot (Starter)

Boilerplate for the tutorial: static UI + an Express server with a health check. All logic is written live.

## Prerequisites

- Node.js 18+
- A MongoDB URI (Atlas or local)
- A Groq API key

## Install

```bash
npm run install:all
```

## Env setup

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

Then fill in the values in both `.env` files.

## Run

```bash
npm run dev
```

Client: http://localhost:5173 · Server health: http://localhost:5000/api/health

## Folder overview

| Path | Purpose |
| --- | --- |
| `client/` | React + Vite + Tailwind UI |
| `client/src/App.jsx` | Layout + hardcoded sample data |
| `client/src/components/` | Sidebar, ChatWindow, MessageBubble, ChatInput |
| `server/` | Node + Express API |
| `server/src/index.js` | App entry: cors, json, health route |
| `server/src/models`, `routes`, `controllers`, `services` | Empty folders, filled during the tutorial |
| `package.json` (root) | Runs client + server together |
