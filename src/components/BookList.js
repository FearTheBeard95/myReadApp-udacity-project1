import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

//BookList component to hold the books for a specific shelf
const BookList = (props) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{props.title}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {props.books.length > 0 ? (
          props.books.map((book, index) => (
            <Book
              book={book}
              key={index}
              addBook={props.addBook}
              shelf={book.shelf ? book.shelf : 'none'}
            />
          ))
        ) : (
          <p>its lonely here</p>
        )}
      </ol>
    </div>
  </div>
);

BookList.protoType = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  addBook: PropTypes.func.isRequired,
};

export default BookList;
