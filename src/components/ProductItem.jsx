import React from 'react'

export default function ProductoItem({ data, addToCart }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.price}</p>
      <button onClick={() => addToCart(data.id)}>Add to Cart</button>
      <hr />
    </div>
  )
}
