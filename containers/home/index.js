import React from "react";
import Movies from "@/mocks/movies.json";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories />
    </div>
  );
};

export default HomeContainer;
