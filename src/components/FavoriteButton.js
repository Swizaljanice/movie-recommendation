import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

const FavoriteButton = ({ item, type }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const isFavorited = favorites.some(fav => fav.id === item.id || fav.key === item.key);

  const toggleFavorite = () => {
    if (isFavorited) {
      setFavorites(favorites.filter(fav => fav.id !== item.id && fav.key !== item.key));
    } else {
      setFavorites([...favorites, { ...item, type }]);
    }
  };

  return <button onClick={toggleFavorite}>{isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}</button>;
};

export default FavoriteButton;
