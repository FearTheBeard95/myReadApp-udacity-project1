import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import PropTypes from 'prop-types';

//BookSearch Component to search for books that can be added to the users library
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  //Function to handle the input in the search input field
  handleInput = (event) => {
    this.setState(
      {
        searchTerm: event.target.value,
      },
      () => {
        this.props.search(event.target.value);
      }
    );
  };
  render() {
    const { searchTerm } = this.state;
    const { currentBooks, searchedBooks } = this.props;

    const searchResults = searchedBooks.map((book) => {
      currentBooks.map((b) => {
        if (b.id === book.id) book.shelf = b.shelf;
        return b;
      });
      return book;
    });

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/'>
            <button className='close-search' onClick={this.props.resetSearch}>
              Close
            </button>
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={searchTerm}
              onChange={this.handleInput}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.props.searchedBooks.length > 0 && searchTerm.length > 0 ? (
              searchResults.map((book, index) => (
                <Book
                  key={index}
                  book={book}
                  addBook={this.props.addBook}
                  shelf={book.shelf ? book.shelf : 'none'}
                />
              ))
            ) : (
              <li>No books match that search, try again</li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

BookList.protoType = {
  addBook: PropTypes.func.isRequired,
  currentBooks: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
};
