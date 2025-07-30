import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Cell,
} from "recharts";

const SalesChannelChart: React.FC = () => {
  const salesChannelData = [
    { name: "Website", value: 4500 },
    { name: "Mobile App", value: 2500 },
    { name: "Marketplace", value: 2800 },
    { name: "Social Media", value: 1000 },
  ];

  const colors = ["#4ECDC4", "#F7B801", "#A29BFE", "#55EFC4"];

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-green-100">
        Sales by Channel
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart data={salesChannelData}>
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
            <Legend />
            <Bar dataKey={"value"} fill="#8884d8">
              {salesChannelData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
