import Link from 'next/link';
import styles from '../styles/BookCard.module.css';

const BookCard = ({ book }) => {
  return (
    <Link href={`/book/${book.key}`} className={styles.card}>
      <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} className={styles.bookImage} alt={book.title} />
      <h3 className={styles.bookTitle} >{book.title}</h3>
      <p className={styles.bookDescription}>{book.author_name?.[0]}</p>
    </Link>
  );
};

export default BookCard;
