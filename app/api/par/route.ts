import prisma from '../../../prisma/prisma';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { itemId } = req.body;

    const item = await prisma.item.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    return res.status(200).json({ message: 'Item added to cart successfully' });
  } else {
    res.status(405).end(); // Method not allowed
  }
}