import React, { Component } from "react";

// function component
// function Person(props) {
//     return (
//         <div>
//             <h1>Name:{props.name} Age: {props.age}</h1>
//             <h4>Contect: {props.children} </h4>
//         </div>
//     );
// }

//class component

class Person extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Name:{this.props.name} Age: {this.props.age}</h1>
                <h4>Contect: {this.props.children} </h4>
            </div>
        );
    }
}


export default Person;