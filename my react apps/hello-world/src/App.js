import React, { Component } from "react";
import './App.css';
import Book from "./components/Books";


class App extends Component {
  //State
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
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

  render() {


    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "green",
      color: "white",

    }

    const books = this.state.books.map(book => {
      return (
        <Book
          bookName={book.bookName}
          writer={book.writer}
        />
      );
    });

    console.log(books);

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={() => this.changeBookState("Nineteen Eighty-Four")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState} />
        {books}
      </div>
    );
  }
}

export default App;
