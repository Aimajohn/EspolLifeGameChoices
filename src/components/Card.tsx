// import cardData from "../assets/cartas.json"

import React from "react"
import { CartaT } from "../types"

type Props = {
  id: string
  info: CartaT
  seleccionado: React.Dispatch<React.SetStateAction<CartaT | null>>
}

function Card({ info }: Props) {
  return (
    <span className="w-full cursor-pointer">
      <img title={info.id} className="w-full" src={info.src} />
    </span>
  )
}

export default Card
