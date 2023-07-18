const API_URL = `https://api.themoviedb.org/3`;

const fetchMovieApi = async (pathName, query = "") => {
  try {
    const resp = await fetch(
      `${API_URL}${pathName}?api_key=${process.env.API_KEY}&${query}`
    );
    return resp.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleCategory = async (genreId) => {
  return fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};

const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list");
};

const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular");
};

const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated");
};

const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`);
};

export {
  getSingleCategory,
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
  getMovie,
};
