import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/ListingsPage/Banner";
import FilterListing from "../components/ListingsPage/FilterListing";
import Recommendations from "../components/ListingsPage/Recommendations";
import UserReviews from "../components/ListingsPage/UserReviews";
import ListingsGrid from "../components/ListingsPage/ListingsGrid";

const ListingsPage = () => {
  const { category } = useParams();

  return (
    <div className="bg-[#f9f9f9] min-h-screen p-8">
      <Banner />
      <h1 className="text-4xl font-bold text-[#2c3e50] mb-8 text-center">
        {category} Listings
      </h1>
      <FilterListing />
      <ListingsGrid />
      <Recommendations />
      <UserReviews />
    </div>
  );
};

export default ListingsPage;
