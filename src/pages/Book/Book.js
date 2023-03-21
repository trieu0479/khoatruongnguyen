import React from 'react';

// context
import { BookProvider } from '../../context/BookContext';

// components
import BookItem from './components/BookItem';

export default function Book() {
  return (
    <BookProvider>
      <h2>Book List</h2>

      <BookItem />
    </BookProvider>
  )
}