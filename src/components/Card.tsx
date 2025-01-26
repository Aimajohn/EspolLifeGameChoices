// import cardData from "../assets/cartas.json"

import { PlayerInfoT } from "../types"
import CardAttributes from "./CardAttributes"

type Props = {
  id: string
  src: string
  maInfo: PlayerInfoT
}

function Card({ id, src, maInfo }: Props) {
  return (
    <div className="relative w-full cursor-pointer">
      <img title={id} className="rounded-xl object-cover" src={src} />
      <div className="absolute bottom-[12%] h-1/5 w-full px-[10%]">
        <CardAttributes info={maInfo} />
      </div>
    </div>
  )
}

export default Card
