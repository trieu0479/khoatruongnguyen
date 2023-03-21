import React from 'react';

// context
import { useBookContext } from '../../../context/BookContext';

// components
import BookAction from './BookAction';

export default function BookItem() {
  const { books } = useBookContext();

  return (
    <div>
      BookItem

      {books.map(book => (
        <div key={book.id}>
          Title: {book.title}  <br />
          Price: {book.price} <br />
          <BookAction bookId={book.id} />
        </div>
      ))}
     
    </div>
  )
}