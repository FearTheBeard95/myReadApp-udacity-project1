import React, { Component } from 'react';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: 'none',
    };
  }

  handleListSwitch = (e) => {
    this.setState(
      {
        shelf: e.target.value,
      },
      () => {
        this.props.addBook({
          ...this.props.book,
          authors: this.props.book.authors
            ? this.props.book.authors
            : ['Missing author'],
          imageLinks: {
            thumbnail: this.props.book.imageLinks
              ? this.props.book.imageLinks.thumbnail
              : '',
          },
          shelf: this.state.shelf,
        });
      }
    );
  };

  componentDidMount() {
    this.setState({
      shelf: this.props.book.shelf ? this.props.book.shelf : 'none',
    });
  }

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
                    : ''
                }")`,
              }}
            ></div>
            <div className='book-shelf-changer'>
              <select onChange={this.handleListSwitch} value={this.state.shelf}>
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
            this.props.book.authors.map((author, index) => (
              <div key={index} className='book-authors'>
                {author}
              </div>
            ))
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
