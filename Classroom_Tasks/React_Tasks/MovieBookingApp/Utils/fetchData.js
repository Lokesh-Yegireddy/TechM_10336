const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch Now Showing
export const fetchNowShowingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const jsonData = await response.json();
  return jsonData.results;
};

// Fetch Upcoming
export const fetchUpcomingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );
  const jsonData = await response.json();
  return jsonData.results;
};

// ✅ Fetch Movie Details by ID
export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const jsonData = await response.json();
  return jsonData; // not jsonData.results
};

// Fetch Movie Cast
export const fetchMovieCast = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const jsonData = await response.json();
  return jsonData.cast;
};

// Fetch Genres
export const fetchGenres = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const jsonData = await response.json();
  return jsonData.genres;
};

// Fetch Available Languages
export const fetchMovieLanguages = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/translations?api_key=${API_KEY}`
  );
  const jsonData = await response.json();
  return jsonData.translations.map((lang) => lang.english_name);
};
