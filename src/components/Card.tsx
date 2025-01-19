// import cardData from "../assets/cartas.json"

import { CartaT } from "../types"

type Props = {
  id: string
  info: CartaT
}

function Card({ info }: Props) {
  return (
    <span className="cursor-pointer">
      <img title={info.id} className="object-cover" src={info.src} />
    </span>
  )
}

export default Card
