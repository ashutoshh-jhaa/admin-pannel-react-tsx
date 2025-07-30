import React from "react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { motion } from "framer-motion";
import { DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const SalesPage: React.FC = () => {
  const salesStats = {
    totalRevenue: "$1,234,567",
    averageOrderValue: "$78.90",
    conversionRate: "3.45%",
    salesGrowth: "12.3%",
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Products"} />
      <main className="max-w-7xl mx-auto py-6 lg:px-8 xl:px-20 ">
        {/*STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color="#6366F1"
          />
          <StatCard
            name="Avg. Order Value"
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color="#8B5CF6"
          />
          <StatCard
            name="Conversion Rate"
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color="#EC4899"
          />
          <StatCard
            name="Sales Growth"
            icon={DollarSign}
            value={salesStats.salesGrowth}
            color="#10B981"
          />
        </motion.div>
        <SalesOverviewChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};

export default SalesPage;
