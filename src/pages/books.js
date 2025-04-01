import { useEffect, useState } from 'react';
import { fetchBooks } from '../utils/api';
import BookCard from '../components/BookCard';
import Navbar from '../components/Navbar';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Books Collection</h1>
      <div className="grid">
        {books.map(book => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}
