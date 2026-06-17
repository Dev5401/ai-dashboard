# AI-Powered SaaS Dashboard

A modern, production-ready analytics dashboard built with React, TypeScript, and Tailwind CSS. Features AI-powered insights via Claude API, real-time data visualization, and a responsive design.

## ✨ Features

- **Dashboard Overview** — Key metrics, revenue trends, and KPIs at a glance
- **Interactive Charts** — Revenue trends, conversion funnels, traffic sources
- **Data Tables** — Users, transactions, activity logs with sorting and filtering
- **AI Assistant** — Ask questions about your data using Claude API
- **Dark Mode** — Built-in light/dark theme toggle
- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- **TypeScript** — Fully typed for safety and developer experience

## 🚀 Live Demo

[View Live Demo](https://ai-dashboard-demo.vercel.app) *(coming soon)*

## 📸 Screenshots

![Dashboard Overview](screenshots/dashboard.png)

## 🛠 Tech Stack

- **Frontend Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Charts:** Recharts
- **AI Integration:** Claude API (Anthropic)
- **Build Tool:** Vite
- **Code Quality:** ESLint + Prettier
- **Deployment:** Vercel

## 🏃 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Dev5401/ai-dashboard.git
cd ai-dashboard
npm install
```

### Environment Variables

Create a `.env.local` file:

```bash
VITE_CLAUDE_API_KEY=your_claude_api_key_here
```

Get your Claude API key from [Anthropic Console](https://console.anthropic.com).

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```bash
src/
  components/       # Reusable UI components (Sidebar, Topbar, etc.)
  pages/            # Page components (Dashboard, Analytics, etc.)
  layouts/          # Layout wrappers (MainLayout)
  contexts/         # React Context (ThemeContext)
  hooks/            # Custom hooks (useDashboardData, useTheme)
  data/             # Mock data and types
  types/            # TypeScript interfaces
  utils/            # Helper functions
  App.tsx           # Main app component
  main.tsx          # Entry point
```

## 🤖 AI Assistant

Ask your dashboard questions like:
- "What's my best performing month?"
- "Show me the growth trend"
- "Analyze our churn rate"

The AI assistant analyzes your data and provides insights in real-time.

## 📊 Sample Data

The dashboard uses mock data for demonstration. To connect real data:

1. Update `src/data/mockData.ts` with your API calls
2. Replace the `useDashboardData` hook with actual API integration
3. Update environment variables as needed

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your dashboard will be live in seconds.

### Deploy to Other Platforms

The project is built with Vite and works with any static hosting:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📝 Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run format    # Format code with Prettier
```

## 🔍 Code Quality

This project enforces strict TypeScript and ESLint rules:

- `@typescript-eslint/no-explicit-any` — No `any` types allowed
- `@typescript-eslint/no-unused-vars` — Catch unused code
- Prettier formatting on every commit

## 💡 Learning Goals

This project demonstrates:
- Modern React patterns (hooks, context, custom hooks)
- TypeScript best practices
- Responsive UI design with Tailwind CSS
- API integration and error handling
- Testing and code quality standards

## 📄 License

MIT

## 👤 Author

Built by Subham Mishra — [GitHub](https://github.com/Dev5401)

---

**Building a SaaS dashboard with AI insights.** *In progress — updates daily.*