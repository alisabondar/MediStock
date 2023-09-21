"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../page.module.css'
import Inventory from './Inventory'


export const InventoryList = ({ items }) => {
  const [cart, setCart] = useState<any[]>([]);
  const [cartHover, setCartHover] = useState(false)

  const updatePar = async (id, button) => {
    // try {
    //   const response = await axios.put('/api/par', {itemId: id});
    //   console.log(response.data.message);
    // } catch (err) {
    //   console.error('Cannot add item to cart', err)
    // }
  }

  // const inCart = [];
  const handleCart = async (id) => {
    // const response = await axios.get('/api/testRoute');
    // console.log(response);
    try {
      const response = await fetch(`/api/cart?id=${id}`);
      const data = await response.json();
      const updated = [...cart, data]
      setCart(updated)
    } catch (err) {
      console.error('Cannot add item to cart', err)
    }
  }

  return (
    <div className={styles.inventory}>
      {cart && (
        <div className="cartContainer" onMouseOver={e => setCartHover(true)} onMouseOut={e => setCartHover(false)} >
          <button>Cart ({cart.length} items)</button>
          <div
            className="cartItems"
            style={{
              position: 'absolute',
              marginTop: '12px',
              padding: '12px',
              borderRadius: '2px',
              background: 'white',
              opacity: cartHover ? 1 : 0,
              transition: 'all ease-in-out 0.5s',
              display: 'flex',
              flexDirection: 'column',
            }}>
            {cart.map(item => (<div style={{ padding: '12px' }} key={item.id}>{item.name}</div>))}
            <button style={{background: '#007bff', color: 'white', padding: '12px', borderRadius: '5px', alignSelf: 'center', marginTop: '20px'}}>Proceed To Checkout</button></div>
        </div>
      )}
      <div >
        {items.map(item => (
          <Inventory key={item.id} item={item} handleCart={handleCart} />
        ))}
      </div>

    </div>
  )
}
