import { NextResponse } from 'next/server';
import prisma from '../../../prisma/prisma';

// req : NextRequest
export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (req.method === 'GET') {
        try {
            const item = await prisma.item.findUnique({
                where: { id: parseInt(id, 10) },
            });

            if (!item) {
                return NextResponse.json({ error: 'Item not found' });
            }

            return NextResponse.json(item);
        } catch {
            NextResponse.json({ error: 'Cannot create item in database' })
        }
    } else {
        NextResponse.json({ error: 'Cannot fetch database' });
    }
}