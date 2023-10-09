import React, { Component } from "react";
import booklist from "../assets/books";
import BookList from "./lists/BookList";
import NewBook from "./represent/NewBook";
import { Routes, Route, NavLink } from "react-router-dom";
import SignIn from "./auth/SignIn.jsx";
import PrivateRoute from "./auth/PrivateRoute";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booklist
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




  render() {


    const books = <BookList
      books={this.state.books} deleteBookState={this.deleteBookState}
      changeWithInputState={this.changeWithInputState} />


    return (
      <div className="App">
        <div className="nav-bar">
          <ul>
            <li>
              <NavLink to="/">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/books">Books</NavLink>
            </li>
            <li>
              <NavLink to="/new-book">New Book</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/books" element={books}></Route>
            <Route path="/new-book" element={<NewBook />}></Route>
          </Route>

        </Routes>
      </div>
    );
  }
}

export default Main;
