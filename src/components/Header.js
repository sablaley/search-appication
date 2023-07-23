import React, { Component } from 'react';
import './display.css';
class Header extends Component {
    constructor(props) {
        super()
        this.state = {
            keywords: 'USer Text Here'
        }
    }
    handleChange = (event) => {
        this.setState({ keywords: event.target.value ?'Product Name : '+ event.target.value : 'USer Text Here' })
        this.props.userInput(event.target.value)
    }
    handle = (event) => {
        console.log(event.target.value);
        this.setState({ keywords: event.target.value ? 'Product Uses : '+event.target.value : 'USer Text Here' })
        this.props.userInputs(event.target.value)
    }
    handle1 = (event) => {
        this.setState({ keywords: event.target.value ?'Product Price : '+ event.target.value : 'USer Text Here' })
        this.props.userInput2(event.target.value)
    }
    render() {
        return (
            <header>
                <h1>{this.props.name}</h1>
                <input type="text" onChange={this.handleChange} placeholder='name'/>
                <input type="text" onChange={this.handle} placeholder='uses'/>
                <input type="text" onChange={this.handle1} placeholder='price' />
                <h3>{this.state.keywords}</h3>

            </header>
        )
    }
}


export default Header;