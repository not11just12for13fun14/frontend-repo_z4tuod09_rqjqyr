AxisOps AI - Developer Docs

Run
- Frontend: already configured with Vite + Tailwind. Use npm run dev.
- Backend: FastAPI with uvicorn. Auto-started by platform.
- Environment: Set VITE_BACKEND_URL in frontend to your backend URL.

Deploy
- Frontend: Static deploy via Vite build or Vercel.
- Backend: Deploy FastAPI to a managed service (Railway/Fly/Render). Provide DATABASE_URL and DATABASE_NAME.

Roadmap
- v1: Stripe checkout, role-based access, saved templates, real routing with maps API, photo AI via vision endpoint, inventory purchase orders.
- v1.1: Mobile app shell, offline inspections, customer portal.
- v2: Workforce optimization with live traffic, ML-based pricing, churn predictions.
