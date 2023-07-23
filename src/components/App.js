import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Display from './ProductDisplay';
import JSON from './data.json';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Search Application',
            productData: JSON,
            filterData: '',
            thirdData: '',
            fourthData: '',
            displayData: JSON
        }
    }
    filteredData = (data) => {
        const output = this.state.productData.filter((item) => {
            return item.name.toLowerCase().indexOf(data.toLowerCase()) > -1
        })
        console.log(output);
        this.setState({
            filterData: output,
            displayData: output 
        })
    }
    filteredSecond = (data) => {
        const output = this.state.filterData.filter((item) => {
            return item.uses.toLowerCase().indexOf(data.toLowerCase()) > -1
        })
        console.log(output);
        this.setState({
            thirdData: output,
            displayData: output
        })
    }
    filteredS = (data) => {
        const output = this.state.thirdData.filter((item) => {
            return item.cost.indexOf(data) > -1
        })
        console.log(output);
        this.setState({
            fourthData: output,
            displayData: output
        })
    }
    render() {
        return (
            <>
                <Header name={this.state.name}
                    userInput={(data) => this.filteredData(data)}
                    userInputs={(d) => this.filteredSecond(d)}
                    userInput2={(d) => this.filteredS(d)}
                />

                <Display productdata={this.state.displayData} />
                <Footer year='2023' />
            </>
        )
    }
}

export default App;