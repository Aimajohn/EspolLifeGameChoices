// import cardData from "../assets/cartas.json"

import React from "react"
import { CartaT } from "../types"

type Props = {
  id: string
  info: CartaT
  seleccionado: React.Dispatch<React.SetStateAction<CartaT | null>>
}

function Card({ info, seleccionado }: Props) {
  const handleCard = () => {
    const carta = info
    seleccionado(carta)
  }
  console.log(info.src, URL.parse(info.src, "http://127.0.0.1:5173/"))

  return (
    <div className="cursor-pointer" onClick={() => handleCard()}>
      <div className="">
        <img title={info.id} className="w-full" src={info.src} />
      </div>
    </div>
  )
}

export default Card
