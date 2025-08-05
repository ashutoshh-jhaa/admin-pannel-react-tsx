# Admin Panel (React)

A modern and responsive admin panel built with React, Vite, Tailwind CSS, and TypeScript.

## Features

- ⚡ Vite for fast builds and development
- ⚛️ React 19 with React Router v7
- 🎨 Tailwind CSS for styling
- 📊 Recharts for data visualization
- ✨ Framer Motion for animations
- 🧩 Lucide Icons for clean UI
- ✅ ESLint & TypeScript support

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

```bash
git clone https://github.com/ashutoshh-jhaa/admin-pannel-react-tsx.git
cd admin-react
npm install
```

#### Development
```bash
npm run dev
```

#### Build
```bash
npm run build
```

#### Preview
```bash
npm run preview
```

### Folder Structure (Typical)
```bash
admin-react
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ components
│  │  ├─ analytics
│  │  │  ├─ AIPoweredInsights.tsx
│  │  │  ├─ ChannelPerformance.tsx
│  │  │  ├─ CustomerSegmentation.tsx
│  │  │  ├─ OverviewCards.tsx
│  │  │  ├─ ProductPerformance.tsx
│  │  │  ├─ RevenueChart.tsx
│  │  │  └─ UserRetention.tsx
│  │  ├─ common
│  │  │  ├─ Header.tsx
│  │  │  └─ StatCard.tsx
│  │  ├─ orders
│  │  │  ├─ DailyOrders.tsx
│  │  │  ├─ OrderDistribution.tsx
│  │  │  └─ OrdersTable.tsx
│  │  ├─ overview
│  │  │  ├─ CategoryDistributionChart.tsx
│  │  │  ├─ SalesChannelChart.tsx
│  │  │  └─ SalesOverviewChart.tsx
│  │  ├─ products
│  │  │  ├─ ProductTable.tsx
│  │  │  └─ SalesTrendChart.tsx
│  │  ├─ sales
│  │  │  ├─ DailySalesTrend.tsx
│  │  │  ├─ SalesByCategoryChart.tsx
│  │  │  └─ SalesOverviewChart.tsx
│  │  ├─ settings
│  │  │  ├─ ConnectedAccounts.tsx
│  │  │  ├─ DangerZone.tsx
│  │  │  ├─ Notifications.tsx
│  │  │  ├─ Profile.tsx
│  │  │  ├─ Security.tsx
│  │  │  ├─ SettingSection.tsx
│  │  │  └─ ToggleSwitch.tsx
│  │  ├─ Sidebar.tsx
│  │  └─ users
│  │     ├─ UserActivityHeatMap.tsx
│  │     ├─ UserDemographicsChart.tsx
│  │     ├─ UsersGrowthChart.tsx
│  │     └─ UsersTable.tsx
│  ├─ main.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ AnalyticsPage.tsx
│  │  ├─ OrdersPage.tsx
│  │  ├─ OverviewPage.tsx
│  │  ├─ ProductPage.tsx
│  │  ├─ SalesPage.tsx
│  │  ├─ SettingsPage.tsx
│  │  └─ UsersPage.tsx
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

### License
This project is licensed under the MIT License.
