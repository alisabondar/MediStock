'use client'

import { Item } from "@prisma/client"
import { useState } from "react"
import { UpdatePar } from "./UpdatePar"

export const UpdateParButton = ({ item }: { item: Item }) => {
  const [par, setPar] = useState(item.par)

  return (<>
    <button onClick={e => setPar(par + 1)}>Remove</button>
    <UpdatePar id={item.id} par={par} />
  </>
  )
}
