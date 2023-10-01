import React, { Component } from "react";
import './App.css';
import Book from "./components/Books";


class App extends Component {
  //State
  state = {
    books: [
      { id: 1, bookName: "1984", writer: "George Orwell" },
      { id: 2, bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { id: 3, bookName: "The Alchemist", writer: "Paulo Coelho" }
    ]
  }

  changeBookState = newBookName => {
    // wrong: this.state.books[0].bookName ="1975"
    this.setState({
      books: [
        { bookName: newBookName, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" }
      ]
    });
  }
  changeWithInputState = event => {
    this.setState({
      books: [
        { bookName: event.target.value, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" }
      ]
    });
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
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "green",
      color: "white",

    }

    const books = this.state.books.map((book, index) => {
      return (
        <Book
          bookName={book.bookName}
          writer={book.writer}
          delete={() => this.deleteBookState(index)}
          key={book.id}
        />
      );
    });

    console.log(books);

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        {books}
      </div>
    );
  }
}

export default App;
