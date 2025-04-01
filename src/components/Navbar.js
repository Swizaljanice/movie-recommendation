import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/books">Books</Link>
      <Link href="/favorites">Favorites</Link>
    </nav>
  );
};

export default Navbar;
