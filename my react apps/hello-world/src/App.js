import React, { Component } from "react";
import './App.css';
import Person from "./components/Person";


//function component 
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <Person name="Nazmul" age="25">01867064697</Person>
//       <Person name="Karim" age="27">01778814577</Person>
//       <Person name="Tanvir" age="25">0157546555</Person>
//       <Person name="Tani" age="27">1015451515</Person>
//     </div>
//   );
// }

// class component 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Person name="Nazmul" age="25">01867064697</Person>
        <Person name="Karim" age="27">01778814577</Person>
        <Person name="Tanvir" age="25">0157546555</Person>
        <Person name="Tani" age="27">1015451515</Person>
      </div>
    );
  }
}

// function Person(){
//   return (
//     <div>
//       <h1>Hello World 2 From Person</h1>
//     </div>
//   );
// }

export default App;
