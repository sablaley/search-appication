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
            keyword: "USer TExt HEreee"
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ keyword: event.target.value ? event.target.value : 'USer TExt HEre' })
    }

    render() {
        return (
            <>
                <Header name={this.state.name} />
                <input type="text" onChange={this.handleChange} />
                <h3>{this.state.keyword}</h3>
                <hr />
                <Display productdata = {this.state.productData} />
                <Footer year='2023' />
            </>
        )
    }
}

export default App;