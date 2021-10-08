import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from '../../my-reads-app/src/components/BookShelf'
import BookSearch from "../../my-reads-app/src/components/BookSearch";

class BooksApp extends React.Component {
  state = {
    mybooks: [],
    searchedBooks: []
  }

  handleAddBook = (book) => {
    this.setState(prevState => {
      const filteredBooks = prevState.mybooks.filter(b => b.id !== book.id)
      return {
        mybooks: [...filteredBooks, book]
      }
    }, () => {
      BooksAPI.update(book, book.shelf).then(b => {

      }).catch(e => {

      })
    })
  }

  handleSearch = (term) => {
    if(term.length > 0){
      BooksAPI.search(term)
      .then((books) => {
        if(books && !books.error){
          this.setState({
              searchedBooks: books.map(book => {
                  const currentLibrary = this.state.mybooks.find(b => b.id === book.id)
                  if(currentLibrary)
                      book.shelf =  currentLibrary.shelf
                  return book
              })
          })
      }
        else {
          this.setState({
            searchedBooks: []
          })
        }
      }).catch(e => {
        this.setState({
          searchedBooks: []
        })
      })
    }
    else{
      this.setState({
        searchedBooks: []
      })
    }
  }

  handleResetSearch = () => {
    this.setState({
        searchedBooks: []
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => (this.setState({
      mybooks: books
    })))
  }

  render() {
    const { mybooks } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf books={mybooks} addBook={this.handleAddBook} />
        )} />
        <Route path="/search" render={() => (
          <BookSearch 
            addBook={this.handleAddBook} 
            currentLibary={mybooks} 
            search={this.handleSearch} 
            searchedBooks={this.state.searchedBooks}
            resetSearch={this.handleResetSearch}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
