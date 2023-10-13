import React, { Component } from "react";
import booklist from "../assets/books";
import BookList from "./lists/BookList";
import NewBook from "./represent/NewBook";
import { Routes, Route, NavLink } from "react-router-dom";
import BookDetail from "./represent/BookDetail";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booklist,
      selectedBook: null
    }
  }

  selectedBookHandler = (bookId) => {
    console.log(bookId);
    const book = this.state.books.filter((book) => book.id === bookId)[0];
    this.setState({
      selectedBook: book,
    });
  };
  render() {


    const books = <BookList
      books={this.state.books} selectedBookHandler={this.selectedBookHandler} />


    return (
      <div className="App">
        <div className="nav-bar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/new-book">New Book</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={books}></Route>
          <Route path="/new-book" element={<NewBook />}></Route>
          <Route path="/:id" element={<BookDetail book={this.state.selectedBook} />}> </Route>
        </Routes>
      </div>
    );
  }
}

export default Main;
