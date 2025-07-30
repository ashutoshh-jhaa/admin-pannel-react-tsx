import React from "react";
import OverviewPage from "./pages/OverviewPage";
import ProductPage from "./pages/ProductPage";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import SalesPage from "./pages/SalesPage";
import UsersPage from "./pages/UsersPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

export default App;
