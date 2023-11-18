import React, { Component } from 'react';
import Loading from './Loading';

class Home extends Component {
    render() {
        document.title = "Bohubrihi Restaurant";
        return (
            <div>
               {this.props.isLoading ? <Loading /> : null}
                <h1 className="text-center card-title text-primary" >Welcome to Bohubrihi Restaurant</h1>
                <p className="lead">Bohubrihi Restaurant is a place where you can enjoy delicious and authentic Bangladeshi cuisine in a cozy and friendly atmosphere. We offer a variety of dishes, from biryanis and curries to kebabs and desserts, made with fresh and quality ingredients. Whether you are looking for a quick lunch, a family dinner, or a special occasion, we are here to serve you with a smile.</p>
                <p className="text-center"><a href="/menu" className="btn btn-dark">Check out our menu and order online</a></p>
            </div>
        );
    }
}

export default Home;
