import React from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';
import PropTypes from 'prop-types';

//BookShelf component to hold the three different book shelves
const BookShelf = (props) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <div className='list-books-content'>
      <div>
        {props.shelves.map((shelf, index) => (
          <BookList
            title={shelf.title}
            books={props.books.filter((book) => book.shelf === shelf.id)}
            addBook={props.addBook}
            key={index}
          />
        ))}
      </div>
    </div>
    <div className='open-search'>
      <Link to='/search'>
        <button>Add a book</button>
      </Link>
    </div>
  </div>
);

BookShelf.protoType = {
  addBook: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
};

export default BookShelf;
