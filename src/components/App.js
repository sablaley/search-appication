import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Display from './ProductDisplay';
import JSON from './data.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "Seach Application",
            keywords: "USer TExt HEre",
            productData:JSON
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ keywords: event.target.value ? event.target.value : 'USer TExt HEre' })
    }

    render() {
        return (
            <>
                <Header name={this.state.name} />
                <input type="text" onChange={this.handleChange} />
                <h3>{this.state.keywords}</h3>
                <hr />
                <Display productdata = {this.state.productData} />
                <Footer year='2023' />
            </>
        )
    }
}

export default App;