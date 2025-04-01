'use client';

import { useEffect, useState } from 'react';
import { fetchMovies, fetchBooks } from '../utils/api';
import MovieCard from '../components/MovieCard';
import BookCard from '../components/BookCard';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState({ movies: [], books: [] });

  useEffect(() => {
    fetchMovies().then(setMovies);
    fetchBooks().then(setBooks);
  }, []);

  const handleSearch = async (query) => {
    const movieResults = await fetchMovies(); // Ideally, search by query
    const bookResults = await fetchBooks(query);
    setSearchResults({ movies: movieResults, books: bookResults });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <h1>Movies & Books</h1>
      <div className="grid">
        {(searchResults.movies.length ? searchResults.movies : movies).slice(0, 5).map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {(searchResults.books.length ? searchResults.books : books).slice(0, 5).map(book => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}
