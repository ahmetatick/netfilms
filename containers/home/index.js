import React from "react";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
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
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title="Popular Movies"
        movies={popularMovies.slice(0, 8)}
      />
      <MoviesSection
        title="Your Favourites"
        movies={topRatedMovies.slice(8, 16)}
      />
    </div>
  );
};

export default HomeContainer;
