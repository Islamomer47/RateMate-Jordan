import React from "react";
import { useParams } from "react-router-dom";

const categoryImages = {
  Restaurants:
    "https://img.freepik.com/free-photo/interior-restaurant-design_1409-7341.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=sph",
  HomeServices:
    "https://media.istockphoto.com/id/1501151524/photo/installing-new-induction-hob-in-modern-kitchen.jpg?s=612x612&w=0&k=20&c=9LFH6w5daxsoWPlDQaaQymAuOblXNZy1zROfS4iFuZc=",
  AutoServices:
    "https://img.freepik.com/free-photo/car-mechanic-customer-shaking-hands_342744-258.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
  default:
    "https://img.freepik.com/premium-vector/user-reviews-feedback-icon-flat-style-product-rating-vector-illustration-isolated-background-review-feedback-sign-business-concept_157943-11091.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid",
};

const Banner = () => {
  const { category } = useParams();
  const imageUrl = categoryImages[category] || categoryImages.default;

  return (
    <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt="Banner"
        className="w-full h-[20rem] object-cover  rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center p-4">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          {category} Specials
        </h2>
      </div>
    </div>
  );
};

export default Banner;
