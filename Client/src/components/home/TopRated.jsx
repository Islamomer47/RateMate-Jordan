import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// StarRating Component
const StarRating = ({ rating }) => {
  return (
    <span className="text-yellow-500 flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < Math.round(rating) ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
          />
        </svg>
      ))}
    </span>
  );
};

// EmojiRating Component
const EmojiRating = ({ rating, onEmojiClick }) => {
  const emojis = ["😀", "😊", "🙂", "😉", "😍"];
  return (
    <div className="flex items-center mt-3">
      {emojis.map((emoji, index) => (
        <motion.span
          key={index}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onEmojiClick(index + 1)}
          className={`text-4xl ${
            rating === index + 1 ? "text-yellow-500" : "text-gray-400"
          } cursor-pointer`}
        >
          {emoji}
        </motion.span>
      ))}
    </div>
  );
};

// Card Component
const Card = ({ card, onFavoriteClick, onEmojiClick }) => (
  <div
    key={card.id}
    className={`w-[325px] h-[450px] bg-[#ffffff] shadow-lg rounded-3xl p-5 hover:scale-105 transition-all duration-300`}
  >
    <div className="relative">
      <img
        src={card.imageUrl}
        alt={card.title}
        className="w-full h-[250px] rounded-[40px] object-cover object-center"
      />
      <motion.svg
        onClick={() => onFavoriteClick(card.id)}
        animate={{
          scale: card.isFavorited ? 1.2 : 1,
          fill: card.isFavorited ? "red" : "none",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="absolute top-8 right-10 w-10 h-10 cursor-pointer"
        style={{ outline: "none" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill={card.isFavorited ? "red" : "white"}
        />
      </motion.svg>
    </div>
    <div className="mt-5">
      <h2 className={`text-2xl font-bold mt-1 text-[#060640]`}>{card.title}</h2>
      <p className="text-gray-600 mt-1">{card.location}</p>
      <div className="flex items-center mt-1">
        <StarRating rating={card.rating} />
        <span className="ml-2 text-gray-600">({card.reviewCount})</span>
      </div>
      <EmojiRating
        rating={card.rating}
        onEmojiClick={(value) => onEmojiClick(card.id, value)}
      />
    </div>
  </div>
);

// TopRated Component
const TopRated = () => {
  const [cards, setCards] = useState([
    // Existing items
    {
      id: 6,
      title: "Gardening Experts",
      location: "Austin, TX",
      imageUrl:
        "https://img.freepik.com/premium-photo/rear-view-woman-walking-footpath_1048944-24628207.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      isFavorited: false,
      rating: 4.7,
      reviewCount: 80,
      reviews: [
        {
          userName: "Anna Green",
          comment: "Fantastic gardening services. My yard looks amazing!",
          rating: 5,
        },
        {
          userName: "Tom White",
          comment: "Very knowledgeable but a bit slow to start the work.",
          rating: 4,
        },
      ],
    },
    {
      id: 2,
      title: "Elegant Restaurant",
      location: "San Francisco, CA",
      imageUrl:
        "https://img.freepik.com/premium-photo/elegant-fine-dining-experience-set-chic-restaurant-with-diners-savoring-exquisitely-plated-dishes-against-backdrop-city-lights_943617-45274.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      isFavorited: false,
      rating: 4.2,
      reviewCount: 75,
      reviews: [
        {
          userName: "Carol White",
          comment: "Amazing food and service. Highly recommend!",
          rating: 5,
        },
        {
          userName: "David Brown",
          comment: "The ambiance was lovely, but the service was slow.",
          rating: 3,
        },
      ],
    },
    {
      id: 3,
      title: "Vintage Bookstore",
      location: "Seattle, WA",
      imageUrl:
        "https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118893.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      isFavorited: false,
      rating: 4.8,
      reviewCount: 85,
      reviews: [
        {
          userName: "Emily Clark",
          comment: "A hidden gem with a fantastic selection of books.",
          rating: 5,
        },
        {
          userName: "Frank Adams",
          comment: "A bit cluttered, but worth the visit for book lovers.",
          rating: 4,
        },
      ],
    },
    {
      id: 4,
      title: "Home Services Hub",
      location: "Chicago, IL",
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-man-cleaning-his-house_23-2148119212.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      isFavorited: false,
      rating: 4.6,
      reviewCount: 95,
      reviews: [
        {
          userName: "Sara Lee",
          comment:
            "Excellent service for home repairs. Reliable and efficient!",
          rating: 5,
        },
        {
          userName: "John Doe",
          comment: "Good work but a bit pricey.",
          rating: 4,
        },
      ],
    },
    {
      id: 1,
      title: "Cozy Cafe",
      location: "New York, NY",
      imageUrl:
        "https://img.freepik.com/premium-photo/morning-coffee-routine-quiet-cafe_1297101-9758.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      isFavorited: false,
      rating: 4.5,
      reviewCount: 120,
      reviews: [
        {
          userName: "Alice Johnson",
          comment: "Great atmosphere and delicious coffee!",
          rating: 5,
        },
        {
          userName: "Bob Smith",
          comment: "Nice place, but a bit overpriced.",
          rating: 4,
        },
      ],
    },
    {
      id: 5,
      title: "Auto Repair Central",
      location: "Los Angeles, CA",
      imageUrl:
        "https://img.freepik.com/free-photo/male-mechanic-working-auto-repair-shop-car_23-2150376988.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      isFavorited: false,
      rating: 4.4,
      reviewCount: 110,
      reviews: [
        {
          userName: "Michael Smith",
          comment: "Great auto repair service with fast turnaround.",
          rating: 4,
        },
        {
          userName: "Laura Davis",
          comment: "They did a good job but could improve on customer service.",
          rating: 4,
        },
      ],
    },

    // Add more cards as needed
  ]);

  const handleFavoriteClick = (id) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isFavorited: !card.isFavorited } : card
      )
    );
  };

  const handleEmojiClick = (id, value) => {
    setCards(
      cards.map((card) => (card.id === id ? { ...card, rating: value } : card))
    );
  };

  return (
    <>
      <div className="pt-[1rem] mt-16 px-4 sm:px-8 lg:pt-16 xl:px-40">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <h2 className="text-lg sm:text-xl mr-4 font-semibold text-[#060640]">
            Top Rated
          </h2>
          <Link
            to="AllPlaces"
            className="flex items-center text-gray-600 hover:underline mt-4 sm:mt-0"
          >
            <span className="mr-2 text-[#515161]">See all resources</span>
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <hr className="my-4 border-[#FADED9] border-[2px]" />
      </div>

      <div className="flex flex-wrap justify-center mt-12 gap-28 px-24">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onFavoriteClick={handleFavoriteClick}
            onEmojiClick={handleEmojiClick}
          />
        ))}
      </div>
    </>
  );
};

export default TopRated;
