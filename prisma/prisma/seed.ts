import { faker } from "@faker-js/faker"
import prisma from '../prisma'

(async () => {
  // create array
  const vendors = [];
  for (let i = 0; i < 10; i++) {
    const vendor = await prisma.vendor.create({
      data: {
        name: faker.company.name(),
      },
    });
    vendors.push(vendor);
  }

  // use indexes of array to create foreign key
  for (let i = 0; i < 50; i++) {
    const randomVendor = vendors[Math.floor(Math.random() * vendors.length)];
    await prisma.item.create({
      data: {
        name: faker.commerce.productName(),
        price: faker.number.float({ max: 5000, precision: 0.01 }),
        par: faker.number.int({ max: 50 }),
        vendorId: randomVendor.id
      },
    });
  }
})();