import React, { Component } from 'react'

class Display extends Component {
    constructor(props) {
        super();
        console.log(props.productdata);
    }
  render() {
    
    return (
      <div>ProductDisplay</div>
    )
  }
}

export default Display