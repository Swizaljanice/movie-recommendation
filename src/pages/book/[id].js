import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://openlibrary.org/works/${id}.json`)
        .then(res => setBook(res.data));
    }
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={`https://covers.openlibrary.org/b/id/${book.covers?.[0]}-L.jpg`} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
}
