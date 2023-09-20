import Link from 'next/link';
import { redirect } from 'next/navigation';
import prisma from '../../prisma/prisma';
import styles from '../page.module.css';

const postItem = async (data: FormData) => {
  "use server"

  const name = data.get('name')?.valueOf();
  const vendorName = data.get('vendor')?.valueOf() || 'unknown';
  const price = Number(data.get('price')?.valueOf()) || 0;
  const par = Number(data.get('par')?.valueOf()) || 0;

  if (name.length === 0) {
    // hot toast notif
    throw new Error('Invalid Product Name');
  }

  // check if vendor exists first
  try {
    let vendorExists = await prisma.vendor.findUnique({
      where: { name: vendorName }
    });

    await prisma.item.create({
      data: {
        name,
        price,
        par,
        vendor: {
          connect: {
            id: vendorExists.id,
          },
        },
      },
    });
  } catch (err) {
    let vendorAvail = await prisma.vendor.create({
      data: {
        name: vendorName
      }
    })

    await prisma.item.create({
      data: {
        name,
        price,
        par,
        vendor: {
          connect: {
            id: vendorAvail.id,
          },
        },
      },
    });
  }
  redirect('/')
}

const NewItem = () => {
  return (
    <div className={styles.main}>
      <form action={postItem} className={styles.form}>
        <label>Product Name:
          <input type='text' name='name' />
        </label>
        {/* add dropdown of vendors with create new at bottom */}
        <label>Vendor:
          <input type='text' name='vendor' />
        </label>
        <label>Price:
          <input type='text' name='price' />
        </label>
        <label>Par:
          <input type='text' name='par' />
        </label>
        <div id='buttonContainer'>
          <Link href='..' className={styles.button}>Cancel</Link>
          <button type='submit' className={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NewItem;