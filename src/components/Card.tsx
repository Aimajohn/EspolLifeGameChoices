// import cardData from "../assets/cartas.json"

import { CartaRetoT, CartaT } from "../types"

type Props = {
  id: string
  info: CartaT | CartaRetoT
}

function Card({ info }: Props) {
  return (
    <span className="cursor-pointer">
      <img title={info.id} className="object-cover" src={info.src} />
    </span>
  )
}

export default Card
