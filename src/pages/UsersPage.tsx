import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";
import UsersGrowthChart from "../components/users/UsersGrowthChart";
import UserActivityHeatMap from "../components/users/UserActivityHeatMap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";

const UsersPage: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 lg:px-8 xl:px-20 ">
        {/*STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value="122.23"
            color="#6366F1"
          />
          <StatCard
            name="New Users"
            icon={UserPlus}
            value="2000"
            color="#8B5CF6"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value="$455.23"
            color="#EC4899"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value="12.4%"
            color="#10B981"
          />
        </motion.div>
        <UsersTable />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UsersGrowthChart />
          <UserActivityHeatMap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
