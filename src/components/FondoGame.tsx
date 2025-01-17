type Props = {}
import { useLocation } from "react-router-dom"

function FondoGame({}: Props) {
  const maUrl = useLocation()
  return (
    <article
      className={`relative grid w-full grid-cols-3 bg-[#a5d6cf] pb-6 pt-0 transition duration-500 2xl:pt-24 ${maUrl.pathname != "/" ? "opacity-80 blur-sm brightness-90" : " "}`}
    >
      <div className="absolute bottom-0 flex h-[calc(100%)] w-full flex-col justify-between">
        <span className="-mt-36 w-full">
          <img
            src="/EspolLifeGameChoices/src/assets/Inicio/MergeSky.png"
            alt="none"
          />
        </span>
        <span className="bottom-0 h-32 w-full bg-slate-800/70"></span>
      </div>
      <div className="mx-auto w-4/5">
        <img
          className="drop-shadow-xl"
          src="/EspolLifeGameChoices/src/assets/Inicio/EspolMono.png"
          alt=""
        />
      </div>
      <div className="col-start-3 mx-auto w-3/5">
        <img
          className="drop-shadow-lg"
          src="/EspolLifeGameChoices/src/assets/Inicio/EspolTurtle.png"
          alt=""
        />
      </div>
    </article>
  )
}

export default FondoGame
