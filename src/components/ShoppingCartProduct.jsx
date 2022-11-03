import React from 'react'
import styles from '../styles/ShoppingCartProduct.module.css';
export default function ProductoCarritoCompras({ data, deleteFromCart }) {
  return (
    <div className={styles.container_productCart}>
      <h2>{data.name}</h2>
      <p>Price: {data.price}</p>
      <button className={styles.btnProductCart} onClick={() => deleteFromCart(data.id)}>Delete from Cart</button>
    </div>
  )
}
