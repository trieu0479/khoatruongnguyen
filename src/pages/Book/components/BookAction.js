import React from 'react';


// context
import { useBookContext } from '../../../context/BookContext';

export default function BookAction({ bookId }) {
  const { handleDeleteBook } = useBookContext();

  return (
    <div>
      <button type="button" onClick={handleDeleteBook(bookId)}>Delete</button>
    </div>
  )
}