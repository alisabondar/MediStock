import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { sendStatusCode } from 'next/dist/server/api-utils'

const prisma = new PrismaClient()

export const POST = async (req: NextRequest) => {
  const requestBody = await req.json()
  console.log(requestBody.hello)

  const itemId = requestBody.id
  const itemPar = requestBody.par

  // if you want to test this
  // curl -X POST localhost:3000/api/items/update -H 'content-type: application/json' --data-raw '{"id": 1234, "par": 3}'

  // OR
  // you can use fetch on the frontend to make this request from your react client, e.g.

  fetch('/api/items/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: 1234, par: 3 }),
  })
  await prisma.item.update({
    where: { id: itemId },
    data: { par: itemPar },
  })

  return NextResponse.json({})
}