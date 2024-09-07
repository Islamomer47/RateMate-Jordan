import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "FastFood",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png",
      subcategories: [
        {
          id: 1,
          name: "Burgers",
        },
      ],
    },
    {
      id: 2,
      name: "Pizza",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
      subcategories: [
        {
          id: 1,
          name: "Cheese",
        },
      ],
    },
    {
      id: 3,
      name: "Wings",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png",
      subcategories: [],
    },
    {
      id: 4,
      name: "FastFood",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png",
      subcategories: [
        {
          id: 1,
          name: "Indian",
        },
      ],
    },
    {
      id: 5,
      name: "Latest Deals",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png",
      subcategories: [],
    },
    {
      id: 6,
      name: "Restaurant Rewards",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png",
      subcategories: [],
    },
  ];

  const categoriesPerPage = 4; // Number of categories to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  // Get the categories to display on the current page
  const startIndex = (currentPage - 1) * categoriesPerPage;
  const currentCategories = categories.slice(
    startIndex,
    startIndex + categoriesPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="max-w-[1640px] m-auto px-4 pt-20">
        <h1 className="text-[#060640] font-bold text-4xl text-center">
          Top Rated Menu Items
        </h1>
        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 lg:px-32">
          {currentCategories.map((category) => (
            <div key={category.id} className="bg-gray-100 rounded-lg p-4">
              <Link
                to={`/category/${category.name}${
                  category.subcategories.length > 0
                    ? `/${category.subcategories[0].name}`
                    : ""
                }`}
                className="flex justify-between items-center hover:bg-white cursor-pointer duration-500 p-4 rounded-lg"
              >
                <h2 className="font-bold sm:text-xl text-[#060640]">
                  {category.name}
                </h2>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-20"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <ul className="flex space-x-4 justify-center py-6">
          <li
            className={`flex items-center justify-center shrink-0 w-10 h-10 rounded-full ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200 cursor-pointer"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-3 ${
                currentPage === 1 ? "fill-gray-400" : "fill-gray-600"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </li>
          {[...Array(totalPages)].map((_, pageIndex) => (
            <li
              key={pageIndex}
              className={`flex items-center justify-center shrink-0 border-2 cursor-pointer text-base font-bold w-10 h-10 rounded-full ${
                currentPage === pageIndex + 1
                  ? "bg-[#060640] text-white border-[#060640]"
                  : "hover:bg-gray-50 text-[#333]"
              }`}
              onClick={() => handlePageChange(pageIndex + 1)}
            >
              {pageIndex + 1}
            </li>
          ))}
          <li
            className={`flex items-center justify-center shrink-0 w-10 h-10 rounded-full ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200 cursor-pointer"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-3 ${
                currentPage === totalPages ? "fill-gray-400" : "fill-gray-600"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Category;
