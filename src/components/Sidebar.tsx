import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const sidebarItems = [
    {
      name: "Overview",
      icon: BarChart2,
      color: "#6366f1",
      path: "/",
    },
    {
      name: "Products",
      icon: ShoppingBag,
      color: "#EC4899",
      path: "/products",
    },
    {
      name: "Users",
      icon: Users,
      color: "#100B981",
      path: "/users",
    },
    {
      name: "Sales",
      icon: DollarSign,
      color: "#10B981",
      path: "/sales",
    },
    {
      name: "Orders",
      icon: ShoppingCart,
      color: "#3B92F6",
      path: "/orders",
    },
    {
      name: "Analytics",
      icon: TrendingUp,
      color: "#F59E0B",
      path: "/analytics",
    },
    {
      name: "Settings",
      icon: Settings,
      color: "#6EE7B7",
      path: "/settings",
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800/50 p-4 flex flex-col border-r border-gray-700">
        <motion.button
          className="p-3 hover:bg-gray-700 transition-colors self-start rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {sidebarItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <motion.div className="flex items-center px-2 py-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: 24 }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-normal"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
