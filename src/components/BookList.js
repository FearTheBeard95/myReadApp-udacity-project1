import React from 'react';
import Book from './Book';

const BookList = (props) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{props.title}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {props.books.length > 0 ? (
          props.books.map((book, index) => (
            <Book book={book} key={index} addBook={props.addBook} />
          ))
        ) : (
          <p>its lonely here</p>
        )}
      </ol>
    </div>
  </div>
);

export default BookList;
