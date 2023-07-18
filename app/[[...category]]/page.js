import HomeContainer from "@/containers/home";
import React from "react";
import Movies from "@/mocks/movies.json";

const API_URL = `https://api.themoviedb.org/3`;

const getPopularMovies = async () => {
  const resp = await fetch(
    `${API_URL}/movie/popular?api_key=${process.env.API_KEY}`
  );
  return resp.json();
};

const getTopRatedMovies = async () => {
  const resp = await fetch(
    `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}`
  );
  return resp.json();
};

const HomePage = async ({ params }) => {
  let selectedCategory;

  const popularPromise = getPopularMovies();

  const topRatedPromise = getTopRatedMovies();

  const [{ results: popularMovies }, { results: topRatedMovies }] =
    await Promise.all([popularPromise, topRatedPromise]);

  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <HomeContainer
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: params.category?.[0] || "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
};

export default HomePage;
