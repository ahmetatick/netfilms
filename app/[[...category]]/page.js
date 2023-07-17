import HomeContainer from "@/containers/home";
import React from "react";
import Movies from "@/mocks/movies.json";

const API_URL = `https://api.themoviedb.org/3`;

const getPopularMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  const data = await fetch(`${API_URL}/movie/top_rated`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return data;
};

const HomePage = async ({ params }) => {
  let selectedCategory;

  const { results: popularMovies } = await getPopularMovies();

  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      popularMovies={popularMovies}
      selectedCategory={{
        id: params.category?.[0] || "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
};

export default HomePage;
