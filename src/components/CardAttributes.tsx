import { categorias, PlayerInfoT } from "@/types"
import SocialImg from "@/assets/social.png"
import EnergiaImg from "@/assets/energia.png"
import MoneyImg from "@/assets/money.png"
import ConocimientoImg from "@/assets/conocimiento.png"

type Props = {
  info: PlayerInfoT
}

function CardAttributes({ info }: Props) {
  const { conocimiento, energia, social, money } = info
  const maConocimiento = [conocimiento, social, money, energia]
  const maImgs = [ConocimientoImg, SocialImg, MoneyImg, EnergiaImg]
  const attibutos = [] as JSX.Element[]
  maConocimiento.forEach((atti, index) => {
    if (atti != 0) {
      attibutos.push(
        <span className="font-Bungee flex items-center gap-0 text-xl text-slate-800">
          <img className="size-8" src={maImgs[index]} alt={categorias[index]} />
          {atti > 0 ? `+${atti}` : atti}
        </span>,
      )
    }
  })
  return (
    <div className="flex w-full justify-center gap-3">{[...attibutos]}</div>
  )
}

export default CardAttributes
