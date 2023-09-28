import React,{Component} from "react";
import './App.css';
import Person from "./components/Person";


//function component 
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <Person/>
//     </div>
//   );
// }

// class component 
class App extends Component{
  render(){
    return (
          <div className="App">
            <h1>Hello World</h1>
            <Person/>
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
