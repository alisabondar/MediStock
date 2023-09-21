import Link from 'next/link';
import { redirect } from 'next/navigation';
import prisma from '../../prisma/prisma';
import styles from '../page.module.css';

const Cart = () => {
  return (
    <div>
      Hello
    </div>
  )
}

export default Cart;

//<form action={postItem} className={styles.form}>
//<label>Product Name:
//  <input type='text' name='name' />
//</label>
//{/* add dropdown of vendors with create new at bottom */}
//<label>Vendor:
//  <input type='text' name='vendor' />
//</label>
//<label>Price:
//  <input type='text' name='price' />
//</label>
//<label>Par:
//  <input type='text' name='par' />
//</label>
//<div id='buttonContainer'>
//  <Link href='..' className={styles.button}>Cancel</Link>
//  <button type='submit' className={styles.button}>Submit</button>
//</div>
//</form>