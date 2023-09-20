import Link from 'next/link'
import prisma from '../prisma/prisma'
// import Item from './components/Item'
import styles from './page.module.css'

const Home = async () => {
  const items = await prisma.item.findMany({
    include: { vendor: true }
  });


  return (
    <div>
      <header className={styles.header}>
        <Link href='/new' className=''>Add Item</Link>
        {/* <Cart /> */}
      </header>
      <div className={styles.main}>
        <div className={styles.inventory}>
          {items.map(item => (
            <div key={item.id} className={styles.card}>
              <h2>Product Name: {item.name}</h2>
              <span>{item.vendor.name}</span>
              <span>Price: ${item.price}</span>
              <span>Par: {item.par}</span>
              {/* <UpdateParButton item={item}/> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
