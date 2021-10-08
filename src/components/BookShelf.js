import React from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

//BookShelf component to hold the three different book shelves
const BookShelf = (props) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <div className='list-books-content'>
      <div>
        <BookList
          title='Currently reading'
          books={props.books.filter(
            (book) => book.shelf === 'currentlyReading'
          )}
          addBook={props.addBook}
        />
        <BookList
          title='Want to read'
          books={props.books.filter((book) => book.shelf === 'wantToRead')}
          addBook={props.addBook}
        />
        <BookList
          title='Read'
          books={props.books.filter((book) => book.shelf === 'read')}
          addBook={props.addBook}
        />
      </div>
    </div>
    <div className='open-search'>
      <Link to='/search'>
        <button>Add a book</button>
      </Link>
    </div>
  </div>
);
export default BookShelf;
