import React from 'react'

export default function ProductoCarritoCompras({ data, deleteFromCart }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.price}</p>
      <button onClick={() => deleteFromCart(data.id)}>Delete from Cart</button>
      <hr />
    </div>
  )
}
