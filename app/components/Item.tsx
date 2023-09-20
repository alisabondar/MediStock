
import {useState} from 'react';
import styles from '../page.module.css'
import prisma from '../../prisma/prisma'
import fetchItems from '../api/get/route'
// import { UpdateParButton } from './UpdateParButton';

const Item = async ({ id }: {id: number}) => {
  const item = await prisma.item.findFirst({
    where: {
      id: id
    }
  })

  if (!item) {
    return null
  }

  const itemVendor = await prisma.vendor.findUnique({
    where: {
      id: item.vendorId
    }
  })

  return (
    <div key={id} className={styles.card}>
      <span>Product Name: {item.name}</span>
      <span>Vendor: {itemVendor ? itemVendor.name : 'unknown'}</span>
      <span>Price: {item.price}</span>
      <span>Par: {item.par}</span>
      {/* <UpdateParButton item={item}/> */}
    </div>
  )
}

export default Item;
