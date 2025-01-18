// import cardData from "../assets/cartas.json"

import { CartaT } from "../types"

type Props = {
  id: string
  info: CartaT
}

function Card({ info }: Props) {
  return (
    <span className="max-h-[274px] w-full cursor-pointer">
      <img title={info.id} className="w-full" src={info.src} />
    </span>
  )
}

export default Card
