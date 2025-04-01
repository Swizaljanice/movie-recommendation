import Link from 'next/link';
import styles from '../styles/MovieCard.module.css';

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} className={styles.card}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className={styles.movieTitle} alt={movie.title} />
      <h3 className={styles.movieTitle}>{movie.title}</h3>
      <p className={styles.movieDescription}>{movie.release_date}</p>
    </Link>
  );
};

export default MovieCard;
