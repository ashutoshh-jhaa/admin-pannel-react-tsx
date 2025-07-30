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

const UsersGrowthChart: React.FC = () => {
  const userGrowthData = [
    { name: "Jul", users: 0 },
    { name: "Aug", users: 200 },
    { name: "Sep", users: 180 },
    { name: "Oct", users: 310 },
    { name: "Nov", users: 400 },
    { name: "Dec", users: 480 },
    { name: "Jan", users: 530 },
    { name: "Feb", users: 400 },
    { name: "Mar", users: 500 },
    { name: "Apr", users: 650 },
    { name: "May", users: 920 },
    { name: "Jun", users: 1000 },
  ];
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-green-100">Users Growth</h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={userGrowthData}>
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
              type="bump"
              dataKey="users"
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

export default UsersGrowthChart;
