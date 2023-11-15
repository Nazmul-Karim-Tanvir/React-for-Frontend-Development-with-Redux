import React,{Component} from 'react';
import './App.css';
//import fetch from 'cross-fetch';
import axios from 'axios';

class App extends Component{
  componentDidMount(){
  //  fetch('https://jsonplaceholder.typicode.com/posts')
  //  .then(response => response.json())
  //  .then(data => console.log(data));
  // axios.get('http://localhost:3001dishes')
  // .then(response => response.data)
  // .then(data => console.log(data))
  // .catch(error => console.log(error.message));

  // axios.post('http://localhost:3001/dishes', {name:"pizza",price:'799'})
  // .then(response => console.log(response));

  // axios.put('http://localhost:3001/dishes/1', {name:"Cheese Cake",price:'250'})
  // .then(response => console.log(response));

  axios.delete('http://localhost:3001/dishes/5')
  .then(response => console.log(response));
  }

  render(){
    return(
      <div>


      </div>
    );
  }
}

export default App;
