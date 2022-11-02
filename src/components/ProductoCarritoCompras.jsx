import React from 'react'

export default function ProductoCarritoCompras({ data, eliminarDelCarrito }) {
  return (
    <div>
      <h2>{data.nombre}</h2>
      <p>{data.precio}</p>
      <button onClick={() => eliminarDelCarrito(data.id)}>Eliminar del carrito</button>
      <hr />
    </div>
  )
}
