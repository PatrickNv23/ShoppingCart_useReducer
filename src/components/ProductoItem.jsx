import React from 'react'

export default function ProductoItem({ data, añadirAlCarrito }) {
  return (
    <div>
      <h2>{data.nombre}</h2>
      <p>{data.precio}</p>
      <button onClick={() => añadirAlCarrito(data.id)}>Añadir al carrito</button>
      <hr />
    </div>
  )
}
