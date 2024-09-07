import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const CategoryCard = () => {
  const listings = [
    {
      id: 1,
      name: "Bella Italia",
      image:
        "https://img.freepik.com/premium-photo/plate-risotto-italy-nature-background-professional-advertising-food-photo-ai-generated_755721-55473.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "A cozy Italian restaurant offering authentic pizza, pasta, and a warm atmosphere.",
      rating: 4.7,
      category: "Restaurants",
      subCategory: "Italian",
    },
    {
      id: 2,
      name: "Gourmet Burger Bar",
      image:
        "https://img.freepik.com/free-photo/meat-burger-tomato-cucumber-egg-coleslaw-lettuce-cheese-olives-side-view_141793-1801.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "A trendy spot for gourmet burgers with unique toppings and sides.",
      rating: 4.3,
      category: "Restaurants",
      subCategory: "Burgers",
    },
    {
      id: 3,
      name: "The Sushi Corner",
      image:
        "https://images.unsplash.com/photo-1506748686214e9df14f4d0d2b4b2b95eab14d3031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description:
        "Fresh and delicious sushi with a variety of rolls and sashimi.",
      rating: 4.6,
      category: "Restaurants",
      subCategory: "Reservations",
    },
    {
      id: 20,
      name: "Pizza Haven",
      image:
        "https://img.freepik.com/premium-photo/pizza-with-meat-cheese-broccoli-it_1141064-8642.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=sph",
      description:
        "Enjoy a variety of gourmet pizzas with fresh ingredients and a cozy atmosphere.",
      rating: 4.5,
      category: "Restaurants",
      subCategory: "TakeOut",
    },
    {
      id: 21,
      name: "Burger Bliss",
      image:
        "https://img.freepik.com/premium-photo/fish-burger-bliss_1302875-5453.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "Savor the best burgers in town, made with high-quality beef and fresh toppings.",
      rating: 4.3,
      category: "Restaurants",
      subCategory: "TakeOut",
    },
    {
      id: 22,
      name: "Sushi Sensation",
      image:
        "https://img.freepik.com/premium-photo/plate-sushi-with-piece-sushi-it_947794-51119.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybridjpg",
      description:
        "Experience a delightful array of sushi rolls, sashimi, and other Japanese delicacies.",
      rating: 4.6,
      category: "Restaurants",
      subCategory: "TakeOut",
    },
    {
      id: 23,
      name: "Taco Terrace",
      image:
        "https://img.freepik.com/free-photo/view-delicious-food-sold-streets-city_23-2151516917.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "Indulge in authentic Mexican tacos with a variety of fillings and salsas.",
      rating: 4.4,
      category: "Restaurants",
      subCategory: "TakeOut",
    },
    {
      id: 24,
      name: "Pasta Paradise",
      image:
        "https://img.freepik.com/free-photo/grated-cheese-farfalle-pasta-plate_23-2147925968.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "Enjoy classic Italian pasta dishes made with homemade sauces and fresh ingredients.",
      rating: 4.7,
      category: "Restaurants",
      subCategory: "TakeOut",
    },
    {
      id: 25,
      name: "Salad Sanctuary",
      image:
        "https://img.freepik.com/free-photo/vegetarian-salad-with-cherry-tomato-mozzarella-lettuce_2829-4756.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "A healthy option offering a variety of fresh salads and light meals.",
      rating: 4.1,
      category: "Restaurants",
      subCategory: "TakeOut",
    },
    {
      id: 5,
      name: "The Bistro",
      image:
        "https://img.freepik.com/free-photo/close-up-woman-eating-iskender-kebab-copper-platter-with-pickles-yogurt-ayran_141793-2082.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "A bistro offering a diverse menu with both local and international dishes.",
      rating: 4.5,
      category: "Restaurants",
      subCategory: "Delivery",
    },
    {
      id: 6,
      name: "The Bistro",
      image:
        "https://img.freepik.com/free-photo/close-up-woman-eating-iskender-kebab-copper-platter-with-pickles-yogurt-ayran_141793-2082.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "A bistro offering a diverse menu with both local and international dishes.",
      rating: 4.5,
      category: "Pizza",
      subCategory: "Cheese",
    },
    {
      id: 7,
      name: "The Bistro",
      image:
        "https://img.freepik.com/free-photo/close-up-woman-eating-iskender-kebab-copper-platter-with-pickles-yogurt-ayran_141793-2082.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "A bistro offering a diverse menu with both local and international dishes.",
      rating: 4.5,
      category: "FastFood",
      subCategory: "Burgers",
    },
    {
      id: 31,
      name: "Curry House",
      image:
        "https://img.freepik.com/free-photo/delicious-indian-curry-with-chapati_141793-1854.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "An Indian fast-food spot specializing in flavorful curries and fresh naan.",
      rating: 4.7,
      category: "FastFood",
      subCategory: "Indian",
    },
    {
      id: 32,
      name: "Spice Junction",
      image:
        "https://img.freepik.com/free-photo/plate-vegetable-biryani_141793-1965.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description: "Known for its spicy biryani and traditional Indian snacks.",
      rating: 4.6,
      category: "FastFood",
      subCategory: "Indian",
    },
    {
      id: 33,
      name: "Tandoori Delight",
      image:
        "https://img.freepik.com/free-photo/tandoori-chicken-plate_141793-2051.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "Offers a variety of tandoori dishes with authentic flavors.",
      rating: 4.5,
      category: "FastFood",
      subCategory: "Indian",
    },
    {
      id: 34,
      name: "Masala Express",
      image:
        "https://img.freepik.com/premium-photo/dal-bhat_1107769-15834.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "Famous for its masala dosa and other South Indian delights.",
      rating: 4.4,
      category: "FastFood",
      subCategory: "Indian",
    },
    {
      id: 35,
      name: "Bombay Street Eats",
      image:
        "https://img.freepik.com/free-photo/pav-bhaji-indian-street-food_141793-2123.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description: "Brings the taste of Bombay street food to your plate.",
      rating: 4.8,
      category: "FastFood",
      subCategory: "Indian",
    },
    {
      id: 36,
      name: "Delhi Diner",
      image:
        "https://img.freepik.com/free-photo/plate-punjabi-chole-bhature_141793-2200.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      description:
        "Offers a variety of traditional Delhi dishes with a fast-food twist.",
      rating: 4.3,
      category: "FastFood",
      subCategory: "Indian",
    },
  ];

  const { categoryName, subCategoryName } = useParams();
  const category = categoryName.replace(/-/g, " ");
  const subCategory = subCategoryName
    ? subCategoryName.replace(/-/g, " ")
    : null;

  const [sort, setSort] = useState("most-recent");

  // Filtering and sorting logic
  const filteredAndSortedListings = listings
    .filter((listing) => listing.category === category)
    .filter((listing) => !subCategory || listing.subCategory === subCategory)
    .sort((a, b) =>
      sort === "most-recent" ? b.id - a.id : b.rating - a.rating
    );

  return (
    <div className="container mx-auto py-6 px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105"
          >
            <img
              src={listing.image}
              alt={listing.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-xl text-[#060640] mb-2">
                {listing.name}
              </h2>
              <p className="text-gray-700 mb-4">{listing.description}</p>
              <div className="flex items-center justify-between w-full">
                <p className="text-yellow-500 font-bold">{listing.rating} ★</p>
                <Link
                  to={`/category/${categoryName.replace(/ /g, "-")}/${
                    subCategoryName
                      ? subCategoryName.replace(/ /g, "-") + "/"
                      : ""
                  }${listing.id}`}
                  className="text-[#060640] hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
