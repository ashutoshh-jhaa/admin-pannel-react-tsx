import { motion } from "framer-motion";
import { Search } from "lucide-react";
import React, { useState } from "react";

const UsersTable: React.FC = () => {
  const users = [
    {
      id: 1,
      name: "Aarav Mehta",
      email: "aarav.mehta@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Isha Patel",
      email: "isha.patel@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Rohan Kumar",
      email: "rohan.kumar@example.com",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 4,
      name: "Diya Sharma",
      email: "diya.sharma@example.com",
      role: "Editor",
      status: "Pending",
    },
    {
      id: 5,
      name: "Karan Singh",
      email: "karan.singh@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 6,
      name: "Sneha Reddy",
      email: "sneha.reddy@example.com",
      role: "Viewer",
      status: "Inactive",
    },
    {
      id: 7,
      name: "Vikram Das",
      email: "vikram.das@example.com",
      role: "Editor",
      status: "Active",
    },
  ];

  const [searchString, setSearchString] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchString.toLowerCase()) ||
      user.email.toLowerCase().includes(searchString.toLowerCase()) ||
      user.role.toLowerCase().includes(searchString.toLowerCase()) ||
      user.status.toLowerCase().includes(searchString.toLowerCase()),
  );

  const handleDeleteUsers = (index: number) => {
    console.log("Delete", index);
  };

  const handleEditUsers = (index: number) => {
    console.log("Edit", index);
  };

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 mb-9 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-100">Users List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-700"
            onChange={(e) => setSearchString(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700 text-start">
          <thead>
            <tr>
              {["Name", "Email", "Role", "Status", "Actions"].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <div className="flex items-center">
                      <div className="size-10 rounded-full bg-gradient-to-r from bg-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="text-sm font-medium text-gray-100 ml-2">
                        {user.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${user.status === "Active" ? "bg-green-800 text-green-100" : "bg-red-800 text-ted-100"}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-100 flex gap-2">
                    <button
                      className="text-green-500"
                      onClick={() => handleEditUsers(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteUsers(index)}
                    >
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-4 text-center text-sm text-gray-400"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default UsersTable;
