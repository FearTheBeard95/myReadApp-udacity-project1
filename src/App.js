import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './components/BookShelf';
import BookSearch from './components/BookSearch';

//Main app component that renders the entire application
class BooksApp extends React.Component {
  state = {
    mybooks: [],
    searchedBooks: [],
  };

  shelves = [
    {
      id: 'currentlyReading',
      title: 'Currently Reading',
    },
    {
      id: 'wantToRead',
      title: 'Want to Read',
    },
    {
      id: 'read',
      title: 'Read',
    },
  ];

  //Function to handle the adding of a book the users library on a given shelf
  handleAddBook = (book, shelf) => {
    let mybooks = this.state.mybooks.filter((b) => b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf;
      mybooks = [...mybooks, book];
    }

    this.setState(
      {
        mybooks,
      },
      () => {
        BooksAPI.update(book, shelf).catch((e) => {});
      }
    );
  };

  //Function to handle the searching of books that can be added to the users library
  handleSearch = (term) => {
    if (term.length > 0) {
      BooksAPI.search(term)
        .then((books) => {
          if (books && !books.error) {
            this.setState({
              searchedBooks: books,
            });
          } else {
            this.setState({
              searchedBooks: [],
            });
          }
        })
        .catch((e) => {
          this.setState({
            searchedBooks: [],
          });
        });
    } else {
      this.setState({
        searchedBooks: [],
      });
    }
  };

  //Function to reset the searched books when switching back to the home screen
  handleResetSearch = () => {
    this.setState({
      searchedBooks: [],
    });
  };

  //Get the all the books that are currently in the users library, even after refreshing the page
  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({
        mybooks: books,
      })
    );
  }

  render() {
    const { mybooks } = this.state;
    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => (
            <BookShelf
              books={mybooks}
              addBook={this.handleAddBook}
              shelves={this.shelves}
            />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <BookSearch
              addBook={this.handleAddBook}
              currentBooks={mybooks}
              search={this.handleSearch}
              searchedBooks={this.state.searchedBooks}
              resetSearch={this.handleResetSearch}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
