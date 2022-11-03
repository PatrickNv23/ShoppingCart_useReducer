import React from 'react'
import styles from '../styles/ProductItem.module.css';
export default function ProductoItem({ data, addToCart }) {
  return (
    <div className={styles.container_product}>
      <h2>{data.name}</h2>
      <p>Price: {data.price}</p>
      <button className={styles.btnProduct} onClick={() => addToCart(data.id)}>Add to Cart</button>
    </div>
  )
}
