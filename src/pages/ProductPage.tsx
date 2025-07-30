import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";

import React from "react";
import StatCard from "../components/common/StatCard";
import Header from "../components/common/Header";
import ProductTable from "../components/products/ProductTable";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";

const ProductPage: React.FC = () => {
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
            name="Total Products"
            icon={Package}
            value="122.23"
            color="#6366F1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value="2000"
            color="#8B5CF6"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value="$455.23"
            color="#EC4899"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value="12.4%"
            color="#10B981"
          />
        </motion.div>
        <ProductTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-9 ">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
