import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieCard from '../components/MovieCard';
import BookCard from '../components/BookCard';
import Navbar from '../components/Navbar';

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <Navbar />
      <h1>Favorites</h1>
      <div className="grid">
        {favorites.map(item =>
          item.type === 'movie' ? <MovieCard key={item.id} movie={item} /> : <BookCard key={item.key} book={item} />
        )}
      </div>
    </div>
  );
}
