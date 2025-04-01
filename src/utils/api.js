import axios from 'axios';

const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';
const OPEN_LIBRARY_URL = 'https://openlibrary.org/search.json';

export const fetchMovies = async () => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`);
  return res.data.results;
};

export const fetchBooks = async (query = 'fiction') => {
  const res = await axios.get(`${OPEN_LIBRARY_URL}?q=${query}&limit=10`);
  return res.data.docs;
};
