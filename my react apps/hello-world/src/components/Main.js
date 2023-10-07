import React, { Component } from "react";
import booklist from "../assets/books";
import BookList from "./lists/BookList";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booklist,
      showBooks: true
    }
    console.log("MainComponent Constructor");
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



  componentDidMount() {
    console.log("MainComponent componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("U MainComponent shouldComponentUpdate", nextProps, nextState);
    return true;
  }
  componentDidUpdate() {
    console.log("U MainComponent componentDidUpdate");
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("MainComponent getDerivedStateFromProps", nextProps, nextState);
  }
  getSnapshotBeforeUpdate(){
    console.log("U MainComponent getSnapshotBeforeUpdate");
  }

  render() {
    console.log("MainComponent render");

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

    console.log(books);

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        {books}
      </div>
    );
  }
}

export default Main;
