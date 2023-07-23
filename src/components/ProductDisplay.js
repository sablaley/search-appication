

import React from 'react'

function Display(props) {
  const renderProduct = props.productdata.map((item,index) => {
     return (
      <div className='card' key={index}>
        <img src={item.image} alt={item.name} />
        <h4>Product Name: {item.name}</h4>
        <p>Brand: {item.brand}</p>
        <p>Discount: {item.discount}</p>
        <p>Uses: {item.uses}</p>
        <p>Price: Rs.{item.cost}</p>
      </div>
     )
  })
  return (
    <div className='main'>
      {renderProduct}
    </div>
  )
}

export default Display