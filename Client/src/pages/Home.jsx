import React from "react";

//components
import Hero from "../components/home/Hero";
import TrendingReviews from "../components/home/TrendingReviews";
import CategorySectoin from "../components/home/CategorySectoin";
import TopRated from "../components/home/TopRated";
import FeaturedSection from "../components/home/FeaturedSection";
import ReviewSection from "../components/home/ReviewSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategorySectoin />
      <TopRated />
      <FeaturedSection />
      <ReviewSection />

      {/* 
      <TrendingReviews />
      */}
    </div>
  );
};

export default Home;
