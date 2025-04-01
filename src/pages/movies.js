import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/api';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Popular Movies</h1>
      <div className="grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
