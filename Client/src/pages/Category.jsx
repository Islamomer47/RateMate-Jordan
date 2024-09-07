import React from "react";
import CategorySectoin from "../components/category/Category";
import FilterSection from "../components/category/FilterSection";
import Search from "../components/category/Search";
import CategoryHero from "../components/category/CategoryHero";

const Category = () => {
  return (
    <>
      <CategoryHero />
      <FilterSection />
      <Search />
      <CategorySectoin />
    </>
  );
};

export default Category;
