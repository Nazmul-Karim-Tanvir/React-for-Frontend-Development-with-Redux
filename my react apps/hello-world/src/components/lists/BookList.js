import React, { Component } from "react";
import Book from "../represent/Books.js";

class BookList extends Component {
  constructor(props) {
    super(props);
    console.log("Booklist Constructor");
  }



  componentDidMount() {
    console.log("Booklist componentDidMount");
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log("U Booklist shouldComponentUpdate", nextProps, nextState);
    return true;
  }



  componentDidUpdate() {
    console.log("U Booklist componentDidUpdate");
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("Booklist getDerivedStateFromProps", nextProps, nextState);
  }

  getSnapshotBeforeUpdate(){
    console.log("U Booklist getSnapshotBeforeUpdate");
  }

  render() {
    console.log("Booklist render");
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