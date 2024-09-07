import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FilterSection = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  const arrowVariants = {
    open: {
      rotate: 180,
      transition: { duration: 0.3 },
    },
    closed: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <h1 className="text-[#060640] font-bold text-4xl text-center">Filters</h1>{" "}
      <div className="flex items-center justify-center">
        <div className="bg-primary text-secondary p-4 rounded-lg w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("category")}
                className="w-full flex justify-between items-center p-2 border border-accent border-[#060640] rounded"
              >
                <span className="-z-50">Select Category</span>
                <motion.svg
                  className="w-4 h-4 -z-50"
                  initial="closed"
                  animate={activeMenu === "category" ? "open" : "closed"}
                  variants={arrowVariants}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {activeMenu === "category" && (
                  <motion.ul
                    className="absolute mt-2 w-full bg-white border border-accent rounded-lg shadow-lg z-10"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                  >
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Food
                    </li>
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Travel
                    </li>
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Entertainment
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            {/* Subcategory Dropdown */}
            <div className="relative ">
              <button
                onClick={() => toggleMenu("subcategory")}
                className="w-full flex justify-between border-[#060640] items-center p-2 border border-accent rounded"
              >
                <span className="-z-50">Select Subcategory</span>
                <motion.svg
                  className="w-4 h-4 -z-50"
                  initial="closed"
                  animate={activeMenu === "subcategory" ? "open" : "closed"}
                  variants={arrowVariants}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {activeMenu === "subcategory" && (
                  <motion.ul
                    className="absolute mt-2 w-full bg-white border border-accent rounded-lg shadow-lg z-10"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                  >
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Restaurants
                    </li>
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Hotels
                    </li>
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Attractions
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("sort")}
                className="w-full flex justify-between border-[#060640] items-center p-2 border border-accent rounded"
              >
                <span className="-z-50">Sort</span>
                <motion.svg
                  className="w-4 h-4 -z-50"
                  initial="closed"
                  animate={activeMenu === "sort" ? "open" : "closed"}
                  variants={arrowVariants}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {activeMenu === "sort" && (
                  <motion.ul
                    className="absolute mt-2 w-full bg-white border border-accent rounded-lg shadow-lg z-10"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                  >
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Most Popular
                    </li>
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Best Rating
                    </li>
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Newest
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            {/* Additional Filters */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("additional")}
                className="w-full flex justify-between border-[#060640] items-center p-2 border border-accent rounded"
              >
                <span className="-z-50">More Filters</span>
                <motion.svg
                  className="w-4 h-4 -z-50"
                  initial="closed"
                  animate={activeMenu === "additional" ? "open" : "closed"}
                  variants={arrowVariants}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {activeMenu === "additional" && (
                  <motion.ul
                    className="absolute mt-2 w-full bg-white border border-accent rounded-lg shadow-lg z-10"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                  >
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Price Range
                    </li>
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Rating
                    </li>
                    <li className="block px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Distance
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
