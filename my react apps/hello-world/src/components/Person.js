import React from "react";


function Person(props) {
    return (
        <div>
            <h1>Name:{props.name} Age: {props.age}</h1>
            <h4>Contect: {props.children} </h4>
        </div>
    );
}

export default Person;