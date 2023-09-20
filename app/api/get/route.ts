import prisma from '../../../prisma/prisma';
import {NextRequest, NextResponse} from 'next/server'

export const GET = async (req: NextRequest) => {
    const items = await prisma.item.findMany({
        include: {vendor: true},
    })

    return NextResponse.json(items)
}