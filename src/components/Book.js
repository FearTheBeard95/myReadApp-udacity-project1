import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Book component to render an individual book on a shelf
export default class Book extends Component {
  //Function to handle the switching of a book to another shelf
  handleListSwitch = (e) => {
    this.props.addBook(
      {
        ...this.props.book,
        authors: this.props.book.authors
          ? this.props.book.authors
          : ['Missing author'],
        imageLinks: {
          thumbnail: this.props.book.imageLinks
            ? this.props.book.imageLinks.thumbnail
            : 'http://via.placeholder.com/128x193?text=No%20Cover',
        },
        shelf: this.props.shelf,
      },
      e.target.value
    );
  };
  render() {
    return this.props.book ? (
      <li key={this.props.book.id}>
        <div className='book'>
          <div className='book-top'>
            <div
              className='book-cover'
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${
                  this.props.book.imageLinks
                    ? this.props.book.imageLinks.thumbnail
                    : 'http://via.placeholder.com/128x193?text=No%20Cover'
                }")`,
              }}
            ></div>
            <div className='book-shelf-changer'>
              <select onChange={this.handleListSwitch} value={this.props.shelf}>
                <option value='move' disabled>
                  Move to...
                </option>
                <option value='currentlyReading'>Currently Reading</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Read</option>
                <option value='none'>None</option>
              </select>
            </div>
          </div>
          <div className='book-title'>
            {this.props.book ? this.props.book.title : ''}
          </div>
          {this.props.book.authors ? (
            <div className='book-authors'>
              {this.props.book.authors.join(',')}
            </div>
          ) : (
            <div className='book-authors'>Missing author</div>
          )}
        </div>
      </li>
    ) : (
      <p>its lonely here</p>
    );
  }
}

Book.protoType = {
  addBook: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
};
