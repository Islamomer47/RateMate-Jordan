import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ReviewForm from "../components/SearchAndReview/ReviewForm";

const listings = [
  {
    id: 1,
    name: "Bella Italia",
    image:
      "https://img.freepik.com/premium-photo/plate-risotto-italy-nature-background-professional-advertising-food-photo-ai-generated_755721-55473.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://images.unsplash.com/photo-1604566577876-79a39d5bbf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1594938613828-40c6e96c4936?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1605751601863-9205e69f07b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    description:
      "A cozy Italian restaurant offering authentic pizza, pasta, and a warm atmosphere. Perfect for a romantic dinner or a family gathering.",
    rating: 4.7,
    reviews: 28,
    address: "456 Elm St, Rome, Italy",
    contact: "+39 06 1234 5678",
    website: "https://bellaitalia.com",
    location: { lat: 41.902782, lng: 12.496366 },
    category: "Restaurants",
    subCategory: "TakeOut",
    reviewsList: [
      {
        id: 1,
        rating: 5,
        text: "Amazing food and great service. Highly recommend the Margherita pizza!",
        user: {
          name: "Alice Smith",
          profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        date: "2024-07-01",
        likes: 12,
        dislikes: 0,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 2,
    name: "Gourmet Burger Bar",
    image:
      "https://images.unsplash.com/photo-1533086005087-9d98f3b30d53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1512052911871-263d62a06c47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1581373937688-e8b5c843b084?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1580660677321-002089bf5cf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    description:
      "A trendy spot for gourmet burgers with unique toppings and sides.",
    rating: 4.3,
    reviews: 15,
    address: "789 Oak St, New York, NY, USA",
    contact: "+1 212-555-1234",
    website: "https://gourmetburgerbar.com",
    location: { lat: 40.712776, lng: -74.005974 },
    category: "Restaurants",
    subCategory: "Delivery",
    reviewsList: [
      {
        id: 1,
        rating: 4,
        text: "Great burgers but delivery took longer than expected.",
        user: {
          name: "Bob Johnson",
          profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        date: "2024-07-10",
        likes: 8,
        dislikes: 2,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 3,
    name: "Sushi Corner",
    image:
      "https://images.unsplash.com/photo-1531272641736-22e9e6e5b95e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1506753002872-5f0a1f6c7f11?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1588899654186-f927f2d0cb1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1598272532156-8339d45737c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    description:
      "Fresh and delicious sushi with a variety of rolls and sashimi.",
    rating: 4.6,
    reviews: 22,
    address: "321 Pine St, Los Angeles, CA, USA",
    contact: "+1 323-555-5678",
    website: "https://sushicorner.com",
    location: { lat: 34.052235, lng: -118.243683 },
    category: "Restaurants",
    subCategory: "Reservations",
    reviewsList: [
      {
        id: 1,
        rating: 5,
        text: "The best sushi in town! The rolls were incredibly fresh.",
        user: {
          name: "Carla Martinez",
          profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        date: "2024-07-12",
        likes: 10,
        dislikes: 1,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 4,
    name: "Cafe Delights",
    image:
      "https://img.freepik.com/premium-photo/delicious-cake-with-cream-chocolate-coffee-cozy-setting_1025753-120363.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/premium-photo/ode-irresistible-charm-chocolate-desserts-timeless-appeal-cafa-brews_1003076-2105.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/cozy-cafe-ambiance-with-delicious-pastries-wooden-board_1252915-5431.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/cozy-cafe-tantalizing-desserts-captured_961875-271071.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/cup-coffee-cup-coffee-table_976492-68772.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description:
      "A charming cafe known for its pastries, coffee, and relaxed ambiance.",
    rating: 4.2,
    reviews: 18,
    address: "654 Maple Ave, San Francisco, CA, USA",
    contact: "+1 415-555-9876",
    website: "https://cafedelights.com",
    location: { lat: 37.774929, lng: -122.419418 },
    category: "Restaurants",
    subCategory: "TakeOut",
    reviewsList: [
      {
        id: 1,
        rating: 4,
        text: "Great coffee and pastries, but the service could be faster.",
        user: {
          name: "Diana Brooks",
          profilePicture:
            "https://t4.ftcdn.net/jpg/00/97/00/09/240_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg",
        },
        date: "2024-07-22",
        likes: 7,
        dislikes: 2,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 5,
    name: "The Bistro",
    image:
      "https://images.unsplash.com/photo-1526620423080-e5a7e20c244b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1533786778477-e01b2ff1cfed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1555685818-071afc41a761?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1517367828676-61da5b124d52?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    description:
      "A bistro offering a diverse menu with both local and international dishes.",
    rating: 4.5,
    reviews: 30,
    address: "123 River Rd, Chicago, IL, USA",
    contact: "+1 312-555-3456",
    website: "https://thebistro.com",
    location: { lat: 41.878113, lng: -87.629799 },
    category: "Restaurants",
    subCategory: "Reservations",
    reviewsList: [
      {
        id: 1,
        rating: 5,
        text: "Fantastic food and service. The steak was cooked to perfection.",
        user: {
          name: "Emily White",
          profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        date: "2024-07-30",
        likes: 15,
        dislikes: 3,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 6,
    name: "Urban Eatery",
    image:
      "https://images.unsplash.com/photo-1586281366080-c87a7c885d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1506748686214e9df14f4d0d2b4b2b95eab14d3031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1593692254811-8d2fcdb20d37?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1575935914466-92409a66597f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    description:
      "A modern eatery with a focus on healthy, farm-to-table meals.",
    rating: 4.4,
    reviews: 12,
    address: "987 Birch St, Seattle, WA, USA",
    contact: "+1 206-555-6789",
    website: "https://urbaneatery.com",
    location: { lat: 47.606209, lng: -122.332069 },
    category: "Restaurants",
    subCategory: "TakeOut",
    reviewsList: [
      {
        id: 1,
        rating: 4,
        text: "Healthy and tasty options. The quinoa salad was excellent.",
        user: {
          name: "Frank Miller",
          profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        date: "2024-07-25",
        likes: 6,
        dislikes: 1,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 7,
    name: "Vegan Haven",
    image:
      "https://images.unsplash.com/photo-1601414820546-65732c4d82b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1587195104321-2e7c0638e440?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1580293192683-9b8ecb2f6815?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1591033930905-5a9824fd7d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    description:
      "A plant-based restaurant offering a diverse menu of vegan dishes.",
    rating: 4.8,
    reviews: 25,
    address: "654 Willow St, Austin, TX, USA",
    contact: "+1 512-555-7890",
    website: "https://veganhaven.com",
    location: { lat: 30.267153, lng: -97.743057 },
    category: "Restaurants",
    subCategory: "Delivery",
    reviewsList: [
      {
        id: 1,
        rating: 5,
        text: "The vegan burger was amazing! Will definitely be ordering again.",
        user: {
          name: "Grace Lee",
          profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
        },
        date: "2024-07-18",
        likes: 11,
        dislikes: 0,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 20,
    name: "Pizza Haven",
    image:
      "https://img.freepik.com/premium-photo/pizza-with-meat-cheese-broccoli-it_1141064-8642.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=sph",
    images: [
      "https://img.freepik.com/premium-photo/photograph-mouthwatering-whole-pizza-capturing-its-delightful-appeal-variety-enticing_894855-6098.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=sph",
      "https://img.freepik.com/premium-photo/pizza-with-smoke-black-created-with-generative-ai-software_732031-11220.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=sph",
      "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=sph",
      "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=sph",
    ],
    description:
      "Enjoy a variety of gourmet pizzas with fresh ingredients and a cozy atmosphere.",
    rating: 4.5,
    reviews: 120,
    address: "123 Pizza St, New York, NY, USA",
    contact: "+1 212-555-1234",
    website: "https://pizzahaven.com",
    location: { lat: 40.712776, lng: -74.005974 },
    category: "Restaurants",
    subCategory: "TakeOut",
    reviewsList: [
      {
        id: 1,
        rating: 5,
        text: "The pizza was delicious and the crust was perfect!",
        user: {
          name: "John Doe",
          profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        date: "2024-07-20",
        likes: 5,
        dislikes: 0,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 21,
    name: "Burger Bliss",
    image:
      "https://img.freepik.com/premium-photo/fish-burger-bliss_1302875-5453.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/premium-photo/mouthwatering-blue-cheese-bacon-bliss_918352-1720.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/side-view-burger-with-beef-meat-melted-cheese-vegetables-wooden-board_140725-11865.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/close-up-delicious-food_23-2149303550.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/hamburger-with-lot-sauce-it_976492-82791.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description:
      "Savor the best burgers in town, made with high-quality beef and fresh toppings.",
    rating: 4.3,
    reviews: 150,
    address: "456 Burger Ln, Los Angeles, CA, USA",
    contact: "+1 323-555-5678",
    website: "https://burgerbliss.com",
    location: { lat: 34.052235, lng: -118.243683 },
    category: "Restaurants",
    subCategory: "TakeOut",
    reviewsList: [
      {
        id: 1,
        rating: 4,
        text: "Great burgers, but the fries could be better.",
        user: {
          name: "Jane Smith",
          profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        date: "2024-07-21",
        likes: 3,
        dislikes: 1,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 22,
    name: "Sushi Sensation",
    image:
      "https://img.freepik.com/premium-photo/plate-sushi-with-piece-sushi-it_947794-51119.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybridjpg",
    images: [
      "https://img.freepik.com/premium-photo/plate-sushi-with-one-pieces-missing_947794-50970.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/sushi-rolls-topped-with-salmon-radish_140725-4241.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/tray-sushi-with-different-types-sushi-it_951133-14838.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/tray-sushi-with-different-sushi-it_682379-1148.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description:
      "Experience a delightful array of sushi rolls, sashimi, and other Japanese delicacies.",
    rating: 4.6,
    reviews: 200,
    address: "789 Sushi Blvd, San Francisco, CA, USA",
    contact: "+1 415-555-7890",
    website: "https://sushisensation.com",
    location: { lat: 37.774929, lng: -122.419418 },
    category: "Restaurants",
    subCategory: "TakeOut",
    reviewsList: [
      {
        id: 1,
        rating: 5,
        text: "Best sushi I've ever had!",
        user: {
          name: "Michael Johnson",
          profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        date: "2024-07-22",
        likes: 7,
        dislikes: 0,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 23,
    name: "Taco Terrace",
    image:
      "https://img.freepik.com/free-photo/view-delicious-food-sold-streets-city_23-2151516917.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/free-photo/view-delicious-appetizing-street-food_23-2151516894.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/delicious-traditional-tacos-arrangement_23-2150799471.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/view-delicious-appetizing-street-food_23-2151516972.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/delicious-tacos-arrangement_23-2150878189.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description:
      "Indulge in authentic Mexican tacos with a variety of fillings and salsas.",
    rating: 4.4,
    reviews: 180,
    address: "321 Taco Ave, Miami, FL, USA",
    contact: "+1 305-555-4321",
    website: "https://tacoterrace.com",
    location: { lat: 25.761681, lng: -80.191788 },
    category: "Restaurants",
    subCategory: "TakeOut",
    reviewsList: [
      {
        id: 11,
        rating: 4,
        text: "Tacos were tasty but a bit overpriced.",
        user: {
          name: "Emily Davis",
          profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        date: "2024-07-23",
        likes: 2,
        dislikes: 1,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 24,
    name: "Pasta Paradise",
    image:
      "https://img.freepik.com/free-photo/grated-cheese-farfalle-pasta-plate_23-2147925968.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/free-photo/ai-generated-pasta-food_23-2150664614.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/ai-generated-pasta-food_23-2150664648.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/image-rustic-italian-pasta-dish-with-steam-rising-from-plate-grated-cheese-sprinkled_1022426-3786.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/ai-generated-pasta-food_23-2150664608.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description:
      "Enjoy classic Italian pasta dishes made with homemade sauces and fresh ingredients.",
    rating: 4.7,
    reviews: 220,
    address: "654 Pasta Rd, Chicago, IL, USA",
    contact: "+1 312-555-6789",
    website: "https://pastaparadise.com",
    location: { lat: 41.878113, lng: -87.629799 },
    category: "Restaurants",
    subCategory: "TakeOut",
    reviewsList: [
      {
        id: 1,
        rating: 5,
        text: "Best pasta in town! Highly recommend.",
        user: {
          name: "Chris Brown",
          profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        date: "2024-07-24",
        likes: 6,
        dislikes: 0,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 25,
    name: "Salad Sanctuary",
    image:
      "https://img.freepik.com/free-photo/vegetarian-salad-with-cherry-tomato-mozzarella-lettuce_2829-4756.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/free-photo/front-view-vegetable-salad-consists-cucumber-cheese-tomatoes-dark-blue-background_179666-19413.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/green-salad-with-herbs-tomato_114579-3614.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/top-view-salad-with-feta-cheese-tomatoes_23-2148700448.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/salad-with-chicken-chunks-served-plate-closeup_1220-6908.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description:
      "A healthy option offering a variety of fresh salads and light meals.",
    rating: 4.1,
    reviews: 100,
    address: "987 Salad St, Seattle, WA, USA",
    contact: "+1 206-555-1234",
    website: "https://saladsanctuary.com",
    location: { lat: 47.606209, lng: -122.332069 },
    category: "Restaurants",
    subCategory: "TakeOut",
    reviewsList: [
      {
        id: 1,
        rating: 4,
        text: "Fresh and healthy options, but a bit pricey.",
        user: {
          name: "Anna Wilson",
          profilePicture: "https://randomuser.me/api/portraits/women/6.jpg",
        },
        date: "2024-07-25",
        likes: 4,
        dislikes: 0,
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 31,
    name: "Curry House",
    image:
      "https://img.freepik.com/free-photo/delicious-indian-curry-with-chapati_141793-1854.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/premium-photo/prawn-mango-curry-kerala-traditional-dish-made-using-raw-mango_527904-1453.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/spicy-hot-king-fish-curry-kerala-india-barracuda-fish-curry-with-green-chili-coconut-milk-mango-asian-cuisine-served-rustic-wooden-backgroundselective-focus_726363-1225.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/front-view-delicious-meat-soup-with-potatoes-greens-dark-desk-meat-soup-food-dinner_140725-79012.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/massaman-curry-frying-pan-with-spices-cement-floor_1150-20779.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description:
      "An Indian fast-food spot specializing in flavorful curries and fresh naan.",
    rating: 4.7,
    reviews: 150,
    address: "123 Curry Lane, Mumbai, India",
    contact: "+91 22-5555-1234",
    website: "https://curryhouse.in",
    location: { lat: 19.076, lng: 72.8777 },
    category: "FastFood",
    subCategory: "Indian",
    reviewsList: [
      {
        id: 1,
        rating: 5,
        text: "Amazing curry and naan! A must-visit.",
        user: {
          name: "Ravi Sharma",
          profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        date: "2024-07-15",
        likes: 20,
        dislikes: 2,
      },
      {
        id: 2,
        rating: 4,
        text: "Great flavors but the service could be improved.",
        user: {
          name: "Priya Patel",
          profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        date: "2024-07-10",
        likes: 15,
        dislikes: 1,
      },
    ],
  },
  {
    id: 32,
    name: "Spice Junction",
    image:
      "https://img.freepik.com/free-photo/plate-vegetable-biryani_141793-1965.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/premium-photo/plate-tasty-biryani-with-white-background_1111504-11078.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/photography-tasty-chicken-biryani-plate-dish_1288657-43325.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/delicious-dum-handi-chicken-biryani-mandi-kabse-dish_136354-17398.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/super-delicious-biryani-image_1197144-575.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybridid",
    ],
    description: "Known for its spicy biryani and traditional Indian snacks.",
    rating: 4.6,
    reviews: 120,
    address: "456 Spice Street, Delhi, India",
    contact: "+91 11-5555-6789",
    website: "https://spicejunction.in",
    location: { lat: 28.6139, lng: 77.209 },
    category: "FastFood",
    subCategory: "Indian",
    reviewsList: [
      {
        id: 1,
        rating: 4,
        text: "Great biryani and snacks. Slightly spicy though.",
        user: {
          name: "Amit Verma",
          profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        date: "2024-07-20",
        likes: 18,
        dislikes: 0,
      },
      {
        id: 2,
        rating: 5,
        text: "Delicious food and fast service.",
        user: {
          name: "Sonia Gupta",
          profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        date: "2024-07-18",
        likes: 22,
        dislikes: 1,
      },
    ],
  },
  {
    id: 33,
    name: "Tandoori Delight",
    image:
      "https://img.freepik.com/free-photo/tandoori-chicken-plate_141793-2051.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/premium-photo/charred-tandoori-perfection-ar-c_839793-174041.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/salad-topped-tandoori-chicken-delight_961875-365404.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/sizzling-indian-delight-ar-c_839793-173773.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/indian-tandoori-splendor-ar-c_839793-173981.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description: "Offers a variety of tandoori dishes with authentic flavors.",
    rating: 4.5,
    reviews: 100,
    address: "789 Tandoori Ave, Bangalore, India",
    contact: "+91 80-5555-9876",
    website: "https://tandooridelight.in",
    location: { lat: 12.9716, lng: 77.5946 },
    category: "FastFood",
    subCategory: "Indian",
    reviewsList: [
      {
        id: 1,
        rating: 5,
        text: "The best tandoori dishes in town!",
        user: {
          name: "Raj Kumar",
          profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        date: "2024-07-22",
        likes: 25,
        dislikes: 2,
      },
      {
        id: 2,
        rating: 4,
        text: "Good food, but the wait time is long.",
        user: {
          name: "Meera Reddy",
          profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
        },
        date: "2024-07-21",
        likes: 15,
        dislikes: 1,
      },
    ],
  },
  {
    id: 34,
    name: "Masala Express",
    image:
      "https://img.freepik.com/premium-photo/dal-bhat_1107769-15834.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/premium-photo/delicious-looking-butter-chicken-wooden-table-steaming-hot-with-naan-bread-side_848573-979.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/selection-indian-food-including-chicken-curry-other-spices_1340-23307.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/plate-food-with-plate-food-bowl-food-it_995407-124182.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/bowl-dal-with-side-curry-sauce_762785-253377.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description: "Famous for its masala dosa and other South Indian delights.",
    rating: 4.4,
    reviews: 80,
    address: "321 Dosa Street, Chennai, India",
    contact: "+91 44-5555-3456",
    website: "https://masalaexpress.in",
    location: { lat: 13.0827, lng: 80.2707 },
    category: "FastFood",
    subCategory: "Indian",
    reviewsList: [
      {
        id: 1,
        rating: 4,
        text: "Good dosa, but the restaurant could use a makeover.",
        user: {
          name: "Suresh Nair",
          profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        date: "2024-07-18",
        likes: 10,
        dislikes: 1,
      },
      {
        id: 2,
        rating: 5,
        text: "Delicious South Indian food. Highly recommended.",
        user: {
          name: "Lakshmi Menon",
          profilePicture: "https://randomuser.me/api/portraits/women/6.jpg",
        },
        date: "2024-07-15",
        likes: 20,
        dislikes: 0,
      },
    ],
  },
  {
    id: 35,
    name: "Bombay Street Eats",
    image:
      "https://img.freepik.com/free-photo/pav-bhaji-indian-street-food_141793-2123.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/premium-photo/vada-pav-with-background-traditional-indian-mar_1169880-74869.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/adorable-bear-illustration-digital-art-style_1108314-334591.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/street-food-still-life_23-2151535295.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/premium-photo/coolness-enjoyment-celebrating-eid-aladha_518397-10305.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description: "Brings the taste of Bombay street food to your plate.",
    rating: 4.8,
    reviews: 200,
    address: "654 Street Food Blvd, Mumbai, India",
    contact: "+91 22-5555-6789",
    website: "https://bombaystreeteats.in",
    location: { lat: 19.076, lng: 72.8777 },
    category: "FastFood",
    subCategory: "Indian",
    reviewsList: [
      {
        id: 1,
        rating: 5,
        text: "Excellent street food! Brings back memories of Bombay.",
        user: {
          name: "Nisha Rathi",
          profilePicture: "https://randomuser.me/api/portraits/women/7.jpg",
        },
        date: "2024-07-25",
        likes: 30,
        dislikes: 1,
      },
      {
        id: 2,
        rating: 5,
        text: "The pav bhaji is just like what I had in Bombay!",
        user: {
          name: "Rajesh Kumar",
          profilePicture: "https://randomuser.me/api/portraits/men/6.jpg",
        },
        date: "2024-07-23",
        likes: 25,
        dislikes: 0,
      },
    ],
  },
  {
    id: 36,
    name: "Delhi Diner",
    image:
      "https://img.freepik.com/free-photo/plate-punjabi-chole-bhature_141793-2200.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/premium-photo/3d-digital-poster-featuring-traditional-pooja-thali-with-minimal-elements_1093726-27709.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/plate-punjabi-chole-bhature_141793-2200.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/plate-punjabi-chole-bhature_141793-2200.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/plate-punjabi-chole-bhature_141793-2200.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description:
      "Offers a variety of traditional Delhi dishes with a fast-food twist.",
    rating: 4.3,
    reviews: 90,
    address: "987 Delhi Road, New Delhi, India",
    contact: "+91 11-5555-4321",
    website: "https://delhidiner.in",
    location: { lat: 28.6139, lng: 77.209 },
    category: "FastFood",
    subCategory: "Indian",
    reviewsList: [
      {
        id: 1,
        rating: 4,
        text: "Good Delhi-style food, but it can get crowded.",
        user: {
          name: "Aarti Sharma",
          profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
        },
        date: "2024-07-21",
        likes: 12,
        dislikes: 2,
      },
      {
        id: 2,
        rating: 4,
        text: "Nice place for Delhi food but a bit pricey.",
        user: {
          name: "Vikram Singh",
          profilePicture: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        date: "2024-07-19",
        likes: 10,
        dislikes: 1,
      },
    ],
  },
  {
    id: 40,
    name: "Delhi Diner",
    image:
      "https://img.freepik.com/free-photo/plate-punjabi-chole-bhature_141793-2200.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    images: [
      "https://img.freepik.com/premium-photo/3d-digital-poster-featuring-traditional-pooja-thali-with-minimal-elements_1093726-27709.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/plate-punjabi-chole-bhature_141793-2200.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/plate-punjabi-chole-bhature_141793-2200.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/plate-punjabi-chole-bhature_141793-2200.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
    ],
    description:
      "Offers a variety of traditional Delhi dishes with a fast-food twist.",
    rating: 4.3,
    reviews: 90,
    address: "987 Delhi Road, New Delhi, India",
    contact: "+91 11-5555-4321",
    website: "https://delhidiner.in",
    location: { lat: 28.6139, lng: 77.209 },
    category: "FastFood",
    subCategory: "Indian",
    reviewsList: [
      {
        id: 1,
        rating: 4,
        text: "Good Delhi-style food, but it can get crowded.",
        user: {
          name: "Aarti Sharma",
          profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
        },
        date: "2024-07-21",
        likes: 12,
        dislikes: 2,
      },
      {
        id: 2,
        rating: 4,
        text: "Nice place for Delhi food but a bit pricey.",
        user: {
          name: "Vikram Singh",
          profilePicture: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        date: "2024-07-19",
        likes: 10,
        dislikes: 1,
      },
    ],
  },
];

const ListingDetail = () => {
  const { listingId } = useParams();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const listing = listings.find(
    (listing) => listing.id === parseInt(listingId)
  );

  const handleMapOpen = () => {
    setIsMapOpen(true);
  };

  const handleMapClose = () => {
    setIsMapOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "map-modal") {
      handleMapClose();
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const handleImageModalClose = () => {
    setIsImageModalOpen(false);
  };

  useEffect(() => {
    if (isMapOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMapOpen]);

  if (!listing) {
    return <p className="text-center text-red-500">Listing not found</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8">
      {/* Hero Section with Image  */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 mb-8">
        {/* Large Image at the Top */}
        <div className="relative lg:w-1/2 mb-4 lg:mb-0">
          <img
            src={listing.image}
            alt={listing.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-100"
            onClick={() => handleImageClick(listing.image)}
          />
          {/* Optional Overlay */}
        </div>

        {/* Smaller Images Grid Below */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          {listing.images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={image}
                alt={`${listing.name} ${index + 1}`}
                className="w-full h-[200px] object-cover transition-transform transform group-hover:scale-110"
                onClick={() => handleImageClick(image)}
              />
              {/* Optional Hover Effect */}
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          id="image-modal"
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-1 right-1 text-gray-600"
              onClick={handleImageModalClose}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      )}
      {/* Main Section */}
      <div className="bg-gradient-to-r from-[#FADED9] to-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {listing.name}
        </h1>

        <ul className="space-y-6 text-lg text-gray-700">
          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-900 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 8a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V8z" />
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011-1h10a1 1 0 011 1v4H4V2zm3 7h6a1 1 0 110 2H7a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
            <strong className="text-gray-900 mr-2">Category:</strong>
            {listing.category}
          </li>

          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-900 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v4H3V4zm0 7h10v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z" />
            </svg>
            <strong className="text-gray-900 mr-2">Subcategory:</strong>
            {listing.subCategory}
          </li>

          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-900 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011-1h8a1 1 0 011 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1V2zm4 11a2 2 0 100 4 2 2 0 000-4zm-7 2a7 7 0 1114 0A7 7 0 012 15z"
                clipRule="evenodd"
              />
            </svg>
            <strong className="text-gray-900 mr-2">Address:</strong>

            <button
              className="text-blue-500 hover:text-blue-700 font-medium underline"
              onClick={handleMapOpen}
            >
              {listing.address}
            </button>
          </li>

          <li className="mt-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Description
            </h2>
            <p className="leading-relaxed">{listing.description}</p>
          </li>

          <li className="flex flex-col md:flex-row md:space-x-8 mt-4">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Contact
              </h3>
              <p>{listing.contact}</p>
            </div>

            <div className="flex-1 bg-gradient-to-r from-yellow-100 to-white p-4 rounded-lg shadow-md flex items-center justify-between mt-4 md:mt-0">
              <div className="flex items-center">
                <span className="text-yellow-500 text-4xl mr-3">
                  {listing.rating} ★
                </span>
                <p className="font-semibold">({listing.reviews} reviews)</p>
              </div>
              <Link to="/review">
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none">
                  Write a Review
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      {/* Reviews and Review Form Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Review Form */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <ReviewForm />
        </div>

        {/* Reviews */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Reviews</h2>
          <div className="space-y-4">
            {listing.reviewsList.map((review) => (
              <div
                key={review.id}
                className="p-6 border rounded-lg shadow-md bg-white"
              >
                <Link
                  key={review.id}
                  to={`/profile/${review.id}`}
                  className="block mb-4 p-4  rounded-lg bg-gray-50 flex items-start cursor-pointer"
                >
                  <div className="flex items-start mb-4">
                    <img
                      src={review.user.profilePicture}
                      alt={review.user.name}
                      className="w-14 h-14 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-lg">
                        {review.user.name}
                      </p>
                      <p className="text-yellow-500 text-lg">
                        {review.rating} ★
                      </p>
                      <p className="text-gray-600 text-sm">{review.date}</p>
                    </div>
                  </div>
                </Link>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="text-blue-500 text-sm">
                      Like ({review.likes})
                    </button>
                    <button className="text-red-500 text-sm">
                      Dislike ({review.dislikes})
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Modal */}
      {isMapOpen && (
        <div
          id="map-modal"
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-1 right-1 text-gray-600"
              onClick={handleMapClose}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <LoadScript googleMapsApiKey="AIzaSyBQXGWGdJBbKQkwymEp2gESxr__JJKXq7U">
              <GoogleMap
                mapContainerStyle={{ height: "400px", width: "100%" }}
                center={listing.location}
                zoom={14}
              >
                <Marker position={listing.location} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingDetail;
