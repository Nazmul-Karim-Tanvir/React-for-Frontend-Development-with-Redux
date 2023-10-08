import React, { Component } from "react";
import booklist from "../assets/books";
import BookList from "./lists/BookList";
import NewBook from "./represent/NewBook";
import { Routes,Route } from "react-router-dom";

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/new-book">New Book</a>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/new-book" element={<h1>New Book</h1>}></Route>
        </Routes>
      </div>
    );
  }
}

export default Main;
