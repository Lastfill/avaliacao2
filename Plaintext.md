avaliador-imobiliario-rio/
├── .github/ workflows/ deploy.yml
├── prisma/
│ └── schema.prisma
├── public/
│ └── logo.svg
├── src/
│ ├── app/
│ │ ├── admin/
│ │ │ ├── dashboard/ page.tsx
│ │ │ └── page.tsx
│ │ ├── api/
│ │ │ ├── auth/ [...nextauth]/ route.ts
│ │ │ ├── evaluate/ route.ts
│ │ │ └── leads/ route.ts
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── components/
│ │ ├── AdminDashboard.tsx
│ │ ├── EvaluationForm.tsx
│ │ ├── EvaluationReport.tsx
│ │ └── ui/ (button, input, select, card, etc.)
│ ├── lib/
│ │ ├── db.ts
│ │ └── valuationEngine.ts
│ └── styles/
│ └── globals.css
├── .env.example
├── docker-compose.yml
├── Dockerfile
├── next.config.js
├── package.json
└── tailwind.config.js
