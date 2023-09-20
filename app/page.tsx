import Link from 'next/link'
import prisma from '../prisma/prisma'
// import Item from './components/Item'
import Image from 'next/image'
import logo from './favicon.png'
import styles from './page.module.css'

const Home = async () => {
  const items = await prisma.item.findMany({
    include: { vendor: true }
  });


  return (
    <div>
      <header className={styles.header}>
        <Image src={logo} width={140} height={140} alt='MediStock Pro Logo'/>
        <div className={styles.title}>MediStock Pro</div>
        {/* <Cart /> */}
      </header>
      <div className={styles.list}>
        <h2>Current Inventory</h2>
        <Link href='/new' className={styles.add}>Add Item</Link>
      </div>
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
