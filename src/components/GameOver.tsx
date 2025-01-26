import { useStatStore } from "@/AStore/AStore"
import { useCardStore } from "@/AStore/AStore"

import Victoria from "@/assets/Victoria.png"
import Derrota from "@/assets/derrota.png"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"

type Props = {}

function GameOver({}: Props) {
  const navegador = useNavigate()
  const isGameOver = useStatStore((state) => state.isGameOver)
  const playerInfo = useStatStore((state) => state.playerInfo)
  const cleanCardStore = useCardStore((state) => state.cleanCardStore)
  const cleanStatStore = useStatStore((state) => state.cleanStatStore)

  const checkVictory = (): boolean => {
    const { conocimiento, ...otherStats } = playerInfo
    const highStats = Object.values(otherStats).filter((stat) => stat >= 60)
    return conocimiento >= 70 && highStats.length >= 2
  }

  const handleResetGame = () => {
    cleanCardStore()
    cleanStatStore()
    navegador("/")
  }

  return (
    <div className="flex w-full flex-col items-center rounded-md bg-slate-900 p-12 text-slate-200">
      <h2 className="text-center text-3xl font-semibold">
        {checkVictory() ? "¡Victoria!" : "Derrota"}
      </h2>
      <div className="mx-auto my-4 w-52 2xl:w-96">
        <img
          src={isGameOver && checkVictory() ? Victoria : Derrota}
          alt="GameOver"
        />
      </div>
      <p className="text-center text-lg">
        Tu promedio final fue de:{" "}
        {Math.round(
          ((playerInfo.conocimiento * 6) / 7 +
            playerInfo.energia +
            playerInfo.social) /
            3,
        )}
        %
      </p>
      <Link to={"/"}>
        <Button
          className="mt-4 bg-gray-600 hover:bg-gray-800"
          size="amongus"
          onClick={() => handleResetGame()}
        >
          Volver a Jugar
        </Button>
      </Link>
    </div>
  )
}

export default GameOver
