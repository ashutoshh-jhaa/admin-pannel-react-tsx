import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SalesOverviewChart: React.FC = () => {
  const salesData = [
    { name: "Jul", sales: 3400 },
    { name: "Aug", sales: 4400 },
    { name: "Sep", sales: 9400 },
    { name: "Nov", sales: 5400 },
    { name: "Dec", sales: 5400 },
    { name: "Jan", sales: 8400 },
    { name: "Feb", sales: 1400 },
    { name: "Mar", sales: 9400 },
    { name: "Apr", sales: 2400 },
    { name: "May", sales: 9400 },
    { name: "Jun", sales: 3900 },
  ];
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-green-100">
        Sales Overview
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3B5563" />
            <XAxis dataKey={"name"} />
            <YAxis stroke="#9ca4af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
