import Link from 'next/link'
import prisma from '../prisma/prisma'
import Image from 'next/image'
import logo from './favicon.png'
import styles from './page.module.css'
import Inventory from './components/Inventory'
import { InventoryList } from './components/InventoryList'

const Home = async () => {

  const items = await prisma.item.findMany({
    include: { vendor: true }
  });

  return (
    <div>
      <header className={styles.header}>
        <Image src={logo} width={140} height={140} alt='MediStock Pro Logo' />
        <div className={styles.title}>MediStock Pro</div>
      </header>
      <div className={styles.list}>
        <h2>Current Inventory</h2>
        <Link href='/new' className={styles.add}>Add Item</Link>
      </div>
      <div className={styles.main}>
        <InventoryList items={items} />
      </div>
    </div>
  );
}

export default Home;
