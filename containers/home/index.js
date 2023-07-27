import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
  selectedCategory,
}) => {
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Popular Movies"
        movies={popularMovies.slice(0, 12)}
      />
      <MoviesSection
        title="Top Rated Movies"
        movies={topRatedMovies.slice(0, 12)}
      />
    </div>
  );
};

export default HomeContainer;
