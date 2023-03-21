import React from 'react';

export const BookContext = React.createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = React.useState([
    {
      id: 1,
      title: 'harray',
      price: 800
    }
  ])

  const handleDeleteBook = (bookId) => () => {
    console.log("handleDeleteBook:", bookId)
    const bookIndex = books.findIndex(book => book.id === bookId);
    if(bookIndex === -1) return;
    // updater function
    setBooks(prevState => {
      const books = [...prevState];
      books.splice(bookIndex, 1);
      return books
    })
  }
  
  return (
    <BookContext.Provider
      value={{
        books,
        handleDeleteBook
      }}
    >
      {children}
    </BookContext.Provider>
  )
}
export const useBookContext = () => React.useContext(BookContext);