import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

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
              this.props.searchedBooks.map((book, index) => (
                <Book key={index} book={book} addBook={this.props.addBook} />
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
