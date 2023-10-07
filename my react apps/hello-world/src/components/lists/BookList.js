import React, { Component } from "react";
import Book from "../represent/Books.js";

class BookList extends Component {
  

  render() {
    
    return (
      this.props.books.map((book, index) => {
        return (
          <Book
            bookName={book.bookName}
            writer={book.writer}
            delete={() => this.props.deleteBookState(index)}
            key={book.id}
            inputName={(event) => this.props.changeWithInputState(event, index)}
          />
        );
      })
    );
  }

}
export default BookList;