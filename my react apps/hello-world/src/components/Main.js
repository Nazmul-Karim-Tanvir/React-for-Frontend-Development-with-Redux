import React, { Component } from "react";
import booklist from "../assets/books";
import BookList from "./lists/BookList";
import NewBook from "./represent/NewBook";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booklist,
      showBooks: true
    }
  }





  changeWithInputState = (event, index) => {
    const book = {
      ...this.state.books[index]
    }
    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;

    this.setState({ books: books });

  }

  deleteBookState = index => {
    const books = [...this.state.books];
    //const books = this.state.books.slice();
    //const books = this.state.books.map(item =>item)
    books.splice(index, 1);
    this.setState({
      books: books
    });
  }

  toggleBooks = () => {
    this.setState({
      showBooks: !this.state.showBooks
    });
  }



  render() {


    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "green",
      color: "white",

    }

    let books = null;
    if (this.state.showBooks) {
      books = <BookList
        books={this.state.books} deleteBookState={this.deleteBookState}
        changeWithInputState={this.changeWithInputState} />
    }


    return (
      <div className="App">
        <div className="nav-bar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="new-book">New Book</a>
            </li>
          </ul>
        </div>
        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        {books}
        <NewBook />
      </div>
    );
  }
}

export default Main;
