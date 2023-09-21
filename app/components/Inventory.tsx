"use client"
import { useState } from 'react';
// import axios from 'axios';
import styles from '../page.module.css';

const Inventory = ({ item, handleCart }) => {

  return (
    <div key={item.id} className={styles.card}>
      <h2>Product Name: {item.name}</h2>
      <span>{item.vendor.name}</span>
      <span>Price: ${item.price}</span>
      <span>Par: {item.par}</span>
      {/* <button onClick={() => updatePar(item.id, '+')}>+</button>
      <button onClick={() => updatePar(item.id, '-')}>-</button> */}
      <button onClick={() => handleCart(item.id)} className={styles.add}>Add to Cart</button>
    </div>
  )
}

export default Inventory;