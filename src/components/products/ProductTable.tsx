import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

const ProductTable: React.FC = () => {
  const productData = [
    {
      id: 1,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 1299,
      stock: 150,
      sales: 340,
    },
    {
      id: 2,
      name: "Yoga Mat",
      category: "Fitness",
      price: 799,
      stock: 80,
      sales: 210,
    },
    {
      id: 3,
      name: "Notebook",
      category: "Stationery",
      price: 199,
      stock: 300,
      sales: 125,
    },
    {
      id: 4,
      name: "LED Desk Lamp",
      category: "Home",
      price: 1499,
      stock: 60,
      sales: 95,
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 2299,
      stock: 40,
      sales: 185,
    },
  ];

  const [searchString, setSearchString] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const handleDeleteProduct = (index: number) => {
    console.log(index);
  };

  const handleEditProduct = (index: number) => {
    console.log(index);
  };
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 mb-9 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium mb-5 text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-700"
            onChange={(e) => handleInputChange(e)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700 text-start">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          {/* RENDER PRODUCTS */}
          {productData.length > 0 ? (
            <tbody className="divide-y divide-gray-700">
              {productData
                .filter((item) => {
                  if (searchString) {
                    return item.name
                      .toLowerCase()
                      .includes(searchString.toLowerCase()) ||
                      item.category
                        .toLowerCase()
                        .includes(searchString.toLowerCase())
                      ? item
                      : "";
                  } else {
                    return item;
                  }
                })
                .map((item, index) => (
                  <motion.tr
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    key={index}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                      <img
                        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        alt="productImage"
                        className="size-10 rounded"
                      />
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                      {item.stock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                      {item.sales}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2">
                      <button onClick={() => handleEditProduct(index)}>
                        {<Edit color="green" />}
                      </button>
                      <button onClick={() => handleDeleteProduct(index)}>
                        {<Trash2 color="red" />}
                      </button>
                    </td>
                  </motion.tr>
                ))}
            </tbody>
          ) : (
            <h1>No Products Found</h1>
          )}
        </table>
      </div>
    </motion.div>
  );
};

export default ProductTable;
