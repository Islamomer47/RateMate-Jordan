import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ListingsGrid = () => {
  const listings = [
    // Restaurants
    {
      id: 1,
      name: "Gourmet Bistro",
      category: "Restaurants",
      description: "Fine dining with a scenic view and exquisite cuisine.",
      rating: 4.7,
      image:
        "https://img.freepik.com/free-photo/plate-profiteroles-served-with-chocolate-sauce_114579-2339.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Seafood Delight",
      category: "Restaurants",
      description: "Fresh seafood with a modern twist in a coastal setting.",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1780&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jakub-kapusnak-vAJnx4P4CwI-unsplash.jpg&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      name: "Urban Café",
      category: "Restaurants",
      description:
        "A cozy spot for coffee and pastries in the heart of the city.",
      rating: 4.3,
      image:
        "https://img.freepik.com/premium-photo/affogato-rainsoaked-patio-affogato-food-image-photography_1020697-546891.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    },

    // HomeServices
    {
      id: 4,
      name: "Luxury Cleaning",
      category: "HomeServices",
      description:
        "Top-notch cleaning services for residential and commercial spaces.",
      rating: 4.8,
      image:
        "https://img.freepik.com/premium-photo/cleaning-car-seats-by-hand-detailing-worker-cleaning-car-interiors-leather-furniture_76964-350878.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    },
    {
      id: 5,
      name: "Handyman Pro",
      category: "HomeServices",
      description: "Expert repairs and maintenance for all your home needs.",
      rating: 4.6,
      image:
        "https://img.freepik.com/free-photo/variety-handy-tools-dark-background-labor-day-background-concept_1150-41808.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=sph",
    },
    {
      id: 6,
      name: "Garden Masters",
      category: "HomeServices",
      description: "Professional gardening and landscaping services.",
      rating: 4.7,
      image:
        "https://img.freepik.com/premium-photo/landscape-architecture-design-renderings_605022-136008.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    },

    // AutoServices
    {
      id: 7,
      name: "Quick Fix Auto",
      category: "AutoServices",
      description: "Reliable auto repair services with fast turnaround.",
      rating: 4.4,
      image:
        "https://img.freepik.com/premium-photo/mechanic-repairing-car-engine_1261838-9626.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    },
    {
      id: 8,
      name: "Elite Car Wash",
      category: "AutoServices",
      description: "Premium car wash and detailing services for your vehicle.",
      rating: 4.6,
      image:
        "https://img.freepik.com/free-photo/car-wash-detailing-station_1303-22314.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    },
    {
      id: 9,
      name: "Tire Experts",
      category: "AutoServices",
      description:
        "Specialized tire services including sales, repairs, and replacements.",
      rating: 4.5,
      image:
        "https://img.freepik.com/free-photo/mid-adult-mechanic-working-with-car-tire-auto-repair-shop_637285-7618.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    },
  ];

  const { category } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 6;

  const filteredListings = listings.filter(
    (listing) => listing.category === category
  );
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = filteredListings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const totalPages = Math.ceil(filteredListings.length / listingsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-32">
        {currentListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={listing.image}
                alt={listing.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="absolute top-4 left-4 bg-[#e74c3c] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Featured
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {listing.name}
              </h2>
              <p className="text-gray-600 mb-4">{listing.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-2 text-gray-700 font-semibold">
                    {listing.rating}
                  </span>
                </div>
                <Link
                  to={`/listing/${category}/${listing.id}`}
                  className="text-white bg-[#060640] hover:bg-[#05053f] font-semibold py-2 px-4 rounded-lg shadow-md transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

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
    </>
  );
};

export default ListingsGrid;
