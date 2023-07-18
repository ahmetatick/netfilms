import HomeContainer from "@/containers/home";
import React from "react";
import Movies from "@/mocks/movies.json";

const API_URL = `https://api.themoviedb.org/3`;

const getSingleCategory = async (genreId) => {
  const resp = await fetch(
    `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
  );
  return resp.json();
};

const getCategories = async () => {
  const resp = await fetch(
    `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}`
  );
  return resp.json();
};

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
  const categoryPromise = getCategories();

  const [
    { results: popularMovies },
    { results: topRatedMovies },
    { genres: categories },
  ] = await Promise.all([popularPromise, topRatedPromise, categoryPromise]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] || "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
};

export default HomePage;
