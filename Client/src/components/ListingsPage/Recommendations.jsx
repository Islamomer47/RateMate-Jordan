import React from "react";
import { Link, useParams } from "react-router-dom";

// Sample data for recommended listings
const recommendedListings = [
  // Restaurants category
  {
    id: 1,
    category: "Restaurants",
    image:
      "https://img.freepik.com/premium-photo/plate-food-with-plant-it_337384-107361.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    name: "The Gourmet Bistro",
    description:
      "A cozy spot serving gourmet meals with locally sourced ingredients.",
    rating: 4.5,
  },
  {
    id: 2,
    category: "Restaurants",
    image:
      "https://img.freepik.com/free-photo/enjoying-street-food-fest_23-2151543810.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    name: "Sunset Grill",
    description:
      "Enjoy a spectacular sunset while dining on fresh seafood and steaks.",
    rating: 4.0,
  },
  {
    id: 3,
    category: "Restaurants",
    image:
      "https://img.freepik.com/premium-photo/variety-tacos-are-table-with-variety-tacos_976492-60549.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    name: "Urban Eats",
    description:
      "Modern dining experience with an eclectic menu and vibrant atmosphere.",
    rating: 4.8,
  },
  // Home Services category
  {
    id: 4,
    category: "HomeServices",
    image:
      "https://img.freepik.com/premium-photo/reflecting-mirrors-polished-surface-ele-generative-ai_1169649-126130.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    name: "Elite Plumbing Solutions",
    description:
      "Reliable plumbing services with quick response times and expert technicians.",
    rating: 4.2,
  },
  {
    id: 5,
    category: "HomeServices",
    image:
      "https://img.freepik.com/premium-photo/elegant-landscaped-garden-with-hydrangeas-lush-greenery_1128296-307.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    name: "Green Thumb Landscaping",
    description:
      "Professional landscaping and garden maintenance to beautify your outdoor space.",
    rating: 4.1,
  },
  {
    id: 6,
    category: "HomeServices",
    image:
      "https://media.istockphoto.com/id/1131861548/photo/hands-in-yellow-gloves-washing-gas-stove.jpg?b=1&s=612x612&w=0&k=20&c=sYeynmUkcDAp6cRWMecJSx0l9fhlEfPyxHYOB87R6Fs=",
    name: "Sparkle Cleaners",
    description:
      "Top-notch cleaning services for homes and offices with a focus on detail.",
    rating: 4.6,
  },
  // Auto Services category
  {
    id: 7,
    category: "AutoServices",
    image: "https://www.example.com/images/autoservice1.jpg",
    name: "Precision Auto Repair",
    description:
      "Expert auto repair services with state-of-the-art diagnostic tools.",
    rating: 4.3,
  },
  {
    id: 8,
    category: "AutoServices",
    image: "https://www.example.com/images/autoservice2.jpg",
    name: "Speedy Tire Services",
    description: "Fast and efficient tire replacement and repair services.",
    rating: 4.4,
  },
  {
    id: 9,
    category: "AutoServices",
    image: "https://www.example.com/images/autoservice3.jpg",
    name: "AutoTech Service Center",
    description:
      "Comprehensive auto care with a focus on customer satisfaction and quality.",
    rating: 4.7,
  },
  // Add more categories and listings as needed
];

const Recommendations = () => {
  const { category } = useParams();

  // Filter listings based on the category
  const filteredListings = recommendedListings.filter(
    (listing) => listing.category === category
  );

  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-32">
      <h3 className="text-2xl font-semibold text-[#2c3e50] mb-6 text-center">
        Recommended for you
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-lg border border-gray-300 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <img
              src={listing.image}
              alt={listing.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {listing.name}
              </h4>
              <p className="text-gray-600 mb-4">{listing.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-400"
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
                  to={`/recommendations/${listing.category}/${listing.id}`}
                  className="text-[#060640] hover:underline font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
